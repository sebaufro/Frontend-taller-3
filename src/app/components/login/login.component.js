(function () {
  'use strict';

  angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginCtrl,
    controllerAs: 'vm'
  });

  loginCtrl.$inject = ['LoginService', 'CredentialsService', '$state', '$rootScope'];

  function loginCtrl(LoginService, CredentialsService, $state, $rootScope) {
    var vm = this;
    vm.loginError = false;

    vm.credentials = {};

    vm.login = function (credentials) {
      LoginService.save(credentials, function (data) {
        if(data.token){
        CredentialsService.setToken(data.token);
        CredentialsService.setUser(data.email);
        $rootScope.$emit('isLogin');
       $rootScope.$emit('User');
        $state.go('adminpanel');
      }else{
        vm.loginError = true;
      }
      }, function (error) {
        vm.loginError = true;
      });
    };
  }
})();
