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
var Boxtextfield = (function () {
    function Boxtextfield() {
        this.valueChange = new core_1.EventEmitter();
    }
    Boxtextfield.prototype.handleKeyup = function (fieldValue) {
        this.valueChange.emit(fieldValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Boxtextfield.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Boxtextfield.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Boxtextfield.prototype, "valueChange", void 0);
    Boxtextfield = __decorate([
        core_1.Component({
            selector: 'box-text-field',
            template: "\n    <input class=\"box-text-field\"\n        [placeholder]=\"placeholder\"\n        #field (keyup)=\"handleKeyup(field.value)\">\n    ",
            styles: ["\n        .box-text-field {\n            border-radius: 3px;\n            border: 1px solid #ccc;\n            box-sizing:border-box;\n            display: inline-block;\n            font-size: inherit;\n            font-weight:inherit;\n            height: 2.5rem;\n            margin-bottom: 1rem;\n            padding: .5rem;    \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Boxtextfield);
    return Boxtextfield;
}());
exports.Boxtextfield = Boxtextfield;
//# sourceMappingURL=textfield.component.js.map