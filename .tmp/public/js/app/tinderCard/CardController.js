// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//     $scope.firstName= "John";
//     $scope.lastName= "Doe";
// });



var app = angular.module('tinderChallenge');

app.controller('CardController', ['cardService', function (cardService) {
// app.controller({})


// Using cardService to bind data

  var vm = this;


  this.cards = [];
  this.me = {};


  // not working!!
  this.swiped = function() {
      this.goNext = true;
  };


  this.goNext = false;
  this.action = 'like';



  cardService.find()
  .then(function(data) {

      // adding cards and me properties to objects
        vm.cards = data.tinders;
        vm.me = data.me;

        // cards and me accessible in the views with directives

  });

      this.like = function() {
        this.action = 'like';
        this.goNext = true;
      }

      this.dislike = function(){
        this.action = 'dislike';
        this.goNext = true;

    }

}]);
