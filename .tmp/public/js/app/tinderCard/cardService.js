// The Factory recipe adds the following abilities:
// - ability to use other services (have dependencies)
// - service initialization
// - delayed/lazy initialization


var app = angular.module('tinderChallenge');


app.factory('cardService', ['$q', '$http', function($q, $http) {
// cardService will be computed based on $q and $http

  var serviceAPI = {
    find: function() {

      // deferred contains the promise to be returned
      var deferred = $q.defer();

      // GET request for html controls from card (actions in TinderController) to application data
      $http.get('http://localhost:1337/tinder/card').then(function(res) {

        deferred.resolve(res.data); // fulfills the promise with `data` as the value

      });

      // returns result of action
      return deferred.promise;

    }

  };


  return serviceAPI;

}]);
