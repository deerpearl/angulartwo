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
var Boxbutton = (function () {
    function Boxbutton() {
        this.onClick = new core_1.EventEmitter();
    }
    Boxbutton.prototype.dynamicaStyles = function () {
        return this.isPrimary ? 'primary' : '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Boxbutton.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Boxbutton.prototype, "isPrimary", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Boxbutton.prototype, "onClick", void 0);
    Boxbutton = __decorate([
        core_1.Component({
            selector: 'box-button',
            template: "\n        <button [ngClass]=\"dynamicaStyles()\"\n            class=\"box-button\"\n            (click)=\"onClick.emit()\">\n            {{name}}\n        </button>\n        ",
            styles: ["\n        .box-button {\n            border: none;\n            border-radius: 3px; \n            color: white;\n            front-weight: bold;\n            letter-spacing: .2em;\n            padding: 0.5rem;\n            text-transform:uppercase;    \n        }\n        .primary {background: #E5373A;}\n        .normal  {background: #422D3F;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Boxbutton);
    return Boxbutton;
}());
exports.Boxbutton = Boxbutton;
//# sourceMappingURL=button.component.js.map