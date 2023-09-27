import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { invalidEmailMessage, isValidEmail } from '../validation/email.js';
import {
  invalidPasswordMessage,
  isValidPassword,
} from '../validation/password.js';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: isValidEmail,
      message: invalidEmailMessage,
    },
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    validate: {
      validator: isValidPassword,
      message: invalidPasswordMessage,
    },
  },
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required'],
    trim: true,
  },
});

schema.pre('save', async function (next) {
  if (this.isModified('password') == false) {
    next();
  }
  bcrypt;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const Users = mongoose.model('users', schema);
