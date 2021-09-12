const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default:new Date().setDate(new Date().getDate())
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of Exercise is required"
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: false
            },
            weight: {
                type: Number,
                required: false,
            },
            reps: {
                type: Number,
                required: true,
            },
            sets: {
                type: Number,
                required: false,
            },
            distance: {
                type: Number,
                required: false,
            }
        }
    ]
 
    /* name, type, weight, sets, reps, and duration of exercise.
    If the exercise is a cardio exercise, I should be able to track my distance traveled */
});

const Tracker = mongoose.model("Tracker", fitnessSchema);

module.exports = Tracker;