(function () {
    'use strict';

    angular
        .module('app')
        .directive('require', requireDirective);

    function requireDirective() {
        return {
            scope: {},
            restrict: 'AE',
            templateUrl: 'require/require.html',
            controller: RequireController,
            controllerAs: 'vm'
        };
    }

    function RequireController() {
        var vm = this;

        vm.data = [1, 2, 3];
        vm.doSomething = function () {
            console.log('RequireController Does Something');
            console.log(vm.data.toString());
        };

        vm.doSomethingElse = function () {
            console.log('RequireController does something else (?)')
        }
    }

})();