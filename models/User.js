
const mongoose = require('mongoose');
const { stringify } = require('postcss');

const UserSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
   
      },  {timestamps: true});


      mongoose.model = {}
    export default mongoose.model("User", UserSchema)