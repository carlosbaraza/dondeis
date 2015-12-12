angular
  .module('dondeis')
  .controller('ListQuestionsController', ListQuestionsController);

function ListQuestionsController($meteor) {
  var vm = this;

  vm.questions = [
    {
      object: 'Christmas tree lights',
      city: 'Metz'
    }, {
      object: 'Yoga classes',
      city: 'Metz'
    }
  ];
}
