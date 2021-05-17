(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-primario-ws-prim-ws-prim-module"],{

/***/ "0LZ7":
/*!************************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/ws-prim/ws-prim.page.ts ***!
  \************************************************************************/
/*! exports provided: WsPrimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WsPrimPage", function() { return WsPrimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ws_prim_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ws-prim.page.html */ "eZ6C");
/* harmony import */ var _ws_prim_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ws-prim.page.scss */ "3GRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Others/Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Others/Map/Popups/enunciado/enunciado.component */ "Rtyi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Others/Map/Popups/help/help.component */ "bVOA");
/* harmony import */ var _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Others/Map/Popups/hints/hints.component */ "T93U");










let WsPrimPage = class WsPrimPage {
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
WsPrimPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
WsPrimPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ws-prim',
        template: _raw_loader_ws_prim_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ws_prim_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WsPrimPage);



/***/ }),

/***/ "3GRh":
/*!**************************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/ws-prim/ws-prim.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-toolbar #statement {\n  position: absolute;\n  left: 8.22%;\n  right: 88.88%;\n  height: 60px;\n}\nion-toolbar #statement:hover {\n  position: absolute;\n  left: 8%;\n  right: 88.66%;\n  height: 70px;\n}\nion-toolbar #idea {\n  position: absolute;\n  left: 14.22%;\n  right: 82.88%;\n  height: 60px;\n}\nion-toolbar #idea:hover {\n  position: absolute;\n  left: 14%;\n  right: 82.66%;\n  height: 70px;\n}\nion-toolbar #telescopio {\n  position: absolute;\n  left: 94.65%;\n  right: 2.22%;\n  height: 60px;\n}\nion-toolbar #telescopio:hover {\n  position: absolute;\n  left: 94%;\n  right: 2%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dzLXByaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUVSIiwiZmlsZSI6IndzLXByaW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgICNCYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIuMjIlO1xuICAgICAgICByaWdodDogOTQuNjUlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNCYWNrOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICByaWdodDogOTQlO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7ICAgXG4gICAgfVxuICAgICNzdGF0ZW1lbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOC4yMiU7XG4gICAgICAgIHJpZ2h0OiA4OC44OCU7XG4gICAgICAgIGhlaWdodDogNjBweDsgICBcbiAgICB9XG4gICAgI3N0YXRlbWVudDpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4JTtcbiAgICAgICAgcmlnaHQ6IDg4LjY2JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyBcbiAgICB9XG4gICAgI2lkZWF7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTQuMjIlO1xuICAgICAgICByaWdodDogODIuODglO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNpZGVhOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE0JTtcbiAgICAgICAgcmlnaHQ6IDgyLjY2JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgICAjdGVsZXNjb3Bpb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5NC42NSU7XG4gICAgICAgIHJpZ2h0OiAyLjIyJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjdGVsZXNjb3Bpbzpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5NCU7XG4gICAgICAgIHJpZ2h0OiAyJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "4wgO":
/*!**********************************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/ws-prim/ws-prim-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: WsPrimPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WsPrimPageRoutingModule", function() { return WsPrimPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ws_prim_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ws-prim.page */ "0LZ7");




const routes = [
    {
        path: '',
        component: _ws_prim_page__WEBPACK_IMPORTED_MODULE_3__["WsPrimPage"]
    }
];
let WsPrimPageRoutingModule = class WsPrimPageRoutingModule {
};
WsPrimPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WsPrimPageRoutingModule);



/***/ }),

/***/ "eZ6C":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/primario/ws-prim/ws-prim.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar text-center>\n    \n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/alumno/primario']\" (click)=\"killAllowAnswer()\">\n      <ion-button>\n        <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons> \n\n    <ion-buttons slot=\"start\" id=\"statement\"(click)=\"presentEnunciado($event)\" >\n      <ion-button>\n        <img src=\"/assets/buttons/statement.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" id=\"idea\" (click)=\"presentHints($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/idea.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{ejercicio.title}}</ion-title>\n\n    <ion-buttons slot=\"end\" id=\"telescopio\" (click)=\"presentHelp($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/telescopio.png\">\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <app-blockly *ngIf=\"singleBlockly\"></app-blockly>\n  <app-dual-blockly *ngIf=\"dualBlockly\"></app-dual-blockly>\n</ion-content>");

/***/ }),

/***/ "gSbu":
/*!**************************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/ws-prim/ws-prim.module.ts ***!
  \**************************************************************************/
/*! exports provided: WsPrimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WsPrimPageModule", function() { return WsPrimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ws_prim_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ws-prim-routing.module */ "4wgO");
/* harmony import */ var _ws_prim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ws-prim.page */ "0LZ7");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");







//Module for the common components used in all the workspaces.

let WsPrimPageModule = class WsPrimPageModule {
};
WsPrimPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ws_prim_routing_module__WEBPACK_IMPORTED_MODULE_5__["WsPrimPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_ws_prim_page__WEBPACK_IMPORTED_MODULE_6__["WsPrimPage"]]
    })
], WsPrimPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-primario-ws-prim-ws-prim-module.js.map