(function () {
'use strict';

angular.module('FilterApp', [])
       .controller('FilterAppController', FilterAppController)
       .filter('my',MyFilterFactory);

FilterAppController.$inject = ['$scope', '$filter', 'myFilter'];
function FilterAppController($scope, $filter, myFilter){
          $scope.number = 0;
          $scope.updateOutput = function(){
            $scope.output = myFilter($scope.number);
            $scope.output2 = $filter("my")($scope.number);
          };
};

// A simple filter that prepends "my_" to the input
function MyFilterFactory(){
  return function(input){
    return "my_" + input;
  };
}

})();
