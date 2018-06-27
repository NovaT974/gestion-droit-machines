const express = require('express')
const app = express();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var urlmongo = 'mongodb://localhost:27017/parc';
var tab = [];

objectid = require('mongodb').objectid;

app.use(bodyParser.urlencoded({
    extended: false
  }));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("static"));

app.get('/', function (req, res) {
    res.render("pages/gestion_machines")
});

app.get('/liste_utilisateurs', function (req, res) {
    res.render("pages/liste_utilisateurs")
});

//recupere la base de donnée

app.get('/users', function (req, res) {
    MongoClient.connect(urlmongo, function (err, database) {
      if (err) throw err;
      database.db("parc").collection("utilisateurs").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        tab = result;
        database.close();
        return result;
      });
    });
    res.json(tab);
});

// affichage apres entré du formulaire
app.get('/users',  function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var dbo = db.db("parc");
    MongoClient.then(urlmongo,function(err, db) {
        dbo.collection('utilisateurs').find({}).toArray().then(function(forms) {
            res.status(200).json(forms);
        });
    });
});


app.post('/add', function (req, res) {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    MongoClient.connect(urlmongo, function (err, database) {
      var mydoc = {
        nom: nom,
        prenom: prenom
      };
      database.db("parc").collection("utilisateurs").insertOne(mydoc, function (err, res) {
        if (err) throw err;
        console.log("1 document ajouté");
        database.close();
      });
      res.end("Doc inséré");
    });
  });

app.get('/liste_machines', function (req, res) {
    res.render("pages/liste_machines")
});

app.listen(3002, () => console.log('Tout est ok'))



