const express = require('express');
const Posts = require("../model/post");

const router = express.Router();  // express router function use for send http req

//save posts
router.post('/post/save'  , (req,res) => {  

    let newPost = new Posts(req.body) ; //create constructer for get posts

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
router.get('/posts' , (req,res) => {
    Posts.find().exec((err , posts) => {  //mongoose find methode for find the posts
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

router.get('/post/:id' , (req,res) => {
    let postId = req.params.id;

    Posts.findById(postId , (err , post) => {
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
router.put('/post/update/:id' , (req,res) =>{
    Posts.findByIdAndUpdate(
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
router.delete('/post/delete/:id' ,(req,res) => {
        Posts.findByIdAndRemove(req.params.id).exec((err,deletePost) => {
            if(err) return res.status(400).json({
                error : err
            });

            return res.status(200).json({
                message : "delete successfull" , deletePost
            });
        });
});



module.exports = router;