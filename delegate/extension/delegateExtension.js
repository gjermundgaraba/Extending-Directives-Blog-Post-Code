(function () {
    'use strict';

    angular
        .module('app')
        .directive('delegateExtension', delegateExtensionDirective);

    function delegateExtensionDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'delegate/extension/delegateExtension.html',
            controller: DelegateExtensionController,
            controllerAs: 'vm'
        };
    }

    function DelegateExtensionController() {
        var vm = this;

        vm.delegateObj = {
            doSomething: function(data) {
                console.log('DelegateExtensionController Does Something');
                console.log(data.toString());
            }
        }
    }

})();