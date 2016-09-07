var angular = require('angular');
var ngRoute = require('angular-route');

module.exports = angular.module('app', [ ngRoute ])
	.component('homeComponent', require('./homeComponent'))
	.config(function ($routeProvider) {
		$routeProvider
			.when('/home', { template: '<home-component></home-component>' })
			.otherwise('/home');
	});
