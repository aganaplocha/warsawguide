var NavbarController = function(warsawAccountService) {
    this.accountService = warsawAccountService;
    this.email = '';
    this.password = '';
    this.passwordError = null;
    this.loginDisplayed = false; // initially not displayed
};
NavbarController.prototype.toggleLoginPanel = function() { // renamed it toggle, because depending on the current state, it may also hide, not just show
    this.loginDisplayed = !this.loginDisplayed; // this is a shorter way to express you if..else - it just flips the value of the variable
};
NavbarController.prototype.login = function() { 
    var promise = this.accountService.login(this.email, this.password);
    promise.then((authData) => {
        this.passwordError = null;
        this.loginDisplayed = false;
    }, 
    (error) => {
        this.passwordError = error.message;
    });
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
