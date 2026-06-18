import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
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
  projectLink: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'projects'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Project', ProjectSchema);
