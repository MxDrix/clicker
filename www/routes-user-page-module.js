(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/components/form-newgame/form-newgame.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-newgame/form-newgame.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" [formGroup]=\"form\">\n  <input name=\"nbClick\" formControlName=\"nbClick\" type=\"hidden\" [(ngModel)]=\"nbClick\" disabled />\n</form>\n\n<div class=\"wrapper\">\n  <div class=\"progress-bar\">\n    <span class=\"progress-bar-fill\" [ngStyle]=\"{'width': progressBar + '%'}\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/form-newgame/form-newgame.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-newgame/form-newgame.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormNewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNewGameComponent", function() { return FormNewGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/clicker/clicker-service.service */ "./src/app/services/clicker/clicker-service.service.ts");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");

/*
Imports & definition
*/
// Imports





// Definition
var FormNewGameComponent = /** @class */ (function () {
    // Instanciation
    function FormNewGameComponent(FormBuilder, ClickerService, Router, UtilsService) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.ClickerService = ClickerService;
        this.Router = Router;
        this.UtilsService = UtilsService;
        this.passwordError = false;
        //
        /*
        Methods
        */
        this.initForm = function () {
            _this.form = _this.FormBuilder.group({
                nbClick: [_this.nbClick, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
    }
    ;
    //
    /*
    Hooks
    */
    FormNewGameComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ;
    FormNewGameComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Check if time is over. If yes, saved data in database and redirect to the leaderboard page
        if (this.timer == 0) {
            this.timer = 10000;
            this.ClickerService.newClicker(this.form.value.nbClick)
                .then(function (apiResponse) {
                _this.Router.navigate(['/leaderboard']);
                _this.UtilsService.flashMessage('success', 'Votre score est de ' + _this.form.value.nbClick + ' clics !');
            })
                .catch(function (apiResponse) {
            });
        }
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormNewGameComponent.prototype, "nbClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormNewGameComponent.prototype, "timer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormNewGameComponent.prototype, "progressBar", void 0);
    FormNewGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-newgame',
            template: __webpack_require__(/*! ./form-newgame.component.html */ "./src/app/components/form-newgame/form-newgame.component.html"),
            providers: [_services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_4__["ClickerService"]]
        })
        //
        /* Export */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_4__["ClickerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]])
    ], FormNewGameComponent);
    return FormNewGameComponent;
}());

;
//


/***/ }),

/***/ "./src/app/components/form-newgame/module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form-newgame/module.ts ***!
  \***************************************************/
/*! exports provided: FormNewGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNewGameModule", function() { return FormNewGameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_newgame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-newgame.component */ "./src/app/components/form-newgame/form-newgame.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var FormNewGameModule = /** @class */ (function () {
    function FormNewGameModule() {
    }
    FormNewGameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_newgame_component__WEBPACK_IMPORTED_MODULE_5__["FormNewGameComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_form_newgame_component__WEBPACK_IMPORTED_MODULE_5__["FormNewGameComponent"]]
        })
    ], FormNewGameModule);
    return FormNewGameModule;
}());

;
//


/***/ }),

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");
/* harmony import */ var _components_form_newgame_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form-newgame/module */ "./src/app/components/form-newgame/module.ts");

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
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
                _components_form_newgame_module__WEBPACK_IMPORTED_MODULE_5__["FormNewGameModule"]
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

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"italicFt12\">Vous avez très exactement 10 secondes pour cliquer autant de fois que possible sur le gros bouton ci-dessous, la partie se lancera au premier clic ! Bonne chance !</p>\n\n<img #newGameEl \n  (click)=\"UtilsService.switchImgSrc($event, 'tapOff.png', 'tapOn.png'); startNewGame(newGameEl)\" \n  src=\"../../../assets/images/tapOff.png\" \n  [attr.data-status]=\"status\"\n  class=\"maxWidth100\"\n/>\n\n<app-form-newgame\n  [nbClick] = nbClick\n  [timer] = timer\n  [progressBar] = progressBar\n></app-form-newgame>"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");

/*
Imports & definition
*/
// Imports



// Definition
var UserPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function UserPageComponent(AuthService, UtilsService) {
        var _this = this;
        this.AuthService = AuthService;
        this.UtilsService = UtilsService;
        //
        // Declare status game, score and timer
        this.status = 0;
        this.nbClick = 0;
        this.timer = 10;
        this.progressBar = 0;
        /*
        Methods
        */
        this.startNewGame = function (element) {
            // Get the current status
            _this.status = element.getAttribute('data-status');
            if (_this.status == 0) {
                // State => playing game
                _this.status = 1;
                _this.startTimer();
            }
            if (_this.status == 1) {
                // Increment your score
                _this.nbClick = _this.nbClick + 1;
            }
        };
        this.startTimer = function () {
            _this.interval = setInterval(function () {
                if (_this.timer > 0) {
                    _this.timer--;
                    _this.progressBar = _this.progressBar + 10;
                }
                else {
                    _this.timer = 10;
                }
            }, 1000);
        };
    }
    ;
    //
    /*
    Hooks
    */
    UserPageComponent.prototype.ngOnInit = function () {
        this.AuthService.getUserId().then(function (apiResponse) { return console.log(apiResponse.data._id); });
    };
    ;
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map