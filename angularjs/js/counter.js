angular.module('warsawApp')
    .directive('warsawCounter', function() {
        return {
            scope: {
                count: "=", //The = means two-way bind. Whenever the variable is changed outside, the change will be copied inside and the other way around.
            },
            controller: 'mainCtrl', 
            restrict: 'E',
            controllerAs: 'ctrl',
            templateUrl: '../counter.html',
            bindToController: true, //This means: Not only put the count on the $scope of the directive, but also on the controller.
            

        };
    });


