(function () {
    'use strict';

    angular
        .module('app')
        .directive('stack', stackDirective);

    function stackDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'stackWithScope/stackWithScope.html',
            controller: StackController,
            controllerAs: 'vm'
        };
    }

    function StackController($scope) {

        $scope.data = [1, 2, 3];
        $scope.doSomething = function () {
            console.log('StackController Does Something');
            console.log($scope.data.toString());
        };

        $scope.doSomethingElse = function () {
            console.log('StackController does something else (?)')
        };
    }

})();