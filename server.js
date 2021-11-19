const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
//const mongojs = require('mongojs');
//const path = require('path');

//use dynamic port otherwise use port 3001
const PORT = process.env.PORT || 3001;

//variable db connects to models folder
const db = require('./models');

const app = express();

//documents server information in terminal
app.use(logger('dev'));
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', { useNewURLParser: true });

//HOW DO I MAKE THE SEEDS POULATE THIS?  OR IS THE USER INPUT SUPPOSED TO?
db.Workout.create({})
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ data }) => {
    console.log(data);
  });

app.get('/stats', (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
});

app.get('/exercise', (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
});

app.listen(PORT, () => {
  console.log(`port ${PORT} running`);
});