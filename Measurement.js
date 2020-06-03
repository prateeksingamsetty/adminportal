const Mongoose =require("mongoose")
var Schema = Mongoose.Schema;

var MeasurementSchema = new Schema({
    measurementId:{
        type : String ,
        required :true 
     },

    measurementName:{
        type : String ,
        required :true 
     },
    volume:{
        type : Number ,
        required :true 
     },
})
module.exports = Mongoose.model('Measurement', MeasurementSchema);
