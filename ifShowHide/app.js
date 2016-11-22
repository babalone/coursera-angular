(function () {
'use strict';

angular.module('IfShowHideApp', [])
       .controller('IfShowHideAppController', IfShowHideAppController);

IfShowHideAppController.$inject = ['$scope'];
function IfShowHideAppController($scope){
  $scope.someText = "";
};

})();
