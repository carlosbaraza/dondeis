angular
  .module('dondeis')
  .controller('ShowQuestionsController', ShowQuestionsController);

function ShowQuestionsController($reactive, $scope, $stateParams, $ionicHistory) {
  var vm = this;
  $reactive(vm).attach($scope);

  // Workaround to force back button to show up
  $scope.$on('$ionicView.beforeEnter', (event, viewData) => {
    viewData.enableBack = true;
  });

  vm.helpers({
    question() {
      return Questions.findOne({ _id: $stateParams.id });
    }
  });
}
