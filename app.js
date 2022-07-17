const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello World form the server`);
});

app.get('/about', (req, res) => {
    res.send(`Hello World form the server`);
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

