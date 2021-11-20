//variable db connects to models folder
const router = require('express').Router();
const Workout = require('../models/Workout.js');

//get most current workout information
router.get('/api/workouts', (req, res) => {
  Workout.aggregate( [
    //adds new fields(mostCurrentWorkout)
    {$addFields: {
      totalDuration: { $sum: '$exercises.duration' },
      combinedWeight: { $sum: '$exercises.weight' }
      }
    }
  ] )

  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  })
});

//create workout
router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then(data => {
    res.json(data);
  })
  .catch(({ data }) => {
    res.json(data);
  });
});

//update workout with specific id
router.put('/api/workouts/:id', ({ body, params }, res) => {
  let id = params.id;
  
  Workout.update({_id:id}, { $push: {exercises: body}}, { new: true, runValidators: true } )
  .then(data => {
    res.json(data);
  })
  .catch(({ data }) => {
    res.json(data);
  });
});

//get workouts from the last 7 days
// router.get('/api/workouts/range', (req, res) => {
//   Workout.aggregate([
//     $addField

//     $sum
//   ])
  
  
//   find({}).limit(7).sort({ id: -1 })
//   .then(data => {
//     res.json(data);
//   })
//   .catch(err => {
//     res.json(err);
//   })
// });

router.get('/api/workouts/range', (req, res) => {
  Workout.find({}).limit(7)
});

module.exports = router;