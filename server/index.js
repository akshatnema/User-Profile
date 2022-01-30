const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();




app.listen(8000, () => {
    console.log('Server started at port 8000');
});