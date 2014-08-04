require(["config"], function () {
    "use strict";

    require(["application", "routers/page-router", "views/primary-nav-view"], function (application, PageRouter, PrimaryNavView) {
        application.views.primaryNav = new PrimaryNavView({
            el: ".primary-nav"
        });

        application.routers.pageRouter = new PageRouter();

        Backbone.history.start({ pushState: true });
    });

});
