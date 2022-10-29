const express = require ("express");  //for create server
const mongoose = require("mongoose");  // for create db connnection
const bodyParser = require('body-parser'); //for json fomat data convert to javaScript objects
const cors = require('cors');

const app = express(); 
const PORT = 8000;

//import router
const postRoutes = require('./routes/posts');


//middleware
app.use(bodyParser.json())
app.use(cors());


//rouete middleware
app.use(postRoutes);

const DB_URL = 'mongodb+srv://csse:csse@csse.d7j8odg.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(DB_URL).then(()  => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("db connection error" , err)
})

app.listen(PORT , () => {
    console.log(`app is runnig on port ${PORT} `);
});





