import { Component } from '@angular/core';
//import { Component } from 'angular2/core';

import { MainContainerComponent } from './main-container';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';
//import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import { RouteConfig} from 'angular2/router';

import { NewsContainerComponent } from './news-container';
//import { HomeComponent } from './+home';

//import { HomeComponentComponent } from './home-component/home-component.component';

@Component({
  moduleId: module.id,
  selector: 'angular2cliproj-app',
  templateUrl: 'angular2cliproj.component.html',
  styleUrls: ['angular2cliproj.component.css'],
  //directives: [HomeComponentComponent],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  {path: '/main_container', component: MainContainerComponent},
  {path: '/news_container', component: NewsContainerComponent}
])
/*
@RouteConfig([
  {path: '/main_container', component: MainContainerComponent},
  {path: '/news_container', component: NewsContainerComponent}
])
*/
export class Angular2cliprojAppComponent {
  title = 'Welcome to Zookeeper!';
}
