const express = require('express');
const orders = require("../model/order");

const router = express.Router();  // express router function use for send http req

//save posts
router.post('/order/save'  , (req,res) => {  

    let newPost = new orders(req.body) ; //create constructer for get posts

    newPost.save((err) => {
        if(err){
            return res.status(400).json({
                error : err
            });
        }

        return res.status(200).json({
                success:"Order save successfully"
        });
    });
});

//get posts
router.get('/orders' , (req,res) => {
    orders.find().exec((err , posts) => {  //mongoose find methode for find the posts
        if(err){
            return res.status(400).json({
                error : err
            })
        }

        return res.status(200).json({
            success : true,
            existingPosts : posts
        });
    });
});

//get one post

router.get('/order/:id' , (req,res) => {
    let postId = req.params.id;

    orders.findById(postId , (err , post) => {
        if(err){
            return res.status(400).json({
                success : false ,
                err
            });
        } 

        return  res.status(200).json({ success : true , post});
        
    })
})

//update posts
router.put('/order/update/:id' , (req,res) =>{
    orders.findByIdAndUpdate(
        req.params.id,
        {
            $set :req.body
        },
        (err,post) => {
            if(err) {
                return res.status(400).json({
                    error : err
                })
            }

            return res.status(200).json({
                    success : "Order update successfully"
            });
        }
    )
});

//post delete 
router.delete('/orders/delete/:id' ,(req,res) => {
    items.findByIdAndRemove(req.params.id).exec((err,deletePost) => {
            if(err) return res.status(400).json({
                error : err
            });

            return res.status(200).json({
                message : "delete successfull" , deletePost
            });
        });
});


module.exports = router;