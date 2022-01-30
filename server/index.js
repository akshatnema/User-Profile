const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');
const register = require('./routes/register')
const login = require('./routes/login')
const user = require('./routes/user')
const PORT = process.env.PORT || 8000
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, ()=>{
    console.log("Database connected");
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../build'))
}

app.use('/register', register);
app.use('/login', login);
app.use('/user', user);

app.listen(PORT, () => {
    console.log('Server started at port 8000');
});