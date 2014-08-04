require.config({
    scriptType: "application/javascript",
    baseUrl: "scripts/app",
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "jquery"
        },
        holder: {
            exports: "Holder"
        }
    },
    paths: {
        jquery: "../../bower_components/jquery/jquery",
        backbone: "../../bower_components/backbone/backbone",
        underscore: "../../bower_components/underscore/underscore",
        holder: "../../bower_components/sass-bootstrap/docs-assets/js/holder",
        bootstrap: "../vendor/bootstrap"
    }
});
