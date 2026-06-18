import express from 'express';
const router = express.Router();
import Project from '../models/Project.js';

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a project
router.post('/', async (req, res) => {
  const { title, description, imageUrl, projectLink } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      imageUrl,
      projectLink,
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
