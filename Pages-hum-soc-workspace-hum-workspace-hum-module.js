(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-hum-soc-workspace-hum-workspace-hum-module"],{

/***/ "GwFt":
/*!*************************************************************************************!*\
  !*** ./src/app/members/student/Pages/hum-soc/workspace-hum/workspace-hum.module.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkspaceHumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceHumPageModule", function() { return WorkspaceHumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _workspace_hum_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workspace-hum-routing.module */ "i25u");
/* harmony import */ var _workspace_hum_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workspace-hum.page */ "kaZt");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");






//Module for the common components used in all the workspaces.

let WorkspaceHumPageModule = class WorkspaceHumPageModule {
};
WorkspaceHumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _workspace_hum_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceHumPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        declarations: [_workspace_hum_page__WEBPACK_IMPORTED_MODULE_5__["WorkspaceHumPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], WorkspaceHumPageModule);



/***/ }),

/***/ "VbZA":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/hum-soc/workspace-hum/workspace-hum.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar text-center>\n    \n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/alumno/hum-soc']\" (click)=\"killAllowAnswer()\">\n      <ion-button>\n        <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons> \n\n    <ion-buttons slot=\"start\" id=\"statement\"(click)=\"presentEnunciado($event)\" >\n      <ion-button>\n        <img src=\"/assets/buttons/statement.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" id=\"idea\" (click)=\"presentHints($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/idea.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{ejercicio.title}}</ion-title>\n\n    <ion-buttons slot=\"end\" id=\"telescopio\" (click)=\"presentHelp($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/telescopio.png\">\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <app-blockly *ngIf=\"singleBlockly\"></app-blockly>\n  <app-dual-blockly *ngIf=\"dualBlockly\"></app-dual-blockly>\n</ion-content>\n");

/***/ }),

/***/ "i25u":
/*!*********************************************************************************************!*\
  !*** ./src/app/members/student/Pages/hum-soc/workspace-hum/workspace-hum-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: WorkspaceHumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceHumPageRoutingModule", function() { return WorkspaceHumPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _workspace_hum_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workspace-hum.page */ "kaZt");




const routes = [
    {
        path: '',
        component: _workspace_hum_page__WEBPACK_IMPORTED_MODULE_3__["WorkspaceHumPage"]
    }
];
let WorkspaceHumPageRoutingModule = class WorkspaceHumPageRoutingModule {
};
WorkspaceHumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkspaceHumPageRoutingModule);



/***/ }),

/***/ "kaZt":
/*!***********************************************************************************!*\
  !*** ./src/app/members/student/Pages/hum-soc/workspace-hum/workspace-hum.page.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkspaceHumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceHumPage", function() { return WorkspaceHumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workspace_hum_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workspace-hum.page.html */ "VbZA");
/* harmony import */ var _workspace_hum_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspace-hum.page.scss */ "uby3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Others/Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Others/Map/Popups/enunciado/enunciado.component */ "Rtyi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Others/Map/Popups/help/help.component */ "bVOA");
/* harmony import */ var _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Others/Map/Popups/hints/hints.component */ "T93U");










let WorkspaceHumPage = class WorkspaceHumPage {
    constructor(router, ejerciosService, popoverController) {
        this.router = router;
        this.ejerciosService = ejerciosService;
        this.popoverController = popoverController;
        this.hintsClick = 0;
        this.singleBlockly = false;
        this.dualBlockly = false;
    }
    ngOnInit() {
        const hola = this.router.url;
        this.ejercicio = this.ejerciosService.getEjercicio(hola);
        //Store the actual exercise 
        var exerciseDoing = this.ejercicio.subtitle;
        localStorage.setItem('exerciseDoing', exerciseDoing);
        //Known if the exercise is comparative or not.
        var double = this.ejercicio.comp;
        console.log(double);
        if (double == true) {
            this.dualBlockly = true;
            this.singleBlockly = false;
        }
        else if (double == false) {
            this.singleBlockly = true;
            this.dualBlockly = false;
        }
        //Only needed for the DEMO exercise
        //this.hola=this.presentinitHelp()
        this.bombilla = "bulb-outline";
    }
    //Delete the option of answer and the lists of places once you go out of an exercise.
    killAllowAnswer() {
        localStorage.removeItem('allowAnswer');
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listProv');
        localStorage.removeItem('listLatinProv');
        localStorage.removeItem('listRegDual');
        localStorage.removeItem('listLatinRegDual');
        localStorage.removeItem('listProvDual');
        localStorage.removeItem('listLatinProvDual');
        localStorage.removeItem('listRegTeacher');
        localStorage.removeItem('listLatinRegTeacher');
    }
    presentEnunciado(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__["EnunciadoComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            return yield popover.present();
        });
    }
    presentHints(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__["HintsComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            this.bombilla = "bulb";
            this.hintsClick++;
            var clickString = String(this.hintsClick);
            localStorage.setItem(clickString, 'hintsClick');
            console.log(clickString);
            return yield popover.present(), this.bombilla;
        });
    }
    presentHelp(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            return yield popover.present();
        });
    }
    presentinitHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
                componentProps: {},
                cssClass: 'popOverInit',
                translucent: true
            });
            return yield popover.present();
        });
    }
};
WorkspaceHumPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
WorkspaceHumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-workspace-hum',
        template: _raw_loader_workspace_hum_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workspace_hum_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkspaceHumPage);



/***/ }),

/***/ "uby3":
/*!*************************************************************************************!*\
  !*** ./src/app/members/student/Pages/hum-soc/workspace-hum/workspace-hum.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-toolbar #statement {\n  position: absolute;\n  left: 8.22%;\n  right: 88.88%;\n  height: 60px;\n}\nion-toolbar #statement:hover {\n  position: absolute;\n  left: 8%;\n  right: 88.66%;\n  height: 70px;\n}\nion-toolbar #idea {\n  position: absolute;\n  left: 14.22%;\n  right: 82.88%;\n  height: 60px;\n}\nion-toolbar #idea:hover {\n  position: absolute;\n  left: 14%;\n  right: 82.66%;\n  height: 70px;\n}\nion-toolbar #telescopio {\n  position: absolute;\n  left: 94.65%;\n  right: 2.22%;\n  height: 60px;\n}\nion-toolbar #telescopio:hover {\n  position: absolute;\n  left: 94%;\n  right: 2%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dvcmtzcGFjZS1odW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUVSIiwiZmlsZSI6IndvcmtzcGFjZS1odW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgICNCYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIuMjIlO1xuICAgICAgICByaWdodDogOTQuNjUlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNCYWNrOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICByaWdodDogOTQlO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7ICAgXG4gICAgfVxuICAgICNzdGF0ZW1lbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOC4yMiU7XG4gICAgICAgIHJpZ2h0OiA4OC44OCU7XG4gICAgICAgIGhlaWdodDogNjBweDsgICBcbiAgICB9XG4gICAgI3N0YXRlbWVudDpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4JTtcbiAgICAgICAgcmlnaHQ6IDg4LjY2JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyBcbiAgICB9XG4gICAgI2lkZWF7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTQuMjIlO1xuICAgICAgICByaWdodDogODIuODglO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNpZGVhOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE0JTtcbiAgICAgICAgcmlnaHQ6IDgyLjY2JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgICAjdGVsZXNjb3Bpb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5NC42NSU7XG4gICAgICAgIHJpZ2h0OiAyLjIyJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjdGVsZXNjb3Bpbzpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5NCU7XG4gICAgICAgIHJpZ2h0OiAyJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=Pages-hum-soc-workspace-hum-workspace-hum-module.js.map