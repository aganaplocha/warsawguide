angular.module('warsawApp')
    .directive('warsawNavbar', function() {
            return {
                restrict: 'E',
                scope: {

                },
                controller: function() {
                    this.loginDisplayed = false; // initially not displayed
                    this.toggleLoginPanel = function() { // renamed it toggle, because depending on the current state, it may also hide, not just show
                       this.loginDisplayed = !this.loginDisplayed; // this is a shorter way to express you if..else - it just flips the value of the variable
                    };

                },

            	controllerAs: 'ctrl',
                templateUrl: '../navbar.html',
        };
 	 });
