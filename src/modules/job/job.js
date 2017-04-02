angular
    .module('modules.home', [])
    .config(config)
    .controller('homeCtrl', homeCtrl);
config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules.job', {
            url: '/job',
            views: {
                'job': {
                    templateUrl: 'src/job/job.tpl.html',
                    controller: 'jobCtrl'
                }
            },
            resolve: {}
        });
}
homeCtrl.$inject = ['$scope'];
function jobCtrl ($scope){
    
}