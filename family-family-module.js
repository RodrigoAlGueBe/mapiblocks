(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["family-family-module"],{

/***/ "/7gY":
/*!*************************************************!*\
  !*** ./src/app/members/family/family.module.ts ***!
  \*************************************************/
/*! exports provided: FamilyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPageModule", function() { return FamilyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _family_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family-routing.module */ "tUlV");
/* harmony import */ var _family_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./family.page */ "wK4g");







let FamilyPageModule = class FamilyPageModule {
};
FamilyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _family_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamilyPageRoutingModule"]
        ],
        declarations: [_family_page__WEBPACK_IMPORTED_MODULE_6__["FamilyPage"]]
    })
], FamilyPageModule);



/***/ }),

/***/ "5oKx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/family/family.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon lot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Familia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"members\">\n    <ion-card-content>\n      <ion-item [routerLink]= \"['/students/student-home']\">\n        <ion-avatar slot=\"start\">\n          <ion-img src= \"https://image.freepik.com/vector-gratis/profesor-asiatico-alumnos-internacionales-mascaras-protectoras-sus-rostros-ninos-ninas-vestidos-uniforme-escolar-maestro-proteccion-contra-virus-respiratorios-concepto-alergias_71593-520.jpg\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          Alumno\n        </ion-label>\n      </ion-item>\n      <ion-item [routerLink]= \"['/teacher/teacher-account']\">\n        <ion-avatar slot=\"start\">\n          <ion-img src= \"https://image.freepik.com/vector-gratis/paquete-maestro_23-2148527524.jpg\"></ion-img>\n        </ion-avatar>\n        <ion-label>\n          Maestro\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>  \n</ion-content>\n");

/***/ }),

/***/ "ea7n":
/*!*************************************************!*\
  !*** ./src/app/members/family/family.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#members {\n  text-align: center;\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 1px solid whitesmoke;\n}\n#members .label {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZhbWlseS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUFKO0FBQ0k7RUFDRSw4QkFBQTtBQUNOIiwiZmlsZSI6ImZhbWlseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVtYmVycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgLmxhYmVse1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbn0gIl19 */");

/***/ }),

/***/ "tUlV":
/*!*********************************************************!*\
  !*** ./src/app/members/family/family-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FamilyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPageRoutingModule", function() { return FamilyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _family_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./family.page */ "wK4g");




const routes = [
    {
        path: '',
        component: _family_page__WEBPACK_IMPORTED_MODULE_3__["FamilyPage"]
    }
];
let FamilyPageRoutingModule = class FamilyPageRoutingModule {
};
FamilyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamilyPageRoutingModule);



/***/ }),

/***/ "wK4g":
/*!***********************************************!*\
  !*** ./src/app/members/family/family.page.ts ***!
  \***********************************************/
/*! exports provided: FamilyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPage", function() { return FamilyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_family_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./family.page.html */ "5oKx");
/* harmony import */ var _family_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./family.page.scss */ "ea7n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");





let FamilyPage = class FamilyPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
    }
};
FamilyPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
FamilyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-family',
        template: _raw_loader_family_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_family_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FamilyPage);



/***/ })

}]);
//# sourceMappingURL=family-family-module.js.map