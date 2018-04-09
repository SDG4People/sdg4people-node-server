const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


let db;

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('test')
  app.listen(3000, () => console.log('Example app listening on port 3000!'))

  app.get('/', (req, res) => {
    let cursor = db.collection('hello_world').find().toArray((err, results) => {
      res.json(results[0]["hello_world"]);
    });
  });
});
