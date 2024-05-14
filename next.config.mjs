/** @type {import('next').NextConfig} */
import withOptimizedImages from 'next-optimized-images';

const nextConfig = {
    output: 'export',
    images: {
        formats: ['image/avif', 'image/webp'],
        unoptimized: true
        // Используйте 'image/avif' для AVIF и 'image/webp' для WebP
    }, 
};

export default withOptimizedImages({
  ...nextConfig, // Включить общие настройки Next.js
  optimizeImages: true, // Включить оптимизацию изображений
  mozjpeg: {
    quality: 80, // Качество JPEG изображений
  },
  webp: {
    preset: 'default', // Предустановленные настройки для формата WebP
    quality: 80, // Качество WebP изображений
  },
  // Дополнительные опции можно указывать здесь
});
