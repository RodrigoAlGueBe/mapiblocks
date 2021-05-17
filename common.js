(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "CV9K":
/*!*************************************************!*\
  !*** ./src/app/members/teacher/teacher.page.ts ***!
  \*************************************************/
/*! exports provided: TeacherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPage", function() { return TeacherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teacher.page.html */ "bOyk");
/* harmony import */ var _teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher.page.scss */ "x6Vf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var src_app_services_killAll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/killAll.service */ "I5Gk");
/* harmony import */ var _student_Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../student/Others/Services/ejercicios/ejercicios.service */ "m1hz");








let TeacherPage = class TeacherPage {
    constructor(ejerciosService, authService, alertCtrl, killAll) {
        this.ejerciosService = ejerciosService;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.killAll = killAll;
        this.ejercicios = [];
    }
    ngOnInit() {
        //Mock to show a first demo info
        this.numberHints = localStorage.getItem('numberHints');
        this.hintsClick = localStorage.getItem('hintsClick');
        this.fails = localStorage.getItem('fails');
    }
    logout() {
        this.authService.logout();
    }
    killEverything() {
        this.killAll.kill();
    }
    //Alerta para crear nuevos ejercicios dentro de la página web (En construcción)
    openAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '¡Nuevo ejercicio!',
                inputs: [
                    {
                        name: 'id',
                        type: 'text',
                        placeholder: 'Id'
                    },
                    {
                        name: 'ob',
                        type: 'text',
                        placeholder: 'ob'
                    },
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Título'
                    },
                    {
                        name: 'imageURL',
                        type: 'text',
                        placeholder: 'Imagen URL'
                    },
                    {
                        name: 'enunciado',
                        type: 'text',
                        placeholder: 'Enunciado'
                    },
                    {
                        name: 'subtítulo',
                        type: 'text',
                        placeholder: 'Subtítulo'
                    },
                    {
                        name: 'opciones',
                        type: 'textarea',
                        placeholder: 'Opciones de respuesta'
                    },
                    {
                        name: 'pills',
                        type: 'textarea',
                        placeholder: 'Píldora informática'
                    },
                    {
                        name: 'web',
                        type: 'text',
                        placeholder: 'Web de información'
                    },
                    {
                        name: 'lat',
                        type: 'text',
                        placeholder: 'Web de información'
                    },
                    {
                        name: 'long',
                        type: 'text',
                        placeholder: 'Web de información'
                    },
                    {
                        name: 'popup',
                        type: 'text',
                        placeholder: 'Web de información'
                    },
                    {
                        name: 'tooltip',
                        type: 'text',
                        placeholder: 'Web de información'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Te has quedado sin nuevo ejercicio');
                        }
                    }, {
                        text: 'Crear',
                        handler: (data) => {
                            this.addEjercicioApi(data.id, data.ob, data.theme, data.title, data.imageURL, data.statement, data.subtitle, data.options, data.correcto, data.pills, data.web, data.lat, data.long, data.popup, data.tooltip, data.difficulty, data.energy, data.hints, data.comp);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //Método POST para crear nuevos ejercicios dentro de la página web (En construcción)
    addEjercicioApi(id, ob, theme, title, imageURL, statement, subtitle, options, correcto, pills, web, lat, long, popup, tooltip, difficulty, energy, hints, comp) {
        const nuevo = {
            id,
            ob,
            theme,
            title,
            imageURL,
            statement,
            subtitle,
            options,
            correcto,
            pills,
            web,
            lat,
            long,
            popup,
            tooltip,
            difficulty,
            energy,
            hints,
            comp,
        };
        this.ejerciosService.addEjerciciosAPI(nuevo)
            .subscribe((nuevoEjercicio) => {
            this.ejercicios.unshift(nuevoEjercicio);
        });
    }
};
TeacherPage.ctorParameters = () => [
    { type: _student_Others_Services_ejercicios_ejercicios_service__WEBPACK_IMPORTED_MODULE_7__["EjerciciosService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_killAll_service__WEBPACK_IMPORTED_MODULE_6__["KillAllService"] }
];
TeacherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-teacher',
        template: _raw_loader_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeacherPage);



/***/ }),

/***/ "I5Gk":
/*!*********************************************!*\
  !*** ./src/app/services/killAll.service.ts ***!
  \*********************************************/
/*! exports provided: KillAllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillAllService", function() { return KillAllService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let KillAllService = class KillAllService {
    constructor() { }
    ngOnInit() { }
    kill() {
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listRegTeach');
        localStorage.removeItem('listLatinRegTeach');
        localStorage.removeItem('listProvTeach');
        localStorage.removeItem('listLatinProvTeach');
    }
};
KillAllService.ctorParameters = () => [];
KillAllService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KillAllService);



/***/ }),

/***/ "X/V9":
/*!***********************************************************!*\
  !*** ./src/app/members/teacher/teacher-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TeacherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPageRoutingModule", function() { return TeacherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teacher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher.page */ "CV9K");




const routes = [
    {
        path: 'teacher',
        component: _teacher_page__WEBPACK_IMPORTED_MODULE_3__["TeacherPage"],
        children: [
            {
                path: 'teacher-account',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Pages-teacher-account-teacher-account-module */ "Pages-teacher-account-teacher-account-module").then(__webpack_require__.bind(null, /*! ./Pages/teacher-account/teacher-account.module */ "2fSp")).then(m => m.TeacherAccountPageModule)
                    },
                    {
                        path: ":student",
                        loadChildren: () => __webpack_require__.e(/*! import() | src-app-members-teacher-Pages-teacher-account-reports-reports-module */ "Pages-teacher-account-reports-reports-module").then(__webpack_require__.bind(null, /*! src/app/members/teacher/Pages/teacher-account/reports/reports.module */ "8KEk")).then(m => m.ReportsPageModule)
                    },
                ]
            },
            {
                path: 'class-room',
                loadChildren: () => __webpack_require__.e(/*! import() | Pages-class-room-class-room-module */ "Pages-class-room-class-room-module").then(__webpack_require__.bind(null, /*! ./Pages/class-room/class-room.module */ "edVn")).then(m => m.ClassRoomPageModule)
            },
            {
                path: 'calendar',
                loadChildren: () => __webpack_require__.e(/*! import() | Pages-calendar-calendar-module */ "Pages-calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./Pages/calendar/calendar.module */ "ecfz")).then(m => m.CalendarPageModule)
            },
            {
                path: 't-space',
                loadChildren: () => Promise.all(/*! import() | src-app-members-teacher-Pages-t-space-t-space-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-members-teacher-Pages-t-space-t-space-module")]).then(__webpack_require__.bind(null, /*! src/app/members/teacher/Pages/t-space/t-space.module */ "pnAI")).then(m => m.TSpacePageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/teacher/teacher-account',
        pathMatch: 'full'
    }
];
let TeacherPageRoutingModule = class TeacherPageRoutingModule {
};
TeacherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeacherPageRoutingModule);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "bOyk":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/teacher.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"teacher-account\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Usuario</ion-label>\n      <ion-badge>3</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"class-room\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Clases</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"calendar\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Calendario</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"t-space\" (click)=\"killEverything()\">\n      <ion-icon name=\"earth\"></ion-icon>\n      <ion-label>Mapas</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "pX2f":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3ccd7557.js */ "2atR");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "x6Vf":
/*!***************************************************!*\
  !*** ./src/app/members/teacher/teacher.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=common.js.map