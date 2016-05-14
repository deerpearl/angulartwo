"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { bootstrap} from 'ng2-bootstrap';
var core_1 = require('@angular/core');
//import { enableProdMode } from 'angular2/core';
var _1 = require('./app/');
//import { ROUTER_PROVIDERS} from '@angular/router';
if (_1.environment.production) {
    core_1.enableProdMode();
}
//bootstrap(Angular2cliprojAppComponent,  [ROUTER_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(_1.Angular2cliprojAppComponent);
//# sourceMappingURL=main.js.map