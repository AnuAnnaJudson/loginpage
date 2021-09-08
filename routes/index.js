var express = require('express');
var router = express.Router();
const admin="anuannaaaj@gmail.com"
const pass="abcde"

/* GET home page. */
router.get('/', function(req, res, next) {
  if((req.session.loggedIn)==true){
    res.redirect('home')
  
  }else{
   res.render('index', { title: 'login' });
  }
});

router.post('/home',function(req,res,next){
  
  
 
  if((req.body.email==admin)&&(req.body.password==pass)){
  
    req.session.loggedIn=true;
    
    req.session.admin=admin;

    res.redirect('home')
  }
  else{
    res.render('index',{message:"invalid"}) 
  }
});

router.get('/signout',function(req,res){
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
