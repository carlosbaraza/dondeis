angular
  .module('dondeis')
  .controller('ListQuestionsController', ListQuestionsController);

function ListQuestionsController($reactive, $scope) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.helpers({
    questions () {
      return Questions.find();
    }
  });
}
