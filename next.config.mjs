/** @type {import('next').NextConfig} */
const nextConfig = {
                // Disable image optimization for static export
              images: {
                unoptimized: true,
                formats: ['image/webp', 'image/avif'],
              },
  
                // Enable compression
              compress: true,
              
              // Optimize bundle size
              experimental: {
                optimizePackageImports: ['lucide-react'],
              },
  
  // Enable webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize bundle splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
  
  // Enable static optimization (removed for API routes support)
  // output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

export default nextConfig
