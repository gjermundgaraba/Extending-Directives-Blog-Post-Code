(function () {
    'use strict';

    angular
        .module('app')
        .directive('requireStack', requireStackExtensionDirective);

    function requireStackExtensionDirective() {
        return {
            restrict: 'AE',
            require: 'requireStack',
            link: function (scope, element, attributes, RequireStackController) {
                var originalDoSomething = RequireStackController.doSomething;

                RequireStackController.doSomething = function() {
                    console.log('Extension Does Something');
                    var number = RequireStackController.data.length + 1;
                    RequireStackController.data.push(number);
                    originalDoSomething();
                };

                RequireStackController.doSomethingElse = function () {
                    console.log('ONLY extension does something');
                }
            }
        };
    }

})();