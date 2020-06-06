import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

//ver multer filter para filtragem de arquivos como tamanho maximo, tipos de aquivo, etc...

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    }
  })
};