const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => res.json('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
