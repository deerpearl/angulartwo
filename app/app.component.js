System.register(['@angular/core', './header', './puzzle', './footer'], function(exports_1, context_1) {
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
    var core_1, header_1, puzzle_1, footer_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (puzzle_1_1) {
                puzzle_1 = puzzle_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       <header></header>\n       <br>\n       <puzzle></puzzle>\n\t   <br>\n\t   <footer></footer>\n       \n    ",
                        directives: [header_1.header, puzzle_1.puzzle, footer_1.footer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscUhBT1Q7d0JBQ0QsVUFBVSxFQUFDLENBQUMsZUFBTSxFQUFDLGVBQU0sRUFBQyxlQUFNLENBQUM7cUJBQ3BDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHtwdXp6bGV9IGZyb20gJy4vcHV6emxlJztcbmltcG9ydCB7Zm9vdGVyfSBmcm9tICcuL2Zvb3Rlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgIDxoZWFkZXI+PC9oZWFkZXI+XG4gICAgICAgPGJyPlxuICAgICAgIDxwdXp6bGU+PC9wdXp6bGU+XG5cdCAgIDxicj5cblx0ICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W2hlYWRlcixwdXp6bGUsZm9vdGVyXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
