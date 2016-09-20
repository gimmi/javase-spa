'use strict';

module.exports = {
	template: require('./home.component.html'),
	controller: HomeController
}

function HomeController() {
	var ctrl = this;

	ctrl.message = 'Hello world';
}
