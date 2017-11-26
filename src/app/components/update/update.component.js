(function (){
	'use strict';
	angular
	.module('app')
	.component('update', {
		templateUrl: 'app/components/update/update.html',
		controller: updateCtrl,
		controllerAs: 'vm'
	});
	updateCtrl.$inject = ['UsuarioService','CredentialsService','CreateService','$stateParams','$location','NoticiasService'];
	function updateCtrl(UsuarioService,CredentialsService,CreateService,$stateParams,$location,NoticiasService){
		var vm = this;
		vm.noticiaForm="noticiaForm";
		vm.noticia = '';
		vm.categorias = [];
		vm.clearValue = function() {
			vm.noticia = {};
		  };
	  vm.publish = function(formn) {
	  	console.log(formn.$valid);
	    if (formn.$valid) {

			vm.noticia.usuario_id = "1";
			NoticiasService.update({id: $stateParams.id},vm.noticia,function(i){
				console.log(i);
			},function(response){
				console.log(response);
			});

			
	      formn.$setSubmitted();
	      $location.path("/adminpanel");
	    } else {
	      alert('Faltan datos.');
	    }
	     };
	CreateService.query().$promise.then(function (data) {
      vm.categorias = data;
    });
	NoticiasService.get({id: $stateParams.id}).$promise.then(function (data) {
      vm.noticia = data;
    }); 
	}
})();

