angular
  .module('dondeis')
  .controller('NewQuestionsController', NewQuestionsController);

function NewQuestionsController($reactive, $scope) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.saveQuestion = saveQuestion;

  vm.helpers({
    
  });

  function initQuestion() {
    vm.question = {
      object: '',
      where: ''
    };
  }

  function saveQuestion() {
    Questions.insert(vm.question); 
  }
}
