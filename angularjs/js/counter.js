angular.module('warsawApp')
    .directive('warsawCounter', function() {
        return {
            scope: {
                count: '=',
            },
            controller: function() {
                this.count = 0;
            },
            restrict: 'E',
            controllerAs: 'ctrl',
            templateUrl: '../counter.html',
            bindToController: true

        };
    });
