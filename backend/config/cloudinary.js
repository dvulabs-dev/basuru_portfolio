import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'portfolio',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  },
});

const cvStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'portfolio/cv',
    allowedFormats: ['pdf'],
    resource_type: 'raw', // needed for non-image files like PDF in some configurations, though auto is also fine. Let's use raw for raw document. Actually Cloudinary treats PDF as image for thumbnails, but "raw" is safer for just file downloading without processing.
  },
});

const upload = multer({ storage: storage });
const cvUpload = multer({ storage: cvStorage });

export { cloudinary, upload, cvUpload };
