const Mongoose =require("mongoose")
var Schema = Mongoose.Schema;

var NutritionProfileSchema = new Schema({
    nutritionProfileId :{
        type:String ,
        required :true 
    },
    ingredientId : {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
    },
    proteinContent :{
        type : Number,
        required:true,
    },
    fatContent :{
        type : Number,
        required:true,
    },
    carbohydrateContent :{
        type : Number,
        required:true,
    },
    vitaminName:{
        type:String ,
        required:true,
        vitaminContent:{
            type : Number,
            required:true,  
    }
}

    
})
module.exports = Mongoose.model('NutritionProfile', NutritionProfileSchema);