/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.ipfs.nftstorage.link', // Use a wildcard to match all hostnames
          port: '',
          pathname: '/**', // Match all paths under any hostname with the specified domain
        },
      ],
    },
  };

export default nextConfig;
