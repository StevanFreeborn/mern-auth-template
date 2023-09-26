import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  getUserProfile,
  logUserIn,
  logUserOut,
  registerUser,
  updateUserProfile,
} from '../controllers/usersController.js';

const router = express.Router();

router.post('/login', asyncHandler(logUserIn));
router.post('/register', asyncHandler(registerUser));
router.post('/logout', asyncHandler(logUserOut));
router
  .route('/profile')
  .get(asyncHandler(getUserProfile))
  .put(asyncHandler(updateUserProfile));

export default router;
