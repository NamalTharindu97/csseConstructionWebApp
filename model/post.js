const mongoose = require('mongoose');


const  postSchema = new mongoose.Schema({ // this for create schema for posts
    location : {
        type  : String  ,  // this for create schema for posts
        require : true
    },
    name : {
        type : String ,
        require : true  // this for create schema for posts
    },
    contact :{
        type : String ,
        require : true   // this for create schema for posts
    }
})

module.exports = mongoose.model( 'Posts' , postSchema )