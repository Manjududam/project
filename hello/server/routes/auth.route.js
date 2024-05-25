import express from "express";
import { studentSignup, professionalSignup, studentLogin, professionalLogin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/student/signup', studentSignup);
router.post('/professional/signup', professionalSignup);
router.post('/student/login', studentLogin);
router.post('/professional/login', professionalLogin);

export default router;
