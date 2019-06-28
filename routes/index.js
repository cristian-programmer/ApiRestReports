var express = require('express');
var router = express.Router();
var con = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_doc_lost', function(req, res){
  con.Query(``).then(log =>{
      console.log(log);
      res.json({"":""});
    }).catch(error =>{ console.log(error)});
  });

router.get('/search_doc_lost', function(req, res){
  con.Query(``).then(log =>{
    console.log(log);
    res.json({"":""});
  }).catch(error =>{ console.log(error)});
});


module.exports = router;
