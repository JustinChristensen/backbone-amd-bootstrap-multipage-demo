define(["application", "jquery", "underscore", "backbone"], function (application, $, _, Backbone) {
    "use strict";

    return Backbone.View.extend({

        events: {
            "click a": "navigate"
        },

        navigate: function (e) {
            var router = application.routers.pageRouter,
                $target = $(e.target);

            e.preventDefault();

            this.$el.find("li").removeClass("active");
            $target.closest("li").addClass("active");

            router.navigate($target.attr("href"), { trigger: true });

            application.loadContent(document.location.pathname);
        }

    });

});
