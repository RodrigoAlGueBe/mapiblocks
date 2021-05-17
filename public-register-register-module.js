(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "2i3i":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "8il3");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "a2d4");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "8il3":
/*!************************************************************!*\
  !*** ./src/app/public/register/register-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "a2d4");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    },
    {
        path: 'students',
        loadChildren: () => __webpack_require__.e(/*! import() | students-students-module */ "students-students-module").then(__webpack_require__.bind(null, /*! ./students/students.module */ "WLQe")).then(m => m.StudentsPageModule)
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "BEhf":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#registerForm {\n  text-align: center;\n  height: 80%;\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 40%;\n  transform: translateY(-50%);\n  border: 1px solid whitesmoke;\n}\n#registerForm .label {\n  white-space: normal !important;\n}\n#web {\n  position: relative;\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQUk7RUFDRSw4QkFBQTtBQUVOO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyRm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDQwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICAubGFiZWx7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9ICBcbiAgI3dlYiB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn0gICJdfQ== */");

/***/ }),

/***/ "a2d4":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "ga7b");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "BEhf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_registro_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/registro/user.service */ "qiJ2");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");







let RegisterPage = class RegisterPage {
    constructor(userService, authService, loading) {
        this.userService = userService;
        this.authService = authService;
        this.loading = loading;
    }
    ngOnInit() {
        this.newTeacher = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            school_name: '',
            password1: '',
            password2: ''
        };
    }
    registerNewTeacher() {
        this.loading.newTeacherLoading();
        this.userService.registerTeacher(this.newTeacher).subscribe(response => {
            //Finish user loading function
            this.loading.newTeachLoading.dismiss();
            console.log(response);
            alert('¡Buenas ' + this.newTeacher.username + ', esperemos que disfrutes de esta nueva manera de enseñar!');
        }, _error => {
            setTimeout(() => {
                //Finish map loading function
                this.loading.newTeachLoading.dismiss();
                //Give an alert message 
                alert('Vaya...Parece que no hemos podido añadirte como usuario.');
                //Set finish time to 1 sec after the error has happend.
            }, 1000);
        });
    }
    logout() {
        this.authService.logout();
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_auth_registro_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "ga7b":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/register.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon lot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Registro de maestros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"registerForm\">\n    <ion-card-content>\n      <iframe src=\"https://khalil-app-306611.ew.r.appspot.com/KhalilApp/register_teacher\" frameborder=\"0\" allowfullscreen id=\"web\"></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=public-register-register-module.js.map