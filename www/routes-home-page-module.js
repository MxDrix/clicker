(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

/***/ "./src/app/components/form-login/form-login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 (click)=\"toggleForm()\" id=\"toggleLoginForm\">LOGIN</h2>\n  <div id=\"containerLoginForm\" style=\"display: none;\">\n    <form autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"submitForm()\">\n      <label for=\"email-login\">Email</label>\n      <input type=\"email\" name=\"email-login\" id=\"email-login\" required minlength=\"5\" formControlName = \"email\">\n    \n      <label for=\"password-login\">Mot de passe</label>\n      <input type=\"password\" name=\"password-login\" id=\"password-login\" required minlength=\"5\" formControlName = \"password\">\n    \n      <button type=\"submit\" [disabled]='!form.valid'>Connexion</button>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.ts ***!
  \***************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");

/*
Imports & definition
*/
// Imports



// Definition
var FormLoginComponent = /** @class */ (function () {
    // Instanciation
    function FormLoginComponent(FormBuilder, UtilsService) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.UtilsService = UtilsService;
        this.sendFormData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.passwordError = false;
        //
        /*
        Methods
        */
        // Reset form
        this.resetForm = function () {
            // Set validator
            _this.form = _this.FormBuilder.group({
                email: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            // Set form data obbject
            _this.formData = {
                email: undefined,
                firstname: undefined,
                lastname: undefined,
                password: undefined
            };
        };
        // Submit form
        this.submitForm = function () {
            // Set form data
            _this.formData = {
                email: _this.form.value.email,
                firstname: undefined,
                lastname: undefined,
                password: _this.form.value.password,
            };
            // Use event emmiter
            _this.sendFormData.emit(_this.formData);
        };
        this.toggleForm = function () {
            _this.toggleFields = document.getElementById('containerLoginForm');
            if (_this.toggleFields.style.display == 'none') {
                _this.UtilsService.slideDown(_this.toggleFields, 500);
            }
            else {
                _this.UtilsService.slideUp(_this.toggleFields, 500);
            }
        };
    }
    ;
    //
    /*
    Hooks
    */
    FormLoginComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ;
    FormLoginComponent.prototype.ngOnChanges = function (changes) {
        // Reset form data when user is logged
        if (!changes.resetFormData.firstChange && changes.resetFormData.currentValue) {
            this.resetForm();
        }
        ;
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormLoginComponent.prototype, "resetFormData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormLoginComponent.prototype, "sendFormData", void 0);
    FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/components/form-login/form-login.component.html"),
        })
        //
        /* Export */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], FormLoginComponent);
    return FormLoginComponent;
}());

;
//


/***/ }),

/***/ "./src/app/components/form-login/module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/form-login/module.ts ***!
  \*************************************************/
/*! exports provided: FormLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginModule", function() { return FormLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-login.component */ "./src/app/components/form-login/form-login.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var FormLoginModule = /** @class */ (function () {
    function FormLoginModule() {
    }
    FormLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]]
        })
    ], FormLoginModule);
    return FormLoginModule;
}());

;
//


/***/ }),

/***/ "./src/app/components/form-register/form-register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2 (click)=\"toggleForm()\" id=\"toggleRegisterForm\">REGISTER</h2>\n  <div id=\"containerRegisterForm\" style=\"display: none;\">\n    <form autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"submitForm()\">\n      <label for=\"email-register\">Email</label>\n      <input type=\"email\" name=\"email-register\" id=\"email-register\" required minlength=\"5\" formControlName = \"email\">\n    \n      <label for=\"firstname-register\">Prénom</label>\n      <input type=\"text\" name=\"firstname-register\" id=\"firstname-register\" required formControlName = \"firstname\">\n    \n      <label for=\"lastname-register\">Nom</label>\n      <input type=\"text\" name=\"lastname-register\" id=\"lastname-register\" required formControlName = \"lastname\">\n    \n      <label for=\"password-register\">Mot de passe</label>\n      <input type=\"password\" name=\"password-register\" id=\"password-register\" required minlength=\"5\" formControlName = \"password\">\n    \n      <label for=\"securePassword\">Répéter le mot de passe <span *ngIf=\"passwordError\">Incorrect</span></label>\n      <input type=\"password\" name=\"securePassword\" id=\"securePassword\" required minlength=\"5\" formControlName = \"securePassword\">\n    \n      <button type=\"submit\" [disabled]='!form.valid'>Inscription</button>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/form-register/form-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterComponent", function() { return FormRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");

/*
Imports & definition
*/
// Imports



// Definition
var FormRegisterComponent = /** @class */ (function () {
    // Instanciation
    function FormRegisterComponent(FormBuilder, UtilsService) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.UtilsService = UtilsService;
        this.sendFormData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.passwordError = false;
        //
        /*
        Methods
        */
        // Reset form
        this.resetForm = function () {
            // Set validator
            _this.form = _this.FormBuilder.group({
                email: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                firstname: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastname: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                securePassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            // Set form data obbject
            _this.formData = {
                email: undefined,
                firstname: undefined,
                lastname: undefined,
                password: undefined,
                securePassword: undefined
            };
        };
        // Submit form
        this.submitForm = function () {
            // Check passwords
            if (_this.form.value.password !== _this.form.value.securePassword) {
                _this.passwordError = true;
            }
            else {
                // Set login data
                _this.formData = {
                    email: _this.form.value.email,
                    firstname: _this.form.value.firstname,
                    lastname: _this.form.value.lastname,
                    password: _this.form.value.password,
                };
                // Use event emmiter
                _this.sendFormData.emit(_this.formData);
            }
            ;
        };
        this.toggleForm = function () {
            _this.toggleFields = document.getElementById('containerRegisterForm');
            if (_this.toggleFields.style.display == 'none') {
                _this.UtilsService.slideDown(_this.toggleFields, 500);
            }
            else {
                _this.UtilsService.slideUp(_this.toggleFields, 500);
            }
        };
    }
    ;
    //
    /*
    Hooks
    */
    FormRegisterComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ;
    FormRegisterComponent.prototype.ngOnChanges = function (changes) {
        // Reset form data when user is registed
        if (!changes.resetFormData.firstChange && changes.resetFormData.currentValue) {
            this.resetForm();
        }
        ;
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormRegisterComponent.prototype, "resetFormData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormRegisterComponent.prototype, "sendFormData", void 0);
    FormRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-register',
            template: __webpack_require__(/*! ./form-register.component.html */ "./src/app/components/form-register/form-register.component.html"),
        })
        //
        /* Export */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], FormRegisterComponent);
    return FormRegisterComponent;
}());

;
//


/***/ }),

/***/ "./src/app/components/form-register/module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/form-register/module.ts ***!
  \****************************************************/
/*! exports provided: FormRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterModule", function() { return FormRegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-register.component */ "./src/app/components/form-register/form-register.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var FormRegisterModule = /** @class */ (function () {
    function FormRegisterModule() {
    }
    FormRegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_register_component__WEBPACK_IMPORTED_MODULE_5__["FormRegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_form_register_component__WEBPACK_IMPORTED_MODULE_5__["FormRegisterComponent"]]
        })
    ], FormRegisterModule);
    return FormRegisterModule;
}());

;
//


/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"isUserLoggedIn == false; else isLogged\" class=\"homePage flexBox spaceBetween\">\n    <article class=\"marginBoTo10\">\n            <app-form-login \n            (sendFormData)=\"connectUser($event)\" \n            [resetFormData]=\"resetFormDataLogin\"\n            ></app-form-login>\n            \n            <app-form-response\n                *ngIf=\"displayReturnLogin\"\n                [content]=\"apiMessageLogin\"\n                [class]=\"messageClassLogin\"\n                (close)=\"displayReturnLogin = false\"\n            ></app-form-response>\n    </article>\n    \n    <article class=\"marginBoTo10\">\n        <app-form-register \n        (sendFormData)=\"registerUser($event)\" \n        [resetFormData]=\"resetFormDataRegister\"\n        ></app-form-register>\n    </article>\n</section>\n\n<ng-template #isLogged>\n    Vous êtes connectés\n</ng-template>"

/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils/utils-service.service */ "./src/app/services/utils/utils-service.service.ts");
/* harmony import */ var _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-sharing/data-sharing-service.service */ "./src/app/services/data-sharing/data-sharing-service.service.ts");

/*
Imports & definition
*/
// Imports





// Definition
var HomePageComponent = /** @class */ (function () {
    // Module injection
    function HomePageComponent(AuthService, Router, UtilsService, DataSharingService) {
        var _this = this;
        this.AuthService = AuthService;
        this.Router = Router;
        this.UtilsService = UtilsService;
        this.DataSharingService = DataSharingService;
        /*
        Config.
        */
        // Register form data
        this.resetFormDataRegister = false;
        // Login form data
        this.resetFormDataLogin = false;
        //
        /*
        Methods
        */
        // Register new user
        this.registerUser = function (data) {
            // Send user data
            _this.AuthService.register(data)
                .then(function (apiResponse) {
                _this.UtilsService.flashMessage('success', 'Vous vous êtes inscrit avec succès.');
                // Reset form data
                _this.resetFormDataRegister = true;
            })
                .catch(function (apiResponse) {
                if (apiResponse.error == 'Identity already exist') {
                    _this.UtilsService.flashMessage('error', 'Cette adresse email est déjà utilisée.');
                }
                else {
                    _this.UtilsService.flashMessage('error', 'Une erreur est survenue durant l\'inscription.');
                }
            });
        };
        // Connnect new user
        this.connectUser = function (data) {
            // Send user data
            _this.AuthService.login(data)
                .then(function (apiResponse) {
                // API success response
                _this.Router.navigate(['/me']);
                _this.UtilsService.flashMessage('success', 'Vous vous êtes connectés avec succès.');
                _this.DataSharingService.isUserLoggedIn.next(true);
                // Reset form data
                _this.resetFormDataLogin = true;
            })
                .catch(function (apiResponse) {
                if (apiResponse.error == 'Unknow identity') {
                    _this.UtilsService.flashMessage('error', 'Combinaison email et mot de passe invalide.');
                }
                else {
                    _this.UtilsService.flashMessage('error', 'Une erreur est survenue durant la connexion.');
                }
            });
        };
        this.DataSharingService.isUserLoggedIn.subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
    }
    ;
    //
    /*
    Hooks
    */
    HomePageComponent.prototype.ngOnInit = function () {
        if (this.isUserLoggedIn == true) {
            this.Router.navigate(['/me']);
        }
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/routes/home-page/home-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_utils_utils_service_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _services_data_sharing_data_sharing_service_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());

;
//


/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _components_form_register_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form-register/module */ "./src/app/components/form-register/module.ts");
/* harmony import */ var _components_form_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-login/module */ "./src/app/components/form-login/module.ts");
/* harmony import */ var _components_form_response_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form-response/module */ "./src/app/components/form-response/module.ts");

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
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
                _components_form_register_module__WEBPACK_IMPORTED_MODULE_5__["FormRegisterModule"],
                _components_form_login_module__WEBPACK_IMPORTED_MODULE_6__["FormLoginModule"],
                _components_form_response_module__WEBPACK_IMPORTED_MODULE_7__["FormResponseModule"]
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

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
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
//# sourceMappingURL=routes-home-page-module.js.map