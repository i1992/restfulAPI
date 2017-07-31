const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegistrationSchema = new Schema({

  firstname : {
    type: String,
    required : [true, 'FirstName field is required']
  },

  lastname : {
    type : String,
    required : [true, 'Lastname field is required']
  },
  phone_number : {
    type : String,
    required : [true, 'Phone field is required']
  },
  email_id : {
    type : String,
    required : [true, 'emailid field is required']
  }

})

const Registration = mongoose.model('registration', RegistrationSchema)

module.exports = Registration
