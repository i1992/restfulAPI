const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

//connect to mongodb

mongoose.connect('mongodb://localhost/mybook')
mongoose.Promise = global.Promise



app.use(bodyParser.json())

// init routes
app.use('/api', require('./api'))

// error handling
app.use((err, req, res, next)=>{
  console.log(err);
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, ()=>{
  console.log('hey ready');

})
