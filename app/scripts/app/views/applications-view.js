define(["application", "jquery", "underscore", "backbone", "mustache"], function (application, $, _, Backbone, Mustache) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.find("#banner").html("I bet you thought you were going to see applications here.");
        }

    });

});
