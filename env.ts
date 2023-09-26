import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.string().default('5000'),
  BASE_URL: z.string().default('http://localhost'),
});

export const env = envSchema.parse(process.env);
