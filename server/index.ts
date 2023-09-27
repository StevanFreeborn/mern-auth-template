import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { env } from '../env.js';
import { connectToDB } from './data/db.js';
import { error, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

connectToDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

if (env.NODE_ENV === 'development') {
  const swaggerJsonPath = path.join(
    process.cwd(),
    'server/swagger/swagger.json'
  );
  const swaggerJsonString = fs.readFileSync(swaggerJsonPath, 'utf-8');
  const swaggerJson = JSON.parse(swaggerJsonString);
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
}

app.use(notFound);
app.use(error);

app.listen(env.PORT, () =>
  console.log(`Server listening on port ${env.PORT}!`)
);
