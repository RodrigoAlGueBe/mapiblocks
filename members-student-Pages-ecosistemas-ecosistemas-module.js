(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-student-Pages-ecosistemas-ecosistemas-module"],{

/***/ "11WX":
/*!*********************************************************************************!*\
  !*** ./src/app/members/student/Pages/ecosistemas/ecosistemas-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EcosistemasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcosistemasPageRoutingModule", function() { return EcosistemasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ecosistemas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecosistemas.page */ "KEnw");




const routes = [
    {
        path: '',
        component: _ecosistemas_page__WEBPACK_IMPORTED_MODULE_3__["EcosistemasPage"]
    },
    {
        path: 'ws-ecos',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-ecosistemas-ws-ecos-ws-ecos-module */ "Pages-ecosistemas-ws-ecos-ws-ecos-module").then(__webpack_require__.bind(null, /*! ../../Pages/ecosistemas/ws-ecos/ws-ecos.module */ "dE0r")).then(m => m.WsEcosPageModule)
    }
];
let EcosistemasPageRoutingModule = class EcosistemasPageRoutingModule {
};
EcosistemasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EcosistemasPageRoutingModule);



/***/ }),

/***/ "KEnw":
/*!***********************************************************************!*\
  !*** ./src/app/members/student/Pages/ecosistemas/ecosistemas.page.ts ***!
  \***********************************************************************/
/*! exports provided: EcosistemasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcosistemasPage", function() { return EcosistemasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ecosistemas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ecosistemas.page.html */ "qNNY");
/* harmony import */ var _ecosistemas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecosistemas.page.scss */ "WNBy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Others/Services/ejercicios/ejercicios.service */ "m1hz");





let EcosistemasPage = class EcosistemasPage {
    constructor(ejerciosService) {
        this.ejerciosService = ejerciosService;
        this.ejercicios = [];
    }
    ngOnInit() {
        //Ejercicios a través del servicio.
        this.ejercicios = this.ejerciosService.getEjercicios('ecosistemas');
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
EcosistemasPage.ctorParameters = () => [
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__["EjerciciosService"] }
];
EcosistemasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ecosistemas',
        template: _raw_loader_ecosistemas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ecosistemas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EcosistemasPage);



/***/ }),

/***/ "LoA4":
/*!*************************************************************************!*\
  !*** ./src/app/members/student/Pages/ecosistemas/ecosistemas.module.ts ***!
  \*************************************************************************/
/*! exports provided: EcosistemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcosistemasPageModule", function() { return EcosistemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ecosistemas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ecosistemas-routing.module */ "11WX");
/* harmony import */ var _ecosistemas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecosistemas.page */ "KEnw");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");







//Module for the common components and modules used in all the workspaces and theme pages.

let EcosistemasPageModule = class EcosistemasPageModule {
};
EcosistemasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ecosistemas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EcosistemasPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_ecosistemas_page__WEBPACK_IMPORTED_MODULE_6__["EcosistemasPage"]],
    })
], EcosistemasPageModule);



/***/ }),

/***/ "WNBy":
/*!*************************************************************************!*\
  !*** ./src/app/members/student/Pages/ecosistemas/ecosistemas.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Perfil {\n  position: absolute;\n  left: 93.4%;\n  right: 1.88%;\n  height: 60px;\n  width: 60px;\n}\nion-toolbar #Perfil:hover {\n  position: absolute;\n  left: 93%;\n  right: 1.5%;\n  height: 70px;\n  width: 70px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\n#content {\n  padding: 16px;\n}\n#missions {\n  margin: 10px;\n  background-color: whitesmoke;\n  text-align: center;\n  border: 2px solid #c6e5b1;\n}\n#missions .label {\n  white-space: normal !important;\n}\np {\n  color: black;\n}\nmat-card-title {\n  color: black;\n}\nbutton {\n  background-color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Vjb3Npc3RlbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ0E7RUFBWSxnaEJBQUE7QUFHWjtBQURBO0VBQ0ksYUFBQTtBQUlKO0FBRkE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBS0o7QUFKSTtFQUNJLDhCQUFBO0FBTVI7QUFIQTtFQUNJLFlBQUE7QUFNSjtBQUpBO0VBQ0MsWUFBQTtBQU9EO0FBTEE7RUFDSSx5QkFBQTtBQVFKIiwiZmlsZSI6ImVjb3Npc3RlbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIGhlaWdodDogNjBweDtcbiAgICAjUGVyZmlse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDkzLjQlO1xuICAgICAgICByaWdodDogMS44OCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICAgICNQZXJmaWw6aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTMlO1xuICAgICAgICByaWdodDogMS41JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICB9XG4gICAgI0JhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMi4yMiU7XG4gICAgICAgIHJpZ2h0OiA5NC42NSU7XG4gICAgICAgIGhlaWdodDogNjBweDsgICBcbiAgICB9XG4gICAgI0JhY2s6aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMiU7XG4gICAgICAgIHJpZ2h0OiA5NCU7XG4gICAgICAgIGhlaWdodDogNzBweDsgICBcbiAgICB9XG59XG5pb24tY29udGVudHstLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy1hbHBoYS1zaWcuZmlnbWEuY29tL2ltZy82Mjc5L2Y1ZjAvYzM0ZTkxZGQ1MjYzZTY4OGFlMjhjNTkwNTkxNzUyNmM/RXhwaXJlcz0xNjIxMjA5NjAwJlNpZ25hdHVyZT1abVBTWnN5TjlqQn52UnBmcWlzTn5TZ0FGWDBTbFo0ZVlDenE2cFVVSEJ6RXdiVXI2eGZ+a3VuU1pFUDFTZkZ6MkQ4dHhOSUlmaHZHdy1wWkMtbmwtME1PcUZmYktMUzh2eldSdm1TMzdMTn5vZG5LaG9ZUVZUMmZhS2xBUXhBaExUa2tpNzctb3BuR29HTXhaNUVBRHk3MWRFdGNydUN5RUdmZjFtMVhTNTdiRE1rRkc1dGJBb0FtMTRQQ1hZUVVmNEZWN2VXbDVEfjlzUi1kdHBwV3d2SXhXWWlUWGllLUlBTkxlV2NXd3VBS0ZFc2IyYmRNUm81RnZyb2Q2WVpEcE9BWHAzN3hjbWVKUmRjcmljM0xlenpqSnlkR2EzMHdWTEJ+bHJCcn5ZdVhxYn5xOG5TanNhTG44QlBaWkQxUHk0dEVEUGpJdDVLNmI5VG9CU2c4bXdfXyZLZXktUGFpci1JZD1BUEtBSU5UVlNVR0VXSDVYRDVVQScpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4jY29udGVudHtcbiAgICBwYWRkaW5nOjE2cHg7XG59XG4jbWlzc2lvbnN7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZXNtb2tlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzZlNWIxO1xuICAgIC5sYWJlbHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH0gICBcbn1cbnAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cbm1hdC1jYXJkLXRpdGxle1xuIGNvbG9yOmJsYWNrO1xufVxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzODgwZmY7IFxufSJdfQ== */");

/***/ }),

/***/ "qNNY":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/ecosistemas/ecosistemas.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" id=\"Back\" >\n      <ion-button [routerLink]=\"['/students/exercises']\">\n      <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Ecosistemas</ion-title>\n    <ion-button [routerLink]=\"['/students/exercises']\"\n                      slot=\"end\" \n                      id=\"Perfil\"  \n                      color=\"morado\">\n        <img  src=\"/assets/users/astronauta.png\">\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"content\">\n    <div fxLayout=\"row wrap\">\n      <div fxFlex= \"25%\" *ngFor = \"let mission of ejercicios\">\n        <mat-card id=\"missions\">\n          <mat-card-header>\n            <mat-card-title>{{mission.title}}</mat-card-title>\n            <p>\n              <ion-icon color=\"danger\" size=\"big\" name=\"alert-circle\"></ion-icon>\n              {{mission.difficulty}}\n          </p>\n          </mat-card-header>\n          <img mat-card-image src={{mission.imageURL}}>\n          <mat-card-content>\n            <p>{{mission.subtitle}}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button [routerLink]= \"['/alumno/ecosistemas', mission.ob]\">COMPLETAR</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=members-student-Pages-ecosistemas-ecosistemas-module.js.map