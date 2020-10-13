const mongoose = require("mongoose");


const resultsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    score: {
        type: int,
        required: true
    },
    time: {
        type: int,
        required: true
    }
});

const QuizUser = mongoose.model('Result', resultsSchema);

module.exports = QuizUser;  
