(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "ChZt":
/*!***********************************************************!*\
  !*** ./src/app/public/register/students/students.page.ts ***!
  \***********************************************************/
/*! exports provided: StudentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPage", function() { return StudentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./students.page.html */ "xFLy");
/* harmony import */ var _students_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students.page.scss */ "YZu3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");





let StudentsPage = class StudentsPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
    }
};
StudentsPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
StudentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-students',
        template: _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_students_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentsPage);



/***/ }),

/***/ "EKSE":
/*!*********************************************************************!*\
  !*** ./src/app/public/register/students/students-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageRoutingModule", function() { return StudentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students.page */ "ChZt");




const routes = [
    {
        path: '',
        component: _students_page__WEBPACK_IMPORTED_MODULE_3__["StudentsPage"]
    }
];
let StudentsPageRoutingModule = class StudentsPageRoutingModule {
};
StudentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentsPageRoutingModule);



/***/ }),

/***/ "WLQe":
/*!*************************************************************!*\
  !*** ./src/app/public/register/students/students.module.ts ***!
  \*************************************************************/
/*! exports provided: StudentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageModule", function() { return StudentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students-routing.module */ "EKSE");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students.page */ "ChZt");







let StudentsPageModule = class StudentsPageModule {
};
StudentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _students_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsPageRoutingModule"]
        ],
        declarations: [_students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]]
    })
], StudentsPageModule);



/***/ }),

/***/ "YZu3":
/*!*************************************************************!*\
  !*** ./src/app/public/register/students/students.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#registerForm {\n  text-align: center;\n  height: 80%;\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 40%;\n  transform: translateY(-50%);\n  border: 1px solid whitesmoke;\n}\n#registerForm .label {\n  white-space: normal !important;\n}\n#web {\n  position: relative;\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0dWRlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQUk7RUFDRSw4QkFBQTtBQUVOO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoic3R1ZGVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyRm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAubGFiZWx7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9ICBcbiAgI3dlYiB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn0gICJdfQ== */");

/***/ }),

/***/ "xFLy":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/students/students.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon lot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Registro de alumnos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"registerForm\">\n    <ion-card-content>\n      <iframe src=\"https://khalil-app-306611.ew.r.appspot.com/KhalilApp/register_student\" frameborder=\"0\" allowfullscreen id=\"web\"></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=students-students-module.js.map