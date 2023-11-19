'use strict';

var mongoose = require('mongoose');
/** exemple de user
  {
    "name": { String, required: true },
    "email": { String, required: true, unique: true },
    "salt": { String, required: true },
    "password": { String, required: true },
    "role": { String, required: true, default: "user"}
    
  },
 */
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salt: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user"}
});

UserSchema.virtual('front').get(function() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      role: this.role
    };
  });

module.exports = mongoose.model('users', UserSchema);
