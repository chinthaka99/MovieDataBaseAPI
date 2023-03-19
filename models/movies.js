const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  Lead_actor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],
  director: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  }],
  cast: [{
    name: { type: String, required: true },
    bio: String,
    dob: Date
  }],
  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }]
});

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;
