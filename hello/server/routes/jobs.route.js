import express from "express";
import { postJob } from "../controllers/jobs.controller.js";

import JobPosting from "../model/jobs.model.js";


const router = express.Router();

router.post('/postJobs', postJob);
router.get('/getJobs', async (req, res) => {
    try {
        const jobPostings = await JobPosting.find();
        res.json(jobPostings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;
