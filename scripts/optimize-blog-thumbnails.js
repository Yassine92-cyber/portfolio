const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const THUMBNAILS_DIR = path.join(__dirname, '../public/blog-thumbnails');
const BACKUP_DIR = path.join(__dirname, '../public/blog-thumbnails/backup');

// Create backup directory if it doesn't exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Target dimensions for thumbnails
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 600;
const JPEG_QUALITY = 85;

async function optimizeImage(filePath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  const fullPath = path.join(THUMBNAILS_DIR, fileName);
  
  // Skip README and already processed files
  if (fileName === 'README.md' || fileName.startsWith('backup')) {
    return;
  }

  try {
    console.log(`Processing: ${fileName}...`);
    
    // Backup original
    const backupPath = path.join(BACKUP_DIR, fileName);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`  ✓ Backed up to backup/${fileName}`);
    }

    // Get image metadata
    const metadata = await sharp(fullPath).metadata();
    const originalSize = fs.statSync(fullPath).size;
    
    let outputPath = fullPath;
    let optimizedBuffer;
    let needsConversion = false;

    // Convert GIFs and PNGs to JPG for better compression
    if (ext === '.gif' || ext === '.png') {
      outputPath = path.join(THUMBNAILS_DIR, `${baseName}.jpg`);
      needsConversion = true;
    }

    // Read and optimize image
    const image = sharp(fullPath);
    optimizedBuffer = await image
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();

    // Write to temporary file first, then rename (avoids file lock issues)
    const tempPath = outputPath + '.tmp';
    fs.writeFileSync(tempPath, optimizedBuffer);
    
    // Remove old file if it exists and is different
    if (fs.existsSync(outputPath) && outputPath !== fullPath) {
      try {
        fs.unlinkSync(outputPath);
      } catch (e) {
        // Ignore if file is locked, we'll overwrite it
      }
    }
    
    // Rename temp file to final name
    fs.renameSync(tempPath, outputPath);
    
    // Remove original if converting format (after a delay to avoid locks)
    if (needsConversion && fs.existsSync(fullPath) && fullPath !== outputPath) {
      try {
        // Wait a bit before deleting
        await new Promise(resolve => setTimeout(resolve, 100));
        fs.unlinkSync(fullPath);
      } catch (e) {
        console.log(`  ⚠ Could not remove original ${fileName} (may be locked, you can delete manually)`);
      }
    }
    
    const newSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ✓ Optimized: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
    
    if (ext === '.gif' || ext === '.png') {
      console.log(`  ✓ Converted ${ext} to .jpg`);
    }
    
  } catch (error) {
    console.error(`  ✗ Error processing ${fileName}:`, error.message);
  }
}

async function optimizeAllThumbnails() {
  console.log('🚀 Starting blog thumbnail optimization...\n');
  
  const files = fs.readdirSync(THUMBNAILS_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize.\n`);

  for (const file of imageFiles) {
    await optimizeImage(THUMBNAILS_DIR, file);
  }

  console.log('\n✅ Optimization complete!');
  console.log(`📁 Original images backed up to: ${BACKUP_DIR}`);
  console.log('\n💡 Tips:');
  console.log('  - All images are now optimized to 1200x600px');
  console.log('  - GIFs and PNGs have been converted to JPG');
  console.log('  - Original files are safely backed up');
  console.log('  - If you need originals, check the backup folder');
}

// Run optimization
optimizeAllThumbnails().catch(console.error);

