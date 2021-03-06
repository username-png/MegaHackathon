const path = require('path')
const multer = require('multer')
const crypto = require('crypto')

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

module.exports = {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX')
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    },
  }),
}
