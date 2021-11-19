const express = require('express');
const mongoose = require('mongoose');
const logger = require ('morgan');
//const mongojs = require('mongojs');
//const path = require('path');

//use dynamic port otherwise use port 3001
const PORT = process.env.PORT || 3001;

const db = require('./models');

const app = express();

//documents information in terminal
app.use(logger('dev'));
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewURLParser: true });


db.Workout