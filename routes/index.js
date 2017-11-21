var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/').get(function(req, res, next) {
  res.render('index', { title: 'Windows' });
}).post((req,res,next)=>{
  var password = req.body.password;
    if (password == "admin") {
      res.redirect('/windows')
    } else res.redirect('/');
});

module.exports = router;
