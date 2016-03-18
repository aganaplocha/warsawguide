var app = angular.module("warsawApp", ["firebase"]);
 "use strict";
 
app.controller('MainController', function($scope, $firebaseObject) {
    let ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
	let malinovaRef = ref.child('attractions/malinova');
	$firebaseObject(malinovaRef).$bindTo($scope, 'mainCtrl.data');

});

