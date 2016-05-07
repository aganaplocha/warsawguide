"use strict";
var app = angular.module('warsawApp', ['ngRoute', 'ngAnimate', 'firebase']);
app.constant('warsawFirebaseUrl','https://blinding-inferno-6187.firebaseio.com');
app.factory('warsawFirebaseRef', function (warsawFirebaseUrl){
    return new Firebase(warsawFirebaseUrl);;
});
var AccountService = function (warsawFirebaseRef, $q) {
   this.ref = warsawFirebaseRef;
   this.email = null;
   this.$q = $q;
};

AccountService.prototype.createUser = function() {
    var deferred = this.$q.defer();
    this.ref.authWithPassword({
        email: email,
        password: password
    }, (error, authData) => {  // arrow function
        if (error) {
            deferred.reject(error);
        } else {
            this.email = authData.password.email;
            deferred.resolve(authData);
            console.log("Authenticated successfully with payload:", authData);
        }
    });      
    return deferred.promise;  
};
AccountService.prototype.login = function(email, password) {
    var deferred = this.$q.defer();
    this.ref.authWithPassword({
        email: email,
        password: password
    }, (error, authData) => {  // arrow function
        if (error) {
            deferred.reject(error);
        } else {
            this.email = authData.password.email;
            deferred.resolve(authData);
            console.log("Authenticated successfully with payload:", authData);
        }
    });      
    return deferred.promise;  
};  
app.service('warsawAccountService', AccountService);


app.controller('MainController', function($scope, warsawAccountService) {
    this.accountService = warsawAccountService; // adding service for user account
    this.textWhole = false; // initially not displayed
    this.toggleReadMore = function() {
        this.textWhole = !this.textWhole;
    };
});



app.controller('MalinovaController', function($scope, $firebaseObject, warsawAccountService, warsawFirebaseRef) {
    let malinovaRef = warsawFirebaseRef.child('attractions/malinova');
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
