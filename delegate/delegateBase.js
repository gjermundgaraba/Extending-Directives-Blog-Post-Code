(function () {
    'use strict';

    angular
        .module('app')
        .directive('delegateBase', delegateBaseDirective);

    function delegateBaseDirective() {
        return {
            scope: {
                delegate: '='
            },
            restrict: 'AE',
            templateUrl: 'delegate/delegateBase.html',
            controller: DelegateBaseController,
            controllerAs: 'vm'
        };
    }

    function DelegateBaseController($scope) {
        var vm = this;

        vm.data = [1, 2, 3];
        vm.doSomething = function () {
            if ($scope.delegate && ('doSomething' in $scope.delegate)) {
                $scope.delegate.doSomething(vm.data);
            }
        };

        vm.doSomethingElse = function () {
            if ($scope.delegate && ('doSomethingElse' in $scope.delegate)) {
                $scope.delegate.doSomething();
            } else {
                console.log('No extension here, perhaps do some generic stuff instead?')
            }
        }

    }

})();