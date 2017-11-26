(function () {
  'use strict';
  angular
  .module('app')
  .component('noticia', {
    templateUrl: 'app/components/noticia/noticia.html',
    controller: noticiaCtrl,
    controllerAs: 'vm',
  });


	noticiaCtrl.$inject = ['NoticiaService','$stateParams'];

  function noticiaCtrl(NoticiaService,$stateParams) {
    var vm = this;

    vm.noticia = [];

    NoticiaService.get({id: $stateParams.id}).$promise.then(function (data) {
      vm.noticia = data;
    });
  }
})();
