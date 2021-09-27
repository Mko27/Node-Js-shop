const models = require('../models')
const { Image } = models
const fs = require('fs')
const path = require('path')

const imageDelete = (id) => {
    return Image.findById(id)
        .then((image) => {
            fs.unlink(path.resolve(__dirname, '../public/' + image.path), (err) => {
                if (err) {
                  console.error(err)
                }
              })
        })
        .catch(err => console.log(err))
}

module.exports = {
    imageDelete
}