"use strict";
var app = angular.module('warsawApp', ['ngRoute', 'ngAnimate', 'firebase']);

app.controller('MainController', function($scope) {
    var ref = new Firebase("https://blinding-inferno-6187.firebaseio.com");
    ref.createUser({
        email: "bobtony@firebase.com",
        password: "correcthorsebatterystaple"
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
        }
    });
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
            console.log("Authenticated successfully with payload:", authData);
        }
    });
});


app.controller('MalinovaController', function($scope, $firebaseObject) {
    let ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
    let malinovaRef = ref.child('attractions/malinova');
    $firebaseObject(malinovaRef).$bindTo($scope, 'malinovaCtrl.data');
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
