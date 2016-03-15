angular.module('warsawApp')
    .directive('warsawCounter', function() {
        return {
            scope: {
                this.count: "=mainCtrl.count"
            },
            
            restrict: 'E',
            controllerAs: 'ctrl',
            templateUrl: '../counter.html',
            bindToController: true,
            bindToController: {
                address: '='
              },
             

        };
    });




