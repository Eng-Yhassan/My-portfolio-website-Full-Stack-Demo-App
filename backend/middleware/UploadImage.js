const multer = require("multer");


const updloadImage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "document")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
});

const storeImage = multer ({
    storage: updloadImage
})

module.exports = storeImage