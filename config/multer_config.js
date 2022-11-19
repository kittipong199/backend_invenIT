const multer = require('multer')


module.exports = multerConfig = {
    config: {
        storage : multer.diskStorage({
            destination:  (req, file, cb) => {
                const folder = '/image'
                if (!FileSystem.existsSync(folder)) {
                    FileSystem.mkdirSync(folder)
                }
                next(null, folder)
          },
          filenamme: (req,file, next) => {
            const ext = file.mimetype.split('/')[1]
            next(null, '${file.fieldname}-${Date.now()}.${ext}')
          }
        }),
        limits: { fileSize: 1024 * 1024 * 5},
        fileFilter: (req, file ,next) =>{
            const image = file.mimetype.startsWitn('image/')
            if (image){
                next(null, false)
            }else{
                next({message: 'File type not support' },false)

            }
           
        }
    },

    
    keyUpload: 'photo'
}
