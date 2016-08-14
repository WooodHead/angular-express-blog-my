var express = require('express');
var router = express.Router();
var api = require('./api');

// router.get('/posts', api.posts);
router.get('/posts', api.posts);

router.get('/post/:id', api.post);
router.post('/post', api.addPost);
router.put('/post/:id', api.editPost);

router.delete('/post/:id', api.deletePost);



module.exports = router;
