const multer = require('multer');														
const path = require('path');														
const fs = require('fs');														
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';														
                                                        
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });														
                                                        
const storage = multer.diskStorage({														
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),														
  filename: (req, file, cb) => {														
    const ext = path.extname(file.originalname);														
    const base = path.basename(file.originalname, ext).replace(/\s+/g, '-');														
    const filename = `${base}-${Date.now()}${ext}`;														
    cb(null, filename);														
  }														
});														
                                                        
const fileFilter = (req, file, cb) => {														
  // accept images only														
  if (!file.mimetype.startsWith('image/')) {														
    return cb(new Error('Only image files are allowed!'), false);														
  }														
  cb(null, true);														
};														
                                                        
const upload = multer({														
  storage,														
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB														
  fileFilter														
});														
