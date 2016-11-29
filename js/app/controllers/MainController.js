function MainController($scope) {
  $scope.firstName = 'Steve';
  $scope.lastName = 'Frost';
}

angular
  .module('app')
  .controller('MainController', MainController);