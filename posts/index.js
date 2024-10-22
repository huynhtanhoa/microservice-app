const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json()); // make sure client send JSON data in body request => get parsed (ExpressJS)

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {

    // random id for the post
    const id = randomBytes(4).toString('hex');

    // access to the title
    const {title} = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);

});

app.listen(4000, () => {
    console.log('Listening on port 4000')
})