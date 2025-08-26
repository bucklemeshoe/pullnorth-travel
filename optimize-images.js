const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const QUALITY = 80;
const MAX_WIDTH = 1920;
const SIZES = [400, 800, 1200, 1920]; // Responsive image sizes

async function optimizeImage(inputPath, outputPath, width, quality = QUALITY) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const ext = path.extname(file).toLowerCase();
      const name = path.basename(file, ext);
      const dir = path.dirname(filePath);
      
      // Create WebP version
      const webpPath = path.join(dir, `${name}.webp`);
      
      // Only create if WebP doesn't exist or is older
      if (!fs.existsSync(webpPath) || fs.statSync(filePath).mtime > fs.statSync(webpPath).mtime) {
        await optimizeImage(filePath, webpPath, MAX_WIDTH);
      }
      
      // Create responsive sizes for hero images
      if (filePath.includes('hero') || filePath.includes('experiences')) {
        for (const size of SIZES) {
          const responsivePath = path.join(dir, `${name}-${size}w.webp`);
          if (!fs.existsSync(responsivePath)) {
            await optimizeImage(filePath, responsivePath, size, QUALITY);
          }
        }
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Images directory not found');
    return;
  }
  
  const startTime = Date.now();
  await processDirectory(imagesDir);
  const endTime = Date.now();
  
  console.log(`\n✨ Optimization completed in ${((endTime - startTime) / 1000).toFixed(1)}s`);
  
  // Show size comparison
  const originalSize = getDirectorySize(imagesDir, /\.(png|jpg|jpeg)$/i);
  const optimizedSize = getDirectorySize(imagesDir, /\.webp$/i);
  
  console.log(`📊 Original images: ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`📊 WebP images: ${(optimizedSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`💾 Total savings: ${((originalSize - optimizedSize) / originalSize * 100).toFixed(1)}%`);
}

function getDirectorySize(dirPath, filePattern) {
  let totalSize = 0;
  
  function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (filePattern.test(file)) {
        totalSize += stat.size;
      }
    }
  }
  
  traverse(dirPath);
  return totalSize;
}

main().catch(console.error); 