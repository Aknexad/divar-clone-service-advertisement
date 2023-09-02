import dotEnv from 'dotenv';

dotEnv.config();

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
