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
