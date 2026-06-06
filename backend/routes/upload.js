import express from 'express';
const router = express.Router();
import { upload } from '../config/cloudinary.js';

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image provided' });
  }
  res.json({ imageUrl: req.file.path });
});

export default router;
