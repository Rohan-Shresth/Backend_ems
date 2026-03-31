const dotenv = require('dotenv');

dotenv.config();

const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];

requiredVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: (() => {
    const rawPort = process.env.PORT;
    if (rawPort === undefined) return 5000;
    const parsed = Number(rawPort);
    return Number.isNaN(parsed) ? 5000 : parsed;
  })(),
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d'
};

module.exports = env;
