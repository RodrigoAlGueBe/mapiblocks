(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-materia-ws-mat-ws-mat-module"],{

/***/ "7ac0":
/*!*******************************************************************************!*\
  !*** ./src/app/members/student/Pages/materia/ws-mat/ws-mat-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: WSMatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSMatPageRoutingModule", function() { return WSMatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ws_mat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ws-mat.page */ "FAwk");




const routes = [
    {
        path: '',
        component: _ws_mat_page__WEBPACK_IMPORTED_MODULE_3__["WSMatPage"]
    }
];
let WSMatPageRoutingModule = class WSMatPageRoutingModule {
};
WSMatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WSMatPageRoutingModule);



/***/ }),

/***/ "FAwk":
/*!*********************************************************************!*\
  !*** ./src/app/members/student/Pages/materia/ws-mat/ws-mat.page.ts ***!
  \*********************************************************************/
/*! exports provided: WSMatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSMatPage", function() { return WSMatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ws_mat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ws-mat.page.html */ "Iw1J");
/* harmony import */ var _ws_mat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ws-mat.page.scss */ "L5BA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Others/Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Others/Map/Popups/enunciado/enunciado.component */ "Rtyi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Others/Map/Popups/help/help.component */ "bVOA");
/* harmony import */ var _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Others/Map/Popups/hints/hints.component */ "T93U");










let WSMatPage = class WSMatPage {
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
WSMatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
WSMatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ws-mat',
        template: _raw_loader_ws_mat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ws_mat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WSMatPage);



/***/ }),

/***/ "Iw1J":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/materia/ws-mat/ws-mat.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar text-center>\n    \n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/alumno/materia']\" (click)=\"killAllowAnswer()\">\n      <ion-button>\n        <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons> \n\n    <ion-buttons slot=\"start\" id=\"statement\"(click)=\"presentEnunciado($event)\" >\n      <ion-button>\n        <img src=\"/assets/buttons/statement.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" id=\"idea\" (click)=\"presentHints($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/idea.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{ejercicio.title}}</ion-title>\n\n    <ion-buttons slot=\"end\" id=\"telescopio\" (click)=\"presentHelp($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/telescopio.png\">\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <app-blockly *ngIf=\"singleBlockly\"></app-blockly>\n  <app-dual-blockly *ngIf=\"dualBlockly\"></app-dual-blockly>\n</ion-content>");

/***/ }),

/***/ "L5BA":
/*!***********************************************************************!*\
  !*** ./src/app/members/student/Pages/materia/ws-mat/ws-mat.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-toolbar #statement {\n  position: absolute;\n  left: 8.22%;\n  right: 88.88%;\n  height: 60px;\n}\nion-toolbar #statement:hover {\n  position: absolute;\n  left: 8%;\n  right: 88.66%;\n  height: 70px;\n}\nion-toolbar #idea {\n  position: absolute;\n  left: 14.22%;\n  right: 82.88%;\n  height: 60px;\n}\nion-toolbar #idea:hover {\n  position: absolute;\n  left: 14%;\n  right: 82.66%;\n  height: 70px;\n}\nion-toolbar #telescopio {\n  position: absolute;\n  left: 94.65%;\n  right: 2.22%;\n  height: 60px;\n}\nion-toolbar #telescopio:hover {\n  position: absolute;\n  left: 94%;\n  right: 2%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dzLW1hdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoid3MtbWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIGhlaWdodDogNjBweDtcbiAgICAjQmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyLjIyJTtcbiAgICAgICAgcmlnaHQ6IDk0LjY1JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjQmFjazpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgcmlnaHQ6IDk0JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyAgIFxuICAgIH1cbiAgICAjc3RhdGVtZW50e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDguMjIlO1xuICAgICAgICByaWdodDogODguODglO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNzdGF0ZW1lbnQ6aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOCU7XG4gICAgICAgIHJpZ2h0OiA4OC42NiU7XG4gICAgICAgIGhlaWdodDogNzBweDsgXG4gICAgfVxuICAgICNpZGVhe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE0LjIyJTtcbiAgICAgICAgcmlnaHQ6IDgyLjg4JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjaWRlYTpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNCU7XG4gICAgICAgIHJpZ2h0OiA4Mi42NiU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgI3RlbGVzY29waW97XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTQuNjUlO1xuICAgICAgICByaWdodDogMi4yMiU7XG4gICAgICAgIGhlaWdodDogNjBweDsgICBcbiAgICB9XG4gICAgI3RlbGVzY29waW86aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTQlO1xuICAgICAgICByaWdodDogMiU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "uJf9":
/*!***********************************************************************!*\
  !*** ./src/app/members/student/Pages/materia/ws-mat/ws-mat.module.ts ***!
  \***********************************************************************/
/*! exports provided: WSMatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSMatPageModule", function() { return WSMatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ws_mat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ws-mat-routing.module */ "7ac0");
/* harmony import */ var _ws_mat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws-mat.page */ "FAwk");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");







//Module for the common components and modules used in all the workspaces and theme pages.

let WSMatPageModule = class WSMatPageModule {
};
WSMatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ws_mat_routing_module__WEBPACK_IMPORTED_MODULE_5__["WSMatPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_ws_mat_page__WEBPACK_IMPORTED_MODULE_6__["WSMatPage"]]
    })
], WSMatPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-materia-ws-mat-ws-mat-module.js.map