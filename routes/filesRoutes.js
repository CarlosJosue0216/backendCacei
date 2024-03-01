// routes/fileRoutes.mjs
import express from 'express';
import multer from 'multer';
import FileController from '../controllers/filesController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.array('files'), FileController.uploadFiles);

export default router;
