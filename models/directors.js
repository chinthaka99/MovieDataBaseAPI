const mongoose = require('mongoose');

const directorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  email: String,
  date_of_birth:Date,
  bio:String,
});

const Director = mongoose.model('Director', directorsSchema);

module.exports = Director;
