"use strict";
var testing_1 = require('@angular/core/testing');
var angular2cliproj_component_1 = require('../app/angular2cliproj.component');
testing_1.beforeEachProviders(function () { return [angular2cliproj_component_1.Angular2cliprojAppComponent]; });
testing_1.describe('App: Angular2cliproj', function () {
    testing_1.it('should create the app', testing_1.inject([angular2cliproj_component_1.Angular2cliprojAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular2cliproj works!\'', testing_1.inject([angular2cliproj_component_1.Angular2cliprojAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular2cliproj works!');
    }));
});
//# sourceMappingURL=angular2cliproj.component.spec.js.map