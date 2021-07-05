(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([["projects_auth-lib_src_public-api_ts-_e4301"],{

/***/ 9197:
/*!*********************************************************!*\
  !*** ./projects/auth-lib/src/lib/auth-lib.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLibComponent": () => (/* binding */ AuthLibComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_lib_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-lib.service */ 7045);


class AuthLibComponent {
    constructor(service) {
        this.service = service;
        this.user = this.service.user;
    }
    ngOnInit() {
    }
}
AuthLibComponent.ɵfac = function AuthLibComponent_Factory(t) { return new (t || AuthLibComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_lib_service__WEBPACK_IMPORTED_MODULE_1__.AuthLibService)); };
AuthLibComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLibComponent, selectors: [["lib-auth-lib"]], decls: 2, vars: 1, template: function AuthLibComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" User: ", ctx.user, "\n");
    } }, styles: ["p[_ngcontent-%COMP%] {\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGliLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXV0aC1saWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGNvbG9yOiBibHVlO1xufSJdfQ== */"] });


/***/ }),

/***/ 3220:
/*!******************************************************!*\
  !*** ./projects/auth-lib/src/lib/auth-lib.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLibModule": () => (/* binding */ AuthLibModule)
/* harmony export */ });
/* harmony import */ var _auth_lib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-lib.component */ 9197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class AuthLibModule {
}
AuthLibModule.ɵfac = function AuthLibModule_Factory(t) { return new (t || AuthLibModule)(); };
AuthLibModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthLibModule });
AuthLibModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthLibModule, { declarations: [_auth_lib_component__WEBPACK_IMPORTED_MODULE_0__.AuthLibComponent], exports: [_auth_lib_component__WEBPACK_IMPORTED_MODULE_0__.AuthLibComponent] }); })();


/***/ }),

/***/ 7045:
/*!*******************************************************!*\
  !*** ./projects/auth-lib/src/lib/auth-lib.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLibService": () => (/* binding */ AuthLibService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class AuthLibService {
    constructor() {
        console.log('Auth lib service init.');
    }
    get user() {
        return this.userName;
    }
    login(userName, password) {
        // Authentication for **honest** users TM. (c) Manfred Steyer
        this.userName = userName;
    }
}
AuthLibService.ɵfac = function AuthLibService_Factory(t) { return new (t || AuthLibService)(); };
AuthLibService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthLibService, factory: AuthLibService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9694:
/*!*********************************************!*\
  !*** ./projects/auth-lib/src/public-api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLibService": () => (/* reexport safe */ _lib_auth_lib_service__WEBPACK_IMPORTED_MODULE_0__.AuthLibService),
/* harmony export */   "AuthLibComponent": () => (/* reexport safe */ _lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1__.AuthLibComponent),
/* harmony export */   "AuthLibModule": () => (/* reexport safe */ _lib_auth_lib_module__WEBPACK_IMPORTED_MODULE_2__.AuthLibModule)
/* harmony export */ });
/* harmony import */ var _lib_auth_lib_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth-lib.service */ 7045);
/* harmony import */ var _lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth-lib.component */ 9197);
/* harmony import */ var _lib_auth_lib_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/auth-lib.module */ 3220);
/*
 * Public API Surface of auth-lib
 */





/***/ })

}]);
//# sourceMappingURL=projects_auth-lib_src_public-api_ts-_e4301.js.map