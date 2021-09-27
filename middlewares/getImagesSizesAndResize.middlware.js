const sharp = require('sharp')
const path = require('path')
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
    },

    resizeImage: (req, res, next) => {
        const images = req.files
        return Promise.map(images, (image) => {
            sharp(image.path)
                .resize(300, 300)
                .toFile(path.resolve(__dirname, '../public/images/products/resized/' + image.filename))

            return sharp(path.resolve(__dirname, '../public/images/products/resized/' + image.filename)).metadata()
                .then((data) => {
                    image.path = data.path
                    image.width = data.width
                    image.height = data.height
                })
                .catch(next)
        })
        .then(() => next())
        .catch(next)
    }

}