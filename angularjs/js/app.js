"use strict";
var app = angular.module('warsawApp', ['ngRoute', 'firebase']);

app.controller('MainController', function($scope) {
   
};

});

app.controller('MalinovaController', function($scope, $firebaseObject) {
    let ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
    let malinovaRef = ref.child('attractions/malinova');
    $firebaseObject(malinovaRef).$bindTo($scope, 'malinovaCtrl.data');

    // ref.createUser({
    //     email: "bobtony@firebase.com",
    //     password: "correcthorsebatterystaple"
    // }, function(error, userData) {
    //     if (error) {
    //         console.log("Error creating user:", error);
    //     } else {
    //         console.log("Successfully created user account with uid:", userData.uid);
    //     }
    // });
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
