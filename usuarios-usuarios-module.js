(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "0G8V":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "JctN");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "pf1+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _members_teacher_teacher_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../members/teacher/teacher-routing.module */ "X/V9");









let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"],
            _members_teacher_teacher_routing_module__WEBPACK_IMPORTED_MODULE_8__["TeacherPageRoutingModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]],
    })
], UsuariosPageModule);



/***/ }),

/***/ "JctN":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "pf1+");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "QTbk":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#usuarios {\n  text-align: center;\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 1px solid whitesmoke;\n}\n#usuarios .label {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzdWFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFDSTtFQUNFLDhCQUFBO0FBQ04iLCJmaWxlIjoidXN1YXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzdWFyaW9zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAubGFiZWx7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxufSAgICAiXX0= */");

/***/ }),

/***/ "Rgih":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Usuarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"usuarios\">\n  <ion-card-content>\n    <ion-item> <!--[routerLink]= \"['/alumno']\" -->\n      <ion-avatar slot=\"start\">\n        <ion-img src= \"https://image.freepik.com/vector-gratis/profesor-asiatico-alumnos-internacionales-mascaras-protectoras-sus-rostros-ninos-ninas-vestidos-uniforme-escolar-maestro-proteccion-contra-virus-respiratorios-concepto-alergias_71593-520.jpg\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        Alumno\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"redirect()\">\n      <ion-avatar slot=\"start\">\n        <ion-img src= \"https://image.freepik.com/vector-gratis/paquete-maestro_23-2148527524.jpg\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        Maestro\n      </ion-label>\n    </ion-item>\n  </ion-card-content>\n  </ion-card>\n\n");

/***/ }),

/***/ "pf1+":
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios.page.html */ "Rgih");
/* harmony import */ var _usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.page.scss */ "QTbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let UsuariosPage = class UsuariosPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirect() {
        //this.router.navigate(['teacher/teacher-account']);
    }
};
UsuariosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios',
        template: _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map