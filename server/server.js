const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    let users = [
        {name: 'Jack', age: 25},
        {name: 'Alan', age: 32},
        {name: 'Amanda', age: 18}
    ];
    res.send(users);
});

app.listen(3000);

module.exports.app = app;