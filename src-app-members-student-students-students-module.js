(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-student-students-students-module"],{

/***/ "7nwl":
/*!*********************************************************************!*\
  !*** ./src/app/members/student/students/students-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: StudentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageRoutingModule", function() { return StudentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students.page */ "DKQw");




const routes = [
    {
        path: 'students',
        component: _students_page__WEBPACK_IMPORTED_MODULE_3__["StudentsPage"],
        children: [
            {
                path: 'student-home',
                loadChildren: () => __webpack_require__.e(/*! import() | student-home-student-home-module */ "student-home-student-home-module").then(__webpack_require__.bind(null, /*! ./student-home/student-home.module */ "FBzm")).then(m => m.StudentHomePageModule)
            },
            {
                path: 'exercises',
                loadChildren: () => __webpack_require__.e(/*! import() | exercises-exercises-module */ "exercises-exercises-module").then(__webpack_require__.bind(null, /*! ./exercises/exercises.module */ "4JGg")).then(m => m.ExercisesPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/students/student-home',
        pathMatch: 'full'
    },
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

/***/ "DKQw":
/*!***********************************************************!*\
  !*** ./src/app/members/student/students/students.page.ts ***!
  \***********************************************************/
/*! exports provided: StudentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPage", function() { return StudentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./students.page.html */ "ttn6");
/* harmony import */ var _students_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students.page.scss */ "netb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StudentsPage = class StudentsPage {
    constructor() { }
    ngOnInit() {
    }
};
StudentsPage.ctorParameters = () => [];
StudentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-students',
        template: _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_students_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentsPage);



/***/ }),

/***/ "netb":
/*!*************************************************************!*\
  !*** ./src/app/members/student/students/students.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ttn6":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/students/students.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  \n</ion-tabs>\n");

/***/ }),

/***/ "xlJG":
/*!*************************************************************!*\
  !*** ./src/app/members/student/students/students.module.ts ***!
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
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students-routing.module */ "7nwl");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students.page */ "DKQw");







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



/***/ })

}]);
//# sourceMappingURL=src-app-members-student-students-students-module.js.map