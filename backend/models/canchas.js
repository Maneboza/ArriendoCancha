const mongoose = require("mongoose");

const CanchasSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true},

  imageUrl: {
    type: String, 
    required: true},
    
  valorCancha:{
    type: String
}
   
   
});

const Canchas = mongoose.model("canchas", CanchasSchema);
module.exports = Canchas;