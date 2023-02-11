const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

    player1:{
        type: String,
        required: true
    },
    player2:{
        type: String,
        required: true
    },
    turn:{
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    game: {
        type: [[String]],
        required: true
    },
    time: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('games',userschema);