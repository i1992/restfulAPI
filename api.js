const express = require('express')
const router = express.Router()
const Registration = require('./registration')


// get a list form db
router.get('/registrations', (req, res, next)=>{
  Registration.find({})
  .then((registration)=>{
    res.send(registration)
  })
})

// add a new data to fb
router.post('/registrations', (req, res, next)=>{
  Registration.create(req.body)
  .then((registration)=>{
    res.send(registration)
  }).catch(next)
})

//update a new data to db
router.put('/registrations/:id', (req, res, next)=>{
  Registration.findByIdAndUpdate({_id : req.params.id}, req.body)
  .then(()=>{
      Registration.findOne({_id : req.params.id})
      .then((registration)=>{
          res.send(registration)
      })

  })


})

// delete the  data to db
router.delete('/registrations/:id', (req, res, next)=>{
  Registration.findByIdAndRemove({_id : req.params.id})
  .then((registration)=>{
    res.send(registration)
  })
})


module.exports = router
