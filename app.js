const express = require('express'); //load express
const app = express();
const moongose = require('mongoose'); //require to link to DB
const bodyParse = require('body-parser'); 
const cors = require('cors');
require('dotenv/config');




//Connect to DB
moongose.connect(process.env.DB_CONNECTION,{
    useUnifiedTopology:true,
    useNewUrlParser:true},
    () => console.log('Connected to Database'));


// Listening on PORT
app.listen(4000); 