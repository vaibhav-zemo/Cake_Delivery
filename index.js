const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expresslayout = require('express-ejs-layouts');

app.use(expresslayout);
app.use(express.static('assets'));
app.use(express.urlencoded({extended:false}));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/',require('./routers'));

app.listen(port,function (err) {
    if (err) {
        console.log("Error while creating server");
        return;
    }
    console.log("Successfully setup the server at port:",port);
})