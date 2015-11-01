var app = angular.module('tinderChallenge');


app.factory('cardService', ['$q', '$http', function($q, $http) {
// cardService will be computed based on $q and $http

  var serviceAPI = {
    find: function() {

      var deferred = $q.defer();

      $http.get('http://localhost:1337/tinder/card').then(function(res) {

        deferred.resolve(res.data); // fulfills the promise with `data` as the value

      });

      // returns result of action
      return deferred.promise;

    }

  };


  return serviceAPI;

}]);
