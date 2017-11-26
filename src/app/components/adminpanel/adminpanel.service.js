(function () {
  'use strict';

  angular
  .module('app')
  .service('AdminpanelService', adminpanelService);

  adminpanelService.$inject = ['$resource', 'API'];

  function adminpanelService($resource, API) {

    return $resource(API + 'noticias/:id', {id: '@id'});
  }
})();
