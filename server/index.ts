import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import { env } from '../env.js';
import { error, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use('/api/users', userRoutes);

if (env.NODE_ENV === 'development') {
  const swaggerJsonString = fs.readFileSync('./swagger/swagger.json', 'utf-8');
  const swaggerJson = JSON.parse(swaggerJsonString);
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
}

app.use(notFound);
app.use(error);

app.listen(env.PORT, () =>
  console.log(`Server listening on port ${env.PORT}!`)
);
