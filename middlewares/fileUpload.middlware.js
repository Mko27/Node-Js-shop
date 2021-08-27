const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('destination', { file })
        cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {
        console.log({ file })
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,                   
    limits: {fileSize: 1000000}
})

const multerImageUpload = upload.single('image')

module.exports = {
    multerImageUpload
}