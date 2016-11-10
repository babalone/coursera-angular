(function () {
'use strict';

angular.module('NgRepeatApp', [])
       .controller('NgRepeatAppController', FilterAppController);

FilterAppController.$inject = ['$scope', '$filter'];
function FilterAppController($scope, $filter){
          $scope.letters = ["a","b","c","d"];
};

})();
