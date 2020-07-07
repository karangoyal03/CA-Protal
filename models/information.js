const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    city:{
        type:String
    },
    service:{
        type:String
    }

})


const Information = mongoose.model('info',InfoSchema);


module.exports=Information;