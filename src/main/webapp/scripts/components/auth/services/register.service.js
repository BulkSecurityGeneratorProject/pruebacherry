'use strict';

angular.module('pruebacherryApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


