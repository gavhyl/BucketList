var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat:timestamp}, config.secret);
}

exports.signup = function(req, res, next){
	//test 
	//res.send('authorization is happenin, yo');
		//console.log(req.body);
		//1
		var email = req.body.email;
		var password = req.body.password;
		//2
		if( !email || !password){
			return res.status(418).send({error: 'you must provide email and pw'});
		}
		User.findOne({ email: email}, function(err, existingUser){
			if (err) {
				return next(err);

			}//handle error search

			if(existingUser){
				return res.status(418).send(err);
				//alternative: return res.status(418).send('email is in use');
			}//handles existing users

		
			//3
			var user = new User({
				email: email,
				password: password
			});

			//to save the record to the db
			user.save(function(err){
				if(err) { return next(err); }
			//4 Respod to request indicating the user was created
			res.json({ token: createUserToken(user)});
			});
		});


};

exports.signin = function(req, res, next){
	res.send({ token: createUserToken(req.user) });
};