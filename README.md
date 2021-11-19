# Unit 18 Nosql: Workout Tracker

no modifications needed to develop folder
api routes help build routes table


create Mongo database 
Mongoose schema
Express routes

deploy to heroku
  * dont forget to seed heroku

set up mongo db atlas
then point heroku app to atlas server (links in slack resources)

create server, connect to mongo database

on page load:
fitness tracker page: buttons to make new workout, or continue last workout
dashboard: graphs
* options:
  * create a new workout
    *POST('/workouts')
    *new workout plan- api.js lines 26-36
    *db.workouts.insert() -> new workout plan
    new data set
    exercise
  * continue with their last workout
    *GET('/workouts')
      *In descending order so the last workout is index 0 in workout array, and display only that index?

* Add exercises to the most recent workout plan
    *PUT('/workouts')
    *api.js lines 13-25
* Add new exercises to a new workout plan
    * new workout plan- api.js lines 26-36
    * db.workouts.insert() -> new workout plan
    * new exercise- api.js lines 13-25
    * db.workouts.insert() -> new exercise
    *POST('/workouts')
* View the combined weight of multiple exercises from the past 7 workouts on the `stats` page
    * stats.js lines 64-107
    * api.js lines 38-43
    *GET(/exercise)
* View the total duration of each workout from the past 7 workouts on the `stats` page
    *api.js lines 38-43
    * stats.js lines 36-62
    *GET(/workout)
  * [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/)
  * [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)
  * [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate)
* view daily workouts
    *GET(/workouts)
* create daily workouts
    *POST(/workouts)
* track daily workouts
* log multiple exercises in a workout on a given day
    *db.workouts.insertMany();
* track
    * stats.js
  * name
  * type
  * weight
    * stats.js lines 1-16
  * sets
  * reps
  * duration of exercise
* cardio exercise, I should be able to track my distance traveled.
  *exercise.js lines 35-49


To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)
