define(["underscore", "backbone"], function (_, Backbone) {
    "use strict";

    var application = _.extend({}, {

        views: {},

        models: {},

        collections: {},

        utilities: {},

        routers: {},

        _activeView: null,

        setActiveView: function (View, options) {
            this._activeView = new View(options);
            return this._activeView;
        }

    }, Backbone.Events);



    return application;
});
