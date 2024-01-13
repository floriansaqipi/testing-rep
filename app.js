const path = require('path');
const express = require('express');


const app = express();

app.set('view engine', 'ejs');






app.use((req, res, next) => {
    res.send("AAAAAAAAAAAA")
});

app.listen(3000);