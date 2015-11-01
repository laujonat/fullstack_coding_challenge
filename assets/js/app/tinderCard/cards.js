

var app = angular.module('tinderChallenge');

// Defining of many cards


app.directive('cards', [function () {

    return {

      scope: {
        cards: '=',
        next: '=',
        action: '=?'
      },

      // restrict so 'E' - only matches element name
      restrict: 'E',


      replace: true,
      templateUrl: 'templates/cards.html',

      // DOCS:
      // Directives that want to modify the DOM typically use the link option to register DOM listeners as well as update the DOM.
      // It is executed after the template has been cloned and is where directive logic will be put.
      link: function(scope, elem, attr) {

        var currentCard = 0;


        // homepage.ejs
        // scope: {
        //   cards: '=', -> CardController.cards
        //   next: '=', -> CardController.goNext
        //   action: '=?' -> CardController.action
        // },

        // DOCS:
        // $watch helps to listen for $scope changes
        scope.$watch(function() {

          return scope.next; // return scope change in next

        }, function() {

          // if user swipes, goNext will be set to true in like(), dislike()
          if(scope.next) {

            scope.cards[scope.cards.length-1 - currentCard].swipe = true;

            currentCard++;

            // reset to false and listen for next change from goNext
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
