define(["application", "jquery", "underscore", "backbone", "mustache"], function (application, $, _, Backbone, Mustache) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.find("#banner").html("This is the \"About  Us\" view. Pretty cool huh?");
        }

    });

});
