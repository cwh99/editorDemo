require.config({
    paths : {
        "jquery" : "../js/jquery-3.2.1.min.js",
        "bootstrap" : "../js/bootstrap.js",
        "backbone": "../js/backbone.js",
        "underscore": "../js/underscore.js",
        "bootbox": "../js/bootbox.js",
        // "a": "../js/a.js"
        // "module": "../simditor/scripts/module.js",
        // "uploader": "../simditor/scripts/uploader.js",
        // "hotkeys": "../simditor/scripts/hotkeys.js",
        // "simditor": "../simditor/scripts/simditor.js"
        // 'ueditor': '../js/ueditor/ueditor.all.min.js',
        // 'ueditor.config': 'ueditor/ueditor.config',
        // 'ZeroClipboard' : 'ueditor/third-party/zeroclipboard/ZeroClipboard'
    },
    shim:{
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootbox': {
            deps: ['bootstrap']
        }
        // 'simditor': {
        //     deps: ['jquery','module']
        // }
    }
})
require(["jquery","underscore","backbone","bootstrap","bootbox","store"],function(){

});

