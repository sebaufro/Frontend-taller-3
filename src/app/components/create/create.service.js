(function () {
  'use strict';

  angular
  .module('app')
  .service('CreateService', createService);

  createService.$inject = ['$resource', 'API'];

  function createService($resource, API) {
    return $resource(API + 'categoria/:id', {id: '@id'});
  }
})();