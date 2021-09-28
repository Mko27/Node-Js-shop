const fs = require('fs')
const path = require('path')

const deleteImagesFiles = (images) => {
  images.forEach((image) => {
    fs.unlink(path.resolve(__dirname, '../public/' + image.path), (err) => {
      if (err) {
        console.error(err)
      }
    })
  })
}

module.exports = {
  deleteImagesFiles
}
