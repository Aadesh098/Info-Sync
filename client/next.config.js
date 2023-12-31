/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },{
        "protocol": "https",
        "hostname": "randomuser.me",
        "pathname": "**"
      }
    ],
  },
  experimental:{
    reactRoot: true ,
    supressHydrationWarning: true ,
  }
}

module.exports = nextConfig


