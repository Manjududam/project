import mongoose from "mongoose";

const jobPostingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  salaryFrom: {
    type: Number,
    required: true
  },
  salaryTo: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  mustHaveSkills: {
    type: String,
    required: true
  },
  skills: {
    type: String
  },
  description: {
    type: String,
    required: true
  }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
