(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-score-page-module"],{

/***/ "./src/app/routes/score-page/module.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/score-page/module.ts ***!
  \*********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/score-page/router.ts");
/* harmony import */ var _score_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-page.component */ "./src/app/routes/score-page/score-page.component.ts");

/*
Imports
*/
// Angular


// Inner


//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_score_page_component__WEBPACK_IMPORTED_MODULE_4__["ScorePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/score-page/router.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/score-page/router.ts ***!
  \*********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _score_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-page.component */ "./src/app/routes/score-page/score-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _score_page_component__WEBPACK_IMPORTED_MODULE_1__["ScorePageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/score-page/score-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/routes/score-page/score-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allClickersArray\">\r\n   <ul id=\"score\">\r\n      <li *ngFor=\"let clicker of allClickersArray\" class=\"flexBox spaceBetween alignItemsCenter\">\r\n         <div>{{ clicker.nbClick }}pts</div> \r\n         <div class=\"italicFt12\">\r\n             {{ clicker.player.firstname }} {{ clicker.player.lastname }} - {{ clicker.date | date: 'dd/MM/yyyy' }} - {{ clicker.date | date: 'HH:mm:ss' }}\r\n         </div>\r\n      </li>\r\n   </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/score-page/score-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/score-page/score-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ScorePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePageComponent", function() { return ScorePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clicker/clicker-service.service */ "./src/app/services/clicker/clicker-service.service.ts");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");

/*
Imports & definition
*/
// Imports




// Definition
var ScorePageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function ScorePageComponent(AuthService, ClickerService, UtilsService) {
        var _this = this;
        this.AuthService = AuthService;
        this.ClickerService = ClickerService;
        this.UtilsService = UtilsService;
        //
        this.allClickersArray = [];
        /*
        Methods
        */
        this.getAllClickers = function () {
            _this.ClickerService.getAllClickers()
                .then(function (response) {
                _this.allClickersArray = _this.UtilsService.sortByKey(response.data, 'nbClick');
            })
                .catch(function (response) { return console.error(response); });
        };
    }
    ;
    //
    /*
    Hooks
    */
    ScorePageComponent.prototype.ngOnInit = function () {
        this.AuthService.getUserId().then(console.log);
        this.getAllClickers();
    };
    ;
    ScorePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-score-page',
            template: __webpack_require__(/*! ./score-page.component.html */ "./src/app/routes/score-page/score-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_3__["ClickerService"], _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_3__["ClickerService"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], ScorePageComponent);
    return ScorePageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=routes-score-page-module.js.map