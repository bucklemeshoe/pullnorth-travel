const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = 'public/images';
const outputDir = 'public/images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(imageDir).filter(file => 
    file.match(/\.(jpg|jpeg|png|webp)$/i)
  );

  console.log(`Found ${files.length} images to optimize...`);

  for (const file of files) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✅ Optimized: ${file} -> ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }
}

optimizeImages(); 