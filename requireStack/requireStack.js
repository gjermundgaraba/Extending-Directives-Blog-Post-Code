(function () {
    'use strict';

    angular
        .module('app')
        .directive('requireStack', requireStackDirective);

    function requireStackDirective() {
        return {
            scope: {},
            restrict: 'AE',
            templateUrl: 'requireStack/requireStack.html',
            controller: RequireStackController,
            controllerAs: 'vm'
        };
    }

    function RequireStackController() {
        var vm = this;

        vm.data = [1, 2, 3];
        vm.doSomething = function () {
            console.log('RequireStackController Does Something');
            console.log(vm.data.toString());
        };

        vm.doSomethingElse = function () {
            console.log('RequireStackController does something else (?)')
        }
    }

})();