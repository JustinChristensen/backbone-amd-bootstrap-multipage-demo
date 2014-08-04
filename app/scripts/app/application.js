define(["underscore", "backbone"], function (_, Backbone) {
    "use strict";

    var application = _.extend({}, Backbone.Events);

    application.views = {};
    application.models = {};
    application.collections = {};
    application.utilities = {};
    application.routers = {};

    application.setActiveView = function (View, options) {
        this._active = new View(options);
        return this._active;
    };

    return application;
});
