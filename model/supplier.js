const mongoose = require('mongoose');


const  supplierSchema = new mongoose.Schema({ // this for create schema for posts
    name : {
        type  : String  ,  // this for create schema for posts
        require : true
    },
    address : {
        type : String ,
        require : true  // this for create schema for posts
    },
    contact : {
        type : String ,
        require : true  // this for create schema for posts
    }

})

module.exports = mongoose.model( 'supplier' , supplierSchema )