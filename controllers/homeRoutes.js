const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require();

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: [],
        },
      ],
    });
  } catch (err) {
    res.status(500).json(res);
  }
});
