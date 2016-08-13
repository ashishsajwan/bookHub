System.register(['angular2/platform/browser', './components/header.component', './components/body.component', './components/footer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, header_component_1, body_component_1, footer_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(header_component_1.HeaderComponent);
            browser_1.bootstrap(body_component_1.BodyComponent);
            browser_1.bootstrap(footer_component_1.FooterComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map