

var app = angular.module('tinderChallenge');


app.directive('card', [ function () {

    var ctrl = function(){

    };

    return {
      scope: {
        ngModel: '=',
        action: '=?'
      },


      restrict: 'E',
      controller: 'CardController',


      replace: true,
      templateUrl: 'templates/card.html',


      link: function(scope, elem, attrs, CardController) {

        var mc = new Hammer(elem[0]);
        var card = angular.element(elem[0]);

        scope.$watch(function() {

          return scope.ngModel.swipe;

        }, function() {

          console.log(scope.ngModel.swipe); // undefined
          if(scope.ngModel.swipe) {

            if(scope.action === 'like') {

              card.addClass('rotate-left');
              card.append('<div class="status like">Like</div>');


            } else {
              card.addClass('rotate-right');
              card.append('<div class="status dislike">Nope</div>');
            }
            scope.ngModel.swipe = false;
          }

        });

        mc.on("panleft panright", function(ev) {

          if(ev.type === 'panright') {

              card.addClass('rotate-left');
              card.append('<div class="status like">Like</div>');

              CardController.goNext = true;

          } else {

              card.addClass('rotate-right');
              card.append('<div class="status dislike">Nope</div>');

          }

        });
      }



    };
}]);
