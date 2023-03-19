const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Imoport models
const Actor = require('./models/actors');
const Genre = require('./models/genres');
const Movie = require('./models/movies');
const User = require('./models/directors');


// Defining Routes
const actorRoutes = require('./routes/actor');
const genreRoutes = require('./routes/genre');
const movieRoutes = require('./routes/movie');
const userRoutes = require('./routes/director');

app.use('api/actors', actorRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/directors', userRoutes);

// Connecting to the MongoDB Atlas cluster
const DBURL = 'mongodb+srv://nuwan99:OQrzLeRs1gcoxRId@movieapi.frvybks.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DBURL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('Successfully connected to the database'))
    .catch((error)=>console.log(error));

// Run the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

