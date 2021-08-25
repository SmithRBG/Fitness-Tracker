const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    Type: {
        type: String,
        trim: true,
        required: "Type of Exercise is required"
    },
    Weight: {
        type: Number,
        required: false
    },
    Sets: {
        type: Number,
        required: false
    },
    Reps: {
        type: Number,
        required: false,
    },
    Duration: {
        type: Number,
        required: true,
    },
    Distance: {
        type: Number,
        required: false,
    },
    Date: {
        type: Date,
        default: Date.now
    }
    /* name, type, weight, sets, reps, and duration of exercise.
    If the exercise is a cardio exercise, I should be able to track my distance traveled */
});

const Tracker = mongoose.model("tracker", fitnessSchema);

module.exports = Tracker;