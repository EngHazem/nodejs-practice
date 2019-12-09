const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi from (/)');
});

let users = ['Ahmed', 'Ali', 'Othman', 'Nermeen'];

app.get('/api/users', (req, res) => {
    res.send(JSON.stringify(users));
});

app.get('/api/users/:user_id', (req, res) => {
    res.send(JSON.stringify(users[req.params.user_id-1] || 'Not found!'));
});

const port = process.env.port || 4444;
app.listen( port, () => {
  console.log(`Listening to ${port}....`);
})
