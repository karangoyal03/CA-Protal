const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardInfo = new Schema({
    category:{
        type:String
    },
    icon:{
        type:String
    },
    cardinfo:{
        type:String
    },
    cardname:{
        type:String
    }
})


const Card = mongoose.model('cards',CardInfo);


module.exports=Card