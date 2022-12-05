const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/upload.image/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-iqra-${file.originalname}`);
  },
});

uploadImage = multer({ storage: imageStorage, fileFilter: imageFilter });

module.exports = uploadImage;