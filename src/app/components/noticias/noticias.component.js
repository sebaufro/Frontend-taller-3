(function () {
  'use strict';

  angular
  .module('app')
  .component('noticias', {
    templateUrl: 'app/components/noticias/noticias.html',
    controller: noticiasCtrl,
    controllerAs: 'vm'
  });

  noticiasCtrl.$inject = ['NoticiasService', '$location'];

  function noticiasCtrl(NoticiasService,$location) {
    var vm = this;

    vm.noticias = [];
    vm.goto = function(id){
      
      $location.path("/noticia/"+id);
    }
    NoticiasService.query().$promise.then(function (data) {
      vm.noticias = data;
    });
  }
})();
