import express from 'express';
const router = express.Router();
import Certificate from '../models/Certificate.js';

router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description, imageUrl, type } = req.body;

  try {
    const newCertificate = new Certificate({
      title,
      description,
      imageUrl,
      type: type || 'certificate',
    });
    const savedCertificate = await newCertificate.save();
    res.status(201).json(savedCertificate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certificate deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
