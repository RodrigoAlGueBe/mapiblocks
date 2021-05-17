(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-calendar-calendar-module"],{

/***/ "9rMw":
/*!******************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/cal-modal/cal-modal.module.ts ***!
  \******************************************************************************/
/*! exports provided: CalModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModalPageModule", function() { return CalModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cal_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cal-modal-routing.module */ "JaEY");
/* harmony import */ var _cal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cal-modal.page */ "Gfug");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");









let CalModalPageModule = class CalModalPageModule {
};
CalModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cal_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalModalPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"]
        ],
        declarations: [_cal_modal_page__WEBPACK_IMPORTED_MODULE_6__["CalModalPage"]]
    })
], CalModalPageModule);



/***/ }),

/***/ "CH1w":
/*!***************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/calendar-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "vzUL");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    },
    {
        path: 'cal-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../Pages/calendar/cal-modal/cal-modal.module */ "9rMw")).then(m => m.CalModalPageModule)
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ "G2eu":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/calendar/cal-modal/cal-modal.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"close()\">\n      <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>{{ viewTitle }}</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"save()\">\n      <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n \n<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\">Title</ion-label>\n    <ion-input tpye=\"text\" [(ngModel)]=\"event.title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Description</ion-label>\n    <ion-input tpye=\"text\" [(ngModel)]=\"event.desc\"></ion-input>\n  </ion-item>\n \n  <calendar\n    *ngIf=\"modalReady\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\"\n    lockSwipes=\"true\"\n  >\n  </calendar>\n</ion-content>");

/***/ }),

/***/ "Gfug":
/*!****************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/cal-modal/cal-modal.page.ts ***!
  \****************************************************************************/
/*! exports provided: CalModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModalPage", function() { return CalModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cal_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cal-modal.page.html */ "G2eu");
/* harmony import */ var _cal_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cal-modal.page.scss */ "f0o2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CalModalPage = class CalModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.event = {
            title: '',
            desc: '',
            startTime: null,
            endTime: '',
            allDay: true
        };
        this.modalReady = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 0);
    }
    save() {
        this.modalCtrl.dismiss({ event: this.event });
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onTimeSelected(ev) {
        this.event.startTime = new Date(ev.selectedTime);
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
CalModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CalModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cal-modal',
        template: _raw_loader_cal_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cal_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalModalPage);



/***/ }),

/***/ "JaEY":
/*!**************************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/cal-modal/cal-modal-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CalModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModalPageRoutingModule", function() { return CalModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cal-modal.page */ "Gfug");




const routes = [
    {
        path: '',
        component: _cal_modal_page__WEBPACK_IMPORTED_MODULE_3__["CalModalPage"]
    }
];
let CalModalPageRoutingModule = class CalModalPageRoutingModule {
};
CalModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalModalPageRoutingModule);



/***/ }),

/***/ "K7X5":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/calendar/calendar.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Actividades programadas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openCalModal()\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"calendar.mode\">\n    <ion-segment-button value=\"month\">\n      <ion-label>Mes</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"week\">\n      <ion-label>Semana</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"day\">\n      <ion-label>Día</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"createRandomEvents()\" expand=\"block\" fill=\"outline\">\n        Añadir eventos Random\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"removeEvents()\" expand=\"block\" fill=\"outline\">\n        Eliminar todos los eventos\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <!-- Move back one screen of the slides-->\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <h2>{{viewTitle}}</h2>\n    </ion-col>\n\n    <!-- Move forward one screen of the slides-->\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n  </ion-row>\n  <calendar\n  [eventSource]=\"eventSource\"\n  [calendarMode]=\"calendar.mode\"\n  [currentDate]=\"calendar.currentDate\"\n  (onEventSelected)=\"onEventSelected($event)\"\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\n  startHour=\"6\"\n  endHour=\"20\"\n  step=\"30\"\n  startingDayWeek=\"1\"\n  [monthviewDisplayEventTemplate]=\"template\"\n>\n</calendar>\n \n<ng-template #template let-view=\"view\" let-row=\"row\" let-col=\"col\">\n  <div [class.with-event]=\"view.dates[row*7+col].events.length\">\n    {{view.dates[row*7+col].label}}\n    <div class=\"indicator-container\">\n      <div class=\"event-indicator\" *ngFor=\"let e of view.dates[row*7+col].events\"></div>\n    </div>\n  </div>\n</ng-template>\n</ion-content>\n");

/***/ }),

/***/ "NrtP":
/*!*******************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/calendar.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"https://globalenergyprize.org/en/wp-content/uploads/2020/09/3296e5dad944d313478fc911c85c192e61eb-1.jpg\")0 0/100% 100% no-repeat;\n}\n\n.indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n}\n\n.event-indicator {\n  background: var(--ion-color-success);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n\n.with-event {\n  background-color: var(--ion-color-primary);\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtKQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUVJO0VBQ0Usa0NBQUE7QUFDTjs7QUFFSTtFQUNFLHFEQUFBO0FBQU47O0FBSUU7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoiY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dsb2JhbGVuZXJneXByaXplLm9yZy9lbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOS8zMjk2ZTVkYWQ5NDRkMzEzNDc4ZmM5MTFjODVjMTkyZTYxZWItMS5qcGcnKTAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuLmluZGljYXRvci1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gIH1cbiAgIFxuICAuZXZlbnQtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgfVxuICAgXG4gIDpob3N0IDo6bmctZGVlcCB7XG4gICAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICBcbiAgICAubW9udGh2aWV3LXNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAgXG4gIC53aXRoLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "ecfz":
/*!*******************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/calendar.module.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "CH1w");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "vzUL");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _cal_modal_cal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cal-modal/cal-modal.module */ "9rMw");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared.module */ "d2mR");










let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _cal_modal_cal_modal_module__WEBPACK_IMPORTED_MODULE_8__["CalModalPageModule"]
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
    })
], CalendarPageModule);



/***/ }),

/***/ "f0o2":
/*!******************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/cal-modal/cal-modal.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0FBRFIiLCJmaWxlIjoiY2FsLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gICAgLm1vbnRodmlldy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "vzUL":
/*!*****************************************************************!*\
  !*** ./src/app/members/teacher/Pages/calendar/calendar.page.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar.page.html */ "K7X5");
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.page.scss */ "NrtP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cal_modal_cal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cal-modal/cal-modal.page */ "Gfug");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");








let CalendarPage = class CalendarPage {
    constructor(alertCtrl, locale, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    ngOnInit() { }
    // Change current month/week/day
    next() {
        this.myCal.slideNext();
    }
    back() {
        this.myCal.slidePrev();
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Use Angular date pipe for conversion
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(event.startTime, 'medium', this.locale);
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(event.endTime, 'medium', this.locale);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.desc,
                message: 'From: ' + start + '<br><br>To: ' + end,
                buttons: ['OK'],
            });
            alert.present();
        });
    }
    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true,
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                });
            }
        }
        this.eventSource = events;
    }
    removeEvents() {
        this.eventSource = [];
    }
    openCalModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _cal_modal_cal_modal_page__WEBPACK_IMPORTED_MODULE_6__["CalModalPage"],
                cssClass: 'cal-modal',
                backdropDismiss: false
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                if (result.data && result.data.event) {
                    let event = result.data.event;
                    if (event.allDay) {
                        let start = event.startTime;
                        event.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
                        event.endTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate() + 1));
                    }
                    this.eventSource.push(result.data.event);
                    this.myCal.loadEvents();
                }
            });
        });
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CalendarPage.propDecorators = {
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],] }]
};
CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=Pages-calendar-calendar-module.js.map