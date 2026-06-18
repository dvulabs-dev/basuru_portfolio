import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  cvUrl: {
    type: String,
    default: '',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Settings', SettingsSchema);
