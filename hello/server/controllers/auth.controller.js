import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import User from '../model/user.model.js';
import Professional from '../model/professional.model.js';
import Student from '../model/student.model.js';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'ABCD!@#';

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
};

// Route for Student Signup
export const studentSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, Email, and Password are required!' });
    }
    let existingUser = await Student.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new Student({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    next(error);
  }
};

// Route for Professional Signup
export const professionalSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, Email, and Password are required!' });
    }
    let existingUser = await Professional.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'Professional already exists' });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new Professional({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'Professional created successfully' });
  } catch (error) {
    next(error);
  }
};

// Route for Student Login
export const studentLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await Student.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Wrong credentials' });
    }
    const token = generateToken(validUser._id);
    res.cookie('token', token, {
      path: '/',
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.status(200).json({ message: 'Logged In', user: validUser, token });
  } catch (error) {
    next(error);
  }
};

// Route for Professional Login
export const professionalLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await Professional.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ message: 'Professional not found' });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Wrong credentials' });
    }
    const token = generateToken(validUser._id);
    res.cookie('token', token, {
      path: '/',
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.status(200).json({ message: 'Logged In', user: validUser, token });
  } catch (error) {
    next(error);
  }
};
