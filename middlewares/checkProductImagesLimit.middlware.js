const models = require('../models')
const { Image } = models
const { ErrorsUtil } = require('../utils/index')
const { ImageLimitError } = ErrorsUtil

module.exports = {
    checkProductImagesLimit: (req, res, next) => {
        const productId = parseInt(req.params.id, 10)

        return Image.productImagesCount(productId)
        .then((count) => {
            if(count + req.files.length > 5) {
                return next(new ImageLimitError('Image limit is exceeded'))
            }

            return next()
        })
        .catch(next)
    } 
}