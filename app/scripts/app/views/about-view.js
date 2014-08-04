define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html("This is the \"About  Us\" view. Pretty cool huh?");
        }

    });

});
