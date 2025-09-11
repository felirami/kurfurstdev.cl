/** @type {import('next').NextConfig} */
const nextConfig = {
  // AÑADIMOS ESTA SECCIÓN DE IMÁGENES
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;