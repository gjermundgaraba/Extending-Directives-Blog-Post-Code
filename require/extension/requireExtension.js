(function () {
    'use strict';

    angular
        .module('app')
        .directive('requireExtension', requireExtensionDirective);

    function requireExtensionDirective() {
        return {
            restrict: 'A',
            require: 'require',
            link: function (scope, element, attributes, RequireController) {
                var originalDoSomething = RequireController.doSomething;

                RequireController.doSomething = function() {
                    console.log('Extension Does Something');
                    var number = RequireController.data.length + 1;
                    RequireController.data.push(number);
                    originalDoSomething();
                };

                RequireController.doSomethingElse = function () {
                    console.log('ONLY extension does something');
                }
            }
        };
    }

})();