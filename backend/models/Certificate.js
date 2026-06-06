import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['certificate', 'scholarship'],
    default: 'certificate',
  },
  category: {
    type: String,
    default: 'certificates'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Certificate', CertificateSchema);
