var NavbarController = function(warsawAccountService) {
    this.accountService = warsawAccountService;
    this.email = '';
    this.password = '';
    this.loginDisplayed = false; // initially not displayed
};
NavbarController.prototype.toggleLoginPanel = function() { // renamed it toggle, because depending on the current state, it may also hide, not just show
    this.loginDisplayed = !this.loginDisplayed; // this is a shorter way to express you if..else - it just flips the value of the variable
};
NavbarController.prototype.login = function() { 
    this.accountService.login(this.email, this.password);
};
angular.module('warsawApp')
    .directive('warsawNavbar', function() {
        return {
            restrict: 'E',
            scope: {

            },
            controller: NavbarController,
            controllerAs: 'ctrl',
            templateUrl: '../navbar.html',
        };
    });
