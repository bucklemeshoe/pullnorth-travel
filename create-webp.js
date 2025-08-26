const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createWebPVersion(inputPath) {
  try {
    const ext = path.extname(inputPath);
    if (ext.toLowerCase() === '.webp') return; // Skip if already WebP
    
    const webpPath = inputPath.replace(/\.[^/.]+$/, '.webp');
    
    await sharp(inputPath)
      .webp({ 
        quality: 80, 
        effort: 6 
      })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(webpPath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error creating WebP for ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`📁 Directory not found: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  if (imageFiles.length === 0) {
    console.log(`📁 No images found in: ${dirPath}`);
    return;
  }
  
  console.log(`\n🖼️  Creating WebP versions for ${imageFiles.length} images in ${dirPath}:`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    await createWebPVersion(inputPath);
  }
}

async function main() {
  console.log('🚀 Creating WebP versions for better performance...\n');
  
  const directories = [
    'public/images/hero',
    'public/images/sections', 
    'public/images/experiences',
    'public/images/badges'
  ];
  
  for (const dir of directories) {
    await processDirectory(dir);
  }
  
  console.log('\n🎉 WebP creation complete!');
}

main().catch(console.error); 