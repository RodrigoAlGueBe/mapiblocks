(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuelalvarez/Desktop/Ynsat 2/Ynsat/src/main.ts */"zUnb");


/***/ }),

/***/ "0kjV":
/*!*****************************************************!*\
  !*** ./src/app/auth/registro/registro.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.component.html */ "jjF/");
/* harmony import */ var _registro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.component.scss */ "qjKq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "qiJ2");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








const TOKEN_KEY = 'auth-token';
let RegisterComponent = class RegisterComponent {
    constructor(userService, plt, storage) {
        this.userService = userService;
        this.plt = plt;
        this.storage = storage;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('undefined');
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    ngOnInit() {
        this.input = {
            username: '',
            password: '',
            email: ''
        };
    }
    registerUser() {
        this.userService.registerTeacher(this.input).subscribe(response => {
            console.log(response);
            alert('User ' + this.input.username + ' has been created!');
        }, error => { console.log(this.input, 'error', error); });
    }
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield (this.userService.loginUser(this.input))).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                (yield this.storage.create()).set(TOKEN_KEY, '12345').then(() => {
                    this.authenticationState.next(true);
                    this.userType.next("alumno");
                });
                console.log(response, this.storage, this.userType);
                alert('User ' + this.input.username + ' logged!');
            }), error => { console.log('error', error); });
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    checkToken() {
        return this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "1x0f":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Popups/enunciado/enunciado.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n    <ion-card-header >\n      <ion-card-subtitle style=\"color: black;\">{{ejercicio.subtitle}}</ion-card-subtitle>\n      <ion-card-title style=\"color: black;\">{{ejercicio.title}}</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content style=\"color: black;\">\n      {{ejercicio.statement}}\n      <br>\n\n      <img *ngIf=\"province\" src= \"/assets/SpaceEnergy/provinceEnergy.svg\"/>\n      <img *ngIf=\"region\" src= \"/assets/SpaceEnergy/regionEnergy.svg\"/>\n      <img *ngIf=\"country\" src= \"/assets/SpaceEnergy/countryEnergy.svg\"/>\n      <img *ngIf=\"world\" src= \"/assets/SpaceEnergy/worldEnergy.svg\"/>\n     \n    </ion-card-content>\n   <ion-item id=\"opciones\" *ngFor= \"let option of options\" (click)=\"presentPill(option)\" (click)=\"hideEnunciado(option)\" [disabled]=\"option.disabled\">\n    <ion-icon name=\"planet-outline\" slot=\"start\"></ion-icon>\n    {{option.value}}\n    <ion-checkbox  [color]=\"option.color\" [disabled]=\"option.disabled\" fill=\"outline\" slot=\"end\">View</ion-checkbox>\n  </ion-item>\n  <ion-card-content>\n    <ion-img [src]= \"ejercicio.imageURL\"></ion-img>\n  </ion-card-content>\n</ion-card>\n  \n  \n\n");

/***/ }),

/***/ "3dwy":
/*!**************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/enunciado/enunciado.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#opciones {\n  text-align: justify;\n}\n\nimg {\n  width: 80%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2VudW5jaWFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImVudW5jaWFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcGNpb25lc3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OjcwcHg7XG59Il19 */");

/***/ }),

/***/ "45Mm":
/*!******************************************************************************!*\
  !*** ./src/app/members/student/Pages/vegetacion/workspace/workspace.page.ts ***!
  \******************************************************************************/
/*! exports provided: WorkspacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacePage", function() { return WorkspacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workspace_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workspace.page.html */ "9YHK");
/* harmony import */ var _workspace_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspace.page.scss */ "7VHJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Others/Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Others/Map/Popups/enunciado/enunciado.component */ "Rtyi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Others/Map/Popups/help/help.component */ "bVOA");
/* harmony import */ var _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Others/Map/Popups/hints/hints.component */ "T93U");










let WorkspacePage = class WorkspacePage {
    constructor(router, ejerciosService, popoverController) {
        this.router = router;
        this.ejerciosService = ejerciosService;
        this.popoverController = popoverController;
        this.hintsClick = 0;
        this.singleBlockly = false;
        this.dualBlockly = false;
    }
    ngOnInit() {
        const hola = this.router.url;
        this.ejercicio = this.ejerciosService.getEjercicio(hola);
        //Store the actual exercise 
        var exerciseDoing = this.ejercicio.subtitle;
        localStorage.setItem('exerciseDoing', exerciseDoing);
        //Known if the exercise is comparative or not.
        var double = this.ejercicio.comp;
        console.log(double);
        if (double == true) {
            this.dualBlockly = true;
            this.singleBlockly = false;
        }
        else if (double == false) {
            this.singleBlockly = true;
            this.dualBlockly = false;
        }
        //Only needed for the DEMO exercise
        //this.hola=this.presentinitHelp()
        this.bombilla = "bulb-outline";
    }
    //Delete the option of answer and the lists of places once you go out of an exercise.
    killAllowAnswer() {
        localStorage.removeItem('allowAnswer');
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listProv');
        localStorage.removeItem('listLatinProv');
        localStorage.removeItem('listRegDual');
        localStorage.removeItem('listLatinRegDual');
        localStorage.removeItem('listProvDual');
        localStorage.removeItem('listLatinProvDual');
        localStorage.removeItem('listRegTeacher');
        localStorage.removeItem('listLatinRegTeacher');
    }
    presentEnunciado(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_6__["EnunciadoComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            return yield popover.present();
        });
    }
    presentHints(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_9__["HintsComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            this.bombilla = "bulb";
            this.hintsClick++;
            var clickString = String(this.hintsClick);
            localStorage.setItem('hintsClick', clickString);
            console.log(clickString);
            return yield popover.present(), this.bombilla;
        });
    }
    presentHelp(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            return yield popover.present();
        });
    }
    presentinitHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
                componentProps: {},
                cssClass: 'popOverInit',
                translucent: true
            });
            return yield popover.present();
        });
    }
};
WorkspacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_5__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
WorkspacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-workspace',
        template: _raw_loader_workspace_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workspace_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkspacePage);



/***/ }),

/***/ "5Q6N":
/*!****************************************************************!*\
  !*** ./src/app/members/student/Others/Services/map.service.ts ***!
  \****************************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapService = class MapService {
    constructor(http) {
        this.http = http;
        this.api = "https://khalil-app-306611.ew.r.appspot.com/KhalilApp";
    }
    static getMap(code) {
        throw new Error('Method not implemented.');
    }
    getMap(code) {
        const path = `${this.api}/mapaDrawMock?code_query=${code}`;
        return this.http.get(path, { responseType: 'text' });
    }
    getMapI(code, fuel, lat, long, popup, tooltip, lat1, long1, popup1, tooltip1, lat2, long2, popup2, tooltip2, lat3, long3, popup3, tooltip3) {
        const path = `${this.api}/mapaDrawMock?code_query=${code}${fuel}${lat}${long}${popup}${tooltip}${lat1}${long1}${popup1}${tooltip1}${lat2}${long2}${popup2}${tooltip2}${lat3}${long3}${popup3}${tooltip3}`;
        return this.http.get(path, { responseType: 'text' });
    }
    //TODO *Pruebas de seguridad
    getMapII(token, code, fuel, lat, long, popup, tooltip, lat1, long1, popup1, tooltip1, lat2, long2, popup2, tooltip2, lat3, long3, popup3, tooltip3) {
        const path = `${this.api}/mapaDrawMock?code_query=${token}${code}${fuel}${lat}${long}${popup}${tooltip}${lat1}${long1}${popup1}${tooltip1}${lat2}${long2}${popup2}${tooltip2}${lat3}${long3}${popup3}${tooltip3}`;
        return this.http.get(path, { responseType: 'text' });
    }
    getRegion(code) {
        const path = `${this.api}/block_region_names?code_query=${code}`;
        return this.http.get(path, { responseType: 'text' });
    }
    getLatinRegion(code) {
        const path = `${this.api}/block_region_names_latin?code_query=${code}`;
        return this.http.get(path, { responseType: 'text' });
    }
    getProvince(code) {
        const path = `${this.api}/block_province_names?code_query=${code}`;
        return this.http.get(path, { responseType: 'text' });
    }
    getLatinProvince(code) {
        const path = `${this.api}/block_province_names_latin?code_query=${code}`;
        return this.http.get(path, { responseType: 'text' });
    }
    //TODO: Change this ASAP
    start_report(token, exercise_id) {
        const path = `${this.api}/start_exercise?code_query=token=${token},exercise_id=${exercise_id},`;
        return this.http.get(path, { responseType: 'text' });
    }
    send_report(token, exercise_id, fails, n_play_clics, exercise_finished, n_clue, time_counter) {
        const path = `${this.api}/end_exercise?code_query=token=${token},exercise_id=${exercise_id},fails=${fails},n_play_clics=${n_play_clics},exercise_finished=${exercise_finished},n_clue=${n_clue},time_counter=${time_counter},`;
        return this.http.get(path, { responseType: 'text' });
    }
};
MapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MapService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MapService);



/***/ }),

/***/ "6qpn":
/*!********************************************************************!*\
  !*** ./src/app/members/student/Others/Services/counter.service.ts ***!
  \********************************************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CounterService = class CounterService {
    setCounter() {
        var counter = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.time = counter.subscribe((n) => {
            this.tiempo = n;
            //console.log(this.tiempo);
        });
        return this.time, this.tiempo;
    }
};
CounterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CounterService);



/***/ }),

/***/ "7VHJ":
/*!********************************************************************************!*\
  !*** ./src/app/members/student/Pages/vegetacion/workspace/workspace.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-toolbar #statement {\n  position: absolute;\n  left: 8.22%;\n  right: 88.88%;\n  height: 60px;\n}\nion-toolbar #statement:hover {\n  position: absolute;\n  left: 8%;\n  right: 88.66%;\n  height: 70px;\n}\nion-toolbar #idea {\n  position: absolute;\n  left: 14.22%;\n  right: 82.88%;\n  height: 60px;\n}\nion-toolbar #idea:hover {\n  position: absolute;\n  left: 14%;\n  right: 82.66%;\n  height: 70px;\n}\nion-toolbar #telescopio {\n  position: absolute;\n  left: 94.65%;\n  right: 2.22%;\n  height: 60px;\n}\nion-toolbar #telescopio:hover {\n  position: absolute;\n  left: 94%;\n  right: 2%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dvcmtzcGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoid29ya3NwYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIGhlaWdodDogNjBweDtcbiAgICAjQmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyLjIyJTtcbiAgICAgICAgcmlnaHQ6IDk0LjY1JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjQmFjazpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgcmlnaHQ6IDk0JTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyAgIFxuICAgIH1cbiAgICAjc3RhdGVtZW50e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDguMjIlO1xuICAgICAgICByaWdodDogODguODglO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7ICAgXG4gICAgfVxuICAgICNzdGF0ZW1lbnQ6aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOCU7XG4gICAgICAgIHJpZ2h0OiA4OC42NiU7XG4gICAgICAgIGhlaWdodDogNzBweDsgXG4gICAgfVxuICAgICNpZGVhe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE0LjIyJTtcbiAgICAgICAgcmlnaHQ6IDgyLjg4JTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICAgIH1cbiAgICAjaWRlYTpob3ZlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNCU7XG4gICAgICAgIHJpZ2h0OiA4Mi42NiU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgI3RlbGVzY29waW97XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTQuNjUlO1xuICAgICAgICByaWdodDogMi4yMiU7XG4gICAgICAgIGhlaWdodDogNjBweDsgICBcbiAgICB9XG4gICAgI3RlbGVzY29waW86aG92ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTQlO1xuICAgICAgICByaWdodDogMiU7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "9YHK":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Pages/vegetacion/workspace/workspace.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar text-center>\n    \n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/alumno/vegetacion']\" (click)=\"killAllowAnswer()\">\n      <ion-button>\n        <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons> \n\n    <ion-buttons slot=\"start\" id=\"statement\"(click)=\"presentEnunciado($event)\" >\n      <ion-button>\n        <img src=\"/assets/buttons/statement.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" id=\"idea\" (click)=\"presentHints($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/idea.png\">\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{ejercicio.title}}</ion-title>\n\n    <ion-buttons slot=\"end\" id=\"telescopio\" (click)=\"presentHelp($event)\">\n      <ion-button>\n        <img src=\"/assets/buttons/telescopio.png\">\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <app-blockly *ngIf=\"singleBlockly\"></app-blockly>\n    <app-dual-blockly *ngIf=\"dualBlockly\"></app-dual-blockly>\n</ion-content>\n\n\n\n\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CSlJ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Popups/hints/hints.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content>\n    <ion-item (click)=\"moreHints()\">\n      <ion-button>\n        <ion-label>\n          Más pistas\n        </ion-label>\n      </ion-button>\n      {{hint}}\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "Dalm":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Popups/enunciado/pill/pill.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content id=\"pill\">\n    <h2>{{ejercicio.pills}}</h2>\n    <iframe [src]=\"web\" frameborder=\"0\" allowfullscreen id=\"web\"></iframe>\n    <ion-button expand=\"block\" fill=\"clear\" string=\"true\" id=\"Button\" (click)=\"getOut()\" (click)=\"hidePill()\">Acabar ejercicio</ion-button>\n  </ion-card-content>\n</ion-card> \n");

/***/ }),

/***/ "HEJf":
/*!******************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/hints/hints.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hints {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2hpbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJoaW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoaW50c3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "HsLl":
/*!*****************************************!*\
  !*** ./src/app/users API/model/user.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Log and info of the users
 * How to create, log and manage users
 *
 * OpenAPI spec version: 0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/***/ }),

/***/ "LEmc":
/*!********************************************!*\
  !*** ./src/app/users API/configuration.ts ***!
  \********************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "LVOj":
/*!*****************************************!*\
  !*** ./src/app/users API/api.module.ts ***!
  \*****************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "LEmc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/login.service */ "mB+x");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/user.service */ "VTWD");
var ApiModule_1;






let ApiModule = ApiModule_1 = class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"], useFactory: configurationFactory }]
        };
    }
};
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ApiModule = ApiModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [],
        exports: [],
        providers: [
            _api_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        ]
    })
], ApiModule);



/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "ej43");



let AuthGuardService = class AuthGuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canLoad() {
        return this.authService.isAuthenticated();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "OmiA":
/*!************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/blockly/blockly.component.ts ***!
  \************************************************************************************/
/*! exports provided: BlocklyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocklyComponent", function() { return BlocklyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blockly_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blockly.component.html */ "itmP");
/* harmony import */ var _blockly_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockly.component.scss */ "kWxf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockly/core */ "t/1s");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_members_student_Others_Map_Components_blockly_blockeado_s_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/student/Others/Map/Components/blockly/blockeado-s.js */ "nORd");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/blockly/blockly_compressed.js */ "6Y8/");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _Services_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/map.service */ "5Q6N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");
/* harmony import */ var _Services_counter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/counter.service */ "6qpn");














let BlocklyComponent = class BlocklyComponent {
    constructor(counter, router, sanitizer, mapService, ejerciosService, loading) {
        this.counter = counter;
        this.router = router;
        this.sanitizer = sanitizer;
        this.mapService = mapService;
        this.ejerciosService = ejerciosService;
        this.loading = loading;
        this.GEE = "PCFET0NUWVBFIGh0bWw+Cgo8aGVhZD4KPG1ldGEgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04IiBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiLz4KPHNjcmlwdD5MX1BSRUZFUl9DQU5WQVM9ZmFsc2U7IExfTk9fVE9VQ0g9ZmFsc2U7IExfRElTQUJMRV8zRD1mYWxzZTs8L3NjcmlwdD4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5qcyI+PC9zY3JpcHQ+CjxsaW5rIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvTGVhZmxldC5hd2Vzb21lLW1hcmtlcnMvMi4wLjIvbGVhZmxldC5hd2Vzb21lLW1hcmtlcnMuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vcHl0aG9uLXZpc3VhbGl6YXRpb24vZm9saXVtL21hc3Rlci9mb2xpdW0vdGVtcGxhdGVzL2xlYWZsZXQuYXdlc29tZS5yb3RhdGUuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPHN0eWxlPmh0bWwsIGJvZHkge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTttYXJnaW46IDA7cGFkZGluZzogMDt9PC9zdHlsZT4KPHN0eWxlPiNtYXAge3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO308L3N0eWxlPgo8bWV0YSBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsCiAgICAgICAgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vIiBuYW1lPSJ2aWV3cG9ydCIvPgo8c3R5bGU+I21hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCB7CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIHdpZHRoOiAxMDAuMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAuMCU7CiAgICAgICAgbGVmdDogMC4wJTsKICAgICAgICB0b3A6IDAuMCU7CiAgICAgICAgfQogICAgPC9zdHlsZT4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQuZnVsbHNjcmVlbi8xLjQuMi9Db250cm9sLkZ1bGxTY3JlZW4ubWluLmpzIj48L3NjcmlwdD4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC5mdWxsc2NyZWVuLzEuNC4yL0NvbnRyb2wuRnVsbFNjcmVlbi5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPC9oZWFkPgo8Ym9keT4KPGRpdiBjbGFzcz0iZm9saXVtLW1hcCIgaWQ9Im1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCI+PC9kaXY+CjwvYm9keT4KPHNjcmlwdD4gICAgCiAgICAKICAgIAogICAgICAgIHZhciBib3VuZHMgPSBudWxsOwogICAgCgogICAgdmFyIG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCA9IEwubWFwKAogICAgICAgICdtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQnLCB7CiAgICAgICAgY2VudGVyOiBbNDAuMTkyODAyODMyNDg5ODMsIC0zLjcwMjE0Mzc3MDA1MDcwMl0sCiAgICAgICAgem9vbTogNiwKICAgICAgICBtYXhCb3VuZHM6IGJvdW5kcywKICAgICAgICBsYXllcnM6IFtdLAogICAgICAgIHdvcmxkQ29weUp1bXA6IGZhbHNlLAogICAgICAgIGNyczogTC5DUlMuRVBTRzM4NTcsCiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsCiAgICAgICAgfSk7CkwuY29udHJvbC5zY2FsZSgpLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CgogICAgCiAgICB2YXIgdGlsZV9sYXllcl8zZmJkZWJmYzU5YmY0NmNjYTg5NjgwYmQzN2Q1Y2U1ZiA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6IG51bGwsCiAgICAgICAgImRldGVjdFJldGluYSI6IGZhbHNlLAogICAgICAgICJtYXhOYXRpdmVab29tIjogMTgsCiAgICAgICAgIm1heFpvb20iOiAxOCwKICAgICAgICAibWluWm9vbSI6IDAsCiAgICAgICAgIm5vV3JhcCI6IGZhbHNlLAogICAgICAgICJvcGFjaXR5IjogMSwKICAgICAgICAic3ViZG9tYWlucyI6ICJhYmMiLAogICAgICAgICJ0bXMiOiBmYWxzZQp9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgdmFyIHRpbGVfbGF5ZXJfNjcyOTcwZjU1OWZkNDcyZDk1OTBhNjk5MzdlMzI4YzggPSBMLnRpbGVMYXllcigKICAgICAgICAnaHR0cHM6Ly9tdDEuZ29vZ2xlLmNvbS92dC9seXJzPW0meD17eH0meT17eX0mej17en0nLAogICAgICAgIHsKICAgICAgICAiYXR0cmlidXRpb24iOiAiR29vZ2xlIiwKICAgICAgICAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsCiAgICAgICAgIm1heE5hdGl2ZVpvb20iOiAxOCwKICAgICAgICAibWF4Wm9vbSI6IDE4LAogICAgICAgICJtaW5ab29tIjogMCwKICAgICAgICAibm9XcmFwIjogZmFsc2UsCiAgICAgICAgIm9wYWNpdHkiOiAxLAogICAgICAgICJzdWJkb21haW5zIjogImFiYyIsCiAgICAgICAgInRtcyI6IGZhbHNlCn0pLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CiAgICB2YXIgdGlsZV9sYXllcl8wNDFlMDI2NzM2YmY0MjE1YTg5NjRiYWNhZWY0OGQ3MCA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL210MS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6ICJHb29nbGUiLAogICAgICAgICJkZXRlY3RSZXRpbmEiOiBmYWxzZSwKICAgICAgICAibWF4TmF0aXZlWm9vbSI6IDE4LAogICAgICAgICJtYXhab29tIjogMTgsCiAgICAgICAgIm1pblpvb20iOiAwLAogICAgICAgICJub1dyYXAiOiBmYWxzZSwKICAgICAgICAib3BhY2l0eSI6IDEsCiAgICAgICAgInN1YmRvbWFpbnMiOiAiYWJjIiwKICAgICAgICAidG1zIjogZmFsc2UKfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgIAogICAgICAgICAgICBMLmNvbnRyb2wuZnVsbHNjcmVlbih7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcGxlZnQnLAogICAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIFNjcmVlbicsCiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0V4aXQgRnVsbCBTY3JlZW4nLAogICAgICAgICAgICAgICAgZm9yY2VTZXBhcmF0ZUJ1dHRvbjogZmFsc2UsCiAgICAgICAgICAgICAgICB9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgICAgICAgICBtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQub24oJ2VudGVyRnVsbHNjcmVlbicsIGZ1bmN0aW9uKCl7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBmdWxsc2NyZWVuJyk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAKICAgIAogICAgICAgICAgICB2YXIgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1NyA9IHsKICAgICAgICAgICAgICAgIGJhc2VfbGF5ZXJzIDogeyAib3BlbnN0cmVldG1hcCIgOiB0aWxlX2xheWVyXzNmYmRlYmZjNTliZjQ2Y2NhODk2ODBiZDM3ZDVjZTVmLCB9LAogICAgICAgICAgICAgICAgb3ZlcmxheXMgOiB7ICJHb29nbGUgTWFwcyIgOiB0aWxlX2xheWVyXzY3Mjk3MGY1NTlmZDQ3MmQ5NTkwYTY5OTM3ZTMyOGM4LCJHb29nbGUgU2F0ZWxsaXRlIiA6IHRpbGVfbGF5ZXJfMDQxZTAyNjczNmJmNDIxNWE4OTY0YmFjYWVmNDhkNzAsIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgIEwuY29udHJvbC5sYXllcnMoCiAgICAgICAgICAgICAgICBsYXllcl9jb250cm9sXzYzZDllNDhhYTNlMDQyMDg4ZmViODZjMjM2ZmE4ODU3LmJhc2VfbGF5ZXJzLAogICAgICAgICAgICAgICAgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1Ny5vdmVybGF5cywKICAgICAgICAgICAgICAgIHtwb3NpdGlvbjogJ3RvcHJpZ2h0JywKICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgYXV0b1pJbmRleDogdHJ1ZQogICAgICAgICAgICAgICAgfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgICAgICAgICAgCiAgICAgICAgCjwvc2NyaXB0Pg==";
        //Times a student click play button
        this.countPlays = 0;
    }
    ngOnInit() {
        const exercise = this.router.url;
        this.ejercicio = this.ejerciosService.getEjercicio(exercise);
        var id = this.ejercicio.id;
        var token = localStorage.getItem('userStudent');
        localStorage.setItem('idExercise', id);
        var realId = localStorage.getItem('idExercise');
        console.log(realId);
        this.mapService.start_report(token, realId).subscribe(hola => {
            console.log(hola);
        });
        //Delete previous data
        localStorage.removeItem('fails');
        localStorage.removeItem('numberOfPlays');
        localStorage.removeItem('counterTime');
        localStorage.removeItem('numberHints');
        var fails = "0";
        localStorage.setItem('fails', fails);
        var numberHints = '0';
        localStorage.setItem('numberHints', numberHints);
        this.counter.setCounter();
        this.primaryWorkspace = blockly_core__WEBPACK_IMPORTED_MODULE_4__["inject"]('primaryDiv', {
            readOnly: false,
            move: {
                scrollbars: false,
            },
            //zoom:{
            //controls: true,
            //wheel: true,
            //startScale: 1.0,
            //maxScale: 3,
            //minScale: 0.3,
            //scaleSpeed: 1.2,
            //pinch: true
            //},
            collapse: true,
            renderer: 'thrasos',
            comments: true,
            disable: true,
            maxBlocks: 10,
            trashcan: true,
            horizontalLayout: false,
            toolboxPosition: 'start',
            scss: true,
            media: 'https://unpkg.com/blockly/media/',
            rtl: false,
            sounds: true,
            oneBasedIndex: true,
            toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Lugares" colour="#5ba58c">
    <category name="Territorios" colour="#5ba58c">
      <block type="buscar_pais">
        <field name="input1">Escribe el país</field>
        <field name="INPUT">paises</field>
      </block>
      <block type="buscar_regiones">
        <field name="input1">Escribe la región</field>
        <field name="INPUT">regiones</field>
      </block>
      <block type="buscar_provincia">
        <field name="input1">Escribe la provincia</field>
        <field name="INPUT">provincias</field>
      </block>
    </category>
    <category name="Mares y océanos " colour="#F6EFA6">
      <block type="buscar_oceano">
        <field name="input1">Regiones grandes</field>
        <field name="INPUT">agua</field>
      </block>
      <block type="buscar_seas">
        <field name="input1">Regiones pequeñas</field>
        <field name="INPUT">agua</field>
      </block>
    </category>
  </category>
  <category name="Vegetación" colour="#0DF013">
    <block type="layer_tree">
    <field name="TREE">Árboles</field>
    </block>
    <block type="layer_ndvi">
    <field name="NDVI">Cantidad de vegetación</field>
    </block>
    <block type="layer_fires">
    <field name="FIRES">incendios</field>
    </block>
    <block type="layer_tree_loss">
    <field name="TREE_LOSS">Pérdida de árboles</field>
    </block>
    <block type="layer_gcvi">
    <field name="GCVI">Salud de Vegetación</field>
    </block>
  </category>
  <category name="Suelo" colour="#D25F00">
    <block type="layer_ndmi">
    <field name="NDMI">Humedad del suelo</field>
    </block>
    <block type="layer_alt">
    <field name="ALT">Relieve</field>
    </block>
    <block type="layer_cover">
    <field name="COVER">Tipo de suelo</field>
    </block>
    <block type="layer_landforms">
    <field name="LANDFORMS">Tipos de relieve</field>
    </block>
  </category>
  <category name="Atmósfera" colour="#ACF5E3">
    <block type="layer_tot_prep">
    <field name="TOT_PREP">Lluvias</field>
    </block>
    <block type="layer_cloud">
    <field name="CLOUD">Nubes</field>
    </block>
    <block type="layer_surf_press">
    <field name="SURF_PRESS">Presión atmosférica</field>
    </block>
    <block type="layer_dewp_temp">
    <field name="DEWP_TEMP">Temperatura de formación de niebla</field>
    </block>
    <block type="layer_air_temp">
    <field name="AIR_TEMP">Temperatura del aire</field>
    </block>
    <block type="layer_10m_wind">
    <field name="10M_WIND">Viento</field>
    </block>
  </category>
  <category name="Agua" colour="#00A6FB">
    <block type="layer_ndwi">
    <field name="NDWI">Lagos</field>
    </block>
    <block type="layer_sea_press">
    <field name="SEA_PRESS">Presión a nivel del mar</field>
    </block>
    <block type="layer_sea_temp">
    <field name="SEA_TEMP">Temperatura del agua</field>
    </block>
    <block type="layer_river">
    <field name="RIVER">Ríos</field>
    </block>
  </category>
  <category name="Gases" colour="#FFF671">
    <block type="layer_aer_ai">
    <field name="AER_AI">Aerosoles</field>
    </block>
    <block type="layer_so2">
    <field name="SO2">Dióxido de azufre</field>
    </block>
    <block type="layer_no2">
    <field name="NO2">Dióxido de nitrógeno</field>
    </block>
    <block type="layer_hcho">
    <field name="HCHO">Metanal</field>
    </block>
    <block type="layer_ch4">
    <field name="CH4">Metano</field>
    </block>
    <block type="layer_co">
    <field name="CO">Monóxido de carbono</field>
    </block>
    <block type="layer_o3">
    <field name="O3">Ozono</field>
    </block>
  </category>
  <category name="Civilización" colour="#B5B5B5">
    <block type="layer_den">
    <field name="DEN">Densidad de población</field>
    </block>
    <block type="layer_light">
    <field name="LIGHT">Luces nocturnas</field>
    </block>
    <block type="layer_human">
    <field name="HUMAN">Modificado por el humano</field>
    </block>
  </category>
  <sep></sep>
  <category name="Especiales" colour="#FF7AE2">
    <block type="transparency_level">
    <field name="transparency"></field>
    </block>
    </category>
</xml>
      `
        });
        //Creates de src that has to be in the iframe. What I need to do is to update this safeResourceUrl.
        this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        //When the workspace notices a change, take a list of the FAO GAUL.
        //Add the change listener to load the regions and provinces
        this.primaryWorkspace.addChangeListener((primaryEvent) => {
            //TODO:It works for now, however we need to imporve the way we call to the back end each time the code changes.
            if (blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CHANGE === primaryEvent.type || blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CREATE === primaryEvent.type) {
                //Look for the code in the wotkspace
                var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].workspaceToCode(this.primaryWorkspace);
                //split it to differenciate from country, region and province
                var split_code = code.split(',');
                //create three differents variables with each option
                var code_country = split_code[0] + ',';
                var code_region = split_code[1] + ',';
                var code_province = split_code[2] + ',';
                //Due to a stragne split creation. The last code to add is the first, we need to check wether if the codes are the one we want.
                var regionTrue = code_region.startsWith("region=");
                var countryTrue = code_country.startsWith("country=");
                //when code_country references to a region.
                var falseCountry = code_country.startsWith("region=");
                //console.log evertything. Onces we fixed the problem it was commented
                //console.log('country: '+code_country)
                //console.log(falseCountry)
                //console.log('region: '+code_region)
                //console.log(regionTrue)
                //console.log('province: '+code_province)
                //If country_code is a country, use it for the regions.
                if (countryTrue == true) {
                    //Delete the previous lists before the new call
                    localStorage.removeItem('listReg');
                    localStorage.removeItem('listLatinReg');
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        localStorage.setItem('listReg', listReg);
                        console.log("Regiones-->", listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        localStorage.setItem('listLatinReg', listLatinReg);
                        console.log("Regiones Latín-->", listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    localStorage.removeItem('listProv');
                    localStorage.removeItem('listLatinProv');
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        localStorage.setItem('listProv', listProv);
                        console.log("Provincias-->", listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        localStorage.setItem('listLatinProv', listLatinProv);
                        console.log("Provincias Latín-->", listLatinProv);
                    });
                }
                //The last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProv', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProv', listLatinProv);
                    });
                }
            }
        });
        //Disable the blocks that are not joined with the main block
        this.primaryWorkspace.addChangeListener(blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].disableOrphans);
    }
    stepCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Run the map-loading function until it takes the map.
            this.loading.mapLoading();
            //Extract the code from the main blocks in the workspace by creating a root Block and asigning it the rest.
            var rootBlock = null;
            //Select the blocks that are in the top without sorting them.
            var blocks = this.primaryWorkspace.getTopBlocks(false);
            for (var i = 0, block; block = blocks[i]; i++) {
                //Select which ones are going to be those main blocks
                if (block.type == 'buscar_pais' || block.type == 'buscar_oceano' || block.type == 'buscar_seas') {
                    rootBlock = block;
                }
            }
            //Take the code from the rootBlocks. The ones that are connected.
            var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].blockToCode(rootBlock);
            //Take the fuel from the exercise
            var rawFuel = this.ejercicio.energy;
            var fuel = `fuel=${String(rawFuel)},`;
            //Calls the server with all the necessary parameters in order
            this.mapService.getMapI(code, fuel, this.ejercicio.lat[0], this.ejercicio.long[0], this.ejercicio.popup[0], this.ejercicio.tooltip[0], this.ejercicio.lat[1], this.ejercicio.long[1], this.ejercicio.popup[1], this.ejercicio.tooltip[1], this.ejercicio.lat[2], this.ejercicio.long[2], this.ejercicio.popup[2], this.ejercicio.tooltip[2], this.ejercicio.lat[3], this.ejercicio.long[3], this.ejercicio.popup[3], this.ejercicio.tooltip[3])
                .subscribe(map => {
                //Log the whole string of the iframe.
                //console.log(map)
                //Create the map
                this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
                //Onces you press the play, if it works botton you´ll be able to answer the exercise.
                var allowAnswer = "true";
                //Store wheter if the kid can answer the question or not. This set it to yes.
                localStorage.setItem('allowAnswer', allowAnswer);
                //Log if the kid can answer.
                console.log(allowAnswer);
                //**Sum one for the play button.
                this.countPlays++;
                var plays = String(this.countPlays);
                localStorage.setItem('numberOfPlays', plays);
                console.log(plays);
            }, //I think underscore means that it´s availabe globally. It works fine.
            //I think underscore means that it´s availabe globally. It works fine.
            error => {
                console.log(error);
                setTimeout(() => {
                    //Finish map loading function
                    this.loading.dustyLoading.dismiss();
                    //Give an alert message 
                    alert('Parece que Dusty no ha encontrado lo que estabas buscando... Puede que el estudio que estés realizando no concuerde con la energía espacial del ejercicio.');
                    //Set finish time to 1 sec after the error has happend.
                }, 1000);
            });
        });
    }
};
BlocklyComponent.ctorParameters = () => [
    { type: _Services_counter_service__WEBPACK_IMPORTED_MODULE_13__["CounterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _Services_map_service__WEBPACK_IMPORTED_MODULE_9__["MapService"] },
    { type: _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_11__["EjerciciosService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] }
];
BlocklyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blockly',
        template: _raw_loader_blockly_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blockly_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlocklyComponent);



/***/ }),

/***/ "Rtyi":
/*!************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/enunciado/enunciado.component.ts ***!
  \************************************************************************************/
/*! exports provided: EnunciadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnunciadoComponent", function() { return EnunciadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enunciado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enunciado.component.html */ "1x0f");
/* harmony import */ var _enunciado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enunciado.component.scss */ "3dwy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Services_counter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/counter.service */ "6qpn");
/* harmony import */ var _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _pill_pill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pill/pill.component */ "aQ8d");
var EnunciadoComponent_1;









let EnunciadoComponent = EnunciadoComponent_1 = class EnunciadoComponent {
    constructor(counter, router, ejerciosService, popoverController) {
        this.counter = counter;
        this.router = router;
        this.ejerciosService = ejerciosService;
        this.popoverController = popoverController;
        this.fails = 0;
        this.province = false;
        this.region = false;
        this.country = false;
        this.world = false;
    }
    ngOnInit() {
        //Look the url and take the exercise JSON.
        const url_ex = this.router.url;
        console.log(url_ex);
        this.ejercicio = this.ejerciosService.getEjercicio(url_ex);
        //ID of the exercise doing.
        localStorage.setItem('idExercise', this.ejercicio.id);
        //Specify the energy of the space-ship
        this.spaceEnergy = this.ejercicio.energy;
        if (this.spaceEnergy == 1) {
            this.province = true;
        }
        else if (this.spaceEnergy == 2) {
            this.region = true;
        }
        else if (this.spaceEnergy == 3) {
            this.country = true;
        }
        else if (this.spaceEnergy == 4) {
            this.country = true;
        }
        //Create random array from 0 to 3.  
        for (var a = [], i = 0; i < 4; ++i)
            a[i] = i;
        function shuffle(array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        }
        a = shuffle(a);
        //New options stored in the localStorage.
        var allowAnswer = localStorage.getItem('allowAnswer');
        var boolAllow = JSON.parse(allowAnswer) === true; // true
        console.log(boolAllow);
        if (boolAllow == false) {
            this.options = [
                {
                    value: this.ejercicio.options[a[0]],
                    disabled: "true",
                    color: "success",
                },
                {
                    value: this.ejercicio.options[a[1]],
                    disabled: "true",
                    color: "success",
                },
                {
                    value: this.ejercicio.options[a[2]],
                    disabled: "true",
                    color: "success",
                },
                {
                    value: this.ejercicio.options[a[3]],
                    disabled: "true",
                    color: "success",
                },
            ];
        }
        else if (boolAllow == true) {
            this.options = [
                {
                    value: this.ejercicio.options[a[0]],
                    disabled: "false",
                    color: "success",
                    selected: false
                },
                {
                    value: this.ejercicio.options[a[1]],
                    disabled: "false",
                    color: "success",
                    selected: false
                },
                {
                    value: this.ejercicio.options[a[2]],
                    disabled: "false",
                    color: "success",
                    selected: false
                },
                {
                    value: this.ejercicio.options[a[3]],
                    disabled: "false",
                    color: "success",
                    selected: false
                },
            ];
        }
    }
    //Only present the pill component if the kid guesses the correct answer. 
    presentPill(option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Correct option always the first one in the CSV.
            if (option.value == this.ejercicio.options[0]) {
                //when the student answer the right question, stop counting the time.
                this.counter.time.unsubscribe();
                //convert the seconds to string
                var counterTime = String(this.counter.tiempo);
                //** Store it as counterTime */
                localStorage.setItem('counterTime', counterTime);
                console.log('segundos', counterTime);
                //Show that the value is correct
                //console.log(true)
                const pillPopover = yield this.popoverController.create({
                    component: _pill_pill_component__WEBPACK_IMPORTED_MODULE_8__["PillComponent"],
                    componentProps: {},
                    cssClass: 'popOverPill',
                    translucent: true
                });
                return yield pillPopover.present();
                //Incorrect option: red check, disable the option and add a fail.
            }
            else if (option.value !== this.ejercicio.options[0]) {
                alert('Vuelve a intentarlo de nuevo');
                option.disabled = "true";
                option.color = "danger";
                this.fails++;
            }
            //** Number of times the kid has selected an uncorrect option.
            var fails = String(this.fails++);
            localStorage.setItem('fails', fails);
            console.log(this.fails);
        });
    }
    //If the answer is right, close the statement.
    hideEnunciado(option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (option.value == this.ejercicio.options[0]) {
                const popover = yield this.popoverController.dismiss({
                    component: EnunciadoComponent_1
                });
                return yield popover;
            }
            else {
                return;
            }
        });
    }
};
EnunciadoComponent.ctorParameters = () => [
    { type: _Services_counter_service__WEBPACK_IMPORTED_MODULE_6__["CounterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
EnunciadoComponent = EnunciadoComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enunciado',
        template: _raw_loader_enunciado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enunciado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnunciadoComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");






let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.initializeApp();
    }
    //When the app initialize, protect the routes until there is a valid token. Then redirect to the 
    initializeApp() {
        this.authService.authenticationState.subscribe(state => {
            console.log('Auth changed:', state);
            if (state) {
                this.authService.userType.subscribe(type => {
                    console.log('UserType: ', type);
                    if (type == 'teacher') {
                        this.router.navigate(['teacher/teacher-account']);
                    }
                    else if (type == 'alumno') {
                        this.router.navigate(['students/student-home']);
                    }
                    else if (type == 'registerTeacher') {
                        this.router.navigate(['register']);
                    }
                    else if (type == 'registerStudent') {
                        this.router.navigate(['register/students']);
                    }
                    else if (type == 'family')
                        this.router.navigate(['members', 'family']);
                });
            }
            else {
                this.router.navigate(['home']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T93U":
/*!****************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/hints/hints.component.ts ***!
  \****************************************************************************/
/*! exports provided: HintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintsComponent", function() { return HintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hints_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hints.component.html */ "CSlJ");
/* harmony import */ var _hints_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hints.component.scss */ "HEJf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/ejercicios/ejercicios.service */ "m1hz");







let HintsComponent = class HintsComponent {
    constructor(router, ejerciosService, popoverController) {
        this.router = router;
        this.ejerciosService = ejerciosService;
        this.popoverController = popoverController;
        this.i = 1;
    }
    ngOnInit() {
        //Look the url and take the exercise JSON.
        const url_ex = this.router.url;
        this.ejercicio = this.ejerciosService.getEjercicio(url_ex);
        this.hint = this.ejercicio.hints[0];
        var numberHints = String(this.i);
        localStorage.setItem('numberHints', numberHints);
    }
    moreHints() {
        this.hint = this.ejercicio.hints[this.i];
        this.i++;
        var numberHints = String(this.i);
        localStorage.setItem('numberHints', numberHints);
    }
};
HintsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_6__["EjerciciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
HintsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hints',
        template: _raw_loader_hints_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hints_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HintsComponent);



/***/ }),

/***/ "TMMQ":
/*!*******************************************!*\
  !*** ./src/app/users API/model/models.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "HsLl");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "VTWD":
/*!***********************************************!*\
  !*** ./src/app/users API/api/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encoder */ "WBmY");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variables */ "ZxVS");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configuration */ "LEmc");
/**
 * Log and info of the users
 * How to create, log and manage users
 *
 * OpenAPI spec version: 0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */






let UserService = class UserService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://khalil-app-306611.ew.r.appspot.com/KhalilApp';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getProfileGet(codeQuery, observe = 'body', reportProgress = false) {
        if (codeQuery === null || codeQuery === undefined) {
            throw new Error('Required parameter codeQuery was null or undefined when calling getProfileGet.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (codeQuery !== undefined && codeQuery !== null) {
            queryParameters = queryParameters.set('code_query', codeQuery);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/get_profile`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getFollowersGet(codeQuery, observe = 'body', reportProgress = false) {
        if (codeQuery === null || codeQuery === undefined) {
            throw new Error('Required parameter codeQuery was null or undefined when calling getFollowersGet.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (codeQuery !== undefined && codeQuery !== null) {
            queryParameters = queryParameters.set('code_query', codeQuery);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/get_followers`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<ion-app>\n    <ion-router-outlet>\n    </ion-router-outlet>\n</ion-app>\n\n");

/***/ }),

/***/ "WBmY":
/*!**************************************!*\
  !*** ./src/app/users API/encoder.ts ***!
  \**************************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _members_student_Pages_vegetacion_workspace_workspace_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members/student/Pages/vegetacion/workspace/workspace.module */ "cRbE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _auth_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/registro/registro.component */ "0kjV");
/* harmony import */ var _users_API__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users API */ "dD96");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _members_student_Pages_vegetacion_workspace_workspace_module__WEBPACK_IMPORTED_MODULE_7__["WorkspacePageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _auth_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _users_API__WEBPACK_IMPORTED_MODULE_12__["LoginService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "ZxVS":
/*!****************************************!*\
  !*** ./src/app/users API/variables.ts ***!
  \****************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "aQ8d":
/*!************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/enunciado/pill/pill.component.ts ***!
  \************************************************************************************/
/*! exports provided: PillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillComponent", function() { return PillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pill_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pill.component.html */ "Dalm");
/* harmony import */ var _pill_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pill.component.scss */ "d5ln");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var _Services_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Services/map.service */ "5Q6N");
var PillComponent_1;









let PillComponent = PillComponent_1 = class PillComponent {
    constructor(router, ejerciosService, sanitizer, popoverController, mapService) {
        this.router = router;
        this.ejerciosService = ejerciosService;
        this.sanitizer = sanitizer;
        this.popoverController = popoverController;
        this.mapService = mapService;
        this.URL = "/alumno";
    }
    ngOnInit() {
        const hola = this.router.url;
        console.log(hola);
        this.ejercicio = this.ejerciosService.getEjercicio(hola);
        this.web = this.sanitizer.bypassSecurityTrustResourceUrl(this.ejercicio.web);
        //Tells that the exercise has been finished
        this.exDone = "Terminado";
        localStorage.setItem('exDone', this.exDone);
        //** Collect all the DATA */
        var token = localStorage.getItem('userStudent');
        var id = localStorage.getItem('idExercise');
        var fails = localStorage.getItem('fails');
        var plays = localStorage.getItem('numberOfPlays');
        var finished = localStorage.getItem('exDone');
        var clue = localStorage.getItem('numberHints');
        var time = localStorage.getItem('counterTime');
        //Send the report
        this.mapService.send_report(token, id, fails, plays, finished, clue, time).subscribe(map => {
            console.log(map);
        });
    }
    killAllowAnswer() {
        localStorage.removeItem('allowAnswer');
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listProv');
        localStorage.removeItem('listLatinProv');
    }
    hidePill() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pillPopover = yield this.popoverController.dismiss({ component: PillComponent_1 });
            return yield pillPopover;
        });
    }
    getOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigateByUrl('/students/student-home');
        });
    }
};
PillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__["EjerciciosService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _Services_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"] }
];
PillComponent = PillComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pill',
        template: _raw_loader_pill_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pill_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PillComponent);



/***/ }),

/***/ "aVn0":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Components/dual-blockly/dual-blockly.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <table width=\"100%\">\n    <tr>\n      <td>\n        <div id=\"primaryDiv\"></div>\n      </td>\n      <td>\n        <div id=\"secondaryDiv\"></div>\n      </td>\n      <td>\n        <iframe [src]=\"geeMap\" frameborder=\"0\" allowfullscreen id=\"gee_map\"></iframe>\n      </td>\n      <td>\n        <iframe [src]=\"geeMap2\" frameborder=\"0\" allowfullscreen id=\"gee_map2\"></iframe>\n      </td>\n    </tr>\n  </table>\n    <p id=\"stepButton\">\n     <ion-button (click)=\"stepCode()\" color=\"primary\">\n       <ion-icon name = \"play-outline\"></ion-icon>\n     </ion-button>\n    </p>\n    <p id=\"stepButton2\">\n      <ion-button (click)=\"stepCode2()\" color=\"primary\">\n        <ion-icon name = \"play-outline\"></ion-icon>\n      </ion-button>\n     </p>\n</ion-content>\n\n");

/***/ }),

/***/ "bVOA":
/*!**************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/help/help.component.ts ***!
  \**************************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_help_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help.component.html */ "lYCE");
/* harmony import */ var _help_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.component.scss */ "sgPn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() { }
};
HelpComponent.ctorParameters = () => [];
HelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-help',
        template: _raw_loader_help_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelpComponent);



/***/ }),

/***/ "cRbE":
/*!********************************************************************************!*\
  !*** ./src/app/members/student/Pages/vegetacion/workspace/workspace.module.ts ***!
  \********************************************************************************/
/*! exports provided: WorkspacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacePageModule", function() { return WorkspacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workspace-routing.module */ "ioah");
/* harmony import */ var _workspace_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workspace.page */ "45Mm");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");






//Module for the common components used in all the workspaces.

let WorkspacePageModule = class WorkspacePageModule {
};
WorkspacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _workspace_routing_module__WEBPACK_IMPORTED_MODULE_4__["WorkspacePageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        declarations: [_workspace_page__WEBPACK_IMPORTED_MODULE_5__["WorkspacePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: []
    })
], WorkspacePageModule);



/***/ }),

/***/ "cwBN":
/*!**************************************!*\
  !*** ./src/app/users API/api/api.ts ***!
  \**************************************/
/*! exports provided: LoginService, ReportService, UserService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ "mB+x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_0__["LoginService"]; });

/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.service */ "ovlT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return _report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "VTWD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });







const APIS = [_login_service__WEBPACK_IMPORTED_MODULE_0__["LoginService"], _report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];


/***/ }),

/***/ "d2mR":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _members_student_Others_Map_Components_blockly_blockly_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members/student/Others/Map/Components/blockly/blockly.component */ "OmiA");
/* harmony import */ var _members_student_Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/student/Others/Map/Popups/enunciado/enunciado.component */ "Rtyi");
/* harmony import */ var _members_student_Others_Map_Popups_enunciado_pill_pill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/student/Others/Map/Popups/enunciado/pill/pill.component */ "aQ8d");
/* harmony import */ var _members_student_Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members/student/Others/Map/Popups/help/help.component */ "bVOA");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _members_student_Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/student/Others/Map/Popups/hints/hints.component */ "T93U");
/* harmony import */ var _members_student_Others_Map_Components_dual_blockly_dual_blockly_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/student/Others/Map/Components/dual-blockly/dual-blockly.component */ "z/ST");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _users_API__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users API */ "dD96");














//This change the spelling of the calendar (at least) to the one we choose. In this case Spanish.



Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14___default.a);
//The module that uses all the commmon components in the workspaces. 
//Also all the common modules for the theme pages
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [],
        declarations: [
            _members_student_Others_Map_Components_dual_blockly_dual_blockly_component__WEBPACK_IMPORTED_MODULE_12__["DualBlocklyComponent"],
            _members_student_Others_Map_Components_blockly_blockly_component__WEBPACK_IMPORTED_MODULE_3__["BlocklyComponent"],
            _members_student_Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_4__["EnunciadoComponent"],
            _members_student_Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
            _members_student_Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_11__["HintsComponent"],
            _members_student_Others_Map_Popups_enunciado_pill_pill_component__WEBPACK_IMPORTED_MODULE_5__["PillComponent"]
        ],
        exports: [
            _members_student_Others_Map_Components_dual_blockly_dual_blockly_component__WEBPACK_IMPORTED_MODULE_12__["DualBlocklyComponent"],
            _members_student_Others_Map_Components_blockly_blockly_component__WEBPACK_IMPORTED_MODULE_3__["BlocklyComponent"],
            _members_student_Others_Map_Popups_enunciado_enunciado_component__WEBPACK_IMPORTED_MODULE_4__["EnunciadoComponent"],
            _members_student_Others_Map_Popups_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
            _members_student_Others_Map_Popups_enunciado_pill_pill_component__WEBPACK_IMPORTED_MODULE_5__["PillComponent"],
            _members_student_Others_Map_Popups_hints_hints_component__WEBPACK_IMPORTED_MODULE_11__["HintsComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_13__["NgCalendarModule"],
            _users_API__WEBPACK_IMPORTED_MODULE_15__["LoginService"],
            _users_API__WEBPACK_IMPORTED_MODULE_15__["UserService"]
        ],
        providers: [
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'es-ES'
            }
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SharedModule);



/***/ }),

/***/ "d5ln":
/*!**************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/enunciado/pill/pill.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pill {\n  padding-top: 5%;\n  height: 100%;\n  width: 100%;\n}\n\n#web {\n  padding-top: 5%;\n  height: 400px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSDs7QUFDQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6InBpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGlsbHtcbiAgIHBhZGRpbmctdG9wOiA1JTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xufVxuI3dlYiB7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "dD96":
/*!************************************!*\
  !*** ./src/app/users API/index.ts ***!
  \************************************/
/*! exports provided: LoginService, ReportService, UserService, APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "cwBN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["LoginService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ReportService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "TMMQ");
/* empty/unused harmony star reexport *//* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "ZxVS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "LEmc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "LVOj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _auth_registro_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/registro/user.service */ "qiJ2");
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.service */ "vglk");
/* harmony import */ var _users_API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users API */ "dD96");








const TOKEN_KEY = 'auth-token';
let AuthenticationService = class AuthenticationService {
    constructor(storage, plt, userService, loading, logging) {
        this.storage = storage;
        this.plt = plt;
        this.userService = userService;
        this.loading = loading;
        this.logging = logging;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('undefined');
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    ngOnInit() {
    }
    loginTeacher(teacher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Run the map-loading function until it takes the map.
            this.loading.userLoading();
            (yield (this.logging.authPost(teacher))).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                (yield this.storage.create()).set(TOKEN_KEY, response).then(() => {
                    this.authenticationState.next(true);
                    //Finish map loading function
                    this.loading.usuarioLoading.dismiss();
                    this.userType.next("teacher");
                });
                //Take the token out of the object
                var user_1 = JSON.stringify(response);
                var user_teacher = user_1.slice(10, 50);
                //console.log(user_teacher)
                //store it 
                localStorage.setItem('userTeacher', user_teacher);
                //console.log(response,this.storage,this.userType)
                //alert('User '+ teacher.username +' logged!')
            }), _error => {
                setTimeout(() => {
                    //Finish map loading function
                    this.loading.usuarioLoading.dismiss();
                    //Give an alert message 
                    alert('Parece que los datos no son del todo correctos');
                    //Set finish time to 1 sec after the error has happend.
                }, 1000);
            });
        });
    }
    loginKid(student) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Run the user-loading function until it takes the map.
            this.loading.userLoading();
            (yield (this.userService.loginUser(student))).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                (yield this.storage.create()).set(TOKEN_KEY, response).then(() => {
                    this.authenticationState.next(true);
                    //Finish user loading function
                    this.loading.usuarioLoading.dismiss();
                    this.userType.next("alumno");
                });
                //Take the token out of the object
                var user_1 = JSON.stringify(response);
                var user_student = user_1.slice(10, 50);
                //console.log(user_student)
                //store it 
                localStorage.setItem('userStudent', user_student);
                //console.log(response,this.storage,this.userType, user_student)
                //alert('User '+ student.username +' logged!')
            }), _error => {
                setTimeout(() => {
                    //Finish map loading function
                    this.loading.usuarioLoading.dismiss();
                    //Give an alert message 
                    alert('Parece que los datos no son del todo correctos');
                    //Set finish time to 1 sec after the error has happend.
                }, 1000);
            });
        });
    }
    loginFamily() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.storage.create()).set(TOKEN_KEY, '12345').then(() => {
                this.authenticationState.next(true);
                this.userType.next("family");
            });
        });
    }
    logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    checkToken() {
        return this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        });
    }
    registerTeacherToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.storage.create()).set(TOKEN_KEY, 'newTeacher').then(() => {
                this.authenticationState.next(true);
                this.userType.next("registerTeacher");
            });
        });
    }
    registerStudentToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.storage.create()).set(TOKEN_KEY, 'newTeacher').then(() => {
                this.authenticationState.next(true);
                this.userType.next("registerStudent");
            });
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _auth_registro_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _users_API__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "hsik":
/*!************************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/dual-blockly/dual-blockly.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#primaryDiv {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  bottom: 50%;\n}\n\n#secondaryDiv {\n  position: absolute;\n  right: 0px;\n  height: 50%;\n  width: 50%;\n  top: 50%;\n  bottom: 0%;\n  right: 50%;\n}\n\n#gee_map {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  right: 0%;\n  bottom: 50%;\n}\n\n#gee_map2 {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  bottom: 0%;\n  right: 0%;\n}\n\n#stepButton {\n  position: fixed;\n  bottom: 85%;\n  right: 50%;\n  left: 45%;\n}\n\n#stepButton2 {\n  position: fixed;\n  bottom: 38.5%;\n  right: 50%;\n  left: 45%;\n}\n\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2R1YWwtYmxvY2tseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGdoQkFBQTtBQU9KIiwiZmlsZSI6ImR1YWwtYmxvY2tseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmltYXJ5RGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3R0b206IDUwJTtcbn1cbiNzZWNvbmRhcnlEaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdG9wOjUwJTtcbiAgICBib3R0b206IDAlO1xuICAgIHJpZ2h0OiA1MCU7XG59XG4jZ2VlX21hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcmlnaHQ6MCU7XG4gICAgYm90dG9tOiA1MCU7XG59XG4jZ2VlX21hcDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvdHRvbTogMCU7XG4gICAgcmlnaHQ6MCU7XG59XG4jc3RlcEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogODUlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbGVmdDogNDUlO1xufVxuI3N0ZXBCdXR0b24yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzOC41JTtcbiAgICByaWdodDogNTAlO1xuICAgIGxlZnQ6IDQ1JTtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLWFscGhhLXNpZy5maWdtYS5jb20vaW1nLzYyNzkvZjVmMC9jMzRlOTFkZDUyNjNlNjg4YWUyOGM1OTA1OTE3NTI2Yz9FeHBpcmVzPTE2MjEyMDk2MDAmU2lnbmF0dXJlPVptUFNac3lOOWpCfnZScGZxaXNOflNnQUZYMFNsWjRlWUN6cTZwVVVIQnpFd2JVcjZ4Zn5rdW5TWkVQMVNmRnoyRDh0eE5JSWZodkd3LXBaQy1ubC0wTU9xRmZiS0xTOHZ6V1J2bVMzN0xOfm9kbktob1lRVlQyZmFLbEFReEFoTFRra2k3Ny1vcG5Hb0dNeFo1RUFEeTcxZEV0Y3J1Q3lFR2ZmMW0xWFM1N2JETWtGRzV0YkFvQW0xNFBDWFlRVWY0RlY3ZVdsNUR+OXNSLWR0cHBXd3ZJeFdZaVRYaWUtSUFOTGVXY1d3dUFLRkVzYjJiZE1SbzVGdnJvZDZZWkRwT0FYcDM3eGNtZUpSZGNyaWMzTGV6empKeWRHYTMwd1ZMQn5sckJyfll1WHFifnE4blNqc2FMbjhCUFpaRDFQeTR0RURQakl0NUs2YjlUb0JTZzhtd19fJktleS1QYWlyLUlkPUFQS0FJTlRWU1VHRVdINVhENVVBJykwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ "ioah":
/*!****************************************************************************************!*\
  !*** ./src/app/members/student/Pages/vegetacion/workspace/workspace-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: WorkspacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacePageRoutingModule", function() { return WorkspacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _workspace_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workspace.page */ "45Mm");




const routes = [
    {
        path: '',
        component: _workspace_page__WEBPACK_IMPORTED_MODULE_3__["WorkspacePage"],
    }
];
let WorkspacePageRoutingModule = class WorkspacePageRoutingModule {
};
WorkspacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkspacePageRoutingModule);



/***/ }),

/***/ "itmP":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Components/blockly/blockly.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <table width=\"100%\">\n      <tr>\n        <td>\n          <div id=\"primaryDiv\" ></div>\n        </td>\n        <td>\n          <iframe [src]=\"geeMap\" frameborder=\"0\" allowfullscreen id=\"gee_map\"></iframe>\n        </td>\n      </tr>\n    </table>\n         <ion-img id=\"playButton\" src=\"/assets/buttons/playButton.svg\" (click)=\"stepCode()\"></ion-img> \n </ion-content>   \n");

/***/ }),

/***/ "jjF/":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card id=\"register\" style=\"text-align:center\">\n  <ion-card-header>\n    <ion-card-title>Register or Login</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input [(ngModel)]=\"input.username\" style=\"text-align:center\" type=\"username\" ></ion-input><br>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input [(ngModel)]=\"input.first_name\" style=\"text-align:center\" type=\"password\" minlength=6 ></ion-input><br>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Apellidos</ion-label>\n      <ion-input [(ngModel)]=\"input.last_name\" style=\"text-align:center\" type=\"email\" ></ion-input><br>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Mail</ion-label>\n      <ion-input [(ngModel)]=\"input.email\" style=\"text-align:center\" type=\"email\" ></ion-input><br>\n    </ion-item>\n    <ion-button (click)=\"registerUser()\">Register User</ion-button>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kWxf":
/*!**************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/blockly/blockly.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#primaryDiv {\n  height: 90%;\n  width: 50%;\n  position: absolute;\n}\n\n#gee_map {\n  position: absolute;\n  height: 90%;\n  width: 50%;\n}\n\n#playButton {\n  position: absolute;\n  top: 2%;\n  left: 40%;\n  right: 49%;\n  height: 7%;\n}\n\n#playButton:hover {\n  position: absolute;\n  top: 1%;\n  left: 39%;\n  right: 48%;\n  height: 8%;\n}\n\n/* Makes our label white. */\n\n#blocklyTreeLabel {\n  color: white;\n}\n\n/* Adds padding around the group of categories and separators. */\n\n.blocklyToolboxContents {\n  padding: 0.5em;\n}\n\n/* Adds space between the categories, rounds the corners and adds space around the label. */\n\n.blocklyTreeRow {\n  padding: 3px;\n  margin-bottom: 0.5em;\n  border-radius: 4px;\n}\n\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Jsb2NrbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBLDJCQUFBOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFFLGdFQUFBOztBQUNBO0VBQ0UsY0FBQTtBQUdKOztBQURFLDJGQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFERTtFQUNFLGdoQkFBQTtBQUlKIiwiZmlsZSI6ImJsb2NrbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJpbWFyeURpdiB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgXG59XG4jZ2VlX21hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogOTAlOyBcbiAgICB3aWR0aDogNTAlO1xuICBcbn1cbiNwbGF5QnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgcmlnaHQ6IDQ5JTtcbiAgICBoZWlnaHQ6IDclO1xuXG59XG4jcGxheUJ1dHRvbjpob3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxJTtcbiAgbGVmdDogMzklO1xuICByaWdodDogNDglO1xuICBoZWlnaHQ6IDglO1xufVxuLyogTWFrZXMgb3VyIGxhYmVsIHdoaXRlLiAqL1xuI2Jsb2NrbHlUcmVlTGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAvKiBBZGRzIHBhZGRpbmcgYXJvdW5kIHRoZSBncm91cCBvZiBjYXRlZ29yaWVzIGFuZCBzZXBhcmF0b3JzLiAqL1xuICAuYmxvY2tseVRvb2xib3hDb250ZW50cyB7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgfVxuICAvKiBBZGRzIHNwYWNlIGJldHdlZW4gdGhlIGNhdGVnb3JpZXMsIHJvdW5kcyB0aGUgY29ybmVycyBhbmQgYWRkcyBzcGFjZSBhcm91bmQgdGhlIGxhYmVsLiAqL1xuICAuYmxvY2tseVRyZWVSb3cge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuIFxuICBpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy1hbHBoYS1zaWcuZmlnbWEuY29tL2ltZy82Mjc5L2Y1ZjAvYzM0ZTkxZGQ1MjYzZTY4OGFlMjhjNTkwNTkxNzUyNmM/RXhwaXJlcz0xNjIxMjA5NjAwJlNpZ25hdHVyZT1abVBTWnN5TjlqQn52UnBmcWlzTn5TZ0FGWDBTbFo0ZVlDenE2cFVVSEJ6RXdiVXI2eGZ+a3VuU1pFUDFTZkZ6MkQ4dHhOSUlmaHZHdy1wWkMtbmwtME1PcUZmYktMUzh2eldSdm1TMzdMTn5vZG5LaG9ZUVZUMmZhS2xBUXhBaExUa2tpNzctb3BuR29HTXhaNUVBRHk3MWRFdGNydUN5RUdmZjFtMVhTNTdiRE1rRkc1dGJBb0FtMTRQQ1hZUVVmNEZWN2VXbDVEfjlzUi1kdHBwV3d2SXhXWWlUWGllLUlBTkxlV2NXd3VBS0ZFc2IyYmRNUm81RnZyb2Q2WVpEcE9BWHAzN3hjbWVKUmRjcmljM0xlenpqSnlkR2EzMHdWTEJ+bHJCcn5ZdVhxYn5xOG5TanNhTG44QlBaWkQxUHk0dEVEUGpJdDVLNmI5VG9CU2c4bXdfXyZLZXktUGFpci1JZD1BUEtBSU5UVlNVR0VXSDVYRDVVQScpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgXG59XG4gXG4iXX0= */");

/***/ }),

/***/ "lYCE":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Popups/help/help.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Menú de ayudas</ion-card-subtitle>\n    <ion-card-title>¿En qué te puedo ayudar?</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"ion-text-justify\">\n      En la parte de arriba, por orden de izquierda a derecha se encuentran los botones de \n      ir hacia atrás<img  src=\"/assets/buttons/back-arrow.png\">,\n      enunciado <img src=\"/assets/buttons/statement.png\">,\n      pistas <img src=\"/assets/buttons/idea.png\"> \n      y ayudas <img src=\"/assets/buttons/telescopio.png\">.\n       \n       \n       \n    </div>  \n     <div class=\"ion-text-justify\"> \n        2º Antes de empezar el ejercicio lee el enunciado.\n        <img src=\"/assets/buttons/statement.png\">\n    </div>\n    <div class=\"ion-text-center\"> \n       -En él podras ver también las opciones, donde se resolverán los ejercicios y la Energía Espacial. Esta indica si se pueden realizar los estudios en un\n        país entero (en verde) <ion-icon  color=\"success\"  name = \"battery-charging-outline\"></ion-icon>,\n         en una región (en amarillo) <ion-icon  color=\"warning\"  name = \"battery-charging-outline\"></ion-icon>\n         o en una provincia (en rojo) <ion-icon  color=\"danger\"  name = \"battery-charging-outline\"></ion-icon>\n      \n  </div>\n    <div class=\"ion-text-justify\">\n       3º Cierra el enunciado y comienza cogiendo los bloques de lugar necesarios.\n    </div>\n    <div class=\"ion-text-justify\">\n       4º Continúa escogiendo el bloque de capa.\n   </div>\n   <div class=\"ion-text-justify\">\n      5º Dale al botón de play y haz que surja la magia .\n      <img src=\"/assets/buttons/playButton.svg\">\n   </div>\n   <div class=\"ion-text-justify\">\n      6º Si necesitas ayuda pulsa en la bombilla para utilizar una pista. \n      <img src=\"/assets/buttons/idea.png\">\n   </div>\n   <div class=\"ion-text-justify\">\n    7º Escoge la opción correcta utilizando el enunciado <img src=\"/assets/buttons/statement.png\">\n </div>\n    <ion-img src= \"https://image.freepik.com/vector-gratis/lindo-astronauta-caja-dibujos-animados-vector-icono-ilustracion-icono-tecnologia-ciencia_138676-1982.jpg\"></ion-img>\n  </ion-card-content>\n\n</ion-card>\n");

/***/ }),

/***/ "m1hz":
/*!**********************************************************************************!*\
  !*** ./src/app/members/student/Others/Services/ejercicios/ejercicios.service.ts ***!
  \**********************************************************************************/
/*! exports provided: EjerciciosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjerciciosService", function() { return EjerciciosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let EjerciciosService = class EjerciciosService {
    constructor(http) {
        this.http = http;
        this.ejercicios = [
            {
                id: '/alumno/vegetacion/1',
                ob: '1',
                theme: 'vegetacion',
                title: 'Ziggy se va de picnic',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-comiendo-donut-sosteniendo-taza-cafe-luna-dibujos-animados_138676-2527.jpg',
                statement: 'Ziggy está preocupado. Había prometido llevar a sus amigos de picnic a Málaga, pero no conoce la ciudad. Ayuda a Ziggy a encontrar las zonas con campo utilizando el bloque "Cantidad de vegetación". ¿Qué zona es la más adecuada para hacer un picnic? Recuerda que si el sitio elegido tiene mucha vegetación no van a poder estar cómodos.',
                subtitle: 'Vegetación: ejercicio 1',
                options: ['Laguna de Teatinos', 'La Araña', 'Montes de Málaga', 'Calle Larios'],
                pills: 'Correcto, la laguna de Teatinos es el lugar más idóneo para hacer un picnic debido a la vegetación que hay en el lugar. Si quieres más información puedes consultar esta página web',
                web: 'https://www.viajamalaga.com/parque-laguna-de-la-barrera/',
                lat: ['latitude1=36.7269149,', 'latitude2=36.71926,', 'latitude3=36.788196,', 'latitude4=36.717684,'],
                long: ['longitude1=-4.4699653,', 'longitude2=-4.421543,', 'longitude3=-4.396324,', 'longitude4=-4.323378,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Laguna de Teatinos,', 'tooltip2=Calle Larios,', 'tooltip3=Montes de Málaga,', 'tooltip4=La Araña,'],
                difficulty: 'B',
                energy: 1,
                hints: ['Utiliza el bloque "Cantidad de vegetación"', 'Recuerda que no queremos zonas sin vegetación para hacer el picnic (zonas marrones o blancas)', 'Recuerda que queremos zonas con no mucha cantidad de vegetación (zonas verde oscuro)', ''],
                comp: false
            },
            {
                id: '/alumno/vegetacion/2',
                ob: '2',
                theme: 'vegetacion',
                title: 'En busca de flamencos',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-capucha-icono-tecnologia-ciencia_138676-1995.jpg',
                statement: 'Ziggy quiere ver flamencos en Málaga pero no sabe por dónde empezar. Sabiendo que los flamencos son aves que necesitan grandes extensiones de agua poco profundas, escoge el bloque adecuado para encontrar un humedal idóneo en Málaga, ciudad que se encuentra en la región Andalucía de España.',
                subtitle: 'Vegetación y fauna: ejercicio 2',
                options: ['Laguna de Fuente de Piedra', 'El Chorro', 'Embalse de la Viñuela', 'Presa del Limonero'],
                pills: 'Correcto. Con el Bloque de humedad del suelo eres capaz de ver los humedales con mucha claridad, como es el caso de la laguna de Fuente de Piedra, que es el humedal de mayor extensión de la región de Andalucía. Si quieres saber más visita la web.',
                web: 'https://www.andalucia.org/es/espacios-naturales-laguna-de-fuente-de-piedra',
                lat: ['latitude1=37.10823,', 'latitude2=36.9173,', 'latitude3=36.87672,', 'latitude4=36.7612,'],
                long: ['longitude1=-4.77337,', 'longitude2=-4.81653,', 'longitude3=-4.17193,', 'longitude4=-4.43336,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Laguna de Fuente de Piedra,', 'tooltip2=El Chorro,', 'tooltip3=Embalse de la Viñuela,', 'tooltip4=Presa del Limonero,'],
                difficulty: 'C',
                energy: 1,
                hints: ['Si necesitan extensiones de agua poco profundas lo mejor es buscar humedales', 'Utiliza el bloque de humedad del suelo', '', ''],
                comp: false
            },
            {
                id: '/alumno/vegetacion/3',
                ob: '3',
                theme: 'vegetacion',
                title: 'Ziggy va a recoger setas',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-capucha-icono-tecnologia-ciencia_138676-1995.jpg',
                statement: 'A Ziggy le han contado que un buen lugar para recoger setas es Álava, que se encuentra en la región del País Vasco en España. Ziggy está observando Álava y quiere que le ayudes a decidir qué lugar puede ser el mejor utilizando el bloque "humedad del suelo".',
                subtitle: 'Vegetación y fauna: ejercicio 3',
                options: ['Parque de Izki', 'Salcedo', 'Bellojin', 'Archúa'],
                pills: 'Correcto. Las setas son un tipo de hongo, por lo que necesitan niveles altos de humedad del suelo para crecer. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Seta',
                lat: ['latitude1=42.6955,', 'latitude2=42.73519,', 'latitude3=42.824869,', 'latitude4=42.886089,'],
                long: ['longitude1=-2.48,', 'longitude2=-2.96611,', 'longitude3=-3.025585,', 'longitude4=-2.976003,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Parque de Izki,', 'tooltip2=Salcedo,', 'tooltip3=Bellojin,', 'tooltip4=Archúa,'],
                difficulty: 'A',
                energy: 1,
                hints: ['Las setas son hongos', 'Los hongos necesitan ambientes húmedos', '', ''],
                comp: false
            },
            {
                id: '/alumno/vegetacion/4',
                ob: '4',
                theme: 'vegetacion',
                title: 'La araña saltarina',
                imageURL: 'https://image.freepik.com/vector-gratis/arana-linda-ilustracion-dibujos-animados-red-concepto-naturaleza-animal-aislado-estilo-dibujos-animados-plana_138676-2730.jpg',
                statement: 'Ziggy quiere saber dónde vive la araña saltarina, la única información que le han dado es que busque en China con el bloque "temperatura del aire"  y que tenga en cuenta que es una especie extremófila.',
                subtitle: 'Vegetación y fauna: ejercicio 4',
                options: ['Himalaya', 'Hinggan', 'Jiamusi', 'Na La Ti Cun'],
                pills: '¡Correcto!. La especie que busca Ziggy se llama araña saltarina del Himalaya y, al ser una especie extremófila, vive en ambientes cuyas condiciones son extremas. En el caso de esta araña, vive a elevadas alturas, lo que hace que se enfrente a temperaturas muy bajas. Si quieres saber más, visita la web.',
                web: 'https://es.wikipedia.org/wiki/Extremófilo#:~:text=Un%20extremófilo%20',
                lat: ['latitude1=35.768062,', 'latitude2=46.0461,', 'latitude3=46.825,', 'latitude4=43.3105,'],
                long: ['longitude1=76.702744,', 'longitude2=121.9395,', 'longitude3=130.2079,', 'longitude4=83.9542,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Himalaya,', 'tooltip2=Hinggan,', 'tooltip3=Jiamusi,', 'tooltip4=Na La Ti Cun,'],
                difficulty: 'A',
                energy: 3,
                hints: ['Extremófilo suena a extremo', '¿Qué punto tiene las temperaturas más extremas de las opciones?', '', ''],
                comp: false
            },
            {
                id: '/alumno/vegetacion/5',
                ob: '5',
                theme: 'vegetacion',
                title: 'El ratón ciervo',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-leyo-libro-ilustracion-icono-historieta-planeta-concepto-icono-tecnologia-ciencia-aislado-estilo-dibujos-animados-plana_138676-2091.jpg',
                statement: 'Acompaña a Ziggy a Ecuador y utiliza el bloque "Presión atmosférica". En las zonas azules vive un roedor muy peculiar: el ratón ciervo. Ayuda a Ziggy a escoger la respuesta incorrecta sobre este animal.',
                subtitle: 'Vegetación y fauna: ejercicio 5',
                options: ['Vive en zonas de baja altitud, ya que la presión es alta', 'Vive en zonas muy altas, ya que la presión es baja', 'al vivir en zonas altas está adaptado a vivir con poca cantidad de oxígeno', 'Al vivir en una zona elevada, su ecosistema será frío'],
                pills: 'Correcto. El color azul indica que la presión es muy baja, lo que quiere decir que donde viver nuestro amigo roedor es un lugar alto. Además, en los lugares altos el oxígeno es escaso y la temperatura baja, por lo que el ratón ciervo ha evolucionado para adaptarse a estas características de su entorno, que es la cordillera de los Andes. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Animales_de_gran_altitud',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 3,
                hints: ['Mira bien la leyenda para ver qué significa el color azul', 'A mayor altura habrá menos aire encima de la superficie, por lo que la presión será...', '', ''],
                comp: false
            },
            {
                id: '/alumno/vegetacion/6',
                ob: '6',
                theme: 'vegetacion',
                title: '¿Dónde está el kril?',
                imageURL: 'https://image.freepik.com/vector-gratis/dibujos-animados-submarino_138676-2976.jpg',
                statement: 'A Ziggy le han contado lo importante que es el kril en el medio marino y quiere buscarlo, sabiendo que es el alimento de focas, ballenas o pingüinos, utiliza el bloque "Temperatura del mar" y escoge el lugar donde es más probable que Ziggy pueda encontrar kril.',
                subtitle: 'Vegetación y fauna: ejercicio 6',
                options: ['Punto sur', 'Punto norte', 'Punto este', 'Punto oeste'],
                pills: 'Correcto. El kril vive en las frías aguas que rodean la Antártida. Es un pequeño crustáceo parecido a una gamba que es sin duda el más importante de los seres vivos de este ecosistema, ya que sin él morirían gran parte de los animales que habitan la Antártida y el céano que la rodea. El kril se alimenta de algas microscópicas que crecen bajo el hielo flotante. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Euphausia_superba#Distribuci%C3%B3n_geogr%C3%A1fica',
                lat: ['latitude1=-58.76,', 'latitude2=-2.15,', 'latitude3=-11.19,', 'latitude4=-12.19,'],
                long: ['longitude1=-44.77,', 'longitude2=-20.58,', 'longitude3=13.23,', 'longitude4=-36.32,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=,', 'tooltip2=Punto norte,', 'tooltip3=Punto este,', 'tooltip4=Punto oeste,'],
                difficulty: 'B',
                energy: 1,
                hints: ['A los pingüinos les gusta el frío', 'Contra más azul en el mapa más frío hace en el agua', '', ''],
                comp: false
            },
            //Cambio Climático
            {
                id: '/alumno/cambio-climatico/1',
                ob: '1',
                theme: 'cambio-climatico',
                title: 'El problema de Kasai Oriental',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-dibujos-animados-astronauta-montando-cohetes-estilo-dibujos-animados-plana_138676-2846.jpg',
                statement: 'Acompaña a Ziggy a Kasai Oriental, en la República Democrática del Congo, para explorar un problema que es muy común en el centro y oeste de África. Utiliza el bloque de "Monóxido de carbono" para encontrar la causa que puede haber provocado que haya tanto de este gas en la región.',
                subtitle: 'Cambio climático y contaminación: ejercicio 1',
                options: ['Incendios', 'Grandes ciudades', 'Vehículos contaminantes', 'Aeropuertos'],
                pills: 'Correcto. El centro de África es el lugar del mundo donde más incendios hay, lo que hace que se liberen a la atmósfera grandes cantidades de gases como el monóxido de carbono, entre otros. Esto es muy dañino para el planeta y contribuye al cambio climático. Si quieres saber más sobre este tema consulta la web.',
                web: 'https://www.eldiario.es/ballenablanca/biodiversidad/africa-incendios-amazonia_1_1378491.html',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 2,
                hints: ['Recuerda que puedes utilizar el bloque "Nivel de transparencia" para ver lo que hay bajo el gas', 'En esta región no hay apenas grandes ciudades ni numerosas infraestructuras', 'La mayor parte de la superficie de la región está cubierta por vegetación', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/2',
                ob: '2',
                theme: 'cambio-climatico',
                title: 'Visitamos Japón',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-come-ilustracion-dibujos-animados-sushi-concepto-icono-comida-ciencia-estilo-dibujos-animados-plana_138676-2004.jpg',
                statement: 'Ziggy va a visitar Japón y utiliza el bloque "Dióxido de nitrógeno" para ver el nivel de contaminación del país. Observa que en el punto señalado el nivel de este gas es mayor, ¿Por qué puede ser?',
                subtitle: 'Cambio climático y contaminación: ejercicio 2',
                options: ['Se trata de un gran núcleo de población con muchas construcciones y carreteras que contribuyen a la contaminación', 'Es un punto donde se puede observar un volcán activo', 'Es una zona con vegetación así que es posible que la causa sean los incendios', 'No tiene sentido porque es una zona sin ciudades, volcanes o vegetación'],
                pills: 'Correcto. Como has podido observar, bajo el gas hay una gran ciudad que es Tokio, la capital de Japón. Si bien la erupción de volcanes o incluso los incendios pueden contribuir a la presencia de dióxido de nitrógeno, en este caso es debido a la actividad humana en las ciudades, sobre todo a los vehículos como cohes o motos. Si quiere saber más visita la web.',
                web: 'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/atmosfera-y-calidad-del-aire/calidad-del-aire/salud/oxidos-nitrogeno.aspx',
                lat: ['latitude1=35.7026,'],
                long: ['longitude1=139.7595,'],
                popup: ['popup1=Tokio,'],
                tooltip: ['tooltip1=,'],
                difficulty: 'B',
                energy: 3,
                hints: ['utiliza el bloque "nivel de transparencia" para ver lo que hay bajo el gas', 'Acércate lo suficiente para ver lo que hay en el suelo', '', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/3',
                ob: '3',
                theme: 'cambio-climatico',
                title: 'Ziggy y el asma',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-dibujos-animados-paz-mano-concepto-icono-tecnologia-espacial-aislado-estilo-dibujos-animados-plana_138676-2184.jpg',
                statement: 'Ziggy tiene asma y quiere conocer el sitio con peores condiciones para él de entre las opciones. Observa España con el bloque "Aerosoles" y ayúdale a elegir la PEOR opción.',
                subtitle: 'Cambio climático y contaminación: ejercicio 3',
                options: ['Albendín', 'Fontiveros', 'Campanario', 'Logroño'],
                pills: 'Correcto. Los aerosoles son perjudiciales para la salud, especialmente para personas con enfermedades respiratorias como el asma, y pueden provocar molestias en los ojos y la garganta. Si quieres saber más visita la siguiente web.',
                web: 'https://es.wikipedia.org/wiki/Aerosol',
                lat: ['latitude1=37.6161,', 'latitude2=40.93,', 'latitude3=38.86367,', 'latitude4=42.46369,'],
                long: ['longitude1=-4.2359,', 'longitude2=-4.96551,', 'longitude3=-5.61721,', 'longitude4=-2.44754,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Albendín,', 'tooltip2=Fontiveros,', 'tooltip3=Campanario,', 'tooltip4=Logroño,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Las personas con asma necesitan respirar aire limpio', 'Los aerosoles son partículas que se encuentran en el aire y lo "ensucian"', '', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/4',
                ob: '4',
                theme: 'cambio-climatico',
                title: 'Ziggy va a la playa en Australia',
                imageURL: 'https://image.freepik.com/vector-gratis/verano-lindo-astronauta-flotando-playa-ilustracion-dibujos-animados-globos-concepto-verano-ciencia-estilo-dibujos-animados-plana_138676-2006.jpg',
                statement: 'Ziggy quiere ir a la playa a Australia y sabe que ponerse crema solar es siempre importante, sin embargo, quiere saber en cuál de las siguientes opciones debe tener más precaución todavía. Ayúdale a elegir el punto en el que es más importante echarse crema utilizando el bloque "Ozono".',
                subtitle: 'Cambio climático y contaminación: ejercicio 4',
                options: ['Darwin', 'Geraldton', 'Byron Bay', 'Melbourne'],
                pills: 'Correcto. El ozono protege la biosfera de la radiación solar ultravioleta, por lo que Darwin es la opción menos protegida al haber menos concentración de ozono. Pero recuerda que utilizar protección solar es siempre importante para evitar enfermedades como el cáncer de piel, algo muy frecuente en lugares como Australia. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Protector_solar',
                lat: ['latitude1=-12.4162,', 'latitude2=-28.778,', 'latitude3=-28.64826,', 'latitude4=-37.666,'],
                long: ['longitude1=130.9165,', 'longitude2=114.622,', 'longitude3=153.60647,', 'longitude4=144.913,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Darwin,', 'tooltip2=Geraldton,', 'tooltip3=Byron Bay,', 'tooltip4=Melbourne,'],
                difficulty: 'B',
                energy: 3,
                hints: ['La alta radiación solar es muy dañina para los humanos', 'El ozono puede reducir el impacto de la radiación producida por el sol', '', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/5',
                ob: '5',
                theme: 'cambio-climatico',
                title: 'El petróleo de Arabia Saudí',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-montando-cohete-agitando-mano-icono-dibujos-animados-ilustracion-concepto-icono-tecnologia-ciencia_138676-2130.jpg',
                statement: 'Ziggy estaba paseando con su nave sobre Arabia Saudí utilizando el bloque "Metanal" cuando ha observado un lugar en el que había muchas plantas químicas para tratar petróleo. ¿Eres capaz de señalar el punto que Ziggy ha observado?',
                subtitle: 'Cambio climático y contaminación: ejercicio 5',
                options: ['Jubail', 'Medina', 'Bisha', 'Sakaka'],
                pills: 'Correcto. Como puedes observar, el metanal es un gas contaminante que es comúnmente producido por el ser humano en procesos industriales como el refinamiento del pretróleo o tratamiento del gas natural, algo muy común en la ciudad altamente industrializada de Jubail. Para más información visita la web.',
                web: 'https://es.wikipedia.org/wiki/Petroqu%C3%ADmica',
                lat: ['latitude1=27.1232,', 'latitude2=24.4966,', 'latitude3=19.9827,', 'latitude4=29.9043,'],
                long: ['longitude1=49.2521,', 'longitude2=39.5813,', 'longitude3=42.5813,', 'longitude4=40.0698,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Jubail,', 'tooltip2=Medina,', 'tooltip3=Bisha,', 'tooltip4=Sakaka,'],
                difficulty: 'A',
                energy: 3,
                hints: ['Las plantas petrolíferas contaminan mucho', 'Elige el punto más contaminado', '', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/6',
                ob: '6',
                theme: 'cambio-climatico',
                title: 'La deforestación en España',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-ilustracion-icono-historieta-tierra-globo-aire-caliente-concepto-icono-transporte-ciencia-aislado-estilo-dibujos-animados-plana_138676-2092.jpg',
                statement: 'Acompaña a Ziggy a Huelva, que se encuentra en la región de Andalucía en España y utiliza el bloque "Pérdida de árboles" para observar cómo ha afectado a la provincia y elegir la opción correcta.',
                subtitle: 'Cambio climático y contaminación: ejercicio 6',
                options: ['Ha habido mucha deforestación en los últimos años', 'La gran mayoría de la deforestación es de antes del año 2010', 'Ha habido deforestación desde 2000 hasta 2019, pero no es mucho', 'La deforestación sólo se ha dado en las zonas costeras'],
                pills: 'Correcto. La deforestación es uno de los mayores problemas que aceleran el cambio climático porque los árboles ayudan a retener el dióxido de carbono, que es un gas de efecto invernadero. Si quieres saber más consulta la web.',
                web: 'https://es.wikipedia.org/wiki/Deforestaci%C3%B3n',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 1,
                hints: ['Fíjate en los colores que corresponden a cada año', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/cambio-climatico/7',
                ob: '7',
                theme: 'cambio-climatico',
                title: 'El ozono en dos islas',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-escuchando-musica-boombox-cartoon-icon-illustration-concepto-icono-tecnologia-ciencia_138676-2112.jpg',
                statement: 'Ayuda a Ziggy a escoger la opción correcta sobre Islandia y Madagascar. Para ello crea un mapa en cada país con el bloque "Ozono".',
                subtitle: 'Cambio climático y contaminación: ejercicio 7',
                options: ['Al haber más ozono en Islandia, los efectos del calentamiento global provocados por este gas son mayores que en Madagascar', 'Al haber menos ozono en Madagascar, los efectos del calentamiento global provocados por este gas son mayores que en Islandia', 'La concentración de ozono no es importante en el cambio climático', 'Al haber más ozono en Islandia, los efectos del calentamiento global provocados por este gas son menores que en Madagascar'],
                pills: 'Correcto. El ozono es un importante gas de efecto invernadero, de hecho, es el tercer gas que más contribuye al calentamiento global, sólo por detrás del dióxido de carbono y el metano. Es por eso que en Islandia el efecto que provoca será mayor que en Madagascar, al haber más concentración del gas. Si quieres saber más visita la web.',
                web: 'https://theconversation.com/el-creciente-papel-del-ozono-en-el-cambio-climatico-141002#:~:text=El%20ozono%20es%20conocido%20por,2%20y%20el%20CH4.',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'C',
                energy: 3,
                hints: ['El ozono es lo que se conoce como un gas de efecto invernadero', 'Donde más ozono haya mayor será el efecto invernadero provocado por el gas', '', ''],
                comp: true
            },
            //Ecosistemas
            {
                id: '/alumno/ecosistemas/1',
                ob: '1',
                theme: 'ecosistemas',
                title: 'Dusty y las montañas',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-ilustracion-icono-historieta-tierra-globo-aire-caliente-concepto-icono-transporte-ciencia-aislado-estilo-dibujos-animados-plana_138676-2092.jpg',
                statement: 'Dusty le propone un desafío a Ziggy: Utilizar el bloque "Relieve" en España y decirle qué sistema montañoso cuenta con el pico a mayor altitud.\n',
                subtitle: 'Ecosistemas: ejercicio 1',
                options: ['Cordillera Penibética', 'Sistema Central', 'Cordillera Cantábrica', 'Pirineos'],
                pills: 'Correcto, el pico Mulhacén es el más alto de la Península Ibérica y se encuentra en Sierra Nevada, que está ubicada dentro de la Cordillera Penibética. Si quieres más información puedes consultar esta página web',
                web: 'https://es.wikipedia.org/wiki/Mulhacén',
                lat: ['latitude1=37.053333,', 'latitude2=40.2456700,', 'latitude3=43.198056,', 'latitude4=42.6311200,'],
                long: ['longitude1=-3.311389,', 'longitude2=-5.2978400,', 'longitude3=-4.851111,', 'longitude4=0.6568600,'],
                popup: ['popup1=Mulhacén,', 'popup2=Almanzor,', 'popup3=Torre Cerrado,', 'popup4=Aneto,'],
                tooltip: ['tooltip1=Cordillera Penibética,', 'tooltip2=Sistema Central,', 'tooltip3=Cordillera Cantábrica,', 'tooltip4=Pirineos,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Utiliza el bloque "Relieve"', 'Compara la altitud de las opciones recordando que los puntos más altos son de color blanco', '', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/2',
                ob: '2',
                theme: 'ecosistemas',
                title: 'Investigando el mar Caspio',
                imageURL: 'https://image.freepik.com/vector-gratis/linda-estrella-pesca-astronauta-planeta-icono-dibujos-animados-ilustracion-concepto-icono-espacio-ciencia-personas-aislado-premium-estilo-plano-dibujos-animados_138676-1588.jpg',
                statement: 'Acompaña a Ziggy a Kazajistán y utiliza el bloque "Lagos". Como se puede ver en el mapa el punto marcado es el mar Caspio, sin embargo, el bloque que hemos utilizado lo considera un lago! Ziggy está confuso, ayúdale a entenderlo.',
                subtitle: 'Ecosistemas: ejercicio 2',
                options: ['Es un mar interior: Un lago muy grande de agua salada.', 'Es un mar que forma parte de un océano.', 'Es un mar interior: Un lago muy grande de agua dulce.', 'Es un golfo.'],
                pills: 'Correcto. Se le llama mar porque se trata de un gran lago salado completamente interior, algo que también se conoce como lago endorreico. Si quieres saber más consulta la siguiente web.',
                web: 'https://es.wikipedia.org/wiki/Mar_Caspio',
                lat: ['latitude1=46.177,'],
                long: ['longitude1=50.823,'],
                popup: ['popup1=Mar Caspio,'],
                tooltip: ['tooltip1=,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Observa que está en el interior, rodeado de tierra', 'Si un mar interior tiene que ver con la salinidad del agua, ¿Tiene sentido que sea dulce o salado?', '', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/3',
                ob: '3',
                theme: 'ecosistemas',
                title: 'Los ríos de la Meseta Central',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-dibujos-animados-paz-mano-concepto-icono-tecnologia-espacial-aislado-estilo-dibujos-animados-plana_138676-2184.jpg',
                statement: 'Ziggy quiere saber dónde desembocan los ríos de la Meseta Central y por qué. Échale una mano utilizando el bloque adecuado en España para contestar la siguiente pregunta: ¿A qué vertiente pertenecen los ríos de la Meseta?',
                subtitle: 'Ecosistemas: ejercicio 3',
                options: ['A la vertiente atlántica porque hay más altura en la zona este que en la oeste.', 'A la vertiente mediterránea porque hay más altura en el oeste que en el este.', 'A las vertientes mediterránea y atlántica porque en España los ríos van de norte a sur.', 'A la vertiente cantábrica porque no existe una cadena montañosa que evite su paso.'],
                pills: 'Correcto. La Meseta es una extensa llanura que supera los 600 metros de altitud media y es más alta en la zona este que en el oeste, por eso los ríos que la recorren vierten sus aguas en el océano Atlántico.',
                web: 'https://es.wikipedia.org/wiki/Meseta_Central',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'C',
                energy: 3,
                hints: ['La desemocadura de los ríos está marcada por la gravedad', 'Ten en cuenta las elevaciones y accidentes geográficos', 'Sería una buena idea utilizar el bloque "Relieve"', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/4',
                ob: '4',
                theme: 'ecosistemas',
                title: 'La vertiente cantábrica',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-leyo-libro-ilustracion-icono-historieta-planeta-concepto-icono-tecnologia-ciencia-aislado-estilo-dibujos-animados-plana_138676-2091.jpg',
                statement: 'Ziggy va a España y utilizando el bloque "Ríos" quiere saber cuál de las siguientes afirmaciones sobre la vertiente cantábrica es correcta. Ayúdale a escoger la verdadera.',
                subtitle: 'Ecosistemas: ejercicio 4',
                options: ['Sus ríos son cortos porque nacen muy próximos al mar Cantábrico', 'Sus ríos son largos porque nacen en el sur de la península', 'En la península no hay ríos que desemboquen en el mar Cantábrico', 'Los ríos más largos de la península son de esta vertiente'],
                pills: 'Correcto. Los ríos de la vertiente cantábrica son cortos porque nacen en la Cordillera Cantábrica. Además, son caudalosos y de régimen regular, debido a las precipitaciones abundantes y frecuentes. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Hidrograf%C3%ADa_de_Espa%C3%B1a',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 3,
                hints: ['Para ver bien los ríos de esta vertiente tendrás que acercarte bastante así que...', 'Recuerda que el mar Cantábrico está al norte de la Península Ibérica', '', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/5',
                ob: '5',
                theme: 'ecosistemas',
                title: 'La temperatura del Océano Índico',
                imageURL: 'https://image.freepik.com/vector-gratis/verano-lindo-astronauta-flotando-playa-ilustracion-dibujos-animados-globos-concepto-verano-ciencia-estilo-dibujos-animados-plana_138676-2006.jpg',
                statement: 'Acompaña a Ziggy al Océano Índico y utiliza el bloque "Temperatura del mar", ¿Cuál de las siguientes afirmaciones es cierta?',
                subtitle: 'Ecosistemas: ejercicio 5',
                options: ['Las temperaturas al sur son mucho más frías debido a la cercanía con el Océano Antártico', 'Las temperaturas al norte son más frías', 'Las temperaturas al sur son mas elevadas por la cercanía con el Ecuador', 'La temperatura no varía apenas'],
                pills: 'Correcto. El sur del Océano Índico se encuentra muy próximo al Océano Antártico, que es una masa de agua muy fría debido a la lejanía con el Ecuador. Si quieres saber más consulta la web.',
                web: 'https://es.wikipedia.org/wiki/Oc%C3%A9ano_%C3%8Dndico',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 3,
                hints: ['Observa los colores de la leyenda', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/6',
                ob: '6',
                theme: 'ecosistemas',
                title: 'El porqué de los incendios de Corrientes',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-vuelo-lapiz-cohete-caricatura_138676-2359.jpg',
                statement: 'Acompaña a Ziggy a la región de Corrientes, en Argentina para investigar con el bloque "Incendios" los focos de esa zona y elegir la respuesta a la siguiente pregunta: ¿Cuál NO es una razón por la que hay tantos incendios?',
                subtitle: 'Ecosistemas: ejercicio 6',
                options: ['Vegetación fresca', 'Aumento de temperatura por el cambio climático', 'Quemas en la agricultura', 'Personas con intención de generar incendios'],
                pills: 'Correcto. La mayoría de incendios tienen origen humano y en los últimos años estos incendios tienden a tener un impacto más negativo en los ecosistemas debido a la facilidad de que se extiendan por la sequedad de la vegetación y aumento de la temperatura que provoca el cambio climático. Si quieres saber más visita la página web.',
                web: 'https://es.wikipedia.org/wiki/Incendios_de_la_selva_amaz%C3%B3nica_de_2019',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 2,
                hints: ['La humedad no hace fácil que el fuego se extienda', 'Las plantas verdes son húmedas', '', ''],
                comp: false
            },
            {
                id: '/alumno/ecosistemas/7',
                ob: '7',
                theme: 'ecosistemas',
                title: 'Los ecosistemas de España y Grecia',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-volando-ilustracion-icono-dibujos-animados-espacio_138676-2702.jpg',
                statement: 'Ayuda a Ziggy a elegir cuál de las siguientes opciones es incorrecta. Para ello, crea dos mapas con el bloque "Tipo de Suelo" en España y Grecia.',
                subtitle: 'Ecosistemas: ejercicio 7',
                options: ['Los ecosistemas de ambos países son muy diferentes', 'Sus ecosistemas son muy parecidos, así que los dos países tienen el mismo bioma', 'El bioma de Grecia y España es el bosque templado', 'El ecosistema es muy parecido pero no por ello lo habitan las mismas especies'],
                pills: 'Correcto. El conjunto de todas las zonas del planeta que tienen unas condiciones climáticas semejantes y desarrollan ecosistemas similares reciben el nombre de bioma. Existen varios tipos de biomas terrestres diferentes, aunque en el caso de la mayor parte de Europa es  bosque templado. Si quieres más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Bosque_templado',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 3,
                hints: ['Mira los colores del mapa de los dos países de manera general', 'Ambos países tienen climas parecidos', '', ''],
                comp: true
            },
            //Humano y sociedad
            {
                id: '/alumno/hum-soc/1',
                ob: '1',
                theme: 'hum-soc',
                title: 'Ziggy se cambia de ciudad',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-capucha-icono-tecnologia-ciencia_138676-1995.jpg',
                statement: 'Ziggy se quiere mudar. Desde su nave espacial está buscando un nuevo hogar con dos características:  ●Ciudad de tamaño medio  ●Bosque para pasear  ¿Cuál de las siguientes localidades es la más adecuada para Ziggy?',
                subtitle: 'El humano y la sociedad: ejercicio 1',
                options: ['Lugo', 'Ronda', 'Alicante', 'Barcelona'],
                pills: 'Correcto, como se puede observar Lugo es mucho más pequeño que Barcelona y además, está rodeado de bosques gracias a su clima Atlántico. Si quieres más información puedes consultar esta página web',
                web: 'http://centros.edu.xunta.es/iesfonmina/outras_webs/comenius_2003-2009/we_young_europeans/firstyear/greensettings/verdecast.htm',
                lat: ['latitude1=43.012141,', 'latitude2=36.744274,', 'latitude3=38.332486,', 'latitude4=41.323867,'],
                long: ['longitude1=-7.552791,', 'longitude2=-5.162826,', 'longitude3=-0.492542,', 'longitude4=2.162512,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Lugo,', 'tooltip2=Ronda,', 'tooltip3=Alicante,', 'tooltip4=Barcelona,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Utiliza el bloque ""Tipo de suelo""', 'Recuerda que no buscamos zonas con grandes ciudades (zonas con mucha extensión de rojo)', '', ''],
                comp: false
            },
            {
                id: '/alumno/hum-soc/2',
                ob: '2',
                theme: 'hum-soc',
                title: 'El reto de Mongolia',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-montando-cohete-agitando-mano-icono-dibujos-animados-ilustracion-concepto-icono-tecnologia-ciencia_138676-2130.jpg',
                statement: 'Dusty reta a Ziggy a que encuentre desde su nave la capital de Mongolia, pero para ello deberá usar el bloque ""Modificado por el humano"". Ayuda a Ziggy a encontrar la capital entre las 4 opciones que le da Dusty.',
                subtitle: 'El humano y la sociedad 2',
                options: ['Ulán Bator', 'Gurvantes', 'Khan Kentii', 'Khukhmorit'],
                pills: '¡Correcto! Como has podido ver, la zona que más ha sido modificada por el humano y que además es más extensa que el resto de zonas modificadas es Ulán Bator, la capital de Mongolia. Si quieres saber más visita esta web.',
                web: 'https://es.wikipedia.org/wiki/Ul%C3%A1n_Bator',
                lat: ['latitude1=47.91009,', 'latitude2=43.230,', 'latitude3=48.940,', 'latitude4=47.358,'],
                long: ['longitude1=106.909,', 'longitude2=101.036,', 'longitude3=108.774,', 'longitude4=94.526,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Ulán Bator,', 'tooltip2=Gurvantes,', 'tooltip3=Khan Kentii,', 'tooltip4=Khukhmorit,'],
                difficulty: 'A',
                energy: 3,
                hints: ['Piensa que las capitales suelen ser las ciudades más importantes o grandes de una región', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/hum-soc/3',
                ob: '3',
                theme: 'hum-soc',
                title: 'Ziggy y la España vacía',
                imageURL: 'https://image.freepik.com/vector-gratis/ejemplo-lindo-historieta-hombre-negocios-astronauta-concepto-icono-negocio-ciencia-estilo-dibujos-animados-plana_138676-2012.jpg',
                statement: 'Dusty le ha propuesto a Ziggy el reto de buscar población para repoblar las zonas vacías de España, para ello Ziggy tendrá que buscar dónde hay más densidad de población. Ayuda a Ziggy a seleccionar el lugar donde NO buscar población de entre las siguientes opciones.',
                subtitle: 'El humano y la sociedad: ejercicio 3',
                options: ['Montañas y bosques', 'Ciudades', 'Costas', 'Pueblos cercanos a ciudades'],
                pills: '¡Correcto! La mayoría de la población en España está repartida en costas y ciudades, es por ello que no hay una superpoblación en España, si no una mala distribución de la población.',
                web: 'https://es.wikipedia.org/wiki/Despoblaci%C3%B3n',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 3,
                hints: ['Para este reto habría que mirar la densidad de población.', 'La capa "densidad de población" sería la más adecuada para este reto', '', ''],
                comp: false
            },
            {
                id: '/alumno/hum-soc/4',
                ob: '4',
                theme: 'hum-soc',
                title: 'La ciudad de la luz',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-caja-dibujos-animados-vector-icono-ilustracion-icono-tecnologia-ciencia_138676-1982.jpg',
                statement: 'A Ziggy le han contado que en Francia hay una ciudad que es conocida como "la ciudad de la luz" y que aunque no se conoce el porqué con exactitud, sí que se puede observar claramente desde el espacio. Utiliza el bloque que creas más adecuado y selecciona la opción que tenga más sentido que sea la ciudad de la luz.',
                subtitle: 'El humano y la sociedad: ejercicio 4',
                options: ['París', 'Lyon', 'Toulouse', 'Nantes'],
                pills: 'Correcto. París es la capital de Francia y al ser la más grande del país se puede observar como también es la ciudad más iluminada. No se sabe por qué se conoce como la ciudad de la luz, aunque se piensa que puede ser porque históricamente fue una de las primeras ciudades europeas en contar con iluminación en las calles o porque en el siglo XVIII fue la capital mundial de la cultura. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Par%C3%ADs',
                lat: ['latitude1=48.8628,', 'latitude2=45.7563,', 'latitude3=43.6061,', 'latitude4=47.2075,'],
                long: ['longitude1=2.3476,', 'longitude2=4.8428,', 'longitude3=1.4444,', 'longitude4=-1.5612,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=París,', 'tooltip2=Lyon,', 'tooltip3=Toulouse,', 'tooltip4=Nantes,'],
                difficulty: 'A',
                energy: 3,
                hints: ['Tiene sentido que la ciudad de la luz sea la más iluminada, ¿no?', 'Utiliza el bloque "Luces nocturnas" en Francia', '', ''],
                comp: false
            },
            {
                id: '/alumno/hum-soc/5',
                ob: '5',
                theme: 'hum-soc',
                title: 'Ziggy investiga la población en España',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-ilustracion-icono-dibujos-animados-caja-concepto-tecnologia-cientifica-estilo-dibujos-animados-plana_138676-1998.jpg',
                statement: 'Acompaña a Ziggy a España y crea dos mapas, uno con el bloque "Densidad de población" y otro con el bloque "Luces nocturnas". Ayuda a Ziggy a escoger la respuesta incorrecta comparando ambos mapas.',
                subtitle: 'El humano y la sociedad: ejercicio 5',
                options: ['La densidad de población es alta en zonas oscuras e iluminadas', 'La densidad de población es mayor en las zonas iluminadas (grandes ciudades)', 'La densidad de población es muy baja en las zonas oscuras (zonas rurales)', 'Hay una grandísima diferencia entre la densidad en las zonas oscuras e iluminadas'],
                pills: 'Correcto.En España, 80 de cada 100 personas viven en ciudades. Este hecho tiene su origen en el siglo XIX, cuando la mayoría de la población vivía en zonas rurales y con el avance de las tecnologías en la agricultura se encontraron sin trabajo, por lo que emigraron a las ciudades, generando así un saldo migratorio negativo en las zonas rurales, es decir, se fueron más personas de las que llegaron. A este hecho se le conoce como éxodo rural. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/%C3%89xodo_rural',
                lat: ['latitude1=,', 'latitude2=,', 'latitude3=,', 'latitude4=,'],
                long: ['longitude1=,', 'longitude2=,', 'longitude3=,', 'longitude4=,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=,', 'tooltip2=,', 'tooltip3=,', 'tooltip4=,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Compara un punto oscuro y un punto iluminado (color verde) para ver la diferencia', '', '', ''],
                comp: true
            },
            //Materia y energía
            {
                id: '/alumno/materia/1',
                ob: '1',
                theme: 'materia',
                title: 'Buscando una central eólica',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-juego-cohete-cometa-caricatura_138676-2525.jpg',
                statement: 'Ziggy va a visitar Estados Unidos de América, concretamente a la región de California y la provincia de Kern para buscar una central eólica. Ayúdale a encontrarla entre los 4 puntos dados.',
                subtitle: 'Materia y energía: ejercicio 1',
                options: ['Mojave', 'McKittrick', 'Blackwells Corner', 'Glennville'],
                pills: 'Correcto. En Mojave hace más viento que en el resto de opciones, por lo que es el mejor sitio para situar una central eólica. De hecho la tercera central eólica más grande del mundo se encuentra en ese punto. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Energ%C3%ADa_eólica_en_Estados_Unidos',
                lat: ['latitude1=35.0146,', 'latitude2=35.30486,', 'latitude3=35.6143,', 'latitude4=35.72876,'],
                long: ['longitude1=-118.19253,', 'longitude2=-119.62338,', 'longitude3=-119.86819,', 'longitude4=-118.70372,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Mojave,', 'tooltip2=McKittrick,', 'tooltip3=Blackwells Corner,', 'tooltip4=Glennville,'],
                difficulty: 'A',
                energy: 1,
                hints: ['Para que giren los molinos de la central eólica se necesita viento', 'Utiliza el bloque viento', '', ''],
                comp: false
            },
            {
                id: '/alumno/materia/2',
                ob: '2',
                theme: 'materia',
                title: 'Dusty y el aire',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-ilustracion-icono-historieta-tierra-globo-aire-caliente-concepto-icono-transporte-ciencia-aislado-estilo-dibujos-animados-plana_138676-2092.jpg',
                statement: 'Dusty le reta a Ziggy a que acierte cuál de las siguientes afirmaciones es falsa. Ve con Ziggy a España y utiliza el bloque "Dióxido de azufre" para ayudar a Ziggy a elegir la opción incorrecta.',
                subtitle: 'Materia y energía: ejercicio 2',
                options: ['El aire es una mezcla de gases heterogénea', 'El aire es una mezcla de gases homogénea', 'La composición del aire puede variar, por eso la cantidad de dióxido de azufre es diferente dependidendo del lugar', 'Lo que se ve en el mapa es sólo un componente del aire, ya que al ser una mezcla está formado por muchos más'],
                pills: 'Correcto. El aire no es una mezcla heterogénea, sino homogénea, ya que sus componentes no se pueden distinguir a simple vista. Además, su composición varía en función de muchos factores. Si quieres saber más consulta la web',
                web: 'https://es.wikipedia.org/wiki/Aire',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 3,
                hints: ['Una mezcla heterogénea es aquella en la que los componentes se pueden distinguir', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/materia/3',
                ob: '3',
                theme: 'materia',
                title: 'La temperatura y la presión en China',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-funcionamiento-portatil-icono-tecnologia-ciencia_138676-1974.jpg',
                statement: 'Acompaña a Zigy a China para crear dos mapas, uno con el bloque "Presión atmosférica" y otro con el bloque "Temperatura del aire". Ayuda a Ziggy a escoger cuál de las siguientes afirmaciones es verdadera.',
                subtitle: 'Materia y energía: ejercicio 3',
                options: ['La presión aumenta y disminuye a la vez que la temperatura', 'No existe una relación entre presión y temperatura', 'Cuando la presión aumenta la temperatura disminuye', 'Cuando la presión disminuye la temperatura aumenta'],
                pills: 'Correcto. Como puedes observar la presión de un gas (en este caso el aire) es directamente proporcional a su temperatura: Si aumentamos la temperatura aumentará la presión y si disminuimos la temperatura disminuirá la presión. A esto se le conoce como la Ley de Gay-Lussac. Si quieres saber más visita la web.',
                web: 'https://www.educaplus.org/gases/ley_gaylussac.html#:~:text=La%20presi%C3%B3n%20del%20gas%20es,la%20temperatura%2C%20disminuir%C3%A1%20la%20presi%C3%B3n.',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 3,
                hints: ['Fíjate bien en los colores de las leyendas', 'Puedes ver la relación si eliges dos puntos diferentes de China y ves cómo cambian', 'Observa que en el mapa de presión las zonas de color azul se corresponden con las zonas de color verde del mapa de temperatura', ''],
                comp: true
            },
            {
                id: '/alumno/materia/4',
                ob: '4',
                theme: 'materia',
                title: 'La altura y la presión en Chuquisaca',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-vuelo-lapiz-cohete-caricatura_138676-2359.jpg',
                statement: 'Acompaña a Ziggy a la región de Chuquisaca en Bolivia para crear dos mapas, uno con el bloque "Presión atmosférica" y otro con el bloque ¨Relieve". Ayuda a Ziggy a escoger cuál de las siguientes pciones es la correcta.',
                subtitle: 'Materia y energía: ejercicio 4',
                options: ['La presión aumenta y disminuye a la vez que la temperatura', 'No existe relación entre presión y altura', 'La presión aumenta y disminuye a la vez que la altura', 'Contra más alto estemos mayor presión habrá'],
                pills: 'Correcto. La presión en la atmósfera no es igual en todas partes, ya que depende del peso del aire. Por eso a nivel del mar es alta, pero a mayor altura, al haber menos aire por encima de nuestras cabezas, la presión disminuye. Si quieres saber más visita la web.',
                web: 'http://meteolab.fis.ucm.es/meteorologia/presion-atmosferica--2#:~:text=La%20presi%C3%B3n%20en%20la%20atm%C3%B3sfera%20no%20es%20igual%20en%20todas%20partes.&text=A%20mayor%20altura%2C%20menor%20cantidad,su%20peso%20disminuya%20a%C3%BAn%20m%C3%A1s.',
                lat: ['latitude1=,', 'latitude2=,', 'latitude3=,', 'latitude4=,'],
                long: ['longitude1=,', 'longitude2=,', 'longitude3=,', 'longitude4=,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=,', 'tooltip2=,', 'tooltip3=,', 'tooltip4=,'],
                difficulty: 'B',
                energy: 2,
                hints: ['Fíjate bien en los colores de las leyendas', 'Puedes ver la relación si eliges dos puntos de Chuquisaca y ves cómo cambian ', 'Observa que en el mapa de presión las zonas de color azul se corresponden con las zonas blancas del mapa de altitud', ''],
                comp: true
            },
            //Climas
            {
                id: '/alumno/climas/1',
                ob: '1',
                theme: 'climas',
                title: 'Ziggy adivina el clima de Filipinas',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-sosteniendo-paraguas-lluvia-ilustracion-dibujos-animados_138676-2740.jpg',
                statement: 'Ziggy nos lleva de visita a Filipinas y utiliza el bloque "Lluvias" para saber si necesita paraguas. Viendo la información en el mapa dile a Ziggy qué clima es para que sepa qué hacer.',
                subtitle: 'Climas: ejercicio 1',
                options: ['Clima ecuatorial o tropical húmedo', 'Clima árido o desértico', 'Clima mediterráneo', 'Clima semiárido o estepa'],
                pills: 'Correcto. Sólo con la información de las lluvias podemos saber que es un clima ecuatorial ya que recibe lluvias constantes y en gran cantidad y en el resto de opciones las precipitaciones son escasas. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Clima_ecuatorial_lluvioso#:~:text=El%20clima%20ecuatorial%20lluvioso%2C%20tropical,precipitaciones%20durante%20todo%20el%20a%C3%B1o%20(',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'A',
                energy: 3,
                hints: ['En los climas áridos apenas hay precipitaciones.', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/climas/2',
                ob: '2',
                theme: 'climas',
                title: 'Ziggy quiere ver estrellas',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-caja-dibujos-animados-vector-icono-ilustracion-icono-tecnologia-ciencia_138676-1982.jpg',
                statement: 'Acompaña a Ziggy a la Repúbica Democrática del Congo, a la región de Equateur y ayúdale a elegir qué sitio es el mejor para ver estrellas fugaces utilizando el bloque "Nubes".',
                subtitle: 'Climas: ejercicio 2',
                options: ['Elome', 'Isia', 'Yalikela', 'Betoko'],
                pills: 'Correcto. Como ya sabes, lo mejor para ver las estrellas es que la zona esté libre de nubes y Elome es la opción con menor cantidad de nubes. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Nube',
                lat: ['latitude1=-1.5881,', 'latitude2=0.12781,', 'latitude3=2.39361,', 'latitude4=-1.11283,'],
                long: ['longitude1=22.9087,', 'longitude2=18.28437,', 'longitude3=23.07303,', 'longitude4=19.64067,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Elome,', 'tooltip2=Isia,', 'tooltip3=Yalikela,', 'tooltip4=Betoko,'],
                difficulty: 'A',
                energy: 2,
                hints: ['Si hay muchas nubes Ziggy no va a poder ver el cielo nocturno', 'Observa qué punto es de un color más oscuro para saber en cuál hay menos nubes', '', ''],
                comp: false
            },
            {
                id: '/alumno/climas/3',
                ob: '3',
                theme: 'climas',
                title: 'Localizamos un anticiclón',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-funcionamiento-portatil-icono-tecnologia-ciencia_138676-1974.jpg',
                statement: 'Dusty le ha pasado a Ziggy una imagen del país Afganistán para observarla con el bloque "Presión a nivel del mar" y localizar en qué punto hay un anticiclón.',
                subtitle: 'Climas: ejercicio 3',
                options: ['Shaye Anjuman', 'Gekan', 'Tutachi', 'Sorubay'],
                pills: 'Correcto. Un anticiclón es una zona donde la presión atmosférica es alta y además superior a la presión del aire que le rodea. Los anticiclones provocan tiempo estable y ausencia de lluvias. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Anticicl%C3%B3n',
                lat: ['latitude1=35.8329,', 'latitude2=31.41675,', 'latitude3=34.99934,', 'latitude4=34.10014,'],
                long: ['longitude1=70.5125,', 'longitude2=62.49945,', 'longitude3=61.93145,', 'longitude4=70.79966,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Shaye Anjuman,', 'tooltip2=Gekan,', 'tooltip3=Tutachi,', 'tooltip4=Sorubay,'],
                difficulty: 'B',
                energy: 2,
                hints: ['El anticiclón es una zona donde la presión es diferente a las zonas que le rodean', '', '', ''],
                comp: false
            },
            {
                id: '/alumno/climas/4',
                ob: '4',
                theme: 'climas',
                title: 'La humedad del aire en Yukon',
                imageURL: 'https://image.freepik.com/vector-gratis/lindo-astronauta-sentado-ilustracion-vector-dibujos-animados-nube-concepto-tecnologia-ciencia-aislado-vector-premium-estilo-dibujos-animados-plana_138676-2215.jpg',
                statement: 'Acompaña a Ziggy a la región de Yukon, que se encuentra en Canadá, para utilizar el bloque "Temperatura de formación de niebla" y ayudarle a responder la siguiente pregunta: ¿En qué lugar hay más humedad en el aire?',
                subtitle: 'Climas: ejercicio 4',
                options: ['Lago Wellesley', 'Monte Logan', 'Parque Nacional Ivvavik', 'Lago Plume'],
                pills: 'Correcto. Contra mayor sea la temperatura a la que se forma la niebla mayor serála humedad presente en el aire, es decir, la cantidad de gotas en suspensión en tan grande que puede crearse niebla a temperatura más altas. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Niebla',
                lat: ['latitude1=62.3227,', 'latitude2=60.5683,', 'latitude3=69.1862,', 'latitude4=64.32855,'],
                long: ['longitude1=-139.9833,', 'longitude2=-140.406,', 'longitude3=-140.412,', 'longitude4=-131.93487,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Lago Wellesley,', 'tooltip2=Monte Logan,', 'tooltip3=Parque nacional Ivvavik,', 'tooltip4=Lago Plume,'],
                difficulty: 'C',
                energy: 2,
                hints: ['Para la misma temperatura, se creará niebla con más facilidad contra mayor sea la humedad', 'Contra mayor humedad, mayor la temperatura de formación de niebla', '', ''],
                comp: false
            },
            {
                id: '/alumno/climas/5',
                ob: '5',
                theme: 'climas',
                title: 'Expedición climática en Bordj Omar Driss',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-astronauta-bebiendo-cafe-icono-comida-bebida-ciencia_138676-1986.jpg',
                statement: 'Ziggy va a visitar Bordj Omar Driss, que se encuentra en la región de Illizi del país Algeria. Ziggy quiere saber más sobre el clima del lugar y para ello, Dusty le recomienda crear dos mapas utilizando como bloques los dos elementos más importantes que definen los climas. Ayuda a Ziggy a crear los mapas escogiendo los bloques adecuados y elige la opción correcta.',
                subtitle: 'Climas: ejercicio 5',
                options: ['El clima es seco desértico', 'El clima es oceánico', 'El clima es ecuatorial', 'El clima es polar'],
                pills: 'Correcto. Los elementos principales que definen el clima de un lugar son las lluvias y la temperatura, aunque hay otros como la humedad, presión atmosférica, nubosidad o viento. Como has podido observar, el clima de Bordj Omar Driss es seco desértico, ya que apenas hay precipitaciones y las temperaturas son cálidas. Mediante la creación de un mapa con el bloque "Luvias" y otro con el bloque "Temperatura del aire" se observan perfectamente las cualidades del clima seco desértico, además, puedes observar la poca vegetación en la zona, algo característico de este clima. Si quieres saber más visita la web.',
                web: 'https://es.wikipedia.org/wiki/Elementos_del_clima',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 1,
                hints: ['Dependiendo del clima necesitarás llevar abrigo o camiseta', 'Dependiendo del clima necesitarás paraguas o no', 'Crea un mapa con el bloque "Lluvias"', 'Crea otro mapa con el bloque "Temperatura del aire"'],
                comp: true
            },
            //Sector Primario
            {
                id: '/alumno/primario/1',
                ob: '1',
                theme: 'primario',
                title: 'La deforestación en Brasil',
                imageURL: 'https://image.freepik.com/vector-gratis/ilustracion-dibujos-animados-astronauta-montando-cohetes-estilo-dibujos-animados-plana_138676-2846.jpg',
                statement: 'Ziggy va a observar la región de Brasil llamada Mato Grosso Do Sul con el bloque "Árboles" para ver las zonas más deforestadas. ¿Puedes decirle a Ziggy qué actividad del sector primario es la más común en esta zona observando el mapa?',
                subtitle: 'Sector primario: ejercicio 1',
                options: ['Agricultura', 'Pesca', 'Ganadería', 'Minería'],
                pills: 'Correcto. Brasil es el país del mundo que más sufre con la deforestación y la razón principal es la tala de árboles para la creación de campos de cultivo. Para más información visita la web.',
                web: 'https://es.wikipedia.org/wiki/Deforestaci%C3%B3n_en_Brasil',
                lat: [],
                long: [],
                popup: [],
                tooltip: [],
                difficulty: 'B',
                energy: 2,
                hints: ['Utiliza el bloque "Árboles" para ver las zonas en las que no hay árboles (zonas oscuras)', 'Utiliza el bloque "Nivel de transparencia" con un nivel medio para ver lo que hay debajo de las zonas oscuras', 'Acércate a las zonas oscuras para ver con claridad de qué se trata', ''],
                comp: false
            },
            {
                id: '/alumno/primario/2',
                ob: '2',
                theme: 'primario',
                title: 'Buscando una mina en Perú',
                imageURL: 'https://image.freepik.com/vector-gratis/astronauta-lindo-leyo-libro-ilustracion-icono-historieta-planeta-concepto-icono-tecnologia-ciencia-aislado-estilo-dibujos-animados-plana_138676-2091.jpg',
                statement: 'Dusty reta a Ziggy a encontrar una mina con el bloque "Metano" en Perú. ¿Eres capaz de ayudar a Ziggy a escoger el punto donde es más probables que haya una?',
                subtitle: 'Sector primario: ejercicio 2',
                options: ['Sechura', 'Pampa Hermosa', 'La Colpa', 'Iberia'],
                pills: 'Correcto. Una de las principales causas humanas del metano en la atmósfera es la minería, es por eso que mediante los satélites se pueden localizar minas y canteras fácilmente observando los puntos con alta concentración de metano. Si quieres saber más consulta la siguiente web.',
                web: 'https://es.wikipedia.org/wiki/Miner%C3%ADa',
                lat: ['latitude1=-5.9281,', 'latitude2=-6.11403,', 'latitude3=-7.83421,', 'latitude4=-11.40568,'],
                long: ['longitude1=-80.7769,', 'longitude2=-76.27434,', 'longitude3=-78.0754,', 'longitude4=-69.48933,'],
                popup: ['popup1=,', 'popup2=,', 'popup3=,', 'popup4=,'],
                tooltip: ['tooltip1=Sechura,', 'tooltip2=Pampa Hermosa,', 'tooltip3=La Colpa,', 'tooltip4=Iberia,'],
                difficulty: 'B',
                energy: 3,
                hints: ['Hay un punto donde la concentración de metano varía mucho respecto al resto', '', '', ''],
                comp: false
            },
        ];
        this.api = "https://ynsat.herokuapp.com";
    }
    //Pruebas de la API REST ejercicios 
    getEjerciciosAPI() {
        const path = `${this.api}/ejercicios`;
        return this.http.get(path);
    }
    getEjercicioAPI(id) {
        const path = `${this.api}/ejercicios${id}`;
        return this.http.get(path);
    }
    addEjerciciosAPI(ejercicio) {
        const path = `${this.api}/ejercicios`;
        return this.http.put(path, ejercicio);
    }
    //No funciona
    getEjercicioMAP(id) {
        const path = `${this.api}/ejercicios${id}`;
        return this.http.get(path);
    }
    //Estos son los que estamos usando y funcionan bien
    getEjercicios(type) {
        //Look inside the JSON to find the theme according of the type received
        var results = [];
        var searchField = "theme";
        var searchVal = type;
        for (var i = 0; i < this.ejercicios.length; i++) {
            if (this.ejercicios[i][searchField] == searchVal) {
                results.push(this.ejercicios[i]);
            }
        }
        return results;
    }
    getEjercicio(ejercicioId) {
        return Object.assign({}, this.ejercicios.find(ejercicio => {
            return ejercicio.id === ejercicioId;
        }));
    }
};
EjerciciosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EjerciciosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EjerciciosService);



/***/ }),

/***/ "mB+x":
/*!************************************************!*\
  !*** ./src/app/users API/api/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "ZxVS");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "LEmc");
/**
 * Log and info of the users
 * How to create, log and manage users
 *
 * OpenAPI spec version: 0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */





let LoginService = class LoginService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://khalil-app-306611.ew.r.appspot.com/KhalilApp';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    authPost(body, observe = 'body', reportProgress = false) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling authPost.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.request('post', `${this.basePath}/auth/`, {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginService);



/***/ }),

/***/ "mwcn":
/*!****************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/dual-blockly/blockeado-s-dual.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly */ "VMpS");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1__);
//-------------------------------------//
//Importación de librerías necesarias. Blockly con todo y Javascript para hacer código js (Seguramente cambiaremos a Python!!!!!!!!) 





//-------------------------------------//
//Definición de ls bloques mediante un array de JSON
blockly__WEBPACK_IMPORTED_MODULE_0__["defineBlocksWithJsonArray"]([

  //TERRESTIAL FRONTIERS
  {
    "type": "look_country",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe el país",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "paises",
      }
    ],
    "nextStatement": [
    "country-layer",
    "country-date",
    "country-addition",
    "country-region"
  ],
  "extensions": ["student_dynamic_dual"],
  "colour": 315
  },

  {
    "type": "look_regions",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe la región",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "regiones",
      }
    ],
    "previousStatement": "country-region",
    "nextStatement": [
      "region-layer",
      "region-date",
      "region-addition",
      "region-city"
  ],
  "extensions": ["dynamic_extension2_dual"],
  "colour": 180
  },

  {
    "type": "look_province",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe la provincia",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "provincias",
      }
    ],
    "previousStatement": "region-city",
    "nextStatement": [
      "city-layer",
      "city-date",
      "city-addition"
  ],
  "extensions": ["dynamic_extension3_dual"],
  "colour": 127
},

//OCEANIC FRONTIERS
{
  "type": "look_oceans",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "input1",
      "text": "Escribe la región marina",
    },
    {
      "type": "input_dummy",
      "name": "INPUT",
      "text": "agua",
    }
  ],
  "nextStatement": [
  "country-layer",
  "country-date",
  "country-addition",
  "country-region"
],
"extensions": ["big_water_dynamic_dual"],
"colour": 90
},
{
  "type": "look_seas",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "input1",
      "text": "Escribe la región marina",
    },
    {
      "type": "input_dummy",
      "name": "INPUT",
      "text": "agua",
    }
  ],
  "nextStatement": [
  "country-layer",
  "country-date",
  "country-addition",
  "country-region"
],
"extensions": ["big_mares_dynamic_dual"],
"colour": 210
},


//Vegetación
{
  "type": "layer_tree",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/125/125215.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TREE",
      "text": "Árboles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 90,
},
{
  "type": "layer_ndvi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/128/128818.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDVI",
      "text": "Cantidad de vegetación"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 100,
},
{
  "type": "layer_fires",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/114/114466.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "FIRES",
      "text": "incendios"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 110,
},
{
  "type": "layer_tree_loss",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/98/98442.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TREE_LOSS",
      "text": "Pérdida de árboles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 120,
},
{
  "type": "layer_gcvi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/125/125203.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "GCVI",
      "text": "Salud de Vegetación"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 130,
}, 



//Suelo
{
  "type": "layer_ndmi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/31/31655.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDMI",
      "text": "Humedad del suelo"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 0,
},
{
  "type": "layer_alt",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120198.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "ALT",
      "text": "Relieve"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 10,
},
{
  "type": "layer_cover",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/15/15719.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "COVER",
      "text": "Tipo de suelo"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 20,
},
{
  "type": "layer_landforms",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/93/93678.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "LANDFORMS",
      "text": "Tipos de relieve"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 30,
},



//Atmósfera
{
  "type": "layer_tot_prep",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/116/116257.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TOT_PREP",
      "text": "Lluvias"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 165,
},
{
  "type": "layer_cloud",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/128/128853.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CLOUD",
      "text": "Nubes"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 168,
},
{
  "type": "layer_surf_press",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/119/119487.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SURF_PRESS",
      "text": "Presión"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 171,
},
{
  "type": "layer_dewp_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/12/12209.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "DEWP_TEMP",
      "text": "Temperatura para niebla"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 174,
},
{
  "type": "layer_air_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120780.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "AIR_TEMP",
      "text": "Temperatura del aire"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 177,
},
{
  "type": "layer_10m_wind",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/116/116720.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "10M_WIND",
      "text": "Viento"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 180,
},



//Agua
{
  "type": "layer_ndwi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102438.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDWI",
      "text": "Lagos"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 210,
},
{
  "type": "layer_sea_press",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/119/119487.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SEA_PRESS",
      "text": "Presión en el mar"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 220,
},
{
  "type": "layer_sea_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120779.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SEA_TEMP",
      "text": "Temperatura del mar"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 230,
},
{
  "type": "layer_river",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102444.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "RIVER",
      "text": "Ríos"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 240,
},



//Gases
{
  "type": "layer_aer_ai",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/104/104960.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "AER_AI",
      "text": "Aerosoles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 60,
},
{
  "type": "layer_so2",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/108/108256.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SO2",
      "text": "Dióxido de azufre"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 62.5,
},
{
  "type": "layer_no2",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/70/70927.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NO2",
      "text": "Dióxido de nitrógeno"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 65.0,
},
{
  "type": "layer_hcho",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/61/61294.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "HCHO",
      "text": "Metanal"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 67.5,
},
{
  "type": "layer_ch4",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102880.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CH4",
      "text": "Metano"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 70.0,
},
{
  "type": "layer_co",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/130/130068.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CO",
      "text": "Monóxido de carbono"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 72.5,
},
{
  "type": "layer_o3",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/103/103678.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "O3",
      "text": "Ozono"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 75.0,
},



//Civilización
{
  "type": "layer_den",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/33/33887.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "DEN",
      "text": "Densidad de población"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#D1D1D1",
},
{
  "type": "layer_light",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/113/113742.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "LIGHT",
      "text": "Luces nocturnas"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#C3C3C3",
},
{
  "type": "layer_human",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/129/129863.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "HUMAN",
      "text": "Modificado por el humano"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#ACACAC",
},


//Specials
{
  "type": "transparency_level",
  "message0": "Nivel de transparencia %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "transparency",
      "options": [
        [
          "Bajo",
          "0.75"
        ],
        [
          "Medio",
          "0.5"
        ],
        [
          "Alto",
          "0.3"
        ],
        [
          "Nada",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": [
  "layer-date"
],
  "nextStatement": [
  "layer-date"
],
  "colour": "#CF71BB",
  "tooltip": "",
  "helpUrl": ""
}
]);



//-------------------------------------//

var list=[["Afganistán","Afghanistan"],["Albania","Albania"],["Argelia","Algeria"],["Andorra","Andorra"],["Angola","Angola"],["Antigua y Barbuda","Antigua and Barbuda"],["Argentina","Argentina"],["Armenia","Armenia"],["Australia","Australia"],["Austria","Austria"],["Azerbaiyán","Azerbaijan"],["Bahamas","Bahamas"],["Bahrein","Bahrain"],["Bangladesh","Bangladesh"],["Barbados","Barbados"],["Bielorrusia","Belarus"],["Bélgica","Belgium"],["Belice","Belize"],["Benin","Benin"],["Bután","Bhutan"],["Bolivia","Bolivia"],["Bosnia y Herzegovina","Bosnia and Herzegovina"],["Botsuana","Botswana"],["Brasil","Brazil"],["Brunei Darussalam","Brunei Darussalam"],["Bulgaria","Bulgaria"],["Burkina Faso","Burkina Faso"],["Burundi","Burundi"],["Cabo Verde","Cabo Verde"],["Camboya","Cambodia"],["Camerún","Cameroon"],["Canadá","Canada"],["República Centroafricana","Central African Republic"],["Chad","Chad"],["Chile","Chile"],["China","China"],["Colombia","Colombia"],["Comoras","Comoros"],["Congo","Congo"],["Islas Cook","Cook Islands"],["Costa Rica","Costa Rica"],["Croacia","Croatia"],["Cuba","Cuba"],["Chipre","Cyprus"],["Chequia","Czech Republic"],["Costa de Marfil","C�te d'Ivoire"],["Corea del Norte","Dem People's Rep of Korea"],["República Democrática del Congo","Democratic Republic of the Congo"],["Dinamarca","Denmark"],["Djibouti","Djibouti"],["Dominica","Dominica"],["República Dominicana","Dominican Republic"],["Ecuador","Ecuador"],["Egipto","Egypt"],["El Salvador","El Salvador"],["Guinea Ecuatorial","Equatorial Guinea"],["Eritrea","Eritrea"],["Estonia","Estonia"],["Esuatini","Eswatini"],["Etiopía","Ethiopia"],["Islas Faroe","Faroe Islands"],["Fiji","Fiji"],["Finlandia","Finland"],["Francia","France"],["Gabón","Gabon"],["Gambia","Gambia"],["Georgia","Georgia"],["Alemania","Germany"],["Ghana","Ghana"],["Grecia","Greece"],["Granada","Grenada"],["Guatemala","Guatemala"],["Guinea","Guinea"],["Guinea-Bissau","Guinea-Bissau"],["Guayana","Guyana"],["Haití","Haiti"],["Honduras","Honduras"],["Hungría","Hungary"],["Islandia","Iceland"],["India","India"],["Indonesia","Indonesia"],["Irán","Iran (Islamic Republic of)"],["Irak","Iraq"],["Irlanda","Ireland"],["Israel","Israel"],["Italia","Italy"],["Jamaica","Jamaica"],["Japón","Japan"],["Jordania","Jordan"],["Kazajistán","Kazakhstan"],["Kenia","Kenya"],["Kiribati","Kiribati"],["Kuwait","Kuwait"],["Kirguistán","Kyrgyzstan"],["República Democrática Popular de Lao","Lao People's Democratic Republic"],["Letonia","Latvia"],["Líbano","Lebanon"],["Lesoto","Lesotho"],["Liberia","Liberia"],["Libia","Libya"],["Lituania","Lithuania"],["Luxemburgo","Luxembourg"],["Madagascar","Madagascar"],["Malawi","Malawi"],["Malasia","Malaysia"],["Maldivas","Maldives"],["Mali","Mali"],["Malta","Malta"],["Islas Marshall","Marshall Islands"],["Mauritania","Mauritania"],["Mauricio","Mauritius"],["México","Mexico"],["Micronesia","Micronesia (Federated States of)"],["Mónaco","Monaco"],["Mongolia","Mongolia"],["Montenegro","Montenegro"],["Marruecos","Morocco"],["Mozambique","Mozambique"],["Myanmar","Myanmar"],["Namibia","Namibia"],["Nauru","Nauru"],["Nepal","Nepal"],["Países Bajos","Netherlands"],["Nueva Zelanda","New Zealand"],["Nicaragua","Nicaragua"],["Níger","Niger"],["Nigeria","Nigeria"],["Niue","Niue"],["Macedonia del Norte","North Macedonia"],["Noruega","Norway"],["Omán","Oman"],["Pakistán","Pakistan"],["Palau","Palau"],["Panamá","Panama"],["Papúa Nueva Guinea","Papua New Guinea"],["Paraguay","Paraguay"],["Perú","Peru"],["Filipinas","Philippines"],["Polonia","Poland"],["Portugal","Portugal"],["Katar","Qatar"],["República de Corea","Republic of Korea"],["República de Moldavia","Republic of Moldova"],["Rumanía","Romania"],["Rusia","Russian Federation"],["Ruanda","Rwanda"],["Saint Kitts y Nevis","Saint Kitts and Nevis"],["Santa Lucía","Saint Lucia"],["San Vicente y las Granadinas","Saint Vincent and the Grenadines"],["Samoa","Samoa"],["San Marino","San Marino"],["Santo Tomé y Príncipe","Sao Tome and Principe"],["Arabia Saudita","Saudi Arabia"],["Senegal","Senegal"],["Serbia","Serbia"],["Seychelles","Seychelles"],["Sierra Leona","Sierra Leone"],["Singapur","Singapore"],["Eslovaquia","Slovakia"],["Eslovenia","Slovenia"],["Islas Salomón","Solomon Islands"],["Somalia","Somalia"],["Sudáfrica","South Africa"],["Sudán del Sur","South Sudan"],["España","Spain"],["Sri Lanka","Sri Lanka"],["Sudán","Sudan"],["Suriname","Suriname"],["Suecia","Sweden"],["Suiza","Switzerland"],["República Árabe Siria","Syrian Arab Republic"],["Tayikistán","Tajikistan"],["Tailandia","Thailand"],["Timor-Leste","Timor-Leste"],["Togo","Togo"],["Tokelau","Tokelau"],["Tonga","Tonga"],["Trinidad y Tobago","Trinidad and Tobago"],["Túnez","Tunisia"],["Turquía","Turkey"],["Turkmenistán","Turkmenistan"],["Tuvalu","Tuvalu"],["Uganda","Uganda"],["Ucrania","Ukraine"],["Emiratos Árabes Unidos","United Arab Emirates"],["Reino Unido","U.K. of Great Britain and Northern Ireland"],["República Unida de Tanzania","United Republic of Tanzania"],["Estados Unidos de América","United States of America"],["Uruguay","Uruguay"],["Uzbekistán","Uzbekistan"],["Vanuatu","Vanuatu"],["Venezuela","Venezuela (Bolivarian Republic of)"],["Vietnam","Viet Nam"],["Yemen","Yemen"],["Zambia","Zambia"],["Zimbabue","Zimbabwe"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('student_dynamic_dual',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "españa";
          var block = this.getSourceBlock();
          for (var i=0 ; i < list.length ; i++)
        {
          options.push([list[i][0],list[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < list.length ; j++)
        {
          if (list[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([list[j][0],list[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'country'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_country'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code_country = 'country=' + dropdown_value + ',';

  return code_country;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension2_dual',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listRegDual');
        var listLatinRaw=localStorage.getItem('listLatinRegDual');
        if (listRaw==null && listLatinRaw==null){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listRaw==null ){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listLatinRaw==null){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listLatinRaw=="None"){
          var listReg=listRaw.split([", "])
          var listLatinReg=listRaw.split([", "])
        }
        else{
          var listReg=listRaw.split([", "])
          var listLatinReg=listLatinRaw.split([", "])
        }
        var options = [];
        var coincidence = [];
        var searchVal = listReg[0];
        var block = this.getSourceBlock();
        for (var i=0 ; i < listReg.length ; i++)
      {
        options.push([listLatinReg[i],listReg[i]]);
      }
        if (block){
          searchVal = block.getFieldValue('input1');
        }
        for (var j=0 ; j < listReg.length ; j++)
      {
        if (listReg[j].toLowerCase().includes(searchVal.toLowerCase())){
          coincidence.push([listLatinReg[j],listReg[j]]);
        }
        if (coincidence.length > 0){
           options = coincidence;
        }
      }
        return options;
      }
    ),'region'
  );
});

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_regions'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'region=' + dropdown_value + ',';
  return code;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension3_dual',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listProvDual');
        var listLatinRaw=localStorage.getItem('listLatinProvDual');
        if (listRaw==null && listLatinRaw==null){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listRaw==null ){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listLatinRaw==null ){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listLatinRaw=="None"){
          var listProv=listRaw.split([", "])
          var listLatinProv=listRaw.split([", "])
        }
        else{
          var listProv=listRaw.split([", "])
          var listLatinProv=listLatinRaw.split([", "])
        }
        var options = [];
        var coincidence = [];
        var searchVal = listProv[0];
        var block = this.getSourceBlock();
        for (var i=0 ; i < listProv.length ; i++)
      {
        options.push([listLatinProv[i],listProv[i]]);
      }
        if (block){
          searchVal = block.getFieldValue('input1');
        }
        for (var j=0 ; j < listProv.length ; j++)
      {
        if (listProv[j].toLowerCase().includes(searchVal.toLowerCase())){
          coincidence.push([listLatinProv[j],listProv[j]]);
        }
        if (coincidence.length > 0){
           options = coincidence;
        }
      }
        return options;
      }
      ), 'province');
   }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_province'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'province=' + dropdown_value + ',';
  return code;
};


//OCEANIC FRONTIERS
var water=[["Antártico","Antartic Ocean"],["Mares Árabes","Arabian Seas"],["Ártico","Artic Ocean"],["Atlántico","Atlantic Ocean"],["Mar Negro","Black Sea"],["Mares de Centro América","Central American Seas"],["Mares del Este Asiático","East Asian Seas"],["Índico","Indian Ocean"],["Mar Mediterráneo","Mediterranean Sea"],["Mares de Norte América","North American Seas"],["Mares del Norte de Europa","North European Seas"],["Pacífico","Pacific Ocean"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_water_dynamic_dual',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "mediterráneo";
          var block = this.getSourceBlock();
          for (var i=0 ; i < water.length ; i++)
        {
          options.push([water[i][0],water[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < water.length ; j++)
        {
          if (water[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([water[j][0],water[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'ocean'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_oceans'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'ocean=' + dropdown_value + ',';

  return code;
};

var mares=[["Mar Egeo","Aegean Sea"],["Mar de Alborán","Alboran Sea"],["Andam","Andaman or Burma Sea"],["Mar Arabe","Arabian Sea"],["Arafura mar","Arafura Sea"],["océano Ártico","Arctic Ocean"],["Bahía de BAFFIN","Baffin Bay"],["Baleares (Mar ibérico)","Balearic (Iberian Sea)"],["Mar Bali","Bali Sea"],["mar Báltico","Baltic Sea"],["Banda Sea","Banda Sea"],["Marentsz Mar","Barentsz Sea"],["Estrecho de bajo","Bass Strait"],["Bahía de Bengala","Bay of Bengal"],["Golfo de Vizcaya","Bay of Biscay"],["Bahía de Fundy","Bay of Fundy"],["Marufort","Beaufort Sea"],["Mar de Bering","Bering Sea"],["Bismarck Sea","Bismarck Sea"],["Mar Negro","Black Sea"],["Canal de bristol","Bristol Channel"],["Mar Caribe","Caribbean Sea"],["Celebes mar","Celebes Sea"],["mar Céltico","Celtic Sea"],["Mar de ceram","Ceram Sea"],["Mar Chukchi","Chukchi Sea"],["Coral Sea","Coral Sea"],["Estrecho de Davis","Davis Strait"],["Mar Siberiano Oriental","East Siberian Sea"],["Mar de China oriental","Eastern China Sea"],["canal inglés","English Channel"],["Flores Sea","Flores Sea"],["Gran bight australiano","Great Australian Bight"],["Mar de Groenlandia","Greenland Sea"],["Golfo de Aden","Gulf of Aden"],["Golfo de Alaska","Gulf of Alaska"],["Golfo de Aqaba","Gulf of Aqaba"],["Golfo de boni.","Gulf of Boni"],["Golfo de ambos","Gulf of Bothnia"],["Golfo de California","Gulf of California"],["Golfo de Finlandia","Gulf of Finland"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de México","Gulf of Mexico"],["Golfo de Omán","Gulf of Oman"],["Golfo de Riga","Gulf of Riga"],["Golfo de St. Lawrence","Gulf of St. Lawrence"],["Golfo de Suez","Gulf of Suez"],["Golfo de Tailandia","Gulf of Thailand"],["Golfo de Tomini","Gulf of Tomini"],["Mar de halmahero","Halmahera Sea"],["Bahía Hudson","Hudson Bay"],["Estrecho de Hudson","Hudson Strait"],["océano Indio","Indian Ocean"],["Mas interiores de la costa oeste de Escocia","Inner Seas off the West Coast of Scotland"],["mar Jónico","Ionian Sea"],["Mar irlandés y canal de San Jorge","Irish Sea and St. George's Channel"],["Mar de Japón","Japan Sea"],["Java Sea","Java Sea"],["Mar Kara","Kara Sea"],["Kattegat","Kattegat"],["Labrador Sea","Labrador Sea"],["Laccadive Sea","Laccadive Sea"],["Mar de lapevo","Laptev Sea"],["Mar Liguria","Ligurian Sea"],["Lincoln mar","Lincoln Sea"],["Estrecho de Makassar","Makassar Strait"],["Estrecho de malacca","Malacca Strait"],["Mar Mediterráneo - Cuenca Oriental","Mediterranean Sea - Eastern Basin"],["Mar Mediterráneo - Cuenca occidental","Mediterranean Sea - Western Basin"],["Mar molecular","Molukka Sea"],["Canal de mozambique","Mozambique Channel"],["océano Atlántico Norte","North Atlantic Ocean"],["océano Pacífico Norte","North Pacific Ocean"],["mar del Norte","North Sea"],["Mar de Noruega","Norwegian Sea"],["Golfo pérsico","Persian Gulf"],["Mar filipino","Philippine Sea"],["Red Sea","Red Sea"],["Rio de La Plata","Rio de La Plata"],["Tu mar","Savu Sea"],["Mar de Azov","Sea of Azov"],["Mar de Mármara","Sea of Marmara"],["Mar de Okhotsk","Sea of Okhotsk"],["Ver o interior","Seto Naikai or Inland Sea"],["Skagerrak","Skagerrak"],["Solomon Mar","Solomon Sea"],["Océano Atlántico Sur","South Atlantic Ocean"],["mar del Sur de China","South China Sea"],["oceano Pacifico del Sur","South Pacific Ocean"],["Oceano del Sur","Southern Ocean"],["Estrecho de Gibraltar","Strait of Gibraltar"],["Mar del mar","Sulu Sea"],["Mar de Tasmania","Tasman Sea"],["Las aguas costeras del sureste de Alaska y la Columbia Británica.","The Coastal Waters of Southeast Alaska and British Columbia"],["Los pasajes noroeste","The Northwestern Passages"],["Timor Sea","Timor Sea"],["Mar Tirreno","Tyrrhenian Sea"],["mar Blanco","White Sea"],["Mar Amarillo","Yellow Sea"]]
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_mares_dynamic_dual',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "albo";
          var block = this.getSourceBlock();
          for (var i=0 ; i < mares.length ; i++)
        {
          options.push([mares[i][0],mares[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < mares.length ; j++)
        {
          if (mares[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([mares[j][0],mares[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'sea'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_seas'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'sea=' + dropdown_value + ',';

  return code;
};

//Vegetación 
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tree'] = function(block) {
  var code = 'layer=TREE,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndvi'] = function(block) {
  var code = 'layer=NDVI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_fires'] = function(block) {
  var code = 'layer=FIRE,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tree_loss'] = function(block) {
  var code = 'layer=TREE_LOSS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_gcvi'] = function(block) {
  var code = 'layer=GCVI,';
  return code;
};

//Suelo
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndmi'] = function(block) {
  var code = 'layer=NDMI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_alt'] = function(block) {
  var code = 'layer=ALT,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_cover'] = function(block) {
  var code = 'layer=COVER,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_landforms'] = function(block) {
  var code = 'layer=LANDFORMS,';
  return code;
};

//Atmósfera
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tot_prep'] = function(block) {
  var code = 'layer=TOT_PREP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_cloud'] = function(block) {
  var code = 'layer=CLOUDS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_surf_press'] = function(block) {
  var code = 'layer=SURF_PRESS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_dewp_temp'] = function(block) {
  var code = 'layer=DEWP_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_air_temp'] = function(block) {
  var code = 'layer=AIR_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_10m_wind'] = function(block) {
  var code = 'layer=10M_WIND,';
  return code;
};



//Agua
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndwi'] = function(block) {
  var code = 'layer=NDWI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_sea_press'] = function(block) {
  var code = 'layer=SEA_PRESS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_sea_temp'] = function(block) {
  var code = 'layer=SEA_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_river'] = function(block) {
  var code = 'layer=RIVER,';
  return code;
};


//Gases
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_aer_ai'] = function(block) {
  var code = 'layer=AER_AI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_so2'] = function(block) {
  var code = 'layer=SO2,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_no2'] = function(block) {
  var code = 'layer=NO2,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_hcho'] = function(block) {
  var code = 'layer=HCHO,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ch4'] = function(block) {
  var code = 'layer=CH4,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_co'] = function(block) {
  var code = 'layer=CO,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_o3'] = function(block) {
  var code = 'layer=O3,';
  return code;
};


//Civilización
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_den'] = function(block) {
  var code = 'layer=DEN,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_light'] = function(block) {
  var code = 'layer=LIGHT,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_human'] = function(block) {
  var code = 'layer=HUMAN,';
  return code;
};


//Special
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['transparency_level'] = function(block) {
  var value = block.getFieldValue('transparency');
  var code = 'layer_opacity=' + value + ',';
  return code;
};

/***/ }),

/***/ "nORd":
/*!******************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/blockly/blockeado-s.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly */ "VMpS");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_1__);
//-------------------------------------//
//Importación de librerías necesarias. Blockly con todo y Javascript para hacer código js (Seguramente cambiaremos a Python!!!!!!!!) 





//-------------------------------------//
//Definición de ls bloques mediante un array de JSON
blockly__WEBPACK_IMPORTED_MODULE_0__["defineBlocksWithJsonArray"]([

  //TERRESTIAL FRONTIERS
  {
    "type": "buscar_pais",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe el país",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "paises",
      }
    ],
    "nextStatement": [
    "country-layer",
    "country-date",
    "country-addition",
    "country-region"
  ],
  "extensions": ["student_dynamic"],
  "colour": 315
  },

  {
    "type": "buscar_regiones",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe la región",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "regiones",
      }
    ],
    "previousStatement": "country-region",
    "nextStatement": [
      "region-layer",
      "region-date",
      "region-addition",
      "region-city"
  ],
  "extensions": ["dynamic_extension2"],
  "colour": 180
  },

  {
    "type": "buscar_provincia",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "input1",
        "text": "Escribe la provincia",
      },
      {
        "type": "input_dummy",
        "name": "INPUT",
        "text": "provincias",
      }
    ],
    "previousStatement": "region-city",
    "nextStatement": [
      "city-layer",
      "city-date",
      "city-addition"
  ],
  "extensions": ["dynamic_extension3"],
  "colour": 127
},

//OCEANIC FRONTIERS
{
  "type": "buscar_oceano",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "input1",
      "text": "Escribe la región marina",
    },
    {
      "type": "input_dummy",
      "name": "INPUT",
      "text": "agua",
    }
  ],
  "nextStatement": [
  "country-layer",
  "country-date",
  "country-addition",
  "country-region"
],
"extensions": ["big_water_dynamic"],
"colour": 90
},
{
  "type": "buscar_seas",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "input1",
      "text": "Escribe la región marina",
    },
    {
      "type": "input_dummy",
      "name": "INPUT",
      "text": "agua",
    }
  ],
  "nextStatement": [
  "country-layer",
  "country-date",
  "country-addition",
  "country-region"
],
"extensions": ["big_mares_dynamic"],
"colour": 210
},


//Vegetación
{
  "type": "layer_tree",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/125/125215.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TREE",
      "text": "Árboles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 90,
},
{
  "type": "layer_ndvi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/128/128818.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDVI",
      "text": "Cantidad de vegetación"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 100,
},
{
  "type": "layer_fires",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/114/114466.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "FIRES",
      "text": "incendios"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 110,
},
{
  "type": "layer_tree_loss",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/98/98442.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TREE_LOSS",
      "text": "Pérdida de árboles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 120,
},
{
  "type": "layer_gcvi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/125/125203.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "GCVI",
      "text": "Salud de Vegetación"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 130,
}, 



//Suelo
{
  "type": "layer_ndmi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/31/31655.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDMI",
      "text": "Humedad del suelo"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 0,
},
{
  "type": "layer_alt",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120198.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "ALT",
      "text": "Relieve"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 10,
},
{
  "type": "layer_cover",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/15/15719.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "COVER",
      "text": "Tipo de suelo"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 20,
},
{
  "type": "layer_landforms",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/93/93678.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "LANDFORMS",
      "text": "Tipos de relieve"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 30,
},



//Atmósfera
{
  "type": "layer_tot_prep",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/116/116257.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "TOT_PREP",
      "text": "Lluvias"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 165,
},
{
  "type": "layer_cloud",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/128/128853.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CLOUD",
      "text": "Nubes"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 168,
},
{
  "type": "layer_surf_press",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/119/119487.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SURF_PRESS",
      "text": "Presión"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 171,
},
{
  "type": "layer_dewp_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/12/12209.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "DEWP_TEMP",
      "text": "Temperatura para niebla"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 174,
},
{
  "type": "layer_air_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120780.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "AIR_TEMP",
      "text": "Temperatura del aire"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 177,
},
{
  "type": "layer_10m_wind",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/116/116720.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "10M_WIND",
      "text": "Viento"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 180,
},



//Agua
{
  "type": "layer_ndwi",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102438.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NDWI",
      "text": "Lagos"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 210,
},
{
  "type": "layer_sea_press",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/119/119487.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SEA_PRESS",
      "text": "Presión en el mar"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 220,
},
{
  "type": "layer_sea_temp",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/120/120779.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SEA_TEMP",
      "text": "Temperatura del mar"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 230,
},
{
  "type": "layer_river",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102444.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "RIVER",
      "text": "Ríos"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 240,
},



//Gases
{
  "type": "layer_aer_ai",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/104/104960.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "AER_AI",
      "text": "Aerosoles"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 60,
},
{
  "type": "layer_so2",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/108/108256.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "SO2",
      "text": "Dióxido de azufre"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 62.5,
},
{
  "type": "layer_no2",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/70/70927.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "NO2",
      "text": "Dióxido de nitrógeno"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 65.0,
},
{
  "type": "layer_hcho",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/61/61294.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "HCHO",
      "text": "Metanal"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 67.5,
},
{
  "type": "layer_ch4",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/102/102880.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CH4",
      "text": "Metano"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 70.0,
},
{
  "type": "layer_co",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/130/130068.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "CO",
      "text": "Monóxido de carbono"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 72.5,
},
{
  "type": "layer_o3",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/103/103678.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "O3",
      "text": "Ozono"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": 75.0,
},



//Civilización
{
  "type": "layer_den",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/33/33887.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "DEN",
      "text": "Densidad de población"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#D1D1D1",
},
{
  "type": "layer_light",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/113/113742.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "LIGHT",
      "text": "Luces nocturnas"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#C3C3C3",
},
{
  "type": "layer_human",
  "message0": "%1 %2",
  "args0": [
    {
      "type":  "field_image",
      "src": "https://image.flaticon.com/icons/png/512/129/129863.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_label_serializable",
      "name": "HUMAN",
      "text": "Modificado por el humano"
    }
  ],
  "previousStatement": [
   "country-layer",
   "region-layer",
   "city-layer",
   "layer-date",
   "addition-layer"
  ],
  "nextStatement": [
   "layer-date",
   "addition-layer"
  ],
  "colour": "#ACACAC",
},


//Specials
{
  "type": "transparency_level",
  "message0": "Nivel de transparencia %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "transparency",
      "options": [
        [
          "Bajo",
          "0.75"
        ],
        [
          "Medio",
          "0.5"
        ],
        [
          "Alto",
          "0.3"
        ],
        [
          "Nada",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": [
  "layer-date"
],
  "nextStatement": [
  "layer-date"
],
  "colour": "#CF71BB",
  "tooltip": "",
  "helpUrl": ""
}
]);



//-------------------------------------//

var list=[["Afganistán","Afghanistan"],["Albania","Albania"],["Argelia","Algeria"],["Andorra","Andorra"],["Angola","Angola"],["Antigua y Barbuda","Antigua and Barbuda"],["Argentina","Argentina"],["Armenia","Armenia"],["Australia","Australia"],["Austria","Austria"],["Azerbaiyán","Azerbaijan"],["Bahamas","Bahamas"],["Bahrein","Bahrain"],["Bangladesh","Bangladesh"],["Barbados","Barbados"],["Bielorrusia","Belarus"],["Bélgica","Belgium"],["Belice","Belize"],["Benin","Benin"],["Bután","Bhutan"],["Bolivia","Bolivia"],["Bosnia y Herzegovina","Bosnia and Herzegovina"],["Botsuana","Botswana"],["Brasil","Brazil"],["Brunei Darussalam","Brunei Darussalam"],["Bulgaria","Bulgaria"],["Burkina Faso","Burkina Faso"],["Burundi","Burundi"],["Cabo Verde","Cabo Verde"],["Camboya","Cambodia"],["Camerún","Cameroon"],["Canadá","Canada"],["República Centroafricana","Central African Republic"],["Chad","Chad"],["Chile","Chile"],["China","China"],["Colombia","Colombia"],["Comoras","Comoros"],["Congo","Congo"],["Islas Cook","Cook Islands"],["Costa Rica","Costa Rica"],["Croacia","Croatia"],["Cuba","Cuba"],["Chipre","Cyprus"],["Chequia","Czech Republic"],["Costa de Marfil","C�te d'Ivoire"],["Corea del Norte","Dem People's Rep of Korea"],["República Democrática del Congo","Democratic Republic of the Congo"],["Dinamarca","Denmark"],["Djibouti","Djibouti"],["Dominica","Dominica"],["República Dominicana","Dominican Republic"],["Ecuador","Ecuador"],["Egipto","Egypt"],["El Salvador","El Salvador"],["Guinea Ecuatorial","Equatorial Guinea"],["Eritrea","Eritrea"],["Estonia","Estonia"],["Esuatini","Eswatini"],["Etiopía","Ethiopia"],["Islas Faroe","Faroe Islands"],["Fiji","Fiji"],["Finlandia","Finland"],["Francia","France"],["Gabón","Gabon"],["Gambia","Gambia"],["Georgia","Georgia"],["Alemania","Germany"],["Ghana","Ghana"],["Grecia","Greece"],["Granada","Grenada"],["Guatemala","Guatemala"],["Guinea","Guinea"],["Guinea-Bissau","Guinea-Bissau"],["Guayana","Guyana"],["Haití","Haiti"],["Honduras","Honduras"],["Hungría","Hungary"],["Islandia","Iceland"],["India","India"],["Indonesia","Indonesia"],["Irán","Iran (Islamic Republic of)"],["Irak","Iraq"],["Irlanda","Ireland"],["Israel","Israel"],["Italia","Italy"],["Jamaica","Jamaica"],["Japón","Japan"],["Jordania","Jordan"],["Kazajistán","Kazakhstan"],["Kenia","Kenya"],["Kiribati","Kiribati"],["Kuwait","Kuwait"],["Kirguistán","Kyrgyzstan"],["República Democrática Popular de Lao","Lao People's Democratic Republic"],["Letonia","Latvia"],["Líbano","Lebanon"],["Lesoto","Lesotho"],["Liberia","Liberia"],["Libia","Libya"],["Lituania","Lithuania"],["Luxemburgo","Luxembourg"],["Madagascar","Madagascar"],["Malawi","Malawi"],["Malasia","Malaysia"],["Maldivas","Maldives"],["Mali","Mali"],["Malta","Malta"],["Islas Marshall","Marshall Islands"],["Mauritania","Mauritania"],["Mauricio","Mauritius"],["México","Mexico"],["Micronesia","Micronesia (Federated States of)"],["Mónaco","Monaco"],["Mongolia","Mongolia"],["Montenegro","Montenegro"],["Marruecos","Morocco"],["Mozambique","Mozambique"],["Myanmar","Myanmar"],["Namibia","Namibia"],["Nauru","Nauru"],["Nepal","Nepal"],["Países Bajos","Netherlands"],["Nueva Zelanda","New Zealand"],["Nicaragua","Nicaragua"],["Níger","Niger"],["Nigeria","Nigeria"],["Niue","Niue"],["Macedonia del Norte","North Macedonia"],["Noruega","Norway"],["Omán","Oman"],["Pakistán","Pakistan"],["Palau","Palau"],["Panamá","Panama"],["Papúa Nueva Guinea","Papua New Guinea"],["Paraguay","Paraguay"],["Perú","Peru"],["Filipinas","Philippines"],["Polonia","Poland"],["Portugal","Portugal"],["Katar","Qatar"],["República de Corea","Republic of Korea"],["República de Moldavia","Republic of Moldova"],["Rumanía","Romania"],["Rusia","Russian Federation"],["Ruanda","Rwanda"],["Saint Kitts y Nevis","Saint Kitts and Nevis"],["Santa Lucía","Saint Lucia"],["San Vicente y las Granadinas","Saint Vincent and the Grenadines"],["Samoa","Samoa"],["San Marino","San Marino"],["Santo Tomé y Príncipe","Sao Tome and Principe"],["Arabia Saudita","Saudi Arabia"],["Senegal","Senegal"],["Serbia","Serbia"],["Seychelles","Seychelles"],["Sierra Leona","Sierra Leone"],["Singapur","Singapore"],["Eslovaquia","Slovakia"],["Eslovenia","Slovenia"],["Islas Salomón","Solomon Islands"],["Somalia","Somalia"],["Sudáfrica","South Africa"],["Sudán del Sur","South Sudan"],["España","Spain"],["Sri Lanka","Sri Lanka"],["Sudán","Sudan"],["Suriname","Suriname"],["Suecia","Sweden"],["Suiza","Switzerland"],["República Árabe Siria","Syrian Arab Republic"],["Tayikistán","Tajikistan"],["Tailandia","Thailand"],["Timor-Leste","Timor-Leste"],["Togo","Togo"],["Tokelau","Tokelau"],["Tonga","Tonga"],["Trinidad y Tobago","Trinidad and Tobago"],["Túnez","Tunisia"],["Turquía","Turkey"],["Turkmenistán","Turkmenistan"],["Tuvalu","Tuvalu"],["Uganda","Uganda"],["Ucrania","Ukraine"],["Emiratos Árabes Unidos","United Arab Emirates"],["Reino Unido","U.K. of Great Britain and Northern Ireland"],["República Unida de Tanzania","United Republic of Tanzania"],["Estados Unidos de América","United States of America"],["Uruguay","Uruguay"],["Uzbekistán","Uzbekistan"],["Vanuatu","Vanuatu"],["Venezuela","Venezuela (Bolivarian Republic of)"],["Vietnam","Viet Nam"],["Yemen","Yemen"],["Zambia","Zambia"],["Zimbabue","Zimbabwe"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('student_dynamic',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "españa";
          var block = this.getSourceBlock();
          for (var i=0 ; i < list.length ; i++)
        {
          options.push([list[i][0],list[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < list.length ; j++)
        {
          if (list[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([list[j][0],list[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'country'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_pais'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code_country = 'country=' + dropdown_value + ',';

  return code_country;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension2',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listReg');
        var listLatinRaw=localStorage.getItem('listLatinReg');
        if (listRaw==null && listLatinRaw==null){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listRaw==null ){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listLatinRaw==null){
          var listReg=[""]
          var listLatinReg=[""]
        }
        else if (listLatinRaw=="None"){
          var listReg=listRaw.split([", "])
          var listLatinReg=listRaw.split([", "])
        }
        else{
          var listReg=listRaw.split([", "])
          var listLatinReg=listLatinRaw.split([", "])
        }
        var options = [];
        var coincidence = [];
        var searchVal = listReg[0];
        var block = this.getSourceBlock();
        for (var i=0 ; i < listReg.length ; i++)
      {
        options.push([listLatinReg[i],listReg[i]]);
      }
        if (block){
          searchVal = block.getFieldValue('input1');
        }
        for (var j=0 ; j < listReg.length ; j++)
      {
        if (listReg[j].toLowerCase().includes(searchVal.toLowerCase())){
          coincidence.push([listLatinReg[j],listReg[j]]);
        }
        if (coincidence.length > 0){
           options = coincidence;
        }
      }
        return options;
      }
    ),'region'
  );
});

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_regiones'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'region=' + dropdown_value + ',';
  return code;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension3',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listProv');
        var listLatinRaw=localStorage.getItem('listLatinProv');
        if (listRaw==null && listLatinRaw==null){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listRaw==null ){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listLatinRaw==null ){
          var listProv=[""]
          var listLatinProv=[" "]
        }
        else if (listLatinRaw=="None"){
          var listProv=listRaw.split([", "])
          var listLatinProv=listRaw.split([", "])
        }
        else{
          var listProv=listRaw.split([", "])
          var listLatinProv=listLatinRaw.split([", "])
        }
        var options = [];
        var coincidence = [];
        var searchVal = listProv[0];
        var block = this.getSourceBlock();
        for (var i=0 ; i < listProv.length ; i++)
      {
        options.push([listLatinProv[i],listProv[i]]);
      }
        if (block){
          searchVal = block.getFieldValue('input1');
        }
        for (var j=0 ; j < listProv.length ; j++)
      {
        if (listProv[j].toLowerCase().includes(searchVal.toLowerCase())){
          coincidence.push([listLatinProv[j],listProv[j]]);
        }
        if (coincidence.length > 0){
           options = coincidence;
        }
      }
        return options;
      }
      ), 'province');
   }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_provincia'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'province=' + dropdown_value + ',';
  return code;
};


//OCEANIC FRONTIERS
var water=[["Antártico","Antartic Ocean"],["Mares Árabes","Arabian Seas"],["Ártico","Artic Ocean"],["Atlántico","Atlantic Ocean"],["Mar Negro","Black Sea"],["Mares de Centro América","Central American Seas"],["Mares del Este Asiático","East Asian Seas"],["Índico","Indian Ocean"],["Mar Mediterráneo","Mediterranean Sea"],["Mares de Norte América","North American Seas"],["Mares del Norte de Europa","North European Seas"],["Pacífico","Pacific Ocean"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_water_dynamic',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "mediterráneo";
          var block = this.getSourceBlock();
          for (var i=0 ; i < water.length ; i++)
        {
          options.push([water[i][0],water[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < water.length ; j++)
        {
          if (water[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([water[j][0],water[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'ocean'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_oceano'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'ocean=' + dropdown_value + ',';

  return code;
};

var mares=[["Mar Egeo","Aegean Sea"],["Mar de Alborán","Alboran Sea"],["Andam","Andaman or Burma Sea"],["Mar Arabe","Arabian Sea"],["Arafura mar","Arafura Sea"],["océano Ártico","Arctic Ocean"],["Bahía de BAFFIN","Baffin Bay"],["Baleares (Mar ibérico)","Balearic (Iberian Sea)"],["Mar Bali","Bali Sea"],["mar Báltico","Baltic Sea"],["Banda Sea","Banda Sea"],["Marentsz Mar","Barentsz Sea"],["Estrecho de bajo","Bass Strait"],["Bahía de Bengala","Bay of Bengal"],["Golfo de Vizcaya","Bay of Biscay"],["Bahía de Fundy","Bay of Fundy"],["Marufort","Beaufort Sea"],["Mar de Bering","Bering Sea"],["Bismarck Sea","Bismarck Sea"],["Mar Negro","Black Sea"],["Canal de bristol","Bristol Channel"],["Mar Caribe","Caribbean Sea"],["Celebes mar","Celebes Sea"],["mar Céltico","Celtic Sea"],["Mar de ceram","Ceram Sea"],["Mar Chukchi","Chukchi Sea"],["Coral Sea","Coral Sea"],["Estrecho de Davis","Davis Strait"],["Mar Siberiano Oriental","East Siberian Sea"],["Mar de China oriental","Eastern China Sea"],["canal inglés","English Channel"],["Flores Sea","Flores Sea"],["Gran bight australiano","Great Australian Bight"],["Mar de Groenlandia","Greenland Sea"],["Golfo de Aden","Gulf of Aden"],["Golfo de Alaska","Gulf of Alaska"],["Golfo de Aqaba","Gulf of Aqaba"],["Golfo de boni.","Gulf of Boni"],["Golfo de ambos","Gulf of Bothnia"],["Golfo de California","Gulf of California"],["Golfo de Finlandia","Gulf of Finland"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de México","Gulf of Mexico"],["Golfo de Omán","Gulf of Oman"],["Golfo de Riga","Gulf of Riga"],["Golfo de St. Lawrence","Gulf of St. Lawrence"],["Golfo de Suez","Gulf of Suez"],["Golfo de Tailandia","Gulf of Thailand"],["Golfo de Tomini","Gulf of Tomini"],["Mar de halmahero","Halmahera Sea"],["Bahía Hudson","Hudson Bay"],["Estrecho de Hudson","Hudson Strait"],["océano Indio","Indian Ocean"],["Mas interiores de la costa oeste de Escocia","Inner Seas off the West Coast of Scotland"],["mar Jónico","Ionian Sea"],["Mar irlandés y canal de San Jorge","Irish Sea and St. George's Channel"],["Mar de Japón","Japan Sea"],["Java Sea","Java Sea"],["Mar Kara","Kara Sea"],["Kattegat","Kattegat"],["Labrador Sea","Labrador Sea"],["Laccadive Sea","Laccadive Sea"],["Mar de lapevo","Laptev Sea"],["Mar Liguria","Ligurian Sea"],["Lincoln mar","Lincoln Sea"],["Estrecho de Makassar","Makassar Strait"],["Estrecho de malacca","Malacca Strait"],["Mar Mediterráneo - Cuenca Oriental","Mediterranean Sea - Eastern Basin"],["Mar Mediterráneo - Cuenca occidental","Mediterranean Sea - Western Basin"],["Mar molecular","Molukka Sea"],["Canal de mozambique","Mozambique Channel"],["océano Atlántico Norte","North Atlantic Ocean"],["océano Pacífico Norte","North Pacific Ocean"],["mar del Norte","North Sea"],["Mar de Noruega","Norwegian Sea"],["Golfo pérsico","Persian Gulf"],["Mar filipino","Philippine Sea"],["Red Sea","Red Sea"],["Rio de La Plata","Rio de La Plata"],["Tu mar","Savu Sea"],["Mar de Azov","Sea of Azov"],["Mar de Mármara","Sea of Marmara"],["Mar de Okhotsk","Sea of Okhotsk"],["Ver o interior","Seto Naikai or Inland Sea"],["Skagerrak","Skagerrak"],["Solomon Mar","Solomon Sea"],["Océano Atlántico Sur","South Atlantic Ocean"],["mar del Sur de China","South China Sea"],["oceano Pacifico del Sur","South Pacific Ocean"],["Oceano del Sur","Southern Ocean"],["Estrecho de Gibraltar","Strait of Gibraltar"],["Mar del mar","Sulu Sea"],["Mar de Tasmania","Tasman Sea"],["Las aguas costeras del sureste de Alaska y la Columbia Británica.","The Coastal Waters of Southeast Alaska and British Columbia"],["Los pasajes noroeste","The Northwestern Passages"],["Timor Sea","Timor Sea"],["Mar Tirreno","Tyrrhenian Sea"],["mar Blanco","White Sea"],["Mar Amarillo","Yellow Sea"]]
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_mares_dynamic',
  function() {
    this.getInput('INPUT')
      .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
        function() {
          var options = [];
          var coincidence = [];
          var searchVal = "albo";
          var block = this.getSourceBlock();
          for (var i=0 ; i < mares.length ; i++)
        {
          options.push([mares[i][0],mares[i][1]]);
        }
          if (block){
            searchVal = block.getFieldValue('input1');
          }
          for (var j=0 ; j < mares.length ; j++)
        {
          if (mares[j][0].toLowerCase().includes(searchVal.toLowerCase())){
            coincidence.push([mares[j][0],mares[j][1]]);
          }
          if (coincidence.length > 0){
             options = coincidence;
          }
        }
          return options;
        }
      ), 'sea'
    );
  }
);

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_seas'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'sea=' + dropdown_value + ',';

  return code;
};

//Vegetación 
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tree'] = function(block) {
  var code = 'layer=TREE,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndvi'] = function(block) {
  var code = 'layer=NDVI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_fires'] = function(block) {
  var code = 'layer=FIRE,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tree_loss'] = function(block) {
  var code = 'layer=TREE_LOSS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_gcvi'] = function(block) {
  var code = 'layer=GCVI,';
  return code;
};

//Suelo
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndmi'] = function(block) {
  var code = 'layer=NDMI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_alt'] = function(block) {
  var code = 'layer=ALT,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_cover'] = function(block) {
  var code = 'layer=COVER,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_landforms'] = function(block) {
  var code = 'layer=LANDFORMS,';
  return code;
};

//Atmósfera
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_tot_prep'] = function(block) {
  var code = 'layer=TOT_PREP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_cloud'] = function(block) {
  var code = 'layer=CLOUDS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_surf_press'] = function(block) {
  var code = 'layer=SURF_PRESS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_dewp_temp'] = function(block) {
  var code = 'layer=DEWP_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_air_temp'] = function(block) {
  var code = 'layer=AIR_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_10m_wind'] = function(block) {
  var code = 'layer=10M_WIND,';
  return code;
};



//Agua
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ndwi'] = function(block) {
  var code = 'layer=NDWI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_sea_press'] = function(block) {
  var code = 'layer=SEA_PRESS,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_sea_temp'] = function(block) {
  var code = 'layer=SEA_TEMP,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_river'] = function(block) {
  var code = 'layer=RIVER,';
  return code;
};


//Gases
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_aer_ai'] = function(block) {
  var code = 'layer=AER_AI,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_so2'] = function(block) {
  var code = 'layer=SO2,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_no2'] = function(block) {
  var code = 'layer=NO2,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_hcho'] = function(block) {
  var code = 'layer=HCHO,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_ch4'] = function(block) {
  var code = 'layer=CH4,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_co'] = function(block) {
  var code = 'layer=CO,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_o3'] = function(block) {
  var code = 'layer=O3,';
  return code;
};


//Civilización
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_den'] = function(block) {
  var code = 'layer=DEN,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_light'] = function(block) {
  var code = 'layer=LIGHT,';
  return code;
};
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['layer_human'] = function(block) {
  var code = 'layer=HUMAN,';
  return code;
};


//Special
blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['transparency_level'] = function(block) {
  var value = block.getFieldValue('transparency');
  var code = 'layer_opacity=' + value + ',';
  return code;
};

/***/ }),

/***/ "ovlT":
/*!*************************************************!*\
  !*** ./src/app/users API/api/report.service.ts ***!
  \*************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encoder */ "WBmY");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variables */ "ZxVS");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configuration */ "LEmc");
/**
 * USERS MANAGEMENT
 * How to create, log and manage user activites inside the program
 *
 * OpenAPI spec version: 0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */






let ReportService = class ReportService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://khalil-app-306611.ew.r.appspot.com/KhalilApp';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    studentGlobalReportGet(codeQuery, observe = 'body', reportProgress = false) {
        if (codeQuery === null || codeQuery === undefined) {
            throw new Error('Required parameter codeQuery was null or undefined when calling studentGlobalReportGet.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (codeQuery !== undefined && codeQuery !== null) {
            queryParameters = queryParameters.set('code_query', codeQuery);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/student_globalReport`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    studentReportGet(codeQuery, observe = 'body', reportProgress = false) {
        if (codeQuery === null || codeQuery === undefined) {
            throw new Error('Required parameter codeQuery was null or undefined when calling studentReportGet.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (codeQuery !== undefined && codeQuery !== null) {
            queryParameters = queryParameters.set('code_query', codeQuery);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/student_report`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"],] }] },
    { type: _configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ReportService);



/***/ }),

/***/ "qiJ2":
/*!***********************************************!*\
  !*** ./src/app/auth/registro/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");





let UserService = class UserService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api = "https://khalil-app-306611.ew.r.appspot.com/KhalilApp";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('undefined');
    }
    registerTeacher(teacherData) {
        return this.http.post(`${this.api}/register_teacher`, teacherData, { headers: this.httpHeaders });
    }
    loginUser(userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post(`${this.api}/auth/`, userData, { headers: this.httpHeaders });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "qjKq":
/*!*******************************************************!*\
  !*** ./src/app/auth/registro/registro.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#register {\n  text-align: center;\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 1px solid whitesmoke;\n}\n#register .label {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUNJO0VBQ0UsOEJBQUE7QUFDTiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgLmxhYmVse1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSAgICAiXX0= */");

/***/ }),

/***/ "sgPn":
/*!****************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/help/help.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2hlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImhlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | public-home-home-module */ "public-home-home-module").then(__webpack_require__.bind(null, /*! ./public/home/home.module */ "Zefo")).then(m => m.HomePageModule) },
    {
        path: 'usuarios',
        loadChildren: () => Promise.all(/*! import() | usuarios-usuarios-module */[__webpack_require__.e("common"), __webpack_require__.e("usuarios-usuarios-module")]).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "0G8V")).then(m => m.UsuariosPageModule)
    },
    {
        path: 'alumno',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: "vegetacion",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-vegetacion-vegetacion-module */ "members-student-Pages-vegetacion-vegetacion-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/vegetacion/vegetacion.module */ "BiDv")).then(m => m.VegetacionPageModule)
                    },
                    {
                        path: ":ejercicioId",
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./members/student/Pages/vegetacion/workspace/workspace.module */ "cRbE")).then(m => m.WorkspacePageModule),
                    }
                ]
            },
            {
                path: "ecosistemas",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-ecosistemas-ecosistemas-module */ "members-student-Pages-ecosistemas-ecosistemas-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/ecosistemas/ecosistemas.module */ "LoA4")).then(m => m.EcosistemasPageModule)
                    },
                    {
                        path: ":ejercicioId",
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-ecosistemas-ws-ecos-ws-ecos-module */ "Pages-ecosistemas-ws-ecos-ws-ecos-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/ecosistemas/ws-ecos/ws-ecos.module */ "dE0r")).then(m => m.WsEcosPageModule),
                    }
                ]
            },
            {
                path: "hum-soc",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-hum-soc-hum-soc-module */ "members-student-Pages-hum-soc-hum-soc-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/hum-soc/hum-soc.module */ "+McY")).then(m => m.HumSocPageModule)
                    },
                    {
                        path: ':ejercicioId',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-hum-soc-workspace-hum-workspace-hum-module */ "Pages-hum-soc-workspace-hum-workspace-hum-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/hum-soc/workspace-hum/workspace-hum.module */ "GwFt")).then(m => m.WorkspaceHumPageModule)
                    }
                ]
            },
            {
                path: "cambio-climatico",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-cambio-climatico-cambio-climatico-module */ "members-student-Pages-cambio-climatico-cambio-climatico-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/cambio-climatico/cambio-climatico.module */ "4N7R")).then(m => m.CambioClimaticoPageModule)
                    },
                    {
                        path: ':ejercicioId',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-cambio-climatico-ws-camb-ws-camb-module */ "Pages-cambio-climatico-ws-camb-ws-camb-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/cambio-climatico/ws-camb/ws-camb.module */ "ZpR/")).then(m => m.WsCambPageModule)
                    }
                ]
            },
            {
                path: "materia",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-materia-materia-module */ "members-student-Pages-materia-materia-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/materia/materia.module */ "yi/X")).then(m => m.MateriaPageModule)
                    },
                    {
                        path: ':ejercicioId',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-materia-ws-mat-ws-mat-module */ "Pages-materia-ws-mat-ws-mat-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/materia/ws-mat/ws-mat.module */ "uJf9")).then(m => m.WSMatPageModule)
                    }
                ]
            },
            {
                path: "primario",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-primario-primario-module */ "members-student-Pages-primario-primario-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/primario/primario.module */ "0Zsi")).then(m => m.PrimarioPageModule)
                    },
                    {
                        path: ':ejercicioId',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-primario-ws-prim-ws-prim-module */ "Pages-primario-ws-prim-ws-prim-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/primario/ws-prim/ws-prim.module */ "gSbu")).then(m => m.WsPrimPageModule)
                    }
                ]
            },
            {
                path: "climas",
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-climas-climas-module */ "members-student-Pages-climas-climas-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/climas/climas.module */ "tkir")).then(m => m.ClimasPageModule)
                    },
                    {
                        path: ':ejercicioId',
                        loadChildren: () => __webpack_require__.e(/*! import() | members-student-Pages-climas-ws-clim-ws-clim-module */ "Pages-climas-ws-clim-ws-clim-module").then(__webpack_require__.bind(null, /*! ./members/student/Pages/climas/ws-clim/ws-clim.module */ "u2WT")).then(m => m.WsClimPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() | src-app-members-teacher-teacher-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-members-teacher-teacher-module")]).then(__webpack_require__.bind(null, /*! src/app/members/teacher/teacher.module */ "fBX6")).then(m => m.TeacherPageModule)
            },
            {
                path: 't-space',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | src-app-members-teacher-Pages-t-space-t-space-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-members-teacher-Pages-t-space-t-space-module")]).then(__webpack_require__.bind(null, /*! src/app/members/teacher/Pages/t-space/t-space.module */ "pnAI")).then(m => m.TSpacePageModule)
                    }
                ]
            },
        ]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | public-register-register-module */ "public-register-register-module").then(__webpack_require__.bind(null, /*! ./public/register/register.module */ "2i3i")).then(m => m.RegisterPageModule)
    },
    {
        path: 'members',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        loadChildren: () => __webpack_require__.e(/*! import() | members-member-routing-module */ "members-member-routing-module").then(__webpack_require__.bind(null, /*! ./members//member-routing.module */ "C+3t")).then(m => m.MemberRoutingModule)
    },
    {
        path: 'students',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-public-register-students-students-module */ "students-students-module").then(__webpack_require__.bind(null, /*! src/app/public/register/students/students.module */ "WLQe")).then(m => m.StudentsPageModule)
    },
    {
        path: '',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: "",
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-members-student-students-students-module */ "src-app-members-student-students-students-module").then(__webpack_require__.bind(null, /*! src/app/members/student/students/students.module */ "xlJG")).then(m => m.StudentsPageModule)
            },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vglk":
/*!*****************************************************!*\
  !*** ./src/app/services/loading/loading.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    mapLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dustyLoading = yield this.loadingCtrl.create({
                message: "Dusty está trabajando",
                spinner: "bubbles",
            });
            return yield this.dustyLoading.present();
        });
    }
    userLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usuarioLoading = yield this.loadingCtrl.create({
                message: "Vamos a ver quién eres...",
                spinner: "bubbles",
            });
            return yield this.usuarioLoading.present();
        });
    }
    newTeacherLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.newTeachLoading = yield this.loadingCtrl.create({
                message: "Vamos a ver quién eres...",
                spinner: "bubbles",
            });
            return yield this.newTeachLoading.present();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z/ST":
/*!**********************************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Components/dual-blockly/dual-blockly.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DualBlocklyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualBlocklyComponent", function() { return DualBlocklyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dual_blockly_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dual-blockly.component.html */ "aVn0");
/* harmony import */ var _dual_blockly_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dual-blockly.component.scss */ "hsik");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockly/core */ "t/1s");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_members_student_Others_Map_Components_blockly_blockeado_s_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/student/Others/Map/Components/blockly/blockeado-s.js */ "nORd");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/blockly/blockly_compressed.js */ "6Y8/");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _Services_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Services/map.service */ "5Q6N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Services/ejercicios/ejercicios.service */ "m1hz");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");
/* harmony import */ var _Services_counter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Services/counter.service */ "6qpn");
/* harmony import */ var src_app_members_student_Others_Map_Components_dual_blockly_blockeado_s_dual_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/members/student/Others/Map/Components/dual-blockly/blockeado-s-dual.js */ "mwcn");















let DualBlocklyComponent = class DualBlocklyComponent {
    constructor(counter, router, sanitizer, mapService, ejerciosService, loading) {
        this.counter = counter;
        this.router = router;
        this.sanitizer = sanitizer;
        this.mapService = mapService;
        this.ejerciosService = ejerciosService;
        this.loading = loading;
        this.GEE = "PCFET0NUWVBFIGh0bWw+Cgo8aGVhZD4KPG1ldGEgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04IiBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiLz4KPHNjcmlwdD5MX1BSRUZFUl9DQU5WQVM9ZmFsc2U7IExfTk9fVE9VQ0g9ZmFsc2U7IExfRElTQUJMRV8zRD1mYWxzZTs8L3NjcmlwdD4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5qcyI+PC9zY3JpcHQ+CjxsaW5rIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvTGVhZmxldC5hd2Vzb21lLW1hcmtlcnMvMi4wLjIvbGVhZmxldC5hd2Vzb21lLW1hcmtlcnMuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vcHl0aG9uLXZpc3VhbGl6YXRpb24vZm9saXVtL21hc3Rlci9mb2xpdW0vdGVtcGxhdGVzL2xlYWZsZXQuYXdlc29tZS5yb3RhdGUuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPHN0eWxlPmh0bWwsIGJvZHkge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTttYXJnaW46IDA7cGFkZGluZzogMDt9PC9zdHlsZT4KPHN0eWxlPiNtYXAge3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO308L3N0eWxlPgo8bWV0YSBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsCiAgICAgICAgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vIiBuYW1lPSJ2aWV3cG9ydCIvPgo8c3R5bGU+I21hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCB7CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIHdpZHRoOiAxMDAuMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAuMCU7CiAgICAgICAgbGVmdDogMC4wJTsKICAgICAgICB0b3A6IDAuMCU7CiAgICAgICAgfQogICAgPC9zdHlsZT4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQuZnVsbHNjcmVlbi8xLjQuMi9Db250cm9sLkZ1bGxTY3JlZW4ubWluLmpzIj48L3NjcmlwdD4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC5mdWxsc2NyZWVuLzEuNC4yL0NvbnRyb2wuRnVsbFNjcmVlbi5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPC9oZWFkPgo8Ym9keT4KPGRpdiBjbGFzcz0iZm9saXVtLW1hcCIgaWQ9Im1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCI+PC9kaXY+CjwvYm9keT4KPHNjcmlwdD4gICAgCiAgICAKICAgIAogICAgICAgIHZhciBib3VuZHMgPSBudWxsOwogICAgCgogICAgdmFyIG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCA9IEwubWFwKAogICAgICAgICdtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQnLCB7CiAgICAgICAgY2VudGVyOiBbNDAuMTkyODAyODMyNDg5ODMsIC0zLjcwMjE0Mzc3MDA1MDcwMl0sCiAgICAgICAgem9vbTogNiwKICAgICAgICBtYXhCb3VuZHM6IGJvdW5kcywKICAgICAgICBsYXllcnM6IFtdLAogICAgICAgIHdvcmxkQ29weUp1bXA6IGZhbHNlLAogICAgICAgIGNyczogTC5DUlMuRVBTRzM4NTcsCiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsCiAgICAgICAgfSk7CkwuY29udHJvbC5zY2FsZSgpLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CgogICAgCiAgICB2YXIgdGlsZV9sYXllcl8zZmJkZWJmYzU5YmY0NmNjYTg5NjgwYmQzN2Q1Y2U1ZiA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6IG51bGwsCiAgICAgICAgImRldGVjdFJldGluYSI6IGZhbHNlLAogICAgICAgICJtYXhOYXRpdmVab29tIjogMTgsCiAgICAgICAgIm1heFpvb20iOiAxOCwKICAgICAgICAibWluWm9vbSI6IDAsCiAgICAgICAgIm5vV3JhcCI6IGZhbHNlLAogICAgICAgICJvcGFjaXR5IjogMSwKICAgICAgICAic3ViZG9tYWlucyI6ICJhYmMiLAogICAgICAgICJ0bXMiOiBmYWxzZQp9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgdmFyIHRpbGVfbGF5ZXJfNjcyOTcwZjU1OWZkNDcyZDk1OTBhNjk5MzdlMzI4YzggPSBMLnRpbGVMYXllcigKICAgICAgICAnaHR0cHM6Ly9tdDEuZ29vZ2xlLmNvbS92dC9seXJzPW0meD17eH0meT17eX0mej17en0nLAogICAgICAgIHsKICAgICAgICAiYXR0cmlidXRpb24iOiAiR29vZ2xlIiwKICAgICAgICAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsCiAgICAgICAgIm1heE5hdGl2ZVpvb20iOiAxOCwKICAgICAgICAibWF4Wm9vbSI6IDE4LAogICAgICAgICJtaW5ab29tIjogMCwKICAgICAgICAibm9XcmFwIjogZmFsc2UsCiAgICAgICAgIm9wYWNpdHkiOiAxLAogICAgICAgICJzdWJkb21haW5zIjogImFiYyIsCiAgICAgICAgInRtcyI6IGZhbHNlCn0pLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CiAgICB2YXIgdGlsZV9sYXllcl8wNDFlMDI2NzM2YmY0MjE1YTg5NjRiYWNhZWY0OGQ3MCA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL210MS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6ICJHb29nbGUiLAogICAgICAgICJkZXRlY3RSZXRpbmEiOiBmYWxzZSwKICAgICAgICAibWF4TmF0aXZlWm9vbSI6IDE4LAogICAgICAgICJtYXhab29tIjogMTgsCiAgICAgICAgIm1pblpvb20iOiAwLAogICAgICAgICJub1dyYXAiOiBmYWxzZSwKICAgICAgICAib3BhY2l0eSI6IDEsCiAgICAgICAgInN1YmRvbWFpbnMiOiAiYWJjIiwKICAgICAgICAidG1zIjogZmFsc2UKfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgIAogICAgICAgICAgICBMLmNvbnRyb2wuZnVsbHNjcmVlbih7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcGxlZnQnLAogICAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIFNjcmVlbicsCiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0V4aXQgRnVsbCBTY3JlZW4nLAogICAgICAgICAgICAgICAgZm9yY2VTZXBhcmF0ZUJ1dHRvbjogZmFsc2UsCiAgICAgICAgICAgICAgICB9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgICAgICAgICBtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQub24oJ2VudGVyRnVsbHNjcmVlbicsIGZ1bmN0aW9uKCl7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBmdWxsc2NyZWVuJyk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAKICAgIAogICAgICAgICAgICB2YXIgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1NyA9IHsKICAgICAgICAgICAgICAgIGJhc2VfbGF5ZXJzIDogeyAib3BlbnN0cmVldG1hcCIgOiB0aWxlX2xheWVyXzNmYmRlYmZjNTliZjQ2Y2NhODk2ODBiZDM3ZDVjZTVmLCB9LAogICAgICAgICAgICAgICAgb3ZlcmxheXMgOiB7ICJHb29nbGUgTWFwcyIgOiB0aWxlX2xheWVyXzY3Mjk3MGY1NTlmZDQ3MmQ5NTkwYTY5OTM3ZTMyOGM4LCJHb29nbGUgU2F0ZWxsaXRlIiA6IHRpbGVfbGF5ZXJfMDQxZTAyNjczNmJmNDIxNWE4OTY0YmFjYWVmNDhkNzAsIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgIEwuY29udHJvbC5sYXllcnMoCiAgICAgICAgICAgICAgICBsYXllcl9jb250cm9sXzYzZDllNDhhYTNlMDQyMDg4ZmViODZjMjM2ZmE4ODU3LmJhc2VfbGF5ZXJzLAogICAgICAgICAgICAgICAgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1Ny5vdmVybGF5cywKICAgICAgICAgICAgICAgIHtwb3NpdGlvbjogJ3RvcHJpZ2h0JywKICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgYXV0b1pJbmRleDogdHJ1ZQogICAgICAgICAgICAgICAgfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgICAgICAgICAgCiAgICAgICAgCjwvc2NyaXB0Pg==";
        //Times a student click play button
        this.countPlays = 0;
    }
    ngOnInit() {
        //Delete previous data
        localStorage.removeItem('fails');
        localStorage.removeItem('numberOfPlays');
        localStorage.removeItem('counterTime');
        localStorage.removeItem('numberHints');
        this.counter.setCounter();
        this.primaryWorkspace = blockly_core__WEBPACK_IMPORTED_MODULE_4__["inject"]('primaryDiv', {
            readOnly: false,
            move: {
                scrollbars: false,
            },
            //zoom:{
            //controls: true,
            //wheel: true,
            //startScale: 1.0,
            //maxScale: 3,
            //minScale: 0.3,
            //scaleSpeed: 1.2,
            //pinch: true
            //},
            collapse: true,
            renderer: 'thrasos',
            comments: true,
            disable: true,
            maxBlocks: 10,
            trashcan: true,
            horizontalLayout: false,
            toolboxPosition: 'start',
            scss: true,
            media: 'https://unpkg.com/blockly/media/',
            rtl: false,
            sounds: true,
            oneBasedIndex: true,
            toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Lugares" colour="#5ba58c">
    <category name="Territorios" colour="#5ba58c">
      <block type="buscar_pais">
        <field name="input1">Escribe el país</field>
        <field name="INPUT">paises</field>
      </block>
      <block type="buscar_regiones">
        <field name="input1">Escribe la región</field>
        <field name="INPUT">regiones</field>
      </block>
      <block type="buscar_provincia">
        <field name="input1">Escribe la provincia</field>
        <field name="INPUT">provincias</field>
      </block>
    </category>
    <category name="Mares y océanos " colour="#F6EFA6">
      <block type="buscar_oceano">
        <field name="input1">Regiones grandes</field>
        <field name="INPUT">agua</field>
      </block>
      <block type="buscar_seas">
        <field name="input1">Regiones pequeñas</field>
        <field name="INPUT">agua</field>
      </block>
    </category>
  </category>
  <category name="Vegetación" colour="#0DF013">
    <block type="layer_tree">
    <field name="TREE">Árboles</field>
    </block>
    <block type="layer_ndvi">
    <field name="NDVI">Cantidad de vegetación</field>
    </block>
    <block type="layer_fires">
    <field name="FIRES">incendios</field>
    </block>
    <block type="layer_tree_loss">
    <field name="TREE_LOSS">Pérdida de árboles</field>
    </block>
    <block type="layer_gcvi">
    <field name="GCVI">Salud de Vegetación</field>
    </block>
  </category>
  <category name="Suelo" colour="#D25F00">
    <block type="layer_ndmi">
    <field name="NDMI">Humedad del suelo</field>
    </block>
    <block type="layer_alt">
    <field name="ALT">Relieve</field>
    </block>
    <block type="layer_cover">
    <field name="COVER">Tipo de suelo</field>
    </block>
    <block type="layer_landforms">
    <field name="LANDFORMS">Tipos de relieve</field>
    </block>
  </category>
  <category name="Atmósfera" colour="#ACF5E3">
    <block type="layer_tot_prep">
    <field name="TOT_PREP">Lluvias</field>
    </block>
    <block type="layer_cloud">
    <field name="CLOUD">Nubes</field>
    </block>
    <block type="layer_surf_press">
    <field name="SURF_PRESS">Presión atmosférica</field>
    </block>
    <block type="layer_dewp_temp">
    <field name="DEWP_TEMP">Temperatura de formación de niebla</field>
    </block>
    <block type="layer_air_temp">
    <field name="AIR_TEMP">Temperatura del aire</field>
    </block>
    <block type="layer_10m_wind">
    <field name="10M_WIND">Viento</field>
    </block>
  </category>
  <category name="Agua" colour="#00A6FB">
    <block type="layer_ndwi">
    <field name="NDWI">Lagos</field>
    </block>
    <block type="layer_sea_press">
    <field name="SEA_PRESS">Presión a nivel del mar</field>
    </block>
    <block type="layer_sea_temp">
    <field name="SEA_TEMP">Temperatura del agua</field>
    </block>
    <block type="layer_river">
    <field name="RIVER">Ríos</field>
    </block>
  </category>
  <category name="Gases" colour="#FFF671">
    <block type="layer_aer_ai">
    <field name="AER_AI">Aerosoles</field>
    </block>
    <block type="layer_so2">
    <field name="SO2">Dióxido de azufre</field>
    </block>
    <block type="layer_no2">
    <field name="NO2">Dióxido de nitrógeno</field>
    </block>
    <block type="layer_hcho">
    <field name="HCHO">Metanal</field>
    </block>
    <block type="layer_ch4">
    <field name="CH4">Metano</field>
    </block>
    <block type="layer_co">
    <field name="CO">Monóxido de carbono</field>
    </block>
    <block type="layer_o3">
    <field name="O3">Ozono</field>
    </block>
  </category>
  <category name="Civilización" colour="#B5B5B5">
    <block type="layer_den">
    <field name="DEN">Densidad de población</field>
    </block>
    <block type="layer_light">
    <field name="LIGHT">Luces nocturnas</field>
    </block>
    <block type="layer_human">
    <field name="HUMAN">Modificado por el humano</field>
    </block>
  </category>
  <sep></sep>
  <category name="Especiales" colour="#FF7AE2">
    <block type="transparency_level">
    <field name="transparency"></field>
    </block>
    </category>
</xml>
      `
        });
        this.primaryWorkspace2 = blockly_core__WEBPACK_IMPORTED_MODULE_4__["inject"]('secondaryDiv', {
            readOnly: false,
            move: {
                scrollbars: false,
            },
            //zoom:{
            //controls: true,
            //wheel: true,
            //startScale: 1.0,
            //maxScale: 3,
            //minScale: 0.3,
            //scaleSpeed: 1.2,
            //pinch: true
            //},
            collapse: true,
            renderer: 'thrasos',
            comments: true,
            disable: true,
            maxBlocks: 10,
            trashcan: true,
            horizontalLayout: false,
            toolboxPosition: 'start',
            scss: true,
            media: 'https://unpkg.com/blockly/media/',
            rtl: false,
            sounds: true,
            oneBasedIndex: true,
            toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Lugares" colour="#5ba58c">
    <category name="Territorios" colour="#5ba58c">
      <block type="look_country">
        <field name="input1">Escribe el país</field>
        <field name="INPUT">paises</field>
      </block>
      <block type="look_regions">
        <field name="input1">Escribe la región</field>
        <field name="INPUT">regiones</field>
      </block>
      <block type="look_province">
        <field name="input1">Escribe la provincia</field>
        <field name="INPUT">provincias</field>
      </block>
    </category>
    <category name="Mares y océanos " colour="#F6EFA6">
      <block type="look_oceans">
        <field name="input1">Regiones grandes</field>
        <field name="INPUT">agua</field>
      </block>
      <block type="look_seas">
        <field name="input1">Regiones pequeñas</field>
        <field name="INPUT">agua</field>
      </block>
    </category>
  </category>
  <category name="Vegetación" colour="#0DF013">
    <block type="layer_tree">
    <field name="TREE">Árboles</field>
    </block>
    <block type="layer_ndvi">
    <field name="NDVI">Cantidad de vegetación</field>
    </block>
    <block type="layer_fires">
    <field name="FIRES">incendios</field>
    </block>
    <block type="layer_tree_loss">
    <field name="TREE_LOSS">Pérdida de árboles</field>
    </block>
    <block type="layer_gcvi">
    <field name="GCVI">Salud de Vegetación</field>
    </block>
  </category>
  <category name="Suelo" colour="#D25F00">
    <block type="layer_ndmi">
    <field name="NDMI">Humedad del suelo</field>
    </block>
    <block type="layer_alt">
    <field name="ALT">Relieve</field>
    </block>
    <block type="layer_cover">
    <field name="COVER">Tipo de suelo</field>
    </block>
    <block type="layer_landforms">
    <field name="LANDFORMS">Tipos de relieve</field>
    </block>
  </category>
  <category name="Atmósfera" colour="#ACF5E3">
    <block type="layer_tot_prep">
    <field name="TOT_PREP">Lluvias</field>
    </block>
    <block type="layer_cloud">
    <field name="CLOUD">Nubes</field>
    </block>
    <block type="layer_surf_press">
    <field name="SURF_PRESS">Presión atmosférica</field>
    </block>
    <block type="layer_dewp_temp">
    <field name="DEWP_TEMP">Temperatura de formación de niebla</field>
    </block>
    <block type="layer_air_temp">
    <field name="AIR_TEMP">Temperatura del aire</field>
    </block>
    <block type="layer_10m_wind">
    <field name="10M_WIND">Viento</field>
    </block>
  </category>
  <category name="Agua" colour="#00A6FB">
    <block type="layer_ndwi">
    <field name="NDWI">Lagos</field>
    </block>
    <block type="layer_sea_press">
    <field name="SEA_PRESS">Presión a nivel del mar</field>
    </block>
    <block type="layer_sea_temp">
    <field name="SEA_TEMP">Temperatura del agua</field>
    </block>
    <block type="layer_river">
    <field name="RIVER">Ríos</field>
    </block>
  </category>
  <category name="Gases" colour="#FFF671">
    <block type="layer_aer_ai">
    <field name="AER_AI">Aerosoles</field>
    </block>
    <block type="layer_so2">
    <field name="SO2">Dióxido de azufre</field>
    </block>
    <block type="layer_no2">
    <field name="NO2">Dióxido de nitrógeno</field>
    </block>
    <block type="layer_hcho">
    <field name="HCHO">Metanal</field>
    </block>
    <block type="layer_ch4">
    <field name="CH4">Metano</field>
    </block>
    <block type="layer_co">
    <field name="CO">Monóxido de carbono</field>
    </block>
    <block type="layer_o3">
    <field name="O3">Ozono</field>
    </block>
  </category>
  <category name="Civilización" colour="#B5B5B5">
    <block type="layer_den">
    <field name="DEN">Densidad de población</field>
    </block>
    <block type="layer_light">
    <field name="LIGHT">Luces nocturnas</field>
    </block>
    <block type="layer_human">
    <field name="HUMAN">Modificado por el humano</field>
    </block>
  </category>
  <sep></sep>
  <category name="Especiales" colour="#FF7AE2">
    <block type="transparency_level">
    <field name="transparency"></field>
    </block>
    </category>
</xml>
      `
        });
        // Takes the exercises through the service thanks to the router URL
        const exercise = this.router.url;
        this.ejercicio = this.ejerciosService.getEjercicio(exercise);
        //Load the maps
        this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        this.geeMap2 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        //Add the change listener to the first workspace load the regions and provinces
        this.primaryWorkspace.addChangeListener((primaryEvent) => {
            //TODO:It works for now, however we need to imporve the way we call to the back end each time the code changes.
            if (blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CHANGE === primaryEvent.type || blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CREATE === primaryEvent.type) {
                //Look for the code in the wotkspace
                var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].workspaceToCode(this.primaryWorkspace);
                //split it to differenciate from country, region and province
                var split_code = code.split(',');
                //create three differents variables with each option
                var code_country = split_code[0] + ',';
                var code_region = split_code[1] + ',';
                var code_province = split_code[2] + ',';
                //Due to a stragne split creation. The last code to add is the first, we need to check wether if the codes are the one we want.
                var regionTrue = code_region.startsWith("region=");
                var countryTrue = code_country.startsWith("country=");
                //when code_country references to a region.
                var falseCountry = code_country.startsWith("region=");
                //console.log evertything. Onces we fixed the problem it was commented
                //console.log('country: '+code_country)
                //console.log(falseCountry)
                //console.log('region: '+code_region)
                //console.log(regionTrue)
                //console.log('province: '+code_province)
                //If country_code is a country, use it for the regions.
                if (countryTrue == true) {
                    //Delete the previous lists before the new call
                    localStorage.removeItem('listReg');
                    localStorage.removeItem('listLatinReg');
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        localStorage.setItem('listReg', listReg);
                        console.log("Regiones-->", listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        localStorage.setItem('listLatinReg', listLatinReg);
                        console.log("Regiones Latín-->", listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    localStorage.removeItem('listProv');
                    localStorage.removeItem('listLatinProv');
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        localStorage.setItem('listProv', listProv);
                        console.log("Provincias-->", listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        localStorage.setItem('listLatinProv', listLatinProv);
                        console.log("Provincias Latín-->", listLatinProv);
                    });
                }
                //The last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProv', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProv', listLatinProv);
                    });
                }
            }
        });
        //Disable the blocks that are not joined with the main block in the first workspace
        this.primaryWorkspace.addChangeListener(blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].disableOrphans);
        //Add the change listener to the second workspace load the regions and provinces
        this.primaryWorkspace2.addChangeListener((primaryEvent) => {
            //TODO:It works for now, however we need to imporve the way we call to the back end each time the code changes.
            if (blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CHANGE === primaryEvent.type || blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CREATE === primaryEvent.type) {
                //Look for the code in the wotkspace
                var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].workspaceToCode(this.primaryWorkspace2);
                //split it to differenciate from country, region and province
                var split_code = code.split(',');
                //create three differents variables with each option
                var code_country = split_code[0] + ',';
                var code_region = split_code[1] + ',';
                var code_province = split_code[2] + ',';
                //Due to a stragne split creation. The last code to add is the first, we need to check wether if the codes are the one we want.
                var regionTrue = code_region.startsWith("region=");
                var countryTrue = code_country.startsWith("country=");
                //when code_country references to a region.
                var falseCountry = code_country.startsWith("region=");
                //console.log evertything. Onces we fixed the problem it was commented
                //console.log('country: '+code_country)
                //console.log(falseCountry)
                //console.log('region: '+code_region)
                //console.log(regionTrue)
                //console.log('province: '+code_province)
                //If country_code is a country, use it for the regions.
                if (countryTrue == true) {
                    //Delete the previous lists before the new call
                    localStorage.removeItem('listRegDual');
                    localStorage.removeItem('listLatinRegDual');
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        localStorage.setItem('listRegDual', listReg);
                        console.log("Regiones-->", listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        localStorage.setItem('listLatinRegDual', listLatinReg);
                        console.log("Regiones Latín-->", listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    localStorage.removeItem('listProvDual');
                    localStorage.removeItem('listLatinProvDual');
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        localStorage.setItem('listProvDual', listProv);
                        console.log("Provincias-->", listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        localStorage.setItem('listLatinProvDual', listLatinProv);
                        console.log("Provincias Latín-->", listLatinProv);
                    });
                }
                //The last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvDual', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvDual', listLatinProv);
                    });
                }
            }
        });
        //Disable the blocks that are not joined with the main block in the second workspace
        this.primaryWorkspace2.addChangeListener(blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].disableOrphans);
    }
    //Play button one 
    stepCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Run the map-loading function until it takes the map.
            this.loading.mapLoading();
            //Extract the code from the main blocks in the workspace by creating a root Block and asigning it the rest.
            var rootBlock = null;
            //Select the blocks that are in the top without sorting them.
            var blocks = this.primaryWorkspace.getTopBlocks(false);
            for (var i = 0, block; block = blocks[i]; i++) {
                //Select which ones are going to be those main blocks
                if (block.type == 'buscar_pais' || block.type == 'buscar_oceano' || block.type == 'buscar_seas') {
                    rootBlock = block;
                }
            }
            //Take the code from the rootBlocks. The ones that are connected.
            var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].blockToCode(rootBlock);
            var rawFuel = this.ejercicio.energy;
            var fuel = `fuel=${String(rawFuel)},`;
            //Calls the server with all the necessary parameters in order
            this.mapService.getMapI(code, fuel, this.ejercicio.lat[0], this.ejercicio.long[0], this.ejercicio.popup[0], this.ejercicio.tooltip[0], this.ejercicio.lat[1], this.ejercicio.long[1], this.ejercicio.popup[1], this.ejercicio.tooltip[1], this.ejercicio.lat[2], this.ejercicio.long[2], this.ejercicio.popup[2], this.ejercicio.tooltip[2], this.ejercicio.lat[3], this.ejercicio.long[3], this.ejercicio.popup[3], this.ejercicio.tooltip[3])
                .subscribe(map => {
                //Log the whole string of the iframe.
                console.log(map);
                this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
                //Onces you press the play, if it works botton you´ll be able to answer the exercise.
                var allowAnswer = "true";
                //Store wheter if the kid can answer the question or not. This set it to yes.
                localStorage.setItem('allowAnswer', allowAnswer);
                //Log if the kid can answer.
                console.log(allowAnswer);
                //Sum one for the play button.
                this.countPlays++;
                var plays = String(this.countPlays);
                localStorage.setItem('numberOfPlays', plays);
            }, //I think underscore means that it´s availabe globally. It works fine.
            //I think underscore means that it´s availabe globally. It works fine.
            _error => {
                setTimeout(() => {
                    //Finish map loading function
                    this.loading.dustyLoading.dismiss();
                    //Give an alert message 
                    alert('Parece que Dusty no ha encontrado lo que estabas buscando...');
                    //Set finish time to 1 sec after the error has happend.
                }, 1000);
            });
        });
    }
    //Play button two
    stepCode2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Run the map-loading function until it takes the map.
            this.loading.mapLoading();
            //Extract the code from the main blocks in the workspace by creating a root Block and asigning it the rest.
            var rootBlock = null;
            //Select the blocks that are in the top without sorting them.
            var blocks = this.primaryWorkspace2.getTopBlocks(false);
            for (var i = 0, block; block = blocks[i]; i++) {
                //Select which ones are going to be those main blocks
                if (block.type == 'look_country' || block.type == 'look_oceans' || block.type == 'look_seas') {
                    rootBlock = block;
                }
            }
            //Take the code from the rootBlocks. The ones that are connected.
            var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].blockToCode(rootBlock);
            var rawFuel = this.ejercicio.energy;
            var fuel = `fuel=${String(rawFuel)},`;
            //Calls the server with all the necessary parameters in order
            this.mapService.getMapI(code, fuel, this.ejercicio.lat[0], this.ejercicio.long[0], this.ejercicio.popup[0], this.ejercicio.tooltip[0], this.ejercicio.lat[1], this.ejercicio.long[1], this.ejercicio.popup[1], this.ejercicio.tooltip[1], this.ejercicio.lat[2], this.ejercicio.long[2], this.ejercicio.popup[2], this.ejercicio.tooltip[2], this.ejercicio.lat[3], this.ejercicio.long[3], this.ejercicio.popup[3], this.ejercicio.tooltip[3])
                .subscribe(map => {
                //Log the whole string of the iframe.
                console.log(map);
                this.geeMap2 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
                //Onces you press the play, if it works botton you´ll be able to answer the exercise.
                var allowAnswer = "true";
                //Store wheter if the kid can answer the question or not. This set it to yes.
                localStorage.setItem('allowAnswer', allowAnswer);
                //Log if the kid can answer.
                console.log(allowAnswer);
                //Sum one for the play button.
                this.countPlays++;
                var plays = String(this.countPlays);
                localStorage.setItem('numberOfPlays', plays);
            }, //I think underscore means that it´s availabe globally. It works fine.
            //I think underscore means that it´s availabe globally. It works fine.
            _error => {
                setTimeout(() => {
                    //Finish map loading function
                    this.loading.dustyLoading.dismiss();
                    //Give an alert message 
                    alert('Parece que Dusty no ha encontrado lo que estabas buscando...');
                    //Set finish time to 1 sec after the error has happend.
                }, 1000);
            });
        });
    }
};
DualBlocklyComponent.ctorParameters = () => [
    { type: _Services_counter_service__WEBPACK_IMPORTED_MODULE_13__["CounterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _Services_map_service__WEBPACK_IMPORTED_MODULE_9__["MapService"] },
    { type: _Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_11__["EjerciciosService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] }
];
DualBlocklyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dual-blockly',
        template: _raw_loader_dual_blockly_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dual_blockly_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DualBlocklyComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map