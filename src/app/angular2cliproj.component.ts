import { Component } from '@angular/core';

import { HomeComponentComponent } from './home-component/home-component.component';

@Component({
  moduleId: module.id,
  selector: 'angular2cliproj-app',
  templateUrl: 'angular2cliproj.component.html',
  styleUrls: ['angular2cliproj.component.css'],
  directives: [HomeComponentComponent]
})
export class Angular2cliprojAppComponent {
  title = 'Welcome to Zookeeper!';
}
