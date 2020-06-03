const Mongoose =require("mongoose")
var Schema = Mongoose.Schema;

var CategorySchema = new Schema({
    categoryid:{
        type : String ,
        required :true 
     } ,
    categoryname :{
        type : String ,
        required :true 
     },
    indgrdients : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        }
    ],
   
})
module.exports = Mongoose.model('Category', CategorySchema);