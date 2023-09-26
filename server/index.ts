import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { env } from '../env.js';
import { error, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import swaggerJson from './swagger/swagger.json' assert { type: 'json' };

const app = express();

app.use('/api/users', userRoutes);

if (env.NODE_ENV === 'development') {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
}

app.use(notFound);
app.use(error);

app.listen(env.PORT, () =>
  console.log(`Server listening on port ${env.PORT}!`)
);
