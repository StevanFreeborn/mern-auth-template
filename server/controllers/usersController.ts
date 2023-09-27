import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Users } from '../models/user.js';
import { invalidEmailMessage, isValidateEmail } from '../validation/email.js';
import {
  invalidPasswordMessage,
  isValidatePassword,
} from '../validation/password.js';

export async function logUserIn(req: Request, res: Response) {
  res.status(200).json({ message: 'User authenticated' });
}

export async function logUserOut(req: Request, res: Response) {
  res.status(200).json({ message: 'User logged out' });
}

// TODO: add to swagger documentation
export async function registerUser(req: Request, res: Response) {
  const { email, password, firstName, lastName } = req.body;
  const fields = { email, password, firstName, lastName };

  const existingUser = await Users.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  for (const [key, value] of Object.entries(fields)) {
    if (!value) {
      res.status(400);
      throw new Error(`${key} is required`);
    }

    if (key === 'password' && isValidatePassword(value) === false) {
      res.status(400);
      throw new Error(invalidPasswordMessage);
    }

    if (key === 'email' && isValidateEmail(value) === false) {
      res.status(400);
      throw new Error(invalidEmailMessage);
    }
  }

  try {
    const user = await Users.create({ email, password, firstName, lastName });
    res.status(201).json({
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400);
    }

    throw error;
  }
}

export async function getUserProfile(req: Request, res: Response) {
  res.status(200).json({ message: 'User profile' });
}

export async function updateUserProfile(req: Request, res: Response) {
  res.status(200).json({ message: 'User profile updated' });
}
