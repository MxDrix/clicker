(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./routes/home-page/module": [
		"./src/app/routes/home-page/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module~~c232dce7",
		"common",
		"routes-home-page-module"
	],
	"./routes/identity-validation/module": [
		"./src/app/routes/identity-validation/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module~~c232dce7",
		"common",
		"routes-identity-validation-module"
	],
	"./routes/leaderboard-page/module": [
		"./src/app/routes/leaderboard-page/module.ts",
		"routes-leaderboard-page-module"
	],
	"./routes/reset-password-page/module": [
		"./src/app/routes/reset-password-page/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module~~c232dce7",
		"common",
		"routes-reset-password-page-module"
	],
	"./routes/user-page/module": [
		"./src/app/routes/user-page/module.ts",
		"default~routes-home-page-module~routes-identity-validation-module~routes-reset-password-page-module~~c232dce7",
		"common",
		"routes-user-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
Imports
*/

//
/*
Definition
*/
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ANGclient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n      <app-header></app-header>\n      \n      <main class=\"maxWidth marginBottomForFixedFooter\">\n        <router-outlet></router-outlet>\n      </main>\n\n      <app-footer></app-footer>\n    ",
        })
        //
        /*
        Export
        */
    ], AppComponent);
    return AppComponent;
}());

//


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/clicker/clicker-service.service */ "./src/app/services/clicker/clicker-service.service.ts");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/data-sharing/data-sharing-service.service */ "./src/app/services/data-sharing/data-sharing-service.service.ts");
/* harmony import */ var _components_header_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/module */ "./src/app/components/header/module.ts");
/* harmony import */ var _components_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/module */ "./src/app/components/footer/module.ts");

/*
Imports
*/
// Angular





// Inner components






// Inner modules


//
/*
Definition
*/
var AppModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_10__["MainRouter"], { onSameUrlNavigation: 'reload' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_header_module__WEBPACK_IMPORTED_MODULE_12__["HeaderModule"],
                _components_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"]
            ],
            providers: [
                _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _services_clicker_clicker_service_service__WEBPACK_IMPORTED_MODULE_7__["ClickerService"],
                _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
        //
        /*
        Export
        */
    ], AppModule);
    return AppModule;
}());

//


/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: MainRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouter", function() { return MainRouter; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
// Import AuthGuuard to define route accessibility

//
/*
Export
*/
var MainRouter = [
    {
        path: '',
        loadChildren: './routes/home-page/module#Module'
    },
    {
        path: 'identity-validation',
        loadChildren: './routes/identity-validation/module#Module'
    },
    {
        path: 'reset-password',
        loadChildren: './routes/reset-password-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] // Accessible for connected user
    },
    {
        path: 'me',
        loadChildren: './routes/user-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] // Accessible for connected user
    },
    {
        path: 'leaderboard',
        loadChildren: './routes/leaderboard-page/module#Module',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
];
//


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
https://gist.github.com/DWS-paris/65df1566222cd9819e3050e96af6f0c6
*/
// Imports



// Definition
var AuthGuard = /** @class */ (function () {
    /*
    Properties
    */
    function AuthGuard(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
    }
    //
    /**
     * AuthGurad Strategy: thee canActivate is used in 'app.router'
     * @param next : informations about the route component => https://bit.ly/2VT2Us1
     * @param state : the state of the router => https://bit.ly/2Uo3zjO
     */
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Use Auth service to check user indentity from the servere
            _this.AuthService.getUserId()
                .then(function (apiResponse) { return resolve(true); })
                .catch(function (apiResponse) { return _this.Router.navigateByUrl('/'); });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());

//


/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  UNDER MIT LICENCE @2019 <a style=\"color: #CD2235;\" href='https://github.com/florianrambur' target=\"_blank\">FLORIAN RAMBUR</a>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/module.ts":
/*!*********************************************!*\
  !*** ./src/app/components/footer/module.ts ***!
  \*********************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());

;
//


/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"maxWidth\">\n  <header>\n    <nav *ngIf=\"isUserLoggedIn; else noConnected\">\n      <h1>HELLO {{ userInformation!.data.firstname }}</h1>\n      <ul *ngIf=\"UtilsService.getCurrentRoute() == '/leaderboard'\">\n        <li><a [routerLink]=\"'/me'\">Play</a></li>\n        <li><a (click)=\"logoutUser()\">Logout</a></li>\n      </ul>\n      <ul *ngIf=\"UtilsService.getCurrentRoute() == '/me'\">\n        <li><a [routerLink]=\"'/leaderboard'\">Leaderboard</a></li>\n        <li><a (click)=\"logoutUser()\">Logout</a></li>\n      </ul>\n    </nav>\n  </header>\n</section>\n\n<div class=\"divCenter textCenter\" id=\"flashMessage\">\n  <span id=\"flashMessageContent\"></span>\n</div>\n\n<ng-template #noConnected>\n  <h1>WELCOME ON <span>TAPBOARD</span></h1>\n  <p>LOGIN OR REGISTER TO LAUNCH AN AMAZING TAPPING GAME</p>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data-sharing/data-sharing-service.service */ "./src/app/services/data-sharing/data-sharing-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(AuthService, Router, DataSharingService) {
        var _this = this;
        this.AuthService = AuthService;
        this.Router = Router;
        this.DataSharingService = DataSharingService;
        this.userInformation = {
            data: {
                firstname: ''
            }
        };
        // Logout
        this.logoutUser = function () {
            _this.AuthService.logout()
                .then(function (apiResponse) {
                _this.ngOnInit();
                _this.Router.navigate(['/']);
                _this.DataSharingService.isUserLoggedIn.next(false);
            })
                .catch(function (apiResponse) {
                console.log(apiResponse);
            });
        };
        // Service initialize to update automatically his variables. Here, we use it in the application to 
        // check if the user is logged or not. Then we can display some content or not.
        this.DataSharingService.isUserLoggedIn.subscribe(function (value) {
            _this.isUserLoggedIn = value;
            if (value == true) {
                _this.AuthService.getUserInformation()
                    .then(function (apiResponse) { _this.userInformation = apiResponse; console.log(_this.userInformation); })
                    .catch(function (apiResponse) { return console.error(apiResponse); });
            }
            else {
                _this.userInformation = {
                    data: {
                        firstname: ''
                    }
                };
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/module.ts":
/*!*********************************************!*\
  !*** ./src/app/components/header/module.ts ***!
  \*********************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());

;
//


/***/ }),

/***/ "./src/app/services/auth/auth-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth/auth-service.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");

/*
Imports
*/


// import 'rxjs/add/operator/toPromise';



//
/*
Definition
*/
var AuthService = /** @class */ (function () {
    // Inject module(s) in the service
    function AuthService(HttpClient, CookieService) {
        this.HttpClient = HttpClient;
        this.CookieService = CookieService;
    }
    ;
    // Function to register a user
    AuthService.prototype.register = function (userData) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/register'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/register", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to register a user
    AuthService.prototype.identityValidation = function (_id, password) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        var userData = {
            _id: _id,
            password: password
        };
        // POST '/auth/register'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/identity-validation", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to connect a user
    AuthService.prototype.login = function (userData) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/login", userData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to reset password
    AuthService.prototype.restPassword = function (password, newPassword) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/auth/login'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/password", { password: password, newPassword: newPassword }, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    AuthService.prototype.logout = function () {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        return this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/logout", { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    // Function to get user identity from server
    AuthService.prototype.getUserId = function () {
        // POST '/auth/login'
        return this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth")
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function to get user information
    AuthService.prototype.getUserInformation = function () {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        var userId = this.getAccessToken();
        return this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/" + userId)
            .toPromise().then(this.getData).catch(this.handleError);
    };
    // Get the API response
    AuthService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    // Get the API error
    AuthService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    // Get data from decoded token
    AuthService.prototype.getAccessToken = function () {
        var access_token = this.CookieService.get('ClickerToken');
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        var decodedToken = jwtHelper.decodeToken(access_token);
        return decodedToken._id;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], AuthService);
    return AuthService;
}());

;
//


/***/ }),

/***/ "./src/app/services/clicker/clicker-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/clicker/clicker-service.service.ts ***!
  \*************************************************************/
/*! exports provided: ClickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickerService", function() { return ClickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

/*
Imports
*/


// import 'rxjs/add/operator/toPromise';

//
/*
Definition
*/
var ClickerService = /** @class */ (function () {
    // Inject module(s) in the service
    function ClickerService(HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        this.getAllClickers = function () {
            var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            myHeader.append('Content-Type', 'application/json');
            return _this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/clicker/", { headers: myHeader })
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        this.newClicker = function (nbClick) {
            var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            myHeader.append('Content-Type', 'application/json');
            return _this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/clicker/", { nbClick: nbClick }, { headers: myHeader })
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
    }
    ;
    // Get the API response
    ClickerService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    // Get the API error
    ClickerService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    ClickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClickerService);
    return ClickerService;
}());

;
//


/***/ }),

/***/ "./src/app/services/data-sharing/data-sharing-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/data-sharing/data-sharing-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports
*/



//
/*
Definition
*/
var DataSharingService = /** @class */ (function () {
    function DataSharingService(AuthService) {
        var _this = this;
        this.AuthService = AuthService;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.AuthService.getUserId()
            .then(function (apiResponse) { return _this.isUserLoggedIn.next(true); })
            .catch(function (apiReponse) { return _this.isUserLoggedIn.next(false); });
    }
    ;
    DataSharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DataSharingService);
    return DataSharingService;
}());

;
//


/***/ }),

/***/ "./src/app/services/utils/utils-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/utils/utils-service.service.ts ***!
  \*********************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
Imports
*/


//
/*
Definition
*/
var UtilsService = /** @class */ (function () {
    function UtilsService(Router) {
        var _this = this;
        this.Router = Router;
        /**
         * Switch image
         * @param element: Object => Element clicked
         * @param src1: String => Name of the first image
         * @param src2: String => Name of the next image
        */
        this.switchImgSrc = function (element, src1, src2) {
            var path = element.target.src.substr(0, element.target.src.lastIndexOf('/')) + '/';
            var currentSrc = element.target.src.replace(/^.*[\\\/]/, '');
            var newSrc;
            if (currentSrc == src1) {
                newSrc = path + src2;
            }
            else if (currentSrc == src2) {
                newSrc = path + src1;
            }
            return element.target.src = newSrc;
        };
        /**
         * Added temporary flash message
         * @param type: String => Define type of message
         * @param message: string => Get message and display it on flash
         */
        this.flashMessage = function (type, message) {
            var div = document.getElementById('flashMessage');
            var content = document.getElementById('flashMessageContent');
            content.innerHTML = message;
            div.className = 'divCenter textCenter';
            div.style.visibility = 'visible';
            switch (type) {
                case 'error':
                    div.classList.add('errorMessage');
                    break;
                case 'success':
                    div.classList.add('successMessage');
                    break;
                case 'warning':
                    div.classList.add('warningMessage');
                    break;
            }
            setTimeout(function () {
                div.style.visibility = 'hidden';
            }, 3000);
        };
        this.slideDown = function (obj, speed) {
            var mySpeed = speed || 300;
            var intervals = mySpeed / 30;
            var holder = document.createElement('div'); //
            var parent = obj.parentNode;
            holder.setAttribute('style', 'height: 0px; overflow:hidden');
            parent.insertBefore(holder, obj);
            holder.appendChild(obj);
            obj.style.display = obj.getAttribute("data-original-display") || "";
            var height = obj.offsetHeight;
            var sepHeight = height / intervals;
            var timer = setInterval(function () {
                var holderHeight = holder.offsetHeight;
                if (holderHeight + sepHeight < height) {
                    holder.style.height = (holderHeight + sepHeight) + 'px';
                }
                else {
                    // clean up
                    holder.removeChild(obj);
                    parent.insertBefore(obj, holder);
                    parent.removeChild(holder);
                    clearInterval(timer);
                }
            }, 30);
        };
        this.slideUp = function (obj, speed) {
            var mySpeed = speed || 300;
            var intervals = mySpeed / 30;
            var height = obj.offsetHeight;
            var holder = document.createElement('div'); //
            var parent = obj.parentNode;
            holder.setAttribute('style', 'height: ' + height + 'px; overflow:hidden');
            parent.insertBefore(holder, obj);
            holder.appendChild(obj);
            var originalDisplay = (obj.style.display !== 'none') ? obj.style.display : '';
            obj.setAttribute("data-original-display", originalDisplay);
            var sepHeight = height / intervals;
            var timer = setInterval(function () {
                var holderHeight = holder.offsetHeight;
                if (holderHeight - sepHeight > 0) {
                    holder.style.height = (holderHeight - sepHeight) + 'px';
                }
                else {
                    // clean up
                    obj.style.display = 'none';
                    holder.removeChild(obj);
                    parent.insertBefore(obj, holder);
                    parent.removeChild(holder);
                    clearInterval(timer);
                }
            }, 30);
        };
        this.getCurrentRoute = function () {
            return _this.Router.url;
        };
    }
    ;
    UtilsService.prototype.sortByKey = function (array, key) {
        return array.sort(function (b, a) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 0 : 1));
        });
    };
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UtilsService);
    return UtilsService;
}());

;
//


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    apiUrl: "http://localhost:3000/api",
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Developpements\Javascript\Clicker\ANGclient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map