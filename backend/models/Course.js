import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
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
  courseLink: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    default: 'courses'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Course', CourseSchema);
