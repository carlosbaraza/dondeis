angular
  .module('dondeis')
  .controller('ShowQuestionsController', ShowQuestionsController);

function ShowQuestionsController($reactive, $scope, $stateParams, $ionicHistory) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.saveAnswer = saveAnswer;

  // Workaround to force back button to show up
  $scope.$on('$ionicView.beforeEnter', (event, viewData) => {
    viewData.enableBack = true;
  });

  initNewAnswer();

  vm.helpers({
    question() {
      return Questions.findOne({ _id: $stateParams.id });
    }
  });

  function initNewAnswer() {
    vm.newAnswer = {
      body: ''  
    };
  }

  function saveAnswer() {
    Questions.update(
      { _id: $stateParams.id },
      { $push: { answers: vm.newAnswer } }
    );
    initNewAnswer();
  }
}
