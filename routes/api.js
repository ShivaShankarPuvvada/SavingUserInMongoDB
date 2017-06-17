var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
	res.render('index');
});


router.post('/register', function(req, res, next){
	
	var Name = req.body.Name;
	var Email = req.body.Email;
	var Password = req.body.Password;

	var user = new User();

		user.Name = Name;
		user.Email = Email;
		user.Password = Password;

	user.save(function(err, savedUser){
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
		return res.status(200).send();
	});

});

module.exports = router;