"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { Component } from 'angular2/core';
var main_container_1 = require('./main-container');
var router_1 = require('@angular/router');
var news_container_1 = require('./news-container');
//import { HomeComponent } from './+home';
//import { HomeComponentComponent } from './home-component/home-component.component';
var Angular2cliprojAppComponent = (function () {
    function Angular2cliprojAppComponent() {
        this.title = 'Welcome to Zookeeper!';
    }
    Angular2cliprojAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular2cliproj-app',
            templateUrl: 'angular2cliproj.component.html',
            styleUrls: ['angular2cliproj.component.css'],
            //directives: [HomeComponentComponent],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/main_container', component: main_container_1.MainContainerComponent },
            { path: '/news_container', component: news_container_1.NewsContainerComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], Angular2cliprojAppComponent);
    return Angular2cliprojAppComponent;
}());
exports.Angular2cliprojAppComponent = Angular2cliprojAppComponent;
//# sourceMappingURL=angular2cliproj.component.js.map