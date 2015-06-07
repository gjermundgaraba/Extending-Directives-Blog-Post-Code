(function () {
    'use strict';

    angular
        .module('app')
        .directive('simpleTranslcude', simpleTranslcudeDirective);

    function simpleTranslcudeDirective() {
        return {
            transclude: true,
            restrict: 'AE',
            templateUrl: 'simpleTransclude/simpleTransclude.html'
        }
    }
})();