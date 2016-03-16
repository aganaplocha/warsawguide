var app = angular.module("warsawApp", ["firebase"]);

app.controller('MainController', function($scope, $firebaseObject) {
    var ref = new Firebase('https://blinding-inferno-6187.firebaseio.com');
    var counterRef = ref.child('attractions/malinova/counter');
    $firebaseObject(counterRef).$bindTo($scope, 'mainCtrl.count');
});
