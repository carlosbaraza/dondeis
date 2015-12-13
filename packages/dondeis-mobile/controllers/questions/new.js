angular
  .module('dondeis')
  .controller('NewQuestionsController', NewQuestionsController);

function NewQuestionsController($reactive, $scope) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.saveQuestion = saveQuestion;
  initQuestion();

  vm.helpers({
    
  });

  function initQuestion() {
    vm.question = {
      object: '',
      where: '',
      answers: []
    };
  }

  function saveQuestion() {
    Questions.insert(vm.question); 
  }
}
