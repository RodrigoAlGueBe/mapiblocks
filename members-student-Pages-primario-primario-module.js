(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-student-Pages-primario-primario-module"],{

/***/ "0Zsi":
/*!*******************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/primario.module.ts ***!
  \*******************************************************************/
/*! exports provided: PrimarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimarioPageModule", function() { return PrimarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _primario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primario-routing.module */ "S2jY");
/* harmony import */ var _primario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primario.page */ "7310");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");







//Module for the common components and modules used in all the workspaces and theme pages.

let PrimarioPageModule = class PrimarioPageModule {
};
PrimarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _primario_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrimarioPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_primario_page__WEBPACK_IMPORTED_MODULE_6__["PrimarioPage"]]
    })
], PrimarioPageModule);



/***/ }),

/***/ "35j9":
/*!*******************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/primario.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Perfil {\n  position: absolute;\n  left: 93.4%;\n  right: 1.88%;\n  height: 60px;\n  width: 60px;\n}\nion-toolbar #Perfil:hover {\n  position: absolute;\n  left: 93%;\n  right: 1.5%;\n  height: 70px;\n  width: 70px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\n#content {\n  padding: 16px;\n}\n#missions {\n  margin: 10px;\n  background-color: whitesmoke;\n  text-align: center;\n}\n#missions .label {\n  white-space: normal !important;\n}\np {\n  color: black;\n}\nmat-card-title {\n  color: black;\n}\nbutton {\n  background-color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ByaW1hcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ0E7RUFBWSxnaEJBQUE7QUFHWjtBQUFBO0VBQ0ksYUFBQTtBQUdKO0FBREE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUlKO0FBSEk7RUFDSSw4QkFBQTtBQUtSO0FBRkE7RUFDSSxZQUFBO0FBS0o7QUFIQTtFQUNDLFlBQUE7QUFNRDtBQUpBO0VBQ0kseUJBQUE7QUFPSiIsImZpbGUiOiJwcmltYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgI1BlcmZpbHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5My40JTtcbiAgICAgICAgcmlnaHQ6IDEuODglO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICAjUGVyZmlsOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDkzJTtcbiAgICAgICAgcmlnaHQ6IDEuNSU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgfVxuICAgICNCYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIuMjIlO1xuICAgICAgICByaWdodDogOTQuNjUlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNCYWNrOmhvdmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICByaWdodDogOTQlO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7ICAgXG4gICAgfVxufVxuaW9uLWNvbnRlbnR7LS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtYWxwaGEtc2lnLmZpZ21hLmNvbS9pbWcvNjI3OS9mNWYwL2MzNGU5MWRkNTI2M2U2ODhhZTI4YzU5MDU5MTc1MjZjP0V4cGlyZXM9MTYyMTIwOTYwMCZTaWduYXR1cmU9Wm1QU1pzeU45akJ+dlJwZnFpc05+U2dBRlgwU2xaNGVZQ3pxNnBVVUhCekV3YlVyNnhmfmt1blNaRVAxU2ZGejJEOHR4TklJZmh2R3ctcFpDLW5sLTBNT3FGZmJLTFM4dnpXUnZtUzM3TE5+b2RuS2hvWVFWVDJmYUtsQVF4QWhMVGtraTc3LW9wbkdvR014WjVFQUR5NzFkRXRjcnVDeUVHZmYxbTFYUzU3YkRNa0ZHNXRiQW9BbTE0UENYWVFVZjRGVjdlV2w1RH45c1ItZHRwcFd3dkl4V1lpVFhpZS1JQU5MZVdjV3d1QUtGRXNiMmJkTVJvNUZ2cm9kNllaRHBPQVhwMzd4Y21lSlJkY3JpYzNMZXp6akp5ZEdhMzB3VkxCfmxyQnJ+WXVYcWJ+cThuU2pzYUxuOEJQWlpEMVB5NHRFRFBqSXQ1SzZiOVRvQlNnOG13X18mS2V5LVBhaXItSWQ9QVBLQUlOVFZTVUdFV0g1WEQ1VUEnKTAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4jY29udGVudHtcbiAgICBwYWRkaW5nOjE2cHg7XG59XG4jbWlzc2lvbnN7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZXNtb2tlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAubGFiZWx7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9ICAgXG59XG5wIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5tYXQtY2FyZC10aXRsZXtcbiBjb2xvcjpibGFjaztcbn1cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzg4MGZmOyBcbn0iXX0= */");

/***/ }),

/***/ "7310":
/*!*****************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/primario.page.ts ***!
  \*****************************************************************/
/*! exports provided: PrimarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimarioPage", function() { return PrimarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_primario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./primario.page.html */ "AtYg");
/* harmony import */ var _primario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primario.page.scss */ "35j9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Others/Services/ejercicios/ejercicios.service */ "m1hz");





let PrimarioPage = class PrimarioPage {
    constructor(ejerciosService) {
        this.ejerciosService = ejerciosService;
        this.ejercicios = [];
    }
    ngOnInit() {
        //Ejercicios a través del servicio.
        this.ejercicios = this.ejerciosService.getEjercicios('primario');
        //Delete the option of answer and the lists of places once you enter to choose an exercise.
        localStorage.removeItem('allowAnswer');
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listProv');
        localStorage.removeItem('listLatinProv');
        localStorage.removeItem('listRegTeacher');
        localStorage.removeItem('listLatinRegTeacher');
    }
};
PrimarioPage.ctorParameters = () => [
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__["EjerciciosService"] }
];
PrimarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-primario',
        template: _raw_loader_primario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_primario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrimarioPage);



/***/ }),

/***/ "AtYg":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/primario/primario.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" id=\"Back\" >\n      <ion-button [routerLink]=\"['/students/exercises']\">\n      <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Sector primario</ion-title>\n    <ion-button [routerLink]=\"['/students/exercises']\"\n                      slot=\"end\" \n                      id=\"Perfil\"  \n                      color=\"morado\">\n        <img  src=\"/assets/users/astronauta.png\">\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"content\">\n    <div fxLayout=\"row wrap\">\n      <div fxFlex= \"25%\" *ngFor = \"let mission of ejercicios\">\n        <mat-card id=\"missions\">\n          <mat-card-header>\n            <mat-card-title>{{mission.title}}</mat-card-title>\n            <p>\n              <ion-icon color=\"danger\" size=\"big\" name=\"alert-circle\"></ion-icon>\n              {{mission.difficulty}}\n          </p>\n          </mat-card-header>\n          <img mat-card-image src={{mission.imageURL}}>\n          <mat-card-content>\n            <p>{{mission.subtitle}}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button [routerLink]= \"['/alumno/primario', mission.ob]\">COMPLETAR</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "S2jY":
/*!***************************************************************************!*\
  !*** ./src/app/members/student/Pages/primario/primario-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PrimarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimarioPageRoutingModule", function() { return PrimarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _primario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./primario.page */ "7310");




const routes = [
    {
        path: '',
        component: _primario_page__WEBPACK_IMPORTED_MODULE_3__["PrimarioPage"]
    },
    {
        path: 'ws-prim',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-primario-ws-prim-ws-prim-module */ "Pages-primario-ws-prim-ws-prim-module").then(__webpack_require__.bind(null, /*! ../../Pages/primario/ws-prim/ws-prim.module */ "gSbu")).then(m => m.WsPrimPageModule)
    }
];
let PrimarioPageRoutingModule = class PrimarioPageRoutingModule {
};
PrimarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrimarioPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=members-student-Pages-primario-primario-module.js.map