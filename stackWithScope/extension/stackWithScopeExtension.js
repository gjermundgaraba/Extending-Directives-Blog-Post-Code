(function () {
    'use strict';

    angular
        .module('app')
        .directive('stack', stackExtensionDirective);

    function stackExtensionDirective() {
        return {
            restrict: 'AE',
            link: function (scope, element, attributes) {
                var originalDoSomething = scope.doSomething;

                scope.doSomething = function() {
                    console.log('Extension Does Something');
                    var number = scope.data.length + 1;
                    scope.data.push(number);
                    originalDoSomething();
                };

                scope.doSomethingElse = function () {
                    console.log('ONLY extension does something');
                }
            }
        };
    }

})();