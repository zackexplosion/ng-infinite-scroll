angular
.module('zackexplosion-ngLoading',[])
.config(
[       '$locationProvider', '$httpProvider',
function($locationProvider,   $httpProvider) {
    $httpProvider.interceptors.push('LoadingInterceptor');
}])
.factory('LoadingInterceptor', 
[       '$rootScope', 
function($rootScope){
    // assume there is something ajax request so the default is true
    $rootScope.zackexplosion_loading = true;
    return {
        'request': function(config) {
            $rootScope.zackexplosion_loading = true;
            return config;
        },
        'response': function(response) {
            $rootScope.zackexplosion_loading = false;
            return response;
        }
    };
}]);