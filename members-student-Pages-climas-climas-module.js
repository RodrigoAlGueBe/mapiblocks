(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-student-Pages-climas-climas-module"],{

/***/ "ELoa":
/*!*************************************************************!*\
  !*** ./src/app/members/student/Pages/climas/climas.page.ts ***!
  \*************************************************************/
/*! exports provided: ClimasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClimasPage", function() { return ClimasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_climas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./climas.page.html */ "VuEQ");
/* harmony import */ var _climas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./climas.page.scss */ "ZPnS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Others/Services/ejercicios/ejercicios.service */ "m1hz");





let ClimasPage = class ClimasPage {
    constructor(ejerciosService) {
        this.ejerciosService = ejerciosService;
        this.ejercicios = [];
    }
    ngOnInit() {
        //Ejercicios a través del servicio.
        this.ejercicios = this.ejerciosService.getEjercicios('climas');
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
ClimasPage.ctorParameters = () => [
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_4__["EjerciciosService"] }
];
ClimasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-climas',
        template: _raw_loader_climas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_climas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClimasPage);



/***/ }),

/***/ "SOA/":
/*!***********************************************************************!*\
  !*** ./src/app/members/student/Pages/climas/climas-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ClimasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClimasPageRoutingModule", function() { return ClimasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _climas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./climas.page */ "ELoa");




const routes = [
    {
        path: '',
        component: _climas_page__WEBPACK_IMPORTED_MODULE_3__["ClimasPage"]
    },
    {
        path: 'ws-clim',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-climas-ws-clim-ws-clim-module */ "Pages-climas-ws-clim-ws-clim-module").then(__webpack_require__.bind(null, /*! ../../Pages/climas/ws-clim/ws-clim.module */ "u2WT")).then(m => m.WsClimPageModule)
    }
];
let ClimasPageRoutingModule = class ClimasPageRoutingModule {
};
ClimasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClimasPageRoutingModule);



/***/ }),

/***/ "VuEQ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/climas/climas.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" id=\"Back\" >\n      <ion-button [routerLink]=\"['/students/exercises']\">\n      <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Climas</ion-title>\n    <ion-button [routerLink]=\"['/students/exercises']\"\n                      slot=\"end\" \n                      id=\"Perfil\"  \n                      color=\"morado\">\n        <img  src=\"/assets/users/astronauta.png\">\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"content\">\n    <div fxLayout=\"row wrap\">\n      <div fxFlex= \"25%\" *ngFor = \"let mission of ejercicios\">\n        <mat-card id=\"missions\">\n          <mat-card-header>\n            <mat-card-title>{{mission.title}}</mat-card-title>\n            <p>\n              <ion-icon color=\"danger\" size=\"big\" name=\"alert-circle\"></ion-icon>\n              {{mission.difficulty}}\n          </p>\n          </mat-card-header>\n          <img mat-card-image src={{mission.imageURL}}>\n          <mat-card-content>\n            <p>{{mission.subtitle}}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button [routerLink]= \"['/alumno/climas', mission.ob]\">COMPLETAR</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "ZPnS":
/*!***************************************************************!*\
  !*** ./src/app/members/student/Pages/climas/climas.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Perfil {\n  position: absolute;\n  left: 93.4%;\n  right: 1.88%;\n  height: 60px;\n  width: 60px;\n}\nion-toolbar #Perfil:hover {\n  position: absolute;\n  left: 93%;\n  right: 1.5%;\n  height: 70px;\n  width: 70px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\n#content {\n  padding: 16px;\n}\n#missions {\n  margin: 10px;\n  background-color: whitesmoke;\n  text-align: center;\n  border: 2px solid #c6e5b1;\n}\n#missions .label {\n  white-space: normal !important;\n}\np {\n  color: black;\n}\nmat-card-title {\n  color: black;\n}\nbutton {\n  background-color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NsaW1hcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUjtBQUNBO0VBQVksZ2hCQUFBO0FBR1o7QUFEQTtFQUNJLGFBQUE7QUFJSjtBQUZBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUtKO0FBSkk7RUFDSSw4QkFBQTtBQU1SO0FBSEE7RUFDSSxZQUFBO0FBTUo7QUFKQTtFQUNDLFlBQUE7QUFPRDtBQUxBO0VBQ0kseUJBQUE7QUFRSiIsImZpbGUiOiJjbGltYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgICNQZXJmaWx7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTMuNCU7XG4gICAgICAgIHJpZ2h0OiAxLjg4JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgI1BlcmZpbDpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5MyU7XG4gICAgICAgIHJpZ2h0OiAxLjUlO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgIH1cbiAgICAjQmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyLjIyJTtcbiAgICAgICAgcmlnaHQ6IDk0LjY1JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjQmFjazpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgcmlnaHQ6IDk0JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyAgIFxuICAgIH1cbn1cbmlvbi1jb250ZW50ey0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLWFscGhhLXNpZy5maWdtYS5jb20vaW1nLzYyNzkvZjVmMC9jMzRlOTFkZDUyNjNlNjg4YWUyOGM1OTA1OTE3NTI2Yz9FeHBpcmVzPTE2MjEyMDk2MDAmU2lnbmF0dXJlPVptUFNac3lOOWpCfnZScGZxaXNOflNnQUZYMFNsWjRlWUN6cTZwVVVIQnpFd2JVcjZ4Zn5rdW5TWkVQMVNmRnoyRDh0eE5JSWZodkd3LXBaQy1ubC0wTU9xRmZiS0xTOHZ6V1J2bVMzN0xOfm9kbktob1lRVlQyZmFLbEFReEFoTFRra2k3Ny1vcG5Hb0dNeFo1RUFEeTcxZEV0Y3J1Q3lFR2ZmMW0xWFM1N2JETWtGRzV0YkFvQW0xNFBDWFlRVWY0RlY3ZVdsNUR+OXNSLWR0cHBXd3ZJeFdZaVRYaWUtSUFOTGVXY1d3dUFLRkVzYjJiZE1SbzVGdnJvZDZZWkRwT0FYcDM3eGNtZUpSZGNyaWMzTGV6empKeWRHYTMwd1ZMQn5sckJyfll1WHFifnE4blNqc2FMbjhCUFpaRDFQeTR0RURQakl0NUs2YjlUb0JTZzhtd19fJktleS1QYWlyLUlkPUFQS0FJTlRWU1VHRVdINVhENVVBJykwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbiNjb250ZW50e1xuICAgIHBhZGRpbmc6MTZweDtcbn1cbiNtaXNzaW9uc3tcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlc21va2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNmU1YjE7XG4gICAgLmxhYmVse1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfSAgIFxufVxucCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxubWF0LWNhcmQtdGl0bGV7XG4gY29sb3I6YmxhY2s7XG59XG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM4ODBmZjsgXG59Il19 */");

/***/ }),

/***/ "tkir":
/*!***************************************************************!*\
  !*** ./src/app/members/student/Pages/climas/climas.module.ts ***!
  \***************************************************************/
/*! exports provided: ClimasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClimasPageModule", function() { return ClimasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _climas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./climas-routing.module */ "SOA/");
/* harmony import */ var _climas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./climas.page */ "ELoa");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");







//Module for the common components and modules used in all the workspaces and theme pages.

let ClimasPageModule = class ClimasPageModule {
};
ClimasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _climas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClimasPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_climas_page__WEBPACK_IMPORTED_MODULE_6__["ClimasPage"]]
    })
], ClimasPageModule);



/***/ })

}]);
//# sourceMappingURL=members-student-Pages-climas-climas-module.js.map