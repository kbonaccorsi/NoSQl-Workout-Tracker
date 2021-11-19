//variable db connects to models folder
const router = require('express').Router();
const Workout = require('../models/Workout.js');


router.get('/api/workouts', (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
});

router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ data }) => {
    console.log(data);
  });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  let id = params.id;
  
  Workout.update({_id:id}, { $push: {exercises: body}}, { new:true, runValidators:true } )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(({ data }) => {
    console.log(data);
  });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
});

module.exports = router;