const router = require('express').Router();
const fitnessSchema = require('./models/fitnessSchema.js');

/* router.post('/api/workout', (req, res) => {
    fitnessSchema.create (body)
    .then(dbfitnessSchema => {
        res.json(dbfitnessSchema);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('./public/workout') */

/* exports.index = function(req, res) {
    fitnessSchema.find({}, function(err, docs) {
        if(!err) {
            res.json(200, {workouts:docs});
        } else {
            res.json(500, {message: err});
        }
    });
} */


router.get("/api/workouts", (req, res) => {
    fitnessSchema.find({}).then(workoutInfo => {
        console.log(workoutInfo)
        res.json(workoutInfo)
    })
});

router.get("/api/workouts/range", (req, res) => {
    fitnessSchema.find({}).limit(10).then(workoutInfo => {
        res.json(workoutInfo)
    })
    .catch(err => {
        res.json(err)
    })
});

router.post("/api/workouts", (req, res) => {
    fitnessSchema.create({})
    .then(workoutInfo => {
        res.json(workoutInfo);
    })
    .catch(err => {
        res.json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    fitnessSchema.findByIdandUpdate(req.params.id, {$push:{exercise:req.body}},{new:true})
    .then(workoutInfo => {
        res.json(workoutInfo)
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;