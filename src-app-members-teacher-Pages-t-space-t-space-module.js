(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-members-teacher-Pages-t-space-t-space-module"],{

/***/ "Gnjl":
/*!***************************************************************!*\
  !*** ./src/app/members/teacher/Pages/t-space/t-space.page.ts ***!
  \***************************************************************/
/*! exports provided: TSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSpacePage", function() { return TSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_t_space_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./t-space.page.html */ "bcHg");
/* harmony import */ var _t_space_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-space.page.scss */ "rFmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_killAll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/killAll.service */ "I5Gk");





let TSpacePage = class TSpacePage {
    constructor(killAllService) {
        this.killAllService = killAllService;
        this.singleBlockly = true;
        this.dualBlockly = false;
    }
    ngOnInit() {
        this.killAllService;
        localStorage.removeItem('listReg');
        localStorage.removeItem('listLatinReg');
        localStorage.removeItem('listRegTeacher');
        localStorage.removeItem('listLatinRegTeacher');
        localStorage.removeItem('listProvTeacher');
        localStorage.removeItem('listLatinProvTeacher');
    }
    showDualBlockly() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dualBlockly = !this.dualBlockly;
            this.singleBlockly = !this.singleBlockly;
        });
    }
};
TSpacePage.ctorParameters = () => [
    { type: src_app_services_killAll_service__WEBPACK_IMPORTED_MODULE_4__["KillAllService"] }
];
TSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-t-space',
        template: _raw_loader_t_space_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_t_space_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TSpacePage);



/***/ }),

/***/ "S44O":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Components/blck-dual-t/blck-dual-t.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <table width=\"100%\">\n    <tr>\n      <td>\n        <div id=\"primaryDiv\"></div>\n      </td>\n      <td>\n        <div id=\"secondaryDiv\"></div>\n      </td>\n      <td>\n        <iframe [src]=\"geeMap\" frameborder=\"0\" allowfullscreen id=\"gee_map\"></iframe>\n      </td>\n      <td>\n        <iframe [src]=\"geeMap2\" frameborder=\"0\" allowfullscreen id=\"gee_map2\"></iframe>\n      </td>\n    </tr>\n  </table>\n    <p id=\"stepButton\">\n     <ion-button (click)=\"stepCode()\" color=\"primary\">\n       <ion-icon name = \"play-outline\"></ion-icon>\n     </ion-button>\n    </p>\n    <p id=\"stepButton2\">\n      <ion-button (click)=\"stepCode2()\" color=\"primary\">\n        <ion-icon name = \"play-outline\"></ion-icon>\n      </ion-button>\n     </p>\n</ion-content>\n\n");

/***/ }),

/***/ "UPDx":
/*!*****************************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-dual-t/blockeado-t-dual .js ***!
  \*****************************************************************************/
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
    "type": "look_country_dual",
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
  "extensions": ["teacher_dynamic_dual"],
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
  "extensions": ["dynamic_extension2_teacher_dual"],
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
  "extensions": ["dynamic_extension3_teacher_dual"],
  "colour": 127
},

//OCEANIC FRONTIERS
{
  "type": "look_oceans_dual",
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
"extensions": ["big_water_dynamic_dual_teacher"],
"colour": 90
},
{
  "type": "look_seas_dual",
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
"extensions": ["big_mares_dynamic_dual_teacher"],
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
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('teacher_dynamic_dual',
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

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_country_dual'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code_country = 'country=' + dropdown_value + ',';

  return code_country;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension2_teacher_dual',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listRegTeachDual');
        var listLatinRaw=localStorage.getItem('listLatinRegTeachDual');
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

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_extension3_teacher_dual',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listProvTeachDual');
        var listLatinRaw=localStorage.getItem('listLatinProvTeachDual');
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
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_water_dynamic_dual_teacher',
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

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_oceans_dual'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'ocean=' + dropdown_value + ',';

  return code;
};

var mares=[["Mar Egeo","Aegean Sea"],["Mar de Alborán","Alboran Sea"],["Andam","Andaman or Burma Sea"],["Mar Arabe","Arabian Sea"],["Arafura mar","Arafura Sea"],["océano Ártico","Arctic Ocean"],["Bahía de BAFFIN","Baffin Bay"],["Baleares (Mar ibérico)","Balearic (Iberian Sea)"],["Mar Bali","Bali Sea"],["mar Báltico","Baltic Sea"],["Banda Sea","Banda Sea"],["Marentsz Mar","Barentsz Sea"],["Estrecho de bajo","Bass Strait"],["Bahía de Bengala","Bay of Bengal"],["Golfo de Vizcaya","Bay of Biscay"],["Bahía de Fundy","Bay of Fundy"],["Marufort","Beaufort Sea"],["Mar de Bering","Bering Sea"],["Bismarck Sea","Bismarck Sea"],["Mar Negro","Black Sea"],["Canal de bristol","Bristol Channel"],["Mar Caribe","Caribbean Sea"],["Celebes mar","Celebes Sea"],["mar Céltico","Celtic Sea"],["Mar de ceram","Ceram Sea"],["Mar Chukchi","Chukchi Sea"],["Coral Sea","Coral Sea"],["Estrecho de Davis","Davis Strait"],["Mar Siberiano Oriental","East Siberian Sea"],["Mar de China oriental","Eastern China Sea"],["canal inglés","English Channel"],["Flores Sea","Flores Sea"],["Gran bight australiano","Great Australian Bight"],["Mar de Groenlandia","Greenland Sea"],["Golfo de Aden","Gulf of Aden"],["Golfo de Alaska","Gulf of Alaska"],["Golfo de Aqaba","Gulf of Aqaba"],["Golfo de boni.","Gulf of Boni"],["Golfo de ambos","Gulf of Bothnia"],["Golfo de California","Gulf of California"],["Golfo de Finlandia","Gulf of Finland"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de Guinea","Gulf of Guinea"],["Golfo de México","Gulf of Mexico"],["Golfo de Omán","Gulf of Oman"],["Golfo de Riga","Gulf of Riga"],["Golfo de St. Lawrence","Gulf of St. Lawrence"],["Golfo de Suez","Gulf of Suez"],["Golfo de Tailandia","Gulf of Thailand"],["Golfo de Tomini","Gulf of Tomini"],["Mar de halmahero","Halmahera Sea"],["Bahía Hudson","Hudson Bay"],["Estrecho de Hudson","Hudson Strait"],["océano Indio","Indian Ocean"],["Mas interiores de la costa oeste de Escocia","Inner Seas off the West Coast of Scotland"],["mar Jónico","Ionian Sea"],["Mar irlandés y canal de San Jorge","Irish Sea and St. George's Channel"],["Mar de Japón","Japan Sea"],["Java Sea","Java Sea"],["Mar Kara","Kara Sea"],["Kattegat","Kattegat"],["Labrador Sea","Labrador Sea"],["Laccadive Sea","Laccadive Sea"],["Mar de lapevo","Laptev Sea"],["Mar Liguria","Ligurian Sea"],["Lincoln mar","Lincoln Sea"],["Estrecho de Makassar","Makassar Strait"],["Estrecho de malacca","Malacca Strait"],["Mar Mediterráneo - Cuenca Oriental","Mediterranean Sea - Eastern Basin"],["Mar Mediterráneo - Cuenca occidental","Mediterranean Sea - Western Basin"],["Mar molecular","Molukka Sea"],["Canal de mozambique","Mozambique Channel"],["océano Atlántico Norte","North Atlantic Ocean"],["océano Pacífico Norte","North Pacific Ocean"],["mar del Norte","North Sea"],["Mar de Noruega","Norwegian Sea"],["Golfo pérsico","Persian Gulf"],["Mar filipino","Philippine Sea"],["Red Sea","Red Sea"],["Rio de La Plata","Rio de La Plata"],["Tu mar","Savu Sea"],["Mar de Azov","Sea of Azov"],["Mar de Mármara","Sea of Marmara"],["Mar de Okhotsk","Sea of Okhotsk"],["Ver o interior","Seto Naikai or Inland Sea"],["Skagerrak","Skagerrak"],["Solomon Mar","Solomon Sea"],["Océano Atlántico Sur","South Atlantic Ocean"],["mar del Sur de China","South China Sea"],["oceano Pacifico del Sur","South Pacific Ocean"],["Oceano del Sur","Southern Ocean"],["Estrecho de Gibraltar","Strait of Gibraltar"],["Mar del mar","Sulu Sea"],["Mar de Tasmania","Tasman Sea"],["Las aguas costeras del sureste de Alaska y la Columbia Británica.","The Coastal Waters of Southeast Alaska and British Columbia"],["Los pasajes noroeste","The Northwestern Passages"],["Timor Sea","Timor Sea"],["Mar Tirreno","Tyrrhenian Sea"],["mar Blanco","White Sea"],["Mar Amarillo","Yellow Sea"]]
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_mares_dynamic_dual_teacher',
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

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['look_seas_dual'] = function(block) {
  
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

/***/ "V3rn":
/*!*************************************************************************!*\
  !*** ./src/app/members/teacher/Pages/t-space/t-space-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSpacePageRoutingModule", function() { return TSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _t_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t-space.page */ "Gnjl");




const routes = [
    {
        path: '',
        component: _t_space_page__WEBPACK_IMPORTED_MODULE_3__["TSpacePage"]
    }
];
let TSpacePageRoutingModule = class TSpacePageRoutingModule {
};
TSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TSpacePageRoutingModule);



/***/ }),

/***/ "Vx5I":
/*!************************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-t /blck-t.component.ts ***!
  \************************************************************************/
/*! exports provided: BlckTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlckTComponent", function() { return BlckTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blck_t_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blck-t.component.html */ "sADJ");
/* harmony import */ var _blck_t_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blck-t.component.scss */ "scjE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockly/core */ "t/1s");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_members_teacher_Components_blck_t_blockeado_t_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/teacher/Components/blck-t /blockeado-t.js */ "Yh8v");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/blockly/blockly_compressed.js */ "6Y8/");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_members_teacher_Services_t_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/members/teacher/Services/t-map.service */ "sHun");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");











let BlckTComponent = class BlckTComponent {
    constructor(sanitizer, mapService, loading) {
        this.sanitizer = sanitizer;
        this.mapService = mapService;
        this.loading = loading;
        this.GEE = "PCFET0NUWVBFIGh0bWw+Cgo8aGVhZD4KPG1ldGEgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04IiBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiLz4KPHNjcmlwdD5MX1BSRUZFUl9DQU5WQVM9ZmFsc2U7IExfTk9fVE9VQ0g9ZmFsc2U7IExfRElTQUJMRV8zRD1mYWxzZTs8L3NjcmlwdD4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5qcyI+PC9zY3JpcHQ+CjxsaW5rIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvTGVhZmxldC5hd2Vzb21lLW1hcmtlcnMvMi4wLjIvbGVhZmxldC5hd2Vzb21lLW1hcmtlcnMuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vcHl0aG9uLXZpc3VhbGl6YXRpb24vZm9saXVtL21hc3Rlci9mb2xpdW0vdGVtcGxhdGVzL2xlYWZsZXQuYXdlc29tZS5yb3RhdGUuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPHN0eWxlPmh0bWwsIGJvZHkge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTttYXJnaW46IDA7cGFkZGluZzogMDt9PC9zdHlsZT4KPHN0eWxlPiNtYXAge3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO308L3N0eWxlPgo8bWV0YSBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsCiAgICAgICAgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vIiBuYW1lPSJ2aWV3cG9ydCIvPgo8c3R5bGU+I21hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCB7CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIHdpZHRoOiAxMDAuMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAuMCU7CiAgICAgICAgbGVmdDogMC4wJTsKICAgICAgICB0b3A6IDAuMCU7CiAgICAgICAgfQogICAgPC9zdHlsZT4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQuZnVsbHNjcmVlbi8xLjQuMi9Db250cm9sLkZ1bGxTY3JlZW4ubWluLmpzIj48L3NjcmlwdD4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC5mdWxsc2NyZWVuLzEuNC4yL0NvbnRyb2wuRnVsbFNjcmVlbi5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPC9oZWFkPgo8Ym9keT4KPGRpdiBjbGFzcz0iZm9saXVtLW1hcCIgaWQ9Im1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCI+PC9kaXY+CjwvYm9keT4KPHNjcmlwdD4gICAgCiAgICAKICAgIAogICAgICAgIHZhciBib3VuZHMgPSBudWxsOwogICAgCgogICAgdmFyIG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCA9IEwubWFwKAogICAgICAgICdtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQnLCB7CiAgICAgICAgY2VudGVyOiBbNDAuMTkyODAyODMyNDg5ODMsIC0zLjcwMjE0Mzc3MDA1MDcwMl0sCiAgICAgICAgem9vbTogNiwKICAgICAgICBtYXhCb3VuZHM6IGJvdW5kcywKICAgICAgICBsYXllcnM6IFtdLAogICAgICAgIHdvcmxkQ29weUp1bXA6IGZhbHNlLAogICAgICAgIGNyczogTC5DUlMuRVBTRzM4NTcsCiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsCiAgICAgICAgfSk7CkwuY29udHJvbC5zY2FsZSgpLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CgogICAgCiAgICB2YXIgdGlsZV9sYXllcl8zZmJkZWJmYzU5YmY0NmNjYTg5NjgwYmQzN2Q1Y2U1ZiA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6IG51bGwsCiAgICAgICAgImRldGVjdFJldGluYSI6IGZhbHNlLAogICAgICAgICJtYXhOYXRpdmVab29tIjogMTgsCiAgICAgICAgIm1heFpvb20iOiAxOCwKICAgICAgICAibWluWm9vbSI6IDAsCiAgICAgICAgIm5vV3JhcCI6IGZhbHNlLAogICAgICAgICJvcGFjaXR5IjogMSwKICAgICAgICAic3ViZG9tYWlucyI6ICJhYmMiLAogICAgICAgICJ0bXMiOiBmYWxzZQp9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgdmFyIHRpbGVfbGF5ZXJfNjcyOTcwZjU1OWZkNDcyZDk1OTBhNjk5MzdlMzI4YzggPSBMLnRpbGVMYXllcigKICAgICAgICAnaHR0cHM6Ly9tdDEuZ29vZ2xlLmNvbS92dC9seXJzPW0meD17eH0meT17eX0mej17en0nLAogICAgICAgIHsKICAgICAgICAiYXR0cmlidXRpb24iOiAiR29vZ2xlIiwKICAgICAgICAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsCiAgICAgICAgIm1heE5hdGl2ZVpvb20iOiAxOCwKICAgICAgICAibWF4Wm9vbSI6IDE4LAogICAgICAgICJtaW5ab29tIjogMCwKICAgICAgICAibm9XcmFwIjogZmFsc2UsCiAgICAgICAgIm9wYWNpdHkiOiAxLAogICAgICAgICJzdWJkb21haW5zIjogImFiYyIsCiAgICAgICAgInRtcyI6IGZhbHNlCn0pLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CiAgICB2YXIgdGlsZV9sYXllcl8wNDFlMDI2NzM2YmY0MjE1YTg5NjRiYWNhZWY0OGQ3MCA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL210MS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6ICJHb29nbGUiLAogICAgICAgICJkZXRlY3RSZXRpbmEiOiBmYWxzZSwKICAgICAgICAibWF4TmF0aXZlWm9vbSI6IDE4LAogICAgICAgICJtYXhab29tIjogMTgsCiAgICAgICAgIm1pblpvb20iOiAwLAogICAgICAgICJub1dyYXAiOiBmYWxzZSwKICAgICAgICAib3BhY2l0eSI6IDEsCiAgICAgICAgInN1YmRvbWFpbnMiOiAiYWJjIiwKICAgICAgICAidG1zIjogZmFsc2UKfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgIAogICAgICAgICAgICBMLmNvbnRyb2wuZnVsbHNjcmVlbih7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcGxlZnQnLAogICAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIFNjcmVlbicsCiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0V4aXQgRnVsbCBTY3JlZW4nLAogICAgICAgICAgICAgICAgZm9yY2VTZXBhcmF0ZUJ1dHRvbjogZmFsc2UsCiAgICAgICAgICAgICAgICB9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgICAgICAgICBtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQub24oJ2VudGVyRnVsbHNjcmVlbicsIGZ1bmN0aW9uKCl7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBmdWxsc2NyZWVuJyk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAKICAgIAogICAgICAgICAgICB2YXIgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1NyA9IHsKICAgICAgICAgICAgICAgIGJhc2VfbGF5ZXJzIDogeyAib3BlbnN0cmVldG1hcCIgOiB0aWxlX2xheWVyXzNmYmRlYmZjNTliZjQ2Y2NhODk2ODBiZDM3ZDVjZTVmLCB9LAogICAgICAgICAgICAgICAgb3ZlcmxheXMgOiB7ICJHb29nbGUgTWFwcyIgOiB0aWxlX2xheWVyXzY3Mjk3MGY1NTlmZDQ3MmQ5NTkwYTY5OTM3ZTMyOGM4LCJHb29nbGUgU2F0ZWxsaXRlIiA6IHRpbGVfbGF5ZXJfMDQxZTAyNjczNmJmNDIxNWE4OTY0YmFjYWVmNDhkNzAsIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgIEwuY29udHJvbC5sYXllcnMoCiAgICAgICAgICAgICAgICBsYXllcl9jb250cm9sXzYzZDllNDhhYTNlMDQyMDg4ZmViODZjMjM2ZmE4ODU3LmJhc2VfbGF5ZXJzLAogICAgICAgICAgICAgICAgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1Ny5vdmVybGF5cywKICAgICAgICAgICAgICAgIHtwb3NpdGlvbjogJ3RvcHJpZ2h0JywKICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgYXV0b1pJbmRleDogdHJ1ZQogICAgICAgICAgICAgICAgfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgICAgICAgICAgCiAgICAgICAgCjwvc2NyaXB0Pg==";
    }
    ngOnInit() {
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
        //cCreates de src that has to be in the iframe. What I need to do is to update this safeResourceUrl.
        this.t_geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        this.primaryWorkspace.addChangeListener((primaryEvent) => {
            if (blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CHANGE === primaryEvent.type || blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].CREATE === primaryEvent.type) {
                //Look for the code in the wotkspace
                var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].workspaceToCode(this.primaryWorkspace);
                //split it to differenciate from country, region and province
                var split_code = code.split(',');
                //create three differents variables with each option
                var code_country = split_code[0] + ',';
                var code_region = split_code[1] + ',';
                var code_province = split_code[2] + ',';
                //Due to a strange split creation. The last code to add is the first, we need to check wether if the codes are the one we want.
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
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        console.log("Regiones-->", listReg);
                        localStorage.setItem('listRegTeach', listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        console.log("Regiones Latín-->", listLatinReg);
                        localStorage.setItem('listLatinRegTeach', listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeach', listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeach', listLatinProv);
                    });
                }
                //The last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeach', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeach', listLatinProv);
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
            //Calls the server with all the necessary parameters in order
            this.mapService.getMap(code)
                .subscribe(map => {
                console.log(map);
                this.t_geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
            }, _error => {
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
BlckTComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: src_app_members_teacher_Services_t_map_service__WEBPACK_IMPORTED_MODULE_9__["TMapService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
];
BlckTComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blck-t',
        template: _raw_loader_blck_t_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blck_t_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlckTComponent);



/***/ }),

/***/ "Yh8v":
/*!*******************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-t /blockeado-t.js ***!
  \*******************************************************************/
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
  "extensions": ["teacher_dynamic"],
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
  "extensions": ["dynamic_menu_extension2"],
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
  "extensions": ["dynamic_menu_extension3"],
  "colour": 127
},
//OCEANS
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
"extensions": ["big_water_dynamic_teacher"],
"colour": 210
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
"extensions": ["big_mares_dynamic_teacher"],
"colour": 280
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
//La suma de capas tiene un propio código que tengo que estudiar jeje


var list=[["Afganistán","Afghanistan"],["Albania","Albania"],["Argelia","Algeria"],["Andorra","Andorra"],["Angola","Angola"],["Antigua y Barbuda","Antigua and Barbuda"],["Argentina","Argentina"],["Armenia","Armenia"],["Australia","Australia"],["Austria","Austria"],["Azerbaiyán","Azerbaijan"],["Bahamas","Bahamas"],["Bahrein","Bahrain"],["Bangladesh","Bangladesh"],["Barbados","Barbados"],["Bielorrusia","Belarus"],["Bélgica","Belgium"],["Belice","Belize"],["Benin","Benin"],["Bután","Bhutan"],["Bolivia","Bolivia"],["Bosnia y Herzegovina","Bosnia and Herzegovina"],["Botsuana","Botswana"],["Brasil","Brazil"],["Brunei Darussalam","Brunei Darussalam"],["Bulgaria","Bulgaria"],["Burkina Faso","Burkina Faso"],["Burundi","Burundi"],["Cabo Verde","Cabo Verde"],["Camboya","Cambodia"],["Camerún","Cameroon"],["Canadá","Canada"],["República Centroafricana","Central African Republic"],["Chad","Chad"],["Chile","Chile"],["China","China"],["Colombia","Colombia"],["Comoras","Comoros"],["Congo","Congo"],["Islas Cook","Cook Islands"],["Costa Rica","Costa Rica"],["Croacia","Croatia"],["Cuba","Cuba"],["Chipre","Cyprus"],["Chequia","Czech Republic"],["Costa de Marfil","C�te d'Ivoire"],["Corea del Norte","Dem People's Rep of Korea"],["República Democrática del Congo","Democratic Republic of the Congo"],["Dinamarca","Denmark"],["Djibouti","Djibouti"],["Dominica","Dominica"],["República Dominicana","Dominican Republic"],["Ecuador","Ecuador"],["Egipto","Egypt"],["El Salvador","El Salvador"],["Guinea Ecuatorial","Equatorial Guinea"],["Eritrea","Eritrea"],["Estonia","Estonia"],["Esuatini","Eswatini"],["Etiopía","Ethiopia"],["Islas Faroe","Faroe Islands"],["Fiji","Fiji"],["Finlandia","Finland"],["Francia","France"],["Gabón","Gabon"],["Gambia","Gambia"],["Georgia","Georgia"],["Alemania","Germany"],["Ghana","Ghana"],["Grecia","Greece"],["Granada","Grenada"],["Guatemala","Guatemala"],["Guinea","Guinea"],["Guinea-Bissau","Guinea-Bissau"],["Guayana","Guyana"],["Haití","Haiti"],["Honduras","Honduras"],["Hungría","Hungary"],["Islandia","Iceland"],["India","India"],["Indonesia","Indonesia"],["Irán","Iran (Islamic Republic of)"],["Irak","Iraq"],["Irlanda","Ireland"],["Israel","Israel"],["Italia","Italy"],["Jamaica","Jamaica"],["Japón","Japan"],["Jordania","Jordan"],["Kazajstán","Kazakhstan"],["Kenia","Kenya"],["Kiribati","Kiribati"],["Kuwait","Kuwait"],["Kirguistán","Kyrgyzstan"],["República Democrática Popular de Lao","Lao People's Democratic Republic"],["Letonia","Latvia"],["Líbano","Lebanon"],["Lesoto","Lesotho"],["Liberia","Liberia"],["Libia","Libya"],["Lituania","Lithuania"],["Luxemburgo","Luxembourg"],["Madagascar","Madagascar"],["Malawi","Malawi"],["Malasia","Malaysia"],["Maldivas","Maldives"],["Mali","Mali"],["Malta","Malta"],["Islas Marshall","Marshall Islands"],["Mauritania","Mauritania"],["Mauricio","Mauritius"],["México","Mexico"],["Micronesia","Micronesia (Federated States of)"],["Mónaco","Monaco"],["Mongolia","Mongolia"],["Montenegro","Montenegro"],["Marruecos","Morocco"],["Mozambique","Mozambique"],["Myanmar","Myanmar"],["Namibia","Namibia"],["Nauru","Nauru"],["Nepal","Nepal"],["Países Bajos","Netherlands"],["Nueva Zelanda","New Zealand"],["Nicaragua","Nicaragua"],["Níger","Niger"],["Nigeria","Nigeria"],["Niue","Niue"],["Macedonia del Norte","North Macedonia"],["Noruega","Norway"],["Omán","Oman"],["Pakistán","Pakistan"],["Palau","Palau"],["Panamá","Panama"],["Papúa Nueva Guinea","Papua New Guinea"],["Paraguay","Paraguay"],["Perú","Peru"],["Filipinas","Philippines"],["Polonia","Poland"],["Portugal","Portugal"],["Katar","Qatar"],["República de Corea","Republic of Korea"],["República de Moldavia","Republic of Moldova"],["Rumanía","Romania"],["Rusia","Russian Federation"],["Ruanda","Rwanda"],["Saint Kitts y Nevis","Saint Kitts and Nevis"],["Santa Lucía","Saint Lucia"],["San Vicente y las Granadinas","Saint Vincent and the Grenadines"],["Samoa","Samoa"],["San Marino","San Marino"],["Santo Tomé y Príncipe","Sao Tome and Principe"],["Arabia Saudita","Saudi Arabia"],["Senegal","Senegal"],["Serbia","Serbia"],["Seychelles","Seychelles"],["Sierra Leona","Sierra Leone"],["Singapur","Singapore"],["Eslovaquia","Slovakia"],["Eslovenia","Slovenia"],["Islas Salomón","Solomon Islands"],["Somalia","Somalia"],["Sudáfrica","South Africa"],["Sudán del Sur","South Sudan"],["España","Spain"],["Sri Lanka","Sri Lanka"],["Sudán","Sudan"],["Suriname","Suriname"],["Suecia","Sweden"],["Suiza","Switzerland"],["República Árabe Siria","Syrian Arab Republic"],["Tayikistán","Tajikistan"],["Tailandia","Thailand"],["Timor-Leste","Timor-Leste"],["Togo","Togo"],["Tokelau","Tokelau"],["Tonga","Tonga"],["Trinidad y Tobago","Trinidad and Tobago"],["Túnez","Tunisia"],["Turquía","Turkey"],["Turkmenistán","Turkmenistan"],["Tuvalu","Tuvalu"],["Uganda","Uganda"],["Ucrania","Ukraine"],["Emiratos Árabes Unidos","United Arab Emirates"],["Reino Unido","U.K. of Great Britain and Northern Ireland"],["República Unida de Tanzania","United Republic of Tanzania"],["Estados Unidos de América","United States of America"],["Uruguay","Uruguay"],["Uzbekistán","Uzbekistan"],["Vanuatu","Vanuatu"],["Venezuela","Venezuela (Bolivarian Republic of)"],["Vietnam","Viet Nam"],["Yemen","Yemen"],["Zambia","Zambia"],["Zimbabue","Zimbabwe"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('teacher_dynamic',
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
  var code = 'country=' + dropdown_value + ',';
  return code;
};



blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_menu_extension2',
      function() {
        this.getInput('INPUT')
          .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
            function() {
              var listRaw=localStorage.getItem('listRegTeach');
              var listLatinRaw=localStorage.getItem('listLatinRegTeach');
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
            }), 'region');
      });

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_regiones'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'region=' + dropdown_value + ',';
  return code;
};

blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('dynamic_menu_extension3',
function() {
  this.getInput('INPUT')
    .appendField(new blockly__WEBPACK_IMPORTED_MODULE_0__["FieldDropdown"](
      function() {
        var listRaw=localStorage.getItem('listProvTeach');
        var listLatinRaw=localStorage.getItem('listLatinProvTeach');
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
      }), 'province');
});

blockly__WEBPACK_IMPORTED_MODULE_0__["JavaScript"]['buscar_provincia'] = function(block) {
  
  var dropdown_value = block.getInput('INPUT').fieldRow[1].getValue();
  var code = 'province=' + dropdown_value + ',';
  return code;
};


//OCEANS 

//OCEANIC FRONTIERS
var water=[["Antártico","Antartic Ocean"],["Mares Árabes","Arabian Seas"],["Ártico","Artic Ocean"],["Atlántico","Atlantic Ocean"],["Mar Negro","Black Sea"],["Mares de Centro América","Central American Seas"],["Mares del Este Asiático","East Asian Seas"],["Índico","Indian Ocean"],["Mar Mediterráneo","Mediterranean Sea"],["Mares de Norte América","North American Seas"],["Mares del Norte de Europa","North European Seas"],["Pacífico","Pacific Ocean"]];
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_water_dynamic_teacher',
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
blockly__WEBPACK_IMPORTED_MODULE_0__["Extensions"].register('big_mares_dynamic_teacher',
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

/***/ "bcHg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Pages/t-space/t-space.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Mapa libre</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showDualBlockly()\" color=\"primary\">\n        <ion-icon name=\"copy-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <app-blck-t *ngIf=\"singleBlockly\"></app-blck-t>\n    <app-blck-dual-t *ngIf=\"dualBlockly\"></app-blck-dual-t>\n </ion-content>\n");

/***/ }),

/***/ "lzuU":
/*!***********************************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-dual-t/blck-dual-t.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"https://globalenergyprize.org/en/wp-content/uploads/2020/09/3296e5dad944d313478fc911c85c192e61eb-1.jpg\")0 0/100% 100% no-repeat;\n}\n\n#primaryDiv {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  top: 0%;\n}\n\n#secondaryDiv {\n  position: absolute;\n  right: 0px;\n  height: 50%;\n  width: 50%;\n  top: 50%;\n  right: 50%;\n}\n\n#gee_map {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  right: 0%;\n  bottom: 50%;\n}\n\n#gee_map2 {\n  position: absolute;\n  height: 50%;\n  width: 50%;\n  bottom: 0%;\n  right: 0%;\n}\n\n#stepButton {\n  position: fixed;\n  bottom: 85%;\n  right: 50%;\n  left: 45%;\n}\n\n#stepButton2 {\n  position: fixed;\n  bottom: 40%;\n  right: 50%;\n  left: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2JsY2stZHVhbC10LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0pBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQU9KIiwiZmlsZSI6ImJsY2stZHVhbC10LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2xvYmFsZW5lcmd5cHJpemUub3JnL2VuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA5LzMyOTZlNWRhZDk0NGQzMTM0NzhmYzkxMWM4NWMxOTJlNjFlYi0xLmpwZycpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4jcHJpbWFyeURpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdG9wOiAwJTtcbn1cbiNzZWNvbmRhcnlEaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdG9wOjUwJTtcbiAgICByaWdodDogNTAlO1xufVxuI2dlZV9tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHJpZ2h0OjAlO1xuICAgIGJvdHRvbTogNTAlO1xufVxuI2dlZV9tYXAyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3R0b206IDAlO1xuICAgIHJpZ2h0OjAlO1xufVxuI3N0ZXBCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDg1JTtcbiAgICByaWdodDogNTAlO1xuICAgIGxlZnQ6IDQ1JTtcbn1cbiNzdGVwQnV0dG9uMiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDAlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbGVmdDogNDUlO1xufVxuIl19 */");

/***/ }),

/***/ "nZ9K":
/*!*********************************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-dual-t/blck-dual-t.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlckDualTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlckDualTeacherComponent", function() { return BlckDualTeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blck_dual_t_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blck-dual-t.component.html */ "S44O");
/* harmony import */ var _blck_dual_t_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blck-dual-t.component.scss */ "lzuU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockly/core */ "t/1s");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_members_teacher_Components_blck_t_blockeado_t_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members/teacher/Components/blck-t /blockeado-t.js */ "Yh8v");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/blockly/blockly_compressed.js */ "6Y8/");
/* harmony import */ var node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_blockly_compressed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/blockly/javascript_compressed.js */ "5dSl");
/* harmony import */ var node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_blockly_javascript_compressed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_members_teacher_Services_t_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/members/teacher/Services/t-map.service */ "sHun");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");
/* harmony import */ var src_app_members_teacher_Components_blck_dual_t_blockeado_t_dual_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/members/teacher/Components/blck-dual-t/blockeado-t-dual .js */ "UPDx");












let BlckDualTeacherComponent = class BlckDualTeacherComponent {
    constructor(sanitizer, mapService, loading) {
        this.sanitizer = sanitizer;
        this.mapService = mapService;
        this.loading = loading;
        this.GEE = "PCFET0NUWVBFIGh0bWw+Cgo8aGVhZD4KPG1ldGEgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04IiBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiLz4KPHNjcmlwdD5MX1BSRUZFUl9DQU5WQVM9ZmFsc2U7IExfTk9fVE9VQ0g9ZmFsc2U7IExfRElTQUJMRV8zRD1mYWxzZTs8L3NjcmlwdD4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanMiPjwvc2NyaXB0Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvanMvYm9vdHN0cmFwLm1pbi5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5qcyI+PC9zY3JpcHQ+CjxsaW5rIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjQuMC9kaXN0L2xlYWZsZXQuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4yLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvTGVhZmxldC5hd2Vzb21lLW1hcmtlcnMvMi4wLjIvbGVhZmxldC5hd2Vzb21lLW1hcmtlcnMuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vcHl0aG9uLXZpc3VhbGl6YXRpb24vZm9saXVtL21hc3Rlci9mb2xpdW0vdGVtcGxhdGVzL2xlYWZsZXQuYXdlc29tZS5yb3RhdGUuY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPHN0eWxlPmh0bWwsIGJvZHkge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTttYXJnaW46IDA7cGFkZGluZzogMDt9PC9zdHlsZT4KPHN0eWxlPiNtYXAge3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowO308L3N0eWxlPgo8bWV0YSBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsCiAgICAgICAgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vIiBuYW1lPSJ2aWV3cG9ydCIvPgo8c3R5bGU+I21hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCB7CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIHdpZHRoOiAxMDAuMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAuMCU7CiAgICAgICAgbGVmdDogMC4wJTsKICAgICAgICB0b3A6IDAuMCU7CiAgICAgICAgfQogICAgPC9zdHlsZT4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlYWZsZXQuZnVsbHNjcmVlbi8xLjQuMi9Db250cm9sLkZ1bGxTY3JlZW4ubWluLmpzIj48L3NjcmlwdD4KPGxpbmsgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbGVhZmxldC5mdWxsc2NyZWVuLzEuNC4yL0NvbnRyb2wuRnVsbFNjcmVlbi5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiLz4KPC9oZWFkPgo8Ym9keT4KPGRpdiBjbGFzcz0iZm9saXVtLW1hcCIgaWQ9Im1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCI+PC9kaXY+CjwvYm9keT4KPHNjcmlwdD4gICAgCiAgICAKICAgIAogICAgICAgIHZhciBib3VuZHMgPSBudWxsOwogICAgCgogICAgdmFyIG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCA9IEwubWFwKAogICAgICAgICdtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQnLCB7CiAgICAgICAgY2VudGVyOiBbNDAuMTkyODAyODMyNDg5ODMsIC0zLjcwMjE0Mzc3MDA1MDcwMl0sCiAgICAgICAgem9vbTogNiwKICAgICAgICBtYXhCb3VuZHM6IGJvdW5kcywKICAgICAgICBsYXllcnM6IFtdLAogICAgICAgIHdvcmxkQ29weUp1bXA6IGZhbHNlLAogICAgICAgIGNyczogTC5DUlMuRVBTRzM4NTcsCiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsCiAgICAgICAgfSk7CkwuY29udHJvbC5zY2FsZSgpLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CgogICAgCiAgICB2YXIgdGlsZV9sYXllcl8zZmJkZWJmYzU5YmY0NmNjYTg5NjgwYmQzN2Q1Y2U1ZiA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6IG51bGwsCiAgICAgICAgImRldGVjdFJldGluYSI6IGZhbHNlLAogICAgICAgICJtYXhOYXRpdmVab29tIjogMTgsCiAgICAgICAgIm1heFpvb20iOiAxOCwKICAgICAgICAibWluWm9vbSI6IDAsCiAgICAgICAgIm5vV3JhcCI6IGZhbHNlLAogICAgICAgICJvcGFjaXR5IjogMSwKICAgICAgICAic3ViZG9tYWlucyI6ICJhYmMiLAogICAgICAgICJ0bXMiOiBmYWxzZQp9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgdmFyIHRpbGVfbGF5ZXJfNjcyOTcwZjU1OWZkNDcyZDk1OTBhNjk5MzdlMzI4YzggPSBMLnRpbGVMYXllcigKICAgICAgICAnaHR0cHM6Ly9tdDEuZ29vZ2xlLmNvbS92dC9seXJzPW0meD17eH0meT17eX0mej17en0nLAogICAgICAgIHsKICAgICAgICAiYXR0cmlidXRpb24iOiAiR29vZ2xlIiwKICAgICAgICAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsCiAgICAgICAgIm1heE5hdGl2ZVpvb20iOiAxOCwKICAgICAgICAibWF4Wm9vbSI6IDE4LAogICAgICAgICJtaW5ab29tIjogMCwKICAgICAgICAibm9XcmFwIjogZmFsc2UsCiAgICAgICAgIm9wYWNpdHkiOiAxLAogICAgICAgICJzdWJkb21haW5zIjogImFiYyIsCiAgICAgICAgInRtcyI6IGZhbHNlCn0pLmFkZFRvKG1hcF8yM2UzZDg3OTQ0YmQ0NmQyYTcxZmU3NDgwOTI0YzExNCk7CiAgICB2YXIgdGlsZV9sYXllcl8wNDFlMDI2NzM2YmY0MjE1YTg5NjRiYWNhZWY0OGQ3MCA9IEwudGlsZUxheWVyKAogICAgICAgICdodHRwczovL210MS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsCiAgICAgICAgewogICAgICAgICJhdHRyaWJ1dGlvbiI6ICJHb29nbGUiLAogICAgICAgICJkZXRlY3RSZXRpbmEiOiBmYWxzZSwKICAgICAgICAibWF4TmF0aXZlWm9vbSI6IDE4LAogICAgICAgICJtYXhab29tIjogMTgsCiAgICAgICAgIm1pblpvb20iOiAwLAogICAgICAgICJub1dyYXAiOiBmYWxzZSwKICAgICAgICAib3BhY2l0eSI6IDEsCiAgICAgICAgInN1YmRvbWFpbnMiOiAiYWJjIiwKICAgICAgICAidG1zIjogZmFsc2UKfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgIAogICAgICAgICAgICBMLmNvbnRyb2wuZnVsbHNjcmVlbih7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcGxlZnQnLAogICAgICAgICAgICAgICAgdGl0bGU6ICdGdWxsIFNjcmVlbicsCiAgICAgICAgICAgICAgICB0aXRsZUNhbmNlbDogJ0V4aXQgRnVsbCBTY3JlZW4nLAogICAgICAgICAgICAgICAgZm9yY2VTZXBhcmF0ZUJ1dHRvbjogZmFsc2UsCiAgICAgICAgICAgICAgICB9KS5hZGRUbyhtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQpOwogICAgICAgICAgICBtYXBfMjNlM2Q4Nzk0NGJkNDZkMmE3MWZlNzQ4MDkyNGMxMTQub24oJ2VudGVyRnVsbHNjcmVlbicsIGZ1bmN0aW9uKCl7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBmdWxsc2NyZWVuJyk7CiAgICAgICAgICAgIH0pOwoKICAgICAgICAKICAgIAogICAgICAgICAgICB2YXIgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1NyA9IHsKICAgICAgICAgICAgICAgIGJhc2VfbGF5ZXJzIDogeyAib3BlbnN0cmVldG1hcCIgOiB0aWxlX2xheWVyXzNmYmRlYmZjNTliZjQ2Y2NhODk2ODBiZDM3ZDVjZTVmLCB9LAogICAgICAgICAgICAgICAgb3ZlcmxheXMgOiB7ICJHb29nbGUgTWFwcyIgOiB0aWxlX2xheWVyXzY3Mjk3MGY1NTlmZDQ3MmQ5NTkwYTY5OTM3ZTMyOGM4LCJHb29nbGUgU2F0ZWxsaXRlIiA6IHRpbGVfbGF5ZXJfMDQxZTAyNjczNmJmNDIxNWE4OTY0YmFjYWVmNDhkNzAsIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgIEwuY29udHJvbC5sYXllcnMoCiAgICAgICAgICAgICAgICBsYXllcl9jb250cm9sXzYzZDllNDhhYTNlMDQyMDg4ZmViODZjMjM2ZmE4ODU3LmJhc2VfbGF5ZXJzLAogICAgICAgICAgICAgICAgbGF5ZXJfY29udHJvbF82M2Q5ZTQ4YWEzZTA0MjA4OGZlYjg2YzIzNmZhODg1Ny5vdmVybGF5cywKICAgICAgICAgICAgICAgIHtwb3NpdGlvbjogJ3RvcHJpZ2h0JywKICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgYXV0b1pJbmRleDogdHJ1ZQogICAgICAgICAgICAgICAgfSkuYWRkVG8obWFwXzIzZTNkODc5NDRiZDQ2ZDJhNzFmZTc0ODA5MjRjMTE0KTsKICAgICAgICAgICAgCiAgICAgICAgCjwvc2NyaXB0Pg==";
    }
    ngOnInit() {
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
      <block type="look_country_dual">
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
      <block type="look_oceans_dual">
        <field name="input1">Regiones grandes</field>
        <field name="INPUT">agua</field>
      </block>
      <block type="look_seas_dual">
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
        //Load the maps
        this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        this.geeMap2 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${this.GEE}`);
        //Add the change listener to the first workspace load the regions and provinces
        this.primaryWorkspace.addChangeListener((primaryEvent) => {
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
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        console.log("Regiones-->", listReg);
                        localStorage.setItem('listRegTeach', listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        console.log("Regiones Latín-->", listLatinReg);
                        localStorage.setItem('listLatinRegTeach', listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeach', listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeach', listLatinProv);
                    });
                }
                //Teh last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeach', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeach', listLatinProv);
                    });
                }
            }
        });
        //Disable the blocks that are not joined with the main block in the first workspace
        this.primaryWorkspace.addChangeListener(blockly_core__WEBPACK_IMPORTED_MODULE_4__["Events"].disableOrphans);
        //Add the change listener to the second workspace load the regions and provinces    
        this.primaryWorkspace2.addChangeListener((primaryEvent) => {
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
                    this.mapService.getRegion(code_country)
                        .subscribe(block => {
                        var listReg = block;
                        console.log("Regiones-->", listReg);
                        localStorage.setItem('listRegTeachDual', listReg);
                    });
                    this.mapService.getLatinRegion(code_country)
                        .subscribe(block => {
                        var listLatinReg = block;
                        console.log("Regiones Latín-->", listLatinReg);
                        localStorage.setItem('listLatinRegTeachDual', listLatinReg);
                    });
                }
                //If region_code is a region, look for the provinces.
                if (regionTrue == true) {
                    this.mapService.getProvince(code_region)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeachDual', listProv);
                    });
                    this.mapService.getLatinProvince(code_region)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeachDual', listLatinProv);
                    });
                }
                //Teh last option that happens is that country_code is a region. If that happens, use it for provinces.
                if (falseCountry == true) {
                    this.mapService.getProvince(code_country)
                        .subscribe(block => {
                        var listProv = block;
                        console.log("Provincias-->", listProv);
                        localStorage.setItem('listProvTeachDual', listProv);
                    });
                    this.mapService.getLatinProvince(code_country)
                        .subscribe(block => {
                        var listLatinProv = block;
                        console.log("Provincias Latín-->", listLatinProv);
                        localStorage.setItem('listLatinProvTeachDual', listLatinProv);
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
            //Calls the server with all the necessary parameters in order
            this.mapService.getMap(code)
                .subscribe(map => {
                console.log(map);
                this.geeMap = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
            }, _error => {
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
                if (block.type == 'look_country_dual' || block.type == 'look_oceans_dual' || block.type == 'look_seas_dual') {
                    rootBlock = block;
                }
            }
            //Take the code from the rootBlocks. The ones that are connected.
            var code = blockly_core__WEBPACK_IMPORTED_MODULE_4__["JavaScript"].blockToCode(rootBlock);
            //Calls the server with all the necessary parameters in order
            this.mapService.getMap(code)
                .subscribe(map => {
                console.log(map);
                this.geeMap2 = this.sanitizer.bypassSecurityTrustResourceUrl(`data:text/html;base64,${map}`);
                //Finish map loading function
                this.loading.dustyLoading.dismiss();
                //Log the code from the blocks.
                console.log(code);
            }, _error => {
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
BlckDualTeacherComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: src_app_members_teacher_Services_t_map_service__WEBPACK_IMPORTED_MODULE_9__["TMapService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }
];
BlckDualTeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blck-dual-t',
        template: _raw_loader_blck_dual_t_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blck_dual_t_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlckDualTeacherComponent);



/***/ }),

/***/ "pnAI":
/*!*****************************************************************!*\
  !*** ./src/app/members/teacher/Pages/t-space/t-space.module.ts ***!
  \*****************************************************************/
/*! exports provided: TSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSpacePageModule", function() { return TSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _t_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t-space-routing.module */ "V3rn");
/* harmony import */ var _t_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t-space.page */ "Gnjl");
/* harmony import */ var src_app_members_teacher_Components_blck_t_blck_t_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/members/teacher/Components/blck-t /blck-t.component */ "Vx5I");
/* harmony import */ var _Components_blck_dual_t_blck_dual_t_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/blck-dual-t/blck-dual-t.component */ "nZ9K");









let TSpacePageModule = class TSpacePageModule {
};
TSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _t_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["TSpacePageRoutingModule"]
        ],
        declarations: [_t_space_page__WEBPACK_IMPORTED_MODULE_6__["TSpacePage"], src_app_members_teacher_Components_blck_t_blck_t_component__WEBPACK_IMPORTED_MODULE_7__["BlckTComponent"], _Components_blck_dual_t_blck_dual_t_component__WEBPACK_IMPORTED_MODULE_8__["BlckDualTeacherComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [src_app_members_teacher_Components_blck_t_blck_t_component__WEBPACK_IMPORTED_MODULE_7__["BlckTComponent"], _Components_blck_dual_t_blck_dual_t_component__WEBPACK_IMPORTED_MODULE_8__["BlckDualTeacherComponent"]]
    })
], TSpacePageModule);



/***/ }),

/***/ "rFmG":
/*!*****************************************************************!*\
  !*** ./src/app/members/teacher/Pages/t-space/t-space.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0LXNwYWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "sADJ":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/teacher/Components/blck-t /blck-t.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <table width=\"100%\">\n    <tr>\n      <td>\n        <div id=\"primaryDiv\"></div>\n      </td>\n      <td>\n        <iframe [src]=\"t_geeMap\" frameborder=\"0\" allowfullscreen id=\"t_gee_map\"></iframe>\n      </td>\n    </tr>\n  </table>\n    <p id=\"stepButton\">\n     <ion-button (click)=\"stepCode()\" color=\"primary\">\n       <ion-icon name = \"play-outline\"></ion-icon>\n     </ion-button>\n    </p>\n  </ion-content>\n\n");

/***/ }),

/***/ "sHun":
/*!***********************************************************!*\
  !*** ./src/app/members/teacher/Services/t-map.service.ts ***!
  \***********************************************************/
/*! exports provided: TMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMapService", function() { return TMapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TMapService = class TMapService {
    constructor(http) {
        this.http = http;
        this.api = "https://khalil-app-306611.ew.r.appspot.com/KhalilApp";
    }
    getMap(code) {
        const path = `${this.api}/mapaDrawMock?code_query=${code}`;
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
};
TMapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TMapService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TMapService);



/***/ }),

/***/ "scjE":
/*!**************************************************************************!*\
  !*** ./src/app/members/teacher/Components/blck-t /blck-t.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"https://globalenergyprize.org/en/wp-content/uploads/2020/09/3296e5dad944d313478fc911c85c192e61eb-1.jpg\")0 0/100% 100% no-repeat;\n}\n\n#primaryDiv {\n  position: absolute;\n  height: 100%;\n  width: 50%;\n}\n\n#t_gee_map {\n  position: absolute;\n  height: 100%;\n  width: 50%;\n}\n\n#stepButton {\n  position: fixed;\n  bottom: 85%;\n  right: 50%;\n  left: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsY2stdCUyMC9ibGNrLXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ibGNrLXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrSkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lKIiwiZmlsZSI6ImJsY2stdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dsb2JhbGVuZXJneXByaXplLm9yZy9lbi93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOS8zMjk2ZTVkYWQ5NDRkMzEzNDc4ZmM5MTFjODVjMTkyZTYxZWItMS5qcGcnKTAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuI3ByaW1hcnlEaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbn1cbiN0X2dlZV9tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbn1cbiNzdGVwQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA4NSU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBsZWZ0OiA0NSU7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vZ2xvYmFsZW5lcmd5cHJpemUub3JnL2VuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA5LzMyOTZlNWRhZDk0NGQzMTM0NzhmYzkxMWM4NWMxOTJlNjFlYi0xLmpwZ1wiKTAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4jcHJpbWFyeURpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4jdF9nZWVfbWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNzdGVwQnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDg1JTtcbiAgcmlnaHQ6IDUwJTtcbiAgbGVmdDogNDUlO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=src-app-members-teacher-Pages-t-space-t-space-module.js.map