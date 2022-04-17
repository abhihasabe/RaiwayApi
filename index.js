const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

//const generate_key = require('../CMS/helper/generate_key');

// create express app
const app = express();

app.use(cors());

// setup the server port
const port = process.env.PORT || 3000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
    //generate_key;
});


// import Base routes
const baseRoutes = require('./src/routes/authentication.route');

// import Address routes
const addressRoutes = require('./src/routes/address.route');

// create base routes
app.use('/api/v1/base', baseRoutes);

// create address routes
app.use('/api/v1/address', addressRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});