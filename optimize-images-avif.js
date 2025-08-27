const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for aggressive optimization
const config = {
  avif: {
    quality: 60, // Lower quality for smaller files
    effort: 9,   // Maximum compression effort
    chromaSubsampling: '4:2:0', // More aggressive chroma subsampling
  },
  webp: {
    quality: 70, // Lower quality for smaller files
    effort: 6,   // High compression effort
  },
  sizes: {
    mobile: 400,
    tablet: 800,
    desktop: 1200,
    large: 1920
  }
};

// Directories to process
const directories = [
  'public/images/hero',
  'public/images/experiences',
  'public/images/sections',
  'public/images/badges'
];

// Get all image files recursively
function getImageFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Convert image to AVIF with aggressive compression
async function convertToAVIF(inputPath, outputPath, width = null) {
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await pipeline
      .avif(config.avif)
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath} to AVIF:`, error);
    return false;
  }
}

// Convert image to WebP with compression
async function convertToWebP(inputPath, outputPath, width = null) {
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await pipeline
      .webp(config.webp)
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath} to WebP:`, error);
    return false;
  }
}

// Get file size in KB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

// Main optimization function
async function optimizeImages() {
  console.log('🚀 Starting aggressive image optimization...\n');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedFiles = 0;
  
  for (const dir of directories) {
    console.log(`📁 Processing directory: ${dir}`);
    
    const files = getImageFiles(dir);
    
    for (const file of files) {
      const fileName = path.basename(file, path.extname(file));
      const dirName = path.dirname(file);
      
      console.log(`\n🖼️  Processing: ${fileName}`);
      
      // Get original file size
      const originalSize = parseFloat(getFileSize(file));
      totalOriginalSize += originalSize;
      
      // Create AVIF versions
      const avifPath = path.join(dirName, `${fileName}.avif`);
      const avifMobilePath = path.join(dirName, `${fileName}-400w.avif`);
      const avifTabletPath = path.join(dirName, `${fileName}-800w.avif`);
      const avifDesktopPath = path.join(dirName, `${fileName}-1200w.avif`);
      const avifLargePath = path.join(dirName, `${fileName}-1920w.avif`);
      
      // Create WebP versions (fallback)
      const webpPath = path.join(dirName, `${fileName}.webp`);
      const webpMobilePath = path.join(dirName, `${fileName}-400w.webp`);
      const webpTabletPath = path.join(dirName, `${fileName}-800w.webp`);
      const webpDesktopPath = path.join(dirName, `${fileName}-1200w.webp`);
      const webpLargePath = path.join(dirName, `${fileName}-1920w.webp`);
      
      // Convert to AVIF
      await convertToAVIF(file, avifPath);
      await convertToAVIF(file, avifMobilePath, config.sizes.mobile);
      await convertToAVIF(file, avifTabletPath, config.sizes.tablet);
      await convertToAVIF(file, avifDesktopPath, config.sizes.desktop);
      await convertToAVIF(file, avifLargePath, config.sizes.large);
      
      // Convert to WebP (fallback)
      await convertToWebP(file, webpPath);
      await convertToWebP(file, webpMobilePath, config.sizes.mobile);
      await convertToWebP(file, webpTabletPath, config.sizes.tablet);
      await convertToWebP(file, webpDesktopPath, config.sizes.desktop);
      await convertToWebP(file, webpLargePath, config.sizes.large);
      
      // Calculate optimized size (AVIF)
      const avifSize = parseFloat(getFileSize(avifPath));
      totalOptimizedSize += avifSize;
      
      const savings = ((originalSize - avifSize) / originalSize * 100).toFixed(1);
      
      console.log(`   ✅ AVIF: ${avifSize}KB (${savings}% smaller)`);
      console.log(`   ✅ WebP: ${getFileSize(webpPath)}KB (fallback)`);
      
      processedFiles++;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('🎉 OPTIMIZATION COMPLETE!');
  console.log('='.repeat(60));
  console.log(`📊 Files processed: ${processedFiles}`);
  console.log(`📦 Original size: ${totalOriginalSize.toFixed(2)}KB`);
  console.log(`📦 Optimized size: ${totalOptimizedSize.toFixed(2)}KB`);
  console.log(`💾 Total savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`⚡ Size reduction: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)}KB`);
  console.log('\n🚀 Your site should now load much faster!');
  console.log('📱 AVIF format provides superior compression for modern browsers');
  console.log('🌐 WebP format serves as fallback for older browsers');
}

// Run optimization
optimizeImages().catch(console.error); 