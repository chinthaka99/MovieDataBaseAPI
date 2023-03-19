const mongoose = require('mongoose');

const actorsSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email:String,
  bio: String,
  date_of_birth: Date,
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  },
  movies: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    character: String
  }]
});

const Actor = mongoose.model('Actor', actorsSchema);

module.exports = Actor;
