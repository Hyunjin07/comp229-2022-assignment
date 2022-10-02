const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/*redircet from contact page to home page*/ 
router.post("/contact", function (req, res) {
  res.redirect("/https://comp229-2022-assignment.herokuapp.com/home");
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    email: req.query.email,
    contact: req.query.contact
  };
  console.log(response);
  res.end(JSON.stringify(response));
 
});



module.exports = router;
