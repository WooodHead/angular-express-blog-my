var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
  res.render('index',{});
  // res.send('index.js');
});
//
// router.get('/partials/:name',function(req,res){
//   console.log('-----'+'routes/index.js partials/:naem');
//   var name=req.params.name;
//   res.render('partials/'+name);
// });
//
// router.get('/*',function(req,res){
//   console.log('-----'+'redirect');
//   res.redirect('/');
// });

module.exports=router;
