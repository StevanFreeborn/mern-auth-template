import 'dotenv/config';
import express from 'express';
import { env } from '../env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(env.PORT, () =>
  console.log(`Server listening on port ${env.PORT}!`)
);
