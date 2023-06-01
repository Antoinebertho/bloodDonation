const { Schema, model } = require('mongoose');

const userSchema = new Schema({
      email    : { type: String, required: true, unique: true },
      password : { type: String, required: true },
      userType : { type: String, required: true, enum: [ "admin", "hopital", "donneur", "organisation" ] },
      telephone: { type: String, required: true },
      //if admin ou donneur
      name: {
        type: String, required: function(){
          return (this.userType == "admin" || this.userType == "donneur") ? true : false
        }
      },
      //if hopital ou organisation
      adresse: {
        type: String, required: function(){
          return (this.userType == "organisation" || this.userType == "hopital") ? true : false
        }
      },
      // if hopital
      hospitalName: {
        type: String, required: function(){
          return (this.userType == "hopital") ? true : false
        }
      },
      /*responsableBlood: {
        type: String, required: function(){
          return (this.userType == "hopital") ? true : false
        }
      },*/
      // if organisation
      organisationName: {
        type: String, required: function(){
          return (this.userType == "organisation") ? true : false
        }
      },
      website         : {
        type: String, required: function(){
          return (this.userType == "organisation") ? true : false
        }
      }
    }
)

const User     = model('User', userSchema);
module.exports = User
