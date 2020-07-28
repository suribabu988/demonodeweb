const express = require('express');
const app = express();

app.get('/', (req, res) =>{
res.send('this is home page');
});

app.get('/posts', (req, res) => {
    res.send('this is posts page');
});


app.listen(3000);