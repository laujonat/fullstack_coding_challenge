var app = angular.module('tinderChallenge');

app.controller('CardController', ['cardService', function (cardService) {

  var vm = this;


  this.cards = [];
  this.me = {};



  this.goNext = false;
  this.action = 'like';



  cardService.find()
  .then(function(data) {

        vm.cards = data.tinders;
        vm.me = data.me;

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
