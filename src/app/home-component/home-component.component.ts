import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home-component',
  templateUrl: 'home-component.component.html',
  styleUrls: ['home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  componentName: 'FriendComponent';
  constructor() {}

  ngOnInit() {
  }

}
