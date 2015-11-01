

var app = angular.module('tinderChallenge');



app.directive('cards', [function () {

    return {

      scope: {
        cards: '=',
        next: '=',
        action: '=?'
      },

      restrict: 'E',
      replace: true,
      templateUrl: 'templates/cards.html',


      link: function(scope, elem, attr) {

        var currentCard = 0;



        scope.$watch(function() {

          return scope.next; // return scope change in next

        }, function() {

          if(scope.next) {

            scope.cards[scope.cards.length-1 - currentCard].swipe = true;

            currentCard++;

            scope.next = false;

          }
        });

        angular.forEach(scope.cards, function(card) {
          // define card.swipe, set all to false
          card.swipe = false;

        });




      },



    };
}]);
