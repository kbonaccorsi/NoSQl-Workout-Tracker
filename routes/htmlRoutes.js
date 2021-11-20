//allows for exporting routes
const router = require('express').Router();
//connects to public folder
const path = require('path');

//route to get overall front end
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

//route to get exercise front end
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//route to get stats front end
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

module.exports = router;