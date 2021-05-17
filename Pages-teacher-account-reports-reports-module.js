(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-teacher-account-reports-reports-module"],{

/***/ "4qD8":
/*!*****************************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/reports/reports-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageRoutingModule", function() { return ReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.page */ "8yjn");




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_3__["ReportsPage"]
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ "8KEk":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/reports/reports.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-routing.module */ "4qD8");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "8yjn");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");
/* harmony import */ var src_app_users_API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/users API */ "dD96");







//Module for the common components and modules used in all the workspaces and theme pages.


let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [
            src_app_users_API__WEBPACK_IMPORTED_MODULE_8__["ReportService"]
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
    })
], ReportsPageModule);



/***/ }),

/***/ "8yjn":
/*!*******************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/reports/reports.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.page.html */ "T2Iq");
/* harmony import */ var _reports_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.page.scss */ "zxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_users_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users API */ "dD96");






let ReportsPage = class ReportsPage {
    constructor(router, reportService) {
        this.router = router;
        this.reportService = reportService;
    }
    ngOnInit() {
        const URL = this.router.url;
        //The string is cut in the 25th character to let just the username.
        this.username = URL.slice(25);
        //Get the token to know what teacher is logged
        var token = localStorage.getItem('userTeacher');
        //The only way we know to make this work
        var queryParameters = `token_teacher=${token},username_student=${this.username},`;
        var arr = [];
        var array = [];
        //API call to print the reports of a student
        this.reportService.studentGlobalReportGet(queryParameters)
            .subscribe(reports => {
            //Log the reports object with single tries reports nested in each exercise 
            console.log(reports);
            //Create a list of objects with the value of the reports object (still nested)
            this.list = Object.values(reports);
            //Create an array of nested object knowing the length of it.
            for (let i = 0; i < this.list.length; i++) {
                this.userReports = Object.values(this.list[i]);
                arr.push(this.userReports);
            }
            //With the length of each single object array, creates multiple arrays of objects (no nested)
            for (let i = 0; i < arr.length; i++) {
                this.reports = arr[i];
                //console.log('reports',this.reports)
                //Using the no nested arrays and knowing the actual lengths, creates a single array with all the objects no nested
                for (let i = 0; i < this.reports.length; i++) {
                    this.finalReports = this.reports[i];
                    array.push(this.finalReports);
                }
            }
            //The final array is named "final" and store the data to show on screen 
            this.final = array;
            console.log(array);
        });
    }
};
ReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_users_API__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }
];
ReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reports',
        template: _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reports_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportsPage);



/***/ }),

/***/ "T2Iq":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/teacher-account/reports/reports.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/teacher/teacher-account']\">\n      <ion-button>\n      <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{username}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"content\">\n    <div fxLayout=\"row wrap\">\n      <div fxFlex= \"25%\" *ngFor = \"let fin of final\">\n        <mat-card id=\"missions\">\n          <mat-card-header>\n            <mat-card-title>ejercicio {{fin.exercise_id}}</mat-card-title>\n          </mat-card-header>\n            <ion-label>\n              Intento nº: {{fin.attempt_number}}\n            </ion-label>\n            <br>\n            <ion-label>\n              Terminado: {{fin.exercise_finished}}\n            </ion-label>\n            <br>\n            <ion-label>\n              {{fin.fails}} fallo/s\n            </ion-label>\n            <br>\n            <ion-label>\n              {{fin.n_clue}} pista/s \n            </ion-label>\n            <br>\n            <ion-label>\n              {{fin.n_play_clics}} mapa/s usados\n            </ion-label>\n            <br>\n            <ion-label>\n              {{fin.time_counter}} segundos\n            </ion-label>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "zxbk":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/reports/reports.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\n\n#Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\n\n#missions {\n  margin: 10px;\n  background-color: whitesmoke;\n  text-align: center;\n  border: 2px solid #c6e5b1;\n}\n\n#missions .label {\n  white-space: normal !important;\n}\n\nion-label {\n  color: black;\n}\n\nmat-card-title {\n  color: black;\n}\n\nbutton {\n  background-color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBRkk7RUFDSSw4QkFBQTtBQUlSOztBQURFO0VBQ0UsWUFBQTtBQUlKOztBQUZFO0VBQ0EsWUFBQTtBQUtGOztBQUhFO0VBQ0UseUJBQUE7QUFNSiIsImZpbGUiOiJyZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNCYWNre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyLjIyJTtcbiAgICByaWdodDogOTQuNjUlO1xuICAgIGhlaWdodDogNjBweDsgICBcbn1cbiNCYWNrOmhvdmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyJTtcbiAgICByaWdodDogOTQlO1xuICAgIGhlaWdodDogNzBweDsgICBcbn1cbiNtaXNzaW9uc3tcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlc21va2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNmU1YjE7XG4gICAgLmxhYmVse1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfSAgIFxuICB9XG4gIGlvbi1sYWJlbHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgbWF0LWNhcmQtdGl0bGV7XG4gIGNvbG9yOmJsYWNrO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzg4MGZmOyBcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Pages-teacher-account-reports-reports-module.js.map