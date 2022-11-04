const mongoose = require('mongoose');


const  itemSchema = new mongoose.Schema({ // this for create schema for posts
    itemName : {
        type  : String  ,  // this for create schema for posts
        require : true
    },
    unitPrice : {
        type : String ,
        require : true  // this for create schema for posts
    }

})

module.exports = mongoose.model( 'items' , itemSchema )