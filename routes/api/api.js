var Post=require('../../models/post.js');

module.exports.posts=function(req,res){
  res.json([{title:'123'},{title:'234'}]);
};


module.exports.post=function(req,res){
    res.json({title:'123'});
};

module.exports.addPost=function(req,res){
    res.json({title:'123'});
};

module.exports.editPost=function(req,res){
  res.send('editPost');
};

module.exports.deletePost=function(req,res){
  res.send('deletePost');
};
