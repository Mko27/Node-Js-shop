const models = require('../../models')
const { Tag } = models

const getAllTags = (req, res, next) => {
    return Tag.getAllTags()
        .then(tags => res.render('tags', { tags }))
        .catch(next)
}

const createTag = (req, res, next) => {
    const data = req.body
    return Tag.createTag(data)
      .then(() => res.json({ msg: 'Successfully created' }))
      .catch(next)
}

module.exports = {
    getAllTags,
    createTag
}