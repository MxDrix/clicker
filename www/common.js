(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/form-response/form-response.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-response/form-response.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [innerHTML]=\"content\"></p>\n<button\n  (click)=\"close.emit(true)\"\n>\n  <i class=\"fas fa-times\">\n</i></button>"

/***/ }),

/***/ "./src/app/components/form-response/form-response.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-response/form-response.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormResponseComponent", function() { return FormResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
Imports & definition
*/
// Imports

// Definition
var FormResponseComponent = /** @class */ (function () {
    function FormResponseComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    //
    /*
    Hooks
    */
    FormResponseComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormResponseComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormResponseComponent.prototype, "close", void 0);
    FormResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-response',
            template: __webpack_require__(/*! ./form-response.component.html */ "./src/app/components/form-response/form-response.component.html"),
        })
        //
        /* Export */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormResponseComponent);
    return FormResponseComponent;
}());

//


/***/ }),

/***/ "./src/app/components/form-response/module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/form-response/module.ts ***!
  \****************************************************/
/*! exports provided: FormResponseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormResponseModule", function() { return FormResponseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_response_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-response.component */ "./src/app/components/form-response/form-response.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
var FormResponseModule = /** @class */ (function () {
    function FormResponseModule() {
    }
    FormResponseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_response_component__WEBPACK_IMPORTED_MODULE_5__["FormResponseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_form_response_component__WEBPACK_IMPORTED_MODULE_5__["FormResponseComponent"]]
        })
    ], FormResponseModule);
    return FormResponseModule;
}());

;
//


/***/ })

}]);
//# sourceMappingURL=common.js.map