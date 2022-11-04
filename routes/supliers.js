const express = require('express');
const supliers = require("../model/supplier");

const router = express.Router();  // express router function use for send http req

//save posts
router.post('/supliers/save'  , (req,res) => {  

    let newPost = new supliers(req.body) ; //create constructer for get posts

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
router.get('/supliers' , (req,res) => {
    supliers.find().exec((err , posts) => {  //mongoose find methode for find the posts
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

router.get('/supliers/:id' , (req,res) => {
    let postId = req.params.id;

    supliers.findById(postId , (err , post) => {
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
router.put('/supliers/update/:id' , (req,res) =>{
    supliers.findByIdAndUpdate(
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
                    success : "Supplier update successfully"
            });
        }
    )
});

//post delete 
router.delete('/supliers/delete/:id' ,(req,res) => {
    supliers.findByIdAndRemove(req.params.id).exec((err,deletePost) => {
            if(err) return res.status(400).json({
                error : err
            });

            return res.status(200).json({
                message : "delete successfull" , deletePost
            });
        });
});



module.exports = router;