const models = require('../../models')
const { Product, City } = models

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

const editAnnouncementForm = (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  return Product.findById(id).then((product) => {
    res.render('editAnnouncement', { product })
  }).catch()
}

const createAnnouncement = (req, res, next) => {
  const data = req.body
  data.status = 'Unpublished'
  data.UserId = req.user.id

  return Product.createProduct(data)
    .then(() => res.redirect('/products/my-announcements/add'))
    .catch(next)
}

const userAnnouncements = (req, res, next) => {
  const UserId = req.user.id

  return Product.findByUserId(UserId)
    .then((announcements) => {
      return res.render('userAnnouncements', { announcements: announcements.rows })
    })
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

module.exports = {
  getAllProducts,
  appendCities,
  createAnnouncementForm,
  createAnnouncement,
  deleteProductById,
  userAnnouncements,
  updateProductById,
  editAnnouncementForm
}
