const models = require('../../models')
const { Product, City, Image } = models
const Promise = require('bluebird')

const getAllProducts = (req, res, next) => {
  return Product.getProducts()
    .then((announcements) => {
      return res.render('announcements', { announcements: announcements.rows })
    })
    .catch(next)
}

const appendCities = (req, res, next) => {
  return City.getCities()
    .then((cities) => {
      res.locals.__cities = cities
      next()
    })
    .catch(next)
}

const createAnnouncementForm = (req, res, next) => {
  return res.render('createAnnouncement')
}

const createAnnouncement = (req, res, next) => {
  const data = req.body
  data.status = 'Unpublished'
  data.userId = req.user.id
  console.log('files', req.files)
  console.log('params ', req.params)
  return Product.createProduct(data)
    .then(() => res.redirect('/products/my-announcements/add'))
    .catch(next)
}

const userAnnouncements = (req, res, next) => {
  const userId = parseInt(req.user.id, 10)

  return Product.findByUserId(userId)
    .then((announcements) => {
      return res.render('userAnnouncements', { announcements: announcements.rows })
    })
    .catch(next)
}

const userProductImages = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  return Image.findByProductId(productId)
    .then((images) => res.render('productImages', { images }))
    .catch(next)
}

const deleteProductById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  return Product.deleteProduct(data)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

const updateProductById = (req, res, next) => {
  const elem = parseInt(req.params.id, 10)
  const data = req.body
  if (data.status === 'Published') {
    data.publishedAt = new Date()
  }
  return Product.updateProduct(data, elem)
    .then(() => res.json({ msg: 'Successfully updated' }))
    .catch(next)
}

const createImages = (req, res, next) => {
  const data = req.files
  console.log('files ', req.files)
  const userId = parseInt(req.user.id, 10)
  const productId = parseInt(req.params.id, 10)
  return Promise.map(data, (image, index) => {
    image.userId = userId
    image.productId = productId
    image.order = index + 1
    image.thumb = false
    if (image.order === 1) {
      image.thumb = true
    }
    image.path = image.basePath
    console.log({ image })
    const createData = image
    return Image.createImage(createData)
      .then((result) => console.log(result))
      .catch(next)
  })
    .then(() => res.send('ok'))
    .catch(next)
}

module.exports = {
  getAllProducts,
  appendCities,
  createAnnouncementForm,
  createAnnouncement,
  deleteProductById,
  userAnnouncements,
  updateProductById,
  userProductImages,
  createImages
}
