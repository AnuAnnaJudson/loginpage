var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello")
  let admin = req.session.admin
  console.log(admin)
  let boxes=[
    {
      pic : "https://a-static.besthdwallpaper.com/dark-dice-wallpaper-800x600-34_17.jpg",
			hd : "Personal Website using HTML, CSS, Bootstrap and javascript.",
      c1 : "by admin",
      c2 : "21st Aug, 2021",
      c3 :  "Comments",
      con : "This site contains all my personal details and works I've done.It also oncludes my acheivemnets and skill sets."  ,
    },
    {
      pic : "https://cdn.wallpapersafari.com/78/0/WgY0AM.png",
			hd : "Design for online shopping platform, Lifestyle Store",
      c1 : "by admin",
      c2 : "21st Aug, 2021",
      c3 :  "Comments",
      con : "This is a simple design of an online shopping platform done using HTML,CSS and bootstrap. This was my first step towards familiarizing with these tools." , 
    },
    {
      pic : "https://themobilewallpaper.com/index.php/blog/image/800/600/Dark-Eyes-anime-movie-angry-girl-Ultra-HD-Mobile-Wallpaper-1622819514.jpg",
			hd : "Personal Website using HTML, CSS, Bootstrap and javascript.",
      c1 : "by admin",
      c2 : "21st Aug, 2021",
      c3 :  "Comments",
      con : "My final year project was a wearable device for the elderly, which is capable of detecting the daily activities and also alerting the caretakers in case of an emergency. This was done using google Activity Recognition API." , 
    }
  ];
  res.render('home', {boxes,admin});
});

module.exports = router;
