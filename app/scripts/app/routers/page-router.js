define(["application", "jquery", "underscore", "backbone"], function (application, $, _, Backbone) {
    "use strict";

    var conf = {
        el: "main"
    };

    return Backbone.Router.extend({

        routes: {
            "about.html": "about",
            "applications.html": "applications",
            "index.html": "index",
            "": "index"
        },

        index: function () {
            require(["views/index-view"], function (IndexView) {
                application.setActiveView(IndexView, conf).render();
            });
        },

        about: function () {
            require(["views/about-view"], function (AboutView) {
                application.setActiveView(AboutView, conf).render();
            });
        },

        applications: function () {
            require(["views/applications-view"], function (ApplicationsView) {
                application.setActiveView(ApplicationsView, conf).render();
            });
        }

    });

});
