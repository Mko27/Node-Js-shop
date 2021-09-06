const multer = require('multer')
const path = require('path')

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
  }
}

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
  fileFilter: fileFilter,
  limits: { fileSize: 1000000 }
})

const multerImageUpload = upload.single('image')

module.exports = {
  multerImageUpload
}
