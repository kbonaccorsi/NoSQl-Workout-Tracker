//router allows routes to export
const router = require('express').Router();
//connects Workout db to get data
const Workout = require('../models/Workout.js');

//get most current workout information
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    //adds new fields to the most current workout
    {
      $addFields: {
        //totalDuration from stats.js line 19, exercises from Workout.js line 10
        'totalDuration': { $sum: '$exercises.duration' },
        //totalWeight from stats.js lines 1-15, exercises from Workout.js line 10
        'totalWeight': { $sum: '$exercises.weight' }
      }
    }
  ])
    //return data, otherwise return error
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//create workout from user input
router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    //return data, otherwise return error
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//update workout using specific id
router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true })
    //return data otherwise, return error
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//get workouts from the last 7 days
router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    //add totalDuration field and totalWeight field to 7 day review
    {
      $addFields: {
        'totalDuration': { $sum: '$exercises.duration' },
        'totalWeight': { $sum: '$exercises.weight' }
      }
    }
  ])
  //sort in descending order to get the most current 7 day range, and then sort in ascending order to display from the first of the 7 days to the most current of the 7 days
  .sort({'_id': -1}).limit(7).sort({ '_id': 1 })
  //return data otherwise return error  
  .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;