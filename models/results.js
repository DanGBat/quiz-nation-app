const mongoose = require("mongoose");


const resultsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

const QuizResults = mongoose.model('Result', resultsSchema);

module.exports = QuizResults;  
