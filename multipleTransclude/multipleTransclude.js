(function () {
    'use strict';

    angular
        .module('app')
        .directive('multipleTransclude', multipleTranscludeDirective);

    function multipleTranscludeDirective() {
        return {
            transclude: true,
            restrict: 'AE',
            templateUrl: 'multipleTransclude/multipleTransclude.html'
        }
    }
})();