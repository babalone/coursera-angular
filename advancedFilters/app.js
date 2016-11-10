(function () {
'use strict';

angular.module('FilterApp', [])
       .controller('FilterAppController', FilterAppController)
       .filter('my',MyFilterFactory);

FilterAppController.$inject = ['$scope', '$filter', 'myFilter'];
function FilterAppController($scope, $filter, myFilter){
          $scope.input = "";
};

// This filter will prepend and append some text.
function MyFilterFactory(){
  return function(input,preText = "my_", postText = "_filtered_text"){
    return preText + input + postText;
  };
}

})();
