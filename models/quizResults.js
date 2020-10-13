const mongoose = require("mongoose");


const resultsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    score: {
        type: integer,
        required: true
    },
    time: {
        type: integer,
        required: true
    }
});

const QuizUser = mongoose.model('Result', resultsSchema);

module.exports = QuizUser;  
