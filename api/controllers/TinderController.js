/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {



	card: function(req,res) {

		Tinder.cleanDB().then(function() {

			Tinder.find(function foundUsers(err, tinders) {
				if(err)
					return next(err);

					// for me user
					var me = tinders[0];
					// all other users
					var realTinders = [];

					for(var i=1;i < tinders.length; i++){

						var mutualIntrests = 0;

						// loop through each interest per user
						_.forEach(tinders[i].interests, function(intrest) {


							// for each iteration of tinders[i]
							if(me.interests.indexOf(intrest) !== -1){
								// This method returns -1 if the value to search for never occurs.


								mutualIntrests++;
							}

						});

						tinders[i].mutualIntrests = mutualIntrests; // # of mutual interests

						realTinders.push(tinders[i]); // store each user into array realTinders
					}


				// response to get request from cardService
				// data accessible with tinders and me
				res.send({
					tinders: realTinders,
					me: me
				});
			});
		})

	},















};
