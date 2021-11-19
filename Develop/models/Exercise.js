const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({ 
  name: {

  },
  distance: {

  },
  duration: {

  },

});

const resistanceSchema = new Schema({
  name: {

  },
  weight: {

  },
  sets: {

  },
  reps: {

  },
  duration: {
    
  }
})

module.exports = Exercise;