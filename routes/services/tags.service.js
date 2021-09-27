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

const deleteTag = (req, res, next) => {
  const id = parseInt(req.params.id, 10)

  return Tag.deleteById(id)
    .then(() => res.json({ msg: 'successfully deleted' }))
    .catch(next)
}

const updateTag = (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  const data = req.body

  return Tag.updateById(id, data)
    .then(() => res.json({ msg: 'successfully updated' }))
    .catch(next)
}

module.exports = {
  getAllTags,
  createTag,
  deleteTag,
  updateTag
}
