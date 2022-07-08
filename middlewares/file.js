// мв которая отвечает за загрузку на сервер
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images/');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}${animal.name} - ${file}.${animal.id}`);
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetyoe)) { //принимаем файл
    cb(null, true); // если все ок, загружаем
  }
  cb(null, false);  // если нет, не загружаем
};

module.exports = multer({ storage, fileFilter });
