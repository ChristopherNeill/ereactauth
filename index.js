const mongoose = require ('mongoose');
const express = require('express');
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');
const morgan = require('morgan');

const app = express();
require ('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI);


app.use(morgan('dev'));
app.get('/', (req, res) => {  res.json({    message: 'Hello World!'  });});



const PORT = process.env.PORT || 5000;
app.listen(PORT);