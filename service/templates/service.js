angular.module('<%= appname %>').service('<%= _.camelize(name) %>', ['$http', '$q', function($http, $q) {

  var SERVICE_URL_PREFIX = 'http://localhost:9000';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getData = function() {
    var deferred = $q.defer();
    var url = SERVICE_URL_PREFIX;

    $http.get(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);
