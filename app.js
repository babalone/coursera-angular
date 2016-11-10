(function () {
'use strict';

var exercises = [
  {name: "First Simple App", folder: "firstSimpleApp"},
  {name: "Name Calculator", folder: "nameCalculator"},
  {name: "First Filter App", folder: "firstFilterApp"},
  {name: "Advanced Filter App", folder: "advancedFilters"},
  {name: "ng-repeat", folder: "ng-repeat"}
];

angular.module('NgRepeatApp', [])
       .controller('NgRepeatAppController', NgRepeatAppController);

NgRepeatAppController.$inject = ['$scope'];
function NgRepeatAppController($scope){
          $scope.exercises = exercises;
};

})();
