const router = require('express').Router();
const fitnessSchema = require('./models/fitnessSchema');

router.post('./jsroutes/fitnessSchema/index.js', (req, res) => {
    fitnessSchema.create (body)
    .then(dbfitnessSchema => {
        res.json(dbfitnessSchema);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("./jsroutes/fitnessSchema/exercise.js", ({ body }, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });