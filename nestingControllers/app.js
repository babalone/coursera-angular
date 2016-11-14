(function () {
'use strict';

angular.module('NestedApp', [])
       .controller('NestedAppParentController', NestedAppParentController)
       .controller('NestedAppChildController', NestedAppChildController);

NestedAppParentController.$inject = ['$scope', '$filter'];
function NestedAppParentController($scope, $filter){
  $scope.parentValue = 1;
  $scope.parentController = this;
  $scope.parentController.parentValue = 1;
  var parent = this;
  parent.value = 1;
  console.log("parent: $scope", $scope);
};

NestedAppChildController.$inject = ['$scope', '$filter'];
function NestedAppChildController($scope, $filter){
console.log("$scope", $scope);
  console.log("$scope.parentValue", $scope.parentValue);
  console.log("$scope.$parent.parentValue", $scope.$parent.parentValue);
  console.log("$scope.parentController", $scope.parentController);
  console.log("$scope.parentController.parentValue", $scope.parentController.parentValue);
  var child = this;
  child.value = 6;
  $scope.parentValue = 4;
  $scope.parentController.parentValue = 5;
  console.log("$scope", $scope);
  console.log("$scope.parentValue", $scope.parentValue);
  console.log("$scope.$parent.parentValue", $scope.$parent.parentValue);
  console.log("$scope.parentController", $scope.parentController);
  console.log("$scope.parentController.parentValue", $scope.parentController.parentValue);
};

})();
