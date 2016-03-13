angular.module('warsawApp', [])
    .controller('MainController', function() {

    });

	var app = angular.module("warsawApp", ["firebase"]);

	app.controller('MainController', function($scope, $firebaseObject) {
	    var ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
	});
