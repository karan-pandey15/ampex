// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['i5.walmartimages.com', 'tse1.mm.bing.net'],
//     },
//   };
  
//   export default nextConfig;
  


const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.devtool = 'hidden-source-map';
    }
    return config;
  },
};

export default nextConfig;