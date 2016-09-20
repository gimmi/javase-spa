'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

module.exports = angular.module('app', [ngRoute])
    .component('homeComponent', require('./home.component'))
    .component('navbarComponent', require('./navbar.component'))
    .config(RouteConfiguration);

function RouteConfiguration($routeProvider) {
    $routeProvider
        .when('/home', { template: '<home-component></home-component>' })
        .otherwise('/home');
}