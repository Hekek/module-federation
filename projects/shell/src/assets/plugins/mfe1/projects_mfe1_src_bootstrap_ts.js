(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([["projects_mfe1_src_bootstrap_ts"],{

/***/ 9075:
/*!******************************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"]),
/* harmony export */   "BrowserModule": () => (/* binding */ BrowserModule),
/* harmony export */   "BrowserTransferStateModule": () => (/* binding */ BrowserTransferStateModule),
/* harmony export */   "By": () => (/* binding */ By),
/* harmony export */   "DomSanitizer": () => (/* binding */ DomSanitizer),
/* harmony export */   "EVENT_MANAGER_PLUGINS": () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   "EventManager": () => (/* binding */ EventManager),
/* harmony export */   "HAMMER_GESTURE_CONFIG": () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   "HAMMER_LOADER": () => (/* binding */ HAMMER_LOADER),
/* harmony export */   "HammerGestureConfig": () => (/* binding */ HammerGestureConfig),
/* harmony export */   "HammerModule": () => (/* binding */ HammerModule),
/* harmony export */   "Meta": () => (/* binding */ Meta),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "TransferState": () => (/* binding */ TransferState),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "disableDebugTools": () => (/* binding */ disableDebugTools),
/* harmony export */   "enableDebugTools": () => (/* binding */ enableDebugTools),
/* harmony export */   "makeStateKey": () => (/* binding */ makeStateKey),
/* harmony export */   "platformBrowser": () => (/* binding */ platformBrowser),
/* harmony export */   "ɵBROWSER_SANITIZATION_PROVIDERS": () => (/* binding */ BROWSER_SANITIZATION_PROVIDERS),
/* harmony export */   "ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__": () => (/* binding */ BROWSER_SANITIZATION_PROVIDERS__POST_R3__),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵDomSharedStylesHost": () => (/* binding */ DomSharedStylesHost),
/* harmony export */   "ɵELEMENT_PROBE_PROVIDERS": () => (/* binding */ ELEMENT_PROBE_PROVIDERS),
/* harmony export */   "ɵELEMENT_PROBE_PROVIDERS__POST_R3__": () => (/* binding */ ELEMENT_PROBE_PROVIDERS__POST_R3__),
/* harmony export */   "ɵHAMMER_PROVIDERS__POST_R3__": () => (/* binding */ HAMMER_PROVIDERS__POST_R3__),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵNAMESPACE_URIS": () => (/* binding */ NAMESPACE_URIS),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵTRANSITION_ID": () => (/* binding */ TRANSITION_ID),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_a": () => (/* binding */ errorHandler),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_b": () => (/* binding */ _document),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_c": () => (/* binding */ BROWSER_MODULE_PROVIDERS),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_d": () => (/* binding */ createMeta),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_e": () => (/* binding */ createTitle),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_f": () => (/* binding */ initTransferState),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_g": () => (/* binding */ EventManagerPlugin),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_h": () => (/* binding */ HAMMER_PROVIDERS__PRE_R3__),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_i": () => (/* binding */ HAMMER_PROVIDERS),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_j": () => (/* binding */ domSanitizerImplFactory),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_k": () => (/* binding */ appInitializerFactory),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_l": () => (/* binding */ SERVER_TRANSITION_PROVIDERS),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_m": () => (/* binding */ _createNgProbeR2),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_n": () => (/* binding */ ELEMENT_PROBE_PROVIDERS__PRE_R3__),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_o": () => (/* binding */ BrowserXhr),
/* harmony export */   "ɵangular_packages_platform_browser_platform_browser_p": () => (/* binding */ GenericBrowserDomAdapter),
/* harmony export */   "ɵescapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "ɵflattenStyles": () => (/* binding */ flattenStyles),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter),
/* harmony export */   "ɵshimContentAttribute": () => (/* binding */ shimContentAttribute),
/* harmony export */   "ɵshimHostAttribute": () => (/* binding */ shimHostAttribute)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @license Angular v12.0.0
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵDomAdapter"] {
    constructor() {
        super(...arguments);
        this.supportsDOMEvents = true;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
    static makeCurrent() {
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
    }
    onAndCancel(el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return () => {
            el.removeEventListener(evt, listener, false);
        };
    }
    dispatchEvent(el, evt) {
        el.dispatchEvent(evt);
    }
    remove(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    createElement(tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
        return document;
    }
    isElementNode(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(node) {
        return node instanceof DocumentFragment;
    }
    /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
    getGlobalEventTarget(doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    }
    getBaseHref(doc) {
        const href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    }
    resetBaseElement() {
        baseElement = null;
    }
    getUserAgent() {
        return window.navigator.userAgent;
    }
    getCookie(name) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵparseCookieValue"])(document.cookie, name);
    }
}
let baseElement = null;
function getBaseElementHref() {
    baseElement = baseElement || document.querySelector('base');
    return baseElement ? baseElement.getAttribute('href') : null;
}
// based on urlUtils.js in AngularJS 1
let urlParsingNode;
function relativePath(url) {
    urlParsingNode = urlParsingNode || document.createElement('a');
    urlParsingNode.setAttribute('href', url);
    const pathName = urlParsingNode.pathname;
    return pathName.charAt(0) === '/' ? pathName : `/${pathName}`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
const TRANSITION_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('TRANSITION_ID');
function appInitializerFactory(transitionId, document, injector) {
    return () => {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationInitStatus).donePromise.then(() => {
            const dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
            const styles = Array.prototype.slice.apply(document.querySelectorAll(`style[ng-transition]`));
            styles.filter(el => el.getAttribute('ng-transition') === transitionId)
                .forEach(el => dom.remove(el));
        });
    };
}
const SERVER_TRANSITION_PROVIDERS = [
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector],
        multi: true
    },
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class BrowserGetTestability {
    static init() {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.setTestabilityGetter)(new BrowserGetTestability());
    }
    addToWindow(registry) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAngularTestability = (elem, findInAncestors = true) => {
            const testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities = () => registry.getAllTestabilities();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularRootElements = () => registry.getAllRootElements();
        const whenAllStable = (callback /** TODO #9100 */) => {
            const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities();
            let count = testabilities.length;
            let didWork = false;
            const decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers = [];
        }
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers.push(whenAllStable);
    }
    findTestabilityInTree(registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        const t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, elem.host, true);
        }
        return this.findTestabilityInTree(registry, elem.parentElement, true);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
class BrowserXhr {
    build() {
        return new XMLHttpRequest();
    }
}
BrowserXhr.ɵfac = function BrowserXhr_Factory(t) { return new (t || BrowserXhr)(); };
BrowserXhr.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowserXhr, factory: BrowserXhr.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserXhr, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CAMEL_CASE_REGEXP = /([A-Z])/g;
const DASH_CASE_REGEXP = /-([a-z])/g;
function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, (...m) => '-' + m[1].toLowerCase());
}
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        const ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng || {};
        ng[name] = value;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ɵ0 = () => ({
    'ApplicationRef': _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef,
    'NgZone': _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
});
const CORE_TOKENS = (ɵ0)();
const INSPECT_GLOBAL_NAME = 'probe';
const CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
function inspectNativeElementR2(element) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetDebugNodeR2"])(element);
}
function _createNgProbeR2(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElementR2);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, Object.assign(Object.assign({}, CORE_TOKENS), _ngProbeTokensToMap(coreTokens || [])));
    return () => inspectNativeElementR2;
}
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce((prev, t) => (prev[t.name] = t.token, prev), {});
}
/**
 * In Ivy, we don't support NgProbe because we have our own set of testing utilities
 * with more robust functionality.
 *
 * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
 * tree-shaking properly.
 */
const ELEMENT_PROBE_PROVIDERS__POST_R3__ = [];
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
const ELEMENT_PROBE_PROVIDERS__PRE_R3__ = [
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
        useFactory: _createNgProbeR2,
        deps: [
            [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgProbeToken, new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional()],
        ],
        multi: true,
    },
];
const ELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS__POST_R3__;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
class EventManager {
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins, _zone) {
        this._zone = _zone;
        this._eventNameToPlugin = new Map();
        plugins.forEach(p => p.manager = this);
        this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element, eventName, handler) {
        const plugin = this._findPluginFor(eventName);
        return plugin.addEventListener(element, eventName, handler);
    }
    /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     * @deprecated No longer being used in Ivy code. To be removed in version 14.
     */
    addGlobalEventListener(target, eventName, handler) {
        const plugin = this._findPluginFor(eventName);
        return plugin.addGlobalEventListener(target, eventName, handler);
    }
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone() {
        return this._zone;
    }
    /** @internal */
    _findPluginFor(eventName) {
        const plugin = this._eventNameToPlugin.get(eventName);
        if (plugin) {
            return plugin;
        }
        const plugins = this._plugins;
        for (let i = 0; i < plugins.length; i++) {
            const plugin = plugins[i];
            if (plugin.supports(eventName)) {
                this._eventNameToPlugin.set(eventName, plugin);
                return plugin;
            }
        }
        throw new Error(`No event manager plugin found for event ${eventName}`);
    }
}
EventManager.ɵfac = function EventManager_Factory(t) { return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
EventManager.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventManager, factory: EventManager.ɵfac });
EventManager.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [EVENT_MANAGER_PLUGINS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [EVENT_MANAGER_PLUGINS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }]; }, null); })();
class EventManagerPlugin {
    constructor(_doc) {
        this._doc = _doc;
    }
    addGlobalEventListener(element, eventName, handler) {
        const target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error(`Unsupported event target ${target} for event ${eventName}`);
        }
        return this.addEventListener(target, eventName, handler);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class SharedStylesHost {
    constructor() {
        /** @internal */
        this._stylesSet = new Set();
    }
    addStyles(styles) {
        const additions = new Set();
        styles.forEach(style => {
            if (!this._stylesSet.has(style)) {
                this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    }
    onStylesAdded(additions) { }
    getAllStyles() {
        return Array.from(this._stylesSet);
    }
}
SharedStylesHost.ɵfac = function SharedStylesHost_Factory(t) { return new (t || SharedStylesHost)(); };
SharedStylesHost.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedStylesHost, factory: SharedStylesHost.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedStylesHost, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return []; }, null); })();
class DomSharedStylesHost extends SharedStylesHost {
    constructor(_doc) {
        super();
        this._doc = _doc;
        // Maps all registered host nodes to a list of style nodes that have been added to the host node.
        this._hostNodes = new Map();
        this._hostNodes.set(_doc.head, []);
    }
    _addStylesToHost(styles, host, styleNodes) {
        styles.forEach((style) => {
            const styleEl = this._doc.createElement('style');
            styleEl.textContent = style;
            styleNodes.push(host.appendChild(styleEl));
        });
    }
    addHost(hostNode) {
        const styleNodes = [];
        this._addStylesToHost(this._stylesSet, hostNode, styleNodes);
        this._hostNodes.set(hostNode, styleNodes);
    }
    removeHost(hostNode) {
        const styleNodes = this._hostNodes.get(hostNode);
        if (styleNodes) {
            styleNodes.forEach(removeStyle);
        }
        this._hostNodes.delete(hostNode);
    }
    onStylesAdded(additions) {
        this._hostNodes.forEach((styleNodes, hostNode) => {
            this._addStylesToHost(additions, hostNode, styleNodes);
        });
    }
    ngOnDestroy() {
        this._hostNodes.forEach(styleNodes => styleNodes.forEach(removeStyle));
    }
}
DomSharedStylesHost.ɵfac = function DomSharedStylesHost_Factory(t) { return new (t || DomSharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
DomSharedStylesHost.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomSharedStylesHost, factory: DomSharedStylesHost.ɵfac });
DomSharedStylesHost.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSharedStylesHost, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();
function removeStyle(styleNode) {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().remove(styleNode);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const NAMESPACE_URIS = {
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml',
    'xlink': 'http://www.w3.org/1999/xlink',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xmlns': 'http://www.w3.org/2000/xmlns/',
};
const COMPONENT_REGEX = /%COMP%/g;
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function flattenStyles(compId, styles, target) {
    for (let i = 0; i < styles.length; i++) {
        let style = styles[i];
        if (Array.isArray(style)) {
            flattenStyles(compId, style, target);
        }
        else {
            style = style.replace(COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
function decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle the
    // two differently. In the first case, the special '__ngUnwrap__' token is passed to the unwrap
    // the listener (see below).
    return (event) => {
        // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
        // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The debug_node
        // can inspect the listener toString contents for the existence of this special token. Because
        // the token is a string literal, it is ensured to not be modified by compiled code.
        if (event === '__ngUnwrap__') {
            return eventHandler;
        }
        const allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            event.preventDefault();
            event.returnValue = false;
        }
        return undefined;
    };
}
let hasLoggedNativeEncapsulationWarning = false;
class DomRendererFactory2 {
    constructor(eventManager, sharedStylesHost, appId) {
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.appId = appId;
        this.rendererByCompId = new Map();
        this.defaultRenderer = new DefaultDomRenderer2(eventManager);
    }
    createRenderer(element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.Emulated: {
                let renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type, this.appId);
                    this.rendererByCompId.set(type.id, renderer);
                }
                renderer.applyToHost(element);
                return renderer;
            }
            case 1:
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ShadowDom:
                // TODO(FW-2290): remove the `case 1:` fallback logic and the warning in v12.
                if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
                    !hasLoggedNativeEncapsulationWarning && type.encapsulation === 1) {
                    hasLoggedNativeEncapsulationWarning = true;
                    console.warn('ViewEncapsulation.Native is no longer supported. Falling back to ViewEncapsulation.ShadowDom. The fallback will be removed in v12.');
                }
                return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    const styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    }
    begin() { }
    end() { }
}
DomRendererFactory2.ɵfac = function DomRendererFactory2_Factory(t) { return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomSharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID)); };
DomRendererFactory2.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomRendererFactory2, factory: DomRendererFactory2.ɵfac });
DomRendererFactory2.ctorParameters = () => [
    { type: EventManager },
    { type: DomSharedStylesHost },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomRendererFactory2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: EventManager }, { type: DomSharedStylesHost }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
            }] }]; }, null); })();
class DefaultDomRenderer2 {
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.data = Object.create(null);
    }
    destroy() { }
    createElement(name, namespace) {
        if (namespace) {
            // In cases where Ivy (not ViewEngine) is giving us the actual namespace, the look up by key
            // will result in undefined, so we just return the namespace here.
            return document.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
        }
        return document.createElement(name);
    }
    createComment(value) {
        return document.createComment(value);
    }
    createText(value) {
        return document.createTextNode(value);
    }
    appendChild(parent, newChild) {
        parent.appendChild(newChild);
    }
    insertBefore(parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    }
    removeChild(parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    }
    selectRootElement(selectorOrNode, preserveContent) {
        let el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
        }
        if (!preserveContent) {
            el.textContent = '';
        }
        return el;
    }
    parentNode(node) {
        return node.parentNode;
    }
    nextSibling(node) {
        return node.nextSibling;
    }
    setAttribute(el, name, value, namespace) {
        if (namespace) {
            name = namespace + ':' + name;
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    }
    removeAttribute(el, name, namespace) {
        if (namespace) {
            // TODO(FW-811): Ivy may cause issues here because it's passing around
            // full URIs for namespaces, therefore this lookup will fail.
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                // TODO(FW-811): Since ivy is passing around full URIs for namespaces
                // this could result in properties like `http://www.w3.org/2000/svg:cx="123"`,
                // which is wrong.
                el.removeAttribute(`${namespace}:${name}`);
            }
        }
        else {
            el.removeAttribute(name);
        }
    }
    addClass(el, name) {
        el.classList.add(name);
    }
    removeClass(el, name) {
        el.classList.remove(name);
    }
    setStyle(el, style, value, flags) {
        if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important)) {
            el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important ? 'important' : '');
        }
        else {
            el.style[style] = value;
        }
    }
    removeStyle(el, style, flags) {
        if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase) {
            el.style.removeProperty(style);
        }
        else {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            el.style[style] = '';
        }
    }
    setProperty(el, name, value) {
        NG_DEV_MODE && checkNoSyntheticProp(name, 'property');
        el[name] = value;
    }
    setValue(node, value) {
        node.nodeValue = value;
    }
    listen(target, event, callback) {
        NG_DEV_MODE && checkNoSyntheticProp(event, 'listener');
        if (typeof target === 'string') {
            return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
        }
        return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
    }
}
const ɵ0$1 = () => '@'.charCodeAt(0);
const AT_CHARCODE = (ɵ0$1)();
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error(`Found the synthetic ${nameKind} ${name}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
    }
}
class EmulatedEncapsulationDomRenderer2 extends DefaultDomRenderer2 {
    constructor(eventManager, sharedStylesHost, component, appId) {
        super(eventManager);
        this.component = component;
        const styles = flattenStyles(appId + '-' + component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        this.contentAttr = shimContentAttribute(appId + '-' + component.id);
        this.hostAttr = shimHostAttribute(appId + '-' + component.id);
    }
    applyToHost(element) {
        super.setAttribute(element, this.hostAttr, '');
    }
    createElement(parent, name) {
        const el = super.createElement(parent, name);
        super.setAttribute(el, this.contentAttr, '');
        return el;
    }
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
    constructor(eventManager, sharedStylesHost, hostEl, component) {
        super(eventManager);
        this.sharedStylesHost = sharedStylesHost;
        this.hostEl = hostEl;
        this.shadowRoot = hostEl.attachShadow({ mode: 'open' });
        this.sharedStylesHost.addHost(this.shadowRoot);
        const styles = flattenStyles(component.id, component.styles, []);
        for (let i = 0; i < styles.length; i++) {
            const styleEl = document.createElement('style');
            styleEl.textContent = styles[i];
            this.shadowRoot.appendChild(styleEl);
        }
    }
    nodeOrShadowRoot(node) {
        return node === this.hostEl ? this.shadowRoot : node;
    }
    destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot);
    }
    appendChild(parent, newChild) {
        return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
    }
    insertBefore(parent, newChild, refChild) {
        return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
    }
    removeChild(parent, oldChild) {
        return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
    }
    parentNode(node) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
        super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
        return true;
    }
    addEventListener(element, eventName, handler) {
        element.addEventListener(eventName, handler, false);
        return () => this.removeEventListener(element, eventName, handler);
    }
    removeEventListener(target, eventName, callback) {
        return target.removeEventListener(eventName, callback);
    }
}
DomEventsPlugin.ɵfac = function DomEventsPlugin_Factory(t) { return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
DomEventsPlugin.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomEventsPlugin, factory: DomEventsPlugin.ɵfac });
DomEventsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomEventsPlugin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
    'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
class HammerGestureConfig {
    constructor() {
        /**
         * A set of supported event names for gestures to be used in Angular.
         * Angular supports all built-in recognizers, as listed in
         * [HammerJS documentation](https://hammerjs.github.io/).
         */
        this.events = [];
        /**
         * Maps gesture event names to a set of configuration options
         * that specify overrides to the default values for specific properties.
         *
         * The key is a supported event name to be configured,
         * and the options object contains a set of properties, with override values
         * to be applied to the named recognizer event.
         * For example, to disable recognition of the rotate event, specify
         *  `{"rotate": {"enable": false}}`.
         *
         * Properties that are not present take the HammerJS default values.
         * For information about which properties are supported for which events,
         * and their allowed and default values, see
         * [HammerJS documentation](https://hammerjs.github.io/).
         *
         */
        this.overrides = {};
    }
    /**
     * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (const eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    }
}
HammerGestureConfig.ɵfac = function HammerGestureConfig_Factory(t) { return new (t || HammerGestureConfig)(); };
HammerGestureConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HammerGestureConfig, factory: HammerGestureConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerGestureConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return []; }, null); })();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
class HammerGesturesPlugin extends EventManagerPlugin {
    constructor(doc, _config, console, loader) {
        super(doc);
        this._config = _config;
        this.console = console;
        this.loader = loader;
        this._loaderPromise = null;
    }
    supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!window.Hammer && !this.loader) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` +
                    `loaded and no custom loader has been specified.`);
            }
            return false;
        }
        return true;
    }
    addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        // If Hammer is not present but a loader is specified, we defer adding the event listener
        // until Hammer is loaded.
        if (!window.Hammer && this.loader) {
            this._loaderPromise = this._loaderPromise || this.loader();
            // This `addEventListener` method returns a function to remove the added listener.
            // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
            // than remove anything.
            let cancelRegistration = false;
            let deregister = () => {
                cancelRegistration = true;
            };
            this._loaderPromise
                .then(() => {
                // If Hammer isn't actually loaded when the custom loader resolves, give up.
                if (!window.Hammer) {
                    if (typeof ngDevMode === 'undefined' || ngDevMode) {
                        this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
                    }
                    deregister = () => { };
                    return;
                }
                if (!cancelRegistration) {
                    // Now that Hammer is loaded and the listener is being loaded for real,
                    // the deregistration function changes from canceling registration to removal.
                    deregister = this.addEventListener(element, eventName, handler);
                }
            })
                .catch(() => {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    this.console.warn(`The "${eventName}" event cannot be bound because the custom ` +
                        `Hammer.JS loader failed.`);
                }
                deregister = () => { };
            });
            // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
            // can change the behavior of `deregister` once the listener is added. Using a closure in
            // this way allows us to avoid any additional data structures to track listener removal.
            return () => {
                deregister();
            };
        }
        return zone.runOutsideAngular(() => {
            // Creating the manager bind events, must be done outside of angular
            const mc = this._config.buildHammer(element);
            const callback = function (eventObj) {
                zone.runGuarded(function () {
                    handler(eventObj);
                });
            };
            mc.on(eventName, callback);
            return () => {
                mc.off(eventName, callback);
                // destroy mc to prevent memory leak
                if (typeof mc.destroy === 'function') {
                    mc.destroy();
                }
            };
        });
    }
    isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
    }
}
HammerGesturesPlugin.ɵfac = function HammerGesturesPlugin_Factory(t) { return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_LOADER, 8)); };
HammerGesturesPlugin.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HammerGesturesPlugin, factory: HammerGesturesPlugin.ɵfac });
HammerGesturesPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] },
    { type: HammerGestureConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [HAMMER_GESTURE_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [HAMMER_LOADER,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerGesturesPlugin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }, { type: HammerGestureConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [HAMMER_GESTURE_CONFIG]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [HAMMER_LOADER]
            }] }]; }, null); })();
/**
 * In Ivy, support for Hammer gestures is optional, so applications must
 * import the `HammerModule` at root to turn on support. This means that
 * Hammer-specific code can be tree-shaken away if not needed.
 */
const HAMMER_PROVIDERS__POST_R3__ = [];
/**
 * In View Engine, support for Hammer gestures is built-in by default.
 */
const HAMMER_PROVIDERS__PRE_R3__ = [
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), HAMMER_LOADER]]
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
];
const HAMMER_PROVIDERS = HAMMER_PROVIDERS__POST_R3__;
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * @publicApi
 */
class HammerModule {
}
HammerModule.ɵfac = function HammerModule_Factory(t) { return new (t || HammerModule)(); };
HammerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HammerModule });
HammerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: HAMMER_PROVIDERS__PRE_R3__ });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{ providers: HAMMER_PROVIDERS__PRE_R3__ }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
const DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
const _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf https://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
const _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
const ɵ0$2 = (event) => event.altKey, ɵ1 = (event) => event.ctrlKey, ɵ2 = (event) => event.metaKey, ɵ3 = (event) => event.shiftKey;
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
    'alt': ɵ0$2,
    'control': ɵ1,
    'meta': ɵ2,
    'shift': ɵ3
};
/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
class KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc) {
        super(doc);
    }
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName) {
        return KeyEventsPlugin.parseEventName(eventName) != null;
    }
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element, eventName, handler) {
        const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
        const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(() => {
            return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    }
    static parseEventName(eventName) {
        const parts = eventName.toLowerCase().split('.');
        const domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        const key = KeyEventsPlugin._normalizeKey(parts.pop());
        let fullKey = '';
        MODIFIER_KEYS.forEach(modifierName => {
            const index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
        //       The code must remain in the `result['domEventName']` form.
        // return {domEventName, fullKey};
        const result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    }
    static getEventFullKey(event) {
        let fullKey = '';
        let key = getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(modifierName => {
            if (modifierName != key) {
                const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    }
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
        return (event /** TODO #9100 */) => {
            if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                zone.runGuarded(() => handler(event));
            }
        };
    }
    /** @internal */
    static _normalizeKey(keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    }
}
KeyEventsPlugin.ɵfac = function KeyEventsPlugin_Factory(t) { return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
KeyEventsPlugin.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KeyEventsPlugin, factory: KeyEventsPlugin.ɵfac });
KeyEventsPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyEventsPlugin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();
function getEventKey(event) {
    let key = event.key;
    if (key == null) {
        key = event.keyIdentifier;
        // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
        // Safari cf
        // https://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
        if (key == null) {
            return 'Unidentified';
        }
        if (key.startsWith('U+')) {
            key = String.fromCharCode(parseInt(key.substring(2), 16));
            if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                // There is a bug in Chrome for numeric keypad keys:
                // https://code.google.com/p/chromium/issues/detail?id=155654
                // 1, 2, 3 ... are reported as A, B, C ...
                key = _chromeNumKeyPadMap[key];
            }
        }
    }
    return _keyMap[key] || key;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
class DomSanitizer {
}
DomSanitizer.ɵfac = function DomSanitizer_Factory(t) { return new (t || DomSanitizer)(); };
DomSanitizer.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomSanitizer_Factory() { return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DomSanitizerImpl); }, token: DomSanitizer, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSanitizer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root', useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DomSanitizerImpl) }]
    }], null, null); })();
function domSanitizerImplFactory(injector) {
    return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
class DomSanitizerImpl extends DomSanitizer {
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    sanitize(ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.NONE:
                return value;
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML:
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* Html */)) {
                    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
                }
                return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE:
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* Style */)) {
                    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
                }
                return value;
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.SCRIPT:
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* Script */)) {
                    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
                }
                throw new Error('unsafe value used in a script context');
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL:
                const type = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetSanitizationBypassType"])(value);
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* Url */)) {
                    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
                }
                return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeUrl"])(String(value));
            case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL:
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* ResourceUrl */)) {
                    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
                }
                throw new Error('unsafe value used in a resource URL context (see https://g.co/ng/security#xss)');
            default:
                throw new Error(`Unexpected SecurityContext ${ctx} (see https://g.co/ng/security#xss)`);
        }
    }
    bypassSecurityTrustHtml(value) {
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustHtml"])(value);
    }
    bypassSecurityTrustStyle(value) {
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustStyle"])(value);
    }
    bypassSecurityTrustScript(value) {
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustScript"])(value);
    }
    bypassSecurityTrustUrl(value) {
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustUrl"])(value);
    }
    bypassSecurityTrustResourceUrl(value) {
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustResourceUrl"])(value);
    }
}
DomSanitizerImpl.ɵfac = function DomSanitizerImpl_Factory(t) { return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
DomSanitizerImpl.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomSanitizerImpl_Factory() { return domSanitizerImplFactory((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.INJECTOR)); }, token: DomSanitizerImpl, providedIn: "root" });
DomSanitizerImpl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSanitizerImpl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root', useFactory: domSanitizerImplFactory, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
    BrowserGetTestability.init();
}
function errorHandler() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler();
}
function _document() {
    // Tell ivy about the global document
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetDocument"])(document);
    return document;
}
const ɵ0$3 = _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵPLATFORM_BROWSER_ID"];
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID, useValue: ɵ0$3 },
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, useFactory: _document, deps: [] },
];
const BROWSER_SANITIZATION_PROVIDERS__PRE_R3__ = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Sanitizer, useExisting: DomSanitizer },
    { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT] },
];
const BROWSER_SANITIZATION_PROVIDERS__POST_R3__ = [];
/**
 * @security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](https://g.co/ng/security).
 * @publicApi
 */
const BROWSER_SANITIZATION_PROVIDERS = BROWSER_SANITIZATION_PROVIDERS__POST_R3__;
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
const BROWSER_MODULE_PROVIDERS = [
    BROWSER_SANITIZATION_PROVIDERS,
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵINJECTOR_SCOPE"], useValue: 'root' },
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler, useFactory: errorHandler, deps: [] },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: DomEventsPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    },
    { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT] },
    HAMMER_PROVIDERS,
    {
        provide: DomRendererFactory2,
        useClass: DomRendererFactory2,
        deps: [EventManager, DomSharedStylesHost, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
    },
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2, useExisting: DomRendererFactory2 },
    { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
    { provide: DomSharedStylesHost, useClass: DomSharedStylesHost, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT] },
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability, useClass: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone] },
    { provide: EventManager, useClass: EventManager, deps: [EVENT_MANAGER_PLUGINS, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone] },
    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.XhrFactory, useClass: BrowserXhr, deps: [] },
    ELEMENT_PROBE_PROVIDERS,
];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
class BrowserModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error(`BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.`);
        }
    }
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    static withServerTransition(params) {
        return {
            ngModule: BrowserModule,
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID, useValue: params.appId },
                { provide: TRANSITION_ID, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID },
                SERVER_TRANSITION_PROVIDERS,
            ],
        };
    }
}
BrowserModule.ɵfac = function BrowserModule_Factory(t) { return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BrowserModule, 12)); };
BrowserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrowserModule });
BrowserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: BROWSER_MODULE_PROVIDERS, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule] });
BrowserModule.ctorParameters = () => [
    { type: BrowserModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [BrowserModule,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{ providers: BROWSER_MODULE_PROVIDERS, exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule] }]
    }], function () { return [{ type: BrowserModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [BrowserModule]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrowserModule, { exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */
function createMeta() {
    return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
class Meta {
    constructor(_doc) {
        this._doc = _doc;
        this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
    }
    /**
     * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * If an existing element is found, it is returned and is not modified in any way.
     * @param tag The definition of a `<meta>` element to match or create.
     * @param forceCreation True to create a new element without checking whether one already exists.
     * @returns The existing element with the same attributes and values if found,
     * the new element if no match is found, or `null` if the tag parameter is not defined.
     */
    addTag(tag, forceCreation = false) {
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    }
    /**
     * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * @param tags An array of tag definitions to match or create.
     * @param forceCreation True to create new elements without checking whether they already exist.
     * @returns The matching elements if found, or the new elements.
     */
    addTags(tags, forceCreation = false) {
        if (!tags)
            return [];
        return tags.reduce((result, tag) => {
            if (tag) {
                result.push(this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    }
    /**
     * Retrieves a `<meta>` tag element in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching element, if any.
     */
    getTag(attrSelector) {
        if (!attrSelector)
            return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    /**
     * Retrieves a set of `<meta>` tag elements in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching elements, if any.
     */
    getTags(attrSelector) {
        if (!attrSelector)
            return [];
        const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
    }
    /**
     * Modifies an existing `<meta>` tag element in the current HTML document.
     * @param tag The tag description with which to replace the existing tag content.
     * @param selector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     * If not supplied, matches a tag with the same `name` or `property` attribute value as the
     * replacement tag.
     * @return The modified element.
     */
    updateTag(tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param attrSelector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     */
    removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param meta The tag definition to match against to identify an existing tag.
     */
    removeTagElement(meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    }
    _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
            const selector = this._parseSelector(meta);
            const elem = this.getTag(selector);
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        const element = this._dom.createElement('meta');
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName('head')[0];
        head.appendChild(element);
        return element;
    }
    _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
    }
    _parseSelector(tag) {
        const attr = tag.name ? 'name' : 'property';
        return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
    }
    _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
    }
}
Meta.ɵfac = function Meta_Factory(t) { return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
Meta.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: createMeta, token: Meta, providedIn: "root" });
Meta.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Meta, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root', useFactory: createMeta, deps: [] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
    httpEquiv: 'http-equiv'
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Factory to create Title service.
 */
function createTitle() {
    return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
class Title {
    constructor(_doc) {
        this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    getTitle() {
        return this._doc.title;
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle) {
        this._doc.title = newTitle || '';
    }
}
Title.ɵfac = function Title_Factory(t) { return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
Title.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: createTitle, token: Title, providedIn: "root" });
Title.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Title, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root', useFactory: createTitle, deps: [] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const win = typeof window !== 'undefined' && window || {};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ChangeDetectionPerfRecord {
    constructor(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
    constructor(ref) {
        this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    timeChangeDetection(config) {
        const record = config && config['record'];
        const profileName = 'Change Detection';
        // Profiler is not available in Android browsers without dev tools opened
        const isProfilerAvailable = win.console.profile != null;
        if (record && isProfilerAvailable) {
            win.console.profile(profileName);
        }
        const start = performanceNow();
        let numTicks = 0;
        while (numTicks < 5 || (performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        const end = performanceNow();
        if (record && isProfilerAvailable) {
            win.console.profileEnd(profileName);
        }
        const msPerTick = (end - start) / numTicks;
        win.console.log(`ran ${numTicks} change detection cycles`);
        win.console.log(`${msPerTick.toFixed(2)} ms per check`);
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    }
}
function performanceNow() {
    return win.performance && win.performance.now ? win.performance.now() :
        new Date().getTime();
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
    return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function escapeHtml(text) {
    const escapedText = {
        '&': '&a;',
        '"': '&q;',
        '\'': '&s;',
        '<': '&l;',
        '>': '&g;',
    };
    return text.replace(/[&"'<>]/g, s => escapedText[s]);
}
function unescapeHtml(text) {
    const unescapedText = {
        '&a;': '&',
        '&q;': '"',
        '&s;': '\'',
        '&l;': '<',
        '&g;': '>',
    };
    return text.replace(/&[^;]+;/g, s => unescapedText[s]);
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
function makeStateKey(key) {
    return key;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialized in a
 * non-lossy manner.
 *
 * @publicApi
 */
class TransferState {
    constructor() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    /** @internal */
    static init(initState) {
        const transferState = new TransferState();
        transferState.store = initState;
        return transferState;
    }
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get(key, defaultValue) {
        return this.store[key] !== undefined ? this.store[key] : defaultValue;
    }
    /**
     * Set the value corresponding to a key.
     */
    set(key, value) {
        this.store[key] = value;
    }
    /**
     * Remove a key from the store.
     */
    remove(key) {
        delete this.store[key];
    }
    /**
     * Test whether a key exists in the store.
     */
    hasKey(key) {
        return this.store.hasOwnProperty(key);
    }
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize(key, callback) {
        this.onSerializeCallbacks[key] = callback;
    }
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson() {
        // Call the onSerialize callbacks and put those values into the store.
        for (const key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    }
}
TransferState.ɵfac = function TransferState_Factory(t) { return new (t || TransferState)(); };
TransferState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransferState, factory: TransferState.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransferState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return []; }, null); })();
function initTransferState(doc, appId) {
    // Locate the script tag with the JSON data transferred from the server.
    // The id of the script tag is set to the Angular appId + 'state'.
    const script = doc.getElementById(appId + '-state');
    let initialState = {};
    if (script && script.textContent) {
        try {
            // Avoid using any here as it triggers lint errors in google3 (any is not allowed).
            initialState = JSON.parse(unescapeHtml(script.textContent));
        }
        catch (e) {
            console.warn('Exception while restoring TransferState for app ' + appId, e);
        }
    }
    return TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
class BrowserTransferStateModule {
}
BrowserTransferStateModule.ɵfac = function BrowserTransferStateModule_Factory(t) { return new (t || BrowserTransferStateModule)(); };
BrowserTransferStateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrowserTransferStateModule });
BrowserTransferStateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [{ provide: TransferState, useFactory: initTransferState, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID] }] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserTransferStateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                providers: [{ provide: TransferState, useFactory: initTransferState, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID] }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
    /**
     * Match all nodes.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    static all() {
        return () => true;
    }
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    static css(selector) {
        return (debugElement) => {
            return debugElement.nativeElement != null ?
                elementMatches(debugElement.nativeElement, selector) :
                false;
        };
    }
    /**
     * Match nodes that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    static directive(type) {
        return (debugNode) => debugNode.providerTokens.indexOf(type) !== -1;
    }
}
function elementMatches(n, selector) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isElementNode(n)) {
        return n.matches && n.matches(selector) ||
            n.msMatchesSelector && n.msMatchesSelector(selector) ||
            n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
    }
    return false;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Version('12.0.0');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=platform-browser.js.map

/***/ }),

/***/ 9493:
/*!************************************************!*\
  !*** ./projects/mfe1/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4576);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);



class AppComponent {
    constructor(http) {
        console.debug('http', http);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 7226:
/*!*********************************************!*\
  !*** ./projects/mfe1/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9493);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 46);
/* harmony import */ var _flights_flights_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flights/flights.module */ 6551);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ 407);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4576);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _flights_flights_module__WEBPACK_IMPORTED_MODULE_3__.FlightsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__.APP_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _flights_flights_module__WEBPACK_IMPORTED_MODULE_3__.FlightsModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 407:
/*!*********************************************!*\
  !*** ./projects/mfe1/src/app/app.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTES": () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 46);

const APP_ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, pathMatch: 'full' }
];


/***/ }),

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

/***/ 46:
/*!******************************************************!*\
  !*** ./projects/mfe1/src/app/home/home.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [["src", "../../assets/angular.png", "width", "50"], ["routerLink", "/flights-search"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search Flights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 2643:
/*!****************************************!*\
  !*** ./projects/mfe1/src/bootstrap.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7226);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 9795:
/*!*******************************************************!*\
  !*** ./projects/mfe1/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
//# sourceMappingURL=projects_mfe1_src_bootstrap_ts.js.map