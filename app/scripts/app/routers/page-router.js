define(["application", "jquery", "underscore", "backbone", "holder"], function (application, $, _, Backbone, Holder) {
    "use strict";

    var pageConfig = {
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
                application.setActiveView(IndexView, pageConfig).render();
            });
        },

        about: function () {
            require(["views/about-view"], function (AboutView) {
                application.setActiveView(AboutView, pageConfig).render();
            });
        },

        applications: function () {
            require(["views/applications-view"], function (ApplicationsView) {
                application.setActiveView(ApplicationsView, pageConfig).render();
            });
        }

    });

});
