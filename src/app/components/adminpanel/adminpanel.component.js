(function () {
  'use strict';

  angular
  .module('app')
  .component('adminpanel', {
    templateUrl: 'app/components/adminpanel/adminpanel.html',
    controller: adminpanelCtrl,
    controllerAs: 'vm'
  });

  adminpanelCtrl.$inject = ['AdminpanelService', '$location','$mdDialog'];

  function adminpanelCtrl(AdminpanelService,$location,$mdDialog) {
    var vm = this;

    vm.noticias = [];
    vm.goto = function(id){
      $location.path("/noticia/"+id);
    }
    vm.update = function(id){
      $location.path("/update/"+id);
    }
    vm.create = function(){
      $location.path("/crear");
    }
    vm.showConfirm = function(ev,data,id) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('¿Quiere eliminar esta Noticia?')
          .textContent(data)
          .ariaLabel('Lucky day')
          .ok('Eliminar')
          .cancel('Cancelar');

    $mdDialog.show(confirm).then(function() {
      AdminpanelService.delete({id: id}, function(data){
        vm.noticias = [];
            AdminpanelService.query().$promise.then(function (data) {
              vm.noticias = data;
            });
        });
    });
  };
    AdminpanelService.query().$promise.then(function (data) {
      vm.noticias = data;
    });
  }
})();