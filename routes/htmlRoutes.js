//variable db connects to models folder
const router = require('express').Router();
const Workout = require('../models/Workout.js');

router.get('/exercise', (req, res) => {
  Workout.find({})
  res.sendFile(path.join(_dirname + "./public/exercise.html"))
});

router.get('/stats', (req, res) => {
  Workout.find({})
  res.sendFile(path.join(_dirname + "./public/stats.js"))
  });

module.exports = router;