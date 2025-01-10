// types/express-multer.d.ts
import 'express-serve-static-core';
import 'multer';

declare global {
  namespace Express {
    interface Request {
      file?: Multer.File;   // for single file upload
      files?: Multer.File[] | { [fieldname: string]: Multer.File[] };  // for multiple file uploads
    }
  }
}
