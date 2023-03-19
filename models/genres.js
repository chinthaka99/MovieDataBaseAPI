const mongoose = require('mongoose');

const genresSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
  
});

const Genre = mongoose.model('Genre', genresSchema);

module.exports = Genre;