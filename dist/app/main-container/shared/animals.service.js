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
//import { Injectable } from 'angular2/core';
var http_1 = require('@angular/http');
var AnimalsService = (function () {
    function AnimalsService(jsonp) {
        this.jsonp = jsonp;
    }
    AnimalsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], AnimalsService);
    return AnimalsService;
}());
exports.AnimalsService = AnimalsService;
var ANIMALSDATA = [
    { name: 'Panda', description: '88 earth days to orbit the sun', imgurl: '' },
    { name: 'Tiger', description: '225 earth days to orbit the sun', imgurl: '' },
    { name: 'Monkey', description: '365 earth days to orbit the sun', imgurl: '' },
];
//# sourceMappingURL=animals.service.js.map