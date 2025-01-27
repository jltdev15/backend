const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  qid: Number,
  question: String,
  options: [String],
  correctAnswer: String,
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);