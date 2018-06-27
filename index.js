const express = require('express')
const app = express()

var url = 'mongodb://localhost:27017/parc';

objectid = require('mongodb').objectid;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("pages/gestion_machines")
}),

app.get('/liste_utilisateurs', function (req, res) {
    res.render("pages/liste_utilisateurs")
}),

app.get('/liste_machines', function (req, res) {
    res.render("pages/liste_machines")
}),

app.listen(3005, () => console.log('Tout est ok'))