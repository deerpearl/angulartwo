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
var animals_service_1 = require('./shared/animals.service');
var http_1 = require('@angular/http');
var label_component_1 = require('./shared/label.component');
var button_component_1 = require('./shared/button.component');
var textfield_component_1 = require('./shared/textfield.component');
//import { Component, OnInit } from 'angular2/core';
var MainContainerComponent = (function () {
    function MainContainerComponent(anmlsrvc) {
        this.anmlsrvc = anmlsrvc;
    }
    /* To be deleted later:
    search (term) {
      this.anmlsrvc.search(term)
                           .then(items => this.items = items);
    }
    */
    MainContainerComponent.prototype.ngOnInit = function () {
        this.getAnimals();
    };
    MainContainerComponent.prototype.handleClick = function () {
        alert('this button is clicked');
    };
    MainContainerComponent.prototype.getAnimals = function () {
        var _this = this;
        this.anmlsrvc.getAnimals()
            .subscribe(function (animals) { return _this.animals = animals; }, function (error) { return _this.errorMessage = error; });
    };
    MainContainerComponent.prototype.addAnimal = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.anmlsrvc.addAnimal(name)
            .subscribe(function (animal) { return _this.animals.push(animal); }, function (error) { return _this.errorMessage = error; });
    };
    MainContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-main-container',
            templateUrl: 'main-container.component.html',
            styleUrls: ['main-container.component.css'],
            providers: [animals_service_1.AnimalsService, http_1.HTTP_PROVIDERS],
            directives: [label_component_1.Boxlabel, button_component_1.Boxbutton, textfield_component_1.Boxtextfield]
        }), 
        __metadata('design:paramtypes', [animals_service_1.AnimalsService])
    ], MainContainerComponent);
    return MainContainerComponent;
}());
exports.MainContainerComponent = MainContainerComponent;
//# sourceMappingURL=main-container.component.js.map