(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercises-exercises-module"],{

/***/ "4JGg":
/*!************************************************************************!*\
  !*** ./src/app/members/student/students/exercises/exercises.module.ts ***!
  \************************************************************************/
/*! exports provided: ExercisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageModule", function() { return ExercisesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises-routing.module */ "AfFW");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises.page */ "GQfr");







let ExercisesPageModule = class ExercisesPageModule {
};
ExercisesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisesPageRoutingModule"]
        ],
        declarations: [_exercises_page__WEBPACK_IMPORTED_MODULE_6__["ExercisesPage"]]
    })
], ExercisesPageModule);



/***/ }),

/***/ "4iwe":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/Others/Map/Popups/report/report.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content>\n    <ion-label>\n      {{userStudent}}\n    </ion-label>\n    <br>\n    <ion-label>\n     {{ejercicio}}\n    </ion-label>\n    <br>\n    <ion-label>\n      Fallos: {{fails}} \n    </ion-label>\n    <br>\n    <ion-label>\n      Pulsador: {{numberOfPlays}} \n    </ion-label>\n    <br>\n    <ion-label>\n      Segundos: {{counterTime}} \n    </ion-label>\n    <br>\n    <ion-label>\n      Pistas usadas: {{numberHints}} \n    </ion-label>\n    <br>\n    <ion-label>\n      {{ended}} \n    </ion-label>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "8poG":
/*!************************************************************************!*\
  !*** ./src/app/members/student/students/exercises/exercises.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  height: 60px;\n}\nion-toolbar #Perfil {\n  position: absolute;\n  left: 93.4%;\n  right: 1.88%;\n  height: 60px;\n  width: 60px;\n}\nion-toolbar #Perfil:hover {\n  position: absolute;\n  left: 93%;\n  right: 1.5%;\n  height: 70px;\n  width: 70px;\n}\nion-toolbar #Back {\n  position: absolute;\n  left: 2.22%;\n  right: 94.65%;\n  height: 60px;\n}\nion-toolbar #Back:hover {\n  position: absolute;\n  left: 2%;\n  right: 94%;\n  height: 70px;\n}\nion-content {\n  --background: url(\"https://s3-alpha-sig.figma.com/img/6279/f5f0/c34e91dd5263e688ae28c5905917526c?Expires=1621209600&Signature=ZmPSZsyN9jB~vRpfqisN~SgAFX0SlZ4eYCzq6pUUHBzEwbUr6xf~kunSZEP1SfFz2D8txNIIfhvGw-pZC-nl-0MOqFfbKLS8vzWRvmS37LN~odnKhoYQVT2faKlAQxAhLTkki77-opnGoGMxZ5EADy71dEtcruCyEGff1m1XS57bDMkFG5tbAoAm14PCXYQUf4FV7eWl5D~9sR-dtppWwvIxWYiTXie-IANLeWcWwuAKFEsb2bdMRo5Fvrod6YZDpOAXp37xcmeJRdcric3LezzjJydGa30wVLB~lrBr~YuXqb~q8nSjsaLn8BPZZD1Py4tEDPjIt5K6b9ToBSg8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\")0 0/100% 100% no-repeat;\n}\nion-content ion-label {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 30%;\n}\n#window {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90%;\n  opacity: 1;\n}\n#window:hover {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n#seresVivos {\n  position: absolute;\n  top: 22%;\n  left: 22.21%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#seresButton {\n  position: absolute;\n  top: 42%;\n  left: 22.21%;\n  width: 150px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#seresButton:hover {\n  top: 41.5%;\n  left: 22%;\n  width: 160px;\n  height: 52px;\n}\n#ecos {\n  position: absolute;\n  top: 22%;\n  left: 41.67%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#ecosButton {\n  position: absolute;\n  top: 42%;\n  left: 41.67%;\n  width: 150px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#ecosButton:hover {\n  top: 41.5%;\n  left: 41%;\n  width: 160px;\n  height: 52px;\n}\n#hum {\n  position: absolute;\n  top: 22%;\n  left: 61.55%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#humButton {\n  position: absolute;\n  top: 42%;\n  left: 58.85%;\n  width: 245px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#humButton:hover {\n  top: 41.5%;\n  left: 58.3%;\n  width: 255px;\n  height: 52px;\n}\n#camb {\n  position: absolute;\n  top: 56%;\n  left: 71.24%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#cambioButton {\n  position: absolute;\n  top: 76%;\n  left: 69.88%;\n  width: 183px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#cambioButton:hover {\n  top: 75.5%;\n  left: 69.3%;\n  width: 193px;\n  height: 52px;\n}\n#mat {\n  position: absolute;\n  top: 56%;\n  left: 12%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#materiaButton {\n  position: absolute;\n  top: 76%;\n  left: 10.7%;\n  width: 181px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#materiaButton:hover {\n  top: 75.5%;\n  left: 10.3%;\n  width: 191px;\n  height: 52px;\n}\n#primario {\n  position: absolute;\n  top: 56%;\n  left: 31.89%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#primarioButton {\n  position: absolute;\n  top: 76%;\n  left: 31.89%;\n  width: 165px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#primarioButton:hover {\n  top: 75.5%;\n  left: 31.1%;\n  width: 175px;\n  height: 52px;\n}\n#climas {\n  position: absolute;\n  top: 56%;\n  left: 51.57%;\n  width: 150px;\n  height: 140px;\n  opacity: 1;\n}\n#climasButton {\n  position: absolute;\n  top: 76%;\n  left: 51.57%;\n  width: 150px;\n  height: 42px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  background: #ED1B26;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n#climasButton:hover {\n  top: 75.5%;\n  left: 51%;\n  width: 160px;\n  height: 52px;\n}\n#freepik {\n  position: absolute;\n  left: 0%;\n  right: 78.82%;\n  top: 0%;\n  bottom: 53.46%;\n}\n#dusty {\n  position: absolute;\n  left: 76%;\n  top: 0%;\n  bottom: 53.46%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2V4ZXJjaXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFBRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVOO0FBQUU7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFTjtBQUFFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFTjtBQUFFO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFTjtBQUVBO0VBQ0UsZ2hCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBRU47QUFJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQURGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFGRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQURGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZXhlcmNpc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICBoZWlnaHQ6IDYwcHg7XG4gICNQZXJmaWx7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA5My40JTtcbiAgICAgIHJpZ2h0OiAxLjg4JTtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICB9XG4gICNQZXJmaWw6aG92ZXJ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA5MyU7XG4gICAgICByaWdodDogMS41JTtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICB9XG4gICNCYWNre1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMi4yMiU7XG4gICAgICByaWdodDogOTQuNjUlO1xuICAgICAgaGVpZ2h0OiA2MHB4OyAgIFxuICB9XG4gICNCYWNrOmhvdmVye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMiU7XG4gICAgICByaWdodDogOTQlO1xuICAgICAgaGVpZ2h0OiA3MHB4OyAgIFxuICB9XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy1hbHBoYS1zaWcuZmlnbWEuY29tL2ltZy82Mjc5L2Y1ZjAvYzM0ZTkxZGQ1MjYzZTY4OGFlMjhjNTkwNTkxNzUyNmM/RXhwaXJlcz0xNjIxMjA5NjAwJlNpZ25hdHVyZT1abVBTWnN5TjlqQn52UnBmcWlzTn5TZ0FGWDBTbFo0ZVlDenE2cFVVSEJ6RXdiVXI2eGZ+a3VuU1pFUDFTZkZ6MkQ4dHhOSUlmaHZHdy1wWkMtbmwtME1PcUZmYktMUzh2eldSdm1TMzdMTn5vZG5LaG9ZUVZUMmZhS2xBUXhBaExUa2tpNzctb3BuR29HTXhaNUVBRHk3MWRFdGNydUN5RUdmZjFtMVhTNTdiRE1rRkc1dGJBb0FtMTRQQ1hZUVVmNEZWN2VXbDVEfjlzUi1kdHBwV3d2SXhXWWlUWGllLUlBTkxlV2NXd3VBS0ZFc2IyYmRNUm81RnZyb2Q2WVpEcE9BWHAzN3hjbWVKUmRjcmljM0xlenpqSnlkR2EzMHdWTEJ+bHJCcn5ZdVhxYn5xOG5TanNhTG44QlBaWkQxUHk0dEVEUGpJdDVLNmI5VG9CU2c4bXdfXyZLZXktUGFpci1JZD1BUEtBSU5UVlNVR0VXSDVYRDVVQScpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIGlvbi1sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMzAlO1xuICB9XG4gIFxufVxuXG4vL0ltYWdlIGluc2lkZSB0aGUgbWV0YWwgYm9yZGVyXG4jd2luZG93e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDUlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgb3BhY2l0eTogMTtcbn1cbiN3aW5kb3c6aG92ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLy9UaGVtZSBTZXJlcyB2aXZvc1xuI3NlcmVzVml2b3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDIyLjIxJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI3NlcmVzQnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIlO1xuICBsZWZ0OiAyMi4yMSU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI0VEMUIyNjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiNzZXJlc0J1dHRvbjpob3ZlcntcbiAgdG9wOiA0MS41JTtcbiAgbGVmdDogMjIlO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuLy9UaGVtZSBFY29zaXN0ZW1hc1xuI2Vjb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDQxLjY3JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI2Vjb3NCdXR0b257XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6IDQyJTtcbiAgbGVmdDogNDEuNjclO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNFRDFCMjY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jZWNvc0J1dHRvbjpob3ZlcntcbiAgdG9wOiA0MS41JTtcbiAgbGVmdDogNDElO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuXG5cbi8vVGhlbWUgSHVtYW5vIHkgc29jaWVkYWRcbiNodW17XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDYxLjU1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI2h1bUJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQyJTtcbiAgbGVmdDogNTguODUlO1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNFRDFCMjY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jaHVtQnV0dG9uOmhvdmVye1xuICB0b3A6IDQxLjUlO1xuICBsZWZ0OiA1OC4zJTtcbiAgd2lkdGg6IDI1NXB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cblxuLy9UaGVtZSBDYW1iaW8gQ2xpbcOhdGljb1xuI2NhbWJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NiU7XG4gIGxlZnQ6IDcxLjI0JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuI2NhbWJpb0J1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc2JTtcbiAgbGVmdDogNjkuODglO1xuICB3aWR0aDogMTgzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNFRDFCMjY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jY2FtYmlvQnV0dG9uOmhvdmVye1xuICB0b3A6IDc1LjUlO1xuICBsZWZ0OiA2OS4zJTtcbiAgd2lkdGg6IDE5M3B4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cbi8vVGhlbWUgTWF0ZXJpYSB5IEVuZXJnw61hXG4jbWF0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTYlO1xuICBsZWZ0OiAxMiU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb3BhY2l0eTogMTtcbn1cbiNtYXRlcmlhQnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzYlO1xuICBsZWZ0OiAxMC43JTtcbiAgd2lkdGg6IDE4MXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kOiAjRUQxQjI2O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuI21hdGVyaWFCdXR0b246aG92ZXJ7XG4gIHRvcDogNzUuNSU7XG4gIGxlZnQ6IDEwLjMlO1xuICB3aWR0aDogMTkxcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuXG4vL1RoZW1lIFNlY3RvciBQcmltYXJpb1xuI3ByaW1hcmlve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTYlO1xuICBsZWZ0OiAzMS44OSU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb3BhY2l0eTogMTtcbn1cbiNwcmltYXJpb0J1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc2JTtcbiAgbGVmdDogMzEuODklO1xuICB3aWR0aDogMTY1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNFRDFCMjY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jcHJpbWFyaW9CdXR0b246aG92ZXJ7XG4gIHRvcDogNzUuNSU7XG4gIGxlZnQ6IDMxLjElO1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuXG4vL1RoZW1lIENsaW1hc1xuI2NsaW1hc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU2JTtcbiAgbGVmdDogNTEuNTclO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4jY2xpbWFzQnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzYlO1xuICBsZWZ0OiA1MS41NyU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI0VEMUIyNjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiNjbGltYXNCdXR0b246aG92ZXJ7XG4gIHRvcDogNzUuNSU7XG4gIGxlZnQ6IDUxJTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cblxuI2ZyZWVwaWt7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiA3OC44MiU7XG4gIHRvcDogMCU7XG4gIGJvdHRvbTogNTMuNDYlO1xufVxuI2R1c3R5e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc2JTtcbiAgdG9wOiAwJTtcbiAgYm90dG9tOiA1My40NiU7XG59Il19 */");

/***/ }),

/***/ "AfFW":
/*!********************************************************************************!*\
  !*** ./src/app/members/student/students/exercises/exercises-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ExercisesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageRoutingModule", function() { return ExercisesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.page */ "GQfr");




const routes = [
    {
        path: '',
        component: _exercises_page__WEBPACK_IMPORTED_MODULE_3__["ExercisesPage"]
    }
];
let ExercisesPageRoutingModule = class ExercisesPageRoutingModule {
};
ExercisesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExercisesPageRoutingModule);



/***/ }),

/***/ "GQfr":
/*!**********************************************************************!*\
  !*** ./src/app/members/student/students/exercises/exercises.page.ts ***!
  \**********************************************************************/
/*! exports provided: ExercisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPage", function() { return ExercisesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exercises_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exercises.page.html */ "jO3y");
/* harmony import */ var _exercises_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises.page.scss */ "8poG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _Others_Map_Popups_report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Others/Map/Popups/report/report.component */ "fblK");







let ExercisesPage = class ExercisesPage {
    constructor(authService, popoverController) {
        this.authService = authService;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        //Delete the option of answer and the lists of places once you enter to choose an exercise.
        localStorage.removeItem('allowAnswer');
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listRegTeacher');
        localStorage.removeItem('listLatinRegTeacher');
    }
    logout() {
        this.authService.logout();
    }
    presentResults(eve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _Others_Map_Popups_report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"],
                componentProps: {},
                cssClass: 'popOver',
                event: eve,
                translucent: true
            });
            return yield popover.present();
        });
    }
};
ExercisesPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ExercisesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exercises',
        template: _raw_loader_exercises_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercises_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExercisesPage);



/***/ }),

/***/ "fblK":
/*!******************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/report/report.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report.component.html */ "4iwe");
/* harmony import */ var _report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component.scss */ "n7DY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReportComponent = class ReportComponent {
    constructor() { }
    ngOnInit() {
        this.userStudent = localStorage.getItem('userStudent');
        this.ejercicio = localStorage.getItem('exerciseDoing');
        this.fails = localStorage.getItem('fails');
        this.numberOfPlays = localStorage.getItem('numberOfPlays');
        this.counterTime = localStorage.getItem('counterTime');
        this.numberHints = localStorage.getItem('numberHints');
        this.ended = localStorage.getItem('exDone');
    }
};
ReportComponent.ctorParameters = () => [];
ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportComponent);



/***/ }),

/***/ "jO3y":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/student/students/exercises/exercises.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" id=\"Back\" [routerLink]=\"['/students/student-home']\">\n      <ion-button>\n      <img  src=\"/assets/buttons/back-arrow.png\">\n      </ion-button>\n    </ion-buttons>\n    <ion-button [routerLink]=\"['/students/student-home']\"\n                    slot=\"end\" \n                    id=\"Perfil\"  \n                    color=\"morado\">\n      <img  src=\"/assets/users/astronauta.png\">\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-avatar [routerLink]=\"['/alumno/vegetacion']\" id=\"seresVivos\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n      <img  src=\"/assets/exercise_themes/seresVivos.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/vegetacion']\" id=\"seresButton\" color=\"morado\">\n    <ion-label>\n      Seres Vivos\n    </ion-label>\n    \n  </ion-buttons>\n  \n  \n  <ion-avatar [routerLink]=\"['/alumno/ecosistemas']\" id=\"ecos\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n      <img  src=\"/assets/exercise_themes/ecosistemas.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/ecosistemas']\" id=\"ecosButton\" >\n      <ion-label>\n        Ecosistemas\n      </ion-label>\n  </ion-buttons>\n  \n\n  <ion-avatar [routerLink]=\"['/alumno/hum-soc']\" id=\"hum\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n    <img  src=\"/assets/exercise_themes/humano.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/hum-soc']\" id=\"humButton\" color=\"morado\">\n    <ion-label>\n      El humano y la sociedad\n    </ion-label>\n  </ion-buttons>\n\n  <ion-avatar  [routerLink]=\"['/alumno/cambio-climatico']\"id=\"camb\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n    <img  src=\"/assets/exercise_themes/cambioClimatico.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/cambio-climatico']\" id=\"cambioButton\" color=\"morado\">\n    <ion-label>\n      Cambio Climático\n    </ion-label>\n    \n  </ion-buttons>\n\n  <ion-avatar id=\"mat\" [routerLink]=\"['/alumno/materia']\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n    <img  src=\"/assets/exercise_themes/materia.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/materia']\" id=\"materiaButton\" color=\"morado\">\n    <ion-label>\n      Materia y energía\n    </ion-label>\n  </ion-buttons>\n\n  <ion-avatar [routerLink]=\"['/alumno/primario']\"id=\"primario\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n    <img  src=\"/assets/exercise_themes/primario.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/primario']\" id=\"primarioButton\" color=\"morado\">\n    <ion-label>\n      Sector primario\n    </ion-label>\n  </ion-buttons>\n  \n  <ion-avatar id=\"climas\" [routerLink]=\"['/alumno/climas']\">\n    <img  src=\"/assets/exercise_themes/metal.png\">\n    <ion-avatar id=\"window\">\n    <img  src=\"/assets/exercise_themes/climas.png\">\n    </ion-avatar>\n  </ion-avatar>\n  <ion-buttons class=\"ion-text-center\" [routerLink]=\"['/alumno/climas']\" id=\"climasButton\" color=\"morado\">\n    <ion-label>\n      Climas\n    </ion-label>\n  </ion-buttons>\n\n  <ion-img  id=\"freepik\" src=\"https://s3-alpha-sig.figma.com/img/ecd7/1670/39874682f80aa871d210dbb4795c6906?Expires=1621209600&Signature=bodcpreabAdN-rXL6QtdAr8zqdYG9q6yhhL~pE9jBsUlIQRLjlOCQIm-OWJLzG4vAXqObOuq00TOtfOmRTppaQGwculWjjNZKLp7NdYuoUhoVGToJ3HzqQcpHOK6cVuUOIS5Hi4~JzzuPuSsOo6EEvrCbHvmMw9uk8-32NKNAVR394prDseVQOAqCA9VFvISOr62TEjYljbhVdTXwnVkJpMMB1bDISe99R023bbTiQAqf93P4A-XxwJaBAZ5t9PkAyJW~3UWxRolLOvzsb1VVufgBSqeaU~m2p2tPmeJ~lgmJuwbTJmKevbKSon70gLUrPrjxMhbMyc3sEjakj-ang__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA\"></ion-img>\n  <ion-img id=\"dusty\" src=\"/assets/icon/dusty.svg\"></ion-img>\n</ion-content>\n\n\n");

/***/ }),

/***/ "n7DY":
/*!********************************************************************************!*\
  !*** ./src/app/members/student/Others/Map/Popups/report/report.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=exercises-exercises-module.js.map