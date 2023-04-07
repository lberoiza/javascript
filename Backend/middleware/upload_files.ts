import config from "../config/config";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, config.TMP_DIR);
  },
  filename: function (req, file, callback) {
    const uniqueSuffix: string = uuidv4();
    const fileExtension: string = file.originalname.split('.').pop()!;
    const fileName: string = `${Date.now()}_${uniqueSuffix}.${fileExtension.toLowerCase()}`;
    callback(null, fileName);
  },
});

const uploadMiddleware = multer({ storage: storage });

export default uploadMiddleware;