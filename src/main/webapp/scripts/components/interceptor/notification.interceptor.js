 'use strict';

angular.module('pruebacherryApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-pruebacherryApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-pruebacherryApp-params')});
                }
                return response;
            }
        };
    });
