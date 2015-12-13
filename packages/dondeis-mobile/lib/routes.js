angular
  .module('dondeis')
  .config(Routes)

function Routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/new-question');

  $stateProvider
  .state('home', {
    url: '/home',
    abstract:true,
    templateUrl: '/packages/dondeis-mobile/views/home.html'
  })
  .state('home.new-question', {
    url: '/new-question',
    views: {
      'tab1': {
        templateUrl: '/packages/dondeis-mobile/views/questions/new.html',
        controller: 'NewQuestionsController as vm'
      }
    }
  })
  .state('home.questions', {
    url: '/questions',
    views: {
      'tab2': {
        templateUrl: '/packages/dondeis-mobile/views/questions/list.html',
        controller: 'ListQuestionsController as vm'
      }
    }
  })
  .state('show-question', {
    url: '/questions/:id',
    templateUrl: '/packages/dondeis-mobile/views/questions/show.html',
    controller: 'ShowQuestionsController as vm'
  })

}
