"use strict";
var app = angular.module('warsawApp', ['ngRoute','firebase']);
 
app.controller('MainController', function() {

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
 
