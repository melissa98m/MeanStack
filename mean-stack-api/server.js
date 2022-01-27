require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Create app
const app = express();
// Define express body parser
app.use(express.json());
// Prevent CORS Policy Errors
app.use(cors());
// Connect the DB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
// get all sales
require('./routes/sales')(app);
//get one sale by id
require('./routes/sale')(app);


// Define default route
app.use((req, res, next) => {
    res.redirect('/sales');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
