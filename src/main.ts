import { bootstrap } from '@angular/platform-browser-dynamic';
//import { bootstrap} from 'ng2-bootstrap';

import { enableProdMode } from '@angular/core';
//import { enableProdMode } from 'angular2/core';

import { Angular2cliprojAppComponent, environment } from './app/';
//import { ROUTER_PROVIDERS} from '@angular/router';


if (environment.production) {
  enableProdMode();
}

//bootstrap(Angular2cliprojAppComponent,  [ROUTER_PROVIDERS]);
bootstrap(Angular2cliprojAppComponent);
