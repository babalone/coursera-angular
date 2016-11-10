(function () {
'use strict';

angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
          var posMessage = "Enjoy!";
          var negMessage = "Too much!";
          var nullMessage = "Please enter data first";
          var defaultMessage = "";

          $scope.list = "";
          $scope.message = defaultMessage;

          $scope.check = function() {
            var count = $scope.list.split(",").length;
            var msg = defaultMessage;

            if($scope.list.length == 0){
              msg = nullMessage;
            }else if(count <= 3){
              msg = posMessage;
            } else {
              msg = negMessage;
            }
            $scope.message = msg;
          }
};

})();
