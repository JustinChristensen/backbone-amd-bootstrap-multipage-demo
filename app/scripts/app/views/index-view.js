define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html("You've rendered the index view. Congratulations.");
        }

    });

});
