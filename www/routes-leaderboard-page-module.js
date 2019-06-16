(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-leaderboard-page-module"],{

/***/ "./src/app/routes/leaderboard-page/leaderboard-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/leaderboard-page/leaderboard-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allClickersArray\">\n   <ul id=\"leaderboard\">\n      <li *ngFor=\"let clicker of allClickersArray\" class=\"flexBox spaceBetween alignItemsCenter\">\n         <div>{{ clicker.nbClick }}pts</div> \n         <div class=\"italicFt12\">\n             {{ clicker.player.firstname }} {{ clicker.player.lastname }} - {{ clicker.date | date: 'dd/MM/yyyy' }} - {{ clicker.date | date: 'HH:mm:ss' }}\n         </div>\n      </li>\n   </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/leaderboard-page/leaderboard-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/leaderboard-page/leaderboard-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: LeaderboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPageComponent", function() { return LeaderboardPageComponent; });
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
var LeaderboardPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function LeaderboardPageComponent(AuthService, ClickerService, UtilsService) {
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
    LeaderboardPageComponent.prototype.ngOnInit = function () {
        this.AuthService.getUserId().then(console.log);
        this.getAllClickers();
    };
    ;
    LeaderboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard-page',
            template: __webpack_require__(/*! ./leaderboard-page.component.html */ "./src/app/routes/leaderboard-page/leaderboard-page.component.html"),
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
    ], LeaderboardPageComponent);
    return LeaderboardPageComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/leaderboard-page/module.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/leaderboard-page/module.ts ***!
  \***************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/leaderboard-page/router.ts");
/* harmony import */ var _leaderboard_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard-page.component */ "./src/app/routes/leaderboard-page/leaderboard-page.component.ts");

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
            declarations: [_leaderboard_page_component__WEBPACK_IMPORTED_MODULE_4__["LeaderboardPageComponent"]],
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

/***/ "./src/app/routes/leaderboard-page/router.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/leaderboard-page/router.ts ***!
  \***************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leaderboard_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard-page.component */ "./src/app/routes/leaderboard-page/leaderboard-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _leaderboard_page_component__WEBPACK_IMPORTED_MODULE_1__["LeaderboardPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-leaderboard-page-module.js.map