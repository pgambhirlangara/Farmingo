const Post = require('../models/Post');
const Farmer = require('../models/Farmer');
// const AWS = require('aws-sdk');
const fs = require('fs');
const upload = require('../utils/upload');


const createPost = async (req, res) => {
    try {
        let farmer = await Farmer.findOne({ email: req.body.email});
        if (farmer) {
            const uploadImage = await upload(`${Date.now() + "" + req.body.title}`, req.body.image, 'jpg');

            const post = await Post.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                harvestDate: req.body.harvestDate,
                stock: req.body.stock,
                category: req.body.category,
                image: uploadImage,
                farmer
            });
    
    
            return res.status(201).json({
                message: "Post Created Succesfully",
                data: post
            })
    
        } else {
            return res.status(401).json({
                message: "Farmer Not found, you should be a farmer to create a post!"
            })
        }
       
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


// Delete a post by id
const deletePost = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Post succesfully deleted",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Update data of post by id
const updatePost = (req, res) => {
    const id = req.params.id;

    Post.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated Post',
            data: result
        });
    })
}

// Get all farmers
const getAllPosts = (req, res) => {
    Post.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched posts',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Get post data by id
const getPostById = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Post found succesfully with id ${id}`,
            data: result
        })
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        })
    })

}

module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    getPostById
};