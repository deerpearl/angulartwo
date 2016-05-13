System.register(['@angular/core', './test.componet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_componet_1;
    var myComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_componet_1_1) {
                test_componet_1 = test_componet_1_1;
            }],
        execute: function() {
            myComponentComponent = (function () {
                function myComponentComponent() {
                }
                myComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Max";
                };
                myComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n\t\tHi, I'm {{name}} and this is my very first Angular 2 <span [class.is-awesome]= \"inputElement.value ==='yes'\">It is awesome!</span>\n\t\t<br>\n\t\t<br>\n\t\t<input type=\"text\"  #inputElement (keyup) =\"0\">\n\t\t<br>\n\t\t<button [disabled] =\"inputElement.value ==='yes'\">only enabled if 'yes'was entered</button>\n\t\t<test></test>\n\t",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_componet_1.testComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], myComponentComponent);
                return myComponentComponent;
            }());
            exports_1("myComponentComponent", myComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFKQSx1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixDQUFDO2dCQWxCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUMsNlZBUVI7d0JBQ0QsU0FBUyxFQUFDLENBQUMseUJBQXlCLENBQUM7d0JBQ3JDLFVBQVUsRUFBQyxDQUFDLDZCQUFhLENBQUM7cUJBQzFCLENBQUM7O3dDQUFBO2dCQU9GLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7dGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LmNvbXBvbmV0JztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjonbXktY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZTpgXHJcblx0XHRIaSwgSSdtIHt7bmFtZX19IGFuZCB0aGlzIGlzIG15IHZlcnkgZmlyc3QgQW5ndWxhciAyIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT0gXCJpbnB1dEVsZW1lbnQudmFsdWUgPT09J3llcydcIj5JdCBpcyBhd2Vzb21lITwvc3Bhbj5cclxuXHRcdDxicj5cclxuXHRcdDxicj5cclxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICAjaW5wdXRFbGVtZW50IChrZXl1cCkgPVwiMFwiPlxyXG5cdFx0PGJyPlxyXG5cdFx0PGJ1dHRvbiBbZGlzYWJsZWRdID1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0neWVzJ1wiPm9ubHkgZW5hYmxlZCBpZiAneWVzJ3dhcyBlbnRlcmVkPC9idXR0b24+XHJcblx0XHQ8dGVzdD48L3Rlc3Q+XHJcblx0YCxcclxuXHRzdHlsZVVybHM6WydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6W3Rlc3RDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBteUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRuYW1lOnN0cmluZztcclxuXHRuZ09uSW5pdCgpOmFueXtcclxuXHRcdHRoaXMubmFtZSA9IFwiTWF4XCI7XHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
