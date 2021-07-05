(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([["projects_mfe1_src_app_flights_flights_module_ts"],{

/***/ 2341:
/*!**********************************************************************************!*\
  !*** ./projects/mfe1/src/app/flights/flights-search/flights-search.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsSearchComponent": () => (/* binding */ FlightsSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-lib */ 4231);
/* harmony import */ var my_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(my_lib__WEBPACK_IMPORTED_MODULE_1__);


class FlightsSearchComponent {
    constructor(pippo) {
        this.pippo = pippo;
        console.log('initiated my lib service MFE1', pippo);
    }
    incrementMyService() {
        console.log('MFE INCREASED: ', this.pippo.incrementCounter());
    }
}
FlightsSearchComponent.ɵfac = function FlightsSearchComponent_Factory(t) { return new (t || FlightsSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](my_lib__WEBPACK_IMPORTED_MODULE_1__.MyLibService)); };
FlightsSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightsSearchComponent, selectors: [["app-flights-search"]], decls: 15, vars: 0, consts: [["id", "container"], ["src", "../../../assets/angular.png", "width", "50"], [1, "all-red"], ["type", "text", "placeholder", "From"], ["type", "text", "placeholder", "To"], ["vc", ""], [3, "click"]], template: function FlightsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Flights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsSearchComponent_Template_button_click_13_listener() { return ctx.incrementMyService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Increment me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["input[type=text][_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 400px;\n        box-sizing: border-box;\n        border: none;\n        border-bottom: 2px solid silver;\n        font-size: 20px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n    }\n\n    button[_ngcontent-%COMP%] {\n        border: 2px solid silver;\n        background-color: white;\n        font-size: 16px;\n        padding: 10px;\n        padding-left: 40px;\n        padding-right: 40px;\n        border-radius: 10px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        cursor: pointer;\n    }\n\n    button[_ngcontent-%COMP%]:active {\n        border-color: black;\n    }\n\n    #container[_ngcontent-%COMP%] {\n        border: 2px darkred dashed;\n        padding: 20px;\n    }"] });


/***/ }),

/***/ 6551:
/*!*********************************************************!*\
  !*** ./projects/mfe1/src/app/flights/flights.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsModule": () => (/* binding */ FlightsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flights_search_flights_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flights-search/flights-search.component */ 2341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _flights_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flights.routes */ 9278);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth-lib */ 7850);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-lib */ 7897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








class FlightsModule {
}
FlightsModule.ɵfac = function FlightsModule_Factory(t) { return new (t || FlightsModule)(); };
FlightsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FlightsModule });
FlightsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            auth_lib__WEBPACK_IMPORTED_MODULE_4__.AuthLibModule,
            shared_lib__WEBPACK_IMPORTED_MODULE_5__.SharedLibModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(_flights_routes__WEBPACK_IMPORTED_MODULE_3__.FLIGHTS_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FlightsModule, { declarations: [_flights_search_flights_search_component__WEBPACK_IMPORTED_MODULE_1__.FlightsSearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        auth_lib__WEBPACK_IMPORTED_MODULE_4__.AuthLibModule,
        shared_lib__WEBPACK_IMPORTED_MODULE_5__.SharedLibModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9278:
/*!*********************************************************!*\
  !*** ./projects/mfe1/src/app/flights/flights.routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLIGHTS_ROUTES": () => (/* binding */ FLIGHTS_ROUTES)
/* harmony export */ });
/* harmony import */ var _flights_search_flights_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flights-search/flights-search.component */ 2341);

const FLIGHTS_ROUTES = [
    {
        path: 'flights-search',
        component: _flights_search_flights_search_component__WEBPACK_IMPORTED_MODULE_0__.FlightsSearchComponent
    }
];


/***/ }),

/***/ 7173:
/*!**************************************************************!*\
  !*** ./projects/shared-lib/src/lib/other/other.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherComponent": () => (/* binding */ OtherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth-lib */ 7850);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auth_lib__WEBPACK_IMPORTED_MODULE_1__);


class OtherComponent {
    constructor(service) {
        this.service = service;
        // user = 'A';
        this.user = this.service.user;
    }
    ngOnInit() {
    }
}
OtherComponent.ɵfac = function OtherComponent_Factory(t) { return new (t || OtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](auth_lib__WEBPACK_IMPORTED_MODULE_1__.AuthLibService)); };
OtherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherComponent, selectors: [["lib-other"]], decls: 2, vars: 1, template: function OtherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User: ", ctx.user, "");
    } }, encapsulation: 2 });


/***/ }),

/***/ 4099:
/*!*************************************************************!*\
  !*** ./projects/shared-lib/src/lib/shared-lib.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLibComponent": () => (/* binding */ SharedLibComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_lib_src_lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth-lib/src/lib/auth-lib.component */ 7850);
/* harmony import */ var _auth_lib_src_lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth_lib_src_lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1__);


class SharedLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedLibComponent.ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
SharedLibComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedLibComponent, selectors: [["lib-shared-lib"]], decls: 3, vars: 0, template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shared");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "lib-auth-lib");
    } }, directives: [_auth_lib_src_lib_auth_lib_component__WEBPACK_IMPORTED_MODULE_1__.AuthLibComponent], encapsulation: 2 });


/***/ }),

/***/ 8252:
/*!**********************************************************!*\
  !*** ./projects/shared-lib/src/lib/shared-lib.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLibModule": () => (/* binding */ SharedLibModule)
/* harmony export */ });
/* harmony import */ var _shared_lib_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-lib.component */ 4099);
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other/other.component */ 7173);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth-lib */ 7850);
/* harmony import */ var auth_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);




class SharedLibModule {
}
SharedLibModule.ɵfac = function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); };
SharedLibModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedLibModule });
SharedLibModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            auth_lib__WEBPACK_IMPORTED_MODULE_2__.AuthLibModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedLibModule, { declarations: [_shared_lib_component__WEBPACK_IMPORTED_MODULE_0__.SharedLibComponent, _other_other_component__WEBPACK_IMPORTED_MODULE_1__.OtherComponent], imports: [auth_lib__WEBPACK_IMPORTED_MODULE_2__.AuthLibModule], exports: [_shared_lib_component__WEBPACK_IMPORTED_MODULE_0__.SharedLibComponent, _other_other_component__WEBPACK_IMPORTED_MODULE_1__.OtherComponent] }); })();


/***/ }),

/***/ 1344:
/*!***********************************************************!*\
  !*** ./projects/shared-lib/src/lib/shared-lib.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLibService": () => (/* binding */ SharedLibService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class SharedLibService {
    constructor() {
        console.log('Shared LIBBBBB initiated');
    }
}
SharedLibService.ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(); };
SharedLibService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedLibService, factory: SharedLibService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7897:
/*!***********************************************!*\
  !*** ./projects/shared-lib/src/public-api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLibService": () => (/* reexport safe */ _lib_shared_lib_service__WEBPACK_IMPORTED_MODULE_0__.SharedLibService),
/* harmony export */   "SharedLibComponent": () => (/* reexport safe */ _lib_shared_lib_component__WEBPACK_IMPORTED_MODULE_1__.SharedLibComponent),
/* harmony export */   "SharedLibModule": () => (/* reexport safe */ _lib_shared_lib_module__WEBPACK_IMPORTED_MODULE_2__.SharedLibModule),
/* harmony export */   "OtherComponent": () => (/* reexport safe */ _lib_other_other_component__WEBPACK_IMPORTED_MODULE_3__.OtherComponent)
/* harmony export */ });
/* harmony import */ var _lib_shared_lib_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-lib.service */ 1344);
/* harmony import */ var _lib_shared_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/shared-lib.component */ 4099);
/* harmony import */ var _lib_shared_lib_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared-lib.module */ 8252);
/* harmony import */ var _lib_other_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/other/other.component */ 7173);
/*
 * Public API Surface of shared-lib
 */






/***/ })

}]);
//# sourceMappingURL=projects_mfe1_src_app_flights_flights_module_ts.js.map