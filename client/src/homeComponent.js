module.exports = {
    template: require('./HomeComponent.html'),
    controller: function () {
        var ctrl = this;

        ctrl.message = 'Hello world';
    }
};