const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  nextConfig,
};
