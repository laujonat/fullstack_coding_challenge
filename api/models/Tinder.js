/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Q = require('q');


var me = {
  id: 0,
  name: "me",
  age: 23,
  mutualfriends: 2,
  interests: ['biking', 'dancing', 'climbing'],
  imgURL: 'NaN'
};

var user1 = {
  id: 1,
  name: "Ali",
  age: 22,
  mutualfriends: 2,
  interests: ['hockey', 'biking'],
  imgURL: '/images/users/1/ali_main.jpg'
};

var user2 = {
  id: 2,
  name: "Alyssa",
  age: 27,
  mutualfriends: 3,
  interests: ['dancing', 'eating'],
  imgURL: '/images/users/2/alyssa_main.jpg'
};

var user3 = {
  id: 3,
  name: "Hannah",
  age: 22,
  mutualfriends: 7,
  interests: ['guys', 'hockey'],
  imgURL: '/images/users/3/hannah_main.jpg'
};
var user4 = {
  id: 4,
  name: "Jessica",
  age: 23,
  mutualfriends: 22,
  interests: ['dancing', 'biking'],
  imgURL: '/images/users/4/jessica_main.jpg'
};
var user5 = {
  id: 5,
  name: "Nina",
  age: 21,
  mutualfriends: 3,
  interests: ['nothing', 'ihavenolife'],
  imgURL: '/images/users/5/nina_main.jpg'
};
var user6 = {
  id: 6,
  name: "Dana",
  age: 15,
  mutualfriends: 5,
  interests: ['awww', 'yeeeee'],
  imgURL: '/images/users/6/dana_main.jpg'
};

var user7 = {
  id: 7,
  name: "David",
  age: 23,
  mutualfriends: 7,
  interests: ['guys', 'hockey', 'biking', 'climbing'],
  imgURL: '/images/users/7/david_main.jpg'
};
var user8 = {
  id: 8,
  name: "Christine",
  age: 23,
  mutualfriends: 22,
  interests: ['dancing', 'biking'],
  imgURL: '/images/users/8/christine_main.jpg'
};
var user9 = {
  id: 9,
  name: "Zoe",
  age: 25,
  mutualfriends: 3,
  interests: ['nothing', 'biking'],
  imgURL: '/images/users/9/zoe_main.jpg'
};
var user10 = {
  id: 10,
  name: "Julianna",
  age: 21,
  mutualfriends: 5,
  interests: ['awww', 'yeeeee'],
  imgURL: '/images/users/10/julianna_main.jpg'
};

var users = [me, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];



module.exports = {

  schema: true,

  attributes: {
    id: {
      type: 'integer',
      required: true,
      unique: false
    },
    name: {
      type: 'string',
      required: true
    },
    age: {
      type: 'integer',
      required: true
    },
    mutualfriends: {
      type: 'integer',
      required: true
    },
    interests: {
      type:'JSON',
      defaultsTo:[]
    },
    imgURL: {
      type: 'string'
    }

  },

  cleanDB: function() {
    var deferred = Q.defer();

    Tinder.destroy().then(function() {
      Tinder.create(users)
      .then(function usersCreated(tinders) {
        deferred.resolve();

      });

    })
    return deferred.promise;
  }

};
