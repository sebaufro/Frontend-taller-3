(function (){
	'use strict';
	angular
	.module('app')
	.component('create', {
		templateUrl: 'app/components/create/create.html',
		controller: createCtrl,
		controllerAs: 'vm'
	});
	createCtrl.$inject = ['CreateService','$stateParams','$location','NoticiasService'];
	function createCtrl(CreateService,$stateParams,$location,NoticiasService){
		var vm = this;
		vm.noticiaForm="noticiaForm";
		vm.noticia = {
			titular: "",
			entrada: ""
		};
		vm.categorias = [];
		vm.clearValue = function() {
			vm.noticia = {};
		  };
	  vm.publish = function(formn) {
	  	console.log(formn.$valid);
	    if (formn.$valid) {

console.log(formn);
			vm.noticia.usuario_id = "1";
			NoticiasService.save(vm.noticia,function(i){
				console.log(i);
			},function(err){
				console.log(err);
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
	 
	}
})();

