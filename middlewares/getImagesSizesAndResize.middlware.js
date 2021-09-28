const sharp = require('sharp')
const Promise = require('bluebird')

module.exports = {
  getImageSizes: (req, res, next) => {
    const images = req.files
    return Promise.map(images, (image) => {
      return sharp(image.path).metadata()
        .then((data) => {
          image.originalWidth = data.width
          image.originalHeight = data.height
        })
        .catch(next)
    })
      .then(() => next())
      .catch(next)
  }

}
