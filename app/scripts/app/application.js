define(["underscore", "backbone", "holder"], function (_, Backbone, holder) {
    "use strict";

    var application = _.extend({}, {

        views: {},

        models: {},

        collections: {},

        utilities: {},

        routers: {},

        _activeView: null,

        getActiveView: function () {
            return this._activeView;
        },

        setActiveView: function (View, options) {
            this._activeView = new View(options);
            return this._activeView;
        },

        loadContent: function (path) {
            var _self = this;

            $("#content").load(path + " .loadable", function () {
                _self.trigger("placeholders");
            });
        }

    }, Backbone.Events);

    application.on("placeholders", function (e) {
        holder.run();
    });

    return application;
});
