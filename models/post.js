var mongoose=require('mongoose');

var PostSchema=mongoose.Schema({
  title:String,
  text:String
});

module.exports=mongoose.model('Post',PostSchema,'posts');
