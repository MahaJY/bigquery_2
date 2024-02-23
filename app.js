const express = require('express');
const bodyParser = require('body-parser');
const employeeroute = require('./routes/routes');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use('/api', employeeroute);

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});