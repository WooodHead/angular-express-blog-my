var Post = require('../../models/post.js');

var data = {
    "posts": [{
        "title": "Lorem ipsum",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        "title": "Sed egestas",
        "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }]
};



module.exports.posts = function(req, res) {
    console.log('------' + 'api.js: ' + JSON.stringify(data.posts));
    res.json(data.posts);
};


module.exports.post = function(req, res) {
    res.json(req.body);
};

module.exports.addPost = function(req, res) {
  console.log('------api.js post: '+req.body);
    data.posts.push(req.body);
    res.json(req.body);
};

module.exports.editPost = function(req, res) {
    res.send('editPost');
};

module.exports.deletePost = function(req, res) {
    res.send('deletePost');
};
