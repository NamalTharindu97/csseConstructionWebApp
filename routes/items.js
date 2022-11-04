const express = require('express');
const items = require("../model/item");

const router = express.Router();  // express router function use for send http req

//save posts
router.post('/item/save'  , (req,res) => {  

    let newPost = new items(req.body) ; //create constructer for get posts

    newPost.save((err) => {
        if(err){
            return res.status(400).json({
                error : err
            });
        }

        return res.status(200).json({
                success:"post save successfully"
        });
    });
});

//get posts
router.get('/items' , (req,res) => {
    items.find().exec((err , posts) => {  //mongoose find methode for find the posts
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

router.get('/item/:id' , (req,res) => {
    let postId = req.params.id;

    items.findById(postId , (err , post) => {
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
router.put('/item/update/:id' , (req,res) =>{
    items.findByIdAndUpdate(
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
                    success : "Posts update successfully"
            });
        }
    )
});

//post delete 
router.delete('/item/delete/:id' ,(req,res) => {
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