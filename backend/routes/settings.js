import express from 'express';
import Settings from '../models/Settings.js';
import { cvUpload } from '../config/cloudinary.js';

const router = express.Router();

// Get settings
router.get('/', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update CV
router.post('/cv', cvUpload.single('cv'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    // Add fl_attachment to Cloudinary URL to force download
    // e.g., https://res.cloudinary.com/cloud_name/raw/upload/v1234/portfolio/cv/filename.pdf
    // For raw files, Cloudinary downloads them by default usually, but we can return the url directly.
    const cvUrl = req.file.path;

    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings({ cvUrl });
    } else {
      settings.cvUrl = cvUrl;
      settings.updatedAt = Date.now();
    }
    await settings.save();

    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
