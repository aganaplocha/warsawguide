"use strict";
var app = angular.module('warsawApp', ['ngRoute', 'ngAnimate', 'firebase']);

var AccountService = function () {

AccountService.prototype.createUser = function() {

};
AccountService.prototype.login = function() {
        
};    
};
app.service('warsawAccountService', AccountService);


app.controller('MainController', function($scope) {
    
    this.accountService = warsawAccountService; // adding service for user account

    this.textWhole = false; // initially not displayed
    this.toggleReadMore = function() {
        this.textWhole = !this.textWhole;
    };

    ref.authWithPassword({
        email: "aganaplocha@gmail.com",
        password: "warsawguide"
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            this.useremail = authWithPassword.uid;
            console.log("Authenticated successfully with payload:", authData);
            console.log(authWithPassword.uid);
        }
    });
});



app.controller('MalinovaController', function($scope, $firebaseObject) {
    let ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
    let malinovaRef = ref.child('attractions/malinova');
    $firebaseObject(malinovaRef).$bindTo($scope, 'malinovaCtrl.data');
    this.accountService = warsawAccountService;  // adding service for user account

});


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/', {
        templateUrl: '../main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
    }).
    when('/malinova', {
        templateUrl: '../malinova.html',
        controller: 'MalinovaController',
        controllerAs: 'malinovaCtrl'
    });

}]);
