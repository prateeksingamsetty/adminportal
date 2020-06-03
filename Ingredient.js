const Mongoose =require("mongoose")
var Schema = Mongoose.Schema;

var IngredientSchema = new Schema({
    /*ingredientId :{
        type : String ,
        required :true 
     },*/
     name : {
         type:String,
         required:true
     },
     /*nutritionProfileId  :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "NutritionProfile",
     },
    alternateNames: [{
        type:String,
        required :true
    }],*/
   /*compatibleMeasurements : [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Measurement",
    }],*/
    image : {
        type:String,
        required:true
    },
    density :Number,
    /*categoryId :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
  }],*/
})
module.exports = Mongoose.model('Ingredient', IngredientSchema);