var express = require('express');
var router = express.Router();
const db = require('../models/db')
const session = require('session')
const app = express();

/* 设置跨域. */
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.get('/', function(req, res, next) {
  res.render('home', { title: 'tmovie' });
});

router.post('/login', function (req, res, next) {
 console.log( req);
 let {userName, userPsw} = req.body
 db.find('users',{userName},(err,r) => {
   console.log(r.length)
   if (err) {
      console.log(err)
      next(err)
      return
   }
   if (r.length === 0) {
      res.send({message:null});
   } else {

     if(r[0].userName == userName && r[0].userPsw == userPsw ) {
        res.send({message:'success'})
        return
     }else {
       res.send({message:'error'})
     }
   }
 })
  
})

router.post('/register', (req, res, next) => {
  let {userName, userPsw, phoneNum} = req.body


  db.find("users",{userName},(err,r) => {
    if(err) {
      console.log(err)
      next(err)
      return
    } 
    if ( r.length === 0){
      db.insertDocument('users',[{userName, userPsw, phoneNum}],(err,r)=> {
        if(err) {
          console.log(error)
          next(err)
          return
        }
        res.send({message:'success'})
        // res.redirect('http://localhost:8082/login')
      })
    } else if(r[0].userName === userName ) {
        
        res.send({message:'用户名已经注册！'})

    }
  })
})

module.exports = router;
