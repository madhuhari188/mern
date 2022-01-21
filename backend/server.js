const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true 
}, err => {
   if(err) throw err;
   console.log('Connected to MongoDB!!!')
})

app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

app.use('/exercise',exerciseRouter);
app.use('/users',usersRouter);

app.listen(port, ()=> {
    console.log(`Server is Running on PORT: ${port}`);
});