const mongoose = require('mongoose');


const  orderSchema = new mongoose.Schema({ // this for create schema for posts
    site : {
        type  : String  ,  // this for create schema for posts
        require : true
    },
    item : {
        type : String ,
        require : true  // this for create schema for posts
    },
    supplier : {
        type : String ,
        require : true  // this for create schema for posts
    }

})

module.exports = mongoose.model( 'order' , orderSchema )