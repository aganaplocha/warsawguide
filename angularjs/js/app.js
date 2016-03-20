"use strict";
var app = angular.module("warsawApp", ["firebase"]);
 
app.controller('MalinovaController', function($scope, $firebaseObject) {
    let ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
	let malinovaRef = ref.child('attractions/malinova');
	$firebaseObject(malinovaRef).$bindTo($scope, 'mainCtrl.data');

});

app.controller('MainController', function() {

});
 
