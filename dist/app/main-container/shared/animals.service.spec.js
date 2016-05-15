"use strict";
var testing_1 = require('@angular/core/testing');
var animals_service_1 = require('./animals.service');
testing_1.describe('Animals Service', function () {
    testing_1.beforeEachProviders(function () { return [animals_service_1.AnimalsService]; });
    testing_1.it('should ...', testing_1.inject([animals_service_1.AnimalsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=animals.service.spec.js.map