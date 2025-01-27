const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  name: String,
  sections: String,
  questions: [
    {
      text: String,
      correctAnswer: String,
      userAnswer: String,
    }
  ],
  score: Number,
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);