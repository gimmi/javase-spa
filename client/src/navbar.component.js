'use strict';

module.exports = {
	template: require('./navbar.component.html'),
	controller: NavbarController
}

function NavbarController() {
	var ctrl = this;

	ctrl.message = 'Hello world';
}