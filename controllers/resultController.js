const Result = require('../models/Result');

exports.submitResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getResults = async (req, res) => {
  try {
    const result = await Result.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};