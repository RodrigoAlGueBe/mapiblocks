(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-teacher-account-teacher-account-module"],{

/***/ "2fSp":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/teacher-account.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TeacherAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAccountPageModule", function() { return TeacherAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _teacher_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-account-routing.module */ "qUWj");
/* harmony import */ var _teacher_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher-account.page */ "658h");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");
/* harmony import */ var src_app_users_API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/users API */ "dD96");







//Module for the common components and modules used in all the workspaces and theme pages.


let TeacherAccountPageModule = class TeacherAccountPageModule {
};
TeacherAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teacher_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeacherAccountPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [
            src_app_users_API__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        ],
        declarations: [_teacher_account_page__WEBPACK_IMPORTED_MODULE_6__["TeacherAccountPage"]]
    })
], TeacherAccountPageModule);



/***/ }),

/***/ "658h":
/*!*******************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/teacher-account.page.ts ***!
  \*******************************************************************************/
/*! exports provided: TeacherAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAccountPage", function() { return TeacherAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teacher_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teacher-account.page.html */ "gZRN");
/* harmony import */ var _teacher_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-account.page.scss */ "e4mC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_users_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/users API */ "dD96");






let TeacherAccountPage = class TeacherAccountPage {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    ngOnInit() {
        //Get the token to know what teacher is logged
        var token = localStorage.getItem('userTeacher');
        var realToken = `token=${token},`;
        console.log(realToken);
        //Teacher info
        this.userInfo = this.userService.getProfileGet(realToken)
            .subscribe(info => {
            console.log(info);
            this.username = info.username;
            this.firstName = info.first_name;
            this.lastName = info.last_name;
            this.schoolName = info.school_name;
        });
        //create a variable array to hold the students inside the for loop
        var arr = [];
        //Students of the teacher
        this.studentsInfo = this.userService.getFollowersGet(realToken)
            .subscribe(info => {
            console.log(info);
            this.list = Object.values(info);
            console.log(this.list);
            for (let i = 0; i < this.list.length; i++) {
                arr.push(JSON.parse(this.list[i]));
            }
            //the name of array that we add into the HTML 
            this.students = arr;
        });
        //Mock of a necessary API call.
        this.groups = ['Proximamente'];
        this.activities = ['Proximamente'];
    }
    logout() {
        this.authService.logout();
    }
};
TeacherAccountPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_users_API__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
TeacherAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-teacher-account',
        template: _raw_loader_teacher_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_teacher_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeacherAccountPage);



/***/ }),

/***/ "e4mC":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/teacher-account.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"https://globalenergyprize.org/en/wp-content/uploads/2020/09/3296e5dad944d313478fc911c85c192e61eb-1.jpg\")0 0/100% 100% no-repeat;\n}\n\n#perfil {\n  text-align: center;\n  border: 2px solid #c6e5b1;\n  margin: 10px;\n  background-color: transparent;\n}\n\n#perfil .label {\n  white-space: normal !important;\n}\n\n#clase {\n  text-align: center;\n  position: absolute;\n  left: 35%;\n  width: 25%;\n  border: 1px solid whitesmoke;\n}\n\n#clase .label {\n  white-space: normal !important;\n}\n\n#calendar {\n  text-align: center;\n  position: absolute;\n  left: 65%;\n  width: 25%;\n  border: 1px solid whitesmoke;\n}\n\n#calendar .label {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RlYWNoZXItYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrSkFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUNFO0VBQ0UsOEJBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBREY7O0FBRUU7RUFDRSw4QkFBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBR0EsNEJBQUE7QUFIRjs7QUFJRTtFQUNFLDhCQUFBO0FBRkoiLCJmaWxlIjoidGVhY2hlci1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nbG9iYWxlbmVyZ3lwcml6ZS5vcmcvZW4vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDkvMzI5NmU1ZGFkOTQ0ZDMxMzQ3OGZjOTExYzg1YzE5MmU2MWViLTEuanBnJykwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuXG4jcGVyZmlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzZlNWIxOyAgXG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50O1xuICAubGFiZWx7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9ICAgXG59XG5cbiNjbGFzZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1JTtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgLmxhYmVse1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuI2NhbGVuZGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB3aWR0aDogMjUlO1xuICAvL3JpZ2h0OiAzMCU7XG4gIC8vdG9wOiA0MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIC5sYWJlbHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "gZRN":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/teacher-account/teacher-account.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"userInfo()\">\n        <ion-icon lot=\"icon-only\" name=\"person\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{firstName}} {{lastName}} ({{schoolName}})</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"mailto:ynsat.space@gmail.com\">\n        <ion-label>\n          ¿Dudas o sugerencias?\n        </ion-label>\n      </ion-button>\n      <ion-button (click)=\"logout()\">\n        <ion-icon lot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <div fxLayout=\"row wrap\">\n    <div fxFlex= \"33%\">\n      <mat-card id=\"perfil\">\n        <mat-card-header>\n          <mat-card-title>4ºA</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ion-item *ngFor=\"let student of students\">  \n            <ion-label>\n              {{student.first_name}}\n            </ion-label>\n            <ion-buttons>\n              <ion-button [routerLink]=\"[student.username]\">\n              <ion-icon name=\"list\"></ion-icon>\n              </ion-button>  \n            </ion-buttons>  \n          </ion-item>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxFlex= \"33%\">\n      <mat-card id=\"perfil\">\n        <mat-card-header>\n          <mat-card-title>Grupos de la clase (Proximamente)</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ion-item *ngFor=\"let group of groups\">  \n            <ion-label>\n              {{group}}\n            </ion-label>\n            <ion-buttons>\n              <ion-button>\n              <ion-icon name=\"list\"></ion-icon>\n              </ion-button>  \n            </ion-buttons>  \n          </ion-item>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxFlex= \"33%\">\n      <mat-card id=\"perfil\">\n        <mat-card-header>\n          <mat-card-title>Calendario de actividades (Proximamente)</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ion-item *ngFor=\"let activity of activities\">  \n            <ion-label>\n              {{activity}}\n            </ion-label>\n            <ion-buttons>\n              <ion-button>\n              <ion-icon name=\"list\"></ion-icon>\n              </ion-button>  \n            </ion-buttons>  \n          </ion-item>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "qUWj":
/*!*****************************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/teacher-account/teacher-account-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAccountPageRoutingModule", function() { return TeacherAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teacher_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-account.page */ "658h");




const routes = [
    {
        path: '',
        component: _teacher_account_page__WEBPACK_IMPORTED_MODULE_3__["TeacherAccountPage"]
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-teacher-account-reports-reports-module */ "Pages-teacher-account-reports-reports-module").then(__webpack_require__.bind(null, /*! ../../Pages/teacher-account/reports/reports.module */ "8KEk")).then(m => m.ReportsPageModule)
    }
];
let TeacherAccountPageRoutingModule = class TeacherAccountPageRoutingModule {
};
TeacherAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeacherAccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Pages-teacher-account-teacher-account-module.js.map