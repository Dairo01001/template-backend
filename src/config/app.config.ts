import dotenv from 'dotenv';
import { logger } from '../services';

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV !== 'test' && NODE_ENV !== 'development') {
  dotenv.config();
} else {
  dotenv.config({
    path: `.env.${NODE_ENV}`,
  });
}

logger.info(`NODE_ENV: ${NODE_ENV}`);

export const PORT = process.env.PORT || 3000;
export const ORIGIN = process.env.ORIGIN || 'http://localhost:3000';
