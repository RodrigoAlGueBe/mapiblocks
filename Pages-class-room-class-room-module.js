(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-class-room-class-room-module"],{

/***/ "H8Dz":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/class-room/class-room.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\">{{clase}}</ion-title>\n    <ion-item id=\"groups\">\n      <ion-label>Grupos</ion-label>\n      <ion-select disabled=\"{{disabled}}\" [interfaceOptions]=\"customAlertOptions\" interface=\"alert\" multiple=\"true\">\n        <ion-select-option  *ngFor=\"let student of students\" value=\"{{student}}\">{{student}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id=\"language\" slot=\"end\" >\n      <!-- Default Segment -->\n    <ion-segment [(ngModel)]=\"language\" color=\"success\">\n      <ion-segment-button value=\"spanish\">\n      <img src=\"/assets/language/espana.png\"> \n      </ion-segment-button>\n      <ion-segment-button value=\"english\">\n      <img src=\"/assets/language/reino-unido.png\">\n      </ion-segment-button>\n    </ion-segment>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\" edge>\n    <ion-fab-button color=\"success\" >\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\" >\n      <ion-fab-button color=\"light\" *ngFor = \"let clase of clases\" (click)=class(clase)>\n        {{clase}}\n      </ion-fab-button>\n    </ion-fab-list>\n\n\n  </ion-fab>\n  \n    <div fxLayout=\"row wrap\">\n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Seres vivos</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let serVivo of seresVivos\">\n                <ion-label >\n                  {{serVivo.title}}\n                </ion-label>\n                <ion-buttons id=\"letter\">\n                  <ion-button (click)=showStatement(serVivo.statement,serVivo.pills,$event)>\n                  <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle color=\"success\" [(ngModel)]=\"serVivo.able\" (ionChange)=\"change(serVivo.title, serVivo.able)\"></ion-toggle>\n              </ion-item>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    \n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>El humano y la sociedad</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let humSoc of humanoSociedad\">\n                <ion-label>\n                  {{humSoc.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button  color=\"primary\" (click)=showStatement(humSoc.statement,humSoc.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"humSoc.able\" (ionChange)=\"change(humSoc.title, humSoc.able)\"></ion-toggle>\n              </ion-item>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    \n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Cambio Climático</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let cambio of cambioClimatico\">\n                <ion-label>\n                  {{cambio.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button  color=\"primary\" (click)=showStatement(cambio.statement,cambio.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"cambio.able\" (ionChange)=\"change(cambio.title, cambio.able)\"></ion-toggle>\n              </ion-item>\n            </div>              \n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Ecosistemas</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let ecos of Ecosistemas\">\n                <ion-label>\n                  {{ecos.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button  color=\"primary\" (click)=showStatement(ecos.statement,ecos.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"ecos.able\" (ionChange)=\"change(ecos.title, ecos.able)\"></ion-toggle>\n              </ion-item>    \n            </div>           \n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Climas</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let clima of Climas\">\n                <ion-label>\n                  {{clima.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button   (click)=showStatement(clima.statement,clima.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"clima.able\" (ionChange)=\"change(clima.title, clima.able)\"></ion-toggle>\n              </ion-item>   \n            </div>                \n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Materia y energía</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let mat of materia\">\n                <ion-label>\n                  {{mat.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button  color=\"primary\" (click)=showStatement(mat.statement,mat.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"mat.able\" (ionChange)=\"change(mat.title, mat.able)\"></ion-toggle>\n              </ion-item>  \n            </div>                 \n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <div fxFlex= \"50%\">\n        <mat-card id=\"themes\">\n          <mat-card-header>\n            <mat-card-title>Sector Primario</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <div scrolly=\"true\" style=\"max-height:240px\">\n              <ion-item *ngFor=\"let secPrim of sectorPrimario\">\n                <ion-label>\n                  {{secPrim.title}}\n                </ion-label>\n                <ion-buttons>\n                  <ion-button  color=\"primary\" (click)=showStatement(secPrim.statement,secPrim.pills,$event)>\n                    <ion-icon name=\"list\"></ion-icon>\n                  </ion-button>  \n                </ion-buttons>  \n                <ion-toggle [(ngModel)]=\"secPrim.able\" (ionChange)=\"change(secPrim.title, secPrim.able)\"></ion-toggle>\n              </ion-item>      \n            </div>    \n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "QI9V":
/*!***********************************************************************!*\
  !*** ./src/app/members/teacher/Pages/class-room/class-room.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"https://globalenergyprize.org/en/wp-content/uploads/2020/09/3296e5dad944d313478fc911c85c192e61eb-1.jpg\")0 0/100% 100% no-repeat;\n}\n\nion-item {\n  --border-color: none;\n  --border-width: 0px !important;\n}\n\nion-title {\n  height: 100%;\n}\n\n#groups {\n  right: 50%;\n  height: 100%;\n}\n\n#themes {\n  margin: 10px;\n  background-color: transparent;\n  text-align: center;\n  border: 2px solid #c6e5b1;\n}\n\n#themes .label {\n  white-space: normal !important;\n}\n\ndiv[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true] {\n  overflow-y: auto;\n}\n\n#language {\n  right: 20%;\n  width: 15%;\n  height: 100%;\n}\n\n#language img {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NsYXNzLXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0pBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0VBQXNCLDhCQUFBO0FBRzFCOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFMSTtFQUNJLDhCQUFBO0FBT1I7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDRyxnQkFBQTtBQU9IOztBQUpBO0VBQ0csZ0JBQUE7QUFPSDs7QUFIQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUxJO0VBQ0ksWUFBQTtBQU9SIiwiZmlsZSI6ImNsYXNzLXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2xvYmFsZW5lcmd5cHJpemUub3JnL2VuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA5LzMyOTZlNWRhZDk0NGQzMTM0NzhmYzkxMWM4NWMxOTJlNjFlYi0xLmpwZycpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5pb24taXRlbXtcbiAgICAtLWJvcmRlci1jb2xvcjogbm9uZTsgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLXRpdGxle1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiNncm91cHN7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4jdGhlbWVze1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNmU1YjE7XG4gICAgLmxhYmVse1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfSAgIFxufVxuZGl2W3Njcm9sbHg9dHJ1ZV0sZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5kaXZbc2Nyb2xseT10cnVlXSB7XG4gICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5cbiNsYW5ndWFnZXtcbiAgICByaWdodDogMjAlO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "cEto":
/*!*********************************************************************!*\
  !*** ./src/app/members/teacher/Pages/class-room/class-room.page.ts ***!
  \*********************************************************************/
/*! exports provided: ClassRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoomPage", function() { return ClassRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_class_room_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./class-room.page.html */ "H8Dz");
/* harmony import */ var _class_room_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-room.page.scss */ "QI9V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_members_student_Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/student/Others/Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _calendar_statement_statement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/statement/statement.component */ "g15n");







let ClassRoomPage = class ClassRoomPage {
    constructor(ejerciosService, popoverController) {
        this.ejerciosService = ejerciosService;
        this.popoverController = popoverController;
        this.customAlertOptions = {
            header: 'Estudiantes de la clase',
            subHeader: 'Selecciona los alumnos',
            message: 'Alumnado',
            translucent: true
        };
        this.seresVivos = [];
        this.Climas = [];
        this.cambioClimatico = [];
        this.humanoSociedad = [];
        this.materia = [];
        this.sectorPrimario = [];
        this.Ecosistemas = [];
        this.language = "spanish";
    }
    ngOnInit() {
        this.students = ['Menganito Pérez', 'Olaia Sanz', 'Patricia Gonzalez', 'Ana García', 'María de las Cuevas', 'Pedro González'];
        //Only converts to false once a teacher choose a classroom
        this.disabled = "true";
        //Classes managed by the teacher. This is going to be received from the back-end
        this.clases = ['4ºA', '4ºB', '4ºC'];
        this.clase = "Elige la clase";
        //Ejercicios a través del servicio.
        this.seresVivos = this.ejerciosService.getEjercicios('vegetacion');
        //Ejercicios a través del servicio.
        this.Climas = this.ejerciosService.getEjercicios('climas');
        //Ejercicios a través del servicio.
        this.cambioClimatico = this.ejerciosService.getEjercicios('cambio-climatico');
        //Ejercicios a través del servicio.
        this.humanoSociedad = this.ejerciosService.getEjercicios('hum-soc');
        //Ejercicios a través del servicio.
        this.materia = this.ejerciosService.getEjercicios('materia');
        //Ejercicios a través del servicio.
        this.sectorPrimario = this.ejerciosService.getEjercicios('primario');
        //Ejercicios a través del servicio.
        this.Ecosistemas = this.ejerciosService.getEjercicios('ecosistemas');
    }
    change(titulo, able) {
        //Just to prove if it works, after is going to be send to the back-end
        console.log("Idioma: ", this.language, titulo, able, " Clase: ", this.clase);
    }
    showStatement(enunciado, pill, eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _calendar_statement_statement_component__WEBPACK_IMPORTED_MODULE_6__["StatementComponent"],
                cssClass: 'teacherPopOver',
                event: eve,
                translucent: true
            });
            localStorage.setItem('statementToShow', enunciado);
            localStorage.setItem('pillsToShow', pill);
            return yield popover.present();
        });
    }
    class(clase) {
        this.disabled = "false";
        this.clase = clase;
        console.log(clase);
    }
};
ClassRoomPage.ctorParameters = () => [
    { type: src_app_members_student_Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ClassRoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-class-room',
        template: _raw_loader_class_room_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_class_room_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClassRoomPage);



/***/ }),

/***/ "edVn":
/*!***********************************************************************!*\
  !*** ./src/app/members/teacher/Pages/class-room/class-room.module.ts ***!
  \***********************************************************************/
/*! exports provided: ClassRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoomPageModule", function() { return ClassRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _class_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-room-routing.module */ "ek8M");
/* harmony import */ var _class_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-room.page */ "cEto");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");








let ClassRoomPageModule = class ClassRoomPageModule {
};
ClassRoomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _class_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassRoomPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_class_room_page__WEBPACK_IMPORTED_MODULE_6__["ClassRoomPage"]]
    })
], ClassRoomPageModule);



/***/ }),

/***/ "ek8M":
/*!*******************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/class-room/class-room-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ClassRoomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoomPageRoutingModule", function() { return ClassRoomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _class_room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-room.page */ "cEto");




const routes = [
    {
        path: '',
        component: _class_room_page__WEBPACK_IMPORTED_MODULE_3__["ClassRoomPage"]
    }
];
let ClassRoomPageRoutingModule = class ClassRoomPageRoutingModule {
};
ClassRoomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClassRoomPageRoutingModule);



/***/ }),

/***/ "g15n":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/statement/statement.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementComponent", function() { return StatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_statement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statement.component.html */ "zqyS");
/* harmony import */ var _statement_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement.component.scss */ "nDLF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StatementComponent = class StatementComponent {
    constructor() { }
    ngOnInit() {
        this.statement = localStorage.getItem('statementToShow');
        this.pill = localStorage.getItem('pillsToShow');
    }
};
StatementComponent.ctorParameters = () => [];
StatementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-statement',
        template: _raw_loader_statement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_statement_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatementComponent);



/***/ }),

/***/ "nDLF":
/*!***********************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/statement/statement.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#statement {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0YXRlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YXRlbWVudHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "zqyS":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/calendar/statement/statement.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content id=\"statement\">\n    <ion-label><h2>ENUNCIADO</h2></ion-label>\n    {{statement}}\n  <ion-label><h2>PÍLDORA INFORMATIVA</h2></ion-label>\n    {{pill}}\n  </ion-card-content>\n</ion-card>\n  \n\n");

/***/ })

}]);
//# sourceMappingURL=Pages-class-room-class-room-module.js.map