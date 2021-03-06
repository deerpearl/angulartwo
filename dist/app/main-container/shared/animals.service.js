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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
//https://github.com/angular/angular/issues/5632
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AnimalsService = (function () {
    function AnimalsService(http) {
        this.http = http;
        this.heroesUrl = 'app/main-container/shared/animals.json'; // URL to web API
    }
    AnimalsService.prototype.getAnimals = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnimalsService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    AnimalsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AnimalsService.prototype.addAnimal = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnimalsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnimalsService);
    return AnimalsService;
}());
exports.AnimalsService = AnimalsService;
/*
const ANIMALSDATA: Animals[] = [
  {name: 'Panda', description: '88 earth days to orbit the sun', imgurl: ''},
  {name: 'Tiger', description: '225 earth days to orbit the sun', imgurl: '' },
  {name: 'Monkey', description: '365 earth days to orbit the sun', imgurl: '' },
  ];
  */ 
//# sourceMappingURL=animals.service.js.map