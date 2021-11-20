//variable db connects to models folder
const router = require('express').Router();
const Workout = require('../models/Workout.js');
const path = require('path');

router.get('/exercise', (req, res) => {
  Workout.find({})
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get('/stats', (req, res) => {
  Workout.find({})
  res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

module.exports = router;