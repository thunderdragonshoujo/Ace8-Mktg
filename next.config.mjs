/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/services/automation",
        destination: "/services/automated-testing",
        permanent: true,
      },
      {
        source: "/services/microservices",
        destination: "/services/micro-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
