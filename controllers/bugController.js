const Bug = require('../models/Bug');

// POST: Add new bug
exports.createBug = async (req, res) => {
  const { title, priority, description } = req.body;

  if (!title || !priority || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBug = await Bug.create({ title, priority, description });
    res.status(201).json({ message: 'Bug created successfully', bug: newBug });
  } catch (error) {
    res.status(500).json({ message: 'Error creating bug', error });
  }
};

// GET: Fetch all bugs
exports.getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bugs', error });
  }
};

