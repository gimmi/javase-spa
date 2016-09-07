module.exports = {
    template: require('raw!./HomeComponent.html'),
    controller: function () {
        var ctrl = this;

        ctrl.message = 'Hello world';
    }
};