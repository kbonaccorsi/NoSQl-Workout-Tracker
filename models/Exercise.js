const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({ 
  name: {

  },
  distance: {

  },
  duration: {

  },
  weight: {

  },
  sets: {

  },
  reps: {

  }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;