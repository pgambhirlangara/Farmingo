const express = require('express');
const router = express.Router();
const validateUser = require('../auth');
const { createPost, getAllPosts, updatePost, deletePost, getPostById } = require('../controller/Post');


router.use(logger);

router.post('/create', createPost);

router.get('/', getAllPosts);

router.put('/:id', validateUser, updatePost);

router.delete('/:id', validateUser, deletePost);

router.get('/:id', validateUser, getPostById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;