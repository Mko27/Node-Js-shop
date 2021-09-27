const models = require('../models')
const { Tag } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError } = ErrorsUtil

module.exports = {
    checkSlugOrTitle: (req, res, next) => {
        const slug = req.body.slug
        const title = req.body.title

        return Tag.findBySlugOrTitle(slug, title)
            .then((tag) => {
                if(tag) {
                    return next(new ExistNameError('This tag existed'))
                }

                return next()
            })
            .catch(next)
    }
}