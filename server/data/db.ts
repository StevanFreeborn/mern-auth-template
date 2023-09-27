import mongoose from 'mongoose';
import { env } from '../../env.js';

export async function connectToDB() {
  try {
    const connection = await mongoose.connect(env.MONGO_URI, {
      family: 4,
    });
    console.log(
      `MongoDB connected to: ${connection.connection.host}:${connection.connection.port}/${connection.connection.name}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
