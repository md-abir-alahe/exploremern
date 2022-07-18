const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));



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
    res.send(`Hello contact World form the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login World form the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration World form the server`);
});


app.listen(3000, () => {
    console.log(`server is running at port no 3000`);
})

