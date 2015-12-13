angular
  .module('dondeis')
  .controller('ListQuestionsController', ListQuestionsController);

function ListQuestionsController($reactive, $scope, $state, $ionicViewSwitcher) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.goToQuestion = goToQuestion;

  vm.helpers({
    questions () {
      return Questions.find();
    }
  });

  function goToQuestion(question) {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go('show-question', { id: question._id });
  }
}
