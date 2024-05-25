import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import JobPosting from '../model/jobs.model.js';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'ABCD!@#';

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
};

// Route for jobPosting
export const postJob = async (req, res, next) => {
  const {
    title,
    company,
    salaryFrom,
    salaryTo,
    location,
    experience,
    mustHaveSkills,
    skills,
    description
  } = req.body;
  try {
    if (!title || !company || !salaryFrom || !salaryTo || !location || !experience || !mustHaveSkills || !description) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    const newJobPosting = new JobPosting({
      title,
      company,
      salaryFrom,
      salaryTo,
      location,
      experience,
      mustHaveSkills,
      skills,
      description
    });
    await newJobPosting.save();
    return res.status(201).json({ message: 'Job posted successfully' });
  } catch (error) {
    next(error);
  }
};
