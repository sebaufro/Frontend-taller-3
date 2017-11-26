(function () {
  'use strict';

  angular
  .module('app')
  .service('NoticiaService', noticiaService);

  noticiaService.$inject = ['$resource', 'API'];

  function noticiaService($resource, API) {

    return $resource(API + 'noticia/:id', {id: '@id'});
  }
})();
