(function () {
'use strict';

angular.module('FilterFilterApp', [])
       .controller('FilterFilterAppController', FilterFilterAppController);

FilterFilterAppController.$inject = ['$scope', '$filter'];
function FilterFilterAppController($scope, $filter){
          $scope.someList = ["Bread", "Butter", "Milk", "Peanut Butter",
                             "Orange Juice", "Egg", "Pumpkin", "Potatoe"];
};

})();
