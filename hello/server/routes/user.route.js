import express from "express";

import { browser, verifyToken, getUser} from '../controllers/user.controller.js'
// import  { verifyToken, getUser } from "../utils/verifyToken.js";


const router = express.Router();

router.get('/', browser);
router.get('/token', verifyToken, getUser);

export default router;