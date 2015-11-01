

var app = angular.module('tinderChallenge');

// Defining for EACH card
// http://www.jeremyzerr.com/angularjs-directive-best-practices
app.directive('card', [ function () {


    var ctrl = function(){

    };

    return {


      // What is this? '=?'
      scope: {
        ngModel: '=',
        action: '=?'
      },


      // restrict matches element name
      restrict: 'E',
      controller: 'CardController',


      // replace with directive's template
      replace: true,
      templateUrl: 'templates/card.html',


      link: function(scope, elem, attrs, CardController) {

        var mc = new Hammer(elem[0]);
        var card = angular.element(elem[0]); // how does this define card?

        // ng-model="card"  action="action" -> 'like'
        scope.$watch(function() {

          // at initialization, card.swipe -> set all to false
          return scope.ngModel.swipe;

        }, function() {

          console.log(scope.ngModel.swipe); // undefined
          if(scope.ngModel.swipe) {

            if(scope.action === 'like') {
              // if action is currently set to 'like'

              card.addClass('rotate-left');
              card.append('<div class="status like">Like</div>');


            } else {
              // action is currently set to 'dislike'
              card.addClass('rotate-right');
              card.append('<div class="status dislike">Nope</div>');
            }
            // reset to false
            scope.ngModel.swipe = false;
          }

        });

        mc.on("panleft panright", function(ev) {

          if(ev.type === 'panright') {

              card.addClass('rotate-left');
              card.append('<div class="status like">Like</div>');

              // attrs.cntrl = true;
              CardController.goNext = true;

          } else {

              card.addClass('rotate-right');
              card.append('<div class="status dislike">Nope</div>');

          }

        });
      }



    };
}]);
