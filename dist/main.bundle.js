webpackJsonp([0,3],{

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
        this.name = 'Jane Doe';
        this.email = 'jane.doe@email.gov';
    }
    return Contact;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/contact.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
        this.projectName = 'A Building';
        this.permitNumber = '1611-089';
        this.address = 'Somewhere';
        this.buildingStatus = 'WCI';
        this.planningStatus = 'WCI';
        this.engineeringStatus = 'APPROVED';
        this.treeStatus = 'NA';
        this.fireStatus = 'IN REVIEW';
        this.submissionNumber = 'SUB1';
    }
    return Project;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/project.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 460;


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(626);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/main.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'City of Mercer Island - Building Permit Notification Email';
        this.statuses = ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
        this.subs = ['SUB1', 'SUB2', 'SUB3', 'SUB4', 'SUB5', 'SUB6', 'SUB7', 'SUB8'];
        this.project = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]();
        this.contact = new __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* Contact */]();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(785),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/app.component.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_email_notification_email_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_inputs_email_inputs_component__ = __webpack_require__(627);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notification_email_notification_email_component__["a" /* NotificationEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__email_inputs_email_inputs_component__["a" /* EmailInputsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/app.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailInputsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailInputsComponent = (function () {
    function EmailInputsComponent() {
        this.statuses = ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
        this.subs = ['SUB1', 'SUB2', 'SUB3', 'SUB4', 'SUB5', 'SUB6', 'SUB7', 'SUB8'];
    }
    EmailInputsComponent.prototype.sendEmail = function () {
        console.log('Email Sent!');
    };
    EmailInputsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]) === 'function' && _a) || Object)
    ], EmailInputsComponent.prototype, "project", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* Contact */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* Contact */]) === 'function' && _b) || Object)
    ], EmailInputsComponent.prototype, "contact", void 0);
    EmailInputsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-email-inputs',
            template: __webpack_require__(786),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailInputsComponent);
    return EmailInputsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/email-inputs.component.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationEmailComponent = (function () {
    function NotificationEmailComponent() {
    }
    NotificationEmailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]) === 'function' && _a) || Object)
    ], NotificationEmailComponent.prototype, "project", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* Contact */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* Contact */]) === 'function' && _b) || Object)
    ], NotificationEmailComponent.prototype, "contact", void 0);
    NotificationEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notification-email',
            template: __webpack_require__(787),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationEmailComponent);
    return NotificationEmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/notification-email.component.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/environment.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ubuntu/workspace/City-of-Mercer-Island-Internal-Tools/src/polyfills.js.map

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = ".app{\n  height:100vh;\n  border: 0;\n}\n.title-container {\n  text-align: center;\n  width:100%;\n  background-color: #303F9F;\n  color:white;\n  padding-right:0px;\n  margin:0;\n  float: top;\n  z-index: 10;\n  box-shadow: 0 5px 12px -1px #888;\n  border:0;\n}\n.app-title {\n  text-align:left;\n  color: white;\n  padding-left:10px;\n  margin:0;\n  font-weight: normal;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = ".inputs-container{\n  padding-left: 0px;\n  padding-right:20px;\n  box-shadow: 5px 0 12px -1px #888;\n  float:left;\n  overflow-x: hidden;\n  overflow-y: auto\n}\n.project-info-container{\n  width: 90%;\n  margin-left: 20px;\n  margin-right: 20px;\n  \n}\n.status-select {\n  width:100%;\n  margin-top: 30px\n}\n\n.submission-select {\n  margin-top:16px;\n  margin-bottom:16px;\n  width:100%;\n}\n\n.project-info {\n  margin-top: 20px;\n  margin-bottom: 20px\n}\n\nh2, h3 {\n  font-family: Roboto;\n  font-weight: normal;\n  color: #9E9E9E;\n  border-bottom-style: solid;\n  border-bottom-color: #9E9E9E;\n  border-bottom-width: 0.75px;\n}\n\nmd-input-container {\n  width:100%;\n}\n\n.button-container{\n  float:center;\n  margin:30px;\n}\n\nbutton {\n  margin:auto;\n  display:block;\n}"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class = \"app\">  \n  <div fxLayout=\"column\" fxLayoutAlign = \"center\" fxFlex = \"5%\" class = \"title-container\"> \n      <h1 class=\"app-title\" fxFlex = \"50%\">\n        {{title}}\n      </h1>\n  </div>\n  <div fxLayout = \"row\" fxFlex = \"95%\">\n    <app-email-inputs  fxFlex = \"25%\" [project]=\"project\" [contact]=\"contact\"></app-email-inputs>\n    <app-notification-email  fxFlex = \"75%\" [project]=\"project\" [contact]=\"contact\"></app-notification-email>\n  </div>\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<div class = \"inputs-container\">\n      <form class=\"project-info-container\">\n        <h3 color=\"primary\">Inputs</h3>\n        <md-input-container>\n          <input md-input placeholder=\"Contact Email\" [(ngModel)] = \"contact.email\" name=\"email\" md-no-asterisk required>\n        </md-input-container><br />\n        <md-input-container>\n          <input md-input placeholder=\"Permit Number\" [(ngModel)] = \"project.permitNumber\" name=\"number\" md-no-asterisk required>\n        </md-input-container><br />\n        <md-input-container>\n          <input md-input placeholder=\"Project Name\" [(ngModel)] = \"project.projectName\" name=\"name\" md-no-asterisk required>\n        </md-input-container><br />\n        <md-input-container>\n          <input md-input placeholder=\"Project Address\" [(ngModel)] = \"project.address\" name=\"address\" md-no-asterisk required >\n        </md-input-container><br />\n        <md-select [(ngModel)] = \"project.submissionNumber\" name = \"subnum\" class = \"submission-select\" color=\"primary\" placeholder=\"Submission Number\" md-no-asterisk required>\n          <md-option *ngFor = \"let sub of subs\" [value] = \"sub\">\n            {{sub}}\n          </md-option>\n        </md-select>\n      </form>\n      <div class=\"project-info-container\">\n        <h3>Permit Status</h3>\n          <md-select [(ngModel)] = \"project.buildingStatus\" color=\"primary\" class=\"status-select\" placeholder=\"Building Status\">\n            <md-option *ngFor = \"let status of statuses\" [value] = \"status\">\n              {{status}}\n            </md-option>\n          </md-select>\n          <md-select [(ngModel)] = \"project.planningStatus\" class=\"status-select\" placeholder=\"Planning Status\">\n            <md-option *ngFor = \"let status of statuses\" [value] = \"status\">\n              {{status}}\n            </md-option>\n          </md-select>\n          <md-select [(ngModel)] = \"project.engineeringStatus\" class=\"status-select\" placeholder=\"Enginering Status\">\n            <md-option *ngFor = \"let status of statuses\" [value] = \"status\">\n              {{status}}\n            </md-option>\n          </md-select>\n          <md-select [(ngModel)] = \"project.treeStatus\" class=\"status-select\" placeholder=\"Tree Status\">\n            <md-option *ngFor = \"let status of statuses\" [value] = \"status\">\n              {{status}}\n            </md-option>\n          </md-select>\n          <md-select [(ngModel)] = \"project.fireStatus\" class=\"status-select\" placeholder=\"Fire Status\">\n            <md-option *ngFor = \"let status of statuses\" [value] = \"status\">\n              {{status}}\n            </md-option>\n          </md-select>\n          <div class = \"button-container\" fxLayout = \"column\" fxLayout = \"center\">\n            <button md-raised-button color=\"primary\"  fxFlex = \"50%\" (click) = \"sendEmail()\">SEND</button>\n          </div>\n      </div>\n    </div>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<!-- READ ME: Inline styles are used to preserve formatting because HTML email template is sent as a string.-->\n\n<div fxLayout = \"column\" class = \"email-container\" style = \"height:100%; overflow-x: hide\">  \n  <div fxFlex = \"10%\" class = \"send-container\" style = \"width:100%; float: top; border-bottom-style: solid; overflow-x: hide\">\n    <div style = \"padding: 15px\">\n      <label><strong>To:</strong></label>\n      <span>{{contact.email}}</span>\n    </div>\n    <div style = \"padding-left: 15px; padding-bottom: 15px\">\n      <label><strong>Subject:</strong></label>\n      <span>Building Plan Review comments for {{project.address}}</span>\n    </div>\n  </div>\n  <div fxFlex = \"90%\" class = \"email-body-container\" style = \"padding:20px; overflow-y: auto; overflow-x: hide\">\n    <table style = \"font-size:12px\">\n      <tr>\n        <td><strong>Project:</strong></td>\n        <td style = \"color:red; padding-left: 30px\"><strong>{{project.projectName}}</strong></td>\n      </tr>\n      <tr>\n        <td><strong>Location:</strong></td>\n        <td style = \"color:red; padding-left: 30px\"><strong>{{project.address}}</strong></td>\n      </tr>\n      <tr>\n        <td><strong></strong></td>\n        <td style = \"padding-left: 30px\"><strong>Mercer Island, WA 98040</strong></td>\n      </tr>\n      <tr>\n        <td><strong>Permit Application Number:</strong></td>\n        <td style = \"color:red; padding-left: 30px\"><strong>{{project.permitNumber}}</strong></td>\n      </tr>\n    </table>\n    <p style = \"font-size:12px\">\n      The City of Mercer Island Development Services has completed a building plan review \n      of your ePlan documents for conformance with the following codes, as adopted and \n      amended by the State of Washington and the City of Mercer Island:\n    </p>\n    <ul style = \"font-size:12px; font-style:italic\">\n      <li>2015 International Residential Code (IRC)</li>\n      <li>2015 International Building Code (IBC), as applicable</li>\n      <li>2015 Washington State Energy Code, WAC 51-11 (WSEC)</li>\n      <li>Minimum Design Loads for Buildings and Other Structures, ASCE 7-10 (ASCE)</li>\n      <li>2012 Special Design Provisions for Wind and Seismic (SDPWS)</li>\n      <li>Mercer Island City Code (MICC)</li>\n    </ul>\n    <p style = \"font-size:12px\">\n      The Correction Drawing File can be reviewed and downloaded from the MIePlan Cloud here: \n    </p>\n    <p style = \"font-size:12px\">\n      <a style = \"color:blue\" href = \"https://mieplan.mercergov.org/adobe/eplan/~CurrentSharedReviews/{{project.permitNumber}}-{{project.submissionNumber}}-PLANS_review.pdf\">\n      https://mieplan.mercergov.org/adobe/eplan/~CurrentSharedReviews/{{project.permitNumber}}-{{project.submissionNumber}}-PLANS_review.pdf\n      </a>\n    </p>\n    <p style = \"font-size:12px\">\n      To access the commented file, you will need to enter “<strong>eguest</strong>” as the User Name \n      and “<strong>@mercer123</strong>” for the Password. Please note, you can send this link to your \n      sub-consultants for their input and replies.\n    </p>\n    <p style = \"font-size:12px\">\n      Please respond to each comment using the reply functionality in the comments navigation pane. \n      You must use Adobe Reader or Acrobat to reply to the comments. The easiest way to \n      do this is to right click each comment and select “reply”. Click on the “Publish \n      Comments” button in Reader or Acrobat in order to post your replies. For additional \n      information on the MIePlan review process, including tutorial videos and detailed \n      submittal checklists, browse to \n      <a style = \"color:blue\" href = \"http://www.mercergov.org/Page.asp?NavID=2619\">http://www.mercergov.org/Page.asp?NavID=2619</a>.\n    </p>\n    <p style = \"font-size:12px\">\n      After each review discipline has completed their review (see below), and you have \n      replied and published your response to each of the comments, you may resubmit \n      the corrected project documents. Please upload a new, complete set of corrected \n      drawings and any other supplemental documentation to the City of Mercer Island \n      FTP site here: <a style = \"color:blue\" href = \"https://sftp.mercergov.org/thinclient/Login.aspx\">\n      Mercer Island FTP Site</a>. Enter “<strong>guest</strong>” as username, and “<strong>eplan</strong>” as the password.\n    </p>\n    <p style = \"font-size:12px\">\n      It is important that each of the comments have a reply. Your resubmittal date and\n      review timeline begins only when all of the replies have been made and a new, complete \n      set of corrected drawings and other supporting information is provided. \n    </p>\n    <p style = \"font-size:12px\">\n      Please see below for current review status (you can also check online at \n      <a style = \"color:blue\" href = \"https://permitsearch.mybuildingpermit.com/\">\n        https://permitsearch.mybuildingpermit.com</a>):\n    </p>\n    <p style = \"font-size:12px\">\n      Please DO NOT reply to this email or contact me regarding the status of the project. \n      Our Customer Service Team will be better able to help you. You can reach them at \n      (206) 275-7605.\n    </p>\n    <table style = \"width: 200px; font-size:12px; margin-left: 20px; border-collapse: collapse; border: 1px solid red\">\n      <tr style = \"border: 1px solid black\">\n        <td style = \"border: 1px solid black\"><strong>Building:</strong></td>\n        <td style = \"color: red\">{{project.buildingStatus}}</td>\n      </tr>\n      <tr style = \"border: 1px solid black\">\n        <td style = \"border: 1px solid black\"><strong>Planning:</strong></td>\n        <td style = \"color: red\">{{project.planningStatus}}</td>\n      </tr>\n      <tr style = \"border: 1px solid black\">\n        <td style = \"border: 1px solid black\"><strong>Engineering:</strong></td>\n        <td style = \"color: red\">{{project.engineeringStatus}}</td>\n      </tr>\n      <tr style = \"border: 1px solid black\">\n        <td style = \"border: 1px solid black\"><strong>Tree:</strong></td>\n        <td style = \"color: red\">{{project.treeStatus}}</td>\n      </tr>\n      <tr style = \"border: 1px solid black\">\n        <td style = \"border: 1px solid black\"><strong>Fire:</strong></td>\n        <td style = \"color: red\">{{project.fireStatus}}</td>\n      </tr>\n    </table>\n    <ul style = \"font-size:10px\">\n      <li>\n        WCI (Waiting for Customer Information): the comments from that review \n        discipline are included within the ePlan drawing file noted above.\n      </li>\n      <li>\n        IN REVIEW: the review discipline has not completed their review, and additional \n        comments may be published to the ePlan drawing file.\n      </li>\n      <li>\n        APPROVED: indicates there are no correction items for that review discipline\n      </li>\n      <li>\n        NA (Not applicable): Review discipline is not scheduled to review this project.\n      </li>\n    </ul>\n    <p style = \"font-size:12px\">\n      After each review discipline has completed their review (there are no disciplines\n      noted as IN REVIEW), you may resubmit your corrected ePlan. Ensure that you have \n      replied to each of the correction comments—remember to click “Publish”—and made the \n      required changes to your project. Upload the complete revised drawing set with any \n      additional supporting information to the  <a style = \"color:blue\" href = \"https://sftp.mercergov.org/thinclient/Login.aspx\">\n      Mercer Island FTP Site</a>. You will be contacted \n      by email within 3 working days acknowledging receipt of your resubmittal.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(461);


/***/ })

},[822]);
//# sourceMappingURL=main.bundle.map