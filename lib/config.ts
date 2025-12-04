// Environment configuration

// Check if blog should be shown (hidden in production)
export const isBlogEnabled = process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production';

// Other environment checks can be added here
export const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

