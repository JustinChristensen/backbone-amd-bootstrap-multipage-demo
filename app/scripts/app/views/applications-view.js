define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html("I bet you thought you were going to see applications here.");
        }

    });

});
