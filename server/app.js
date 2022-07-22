const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());


// we link the router file  
app.use(require('./router/auth'));





const PORT = process.env.PORT;





// Middeleare
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);

}

middleware();




app.get('/', (req, res) => {
    res.send(`Hello World form the server`);
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello about World form the server`);
});

app.get('/contact', (req, res) => {
    // res.cookie("test", 'Abir');
    res.send(`Hello contact World form the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login World form the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration World form the server`);
});


app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})

