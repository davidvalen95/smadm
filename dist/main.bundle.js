webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/MyHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHelper; });
var MyHelper = /** @class */ (function () {
    function MyHelper() {
    }
    MyHelper.ucWord = function (target) {
        if (!target) {
            return "";
        }
        //# replac e_
        target = target.replace(/_/g, " ");
        //# insert a space before all caps
        target = target.replace(/([A-Z])/g, ' $1');
        //# replace all after space in documents
        target = target.replace(/[\s][\w]/g, function (a) {
            return a.toUpperCase();
        });
        target = target.replace(/^./g, (function (a) {
            return a.toUpperCase();
        }));
        return target;
    };
    MyHelper.getDateFormat = function (dateString, format) {
        var date = new Date(dateString);
        console.log('getDateFormat', dateString, date);
        return date.toLocaleString();
    };
    return MyHelper;
}());

//# sourceMappingURL=MyHelper.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"wrapper\" *ngIf=\"userService.isLoggedIn else login\">\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <button style=\"visibility: hidden;\" type=\"button\" class=\"btn btn-danger closeModal\" data-dismiss=\"modal\">Close</button>\r\n\r\n\r\n</div>\r\n\r\n\r\n<ng-template #login>\r\n\r\n    <app-login *ngIf=\"router.url !== '/absence/barcode'\"></app-login>\r\n\r\n    <app-absence-barcode *ngIf=\"router.url === '/absence/barcode'\"></app-absence-barcode>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "[hidden] {\n  display: none !important; }\n\nth {\n  font-weight: normal !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, userService, apiService) {
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.apiService = apiService;
        this.yScrollStack = [];
        apiService.setUser(userService);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.loginLocalStorage();
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            // this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            // elemMainPanel.scrollTop = 0;
            // elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            // let ps = new PerfectScrollbar(elemMainPanel);
            // ps = new PerfectScrollbar(elemSidebar);
        }
        //
        // $(document).ready(function(){
        //     alert();
        //     $('.main-panel').hide();
        // });
        // this.userService.apiExecuteLogin("davidvalen95@gmail.com","rumah0123");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            // const ps = new PerfectScrollbar(elemMainPanel);
            // ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AppComponent.prototype.setJquery = function () {
        alert();
        $(document).ready(function () {
            alert();
            $(".fancyBox").fancybox();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_api_api_service__["b" /* ApiService */]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipe_pipe_module__ = __webpack_require__("./src/app/pipe/pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_login_login_component__ = __webpack_require__("./src/app/page/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_my_local_storage_my_local_storage_service__ = __webpack_require__("./src/app/service/my-local-storage/my-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directive_directive_module__ = __webpack_require__("./src/app/directive/directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_profile_profile_component__ = __webpack_require__("./src/app/page/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__page_module_user_user_component__ = __webpack_require__("./src/app/page/module/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__page_module_branch_branchList_branch_component__ = __webpack_require__("./src/app/page/module/branch/branchList/branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__page_module_branch_branch_detail_branch_detail_component__ = __webpack_require__("./src/app/page/module/branch/branch-detail/branch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page_module_absence_absence_list_absence_list_component__ = __webpack_require__("./src/app/page/module/absence/absence-list/absence-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__page_thread_thread_list_thread_list_component__ = __webpack_require__("./src/app/page/thread/thread-list/thread-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__page_thread_thread_detail_thread_detail_component__ = __webpack_require__("./src/app/page/thread/thread-detail/thread-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__page_module_configure_branch_configure_branch_detail_configure_branch_detail_component__ = __webpack_require__("./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__page_absence_barcode_absence_barcode_component__ = __webpack_require__("./src/app/page/absence-barcode/absence-barcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule_1 = AppModule;
    AppModule.module = [
    // MatDatepickerModule, BrowserAnimationsModule
    ];
    AppModule = AppModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__page_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__page_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__page_module_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_26__page_module_branch_branchList_branch_component__["a" /* BranchComponent */],
                __WEBPACK_IMPORTED_MODULE_27__page_module_branch_branch_detail_branch_detail_component__["a" /* BranchDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_28__page_module_absence_absence_list_absence_list_component__["a" /* AbsenceListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__page_thread_thread_list_thread_list_component__["a" /* ThreadListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__page_thread_thread_detail_thread_detail_component__["a" /* ThreadDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_32__page_module_configure_branch_configure_branch_detail_configure_branch_detail_component__["a" /* ConfigureBranchDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_33__page_absence_barcode_absence_barcode_component__["a" /* AbsenceBarcodeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__pipe_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_23__directive_directive_module__["a" /* DirectiveModule */]
            ].concat(AppModule_1.module),
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__service_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__service_api_api_service__["b" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_21__service_my_local_storage_my_local_storage_service__["a" /* MyLocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_22__service_helper_helper_service__["a" /* HelperService */],
                { provide: __WEBPACK_IMPORTED_MODULE_29__angular_common__["h" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_29__angular_common__["e" /* HashLocationStrategy */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
    var AppModule_1;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("./src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_module_user_user_component__ = __webpack_require__("./src/app/page/module/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_module_branch_branchList_branch_component__ = __webpack_require__("./src/app/page/module/branch/branchList/branch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_module_branch_branch_detail_branch_detail_component__ = __webpack_require__("./src/app/page/module/branch/branch-detail/branch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_module_absence_absence_list_absence_list_component__ = __webpack_require__("./src/app/page/module/absence/absence-list/absence-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_thread_thread_detail_thread_detail_component__ = __webpack_require__("./src/app/page/thread/thread-detail/thread-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_module_configure_branch_configure_branch_detail_configure_branch_detail_component__ = __webpack_require__("./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__page_absence_barcode_absence_barcode_component__ = __webpack_require__("./src/app/page/absence-barcode/absence-barcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'absence/barcode', component: __WEBPACK_IMPORTED_MODULE_18__page_absence_barcode_absence_barcode_component__["a" /* AbsenceBarcodeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_12__page_module_user_user_component__["a" /* UserComponent */] },
    { path: 'branch/list', component: __WEBPACK_IMPORTED_MODULE_13__page_module_branch_branchList_branch_component__["a" /* BranchComponent */] },
    { path: 'branch/detail', component: __WEBPACK_IMPORTED_MODULE_14__page_module_branch_branch_detail_branch_detail_component__["a" /* BranchDetailComponent */] },
    { path: 'branch/configure/web', component: __WEBPACK_IMPORTED_MODULE_17__page_module_configure_branch_configure_branch_detail_configure_branch_detail_component__["a" /* ConfigureBranchDetailComponent */] },
    { path: 'thread/detail', component: __WEBPACK_IMPORTED_MODULE_16__page_thread_thread_detail_thread_detail_component__["a" /* ThreadDetailComponent */] },
    { path: 'absence/list', component: __WEBPACK_IMPORTED_MODULE_15__page_module_absence_absence_list_absence_list_component__["a" /* AbsenceListComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_pipe_module__ = __webpack_require__("./src/app/pipe/pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__floating_input_floating_input_floating_input_component__ = __webpack_require__("./src/app/components/floating-input/floating-input/floating-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__floating_input_form_error_message_form_error_message_component__ = __webpack_require__("./src/app/components/floating-input/form-error-message/form-error-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__floating_input_row_floating_input_row_floating_input_component__ = __webpack_require__("./src/app/components/floating-input/row-floating-input/row-floating-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__key_value_key_value_key_value_component__ = __webpack_require__("./src/app/components/key-value/key-value/key-value.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pagination_pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_modal_my_modal_component__ = __webpack_require__("./src/app/components/my-modal/my-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipe_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__floating_input_floating_input_floating_input_component__["a" /* FloatingInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__floating_input_form_error_message_form_error_message_component__["a" /* FormErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__floating_input_row_floating_input_row_floating_input_component__["a" /* RowFloatingInputComponent */],
                __WEBPACK_IMPORTED_MODULE_11__key_value_key_value_key_value_component__["a" /* KeyValueComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pagination_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__my_modal_my_modal_component__["a" /* MyModalComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__floating_input_floating_input_floating_input_component__["a" /* FloatingInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__floating_input_form_error_message_form_error_message_component__["a" /* FormErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__floating_input_row_floating_input_row_floating_input_component__["a" /* RowFloatingInputComponent */],
                __WEBPACK_IMPORTED_MODULE_11__key_value_key_value_key_value_component__["a" /* KeyValueComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pagination_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__my_modal_my_modal_component__["a" /* MyModalComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "./src/app/components/floating-input/BaseForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LabelType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyHelper__ = __webpack_require__("./src/app/MyHelper.ts");


var BaseForm = /** @class */ (function () {
    function BaseForm(label, name) {
        var _this = this;
        this.label = label;
        this.name = name;
        this.labelType = LabelType.stacked;
        this.inputType = InputType.text;
        this.placeholder = "";
        this.selectOptions = [];
        this.rules = { isRequired: true, min: 0 };
        this.isHidden = false;
        this.styling = {};
        this.value = "";
        this.isReadOnly = false;
        this.dateSetting = { min: "1900-01-01" };
        this.changeListener = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["a" /* ReplaySubject */](0);
        this.inputClickListener = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["a" /* ReplaySubject */](0);
        this.labelClickListener = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["a" /* ReplaySubject */](0);
        this.buttonRightClickListener = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["a" /* ReplaySubject */](0);
        this.searchBarSetting = null;
        this.isSearchBar = false;
        this.isDisabled = false;
        this.isInitializeState = false;
        this.infoBottom = "";
        this.lastBroadcastWithNumber = -1;
        this.classDisplay = "col-xs-12";
        this.title = "";
        this.autoCompleteOption = { config: { url: "" }, searchValue: "", lastRequest: new Date() };
        this.fileConfig = { formContainer: {} };
        //# for file auto add
        this.attachmentInfo = { isSet: false };
        this.buttonRightSuccess = {
            label: "",
            isHidden: true,
            clickListener: function () { }
        };
        this.buttonRightDanger = {
            label: "",
            isHidden: true,
            clickListener: function () { }
        };
        this.isSelectProcessing = false;
        this.placeholder = "Enter " + this.label;
        // var promise: Promise<any> = Promise.resolve("tes");
        this.changeListener.subscribe(function (model) {
            if (_this.inputType == InputType.number && _this.rules.max) {
                // if ((model.value as number) > this.rules.max) {
                //   // model.
                // }
                var test;
            }
            //
            // if(this.inputType == InputType.select){
            //   this.value = model.value;
            // }
        });
    }
    BaseForm.prototype.setAutoCompleteValue = function (keyValue) {
        var _this = this;
        this.value = keyValue.value;
        this.autoCompleteOption.selected = keyValue;
        this.autoCompleteOption.searchValue = keyValue.key;
        this.autoCompleteOption.searchValue = keyValue.key;
        setTimeout(function () {
            _this.autoCompleteOption.searchValue = keyValue.key;
            console.log('setAutoCOmpleteValue', _this.autoCompleteOption, _this.value);
        }, 400);
    };
    BaseForm.prototype.setInputTypeAutoComplete = function (config, selectedKeyValue) {
        if (selectedKeyValue === void 0) { selectedKeyValue = { key: "", value: "", display: "" }; }
        this.inputType = InputType.autocomplete;
        if (!config.params) {
            config.params = {};
        }
        if (!config.isSilent) {
            config.isSilent = true;
        }
        this.autoCompleteOption = {
            config: config,
            searchValue: "",
            selected: selectedKeyValue,
            lastRequest: new Date(),
        };
    };
    BaseForm.prototype.setIsHidden = function (isHidden, isRequiredWhenVisible) {
        if (isHidden === void 0) { isHidden = null; }
        if (isRequiredWhenVisible === void 0) { isRequiredWhenVisible = false; }
        var logic = isHidden != null ? isHidden : !this.isHidden;
        this.isHidden = logic;
        if (this.isHidden) {
            // this.value            = '';
            this.rules.isRequired = false;
        }
        else {
            this.rules.isRequired = isRequiredWhenVisible;
        }
        return this;
    };
    BaseForm.prototype.setDateAdvanceDay = function (param, day) {
        if (day === void 0) { day = 1; }
        if (param == null || param == "") {
            return;
        }
        try {
            var date = new Date(param);
            date.setDate(date.getDate() + day);
            this.value = date.toISOString();
        }
        catch (error) {
        }
        return this;
    };
    /**
     *
     * @param {object} formValueContainer value json di controller buat submit
     * @returns {this}
     */
    BaseForm.prototype.setInputTypeFile = function (fileConfig) {
        this.inputType = InputType.file;
        // this.value = "0 ";
        // this.fileCallbackEvent = callbackEvent;
        if (fileConfig.isMultilple) {
            this.infoBottom += "<p>Can select multiple files</p>";
        }
        fileConfig.accept = fileConfig.accept || "";
        this.fileConfig = fileConfig;
        return this;
    };
    BaseForm.prototype.setInputFileImageOnly = function () {
        this.fileConfig.accept = "image/*";
        this.infoBottom += "<p>Only accept image</p>";
    };
    BaseForm.prototype.setInputTypeDate = function (dateSetting) {
        this.placeholder = "Select " + this.label;
        this.inputType = InputType.date;
        // Return today's date and time
        dateSetting.hourValues = "";
        if (dateSetting.min == null) {
            var year = new Date().getFullYear() - 1;
            dateSetting.min = year + "-01-01";
        }
        if (dateSetting.max == null)
            dateSetting.max = BaseForm.getAdvanceDate(712);
        if (dateSetting.displayFormat == null) {
            dateSetting.displayFormat = "DDD DD MMM YYYY";
        }
        if (dateSetting.min instanceof Date) {
            dateSetting.min = dateSetting.min.toISOString();
        }
        if (dateSetting.max instanceof Date) {
            dateSetting.max = dateSetting.max.toISOString();
        }
        this.dateSetting = dateSetting;
        console.log("setting " + this.name, this.dateSetting);
        return this;
    };
    BaseForm.prototype.setIsReadOnly = function (isReadOnly) {
        this.isReadOnly = isReadOnly;
        this.setIsRequired(isReadOnly);
        if (isReadOnly) {
            this.title = "This field is not editable";
        }
        else {
            this.title = "";
        }
    };
    BaseForm.prototype.setDateTimezone = function (timezone) {
        if (timezone === void 0) { timezone = 8; }
        this.value = new Date((new Date().getTime() - new Date().getTimezoneOffset()) + timezone * 3600 * 1000).toISOString();
        return this;
    };
    BaseForm.prototype.setInputTypeTime = function () {
        this.placeholder = "Select " + this.label;
        var dateSetting = {};
        dateSetting.displayFormat = "HH:mm";
        this.inputType = InputType.date;
        dateSetting.min = '00:00';
        dateSetting.max = "23:59";
        dateSetting.hourValues = "";
        dateSetting.isTime = true;
        var prefix = "";
        for (var i = 0; i < 24; i++) {
            dateSetting.hourValues += prefix;
            dateSetting.hourValues += ("" + '0' + i).slice(-2);
            prefix = ",";
        }
        console.log('timesetting', dateSetting);
        this.dateSetting = dateSetting;
        return this;
    };
    BaseForm.prototype.setInputTypeText = function () {
        this.inputType = InputType.text;
        this.placeholder = "Enter " + this.label;
        return this;
    };
    BaseForm.prototype.setInputTypeTextarea = function () {
        this.inputType = InputType.textarea;
        return this;
    };
    BaseForm.prototype.setInputTypeSelect = function (options, isFirstSelected) {
        if (isFirstSelected === void 0) { isFirstSelected = true; }
        // console.log('bb', options , options  ? options : []);
        if (!this.isSelectProcessing) {
            this.isSelectProcessing = true;
            this.placeholder = "Select " + this.label;
            this.inputType = InputType.select;
            this.selectOptions = options ? options : [];
            var text = "sdoifjiojdf";
            this.isSelectProcessing = false;
            if (isFirstSelected && options.length > 0) {
                this.value = options[0].value;
                this.changeListener.next(this);
            }
        }
        console.log('setInputTypeSelect', this.selectOptions);
        return this;
    };
    BaseForm.prototype.setInputTypeSelectTrueFalse = function (labelTrue, labelFalse) {
        if (labelTrue === void 0) { labelTrue = "Yes"; }
        if (labelFalse === void 0) { labelFalse = 'no'; }
        if (!this.isSelectProcessing) {
            this.selectOptions = [];
            this.isSelectProcessing = true;
            this.placeholder = "Select " + this.label;
            this.inputType = InputType.select;
            this.selectOptions = [{
                    key: __WEBPACK_IMPORTED_MODULE_1__MyHelper__["a" /* MyHelper */].ucWord(labelTrue), value: "1",
                }, {
                    key: __WEBPACK_IMPORTED_MODULE_1__MyHelper__["a" /* MyHelper */].ucWord(labelFalse), value: "0",
                }];
            this.isSelectProcessing = false;
        }
        return this;
    };
    BaseForm.prototype.setInputTypeSelectChain = function (observable, processData, isFirstDefault) {
        var _this = this;
        if (isFirstDefault === void 0) { isFirstDefault = false; }
        this.placeholder = "Select " + this.label;
        this.inputType = InputType.select;
        // parsing as key value
        observable.subscribe(function (data) {
            _this.selectOptions = processData(data);
            if (isFirstDefault && _this.value == "") {
                _this.value = _this.selectOptions[0].value;
                console.log("firstDefault", _this.value);
            }
            console.log('selectOptions', _this.selectOptions);
        });
        return this;
    };
    BaseForm.prototype.setInputTypeSearchBar = function (url, httpParams, paramBindEvent, processData) {
        this.placeholder = "Search " + this.label;
        this.value = "-";
        this.isSearchBar = true;
        this.inputType = InputType.text;
        // this.isReadOnly       = true
        this.searchBarSetting = {
            url: url,
            httpParams: httpParams,
            httpParamBindEvent: paramBindEvent,
            processData: processData
        };
        this.placeholder = "Click here to search " + this.label;
        return this;
    };
    BaseForm.prototype.setRulesPatternNumberOnly = function () {
        this.inputType = InputType.number;
        this.rules.pattern = "[0-9]+";
        this.rules.patternInformation = "Only number";
        return this;
    };
    BaseForm.prototype.setInputTypeEmail = function () {
        this.rules.pattern = '[\\w]+(\\.[\\w+])*@[\\w]+(.[\\w]+)*\\.[a-zA-Z]{2,4}';
        this.rules.patternInformation = "Must valid email";
        return this;
    };
    BaseForm.getAdvanceDate = function (advance, from) {
        if (from === void 0) { from = new Date(); }
        from.setDate(from.getDate() + advance);
        return from;
    };
    BaseForm.prototype.getServerDateFormat = function () {
        if (this.inputType == InputType.date) {
            var mmm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            try {
                var date = new Date(this.value);
                return ('0' + date.getUTCDate()).slice(-2) + (" " + mmm[date.getUTCMonth()] + " " + date.getUTCFullYear());
            }
            catch (e) {
                console.log('error', e.toString());
            }
        }
        return this.value;
    };
    BaseForm.prototype.getInputTypeText = function () {
        // console.log('getInputTypeText', InputType[this.inputType])
        return InputType[this.inputType];
    };
    BaseForm.prototype.broadcastIonChange = function (origin, event) {
        // if(this.lastBroadcast && new Date().getTime() - this.lastBroadcast < 1000 ){
        //    return;
        // this.lastBroadcastWithNumber++;
        //# IONCHANGE ANEH TRIGGER 4 KALI
        // console.log('broadcastIonChange', origin, this.name, this.value);
        // if (this.lastBroadcastWithNumber % 4 > 0) {
        //   return;
        // }
        // console.log('lastbroadcastWithnumber', this.lastBroadcastWithNumber);
        this.lastBroadcast = new Date().getTime();
        this.changeListener.next(this); //# my BaseForm
        if (this.inputType == InputType.file && event) {
            console.log('fileProcessing', event.target['files'], this.fileConfig.formContainer);
            for (var key in this.fileConfig.formContainer) {
                if (key.indexOf(this.name) > 0) {
                    delete this.fileConfig.formContainer[key];
                }
            }
            for (var key in event.target['files']) {
                var value = event.target['files'][key];
                this.fileConfig.formContainer[this.name + ("[" + key + "]")] = value;
            }
            console.log('fileProcessing', event.target['files'], this.fileConfig.formContainer);
            this.fileConfig.infoFileName = "File set. " + event.target['files'][0].name;
        }
    };
    BaseForm.prototype.broadcastNgChange = function (event, parentForm) {
        if (this.inputType == InputType.text) {
            this.changeListener.next(this);
        }
        if (this.inputType == InputType.file) {
        }
    };
    BaseForm.prototype.getReadOnlyForDate = function () {
        if (this.dateSetting.isTime) {
            return this.value;
        }
        else {
            return this.getServerDateFormat();
        }
    };
    BaseForm.prototype.getReadOnlyValue = function () {
        var _this = this;
        switch (this.inputType) {
            case InputType.date:
                return this.getReadOnlyForDate();
            case InputType.email:
            case InputType.number:
            case InputType.password:
            case InputType.text:
                return this.value !== '' ? this.value : "-";
            case InputType.select:
                var bank = "";
                //# get the label(key) if type select
                this.selectOptions.map(function (keyValue) {
                    if (keyValue.value == _this.value) {
                        bank = keyValue.key;
                    }
                });
                return bank;
            default:
                return "-";
        }
    };
    BaseForm.prototype.setFileAttachmentInfo = function (name, url) {
        name = !name ? "Attachment " : name;
        if (!url || url == "") {
            return;
        }
        this.attachmentInfo = {
            isSet: true,
            name: name,
            url: url,
        };
        return this;
    };
    BaseForm.prototype.setIsRequired = function (isRequired) {
        this.rules.isRequired = isRequired;
        if (this.inputType == InputType.file) {
            if (this.attachmentInfo.isSet) {
                this.rules.isRequired = false;
            }
        }
        return this;
    };
    BaseForm.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    BaseForm.prototype.getSelectOptionJsonOrigin = function () {
        var _this = this;
        var filter = this.selectOptions.filter(function (data) {
            return data.value == _this.value;
        });
        if (filter[0]) {
            return filter[0];
        }
        else {
            return null;
        }
    };
    return BaseForm;
}());

var InputType;
(function (InputType) {
    InputType[InputType["text"] = 0] = "text";
    InputType[InputType["select"] = 1] = "select";
    InputType[InputType["password"] = 2] = "password";
    InputType[InputType["email"] = 3] = "email";
    InputType[InputType["date"] = 4] = "date";
    InputType[InputType["number"] = 5] = "number";
    InputType[InputType["textarea"] = 6] = "textarea";
    InputType[InputType["file"] = 7] = "file";
    InputType[InputType["datetime"] = 8] = "datetime";
    InputType[InputType["radio"] = 9] = "radio";
    InputType[InputType["autocomplete"] = 10] = "autocomplete";
})(InputType || (InputType = {}));
var LabelType;
(function (LabelType) {
    LabelType[LabelType["inline"] = 0] = "inline";
    LabelType[LabelType["stacked"] = 1] = "stacked";
})(LabelType || (LabelType = {}));
//# sourceMappingURL=BaseForm.js.map

/***/ }),

/***/ "./src/app/components/floating-input/floating-input/floating-input.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--<input [matDatepicker]=\"myDatepicker\">-->\n<!--<mat-datepicker-toggle [for]=\"myDatepicker\"></mat-datepicker-toggle>-->\n<!--<mat-datepicker #myDatepicker></mat-datepicker>-->\n\n\n<div class=\"form-group \" style=\"position:relative;\">\n\n    <!--<ion-item no-padding=\"\" [hidden]=\"rowBaseForms.isHidden===true || rowBaseForms.isReadOnly \" (click)=\"rowBaseForms.ionItemClickListener.next(this.finalModel)\" [ngClass]='{\"ionItemIsReadOnly\":rowBaseForms.isReadOnly}' >-->\n\n    <label *ngIf=\"baseForm.label != ''\" [hidden]=\"baseForm.isHidden\" [ngClass]=\"{'required':baseForm.rules.isRequired && !baseForm.isReadOnly}\" class=\"control-label\" [for]=\"baseForm.name\">{{baseForm.label | ucWord}} </label>\n\n\n    <input\n            [hidden]=\"!baseForm.isReadOnly  || this.inputType == 'autocomplete'\"\n            [disabled]=\"baseForm.isDisabled\"\n            [value]=\"baseForm.getReadOnlyValue()\"\n            type=\"text\"\n            [name]=\"baseForm.name\"\n            [placeholder]=\"baseForm.placeholder || ''\"\n            [readonly]=\"true\"\n            (focus)=\"onFieldClicked(ionInputModel)\"\n            class=\"form-control readOnlyInput\"\n            [title]=\"baseForm.title\"\n    >\n\n    <!--&lt;!&ndash;<span *ngIf=\"rowBaseForms.type=='text';then ionInput else ionSelect\"></span>&ndash;&gt;-->\n\n    <!--&lt;!&ndash;only fordisplay&ndash;&gt;-->\n    <!--&lt;!&ndash;<ion-input&ndash;&gt;-->\n    <!--&lt;!&ndash;type=\"text\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[(ngModel)] = \"rowBaseForms.value\"&ndash;&gt;-->\n    <!--&lt;!&ndash;&gt;&ndash;&gt;-->\n    <!--&lt;!&ndash;  </ion-input>-->\n    <!--&ndash;&gt;-->\n\n    <!--this.inputType!='textarea' || rowBaseForms.isReadOnly-->\n    <textarea\n            [hidden]=\"this.inputType!='textarea' || baseForm.isReadOnly || baseForm.isHidden\"\n            [disabled]=\"baseForm.isDisabled\"\n            [(ngModel)]=\"baseForm.value\"\n            #ionTextareaModel=\"ngModel\"\n\n            [name]=\"baseForm.name\"\n            [placeholder]=\"baseForm.placeholder || ''\"\n            [required]=\"baseForm.rules.isRequired && this.inputType !='file' && !baseForm.isReadOnly\"\n            [minlength]=\"baseForm.rules.minlength\"\n            [maxlength]=\"baseForm.rules.maxlength\"\n            [pattern]=\"baseForm.rules.pattern\"\n            [readonly]=\"baseForm.isReadOnly\"\n\n            (change)=\"broadcast('iontextarea')\"\n\n            (focus)=\"onFieldClicked(ionTextareaModel)\"\n            class=\"form-control\"\n            [title]=\"baseForm.title\"\n    ></textarea>\n\n\n    <input\n            [hidden]=\"this.inputType == 'autocomplete' || this.inputType=='select' || this.inputType=='radio'  ||  this.inputType == 'textarea' || baseForm.isReadOnly  || baseForm.isHidden\"\n            [disabled]=\"baseForm.isDisabled\"\n            [(ngModel)]=\"this.baseForm.value\"\n            [multiple]=\"baseForm.fileConfig.isMultilple && this.inputType == 'file'\"\n            [accept] = \"baseForm.fileConfig.accept\"\n            #ionInputModel=\"ngModel\"\n            [type]=\"this.inputType\"\n            [name]=\"baseForm.name\"\n            [placeholder]=\"baseForm.placeholder || ''\"\n            [required]=\"baseForm.rules.isRequired && this.inputType !='file' && !baseForm.isReadOnly\"\n            [minlength]=\"baseForm.rules.minlength\"\n            [maxlength]=\"baseForm.rules.maxlength\"\n            [pattern]=\"baseForm.rules.pattern\"\n            [readonly]=\"baseForm.isReadOnly\"\n            [max]=\"baseForm.rules.max\"\n            [min]=\"baseForm.rules.min\"\n            (change)=\"broadcast('ioninput', $event)\"\n            (focus)=\"onFieldClicked(ionInputModel)\"\n            class=\"form-control\"\n            [title]=\"baseForm.title\"\n\n\n    >\n\n\n    <input\n            #autoCompleteInput=\"ngModel\"\n            [(ngModel)]=\"this.baseForm.autoCompleteOption.searchValue\"\n            [hidden]=\"this.inputType != 'autocomplete' || baseForm.isHidden\"\n            [disabled]=\"baseForm.isDisabled\"\n            [type]=\"text\"\n            [placeholder]=\"baseForm.placeholder || ''\"\n            [minlength]=\"baseForm.rules.minlength\"\n            [maxlength]=\"baseForm.rules.maxlength\"\n            [pattern]=\"baseForm.rules.pattern\"\n            [readonly]=\"baseForm.isReadOnly\"\n            [max]=\"baseForm.rules.max\"\n            [min]=\"baseForm.rules.min\"\n            class=\"form-control\"\n            [ngClass]=\"{readOnlyInput: baseForm.isReadOnly || baseForm.isDisabled}\"\n            [title]=\"baseForm.title\"\n            (ngModelChange)=\"apiExecuteAutoComplete(autoCompleteInput)\"\n            (blur)=\"cancelAutoComplete()\"\n    >\n\n    <ul *ngIf=\"this.inputType == 'autocomplete' && baseForm.autoCompleteOption.apiList \" class=\"searchResult animationExpandBottom\">\n\n        <li style=\"color: tomato\" (click)=\"cancelAutoComplete()\">[X] Cancel</li>\n\n        <span *ngIf=\"baseForm.autoCompleteOption.apiList.length > 0 \">\n            <li *ngFor=\"let keyValue of baseForm.autoCompleteOption.apiList\" (click)=\"autoCompleteSelected(keyValue)\"><span [innerHtml]=\"(keyValue.display || keyValue.key) | keepAsHtml\"></span></li>\n        </span>\n\n        <span *ngIf=\"baseForm.autoCompleteOption.apiList.length == 0 \">\n            <li style=\"color: red\" (click)=\"cancelAutoComplete()\">Not found</li>\n        </span>\n\n    </ul>\n\n\n    <select\n    [hidden]=\"this.inputType != 'select' || baseForm.isReadOnly  || baseForm.isHidden\"\n    [(ngModel)]   = \"baseForm.value\"\n    #ionSelectModel=\"ngModel\"\n    [name]        = \"baseForm.name\"\n\n    [required]    = \"baseForm.rules.isRequired && this.inputType !='file' && !baseForm.isReadOnly\"\n    [minlength]   = \"baseForm.rules.minlength\"\n    [maxlength]   = \"baseForm.rules.maxlength\"\n    [pattern]     = \"baseForm.rules.pattern\"\n    (change)   = \"broadcast('ionselect')\"\n    [disabled]    = \"baseForm.isDisabled\"\n    (click) = \"onFieldClicked(ionSelectModel)\"\n    class=\"form-control\"\n    [title]=\"baseForm.title\"\n    [ngClass]=\"{readOnlyInput: baseForm.isReadOnly || baseForm.isDisabled}\"\n\n    >\n    <option  *ngFor=\"let option of baseForm.selectOptions\" [value]=\"option.value\">{{option.key}}</option>\n    </select>\n\n\n    <!--<ion-datetime-->\n    <!--[disabled] = \"rowBaseForms.isDisabled \"-->\n    <!--#ionDateModel   = \"ngModel\"-->\n    <!--#datetimePicker-->\n\n    <!--[hidden]        = \"(this.inputType!='date' && this.inputType !='datetime') || rowBaseForms.isReadOnly\"-->\n    <!--[(ngModel)]       = \"rowBaseForms.value\"-->\n    <!--[name]          = \"rowBaseForms.name\"-->\n    <!--[placeholder]   = \"rowBaseForms.placeholder || ''\"-->\n    <!--[required]      = \"rowBaseForms.rules.isRequired  && this.inputType !='file' && !rowBaseForms.isReadOnly\"-->\n    <!--[minlength]     = \"rowBaseForms.rules.minlength\"-->\n    <!--[maxlength]     = \"rowBaseForms.rules.maxlength\"-->\n    <!--[pattern]       = \"rowBaseForms.rules.pattern\"-->\n    <!--[displayFormat] = \"rowBaseForms.dateSetting.displayFormat\"-->\n    <!--[pickerFormat] = \"rowBaseForms.dateSetting.displayFormat\"-->\n    <!--[min]           = \"rowBaseForms.dateSetting.min\"-->\n    <!--[max]           = \"rowBaseForms.dateSetting.max\"-->\n    <!--(ionChange)   = \"broadcast('iondatetime')\"-->\n    <!--[hourValues] = rowBaseForms.hourValues-->\n    <!--(click) = \"onFieldClicked(ionDateModel)\"-->\n\n    <!--&gt;</ion-datetime>-->\n\n\n    <!--</ion-item >-->\n\n    <!--&lt;!&ndash;[required]      = \"rowBaseForms.rules.isRequired \"&ndash;&gt;-->\n    <!--&lt;!&ndash;ngModel=\"t\"&ndash;&gt;-->\n\n\n    <!--&lt;!&ndash;for capturing calender clicked&ndash;&gt;-->\n    <!--<div (click) = \"onFieldClicked(ionDateModel)\" [ngClass]=\"{overrideDatepicker:this.inputType == 'date' && !this.rowBaseForms.isReadOnly}\">-->\n\n    <!--</div>-->\n\n\n    <!--<ion-list #ionRadioModel=\"ngModel\" (ionChange)=\"broadcast('ionradio')\" [hidden]=\"this.inputType!='radio' || rowBaseForms.isHidden\" [name]=\"rowBaseForms.name\" radio-group [(ngModel)]=\"rowBaseForms.value\">-->\n\n    <!--<ion-item *ngFor=\"let selectOption of rowBaseForms.selectOptions\">-->\n    <!--<ion-label>{{selectOption.key}}</ion-label>-->\n    <!--<ion-radio checked=\"true\"  [value]=\"selectOption.value\"></ion-radio>-->\n    <!--</ion-item>-->\n\n\n    <!--</ion-list>-->\n\n\n    <!--<input-->\n    <!--#fileModel = \"ngModel\"-->\n    <!--ngModel=\"\"-->\n    <!--[type]=\"this.inputType\"-->\n    <!--[name]=\"rowBaseForms.name\"-->\n    <!--[id]=\"rowBaseForms.name\"-->\n    <!--[hidden] = \"this.inputType != 'file' || rowBaseForms.isHidden === true || rowBaseForms.isReadOnly\"-->\n    <!--[required] = \"rowBaseForms.rules.isRequired && !rowBaseForms.isReadOnly\"-->\n    <!--(change) = \"rowBaseForms.broadcastNgChange($event,parentForm)\"-->\n    <!--[readonly] = \"rowBaseForms.isReadOnly\"-->\n\n    <!--multiple-->\n    <!--accept=\"*/*\"-->\n    <!--&gt;-->\n\n\n    <!--<div class=\"readOnlyInfo\" [hidden] = \"!baseForm.isReadOnly || baseForm.isHidden\">-->\n    <!--<p class=\"label\">{{baseForm.label | ucWord}} </p>-->\n    <!--<p class=\"value\"   >{{baseForm.getReadOnlyValue()}}</p>-->\n    <!--</div>-->\n\n\n    <!--<open-url [hidden]=\"rowBaseForms.isHidden\" *ngIf=\"rowBaseForms.attachmentInfo.isSet && rowBaseForms.attachmentInfo.name && rowBaseForms.attachmentInfo.name!=''\" [name]=\"rowBaseForms.attachmentInfo.name\" [url]=\"rowBaseForms.attachmentInfo.url\"></open-url>-->\n\n    <!--&lt;!&ndash;&ndash;&gt;-->\n    <!--&lt;!&ndash;for display onlu&ndash;&gt;-->\n\n    <p [hidden]=\"baseForm.isHidden || baseForm.infoBottom == ''\" class=\"infoBottom\"  [innerHTML]=\"baseForm.infoBottom | keepAsHtml\"></p>\n    <p [hidden]=\"baseForm.isHidden || !baseForm.fileConfig.infoFileName\" class=\"infoBottom\"  [innerHTML]=\"baseForm.fileConfig.infoFileName | keepAsHtml\"></p>\n\n    <div [hidden]=\"baseForm.isHidden\" *ngIf=\"finalModel\">\n    <!--<span>{{debug()}}</span>-->\n    <!--<p style=\"text-align:left;margin-left:-0px;\" class=\"error-container\" *ngIf=\"!finalModel.valid && (finalModel.dirty || finalModel.touched || parentForm.submitted)\" >-->\n    <p style=\"text-align:left;margin-left:-0px;\" class=\"error-container\" >\n    <form-error-message  [baseForm]=\"baseForm\" [model]=\"finalModel\"></form-error-message>\n    </p>\n    </div>\n\n\n    <div  *ngIf=\"this.inputType=='file'\"  style=\"width: 65px; ;\" >\n        <img src=\"assets/img/upload.png\"  class=\"img-responsive\" style=\"cursor:pointer\"/>\n\n    </div>\n\n    <div *ngIf=\"!baseForm.buttonRightSuccess.isHidden || !baseForm.buttonRightSuccess.isHidden\" style=\"margin-bottom: 16px;\">\n    <button [hidden]=\"baseForm.buttonRightSuccess.isHidden\" (click)=\"baseForm.buttonRightSuccess.clickListener(baseForm)\" type=\"button\" item-right=\"\" ion-button=\"\" color=\"primary\">{{baseForm.buttonRightSuccess.label}}</button>\n    <button [hidden]=\"baseForm.buttonRightDanger.isHidden\" (click)=\"baseForm.buttonRightDanger.clickListener(this.baseForm)\" type=\"button\" item-right=\"\" ion-button=\"\" color=\"danger\">{{baseForm.buttonRightDanger.label}}</button>\n    </div>\n\n\n    <!--<ng-template #ionInput>-->\n\n    <!--</ng-template>-->\n\n    <!--<ng-template #ionSelect>-->\n\n    <!--</ng-template>-->\n\n    <!--&lt;!&ndash;<label >{{currentBaseForm.label}}</label>&ndash;&gt;-->\n    <!--&lt;!&ndash;<input&ndash;&gt;-->\n    <!--&lt;!&ndash;ngModel=\"\" #model=\"ngModel\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[name]        = \"currentBaseForm.name\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[value]       = \"currentBaseForm.value || ''\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[placeholder] = \"currentBaseForm.placeholder || ''\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[isRequired]    = \"currentBaseForm.rules.isRequired\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[minlength]   = \"currentBaseForm.rules.minlength\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[maxlength]   = \"currentBaseForm.rules.maxlength\"&ndash;&gt;-->\n    <!--&lt;!&ndash;[pattern]     = \"currentBaseForm.rules.pattern\"&ndash;&gt;-->\n    <!--&lt;!&ndash;/>&ndash;&gt;-->\n\n    <!--&lt;!&ndash;<button (click)=\"showCalendar()\">Show Calendar</button>&ndash;&gt;-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/floating-input/floating-input/floating-input.component.scss":
/***/ (function(module, exports) {

module.exports = "textarea {\n  margin: 0px !important;\n  height: 100px;\n  width: 100% !important; }\n\n.form-group {\n  min-width: 80px; }\n\n.required::after {\n  content: '*';\n  color: tomato; }\n\n[hidden] {\n  display: none !important; }\n\n.form-control {\n  margin-bottom: 0px !important;\n  background-image: none;\n  border: 1px #ccc solid;\n  padding: 12px;\n  min-height: 44px !important; }\n\n.readOnlyInput {\n  background: #f0f0f0;\n  background-color: #f0f0f0 !important;\n  cursor: default; }\n\n.readOnlyInfo {\n  display: block; }\n\n.readOnlyInfo p {\n    vertical-align: top;\n    text-align: left !important;\n    margin: 0; }\n\n.readOnlyInfo .label {\n    color: black;\n    display: inline-block;\n    width: 35%;\n    position: relative; }\n\n.readOnlyInfo .label::after {\n      content: ':';\n      position: absolute;\n      right: 3px;\n      top: 0; }\n\n.readOnlyInfo .value {\n    color: black;\n    display: inline-block;\n    width: 63%;\n    padding-left: 12px; }\n\n.searchResult {\n  margin-bottom: 0; }\n\n.searchResult li {\n    margin-top: 6px;\n    list-style: none;\n    cursor: pointer;\n    color: #00B233;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/components/floating-input/floating-input/floating-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FloatingInputComponent = /** @class */ (function () {
    function FloatingInputComponent(apiService) {
        this.apiService = apiService;
        this.baseForm = null;
        console.log('floatingInputComponentConstructor');
    }
    FloatingInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            // $('.datetimepicker').datetimepicker();
        });
        if (this.baseForm) {
            this.baseForm.changeListener.subscribe((function (model) {
                // this.parentForm.tes.setDirty()
                if (_this.baseForm.inputType == __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].number) {
                    console.log('listenerNumber val:', model.value, 'baseform: ', _this.baseForm);
                    if (_this.baseForm.rules.max < Number(model.value)) {
                        // console.log('listenerNumber catch error max', this.rowBaseForms.rules.max, Number(model.value ))
                        if (_this.parentForm) {
                            _this.parentForm.getControl(_this.finalModel).setErrors(['max']);
                        }
                    }
                    if (_this.baseForm.rules.min > Number(model.value)) {
                        if (_this.parentForm) {
                            _this.parentForm.getControl(_this.finalModel).setErrors(['min']);
                        }
                    }
                }
            }));
            switch (this.baseForm.inputType) {
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].text:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].autocomplete:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].password:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].email:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].file:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].number:
                    this.finalModel = this.ionInputModel;
                    this.allowedBroadcast = 'ioninput';
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].select:
                    this.finalModel = this.ionSelectModel;
                    this.allowedBroadcast = 'ionselect';
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].date:
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].datetime:
                    this.finalModel = this.ionInputModel;
                    this.allowedBroadcast = 'iondatetime';
                    // this.inputType = InputType.text;
                    // $('#floatingInputText').datetimepicker({
                    //     format: 'LT'
                    // });
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].textarea:
                    this.finalModel = this.ionTextareaModel;
                    this.allowedBroadcast = 'iontextarea';
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].radio:
                    this.finalModel = this.ionRadioModel;
                    this.allowedBroadcast = 'ionradio';
                    break;
            }
            if (this.parentForm) {
                this.parentForm.addControl(this.finalModel);
            }
            this.inputType = __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */][this.baseForm.inputType];
            this.labelType = __WEBPACK_IMPORTED_MODULE_1__BaseForm__["c" /* LabelType */][this.baseForm.labelType];
        }
    };
    FloatingInputComponent.prototype.autoCompleteSelected = function (keyValue) {
        this.baseForm.autoCompleteOption.selected = keyValue;
        this.baseForm.autoCompleteOption.searchValue = this.baseForm.autoCompleteOption.selected.key;
        this.baseForm.value = keyValue.value;
        this.broadcast('ioninput');
    };
    FloatingInputComponent.prototype.cancelAutoComplete = function () {
        var _this = this;
        setTimeout(function () {
            _this.baseForm.autoCompleteOption.searchValue = _this.baseForm.autoCompleteOption.selected.key;
            _this.baseForm.autoCompleteOption.apiList = null;
        }, 250);
    };
    FloatingInputComponent.prototype.apiExecuteAutoComplete = function (autoCompleteInput) {
        var _this = this;
        console.log('apiExecuteAutoComplete', this.baseForm);
        var value = this.baseForm.autoCompleteOption.searchValue;
        if (value == '') {
            return;
        }
        this.baseForm.autoCompleteOption.config.params['keyword'] = value;
        if (new Date().getTime() - this.baseForm.autoCompleteOption.lastRequest.getTime() > 150) {
            this.baseForm.autoCompleteOption.lastRequest = new Date();
            this.apiService.multiDimensionalPost(this.baseForm.autoCompleteOption.config, function (response) {
                console.log('keyValueSearch', response);
                _this.baseForm.autoCompleteOption.apiList = response;
            });
        }
    };
    //
    FloatingInputComponent.prototype.ngAfterContentInit = function () {
        // this.rowBaseForms.isHidden = false;
    };
    FloatingInputComponent.prototype.debug = function () {
        console.log('debug');
    };
    FloatingInputComponent.prototype.onFieldClicked = function (model) {
        console.log('onFieldClicked');
        if (this.baseForm.isSearchBar) {
            // var param:SearchBarParam = {
            //     rowBaseForms: this.rowBaseForms
            // }
            // console.log('onFieldClicked');
            // this.navController.push(SearchBarPage, param)
        }
        if (this.baseForm.inputType == __WEBPACK_IMPORTED_MODULE_1__BaseForm__["b" /* InputType */].date) {
            // this.showCalendar();
            // this.showCalendarPage();
        }
        this.baseForm.inputClickListener.next(model);
    };
    FloatingInputComponent.prototype.broadcast = function (origin, event) {
        // console.log('broadcastION',origin,this.allowedBroadcast,this.rowBaseForms.name ,this.rowBaseForms.value);
        if (origin == this.allowedBroadcast) {
            this.baseForm.broadcastIonChange(origin, event);
            console.log('broadcast', this.baseForm, event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__BaseForm__["a" /* BaseForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__BaseForm__["a" /* BaseForm */]) === "function" && _a || Object)
    ], FloatingInputComponent.prototype, "baseForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
    ], FloatingInputComponent.prototype, "parentForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('ionInputModel'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _c || Object)
    ], FloatingInputComponent.prototype, "ionInputModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('ionSelectModel'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _d || Object)
    ], FloatingInputComponent.prototype, "ionSelectModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('ionDateModel'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _e || Object)
    ], FloatingInputComponent.prototype, "ionDateModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('ionTextareaModel'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _f || Object)
    ], FloatingInputComponent.prototype, "ionTextareaModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileModel'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _g || Object)
    ], FloatingInputComponent.prototype, "fileModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('ionRadioModel'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgModel */]) === "function" && _h || Object)
    ], FloatingInputComponent.prototype, "ionRadioModel", void 0);
    FloatingInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-floating-input',
            template: __webpack_require__("./src/app/components/floating-input/floating-input/floating-input.component.html"),
            styles: [__webpack_require__("./src/app/components/floating-input/floating-input/floating-input.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */]) === "function" && _j || Object])
    ], FloatingInputComponent);
    return FloatingInputComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=floating-input.component.js.map

/***/ }),

/***/ "./src/app/components/floating-input/form-error-message/form-error-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormErrorMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FormErrorMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FormErrorMessageComponent = /** @class */ (function () {
    function FormErrorMessageComponent() {
        var _this = this;
        this.errorMessages = {
            required: function (param) { return _this.baseForm.label + " cannot be empty"; },
            minlength: function (param) { return _this.baseForm.label + " require " + param.requiredLength + " characters. (" + _this.baseForm.value.length + "/" + param.requiredLength + ")"; },
            maxlength: function (param) { return _this.baseForm.label + " exceed maximum characters"; },
            pattern: function (param) { return _this.baseForm.label + " " + (_this.baseForm.rules.patternInformation || 'not satisfy input requirement'); },
            max: function () { return _this.baseForm.label + " exceed limited value (" + _this.baseForm.rules.max + ")"; },
            min: function () { return _this.baseForm.label + " must greater than minimum value (" + _this.baseForm.rules.min + ")"; },
        };
    }
    FormErrorMessageComponent.prototype.getErrorMessages = function () {
        var errors = [];
        for (var key in this.model.errors) {
            var message = "";
            if (!isNaN(Number(key))) {
                message = this.errorMessages[this.model.errors[key]]();
            }
            else {
                message = this.errorMessages[key](this.model.errors[key]);
            }
            errors.push(message);
        }
        return errors;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('model'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */]) === "function" && _a || Object)
    ], FormErrorMessageComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('baseForm'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__BaseForm__["a" /* BaseForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__BaseForm__["a" /* BaseForm */]) === "function" && _b || Object)
    ], FormErrorMessageComponent.prototype, "baseForm", void 0);
    FormErrorMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'form-error-message',
            template: "<p style=\"   margin: 0; color:tomato;\" class=\"error-message\" *ngFor=\"let message of getErrorMessages()\">{{message}}</p>"
        }),
        __metadata("design:paramtypes", [])
    ], FormErrorMessageComponent);
    return FormErrorMessageComponent;
    var _a, _b;
}());

//# sourceMappingURL=form-error-message.component.js.map

/***/ }),

/***/ "./src/app/components/floating-input/row-floating-input/row-floating-input.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"rowBaseForms\">\n\n\n<div *ngFor=\"let currentRowBaseForms of this.rowBaseForms\" class=\"row\">\n\n\n    <span *ngIf=\"currentRowBaseForms\">\n        <div style=\"padding-top: 0!important; padding-bottom: 5 !important;\" *ngFor=\"let currentBaseForm of currentRowBaseForms.baseForms\" [class]=\"currentBaseForm.classDisplay + ' colContainer'\">\n            <app-floating-input [parentForm]=\"parentForm\" [baseForm]=\"currentBaseForm\"></app-floating-input>\n        </div>\n\n    </span>\n\n    <!--<app-floating-input  *ngFor=\"let rowBaseForms of currentRowBaseForms.baseForms\"  [parentForm]=\"parentForm\" [rowBaseForms]=\"rowBaseForms\"></app-floating-input>-->\n\n</div>\n\n\n\n</span>\n\n"

/***/ }),

/***/ "./src/app/components/floating-input/row-floating-input/row-floating-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/floating-input/row-floating-input/row-floating-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowFloatingInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RowFloatingInputComponent = /** @class */ (function () {
    function RowFloatingInputComponent() {
    }
    RowFloatingInputComponent.prototype.ngOnInit = function () {
        console.log('rowFLoating', this.rowBaseForms);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('rowBaseForms'),
        __metadata("design:type", Array)
    ], RowFloatingInputComponent.prototype, "rowBaseForms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('parentForm'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
    ], RowFloatingInputComponent.prototype, "parentForm", void 0);
    RowFloatingInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-row-floating-input',
            template: __webpack_require__("./src/app/components/floating-input/row-floating-input/row-floating-input.component.html"),
            styles: [__webpack_require__("./src/app/components/floating-input/row-floating-input/row-floating-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RowFloatingInputComponent);
    return RowFloatingInputComponent;
    var _a;
}());

//# sourceMappingURL=row-floating-input.component.js.map

/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <!--<nav class=\"pull-left\">-->\n            <!--<ul>-->\n                <!--<li>-->\n                    <!--<a href=\"#\">-->\n                        <!--Home-->\n                    <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                    <!--<a href=\"#\">-->\n                        <!--Company-->\n                    <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                    <!--<a href=\"#\">-->\n                        <!--Portfolio-->\n                    <!--</a>-->\n                <!--</li>-->\n                <!--<li>-->\n                    <!--<a href=\"#\">-->\n                       <!--Blog-->\n                    <!--</a>-->\n                <!--</li>-->\n            <!--</ul>-->\n        <!--</nav>-->\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.tulang-elisa.org\">Gereja Bukit Zaitun</a>, for sunday school\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/key-value/key-value/key-value.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n\n\n\n<div style=\"margin-bottom: 16px;\" class=\"row\" *ngFor=\"let currentContainerKeyValue of containerKeyValues\">\n  <div  [class]=\"currentContainerKeyValue.classDisplay || 'col-xs-12'\">\n\n    <div *ngIf=\"currentContainerKeyValue\">\n      <div class=\"sectionTitle\" (click)=\"currentContainerKeyValue.isOpen = !currentContainerKeyValue.isOpen\">\n        <h4>{{currentContainerKeyValue.title | ucWord}}</h4>\n      </div>\n\n      <div *ngIf=\"currentContainerKeyValue.isOpen \" class=\"keyValueContainer animationExpandBottom clearfix\" >\n        <div  *ngFor=\"let keyValue of currentContainerKeyValue.keyValues\" style=\"min-height: 100%;\">\n          <p class=\"key\" [innerHtml]=\"keyValue.key | keepAsHtml\"></p>\n          <p class=\"value\" [innerHtml]=\"keyValue.value | keepAsHtml\"></p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/key-value/key-value/key-value.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  display: inline-block;\n  margin-bottom: 12px; }\n\n.keyValueContainer {\n  padding: 16px;\n  background: #f0f0f0; }\n\n.key {\n  width: 120px;\n  position: relative;\n  white-space: normal;\n  text-overflow: clip;\n  overflow: hidden;\n  vertical-align: middle; }\n\n.key:after {\n    content: \":\";\n    position: absolute;\n    right: -10px; }\n\n.value {\n  white-space: normal;\n  text-overflow: clip;\n  overflow: hidden;\n  margin-left: 24px;\n  vertical-align: middle; }\n\n.sectionTitle {\n  padding: 12px;\n  background: #ddd;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/components/key-value/key-value/key-value.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyValueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyValueComponent = /** @class */ (function () {
    function KeyValueComponent(helperService) {
        this.helperService = helperService;
    }
    KeyValueComponent.prototype.ngOnInit = function () {
        // console.log(this.containerKeyValues);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('containerKeyValues'),
        __metadata("design:type", Array)
    ], KeyValueComponent.prototype, "containerKeyValues", void 0);
    KeyValueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-key-value',
            template: __webpack_require__("./src/app/components/key-value/key-value/key-value.component.html"),
            styles: [__webpack_require__("./src/app/components/key-value/key-value/key-value.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */]) === "function" && _a || Object])
    ], KeyValueComponent);
    return KeyValueComponent;
    var _a;
}());

//# sourceMappingURL=key-value.component.js.map

/***/ }),

/***/ "./src/app/components/my-modal/my-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<button style=\"visibility:hidden\" type=\"button\" class=\"btn btn-danger closeModal\" data-dismiss=\"modal\">Close</button>\n\n\n<div id=\"modal\" class=\"modal fade myModal\" role=\"dialog\" >\n  <div class=\"modal-dialog\" *ngIf=\"this.modalData\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4  class=\"modal-title\" ><span [innerHtml]=\"modalData.title | keepAsHtml\"></span></h4>\n        <p  class=\"modal-title\" *ngIf=\"modalData.subTitle\" ><span [innerHtml]=\"modalData.subTitle | keepAsHtml\"></span></p>\n      </div>\n      <form #parentForm=\"ngForm\">\n        <div class=\"modal-body\">\n          <app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"modalData.baseForms\"></app-row-floating-input>\n        </div>\n        <div class=\"modal-footer\">\n          <button *ngFor=\"let button of modalData.buttons\" type=\"button\"  [class]=\"button.class\"  (click)=\"button.onClick(parentForm)\">{{button.text}}</button>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/my-modal/my-modal.component.scss":
/***/ (function(module, exports) {

module.exports = "#modal {\n  z-index: 999999; }\n"

/***/ }),

/***/ "./src/app/components/my-modal/my-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyModalComponent = /** @class */ (function () {
    function MyModalComponent(helperService) {
        this.helperService = helperService;
    }
    MyModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('modalData'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["ModalInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["ModalInterface"]) === "function" && _a || Object)
    ], MyModalComponent.prototype, "modalData", void 0);
    MyModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-my-modal',
            template: __webpack_require__("./src/app/components/my-modal/my-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/my-modal/my-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object])
    ], MyModalComponent);
    return MyModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=my-modal.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!--<li>-->\n                    <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                        <!--<i class=\"material-icons\">dashboard</i>-->\n                        <!--<p class=\"hidden-lg hidden-md\">Dashboard</p>-->\n                    <!--</a>-->\n                <!--</li>-->\n                <!--<li class=\"dropdown\">-->\n                    <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                        <!--<i class=\"material-icons\">notifications</i>-->\n                        <!--<span class=\"notification\">5</span>-->\n                        <!--<p class=\"hidden-lg hidden-md\">Notifications</p>-->\n                    <!--</a>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                        <!--<li><a href=\"#\">Mike John responded to your email</a></li>-->\n                        <!--<li><a href=\"#\">You have 5 new tasks</a></li>-->\n                        <!--<li><a href=\"#\">You're now friend with Andrew</a></li>-->\n                        <!--<li><a href=\"#\">Another Notification</a></li>-->\n                        <!--<li><a href=\"#\">Another One</a></li>-->\n                    <!--</ul>-->\n                <!--</li>-->\n                <li class=\"dropdown\">\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n\n                        <ul class=\"dropdown-menu\">\n                            <li (click)=\"this.userService.logout()\">Logout</li>\n\n                        </ul>\n                    </a>\n                </li>\n            </ul>\n\n            <!--<form class=\"navbar-form navbar-right\" role=\"search\">-->\n                <!--<div class=\"form-group form-black is-empty\">-->\n                    <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\n                    <!--<span class=\"material-input\"></span>-->\n                <!--</div>-->\n                <!--<button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">-->\n                    <!--<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>-->\n                <!--</button>-->\n            <!--</form>-->\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, userService) {
        this.element = element;
        this.userService = userService;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.setMenu = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/pagination/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation\" *ngIf=\"paginationLogic\">\r\n  <ul class=\"pagination\">\r\n    <li (click)=\"getList(paginationLogic.current -1 )\" *ngIf=\"paginationLogic.current > 1\">\r\n      <a href=\"javascript:void(0)\"  aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li [ngClass]=\"{active:i == paginationLogic.current}\" *ngFor=\"let i of paginationLogic.range\" (click)=\"getList(i)\"><a href=\"javascript:void(0)\">{{i}}</a></li>\r\n\r\n\r\n    <li *ngIf=\"paginationLogic.current != paginationLogic.end && paginationLogic.end != 0\"  (click)=\"getList(paginationLogic.current + 1 )\">\r\n      <a href=\"javascript:void(0)\"  aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/pagination/pagination/pagination.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagination/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    Object.defineProperty(PaginationComponent.prototype, "setPagination", {
        set: function (pagination) {
            this.pagination = pagination;
            this.setPaginationLogic();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
        this.setPaginationLogic();
    };
    PaginationComponent.prototype.setPaginationLogic = function () {
        /*
           * totalData	: data dari table
           * fetch		: data per page
           * threshold	: deretan pagination
           * last			: pagination terakhir
           *
           * start	: terawal dari current
           * end		: terjuh dari pagination
           *
           *
           */
        var totalData = this.pagination.total;
        var perPage = this.pagination.per_page;
        var threshold = 3;
        var last = Math.ceil(totalData / perPage);
        var current = this.pagination.current_page;
        var start = (current - threshold >= threshold ? current - threshold : 1);
        var end = (current + threshold >= last ? last : current + threshold);
        var range = [];
        for (var i = start; i <= end; i++) {
            range.push(i);
        }
        this.paginationLogic = {
            current: current,
            start: start,
            end: end,
            range: range,
        };
        console.log('paginationLogic', this.paginationLogic);
    };
    PaginationComponent.prototype.getList = function (target) {
        this.filter.page = target;
        console.log(this.filter);
        if (this.onClick) {
            this.onClick();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('filter'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["c" /* FilterInterface */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["c" /* FilterInterface */]) === "function" && _a || Object)
    ], PaginationComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('onClick'),
        __metadata("design:type", Function)
    ], PaginationComponent.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('pagination'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["ApiPaginationResponseInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["ApiPaginationResponseInterface"]) === "function" && _b || Object),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["ApiPaginationResponseInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["ApiPaginationResponseInterface"]) === "function" && _c || Object])
    ], PaginationComponent.prototype, "setPagination", null);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/components/pagination/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/pagination/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a [routerLink]=\"['/profile',{id:userService.userData.id}]\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"./assets/img/angular2-logo-red.png\"/>\n        </div>\n\n            {{userService.userData.name | isLoggedIn}}\n\n\n        <br/>\n        <span style=\"text-align: center;display:block;color:tomato;font-size: 14px;\">\n                        {{userService.userData.get_previledge.value | isLoggedIn}}\n\n        </span>\n\n\n    </a>\n\n\n</div>\n\n\n\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <!--<li>-->\n            <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                <!--<i class=\"material-icons\">dashboard</i>-->\n                <!--<p class=\"hidden-lg hidden-md\">Dashboard</p>-->\n            <!--</a>-->\n        <!--</li>-->\n        <!--<li class=\"dropdown\">-->\n            <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                <!--<i class=\"material-icons\">notifications</i>-->\n                <!--<span class=\"notification\">5</span>-->\n                <!--<p class=\"hidden-lg hidden-md\">Notifications</p>-->\n            <!--</a>-->\n            <!--<ul class=\"dropdown-menu\">-->\n                <!--<li><a href=\"#\">Mike John responded to your email</a></li>-->\n                <!--<li><a href=\"#\">You have 5 new tasks</a></li>-->\n                <!--<li><a href=\"#\">You're now friend with Andrew</a></li>-->\n                <!--<li><a href=\"#\">Another Notification</a></li>-->\n                <!--<li><a href=\"#\">Another One</a></li>-->\n            <!--</ul>-->\n        <!--</li>-->\n        <!--<li>-->\n            <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n               <!--<i class=\"material-icons\">person</i>-->\n               <!--<p class=\"hidden-lg hidden-md\">Profile</p>-->\n            <!--</a>-->\n        <!--</li>-->\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of sideMenu\" class=\"{{menuItem.class}}\" data-toggle=\"collapse\">\n                <a  [routerLink]=\"[menuItem.path,menuItem.param]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}} <span class='badge' style=\"background-color: tomato\" *ngIf=\"menuItem.badge && userService.notification && +userService.notification.data[menuItem.badge] > 0 \">{{userService.notification.data[menuItem.badge]}}</span></p>\n                </a>\n            </li>\n\n            <li style=\"cursor:pointer;\"  routerLinkActive=\"active\" (click)=\"userService.logout(true)\" >\n                <a>\n                    <i class=\"material-icons\">remove_circle_outline</i>\n                    <p>Logout</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '', param: {} },
    // {path: 'profile', title: 'My Profile', icon: 'person', class: '', param: {}},
    { path: 'user-list', title: 'User List', icon: 'supervisor_account', class: '', param: {} },
    { path: 'branch/list', title: 'Branch list', icon: 'home', class: '', param: {} },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService) {
        this.userService = userService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.sideMenu = ROUTES.filter(function (menuItem) { return menuItem; });
        this.sideMenu[1].param = { id: this.userService.userData.id };
        if (this.userService.userData.get_previledge.value == "master") {
            this.sideMenu.push({
                path: 'branch/configure/web', title: 'Configure Master Web', icon: 'library_books', class: '', param: { id: -1 }
            });
        }
        // if(this.userService.userData.get_previledge);
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3  col-xs-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <i class=\"material-icons\">forward</i>\n\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Murid baru </p>\n                        <h3  class=\"title\">{{top.data.activePupil}}</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            *Dalam 4 minggu terakhir\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n                <div class=\"col-lg-3  col-xs-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <i class=\"material-icons\">sync_problem</i>\n\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Murid keluar </p>\n                            <h3 class=\"title\">{{top.data.offPupil}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                *Dalam 4 minggu terakhir\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            <div class=\"col-lg-6 col-xs-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <h4    class=\"title\" style=\"display: inline-block\">Thread Forum</h4>\n\n                    </div>\n                    <div class=\"card-content table-responsive\">\n\n                        <div style=\"border-top: 1px solid #ddd\">\n                            <div class=\"thread\" *ngFor=\"let data of top.data.thread.data; let i = index;\">\n\n                                <div class=\"row\">\n\n                                    <div class=\"col-xs-12 col-md-9\">\n                                        <h2 class=\"threadTitle\" [style.fontWeight]=\"data.isAlreadyRead ? 'normal' : 'bold' \" ><a  [routerLink]=\"['/thread/detail',{id:data.id}]\">{{helperService.ucWord(data.title)}}</a></h2>\n                                        <p class='notYetRead' *ngIf=\"!data.isAlreadyRead\">Belum dibaca</p>\n                                        <p>{{data.firstReply.content}}</p>\n                                    </div>\n\n                                    <div class=\"hidden-xs col-md-3\">\n                                        <p class=\"creator\">Created By: <br/>{{data.get_creator.name}}</p>\n                                    </div>\n                                </div>\n\n\n\n\n                            </div>\n                        </div>\n\n                        <button class=\"btn btn-info pull-right \" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"this.presentModal('addThread')\" >Create new thread</button>\n\n                        <app-pagination [onClick]=\"onClickPagination\" [filter]=\"filter\" [pagination]=\"top.data.thread\" ></app-pagination>\n\n                    </div>\n                </div>\n\n                <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>-->\n            </div>\n\n\n        </div>\n    </div>\n\n\n    <!--Thread-->\n    <div class=\"container-fluid\">\n\n\n        <div class=\"row \" >\n\n\n\n        </div>\n\n\n        <!--container fluid-->\n    </div>\n\n\n\n    <!--absence-->\n    <div class=\"container-fluid\">\n\n\n        <div class=\"row\" *ngFor=\"let currentSummaryTarget of top.data.branchSummary; let isPupilIndex = index\">\n            <div class=\"col-md-12\">\n                <ul class=\"nav nav-tabs\" id=\"interest_tabs\">\n                    <!--top level tabs-->\n                    <li  [ngClass]=\"{active:i==0}\"  *ngFor=\"let currentSummary of currentSummaryTarget; let i = index\"><a  [href]=\"'#summaryContainer'+currentSummary.id + index\" data-toggle=\"tab\">{{helperService.getReadableDate(currentSummary.targetDate)}}</a></li>\n                </ul>\n\n                <div class=\"tab-content\">\n\n                    <div *ngFor=\"let currentSummary of currentSummaryTarget; let i=index ;\" [id]=\"'summaryContainer'+currentSummary.id + index\" [ngClass]=\"{active:i==0}\" class=\"card tab-pane active\">\n\n                        <div id=\"all\" class=\"tab-pane\">\n                            <div class=\"card-header\" data-background-color=\"red\">\n                                <h4 class=\"title\" style=\"display: inline-block\">Weekly Absence Report <b>{{isPupilIndex == 0 ? \"Teacher\" : \"Pupil\"}}</b></h4>\n                                <h5 >{{helperService.getReadableDate(currentSummary.targetDate)}}</h5>\n                                <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                                <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                            </div>\n\n                            <div class=\"card-content table-responsive\">\n                                <table [id]=\"'summaryTable'+currentSummary.id\" class=\"table\">\n                                    <thead class=\"text-danger\">\n                                    <tr>\n                                        <th class=\"hidden-xs visible-md\">No</th>\n                                        <th>Name</th>\n                                        <th>Total<br/>Non-Attendance<br/>(Absen)</th>\n                                        <th>Total<br/>{{isPupilIndex == 0 ? \"Teacher\" : \"Pupil\"}}</th>\n                                        <th class=\"hidden-xs visible-md\">Not yet<br/>Follow up</th>\n                                        <th class=\"hidden-xs visible-md\">Class Not Yet<br/>Submitted</th>\n                                        <th>Attendance / Kehadiran<br/>Percentage</th>\n                                        <!--<th>Action</th>-->\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr  *ngFor=\"let data of currentSummary.branches; let i = index;\">\n\n                                            <td class=\"hidden-xs visible-md\">{{i + 1}}</td>\n                                            <td><a [routerLink]=\"['/branch/detail',{id:data.id}]\">{{data.name}}</a></td>\n                                            <td>{{data.totalAbsence}}</td>\n                                            <td>{{data.totalPupil}}</td>\n                                            <td  class=\"hidden-xs visible-md\" [style.color]=\"data.notYetFollowedUp > 0 ? 'tomato' : 'black'\" >{{data.notYetFollowedUp}}</td>\n                                            <td class=\"hidden-xs visible-md\">{{data.totalNotDone}}</td>\n                                            <td>{{data.availablePercentage}}%</td>\n\n                                        </tr>\n\n\n                                    </tbody>\n                                </table>\n\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <!--tab content-->\n                </div>\n\n\n                <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>-->\n            </div>\n\n\n        </div>\n\n\n        <!--container fluid-->\n    </div>\n\n\n\n\n\n    <!--histories-->\n    <div class=\"container-fluid\" *ngIf=\"top.data.isCanHistory\">\n\n\n        <div class=\"row\" style=\"\">\n            <div class=\" col-xs-12 col-md-6\" >\n                <div class=\"card\">\n                    <div (click)=\"this.filter.isOpen = !this.filter.isOpen\" class=\"card-header\" data-background-color=\"blue\">\n                        <h4 class=\"title\">Search for {{title}}</h4>\n                        <p class=\"category\">Click here to toggle the menu</p>\n                    </div>\n                    <div *ngIf=\"this.filter.isOpen\" class=\"card-content animationExpandBottom\">\n\n                        <form #parentFilterForm = \"ngForm\">\n                            <app-row-floating-input [parentForm]=\"parentFilterForm\" [rowBaseForms]=\"this.filterForm\"></app-row-floating-input>\n                            <button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"apiExecuteGetTop()\">Search</button>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n\n\n\n\n        </div>\n\n\n\n        <div class=\"row\" >\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <h4 class=\"title\" style=\"display: inline-block\">Users Activity History</h4>\n                        <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                        <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\" style=\"width:100%;\">\n                            <thead class=\"text-danger\">\n                            <tr>\n                                <th>No</th>\n                                <th >Name</th>\n                                <th class=\"hidden-xs\">Date</th>\n                                <th>Event Type</th>\n                                <th>Description</th>\n                                <!--<th>Action</th>-->\n                            </tr>\n                            </thead>\n                            <tbody *ngIf=\"top && top.data.histories else noDataFound\">\n                            <tr *ngFor=\"let data of top.data.histories.data; let i = index;\">\n\n                                <td>{{i + 1}}</td>\n                                <td><a [routerLink]=\"['/profile',{id:data.get_user.id}]\">{{data.get_user.name}}</a></td>\n                                <td class=\"hidden-xs\">{{helperService.getReadableDate(data.created_at)}}</td>\n                                <td>{{data.get_event.key}}</td>\n                                <td>{{data.description}}</td>\n\n                            </tr>\n\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n\n                <app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.histories\"></app-pagination>\n            </div>\n\n\n        </div>\n\n\n    <!--container fluid-->\n    </div>\n\n\n\n\n\n</div>\n\n\n<app-my-modal [modalData]=\"this.modalData\" ></app-my-modal>\n\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".thread {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #ddd; }\n  .thread .threadTitle {\n    margin: 0 !important; }\n  .thread .threadTitle a {\n      color: #444;\n      font-size: 16px; }\n  .thread .creator {\n    text-align: right;\n    color: #999; }\n  .thread .lastReply {\n    text-align: right;\n    color: #999; }\n  .thread .notYetRead {\n    background: linear-gradient(60deg, #ef5350, #e53935);\n    font-weight: bold;\n    display: inline-block;\n    color: white;\n    border-radius: 4px;\n    padding: 4px; }\n  .dataTable {\n  width: 100% !important;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, apiService, helperService) {
        var _this = this;
        this.userService = userService;
        this.apiService = apiService;
        this.helperService = helperService;
        this.param = {};
        this.filter = new __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["c" /* FilterInterface */]();
        this.filterForm = [];
        this.onClickPagination = function () {
            _this.apiExecuteGetTop(function () {
            });
        };
        this.initTop();
    }
    DashboardComponent.prototype.download = function (data) {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true,
            headers: ["First Name", "Last Name", "ID"]
        };
        // new Angular5Csv(data.data, "Laporan tanggal "+ this.helperService.getReadableDate(new Date(data.latestAbsenceDate.targetDate)), options );
    };
    DashboardComponent.prototype.initTop = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupFilterForm();
            _this.top.data.branchSummary.forEach(function (currentPupilSelector) {
                currentPupilSelector.forEach(function (current) {
                    var title = "Absence Report " + _this.helperService.getReadableDate(new Date(current.targetDate));
                    setTimeout(function () {
                        $(document).ready(function () {
                            $("#summaryTable" + current.id).DataTable({
                                dom: 'Bfrtip',
                                paging: false,
                                buttons: [
                                    {
                                        extend: 'excel',
                                        title: title,
                                    },
                                    {
                                        extend: 'print',
                                        title: title,
                                    }
                                ],
                                title: title,
                            });
                        });
                    }, 500);
                });
            });
        });
    };
    DashboardComponent.prototype.setupFilterForm = function () {
        var _this = this;
        this.filterForm = [];
        var cmbEventType = new __WEBPACK_IMPORTED_MODULE_5__components_floating_input_BaseForm__["a" /* BaseForm */]('Event type', 'cmbEventType');
        cmbEventType.setInputTypeSelect(this.top.data.filter.cmbEventType);
        cmbEventType.value = this.filter.cmbEventType;
        cmbEventType.setIsRequired(false);
        cmbEventType.changeListener.subscribe(function (baseForm) {
            _this.filter.cmbEventType = baseForm.value;
        });
        this.filterForm.push({
            baseForms: [cmbEventType]
        });
    };
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    DashboardComponent.prototype.presentModal = function (type, data) {
        if (type == 'addThread') {
            this.setupThreadForm();
        }
    };
    DashboardComponent.prototype.setupThreadForm = function () {
        var _this = this;
        var title = new __WEBPACK_IMPORTED_MODULE_5__components_floating_input_BaseForm__["a" /* BaseForm */]('title', 'title');
        title.rules.minlength = 20;
        title.rules.maxlength = 70;
        var message = new __WEBPACK_IMPORTED_MODULE_5__components_floating_input_BaseForm__["a" /* BaseForm */]('message', 'content');
        message.rules.minlength = 50;
        message.setInputTypeTextarea();
        this.modalData = {
            title: 'Create new thread',
            baseForms: [{ baseForms: [title, message] }],
            subTitle: 'Thread bertujuan untuk sharing pertanyaan atau diskusi agar seluruh guru SM Bukit Zaitun dapat berdiskusi',
            buttons: [
                {
                    text: 'Submit',
                    class: 'btn btn-success',
                    onClick: function (parentForm) {
                        _this.apiExecuteAddThread(parentForm);
                    }
                }
            ]
        };
    };
    DashboardComponent.prototype.apiExecuteAddThread = function (form) {
        var _this = this;
        console.log(form.value);
        if (form.valid) {
            var params = {
                cmd: 'addThread'
            };
            params = this.helperService.mergeObject(form.value, params);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    var url = __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'thread/op';
                    var config = {
                        url: url,
                        params: params,
                    };
                    _this.apiService.post(config, function (data) {
                        if (data.isSuccess) {
                            _this.helperService.closeModal();
                            _this.initTop();
                        }
                    });
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    DashboardComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var params = this.helperService.mergeObject({}, this.filter);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "app/top",
            params: params,
        };
        this.apiService.get(config, function (data) {
            console.log('top', data);
            _this.top = data;
            onFinish();
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/directive/autofocus/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.focus();
        if (this.isAlways) {
            setInterval(function () {
                _this.focus();
            }, 300);
        }
    };
    AutofocusDirective.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AutofocusDirective.prototype, "isAlways", void 0);
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[appAutofocus]'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
    ], AutofocusDirective);
    return AutofocusDirective;
    var _a, _b;
}());

//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "./src/app/directive/directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_pipe_module__ = __webpack_require__("./src/app/pipe/pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uc_word_uc_word_directive__ = __webpack_require__("./src/app/directive/uc-word/uc-word.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mark_clicked_mark_clicked_directive__ = __webpack_require__("./src/app/directive/mark-clicked/mark-clicked.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__status_parsing_status_parsing_directive__ = __webpack_require__("./src/app/directive/status-parsing/status-parsing.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__autofocus_autofocus_directive__ = __webpack_require__("./src/app/directive/autofocus/autofocus.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipe_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__uc_word_uc_word_directive__["a" /* UcWordDirective */],
                __WEBPACK_IMPORTED_MODULE_6__mark_clicked_mark_clicked_directive__["a" /* MarkClickedDirective */],
                __WEBPACK_IMPORTED_MODULE_7__status_parsing_status_parsing_directive__["a" /* StatusParsingDirective */],
                __WEBPACK_IMPORTED_MODULE_8__autofocus_autofocus_directive__["a" /* AutofocusDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__uc_word_uc_word_directive__["a" /* UcWordDirective */],
                __WEBPACK_IMPORTED_MODULE_6__mark_clicked_mark_clicked_directive__["a" /* MarkClickedDirective */],
                __WEBPACK_IMPORTED_MODULE_7__status_parsing_status_parsing_directive__["a" /* StatusParsingDirective */],
                __WEBPACK_IMPORTED_MODULE_8__autofocus_autofocus_directive__["a" /* AutofocusDirective */],
            ]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());

//# sourceMappingURL=directive.module.js.map

/***/ }),

/***/ "./src/app/directive/mark-clicked/mark-clicked.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkClickedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarkClickedDirective = /** @class */ (function () {
    function MarkClickedDirective(elementRef) {
        this.elementRef = elementRef;
        this.isDone = true;
        this.color = 'black';
        this.fontWeight = 'normal';
    }
    MarkClickedDirective.prototype.onClick = function () {
        var _this = this;
        if (!this.isDone) {
            return;
        }
        this.isDone = false;
        var colorOrigin = this.color;
        // this.color = 'tomato';
        setTimeout(function () {
            _this.isDone = true;
            // this.color = colorOrigin;
        }, 1500);
    };
    MarkClickedDirective.prototype.ngAfterViewInit = function () {
        this.color = this.elementRef.nativeElement.style.color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.color'),
        __metadata("design:type", String)
    ], MarkClickedDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.fontWeight'),
        __metadata("design:type", String)
    ], MarkClickedDirective.prototype, "fontWeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarkClickedDirective.prototype, "onClick", null);
    MarkClickedDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[appMarkClicked]',
            host: {
                class: 'transitionAny',
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], MarkClickedDirective);
    return MarkClickedDirective;
    var _a;
}());

//# sourceMappingURL=mark-clicked.directive.js.map

/***/ }),

/***/ "./src/app/directive/status-parsing/status-parsing.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusParsingDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusParsingDirective = /** @class */ (function () {
    function StatusParsingDirective(elementRef) {
        this.elementRef = elementRef;
        this.color = '#222222';
        this.colorTarget = {
            tomato: [{
                    alias: 'pa',
                    realName: 'Pending Approval'
                }],
            green: ['approved'],
        };
        // this.elementRef.nativeElement.textContent
    }
    StatusParsingDirective.prototype.ngOnInit = function () {
        for (var key in this.colorTarget) {
            var value = this.colorTarget[key];
            // this.eleme
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.color'),
        __metadata("design:type", Object)
    ], StatusParsingDirective.prototype, "color", void 0);
    StatusParsingDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[appStatusParsing]'
        })
        /**
         * DONT USE THIS.. USE SERVER VALUE
         */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], StatusParsingDirective);
    return StatusParsingDirective;
    var _a;
}());

//# sourceMappingURL=status-parsing.directive.js.map

/***/ }),

/***/ "./src/app/directive/uc-word/uc-word.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWordDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UcWordDirective = /** @class */ (function () {
    /**
     * CAREFUL IT IS NOT WORKING DONT USE THIS
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} changeDetector
     */
    function UcWordDirective(elementRef, changeDetector) {
        this.elementRef = elementRef;
        this.changeDetector = changeDetector;
    }
    UcWordDirective.prototype.ngOnInit = function () {
        // console.log('halo');
    };
    UcWordDirective.prototype.ngAfterViewInit = function () {
        // this.elementRef.nativeElement.innerHTML = MyHelper.ucWord(this.elementRef.nativeElement.innerHTML);
    };
    UcWordDirective.prototype.ngOnChanges = function () {
        // this.elementRef.nativeElement.innerHTML = MyHelper.ucWord(this.elementRef.nativeElement.innerHTML);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UcWordDirective.prototype, "ngOnChanges", null);
    UcWordDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[appUcWord]',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
    ], UcWordDirective);
    return UcWordDirective;
    var _a, _b;
}());

//# sourceMappingURL=uc-word.directive.js.map

/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Design Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe>\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "./src/app/page/absence-barcode/absence-barcode.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-content \">\n  <form #parentForm=\"ngForm\" (submit)=\"this.login(parentForm)\">\n\n    <div class=\"row  \" style=\"margin-top: 30px\">\n\n\n        <h3 style=\"text-align: center; margin-bottom: 20px;\" *ngIf=\"top && top.data.latestDate\" >{{top.data.latestDate.targetDate | date:'EEEE, dd MMMM yyyy'}}</h3>\n\n      <div class=\"col-xs-12 col-md-offset-4  col-md-4 \">\n        <img class=\"center-block\" src=\"assets/image/login/barcode.png\" />\n        <div class=\"form-group form-black is-empty\" style=\"margin-top: 20px\">\n          <label class=\"control-label\">NBG</label>\n          <input [(ngModel)]=\"nbg\" type=\"text\" class=\"form-control\" name=\"nbg\" appAutofocus=\"\" [isAlways]=\"true\" >\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"clearfix\"></div>\n\n      <div *ngIf=\"this.lastUser\" class=\"row userData\">\n          <div class=\"col-xs-12 text-center \">\n              <h2>{{this.lastUser.name}}</h2>\n\n              <h3>{{this.lastUser.nbg}}</h3>\n\n\n          </div>\n      </div>\n  </form>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/page/absence-barcode/absence-barcode.component.scss":
/***/ (function(module, exports) {

module.exports = ".userData {\n  color: #222222; }\n"

/***/ }),

/***/ "./src/app/page/absence-barcode/absence-barcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenceBarcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbsenceBarcodeComponent = /** @class */ (function () {
    function AbsenceBarcodeComponent(apiService, helperService, userService) {
        this.apiService = apiService;
        this.helperService = helperService;
        this.userService = userService;
        this.modalData = {
            buttons: [],
            baseForms: [],
            title: "Register user"
        };
        this.baseForm = [];
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["c" /* FilterInterface */]();
        this.title = 'Page title';
        this.filterForm = [];
        this.readableModalData = [];
        this.approvalForm = [];
        this.onClickPagination = function () {
        };
        this._nbg = "";
        this.initTop();
    }
    Object.defineProperty(AbsenceBarcodeComponent.prototype, "nbg", {
        get: function () {
            return this._nbg;
        },
        set: function (string) {
            var _this = this;
            this._nbg = string;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(function () {
                console.log('500', string);
                _this.timeoutId = null;
                _this.apiAbsenceBarcode(_this.nbg);
                _this._nbg = "";
            }, 300);
        },
        enumerable: true,
        configurable: true
    });
    AbsenceBarcodeComponent.prototype.ngOnInit = function () {
    };
    AbsenceBarcodeComponent.prototype.login = function (form) {
        var nbg = form.value.nbg;
        var password = form.value.password;
        this.userService.apiExecuteLogin(nbg, password);
    };
    AbsenceBarcodeComponent.prototype.setFilter = function () {
        this.filter.cmbSearchBy = 'page';
    };
    AbsenceBarcodeComponent.prototype.presentModal = function () {
        var title = "Register admin";
        this.modalData = {
            title: "Register user",
            baseForms: [{ baseForms: [] }],
            buttons: [],
        };
    };
    AbsenceBarcodeComponent.prototype.initTop = function () {
        this.apiExecuteGetTop(function (response) {
        });
    };
    AbsenceBarcodeComponent.prototype.apiExecuteGetTop = function (onFinished) {
        var _this = this;
        var params = {
            cmd: 'barcode',
        };
        params = this.helperService.mergeObject(params, this.filter);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'absence/barcode/top',
            toastMessage: 'User module data',
            params: params,
        };
        this.apiService.get(config, function (response) {
            if (response.isSuccess) {
                _this.top = response;
                if (onFinished) {
                    onFinished(response);
                }
            }
        });
    };
    AbsenceBarcodeComponent.prototype.apiFormSubmit = function (params, message) {
        var _this = this;
        if (message === void 0) { message = 'Submiting form'; }
        console.log('apiFormSubmit', params);
        this.helperService.presentConfirmation({}, function (isConfirmed) {
            if (isConfirmed) {
                var config = {
                    url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/op',
                    params: params,
                    toastMessage: 'Submitting form',
                };
                _this.apiService.post(config, function (data) {
                    console.log(data);
                    // this.apiExecuteGetTop();
                    // this.helperService.closeModal();
                    //this.helperService.presentNotification('Form is submitted');
                    // this.userService.apiExecuteGetNotification();
                });
            }
        });
    };
    AbsenceBarcodeComponent.prototype.nbgOnChange = function (nbg) {
        console.log(nbg.value);
    };
    AbsenceBarcodeComponent.prototype.apiAbsenceBarcode = function (nbg) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "absence/barcode",
            isSilent: true,
            params: {
                nbg: nbg
            },
        };
        this.apiService.post(config, function (response) {
            if (response.isSuccess && response.data.user) {
                _this.lastUser = response.data.user;
            }
        });
    };
    AbsenceBarcodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-absence-barcode',
            template: __webpack_require__("./src/app/page/absence-barcode/absence-barcode.component.html"),
            styles: [__webpack_require__("./src/app/page/absence-barcode/absence-barcode.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], AbsenceBarcodeComponent);
    return AbsenceBarcodeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=absence-barcode.component.js.map

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-content \">\n  <form #parentForm=\"ngForm\" (submit)=\"this.login(parentForm)\">\n\n    <div class=\"row  \">\n\n      <div class=\" col-xs-4 col-xs-offset-4 col-md-offset-5  col-md-2 \" style=\"margin-top: 16px;\">\n        <img src=\"assets/image/global/logo-yellow.png\" class=\"img-responsive\"/>\n      </div>\n\n\n      <div class=\" col-xs-8 col-xs-offset-2 col-md-offset-4  col-md-4 \">\n        <div class=\"form-group form-black is-empty\">\n          <label class=\"control-label\">NBG</label>\n          <input ngModel=\"\" type=\"text\" class=\"form-control\" name=\"nbg\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-xs-8 col-xs-offset-2  col-md-offset-4 col-md-4 \">\n        <div class=\"form-group form-black  is-empty\">\n          <label class=\"control-label\">Password</label>\n          <input ngModel=\"\"  type=\"password\" name=\"password\" class=\"form-control\" >\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-danger pull-right\">Login</button>\n\n        <!--<a data-target=\"#modal\" data-toggle=\"modal\" (click)=\"presentModal()\" href='javascript:void(0)' >Register</a>-->\n\n      </div>\n      <div class=\"text-justify col-xs-8 col-xs-offset-2  col-md-offset-4 col-md-4\" >\n        <p>Jika pertama kali login (atau belum pernah mengganti password), masukan password dengan format 2 huruf pertama nama depan + tanggal lahir</p>\n        <p>contoh: nama <b>ad</b>am, nbg: b0001, tanggal lahir <b>13-02-1995</b></p>\n        <p>Masuk dengan nbg b0001, password ad13021995</p>\n      </div>\n    </div>\n\n\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n\n\n\n\n\n<div id=\"modal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"this.modalData\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4  class=\"modal-title\" [innerHtml]=\"modalData.title | keepAsHtml\"></h4>\n      </div>\n      <form #parentForm=\"ngForm\">\n        <div class=\"modal-body\">\n          <!--<app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"rowBaseForms\"></app-row-floating-input>-->\n          <app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"modalData.baseForms\"></app-row-floating-input>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger closeModal\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"formSubmit(parentForm)\"  type=\"button\" class=\"btn btn-success \" >Submit</button>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12 \" style=\"text-align: center;\">\n    <a routerLink=\"/absence/barcode\">Modul absensi murid dan guru melalui barcode</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 12px; }\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, helperService, userService) {
        this.apiService = apiService;
        this.helperService = helperService;
        this.userService = userService;
        this.modalData = {
            buttons: [],
            baseForms: [],
            title: "Register user"
        };
        this.baseForm = [];
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["c" /* FilterInterface */]();
        this.title = 'Page title';
        this.filterForm = [];
        this.readableModalData = [];
        this.approvalForm = [];
        this.onClickPagination = function () {
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterContentInit = function () {
        console.log('halo');
    };
    LoginComponent.prototype.login = function (form) {
        var nbg = form.value.nbg;
        var password = form.value.password;
        this.userService.apiExecuteLogin(nbg, password);
    };
    LoginComponent.prototype.setFilter = function () {
        this.filter.cmbSearchBy = 'page';
    };
    LoginComponent.prototype.setRegisterForm = function () {
        if (!this.modalData) {
            // return;
        }
        //
        // email: string = "";
        // id: number = -1;
        // name: string = "";
        // reset: number =-1;
        // phone: string = "";
        // address:string;
        // get_previledge? : PreviledgeInterface;
        // get_photo?: PhotosDataInterface;
        var email = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Email', 'email');
        email.setInputTypeEmail();
        var password = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Password', 'password');
        password.inputType = __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["b" /* InputType */].password;
        password.classDisplay = 'col-xs-6';
        var passwordConfirmation = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Confirm Password', 'password_confirmation');
        passwordConfirmation.inputType = __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["b" /* InputType */].password;
        passwordConfirmation.classDisplay = 'col-xs-6';
        var name = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        var address = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Address', 'address');
        var nbg = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('NBG', 'nbg');
        nbg.infoBottom = "*Contoh B0001, B5099 dst";
        var phone = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Phone', 'phone');
        var birthDate = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["b" /* InputType */].date;
        var registerKey = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Register Key', 'registerKey');
        return [email, password, passwordConfirmation, name, nbg, address, phone, birthDate, registerKey];
    };
    LoginComponent.prototype.presentModal = function () {
        var title = "Register admin";
        this.modalData = {
            title: "Register user",
            baseForms: [{ baseForms: this.setRegisterForm() }],
            buttons: [],
        };
    };
    LoginComponent.prototype.formSubmit = function (form) {
        console.log('formSubmitRaw', form);
        if (form.valid) {
            var params = {
                cmd: 'registerAdmin',
            };
            params = this.helperService.mergeObject(params, form.value);
            this.apiFormSubmit(params);
        }
        else {
            // //this.helperService.presentNotification("Please check mark in red",NotificationTypeInterface.danger);
            this.helperService.presentAlert({ message: 'Please check mark in red', title: 'Form is not valid' });
        }
    };
    LoginComponent.prototype.apiFormSubmit = function (params, message) {
        var _this = this;
        if (message === void 0) { message = 'Submiting form'; }
        console.log('apiFormSubmit', params);
        this.helperService.presentConfirmation({}, function (isConfirmed) {
            if (isConfirmed) {
                var config = {
                    url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/op',
                    params: params,
                    toastMessage: 'Submitting form',
                };
                _this.apiService.post(config, function (data) {
                    console.log(data);
                    // this.apiExecuteGetTop();
                    // this.helperService.closeModal();
                    //this.helperService.presentNotification('Form is submitted');
                    // this.userService.apiExecuteGetNotification();
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/page/login/login.component.html"),
            styles: [__webpack_require__("./src/app/page/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/page/module/absence/absence-list/absence-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"top\">\n  <div class=\"container-fluid\" *ngIf=\"this.top.isSuccess else notSucceed\">\n    <div class=\"row\" >\n\n\n\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"content\">\n            <h4 class=\"card-title\">{{top.data.branch.name}}</h4>\n            <p class=\"card-content\" style=\"color: tomato;\">\n              Absensi\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div [ngClass]=\"{'col-md-offset-4':pupilSelector == 1}\" class=\"col-md-8 col-12\" *ngFor=\"let pupilSelector of [0,1]\">\n        <div class=\"card\" >\n          <div class=\"card-header\" data-background-color=\"blue\">\n            <h4 class=\"title\">Record absensi <b>{{pupilSelector == 0 ? \"GURU\" : \"MURID\"}}</b></h4>\n            <p class=\"category\">Data 4 minggu terakhir</p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <table class=\"table\">\n              <thead class=\"text-danger\">\n              <tr>\n                <th>Tanggal</th>\n                <th>Absen /<br>Tidak hadir</th>\n                <th>Total<br/>{{pupilSelector == 0 ? \"GURU\" : \"MURID\"}}<br/>terabsensi</th>\n                <th>Belum<br/>Follow Up</th>\n                <th>Presentase<br/>Kehadiran</th>\n                <th>Kelas <br/>Belum terisi</th>\n                <th>Action</th>\n\n              </tr>\n              </thead>\n              <tbody >\n              <tr *ngFor=\"let data of this.top.data.absenceDateRecords[pupilSelector]; let i = index\"  data-toggle=\"modal\" data-target=\"#absenceDateModal\" >\n                <td>{{helperService.getReadableDate(data.targetDate)}}</td>\n                <td>{{data.totalAbsence}}</td>\n                <td>{{data.totalPupil}}</td>\n                <td> <span [style.color]=\"data.notYetFollowedUp > 0 ? 'tomato' : 'black'\">{{data.notYetFollowedUp}}</span></td>\n                <td>{{(data.totalPupil-data.totalAbsence)/data.totalPupil * 100}}%</td>\n                <td>{{data.notYetDone}}</td>\n                <td><button class=\"btn btn-info\" (click)=\"presentModal('viewDetail', data)\">Detail</button></td>\n              </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n      </div>\n\n\n      <!--row-->\n    </div>\n\n\n\n    <!--Absensi Not Done-->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.branch\">\n\n        <!--loop for is pupil table-->\n      <div class=\"col-xs-12 col-md-12\" *ngFor=\"let currentAbsenceFor of [0,1]\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n              <h4 class=\"title\" style=\"display: inline-block\">Absensi <b>{{currentAbsenceFor == 0 ? \"Guru\" : \"Murid\"}}</b> belum terisi</h4>\n            <!--<p class=\"category\"></p>-->\n          </div>\n\n\n\n\n          <div class=\"card-content table-responsive notYetDone\" *ngIf=\"this.top.data.absenceDatesNotDone.length > 0 else noDataFound\">\n            <table class=\"table\">\n              <thead class=\"text-danger\">\n              <tr>\n                <th>No</th>\n                <th>Tanggal</th>\n                <th>Kelas</th>\n\n              </tr>\n              </thead>\n              <tbody >\n              <tr appMarkClicked=\"\" *ngFor=\"let data of this.top.data.absenceDatesNotDone; let i = index\" >\n\n                  <td>{{i + 1}}</td>\n                  <td>{{helperService.getReadableDate(data.targetDate)}}</td>\n                  <!--<td>{{data.get_user.phone}}</td>-->\n                  <td>\n                    <ul class=\"notYetDone\">\n                      <span *ngFor=\"let absenceBranch of data.get_absence_branches\" >\n\n                          <!--if not target is pupil then hide, -->\n                        <li *ngIf=\"currentAbsenceFor === absenceBranch.isPupil\"data-target=\"#modal\" data-toggle=\"modal\" (click)=\"presentModal('absence', absenceBranch)\">\n\n                          {{absenceBranch.get_select_class.key}}\n                        </li>\n\n\n                      </span>\n\n                    </ul>\n                  </td>\n\n\n\n              </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n\n        <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n      </div>\n\n\n\n\n\n\n      <!--row-->\n    </div>\n\n\n\n\n\n\n\n    <!--containerfluid-->\n  </div>\n\n\n  <!--mainContent-->\n</div>\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n\n\n\n\n\n<div id=\"absenceDateModal\" class=\"modal fade myModal\" role=\"dialog\" >\n  <div class=\"modal-dialog\" *ngIf=\"this.absenceDateModalData\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4  class=\"modal-title\" >Absence Record for {{helperService.getReadableDate(absenceDateModalData.targetDate)}}</h4>\n      </div>\n        <div class=\"modal-body\">\n\n          <table class=\"table table-stripped\">\n            <thead>\n              <th>Class</th>\n              <th class=\"hidden-sm visible-md\" >Absence<br/>Commiter</th>\n              <th>Murid Absen</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let absenceBranch of absenceDateModalData.get_absence_branches\">\n                <td>{{absenceBranch.get_select_class.key}}</td>\n                <td class=\"hidden-sm visible-md\"><a *ngIf=\"absenceBranch && absenceBranch.get_user_commiter && absenceBranch.get_user_commiter.id\" (click)='helperService.closeModal()' [routerLink]=\"['/profile',{id: absenceBranch.get_user_commiter.id}]\">{{absenceBranch.get_user_commiter.name}}</a></td>\n                <td>\n                  <ol style=\"padding-left: 0;\">\n                    <li *ngFor=\"let userAbsenceRecord of absenceBranch.get_user_absence_record\">\n                      <a (click)='helperService.closeModal()' [routerLink]=\"['/profile',{id: userAbsenceRecord.get_branch_user.get_user.id}]\">{{userAbsenceRecord.get_branch_user.get_user.name}}</a>\n                      <p *ngIf=\"userAbsenceRecord.isFollowedUp\">{{userAbsenceRecord.reason}}</p>\n                      <div *ngIf=\"!userAbsenceRecord.isFollowedUp\" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"presentModal('followUp',userAbsenceRecord)\">\n                        <b style=\"margin:0;padding-top:6px; padding-bottom: 6px;cursor:pointer;color: tomato;\" >(X)Isi hasil follow up</b>\n                      </div>\n                    </li>\n                  </ol>\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"modal-footer\">\n          <!--<button *ngFor=\"let button of modalData.buttons\" type=\"button\"  [class]=\"button.class\"  (click)=\"button.onClick(parentForm)\">{{button.text}}</button>-->\n        </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n<ng-template #loading>loading</ng-template>\n<ng-template #notSucceed>{{title}} Not Found</ng-template>\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/page/module/absence/absence-list/absence-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".notYetDone ul {\n  padding: 0; }\n\n.notYetDone li {\n  margin: 6px 12px;\n  list-style: none;\n  display: inline-block;\n  padding: 4px;\n  background: #efefef;\n  cursor: pointer;\n  border-radius: 1px; }\n"

/***/ }),

/***/ "./src/app/page/module/absence/absence-list/absence-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AbsenceListComponent = /** @class */ (function () {
    function AbsenceListComponent(changeDetectorRef, helperService, activatedRoute, apiService, userService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.userService = userService;
        this.param = {};
        this.title = 'Absence';
        this.rowBaseForms = [];
        this.formValueContainer = {};
        this.modalData = {
            title: 'Apply form',
            baseForms: [],
            buttons: [],
        };
        this.teacherActiveForms = [];
        this.teacherClassForms = [];
        this.pupilActiveForms = [];
        this.pupilClassForms = [];
        this.followUpModalData = [];
        this.activatedRoute.params.subscribe(function (data) {
            _this.param.id = data['id'];
            console.log('param', data);
            _this.topInit();
        });
    }
    AbsenceListComponent.prototype.ngOnInit = function () {
    };
    AbsenceListComponent.prototype.topInit = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupButtonLogic();
            _this.setupForm();
        });
    };
    AbsenceListComponent.prototype.setupButtonLogic = function () {
    };
    AbsenceListComponent.prototype.setupForm = function () {
        this.rowBaseForms.push({ baseForms: [] });
        this.setEditableForm();
    };
    AbsenceListComponent.prototype.setEditableForm = function () {
        // console.log('setEditable', this.isCanEditProfile, this.rowBaseForms, this.top);
        // this.rowBaseForms.forEach(rowBaseForm=>{
        //     rowBaseForm.baseForms.forEach(baseForm=>{
        //         if(!baseForm.isReadOnly){
        //             baseForm.setIsReadOnly(!this.isCanEditProfile);
        //         }
        //     })
        // })
    };
    AbsenceListComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "absence/top",
            params: { id: this.param.id, cmd: 'list' },
        };
        this.apiService.get(config, function (data) {
            console.log('top', data);
            _this.top = data;
            _this.teacherActiveForms = [];
            _this.pupilActiveForms = [];
            onFinish();
        });
    };
    AbsenceListComponent.prototype.apiExecuteSubmitForm = function (json) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: json,
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                _this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    AbsenceListComponent.prototype.presentModal = function (type, data) {
        // this.setForm();
        if (type == 'absence') {
            this.setupUserAbsence(data);
        }
        if (type == 'viewDetail') {
            console.log('data', data);
            this.absenceDateModalData = data;
        }
        if (type == 'followUp') {
            this.setupFollowUp(data);
        }
    };
    AbsenceListComponent.prototype.setupFollowUp = function (userAbsenceRecord) {
        var _this = this;
        var rowFloating = [];
        var reason = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('Reason / alasan', 'reason');
        reason.setInputTypeTextarea();
        rowFloating.push({ baseForms: [reason] });
        this.modalData = null;
        setTimeout(function () {
            _this.modalData = {
                title: "Follow up " + userAbsenceRecord.get_branch_user.get_user.name,
                baseForms: rowFloating,
                buttons: [
                    {
                        text: 'Cancel',
                        class: 'btn btn-default',
                        onClick: function (form) {
                            $('#modal').modal('hide');
                        },
                    }, {
                        text: 'Submit',
                        class: 'btn btn-success',
                        onClick: function (form) {
                            _this.apiExecuteFollowUp(form, userAbsenceRecord);
                        }
                    }
                ]
            };
        }, 300);
    };
    AbsenceListComponent.prototype.setupUserAbsence = function (absenceBranch) {
        var _this = this;
        if (!absenceBranch) {
            return;
        }
        var rowFloating = [];
        absenceBranch.get_branch.get_branch_users.forEach(function (branchUser, i) {
            var branchUserId = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('branchUserId', "branchUserId[" + i + "]");
            branchUserId.value = "" + branchUser.id;
            branchUserId.setIsHidden(true);
            var name = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('name', "name[" + i + "]");
            name.classDisplay = 'col-xs-6 ';
            name.value = branchUser.get_user.name;
            name.setIsReadOnly(true);
            var reason = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('reason / alasan', "reason[" + i + "]");
            reason.infoBottom = "For " + branchUser.get_user.name;
            reason.classDisplay = 'col-xs-12 col-sm-6 mb-5';
            reason.setIsHidden(true);
            var followedUp = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('Follow Up', "isFollowedUp[" + i + "]");
            followedUp.setInputTypeSelectTrueFalse('Sudah', 'Belum');
            followedUp.changeListener.subscribe(function (baseForm) {
                var isFollowedUp = _this.helperService.parseBoolean(baseForm.value);
                reason.setIsHidden(!isFollowedUp, true);
                followedUp.setIsHidden(true);
            });
            followedUp.classDisplay = 'col-xs-6 ';
            followedUp.setIsHidden(true);
            followedUp.value = '0';
            var available = new __WEBPACK_IMPORTED_MODULE_1__components_floating_input_BaseForm__["a" /* BaseForm */]('available / hadir', "available[" + i + "]");
            available.setInputTypeSelectTrueFalse('Hadir', 'Tidak hadir / absen');
            available.changeListener.subscribe(function (baseForm) {
                var isAvailable = _this.helperService.parseBoolean(baseForm.value);
                if (isAvailable) {
                    name.classDisplay = 'col-xs-6 ';
                    available.classDisplay = 'col-xs-6';
                    reason.setIsHidden(true, true);
                }
                else {
                    name.classDisplay = 'col-xs-6 col-sm-3';
                    available.classDisplay = 'col-xs-6 col-sm-3';
                }
                followedUp.setIsHidden(isAvailable, true);
            });
            available.classDisplay = 'col-xs-6 ';
            available.value = '1';
            if (branchUser.get_user.isAbsenceBarcode) {
                available.value = "1";
                available.setIsReadOnly(true);
                var pipe = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]("id-ID");
                available.infoBottom = branchUser.get_user.name + " telah melakukan absen barcode untuk tanggal " + pipe.transform(branchUser.get_user.barcodeDate, "EEEE, dd MMMM yyyy");
            }
            rowFloating.push({
                baseForms: [branchUserId, name, available, followedUp, reason],
            });
        });
        setTimeout(function () {
            _this.modalData = {
                title: 'Absensi untuk kelas ' + absenceBranch.get_select_class.key,
                baseForms: rowFloating,
                buttons: [{
                        text: 'Submit',
                        class: 'btn btn-success',
                        onClick: function (form) {
                            _this.apiExecuteSubmitAbsence(form, absenceBranch);
                        },
                    }]
            };
        }, 300);
    };
    AbsenceListComponent.prototype.apiExecuteFollowUp = function (form, userAbsenceRecord) {
        var _this = this;
        if (form.valid) {
            var params = {
                id: userAbsenceRecord.id,
                cmd: 'followUp',
            };
            params = this.helperService.mergeObject(params, form.value);
            var url = __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'absence/op';
            var config = {
                url: url,
                params: params
            };
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiService.post(config, function (data) {
                        if (data.isSuccess) {
                            _this.topInit();
                            userAbsenceRecord.reason = form.value.reason;
                            userAbsenceRecord.isFollowedUp = true;
                            $('#modal').modal('hide');
                        }
                    });
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    AbsenceListComponent.prototype.apiExecuteSubmitAbsence = function (form, absenceBranch) {
        var _this = this;
        if (form.valid) {
            var params = {
                id: absenceBranch.id,
                cmd: 'addAbsenceBranch',
            };
            params = this.helperService.mergeObject(params, form.value);
            var url = __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'absence/op';
            var config = {
                url: url,
                params: params
            };
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiService.post(config, function (data) {
                        if (data.isSuccess) {
                            _this.helperService.closeModal();
                            _this.topInit();
                            // form.resetForm();
                        }
                    });
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    AbsenceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-absence-list',
            template: __webpack_require__("./src/app/page/module/absence/absence-list/absence-list.component.html"),
            styles: [__webpack_require__("./src/app/page/module/absence/absence-list/absence-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_api_api_service__["b" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
    ], AbsenceListComponent);
    return AbsenceListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=absence-list.component.js.map

/***/ }),

/***/ "./src/app/page/module/branch/branch-detail/branch-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"this.top.isSuccess else notSucceed\">\n\n\n\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"content\">\n            <h4 class=\"card-title\">{{top.data.branch.name}}</h4>\n            <p class=\"card-content\">\n          </div>\n\n        </div>\n        <div class=\"text-center\">\n          <a *ngIf=\"top.data.isCanAbsence\" [routerLink]=\"['/absence/list' , {id: top.data.branch.id}]\"  class=\"btn btn-info \">Absensi</a>\n          <a *ngIf=\"top.data.isCanConfigureWebBranch\" [routerLink]=\"['/branch/configure/web' , {id: top.data.branch.id}]\"  class=\"btn btn-info \">Konfigur website sekolah minggu</a>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Edit {{title}}</h4>\n          </div>\n          <div class=\"card-content\">\n            <form #parentForm=\"ngForm\">\n\n              <app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"this.rowBaseForms\"></app-row-floating-input>\n\n\n              <button *ngIf=\"this.isCanEditProfile\" type=\"button\" (click)=\"submitUpdateProfileForm(parentForm)\" class=\"btn btn-info pull-right\">Update {{title}}</button>\n              <p *ngIf=\"!this.isCanEditProfile\"><span style=\"color:tomato;\">*</span>You don't have permission to edit this {{title}}</p>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n\n      <!--row-->\n    </div>\n\n\n\n    <!--teacher-->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.branch\">\n      <div class=\"col-xs-12 col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\" style=\"display: inline-block\">Guru ({{top.data.branch.get_users_as_teacher.length}})</h4>\n            <button *ngIf=\"isCanAddTeacher\"  data-target=\"#modal\" data-toggle=\"modal\"  (click)=\"presentModal('teacher')\"  class=\"pull-right btn btn-info\">Add Teacher</button>\n            <!--<p class=\"category\"></p>-->\n          </div>\n\n\n\n\n          <div class=\"card-content table-responsive\" *ngIf=\"this.top.data.branch.get_users_as_teacher.length > 0 else noDataFound\">\n            <table class=\"table\">\n              <thead class=\"text-danger\">\n              <tr>\n                <th>No</th>\n                <th>Nama</th>\n                <!--<th>No. Tlp</th>-->\n                <th>Aktif</th>\n                <th class=\"hidden-xs visible-lg\" >Tanggal Masuk</th>\n                <th class=\"hidden-xs visible-lg\" >Tanggal Keluar</th>\n                <th>Kelas</th>\n\n                <!--<th>Action</th>-->\n              </tr>\n              </thead>\n              <tbody >\n              <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.branch.get_users_as_teacher; let i = index\" >\n                <td>{{i + 1}}</td>\n                <td><a [routerLink]=\"['/profile',{id:data.get_user.id}]\">{{data.get_user.name}}</a></td>\n                <!--<td>{{data.get_user.phone}}</td>-->\n                <td><app-row-floating-input [rowBaseForms]=\"teacherActiveForms[i]\"></app-row-floating-input></td>\n                <td class=\"hidden-xs visible-lg\" >{{helperService.getReadableDate(data.dateIn)}}</td>\n                <td class=\"hidden-xs visible-lg\" >{{helperService.getReadableDate(data.dateOut)}}</td>\n                <td><app-row-floating-input [rowBaseForms]=\"teacherClassForms[i]\"></app-row-floating-input></td>\n\n\n              </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n\n        <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n      </div>\n\n\n\n\n\n      <!--pupil-->\n      <div class=\"col-xs-12 col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\" style=\"display: inline-block\">Murid ({{top.data.branch.get_users_as_pupil.length}})</h4>\n\n            <!--<p class=\"category\"></p>-->\n\n          </div>\n\n\n\n\n          <div class=\"card-content \" *ngIf=\"this.top.data.branch.get_users_as_pupil.length > 0 else noDataFound\">\n\n            <!--<button *ngIf=\"isCanAddPupil\"  (click)=\"apiExecuteAdvanceClass(this.top.data.branch)\"  class=\"btn btn-danger\">Advance Class</button>-->\n            <button *ngIf=\"isCanAddPupil\"  data-target=\"#modal\" data-toggle=\"modal\"  (click)=\"presentModal('pupil')\"  class=\"btn btn-info\">Add Pupil</button>\n\n            <div style=\"display:block\" class=\"table-responsive\">\n              <table id='pupilTable' class=\"table \">\n                <thead class=\"text-danger\">\n                <tr>\n                  <th>No</th>\n                  <th>Nama</th>\n                  <th>Aktif</th>\n\n                  <th class=\"hidden-xs visible-lg\">Tanggal Masuk</th>\n                  <th class=\"hidden-xs visible-lg\"> Tanggal Keluar</th>\n                  <th>Kelas</th>\n\n                  <!--<th>Action</th>-->\n                </tr>\n                </thead>\n                <tbody >\n                <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.branch.get_users_as_pupil; let i = index\" >\n                  <td>{{i + 1}}</td>\n                  <td><a [routerLink]=\"['/profile',{id:data.get_user.id}]\">{{data.get_user.name}}</a></td>\n                  <!--<td>{{data.get_user.phone}}</td>-->\n                  <td><app-row-floating-input [rowBaseForms]=\"pupilActiveForms[i]\"></app-row-floating-input></td>\n\n                  <td class=\"hidden-xs visible-lg\">{{helperService.getReadableDate(data.dateIn)}}</td>\n                  <td class=\"hidden-xs visible-lg\">{{helperService.getReadableDate(data.dateOut)}}</td>\n                  <td><app-row-floating-input [rowBaseForms]=\"pupilClassForms[i]\"></app-row-floating-input></td>\n\n\n                </tr>\n\n                </tbody>\n              </table>\n            </div>\n\n\n          </div>\n        </div>\n\n        <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n      </div>\n\n\n\n\n\n      <!--row-->\n    </div>\n\n\n\n\n\n\n\n    <!--containerfluid-->\n  </div>\n\n\n  <!--mainContent-->\n</div>\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n<ng-template #loading>loading</ng-template>\n<ng-template #notSucceed>{{title}} Not Found</ng-template>\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/page/module/branch/branch-detail/branch-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/module/branch/branch-detail/branch-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BranchDetailComponent = /** @class */ (function () {
    function BranchDetailComponent(changeDetectorRef, helperService, activatedRoute, apiService, userService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.userService = userService;
        this.param = {};
        this.top = { isSuccess: false, message: '' };
        this.isCanEditProfile = false;
        this.isCanAddTeacher = false;
        this.isCanAddPupil = false;
        this.title = 'branch';
        this.rowBaseForms = [];
        this.formValueContainer = {};
        this.modalData = {
            title: 'Apply form',
            baseForms: [],
            buttons: [],
        };
        this.teacherActiveForms = [];
        this.teacherClassForms = [];
        this.pupilActiveForms = [];
        this.pupilClassForms = [];
        this.activatedRoute.params.subscribe(function (data) {
            _this.param.id = data['id'];
            console.log('param', data);
            _this.topInit();
        });
    }
    BranchDetailComponent.prototype.ngOnInit = function () {
    };
    BranchDetailComponent.prototype.topInit = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupButtonLogic();
            _this.setupForm();
            _this.teacherActiveForms = [];
            _this.pupilActiveForms = [];
            _this.pupilClassForms = [];
            _this.teacherClassForms = [];
            _this.top.data.branch.get_users_as_teacher.forEach(function (current) {
                _this.setupBranchUserForm(current, 'teacher');
            });
            _this.top.data.branch.get_users_as_pupil.forEach(function (current) {
                _this.setupBranchUserForm(current, 'pupil');
            });
            var title = 'Pupil data for ' + _this.top.data.branch.name;
            // $(document).ready(function () {
            //     $('table').DataTable({
            //         dom: 'Bfrtip',
            //         paging: false,
            //         buttons: [],
            //         sort: false,
            //
            //         "bDestroy": true
            //
            //     });
            //     // $('table').dataTable().fnDestroy();
            //     // $('table').dataTable().fnDestroy();
            //
            // });
        });
    };
    BranchDetailComponent.prototype.setupButtonLogic = function () {
        this.isCanEditProfile = this.top.data.isCanEditProfile;
        this.isCanAddTeacher = this.top.data.isCanAddTeacher;
        this.isCanAddPupil = this.top.data.isCanAddPupil;
    };
    BranchDetailComponent.prototype.setupForm = function () {
        this.rowBaseForms = [];
        this.formValueContainer = {};
        var name = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        name.value = this.top.data.branch.name;
        name.classDisplay = 'col-xs-6';
        var address = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('address', 'address');
        address.value = this.top.data.branch.address;
        address.classDisplay = 'col-xs-6';
        var head = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Head Branch', 'head');
        head.classDisplay = 'col-xs-12';
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/auto-complete',
            params: {
                previledge: { selector: '!=', value: 'pupil' }
            }
        };
        head.setIsRequired(false);
        head.setInputTypeAutoComplete(config);
        head.infoBottom = 'Kepala sekolah minggu';
        if (this.top.data.branch && this.top.data.branch.get_head) {
            head.setAutoCompleteValue({ key: this.top.data.branch.get_head.name, value: this.top.data.branch.get_head.id });
        }
        var owner = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('owner', 'owner');
        owner.classDisplay = 'col-xs-12';
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/auto-complete',
            params: {
                previledge: { selector: '!=', value: 'pupil' }
            }
        };
        owner.setIsRequired(false);
        owner.setInputTypeAutoComplete(config);
        owner.infoBottom = 'Pemilik rumah';
        if (this.top.data.branch && this.top.data.branch.get_owner) {
            owner.setAutoCompleteValue({ key: this.top.data.branch.get_owner.name, value: this.top.data.branch.get_owner.id });
        }
        this.rowBaseForms.push({ baseForms: [name, address, owner, head] });
        this.setEditableForm();
    };
    BranchDetailComponent.prototype.setEditableForm = function () {
        var _this = this;
        console.log('setEditable', this.isCanEditProfile, this.rowBaseForms, this.top);
        this.rowBaseForms.forEach(function (rowBaseForm) {
            rowBaseForm.baseForms.forEach(function (baseForm) {
                if (!baseForm.isReadOnly) {
                    baseForm.setIsReadOnly(!_this.isCanEditProfile);
                }
            });
        });
    };
    BranchDetailComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "branch/top",
            params: { id: this.param.id, cmd: 'detail' },
        };
        this.apiService.get(config, function (data) {
            console.log('top', data);
            _this.top = data;
            onFinish();
        });
    };
    BranchDetailComponent.prototype.submitUpdateProfileForm = function (form) {
        var _this = this;
        console.log(this.formValueContainer);
        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.branch.id;
            this.formValueContainer['cmd'] = 'edit';
            this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    BranchDetailComponent.prototype.apiExecuteSubmitForm = function (json) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: json,
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                _this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    BranchDetailComponent.prototype.presentModal = function (type) {
        // this.setForm();
        if (type == 'pupil' || type == 'teacher') {
            this.setupFindUserForm(type);
        }
    };
    BranchDetailComponent.prototype.setupFindUserForm = function (type) {
        var _this = this;
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.formValueContainer = {};
        var user = null;
        var findUser = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Find User', 'findUser');
        findUser.classDisplay = 'col-xs-12';
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/auto-complete',
            params: {}
        };
        // findUser.setIsRequired(false);
        findUser.setInputTypeAutoComplete(config);
        findUser.changeListener.subscribe(function (baseForm) {
            console.log('findUser', baseForm.value);
            __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */].apiExecuteGetUserById(baseForm.value, function (userDetailData) {
                console.log('userDetailData', userDetailData);
                email.setValue(userDetailData.email);
                name.setValue(userDetailData.name);
                nbg.setValue(userDetailData.nbg);
                address.setValue(userDetailData.address);
                phone.setValue(userDetailData.phone);
                birthDate.setValue(userDetailData.birthDate);
                user = userDetailData;
            });
        });
        var selectClass = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Class', 'class');
        selectClass.setInputTypeSelect(this.top.data.selectClass);
        var email = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Email', 'email');
        email.setIsRequired(false);
        email.setIsReadOnly(true);
        var name = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        name.classDisplay = 'col-xs-6';
        name.setIsRequired(false);
        name.setIsReadOnly(true);
        var nbg = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('NBG', 'nbg');
        nbg.setIsRequired(false);
        nbg.setIsReadOnly(true);
        nbg.classDisplay = 'col-xs-6';
        var address = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Address', 'address');
        address.classDisplay = 'col-xs-6';
        address.setIsRequired(false);
        address.setIsReadOnly(true);
        var phone = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Phone', 'phone');
        phone.classDisplay = 'col-xs-6';
        phone.setIsRequired(false);
        phone.setIsReadOnly(true);
        var birthDate = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["b" /* InputType */].date;
        birthDate.setIsRequired(false);
        birthDate.setIsReadOnly(true);
        if (type == 'pupil') {
            this.modalData.title = "Add new pupil / Tambah murid baru";
        }
        if (type == 'teacher') {
            this.modalData.title = "Add new teacher / Tambah guru baru";
        }
        this.modalData.baseForms = [{
                baseForms: [findUser, selectClass, email, name, nbg, address, phone, birthDate,]
            }];
        this.modalData.buttons.push({
            class: 'btn btn-success',
            text: 'Submit',
            onClick: function () {
                _this.apiExecuteSubmitNewUserToBranch(user, type, selectClass.value);
            }
        });
        // this.modalData.baseForms = [{
        //     baseForms:[selectRole, branch, selectClass, email, name, nbg,address,phone ,birthDate,]
        // }];
        // this.modalData.buttons.push({
        //     text: "Submit",
        //     class: "btn btn-success",
        //     onClick: (form:NgForm)=>{
        //         this.submitNewUserForm(form);
        //     }
        // })
    };
    BranchDetailComponent.prototype.apiExecuteSubmitNewUserToBranch = function (user, role, selectClass) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op',
            params: {
                cmd: 'addUserToBranch',
                id: user.id,
                role: role,
                branchId: this.top.data.branch.id,
                selectClass: selectClass
            }
        };
        this.apiService.post(config, function (response) {
            _this.topInit();
            _this.helperService.closeModal();
        });
    };
    BranchDetailComponent.prototype.submitScoreForm = function (form) {
        var _this = this;
        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.branch.id;
            this.formValueContainer['cmd'] = 'giveScore',
                this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    BranchDetailComponent.prototype.setupBranchUserForm = function (branchUser, role) {
        var _this = this;
        var isCannotAdd = role == 'teacher' ? !this.top.data.isCanAddTeacher : !this.top.data.isCanEditPupil;
        var activeForm = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('', 'isActive');
        activeForm.value = '' + branchUser.isActive;
        activeForm.setInputTypeSelectTrueFalse('Aktif', 'Non-Aktif');
        activeForm.setIsReadOnly(isCannotAdd);
        var activeOldValue = activeForm.value;
        activeForm.changeListener.subscribe(function (data) {
            _this.helperService.presentConfirmation({ message: 'Ubah keaktifan dari ' + branchUser.get_user.name }, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteChangeActiveStatus(branchUser, activeForm);
                    activeOldValue = data.value;
                }
                else {
                    data.value = activeOldValue;
                }
            });
        });
        var classForm = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('', 'class');
        classForm.value = '' + branchUser.get_class.value;
        classForm.setInputTypeSelect(this.top.data.selectClass, false);
        classForm.setIsReadOnly(isCannotAdd || !branchUser.isActive);
        var classOldValue = classForm.value;
        classForm.changeListener.subscribe(function (data) {
            _this.helperService.presentConfirmation({ message: 'Ubah kelas dari ' + branchUser.get_user.name }, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteChangeClass(branchUser, classForm);
                    classOldValue = data.value;
                }
                else {
                    data.value = classOldValue;
                }
            });
        });
        var rowFloatingForm = [{
                baseForms: [activeForm],
            }];
        var classFloatingForm = [{
                baseForms: [classForm],
            }];
        if (role == 'teacher') {
            this.teacherActiveForms.push(rowFloatingForm);
            this.teacherClassForms.push(classFloatingForm);
        }
        if (role == 'pupil') {
            this.pupilActiveForms.push(rowFloatingForm);
            this.pupilClassForms.push(classFloatingForm);
        }
    };
    BranchDetailComponent.prototype.apiExecuteChangeActiveStatus = function (branchUser, form) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: {
                id: branchUser.id,
                isActive: form.value,
                cmd: 'changeActiveStatus',
            },
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                // this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    BranchDetailComponent.prototype.apiExecuteAdvanceClass = function (branch) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: {
                id: branch.id,
                cmd: 'advanceClass',
            },
        };
        this.helperService.presentConfirmation({ message: 'Are you sure to advance all pupil class? Don\'t continue if you not sure' }, function (isConfirmed) {
            if (isConfirmed) {
                _this.apiService.post(config, function (data) {
                    if (data.isSuccess) {
                        // this.helperService.closeModal();
                        _this.topInit();
                    }
                });
            }
        });
    };
    BranchDetailComponent.prototype.apiExecuteChangeClass = function (branchUser, form) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: {
                id: branchUser.id,
                class: form.value,
                cmd: 'changeClass',
            },
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                // this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    BranchDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-branch-detail',
            template: __webpack_require__("./src/app/page/module/branch/branch-detail/branch-detail.component.html"),
            styles: [__webpack_require__("./src/app/page/module/branch/branch-detail/branch-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
    ], BranchDetailComponent);
    return BranchDetailComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=branch-detail.component.js.map

/***/ }),

/***/ "./src/app/page/module/branch/branchList/branch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n\n\n    <div class=\"row\" style=\"margin-bottom: 24px;\">\n      <div class=\" col-xs-12 col-md-6\" >\n        <div class=\"card\">\n          <div (click)=\"this.filter.isOpen = !this.filter.isOpen\" class=\"card-header\" data-background-color=\"blue\">\n            <h4 class=\"title\">My Branch / Cabang SM Saya</h4>\n            <!--<p class=\"category\">Click here to toggle the menu</p>-->\n          </div>\n          <div *ngIf=\"this.filter.isOpen\" class=\"card-content animationExpandBottom\">\n            <a style=\"display:block; margin-bottom: 16px;\" *ngFor=\"let data of top.data.myBranchUsers\" [routerLink]=\"['/branch/detail',{id:data.get_branch.id}]\">{{data.get_branch.name}}</a>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\" col-xs-12\" >\n        <button *ngIf=\"userService.userData.get_previledge.isCanConfigureBranch\" (click)=\"presentModal('addBranch')\" class=\"btn btn-info pull-right\" data-target=\"#modal\" data-toggle=\"modal\">Add branch</button>\n\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class=\"row\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\" style=\"display: inline-block\">Branch List <span *ngIf=\"top && top.data.branches\">({{top.data.branches.total}})</span></h4>\n            <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n          </div>\n          <div class=\"card-content table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-danger\">\n              <tr>\n                <th>No</th>\n                <th>Name</th>\n                <th>Head</th>\n                <th>Owner</th>\n                <th>Total Teacher</th>\n                <th>Total Pupil</th>\n              </tr>\n              </thead>\n              <tbody *ngIf=\"top && top.data.branches else noDataFound\">\n              <tr  *ngFor=\"let data of top.data.branches.data; let i = index;\"   >\n\n                <td>{{i + 1}}</td>\n                <td><a [routerLink]=\"['/branch/detail',{id:data.id}]\">{{data.name}}</a></td>\n                <td><a *ngIf=\"data.get_head\" [routerLink]=\"['/profile',{id:data.get_head.id}]\">{{data.get_head.name}}</a></td>\n                <td><a *ngIf=\"data.get_owner\" [routerLink]=\"['/profile',{id:data.get_owner.id}]\">{{data.get_owner.name}}</a></td>\n                <td>{{data['totalTeacher']}}</td>\n                <td>{{data['totalPupil']}}</td>\n\n              </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n\n        <app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>\n      </div>\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/page/module/branch/branchList/branch.component.scss":
/***/ (function(module, exports) {

module.exports = ".segment1 {\n  background: white; }\n"

/***/ }),

/***/ "./src/app/page/module/branch/branchList/branch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchComponent = /** @class */ (function () {
    function BranchComponent(userService, apiService, helperService) {
        var _this = this;
        this.userService = userService;
        this.apiService = apiService;
        this.helperService = helperService;
        this.modalData = { baseForms: [], title: "", buttons: [] };
        this.rowBaseForms = [];
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["c" /* FilterInterface */]();
        this.title = "Branch";
        this.filterForm = [];
        this.readableModalData = [];
        this.approvalForm = [];
        this.formValueContainer = {};
        this.onClickPagination = function () {
            _this.apiExecuteGetTop(function (response) {
            });
        };
        this.apiExecuteGetTop(function (response) {
            _this.getFilter();
            _this.setupFilterForm();
            _this.setupForms();
        });
    }
    BranchComponent.prototype.ngOnInit = function () {
    };
    BranchComponent.prototype.setupForms = function () {
        this.rowBaseForms = [];
        var buildingName = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        this.rowBaseForms.push({
            baseForms: [name]
        });
    };
    BranchComponent.prototype.setApprovalForm = function () {
        // this.approvalForm = [];
        // var approve = new BaseForm("Approval status","status");
        // approve.setInputTypeSelect(this.top.data.approveForm.status);
        //
        // approve.changeListener.subscribe((form)=>{
        //     reason.setIsRequired(form.value == "re");
        // });
        // // approve.setinput
        // this.approvalForm.push({
        //     baseForms:[approve]
        // });
        // var reason = new BaseForm("Reason (email)",'statusReason');
        // reason.setIsRequired(false);
        // reason.setInputTypeTextarea();
        // reason.infoBottom = "*Alasan ini akan dikirim dalam format email";
        // this.approvalForm.push({
        //     baseForms:[reason]
        // })
        //
    };
    BranchComponent.prototype.setupFilterForm = function () {
        this.filterForm = [];
        //
        // var cmbRole:BaseForm = new BaseForm("Role", 'cmbRole');
        // cmbRole.setInputTypeSelect(this.top.data.filter.cmbRole)
        // cmbRole.value = this.filter.cmbRole;
        // cmbRole.setIsRequired(false);
        // cmbRole.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbRole = baseForm.value;
        // });
        //
        //
        // var cmbBranch:BaseForm = new BaseForm("Branch / Cabang", 'cmbBranch');
        // cmbBranch.setInputTypeSelect(this.top.data.filter.cmbBranch)
        // cmbBranch.value = this.filter.cmbBranch;
        // cmbBranch.setIsRequired(false);
        // cmbBranch.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbBranch = baseForm.value;
        // })
        // cmbBranch.classDisplay = 'col-xs-6';
        //
        //
        // var cmbClass:BaseForm = new BaseForm("Class", 'cmbClass');
        // cmbClass.setInputTypeSelect(this.top.data.filter.cmbClass)
        // cmbClass.value = this.filter.cmbClass;
        // cmbClass.setIsRequired(false);
        // cmbClass.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbClass = baseForm.value;
        // })
        // cmbClass.classDisplay = 'col-xs-6';
        //
        //
        //
        // var cmbSearchBy:BaseForm = new BaseForm("Search By", 'cmbSearchBy');
        // cmbSearchBy.setInputTypeSelect(this.top.data.filter.cmbSearchBy)
        // cmbSearchBy.value = this.filter.cmbSearchBy;
        // cmbSearchBy.setIsRequired(false);
        // cmbSearchBy.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.cmbSearchBy = baseForm.value;
        // })
        // cmbSearchBy.classDisplay = 'col-xs-6';
        //
        //
        //
        //
        // var searchValue:BaseForm = new BaseForm("Search Value", 'searchValue');
        // searchValue.value = this.filter.searchValue;
        // searchValue.setIsRequired(false);
        // searchValue.changeListener.subscribe((baseForm:BaseForm)=>{
        //     this.filter.searchValue = baseForm.value;
        // })
        // searchValue.classDisplay = 'col-xs-6';
        //
        //
        //
        //
        // this.filterForm.push({
        //     baseForms: [cmbRole, cmbBranch, cmbClass, cmbSearchBy, searchValue]
        // });
    };
    BranchComponent.prototype.getFilter = function () {
        // this.filter.cmbStatus = "pa";
    };
    BranchComponent.prototype.apiExecuteGetTop = function (onFinished) {
        var _this = this;
        var params = {
            cmd: 'list',
        };
        params = this.helperService.mergeObject(params, this.filter);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/top',
            toastMessage: 'Branch module data',
            params: params,
        };
        this.apiService.get(config, function (response) {
            if (response.isSuccess) {
                _this.top = response;
                if (onFinished) {
                    onFinished(response);
                }
            }
        });
    };
    BranchComponent.prototype.presentModal = function (type, data) {
        // this.setForm();
        if (type == 'addBranch') {
            this.setupAddBranchForm();
        }
        if (type == 'editBranch') {
            this.setupAddBranchForm(data);
        }
    };
    BranchComponent.prototype.setupAddBranchForm = function (data) {
        var _this = this;
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = "Add new branch";
        this.formValueContainer = {};
        var name = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        name.classDisplay = 'col-xs-6';
        if (data) {
            name.value = data.name;
        }
        var address = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('address', 'address');
        address.classDisplay = 'col-xs-6';
        if (data) {
            address.value = data.address;
        }
        this.modalData.baseForms = [{
                baseForms: [name, address,]
            }];
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: function (form) {
                _this.submitAddBranchForm(form);
            }
        });
    };
    BranchComponent.prototype.submitAddBranchForm = function (form) {
        var _this = this;
        if (form.valid) {
            this.formValueContainer['cmd'] = 'addBranch',
                this.formValueContainer = this.helperService.mergeObject(this.formValueContainer, form.value);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    BranchComponent.prototype.apiExecuteSubmitForm = function (params) {
        var _this = this;
        console.log('apiFormSubmit', params);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op',
            params: params,
            toastMessage: 'Submitting form',
        };
        this.apiService.post(config, function (data) {
            console.log(data);
            _this.apiExecuteGetTop();
            _this.helperService.closeModal();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('formModal'),
        __metadata("design:type", Object)
    ], BranchComponent.prototype, "formModal", void 0);
    BranchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-branch',
            template: __webpack_require__("./src/app/page/module/branch/branchList/branch.component.html"),
            styles: [__webpack_require__("./src/app/page/module/branch/branchList/branch.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */]) === "function" && _c || Object])
    ], BranchComponent);
    return BranchComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=branch.component.js.map

/***/ }),

/***/ "./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"top\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" *ngIf=\"this.top.isSuccess else notSucceed\">\n\n\n            <div class=\"col-md-12\">\n                <h4 class=\"card-title\">Konfigurasi {{top.data.branch.name}}</h4>\n\n            </div>\n\n\n            <!--row-->\n        </div>\n\n\n        <!--teacher-->\n        <div class=\"row\" *ngIf=\"this.top && this.top.data.branch\">\n            <div class=\"col-xs-12 \">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\" style=\"display: inline-block\">Event</h4>\n                        <button data-target=\"#modal\" data-toggle=\"modal\" (click)=\"presentModal('addEvent',null)\"\n                                class=\"pull-right btn btn-info\">Add Event Content\n                        </button>\n                        <p class=\"\">Konten event yang pernah dilakukan {{this.top.data.branch.name}} </p>\n                    </div>\n\n\n                    <div class=\"card-content table-responsive event\"\n                         *ngFor=\"let currentEvent of this.top.data.branch.get_branch_events\">\n\n\n                        <div>\n                            <button class=\"btn btn-danger pull-right\" (click)=\"apiExecuteDeleteEvent(currentEvent.id)\">\n                                Remove\n                            </button>\n                            <button class=\"btn btn-info pull-right\" data-toggle=\"modal\" data-target=\"#modal\"\n                                    (click)=\"presentModal('editEvent',currentEvent)\">Edit\n                            </button>\n                            <h3>{{currentEvent.title}}</h3>\n                        </div>\n                        <p>Description:<br/> {{currentEvent.description}}</p>\n\n                        <div class=\"row\">\n                            <div class=\"col-xs-12\">\n                                <p style=\"color:tomato\">*Click image /  video to delete photo</p>\n                            </div>\n                            <div class=\"col-sm-3 col-xs-4\" *ngFor=\"let currentPhoto of currentEvent.get_photos\">\n                                <img    (click)=\"apiExecuteDeletePhoto(currentPhoto.id, currentEvent.id)\"\n                                     class=\"img-responsive\" *ngIf=\"currentPhoto.type == 1 && !currentPhoto.youtubeLink\"\n                                     [src]=\"this.apiService.baseUrl + currentPhoto.path + currentPhoto.nameSm\">\n\n\n                                <div style=\"position:relative;\" (click)=\"apiExecuteDeletePhoto(currentPhoto.id, currentEvent.id)\">\n\n                                    <div style=\"position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index: 999;opacity:0;\">\n\n                                    </div>\n                                    <iframe  *ngIf=\"currentPhoto.youtubeLink\" class=\"img-responsive\"\n                                             [src]=\"'https://www.youtube.com/embed/' + currentEvent.youtubeLink | keepAsSrc\">\n                                    </iframe>\n                                </div>\n                            </div>\n                            <!--row?-->\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-12\" *ngIf=\"currentEvent.youtubeLink && currentEvent.youtubeLink != ''\">\n\n                            </div>\n                            <!--row-->\n                        </div>\n\n\n                    </div>\n                </div>\n\n                <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n            </div>\n\n\n            <!--row-->\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\" style=\"display: inline-block\">Year Planning</h4>\n                        <button data-target=\"#modal\" data-toggle=\"modal\"\n                                (click)=\"presentModal('addPlanning')\" class=\"pull-right btn btn-info\">Add Planning\n                        </button>\n                        <!--<p class=\"category\"></p>-->\n                    </div>\n\n                    <div class=\"card-content table-responsive\"\n                    >\n                        <table class=\"table\">\n                            <thead class=\"text-danger\">\n                            <tr>\n                                <th>No</th>\n                                <th>Date</th>\n                                <!--<th>No. Tlp</th>-->\n                                <th>Title</th>\n                                <th>Description</th>\n                                <th>Action</th>\n\n\n                                <!--<th>Action</th>-->\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.branch.get_plannings; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td>{{this.helperService.getReadableDate(data.dueDate)}}</td>\n                                <td>{{data.title}}</td>\n                                <td>{{data.description}}</td>\n                                <td>\n                                    <button class=\"btn btn-danger \" (click)=\"apiExecuteDeletePlanning(data.id)\">\n                                        Remove\n                                    </button>\n                                    <button class=\"btn btn-info \" data-toggle=\"modal\" data-target=\"#modal\"\n                                            (click)=\"presentModal('editPlanning',data)\">Edit\n                                    </button>\n                                </td>\n\n\n                            </tr>\n\n                            </tbody>\n                        </table>\n\n                    </div>\n\n                    <!--card?-->\n                </div>\n\n                <!--col-->\n            </div>\n            <!--row-->\n        </div>\n\n\n        <!--containerfluid-->\n    </div>\n\n\n    <!--mainContent-->\n</div>\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n<ng-template #loading>loading</ng-template>\n<ng-template #notSucceed>{{title}} Not Found</ng-template>\n<ng-template #noDataFound>\n    <div class=\"card-content\">No data found</div>\n</ng-template>"

/***/ }),

/***/ "./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".event {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #ddd; }\n"

/***/ }),

/***/ "./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureBranchDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigureBranchDetailComponent = /** @class */ (function () {
    function ConfigureBranchDetailComponent(changeDetectorRef, helperService, activatedRoute, apiService, userService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.userService = userService;
        this.param = {};
        this.title = 'Absence';
        this.rowBaseForms = [];
        this.formValueContainer = {};
        this.modalData = {
            title: 'Apply form',
            baseForms: [],
            buttons: [],
        };
        this.teacherActiveForms = [];
        this.teacherClassForms = [];
        this.pupilActiveForms = [];
        this.pupilClassForms = [];
        this.followUpModalData = [];
        this.activatedRoute.params.subscribe(function (data) {
            _this.param.id = data['id'];
            console.log('param', data);
            _this.topInit();
        });
    }
    ConfigureBranchDetailComponent.prototype.ngOnInit = function () {
    };
    ConfigureBranchDetailComponent.prototype.topInit = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupButtonLogic();
            _this.setupForm();
        });
    };
    ConfigureBranchDetailComponent.prototype.setupButtonLogic = function () {
    };
    ConfigureBranchDetailComponent.prototype.setupForm = function () {
        this.rowBaseForms.push({ baseForms: [] });
        this.setEditableForm();
    };
    ConfigureBranchDetailComponent.prototype.setEditableForm = function () {
        // console.log('setEditable', this.isCanEditProfile, this.rowBaseForms, this.top);
        // this.rowBaseForms.forEach(rowBaseForm=>{
        //     rowBaseForm.baseForms.forEach(baseForm=>{
        //         if(!baseForm.isReadOnly){
        //             baseForm.setIsReadOnly(!this.isCanEditProfile);
        //         }
        //     })
        // })
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "branch/config/web/top",
            params: { id: this.param.id, cmd: 'detail' },
        };
        this.apiService.get(config, function (data) {
            console.log('top', data);
            _this.top = data;
            _this.teacherActiveForms = [];
            _this.pupilActiveForms = [];
            onFinish();
        });
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteSubmitForm = function (json) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/op';
        var config = {
            url: url,
            params: json,
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                _this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    ConfigureBranchDetailComponent.prototype.presentModal = function (type, data) {
        // this.setForm();
        if (type == 'addEvent' || type == 'editEvent') {
            this.setupEventModal(data);
        }
        if (type == 'addPlanning' || type == 'editPlanning') {
            this.setupPlanningModal(data);
        }
    };
    ConfigureBranchDetailComponent.prototype.setupPlanningModal = function (planning) {
        var _this = this;
        var rowFloating = [];
        if (!planning) {
            planning = {
                dueDate: null,
                title: null,
                description: null,
                id: null,
            };
        }
        var title = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('title', "title");
        title.value = planning.title || "";
        var description = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('description', "description");
        description.value = planning.description || "";
        description.setInputTypeTextarea();
        var date = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]("date", 'dueDate');
        date.setInputTypeDate({});
        date.value = planning.dueDate || "";
        rowFloating.push({
            baseForms: [title, description, date,],
        });
        setTimeout(function () {
            _this.modalData = {
                baseForms: rowFloating,
                title: 'Event form',
                buttons: [{
                        text: 'Submit',
                        class: 'btn btn-success',
                        onClick: function (form) {
                            _this.apiExecuteSubmitPlanning(form, planning);
                        },
                    }]
            };
        }, 300);
    };
    ConfigureBranchDetailComponent.prototype.setupEventModal = function (realBranchEvent) {
        var _this = this;
        var rowFloating = [];
        var branchEvent = realBranchEvent;
        if (!realBranchEvent) {
            branchEvent = {
                title: "",
                description: "",
                youtubeLink: "",
                id: "",
                get_photos: [],
            };
        }
        var title = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('title', "title");
        title.value = branchEvent.title;
        var description = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('description', "description");
        description.value = branchEvent.description;
        description.setInputTypeTextarea();
        var youtube = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]("add youtube", "youtubeLink");
        youtube.setIsRequired(false);
        var photo = new __WEBPACK_IMPORTED_MODULE_2__components_floating_input_BaseForm__["a" /* BaseForm */]('photo', "photo");
        photo.setInputTypeFile({
            formContainer: this.formValueContainer,
            isMultilple: true,
        });
        photo.setInputFileImageOnly();
        photo.infoBottom += "<p style='color:tomato'>*Total size must below " + this.top.data.postMaxSize + ". if many file then try to upload 1 by 1 later</p>";
        rowFloating.push({
            baseForms: [title, description, youtube, photo,],
        });
        setTimeout(function () {
            _this.modalData = {
                baseForms: rowFloating,
                title: 'Event form',
                buttons: [{
                        text: 'Submit',
                        class: 'btn btn-success',
                        onClick: function (form) {
                            _this.apiExecuteSubmitBranchEvent(form, realBranchEvent);
                        },
                    }]
            };
        }, 300);
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteSubmitPlanning = function (form, planning) {
        var _this = this;
        if (form.valid) {
            console.log('apiExecuteSubmitBranchEvent', planning);
            var params = {
                cmd: planning.id ? "editPlanning" : 'addPlanning',
                branchId: this.top.data.branch.id,
                planningId: planning ? planning.id : "",
            };
            params = this.helperService.mergeObject(params, form.value);
            var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/config/web/op';
            var config = {
                url: url,
                params: params
            };
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiService.post(config, function (data) {
                        if (data.isSuccess) {
                            _this.helperService.closeModal();
                            _this.topInit();
                            // form.resetForm();
                        }
                    });
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteSubmitBranchEvent = function (form, branchEvent) {
        var _this = this;
        if (form.valid) {
            console.log('apiExecuteSubmitBranchEvent', branchEvent);
            var params = {
                cmd: branchEvent ? "editEvent" : 'addEvent',
                branchId: this.top.data.branch.id,
                branchEventId: branchEvent ? branchEvent.id : "",
            };
            params = this.helperService.mergeObject(params, form.value);
            params = this.helperService.mergeObject(params, this.formValueContainer);
            var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/config/web/op';
            var config = {
                url: url,
                params: params
            };
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiService.post(config, function (data) {
                        if (data.isSuccess) {
                            _this.helperService.closeModal();
                            _this.topInit();
                            // form.resetForm();
                        }
                    });
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteDeleteEvent = function (id) {
        var _this = this;
        var params = {
            cmd: 'deleteEvent',
            branchEventId: id,
        };
        params = this.helperService.mergeObject(params, this.formValueContainer);
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/config/web/op';
        var config = {
            url: url,
            params: params
        };
        this.helperService.presentConfirmation({}, function (isConfirmed) {
            if (isConfirmed) {
                _this.apiService.post(config, function (data) {
                    if (data.isSuccess) {
                        _this.helperService.closeModal();
                        _this.topInit();
                        // form.resetForm();
                    }
                });
            }
        });
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteDeletePlanning = function (id) {
        var _this = this;
        var params = {
            cmd: 'deletePlanning',
            planningId: id,
        };
        params = this.helperService.mergeObject(params, this.formValueContainer);
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/config/web/op';
        var config = {
            url: url,
            params: params
        };
        this.helperService.presentConfirmation({}, function (isConfirmed) {
            if (isConfirmed) {
                _this.apiService.post(config, function (data) {
                    if (data.isSuccess) {
                        _this.helperService.closeModal();
                        _this.topInit();
                        // form.resetForm();
                    }
                });
            }
        });
    };
    ConfigureBranchDetailComponent.prototype.apiExecuteDeletePhoto = function (photoId, branchEventId) {
        var _this = this;
        var params = {
            cmd: 'deletePhoto',
            branchEventId: branchEventId,
            photoId: photoId,
        };
        params = this.helperService.mergeObject(params, this.formValueContainer);
        var url = __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'branch/config/web/op';
        var config = {
            url: url,
            params: params
        };
        this.helperService.presentConfirmation({ message: "Delete this photo/video?" }, function (isConfirmed) {
            if (isConfirmed) {
                _this.apiService.post(config, function (data) {
                    if (data.isSuccess) {
                        _this.helperService.closeModal();
                        _this.topInit();
                        // form.resetForm();
                    }
                });
            }
        });
    };
    ConfigureBranchDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-configure-branch-detail',
            template: __webpack_require__("./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.html"),
            styles: [__webpack_require__("./src/app/page/module/configure-branch/configure-branch-detail/configure-branch-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_api_service__["b" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
    ], ConfigureBranchDetailComponent);
    return ConfigureBranchDetailComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=configure-branch-detail.component.js.map

/***/ }),

/***/ "./src/app/page/module/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n\n\n    <div class=\"row\" style=\"\">\n      <div class=\" col-xs-12 col-md-6\" >\n        <button (click)=\"presentModal('newUser')\" class=\"btn btn-info centerMargin\" data-target=\"#modal\" data-toggle=\"modal\">Add user</button>\n\n      </div>\n      <div class=\" col-xs-12 col-md-6\" >\n        <div class=\"card\">\n          <div (click)=\"this.filter.isOpen = !this.filter.isOpen\" class=\"card-header\" data-background-color=\"blue\">\n            <h4 class=\"title\">Search for {{title}}</h4>\n            <p class=\"category\">Click here to toggle the menu</p>\n          </div>\n          <div *ngIf=\"this.filter.isOpen\" class=\"card-content animationExpandBottom\">\n\n            <form #parentFilterForm = \"ngForm\">\n              <app-row-floating-input [parentForm]=\"parentFilterForm\" [rowBaseForms]=\"this.filterForm\"></app-row-floating-input>\n              <button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"apiExecuteGetTop()\">Search</button>\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n\n\n\n    </div>\n\n\n\n\n    <div class=\"row\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\" style=\"display: inline-block\">User List <span *ngIf=\"top && top.data.users\">({{top.data.users.total}})</span></h4>\n            <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n            <!--<p class=\"category\">Here is a subtitle for this table</p>-->\n          </div>\n          <div class=\"card-content table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-danger\">\n              <tr>\n                <th>No</th>\n                <th>Nama</th>\n                <th>Role</th>\n                <th>Nama Cabang</th>\n                <th>Kelas</th>\n                <!--<th>Action</th>-->\n              </tr>\n              </thead>\n              <tbody *ngIf=\"top && top.data.users else noDataFound\">\n              <tr *ngFor=\"let data of top.data.users.data; let i = index;\" data-target=\"#detailModal \" data-toggle=\"modal\"  >\n\n                <td>{{i + 1}}</td>\n                <td style=\"max-width: 120px; text-overflow: clip\"><a [routerLink]=\"['/profile',{id:data.id}]\">{{data.name}}</a></td>\n                <td><ol><li *ngFor=\"let detail of data.get_branch_user\"><span *ngIf=\"detail.get_class\">{{detail.get_role.key || '-'}}</span></li></ol></td>\n\n                <td><ol><li *ngFor=\"let detail of data.get_branch_user\"> <a [routerLink]=\"['/branch/detail',{id:detail.get_branch.id}]\">{{detail.get_branch.name}}</a></li></ol></td>\n                <td><ol><li *ngFor=\"let detail of data.get_branch_user\"><span *ngIf=\"detail.get_class\">{{detail.get_class.key || '-'}}</span></li></ol></td>\n\n                <!--<td>{{helperService.getReadableDate(data.created_at)}}</td>-->\n                <!--<td>{{data.buildingName}}</td>-->\n                <!--<td>{{data.roomFunction}}</td>-->\n                <!--<td>{{data.roomName}}</td>-->\n                <!--<td>{{data.address}}</td>-->\n                <!--<td [innerHtml]=\"data.status | keepAsHtml\"></td>-->\n                <!--<td><img style=\"max-height: 100px;width: auto;\" class=\"\" alt=\"Main Photo\"  [src]=\"apiService.baseUrl + data.mainPhoto.path + data.mainPhoto.nameSm\"/></td>-->\n\n                <!--<td>-->\n                <!--<button   type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-simple btn-xs\">-->\n                <!--<i class=\"material-icons\">edit</i>-->\n                <!--</button>-->\n                <!--<button  (click)=\"apiExecuteDelete(selectData, currentColumn.id)\" type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">-->\n                <!--<i class=\"material-icons\">delete</i>-->\n                <!--</button>-->\n                <!--</td>-->\n\n\n              </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n\n        <app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>\n      </div>\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/page/module/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = "td ul, td ol {\n  padding-left: 0px; }\n"

/***/ }),

/***/ "./src/app/page/module/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(userService, apiService, helperService) {
        var _this = this;
        this.userService = userService;
        this.apiService = apiService;
        this.helperService = helperService;
        this.modalData = { baseForms: [], title: "", buttons: [] };
        this.rowBaseForms = [];
        this.title = "Module User";
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["c" /* FilterInterface */]();
        this.filterForm = [];
        this.readableModalData = [];
        this.approvalForm = [];
        this.formValueContainer = {};
        this.onClickPagination = function () {
            _this.apiExecuteGetTop(function (response) {
            });
        };
        this.initTop();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.initTop = function () {
        var _this = this;
        this.apiExecuteGetTop(function (response) {
            _this.setupFilterForm();
            _this.setupForms();
        });
    };
    UserComponent.prototype.setupForms = function () {
        this.rowBaseForms = [];
        var buildingName = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        this.rowBaseForms.push({
            baseForms: [name]
        });
    };
    UserComponent.prototype.setApprovalForm = function () {
        // this.approvalForm = [];
        // var approve = new BaseForm("Approval status","status");
        // approve.setInputTypeSelect(this.top.data.approveForm.status);
        //
        // approve.changeListener.subscribe((form)=>{
        //     reason.setIsRequired(form.value == "re");
        // });
        // // approve.setinput
        // this.approvalForm.push({
        //     baseForms:[approve]
        // });
        // var reason = new BaseForm("Reason (email)",'statusReason');
        // reason.setIsRequired(false);
        // reason.setInputTypeTextarea();
        // reason.infoBottom = "*Alasan ini akan dikirim dalam format email";
        // this.approvalForm.push({
        //     baseForms:[reason]
        // })
        //
    };
    UserComponent.prototype.setupFilterForm = function () {
        var _this = this;
        this.filterForm = [];
        var cmbRole = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Role", 'cmbRole');
        cmbRole.setInputTypeSelect(this.top.data.filter.cmbRole);
        cmbRole.value = this.filter.cmbRole;
        cmbRole.setIsRequired(false);
        cmbRole.changeListener.subscribe(function (baseForm) {
            _this.filter.cmbRole = baseForm.value;
        });
        var cmbBranch = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Branch / Cabang", 'cmbBranch');
        cmbBranch.setInputTypeSelect(this.top.data.filter.cmbBranch);
        cmbBranch.value = this.filter.cmbBranch;
        cmbBranch.setIsRequired(false);
        cmbBranch.changeListener.subscribe(function (baseForm) {
            _this.filter.cmbBranch = baseForm.value;
        });
        cmbBranch.classDisplay = 'col-xs-6';
        var cmbClass = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Class", 'cmbClass');
        cmbClass.setInputTypeSelect(this.top.data.filter.cmbClass);
        cmbClass.value = this.filter.cmbClass;
        cmbClass.setIsRequired(false);
        cmbClass.changeListener.subscribe(function (baseForm) {
            _this.filter.cmbClass = baseForm.value;
        });
        cmbClass.classDisplay = 'col-xs-6';
        var cmbSearchBy = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Search By", 'cmbSearchBy');
        cmbSearchBy.setInputTypeSelect(this.top.data.filter.cmbSearchBy);
        cmbSearchBy.value = this.filter.cmbSearchBy;
        cmbSearchBy.setIsRequired(false);
        cmbSearchBy.changeListener.subscribe(function (baseForm) {
            _this.filter.cmbSearchBy = baseForm.value;
        });
        cmbSearchBy.classDisplay = 'col-xs-6';
        var searchValue = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Search Value", 'searchValue');
        searchValue.value = this.filter.searchValue;
        searchValue.setIsRequired(false);
        searchValue.changeListener.subscribe(function (baseForm) {
            _this.filter.searchValue = baseForm.value;
        });
        searchValue.classDisplay = 'col-xs-6';
        this.filterForm.push({
            baseForms: [cmbRole, cmbBranch, cmbClass, cmbSearchBy, searchValue]
        });
    };
    UserComponent.prototype.apiExecuteGetTop = function (onFinished) {
        var _this = this;
        var params = {
            cmd: 'list',
        };
        params = this.helperService.mergeObject(params, this.filter);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/top',
            toastMessage: 'User module data',
            params: params,
        };
        this.apiService.get(config, function (response) {
            if (response.isSuccess) {
                _this.top = response;
                if (onFinished) {
                    onFinished(response);
                }
            }
        });
    };
    UserComponent.prototype.presentModal = function (type) {
        // this.setForm();
        if (type == 'newUser') {
            this.setupNewUserForm();
        }
    };
    UserComponent.prototype.setupNewUserForm = function () {
        var _this = this;
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = "Add new user";
        this.formValueContainer = {};
        var branch = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('SM Cabang', 'branch');
        branch.setInputTypeSelect(this.top.data.branches);
        branch.classDisplay = 'col-xs-4';
        var selectClass = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Kelas', 'selectClass');
        selectClass.setInputTypeSelect(this.top.data.selectClasses);
        selectClass.classDisplay = 'col-xs-4';
        var email = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Email', 'email');
        email.setInputTypeEmail();
        email.setIsRequired(false);
        // email.infoBottom = "Email untuk user 'murid', tidak membutuhkan email karena tidak perlu login. Hanya untuk melengkapi data saja. Tidak diharuskan agar tidak mempersulit pendataan murid"
        // email.setIsHidden(true, true);
        var name = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        name.classDisplay = 'col-xs-6';
        var nbg = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('NBG', 'nbg');
        nbg.infoBottom = "*Contoh B0001, B5099 dst";
        nbg.setIsRequired(false);
        nbg.classDisplay = 'col-xs-6';
        nbg.infoBottom = "NBG untuk user 'murid', tidak membutuhkan NBG karena tidak perlu login. Hanya untuk melengkapi data saja. Tidak diharuskan agar tidak mempersulit pendataan murid";
        //
        var address = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Address', 'address');
        address.classDisplay = 'col-xs-6';
        var phone = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Phone', 'phone');
        phone.classDisplay = 'col-xs-6';
        var selectRole = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Role / peran", "selectRole");
        selectRole.setInputTypeSelect(this.top.data.selectRoles);
        selectRole.changeListener.subscribe(function (baseForm) {
            if (baseForm.value == 'teacher') {
                nbg.infoBottom = "Penambahan guru membutuhkan data nbg dibutuhkan untuk  fitur login, dan menggunakan modul di website ini";
            }
            if (baseForm.value == 'pupil') {
                nbg.infoBottom = "User 'murid', tidak membutuhkan email karena tidak perlu login. Hanya untuk melengkapi data saja. Tidak diharuskan agar tidak mempersulit pendataan murid";
            }
            // email.setIsRequired(baseForm.value == 'teacher');
            nbg.setIsRequired(baseForm.value == 'teacher');
        });
        selectRole.classDisplay = 'col-xs-4';
        var birthDate = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Birth Date / Tanggal Lahir', 'birthDate');
        birthDate.inputType = __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["b" /* InputType */].date;
        var fatherName = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Father Name', 'father');
        fatherName.classDisplay = 'col-xs-6';
        fatherName.setIsRequired(false);
        var fatherPhone = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('Father phone', 'fatherPhone');
        fatherPhone.classDisplay = 'col-xs-6';
        fatherPhone.setIsRequired(false);
        var motherName = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('mother Name', 'mother');
        motherName.classDisplay = 'col-xs-6';
        motherName.setIsRequired(false);
        var motherPhone = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]('mother phone', 'motherPhone');
        motherPhone.classDisplay = 'col-xs-6';
        motherPhone.setIsRequired(false);
        this.modalData.baseForms = [{
                baseForms: [selectRole, branch, selectClass, email, name, nbg, address, phone, birthDate, fatherName, fatherPhone, motherName, motherPhone]
            }];
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: function (form) {
                _this.submitNewUserForm(form);
            }
        });
    };
    UserComponent.prototype.submitNewUserForm = function (form) {
        var _this = this;
        if (form.valid) {
            this.formValueContainer['cmd'] = 'addUser',
                this.formValueContainer = this.helperService.mergeObject(this.formValueContainer, form.value);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    UserComponent.prototype.apiExecuteSubmitForm = function (params) {
        var _this = this;
        console.log('apiFormSubmit', params);
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + 'user/op',
            params: params,
            toastMessage: 'Submitting form',
        };
        this.apiService.post(config, function (data) {
            console.log(data);
            _this.apiExecuteGetTop();
            _this.helperService.closeModal();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('formModal'),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "formModal", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/page/module/user/user.component.html"),
            styles: [__webpack_require__("./src/app/page/module/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */]) === "function" && _c || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/app/page/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/page/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/page/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/page/thread/thread-detail/thread-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"top && top.data.thread else noDataFound\">\n\n\n\n  <!--TITLE THREAD-->\n  <div class=\"container-fluid title\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\" style=\"text-align: center; \">\n        <div class=\"\" >\n          <h4 style=\"margin: 0; color: black; font-weight: bold\">{{top.data.thread.title}}</h4>\n          <p>Created by {{top.data.thread.get_creator.name}}</p>\n          <p>Date: {{helperService.getReadableDate(top.data.thread.created_at)}}</p>\n          <!--<p>{{helperService.getReadableDate(data.created_at)}}</p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--REPLIES-->\n  <div class=\"container-fluid\" >\n    <div class=\"row \" *ngFor=\"let data of top.data.thread.get_replies; let i = index;\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" [ngClass]=\"{mySelf: data.get_user.id == userService.userData.id, notMySelf:data.get_user.id != userService.userData.id }\" >\n            <h4    class=\"title\" style=\"display: block\">{{data.get_user.name}}</h4>\n            <p style=\"color:white\">{{helperService.getReadableDate(data.created_at)}}</p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <div >\n              <div class=\"thread\" >\n\n\n                <p>{{data.content}}</p>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>-->\n      </div>\n\n\n    </div>\n\n\n    <!--container fluid-->\n  </div>\n\n\n\n\n\n\n  <!--my reply-->\n  <div class=\"container-fluid\" >\n    <div class=\"row\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <!--<div class=\"card-header\" data-background-color=\"red\">-->\n            <!--<h4    class=\"title\" style=\"display: block\">Reply to this thread</h4>-->\n          <!--</div>-->\n          <div class=\"card-content table-responsive\">\n\n            <div >\n              <div class=\"thread\" >\n\n                <form #parentForm=\"ngForm\">\n                  <app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"rowBaseForms\"></app-row-floating-input>\n\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"this.submitReply(parentForm)\" >Submit Reply</button>\n                </form>\n\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.users\"></app-pagination>-->\n      </div>\n\n\n    </div>\n\n\n    <!--container fluid-->\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n\n\n\n<app-my-modal [modalData]=\"modalData\"></app-my-modal>\n\n\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/page/thread/thread-detail/thread-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".notMySelf {\n  background: linear-gradient(60deg, #26c6da, #00acc1) !important; }\n\n.mySelf {\n  background: linear-gradient(60deg, #ef5350, #e53935) !important; }\n"

/***/ }),

/***/ "./src/app/page/thread/thread-detail/thread-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ThreadDetailComponent = /** @class */ (function () {
    function ThreadDetailComponent(changeDetectorRef, helperService, activatedRoute, apiService, userService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.userService = userService;
        this.param = {};
        this.top = { isSuccess: false, message: "" };
        this.title = 'branch';
        this.rowBaseForms = [];
        this.formValueContainer = {};
        this.modalData = {
            title: "Apply form",
            baseForms: [],
            buttons: [],
        };
        this.activatedRoute.params.subscribe(function (data) {
            _this.param.id = data['id'];
            console.log('param', data);
            _this.topInit();
        });
    }
    ThreadDetailComponent.prototype.ngOnInit = function () {
    };
    ThreadDetailComponent.prototype.topInit = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupButtonLogic();
            _this.setupForm();
        });
    };
    ThreadDetailComponent.prototype.setupButtonLogic = function () {
    };
    ThreadDetailComponent.prototype.setupForm = function () {
        this.rowBaseForms = [];
        var reply = new __WEBPACK_IMPORTED_MODULE_3__components_floating_input_BaseForm__["a" /* BaseForm */]("Reply", "content");
        reply.setInputTypeTextarea();
        this.rowBaseForms.push({ baseForms: [reply] });
        this.setEditableForm();
    };
    ThreadDetailComponent.prototype.setEditableForm = function () {
        this.rowBaseForms.forEach(function (rowBaseForm) {
            rowBaseForm.baseForms.forEach(function (baseForm) {
                if (!baseForm.isReadOnly) {
                    // baseForm.setIsReadOnly(!this.isCanEditProfile);
                }
            });
        });
    };
    ThreadDetailComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "thread/top",
            params: { id: this.param.id, cmd: 'detail' },
        };
        this.apiService.get(config, function (data) {
            console.log('top', data);
            _this.top = data;
            onFinish();
        });
    };
    ThreadDetailComponent.prototype.apiExecuteSubmitReply = function (json) {
        var _this = this;
        var params = {
            cmd: 'reply',
            id: this.top.data.thread.id,
        };
        params = this.helperService.mergeObject(json, params);
        var url = __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "thread/op";
        var config = {
            url: url,
            params: json,
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                _this.topInit();
            }
        });
    };
    ThreadDetailComponent.prototype.presentModal = function (type) {
        // this.setForm();
        if (type == 'pupil' || type == 'teacher') {
            // this.setupFindUserForm(type)
        }
    };
    ThreadDetailComponent.prototype.submitReply = function (form) {
        var _this = this;
        if (form.valid) {
            // this.formValueContainer['id'] = this.top.data.branch.id
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitReply(form.value);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    ThreadDetailComponent.prototype.apiExecuteChangeClass = function (branchUser, form) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "branch/op";
        var config = {
            url: url,
            params: {
                id: branchUser.id,
                class: form.value,
                cmd: 'changeClass',
            },
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                // this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    ThreadDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-thread-detail',
            template: __webpack_require__("./src/app/page/thread/thread-detail/thread-detail.component.html"),
            styles: [__webpack_require__("./src/app/page/thread/thread-detail/thread-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_api_api_service__["b" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
    ], ThreadDetailComponent);
    return ThreadDetailComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=thread-detail.component.js.map

/***/ }),

/***/ "./src/app/page/thread/thread-list/thread-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  thread-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/thread/thread-list/thread-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/thread/thread-list/thread-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreadListComponent = /** @class */ (function () {
    function ThreadListComponent() {
    }
    ThreadListComponent.prototype.ngOnInit = function () {
    };
    ThreadListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-thread-list',
            template: __webpack_require__("./src/app/page/thread/thread-list/thread-list.component.html"),
            styles: [__webpack_require__("./src/app/page/thread/thread-list/thread-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreadListComponent);
    return ThreadListComponent;
}());

//# sourceMappingURL=thread-list.component.js.map

/***/ }),

/***/ "./src/app/pipe/isLoggedIn/is-logged-in.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsLoggedInPipe = /** @class */ (function () {
    function IsLoggedInPipe(userService) {
        this.userService = userService;
    }
    IsLoggedInPipe.prototype.transform = function (value, args) {
        console.log('isLoggedInPipe');
        if (!this.userService.isLoggedIn) {
            return "Not logged in";
        }
        return value ? value : "No value";
    };
    IsLoggedInPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'isLoggedIn'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], IsLoggedInPipe);
    return IsLoggedInPipe;
    var _a;
}());

//# sourceMappingURL=is-logged-in.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/keep-as-html/keep-as-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepAsHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepAsHtmlPipe = /** @class */ (function () {
    function KeepAsHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepAsHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return '-';
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
        // return value.toLowerCase();
    };
    KeepAsHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'keepAsHtml'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
    ], KeepAsHtmlPipe);
    return KeepAsHtmlPipe;
    var _a;
}());

//# sourceMappingURL=keep-as-html.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/keep-as-src/keep-as-src.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepAsSrcPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepAsSrcPipe = /** @class */ (function () {
    function KeepAsSrcPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepAsSrcPipe.prototype.transform = function (value, args) {
        console.log('keepAsSrc', value);
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    KeepAsSrcPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'keepAsSrc'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
    ], KeepAsSrcPipe);
    return KeepAsSrcPipe;
    var _a;
}());

//# sourceMappingURL=keep-as-src.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLoggedIn_is_logged_in_pipe__ = __webpack_require__("./src/app/pipe/isLoggedIn/is-logged-in.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uc_word_uc_word_pipe__ = __webpack_require__("./src/app/pipe/uc-word/uc-word.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keep_as_html_keep_as_html_pipe__ = __webpack_require__("./src/app/pipe/keep-as-html/keep-as-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_parsing_status_parsing_pipe__ = __webpack_require__("./src/app/pipe/status-parsing/status-parsing.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keep_as_src_keep_as_src_pipe__ = __webpack_require__("./src/app/pipe/keep-as-src/keep-as-src.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__isLoggedIn_is_logged_in_pipe__["a" /* IsLoggedInPipe */],
                __WEBPACK_IMPORTED_MODULE_2__uc_word_uc_word_pipe__["a" /* UcWordPipe */],
                __WEBPACK_IMPORTED_MODULE_3__keep_as_html_keep_as_html_pipe__["a" /* KeepAsHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_4__status_parsing_status_parsing_pipe__["a" /* StatusParsingPipe */],
                __WEBPACK_IMPORTED_MODULE_5__keep_as_src_keep_as_src_pipe__["a" /* KeepAsSrcPipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__isLoggedIn_is_logged_in_pipe__["a" /* IsLoggedInPipe */],
                __WEBPACK_IMPORTED_MODULE_2__uc_word_uc_word_pipe__["a" /* UcWordPipe */],
                __WEBPACK_IMPORTED_MODULE_3__keep_as_html_keep_as_html_pipe__["a" /* KeepAsHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_4__status_parsing_status_parsing_pipe__["a" /* StatusParsingPipe */],
                __WEBPACK_IMPORTED_MODULE_5__keep_as_src_keep_as_src_pipe__["a" /* KeepAsSrcPipe */],
            ],
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ "./src/app/pipe/status-parsing/status-parsing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusParsingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusParsingPipe = /** @class */ (function () {
    function StatusParsingPipe() {
    }
    StatusParsingPipe.prototype.transform = function (value, args) {
        return null;
    };
    StatusParsingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'statusParsing'
        })
    ], StatusParsingPipe);
    return StatusParsingPipe;
}());

//# sourceMappingURL=status-parsing.pipe.js.map

/***/ }),

/***/ "./src/app/pipe/uc-word/uc-word.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcWordPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyHelper__ = __webpack_require__("./src/app/MyHelper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UcWordPipe = /** @class */ (function () {
    function UcWordPipe() {
    }
    UcWordPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1__MyHelper__["a" /* MyHelper */].ucWord(value);
    };
    UcWordPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'ucWord'
        })
    ], UcWordPipe);
    return UcWordPipe;
}());

//# sourceMappingURL=uc-word.pipe.js.map

/***/ }),

/***/ "./src/app/service/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FilterInterface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MyHelper__ = __webpack_require__("./src/app/MyHelper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(httpClient, helperService) {
        this.httpClient = httpClient;
        this.helperService = helperService;
        this.baseApiUrl = ApiService_1.BASE_API_URL;
        this.baseUrl = ApiService_1.BASE_URL;
    }
    ApiService_1 = ApiService;
    ApiService.prototype.setUser = function (userService) {
        this.userService = userService;
    };
    ApiService.prototype.getHttpParams = function (object) {
    };
    ApiService.prototype.get = function (config, onFinish) {
        var _this = this;
        console.log('apiGet', config.url, config);
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        for (var key in config.params) {
            var value = config.params[key];
            // if(isObject(value)){
            //     var copyValue = []
            //     for(var key in value){
            //         copyValue[key] = value;
            //     }
            //     value = copyValue;
            //
            // }
            httpParams = httpParams.append(key, value);
        }
        // this.helperService.presentToast({title: 'Loading', message: config.toastMessage, type: NotificationTypeInterface.info});
        this.httpClient.get(config.url, { withCredentials: true, params: httpParams }).toPromise().then(function (result) {
            // this.showServerResponse(result);
            if (!result['isSuccess'] && result['message']) {
                _this.showServerResponse(result);
            }
            onFinish(result);
        }).catch(function (rejected) {
            console.log(rejected, config.url);
            if (rejected && (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                _this.userService.logout(false);
                //this.helperService.presentNotification('Not Authenticated', NotificationTypeInterface.danger);
                _this.helperService.presentToast({ message: "You are not authenticated", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
            }
            else {
                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);
                _this.helperService.presentToast({ message: "Network Error", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
            }
        });
    };
    ApiService.prototype.post = function (config, onFinish) {
        var _this = this;
        if (!config.isSilent) {
            this.helperService.presentToast({ title: 'Submiting action', message: config.toastMessage, type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].info });
        }
        var formData = new FormData();
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        httpHeaders.set("Content-Type", 'multipart/form-data');
        for (var key in config.params) {
            formData.append(key, config.params[key]);
        }
        this.httpClient.post(config.url, formData, { withCredentials: true, headers: httpHeaders }).toPromise().then(function (result) {
            _this.showServerResponse(result);
            if (!result['isSuccess'] && result['message']) {
                // this.showServerResponse(result);
            }
            onFinish(result);
        }).catch(function (rejected) {
            console.log(rejected, config.url);
            if (rejected && (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                _this.userService.logout(false);
                _this.helperService.presentToast({ message: "You are not authenticated", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
            }
            else {
                try {
                    if (rejected['error']) {
                        var error = JSON.parse(rejected['error']);
                        for (var key in error) {
                            var value = error[key];
                            _this.helperService.presentToast({ type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger, title: __WEBPACK_IMPORTED_MODULE_4__MyHelper__["a" /* MyHelper */].ucWord(key), message: value });
                        }
                    }
                    else {
                        _this.helperService.presentToast({ message: "Network Error", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
                    }
                }
                catch (e) {
                }
                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);
            }
        });
    };
    ApiService.prototype.multiDimensionalPost = function (config, onFinish) {
        var _this = this;
        if (!config.isSilent) {
            this.helperService.presentToast({ title: 'Submiting action', message: config.toastMessage, type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].info });
        }
        this.httpClient.post(config.url, config.params, { withCredentials: true }).toPromise().then(function (result) {
            _this.showServerResponse(result);
            if (!result['isSuccess'] && result['message']) {
                // this.showServerResponse(result);
            }
            onFinish(result);
        }).catch(function (rejected) {
            console.log(rejected, config.url);
            if (rejected && (rejected.statusText && (rejected.statusText.toLowerCase().indexOf('unauthorized') > -1) || rejected.statusText.toLowerCase().indexOf('unauthenticated') > -1)) {
                _this.userService.logout(false);
                _this.helperService.presentToast({ message: "You are not authenticated", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
            }
            else {
                try {
                    if (rejected['error']) {
                        var error = JSON.parse(rejected['error']);
                        for (var key in error) {
                            var value = error[key];
                            _this.helperService.presentToast({ type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger, title: __WEBPACK_IMPORTED_MODULE_4__MyHelper__["a" /* MyHelper */].ucWord(key), message: value });
                        }
                    }
                }
                catch (e) {
                }
                //this.helperService.presentNotification('Cannot fulfill request', NotificationTypeInterface.danger);
                _this.helperService.presentToast({ message: "Network Error", type: __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger });
            }
        });
    };
    ApiService.prototype.showServerResponse = function (result) {
        if (typeof result['isSuccess'] !== 'undefined' && typeof result['message'] !== 'undefined') {
            var isSuccess = this.helperService.parseBoolean(result['isSuccess']);
            var message = result['message'];
            if (message == '') {
                return;
            }
            var notificationType = isSuccess ? __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].success : __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["b" /* NotificationTypeInterface */].danger;
            this.helperService.presentToast({ title: 'Response', message: message, type: notificationType });
        }
    };
    // public static BASE_API_URL:string = "http://192.168.1.9:8111/sewaRuang/api/";
    // public static BASE_API_URL: string = 'http://localhost/sewaRuang/api/';
    // public static BASE_URL: string = 'http://localhost/sewaRuang/';
    //
    //
    //
    ApiService.BASE_API_URL = 'https://bukitzaitunsm.com/api/';
    ApiService.BASE_URL = 'https://bukitzaitunsm.com/';
    ApiService = ApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["a" /* HelperService */]) === "function" && _b || Object])
    ], ApiService);
    return ApiService;
    var ApiService_1, _a, _b;
}());

var FilterInterface = /** @class */ (function () {
    function FilterInterface() {
        this.cmbStatus = '';
        this.page = 1;
        this.searchValue = '';
        this.cmbSearchBy = '';
        this.cmbClass = '';
        this.cmbBranch = '';
        this.cmbRole = '';
        this.isOpen = true;
        this.cmbEventType = "";
    }
    return FilterInterface;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "./src/app/service/helper/helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationTypeInterface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr__ = __webpack_require__("./node_modules/toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MyHelper__ = __webpack_require__("./src/app/MyHelper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var toastr:any;
var HelperService = /** @class */ (function () {
    function HelperService() {
        this.pageParameter = {};
        this.setJquery();
    }
    HelperService.prototype.setJquery = function () {
        $(document).ready(function () {
        });
    };
    HelperService.prototype.getParam = function (pageParameter) {
        this.pageParameter = pageParameter;
    };
    HelperService.prototype.setParam = function () {
        return this.pageParameter;
    };
    HelperService.prototype.presentToast = function (config) {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["options"] = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "8000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
        };
        switch (config.type || NotificationTypeInterface.info) {
            case NotificationTypeInterface.info:
                __WEBPACK_IMPORTED_MODULE_1_toastr__["info"](config.message || "", config.title || "Info");
                break;
            case NotificationTypeInterface.warning:
                __WEBPACK_IMPORTED_MODULE_1_toastr__["warning"](config.message || "", config.title || "Warning");
                break;
            case NotificationTypeInterface.danger:
                __WEBPACK_IMPORTED_MODULE_1_toastr__["error"](config.message || "", config.title || "Danger");
                break;
            case NotificationTypeInterface.success:
                __WEBPACK_IMPORTED_MODULE_1_toastr__["success"](config.message || "", config.title || "Success");
                break;
        }
        console.log('toast', __WEBPACK_IMPORTED_MODULE_1_toastr__);
    };
    HelperService.prototype.presentNotification = function (message, notificationType, from, align) {
        if (notificationType === void 0) { notificationType = NotificationTypeInterface.success; }
        if (from === void 0) { from = "top"; }
        if (align === void 0) { align = "center"; }
        var type = NotificationTypeInterface[notificationType];
        var milisecond = 1000;
        $.notify({
            icon: "notifications",
            message: message,
        }, {
            type: type,
            time: milisecond,
            duration: milisecond,
            timer: milisecond,
            placement: {
                from: from,
                align: align
            }
        });
    };
    HelperService.prototype.presentConfirmation = function (config, onConfirmed) {
        if (config === void 0) { config = {}; }
        $.confirm({
            title: config.title || 'Confirmation',
            content: config.message || 'Are you sure to continue?',
            buttons: {
                cancel: {
                    text: 'Cancel',
                    btnClass: 'btn-danger',
                    keys: ['esc'],
                    action: function () {
                        onConfirmed(false);
                    }
                },
                confirm: {
                    btnClass: 'btn-success',
                    action: function () {
                        onConfirmed(true);
                    }
                },
            }
        });
    };
    HelperService.prototype.presentAlert = function (config) {
        if (config === void 0) { config = {}; }
        $.alert({
            title: config.title || 'Attention',
            content: config.message || '',
            button: {
                ok: {
                    text: 'Ok',
                    btnClass: 'btn-danger',
                    keys: ['esc'],
                    action: function () {
                    }
                }
            }
        });
    };
    HelperService.prototype.closeModal = function () {
        $('.myModal').modal('hide');
        $('#myModal').modal('hide');
    };
    HelperService.prototype.mergeObject = function (a, b) {
        Object.keys(b).forEach(function (key) { a[key] = b[key]; });
        return a;
    };
    HelperService.prototype.parseBoolean = function (value) {
        if (typeof (value) === 'string') {
            value = value.trim().toLowerCase();
        }
        switch (value) {
            case true:
            case "true":
            case 1:
            case "1":
            case "on":
            case "yes":
                return true;
            default:
                return false;
        }
    };
    HelperService.prototype.getReadableDate = function (param) {
        var date = null;
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (typeof param === 'string') {
            date = new Date(param);
        }
        if (param instanceof Date) {
            date = param;
        }
        // console.log('getReadableDate',date);
        if (date) {
            var month = months[date.getMonth()];
            var hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
            var minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            var second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
            return days[date.getDay()] + " " + date.getDate() + " " + month + " " + date.getFullYear();
        }
        return "-";
    };
    HelperService.prototype.ucWord = function (param) {
        return __WEBPACK_IMPORTED_MODULE_2__MyHelper__["a" /* MyHelper */].ucWord(param);
    };
    HelperService.prototype.clone = function (obj) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj)
            return obj;
        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }
        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr))
                    copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());

var NotificationTypeInterface;
(function (NotificationTypeInterface) {
    NotificationTypeInterface[NotificationTypeInterface["info"] = 0] = "info";
    NotificationTypeInterface[NotificationTypeInterface["success"] = 1] = "success";
    NotificationTypeInterface[NotificationTypeInterface["warning"] = 2] = "warning";
    NotificationTypeInterface[NotificationTypeInterface["danger"] = 3] = "danger";
})(NotificationTypeInterface || (NotificationTypeInterface = {}));
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "./src/app/service/my-local-storage/my-local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyLocalStorageService = /** @class */ (function () {
    function MyLocalStorageService() {
        this.key = {
            email: "asdf1234Username",
            password: "asdf1234Password",
        };
    }
    MyLocalStorageService.prototype.getEmail = function () {
        return localStorage.getItem(this.key.email);
    };
    MyLocalStorageService.prototype.setEmail = function (value) {
        if (!value) {
            localStorage.removeItem(this.key.email);
            return;
        }
        localStorage.setItem(this.key.email, value);
    };
    MyLocalStorageService.prototype.setPassword = function (value) {
        if (!value) {
            localStorage.removeItem(this.key.password);
            return;
        }
        localStorage.setItem(this.key.password, value);
    };
    MyLocalStorageService.prototype.getPassword = function () {
        return localStorage.getItem(this.key.password);
    };
    MyLocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MyLocalStorageService);
    return MyLocalStorageService;
}());

//# sourceMappingURL=my-local-storage.service.js.map

/***/ }),

/***/ "./src/app/service/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* unused harmony export UserDataInterface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_local_storage_my_local_storage_service__ = __webpack_require__("./src/app/service/my-local-storage/my-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(apiService, localStorage, helperService) {
        this.apiService = apiService;
        this.localStorage = localStorage;
        this.helperService = helperService;
        this.userData = new UserDataInterface();
        this.isLoggedIn = false;
        UserService_1.staticApiService = apiService;
    }
    UserService_1 = UserService;
    UserService.prototype.loginLocalStorage = function () {
        if (this.localStorage.getEmail() && this.localStorage.getPassword()) {
            this.apiExecuteLogin(this.localStorage.getEmail(), this.localStorage.getPassword());
        }
    };
    UserService.prototype.isMe = function (id) {
        return id == this.userData.id;
    };
    UserService.prototype.apiExecuteLogin = function (nbg, password) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__api_api_service__["b" /* ApiService */].BASE_API_URL + "user/login";
        var params = { nbg: nbg, password: password };
        var config = {
            url: url,
            params: params,
            toastMessage: "Logging in",
        };
        this.apiService.post(config, function (response) {
            if (response.isSuccess) {
                _this.userData = response.data.user;
                _this.token = response.data.token;
                _this.isLoggedIn = true;
                _this.localStorage.setEmail(nbg);
                _this.localStorage.setPassword(password);
                //this.helperService.presentNotification(`Welcome back ${response.data.allUser.name}`);
                console.log('userLoggedIn', _this);
            }
            else {
                //this.helperService.presentNotification("Wrong username or password", NotificationTypeInterface.danger);
            }
        });
    };
    UserService.prototype.logout = function (isWithApi) {
        if (isWithApi === void 0) { isWithApi = true; }
        this.isLoggedIn = false;
        this.token = '';
        this.userData = new UserDataInterface();
        this.localStorage.setPassword(null);
        this.localStorage.setEmail(null);
        this.notification = null;
        if (isWithApi) {
            this.apiExecuteLogout();
        }
        console.log('logout');
    };
    UserService.prototype.apiExecuteLogout = function () {
        this.apiService.get({ url: __WEBPACK_IMPORTED_MODULE_1__api_api_service__["b" /* ApiService */].BASE_API_URL + "user/logout" }, function () {
        });
    };
    UserService.apiExecuteGetUserById = function (id, onFinish) {
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_1__api_api_service__["b" /* ApiService */].BASE_API_URL + "user/detail",
            params: {
                id: id
            },
            isSilent: true,
        };
        if (this.staticApiService) {
            this.staticApiService.post(config, function (response) {
                if (response.data.user) {
                    onFinish(response.data.user);
                }
            });
        }
        else {
            console.log('ApiServiceError');
        }
    };
    UserService.staticApiService = null;
    UserService = UserService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["b" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__my_local_storage_my_local_storage_service__["a" /* MyLocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__my_local_storage_my_local_storage_service__["a" /* MyLocalStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helper_helper_service__["a" /* HelperService */]) === "function" && _c || Object])
    ], UserService);
    return UserService;
    var UserService_1, _a, _b, _c;
}());

var UserDataInterface = /** @class */ (function () {
    function UserDataInterface() {
        this.isSuccess = false;
        this.message = "";
        this.email = "";
        this.id = -1;
        this.name = "";
        this.birthDate = "";
        this.reset = -1;
        this.phone = "";
        this.address = "";
        this.created_at = "";
        this.nbg = "";
        this.get_previledge = { key: "", value: "" };
    }
    return UserDataInterface;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Simple Table</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-danger\">\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                    <th>Salary</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Dakota Rice</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                    <td class=\"text-danger\">$36,738</td>\n                                </tr>\n                                <tr>\n                                    <td>Minerva Hooper</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                    <td class=\"text-danger\">$23,789</td>\n                                </tr>\n                                <tr>\n                                    <td>Sage Rodriguez</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                    <td class=\"text-danger\">$56,142</td>\n                                </tr>\n                                <tr>\n                                    <td>Philip Chaney</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                    <td class=\"text-danger\">$38,735</td>\n                                </tr>\n                                <tr>\n                                    <td>Doris Greene</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                    <td class=\"text-danger\">$63,542</td>\n                                </tr>\n                                <tr>\n                                    <td>Mason Porter</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                    <td class=\"text-danger\">$78,615</td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Salary</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Doris Greene</td>\n                                    <td>$63,542</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>Mason Porter</td>\n                                    <td>$78,615</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("./src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\n                    <p class=\"category\">Created using Roboto Font Family</p>\n                </div>\n                <div class=\"card-content\">\n                    <div id=\"typography\">\n                        <div class=\"title\">\n                            <h2>Typography</h2>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"tim-typo\">\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <p><span class=\"tim-note\">Paragraph</span>\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Quote</span>\n                                <blockquote>\n                                 <p>\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                                 </p>\n                                 <small>\n                                 Kanye West, Musician\n                                 </small>\n                                </blockquote>\n                            </div>\n\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Muted Text</span>\n                                <p class=\"text-muted\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Primary Text</span>\n                                <p class=\"text-primary\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Info Text</span>\n                                <p class=\"text-info\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Success Text</span>\n                                <p class=\"text-success\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Warning Text</span>\n                                <p class=\"text-warning\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Danger Text</span>\n                                <p class=\"text-danger\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Small Tag</span>\n                                    Header with small subtitle <br>\n                                    <small>Use \"small\" tag for the headers</small>\n                                </h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"top\">\n<div class=\"container-fluid\"  *ngIf=\"this.top.isSuccess else notSucceed\">\n    <div class=\"row\">\n\n\n\n        <div class=\"col-md-4\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a *ngIf=\"this.top.data.user.get_photo\"   data-fancybox=\"gallery\" [href]=\"apiService.baseUrl + this.top.data.user.get_photo.path + this.top.data.user.get_photo.nameLg\">\n                        <img class=\"img\" [src]=\"apiService.baseUrl + this.top.data.user.get_photo.path + this.top.data.user.get_photo.nameSm\"/>\n                    </a>\n\n                    <a *ngIf=\"!this.top.data.user.get_photo\" >\n                        <img  src=\"/assets/img/user/default.png\" />\n\n                    </a>\n\n                </div>\n\n                <div class=\"content\">\n                    <h4 class=\"card-title\">{{top.data.user.name}}</h4>\n                    <h6 class=\"category\" style=\"color:tomato;\">{{top.data.user.get_previledge.key}}</h6>\n\n                    <p class=\"card-content\">\n                        <!--Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...-->\n                    <!--</p>-->\n                    <!--<a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>-->\n                </div>\n\n            </div>\n\n            <button (click)=\"presentModal('giveScore')\" class=\"btn btn-info centerMargin\" *ngIf=\"top.data.isCanScore\" data-target=\"#modal\" data-toggle=\"modal\">Give score / penilaian</button>\n        </div>\n\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Edit Profile</h4>\n                    <p class=\"category\">Complete your profile</p>\n                </div>\n                <div class=\"card-content\">\n                    <form #parentForm=\"ngForm\">\n\n                        <app-row-floating-input [parentForm]=\"parentForm\" [rowBaseForms]=\"this.rowBaseForms\"></app-row-floating-input>\n\n\n                        <button *ngIf=\"this.isCanEditProfile\" type=\"button\" (click)=\"submitUpdateProfileForm(parentForm)\" class=\"btn btn-info pull-right\">Update Profile</button>\n                        <p *ngIf=\"!this.isCanEditProfile\"><span style=\"color:tomato;\">*</span>You don't have permission to edit this profile</p>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n\n    <!--row-->\n    </div>\n\n\n\n    <!--SMCABANG-->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.user\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\" style=\"display: inline-block\">Sekolah Minggu</h4>\n                    <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                    <!--<p class=\"category\"></p>-->\n                </div>\n                <div class=\"card-content table-responsive\" *ngIf=\"this.top.data.user.get_branch_user.length > 0 else noDataFound\">\n                    <table class=\"table\">\n                        <thead class=\"text-danger\">\n                        <tr>\n                            <th>No</th>\n                            <th>Aktif</th>\n                            <th>Role</th>\n                            <th>Nama Cabang</th>\n                            <th>Alamat Cabang</th>\n                            <th>Ketua Cabang</th>\n                            <th>Tanggal Masuk</th>\n                            <th>Tanggal Keluar</th>\n                            <th>Kelas</th>\n\n                            <!--<th>Action</th>-->\n                        </tr>\n                        </thead>\n                        <tbody >\n                        <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.user.get_branch_user; let i = index\"  >\n                            <td>{{i + 1}}</td>\n                            <td>{{data.isActive ? \"Aktif\" : \"Non-Aktif\"}}</td>\n                            <td>{{data.get_role.key}}</td>\n                            <td><a [routerLink]=\"['/branch/detail',{id:data.get_branch.id}]\">{{data.get_branch.name}}</a></td>\n                            <td>{{data.get_branch.address}}</td>\n                            <td><a *ngIf=\"data.get_branch.get_head\" [routerLink]=\"['/profile',{id:data.get_branch.get_head.id}]\">{{data.get_branch.get_head.name}}</a></td>\n                            <td>{{helperService.getReadableDate(data.dateIn)}}</td>\n                            <td>{{helperService.getReadableDate(data.dateOut)}}</td>\n                            <td>{{data.get_class.key}}</td>\n\n                        </tr>\n\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n        </div>\n\n\n    <!--row-->\n    </div>\n\n\n\n    <!-- rapot -->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.user && this.top.data.user.get_me_as_pupil_scores\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\" style=\"display: inline-block\">Rapot <span *ngIf=\"top.data.user\"> {{top.data.user.name}}</span></h4>\n                    <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                    <!--<p class=\"category\"></p>-->\n                </div>\n                <div class=\"card-content table-responsive\" *ngIf=\"this.top.data.user.get_me_as_pupil_scores.length > 0 else noDataFound\">\n                    <table class=\"table\">\n                        <thead class=\"text-danger\">\n                        <tr>\n                            <th>No</th>\n                            <th>Date</th>\n                            <th>Origin reporter</th>\n                            <th>Last editor</th>\n                            <th>Description</th>\n                            <th>status</th>\n\n\n                            <!--<th>Action</th>-->\n                        </tr>\n                        </thead>\n                        <tbody >\n                        <tr data-toggle=\"modal\" data-target=\"#modal\" (click)=\"presentModal('giveScore',data)\" appMarkClicked=\"\" *ngFor=\"let data of top.data.user.get_me_as_pupil_scores; let i = index\" >\n                            <td>{{i + 1}}</td>\n                            <td>{{helperService.getReadableDate(data.created_at)}}</td>\n                            <td><a [routerLink]=\"['/profile',{id:data.get_teacher.id}]\">{{data.get_teacher.name}}</a></td>\n                            <td><a *ngIf=\"data.get_last_editor_user\" [routerLink]=\"['/profile',{id:data.get_last_editor_user.id}]\">{{data.get_last_editor_user.name}}</a></td>\n                            <td>{{data.description}}</td>\n                            <td><span *ngIf=\"data.get_select_score_status\">{{data.get_select_score_status.key}}</span></td>\n                        </tr>\n\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n        </div>\n\n\n    <!--row-->\n    </div>\n\n\n\n    <!--Pemberi Nilai-->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.user && this.top.data.user.get_me_as_teacher_scores\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\" style=\"display: inline-block\"><span *ngIf=\"top.data.user\">{{top.data.user.name}}</span> sebagai sumber penilaian</h4>\n\n                    <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                    <!--<p class=\"category\"></p>-->\n                </div>\n                <div class=\"card-content table-responsive\" *ngIf=\"this.top.data.user.get_me_as_pupil_scores.length > 0 else noDataFound\">\n                    <table class=\"table\">\n                        <thead class=\"text-danger\">\n                        <tr>\n                            <th>No</th>\n                            <th>Date</th>\n                            <th>Target penilaian</th>\n                            <th>Description</th>\n\n\n                            <!--<th>Action</th>-->\n                        </tr>\n                        </thead>\n                        <tbody >\n                        <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.user.get_me_as_teacher_scores; let i = index\"  >\n                            <td>{{i + 1}}</td>\n                            <td>{{helperService.getReadableDate(data.created_at)}}</td>\n                            <td><a [routerLink]=\"['/profile',{id:data.get_pupil.id}]\">{{data.get_pupil.name}}</a></td>\n                            <td>{{data.description}}</td>\n                        </tr>\n\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n        </div>\n\n\n    <!--row-->\n    </div>\n\n\n<!--HISTORY-->\n    <div class=\"row\" *ngIf=\"this.top && this.top.data.user && this.top.data.user.get_histories\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\" style=\"display: inline-block\">History user</h4>\n                    <!--<button data-target=\"#formModal \" data-toggle=\"modal\"  (click)=\"presentModal(selectData)\"  class=\"pull-right btn btn-primary\"><i class=\"material-icons\">playlist_add</i> Add new for {{selectData.key}}</button>-->\n                    <!--<p class=\"category\"></p>-->\n                </div>\n                <div class=\"card-content table-responsive\" *ngIf=\"this.top.data.user.get_histories.length > 0 else noDataFound\">\n                    <table class=\"table\">\n                        <thead class=\"text-danger\">\n                        <tr>\n                            <th>No</th>\n                            <th>Date</th>\n                            <th>Event</th>\n                            <th>Description</th>\n\n\n                            <!--<th>Action</th>-->\n                        </tr>\n                        </thead>\n                        <tbody >\n                        <tr appMarkClicked=\"\" *ngFor=\"let data of top.data.user.get_histories; let i = index\"  >\n                            <td>{{i + 1}}</td>\n                            <td>{{helperService.getReadableDate(data.created_at)}}</td>\n                            <td>{{data.get_event.key}}</td>\n                            <td>{{data.description}}</td>\n                        </tr>\n\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <!--<app-pagination [onClick]=\"onClickPagination\" *ngIf=\"top\" [filter]=\"filter\" [pagination]=\"top.data.rooms\"></app-pagination>-->\n        </div>\n\n\n    <!--row-->\n    </div>\n\n\n\n<!--containerfluid-->\n</div>\n\n\n<!--mainContent-->\n</div>\n\n<app-my-modal [modalData]=\"this.modalData\" ></app-my-modal>\n\n\n\n<ng-template #loading>loading</ng-template>\n<ng-template #notSucceed>{{this.top.message || \"Not found\"}}</ng-template>\n<ng-template #noDataFound><div class=\"card-content\">No data found</div></ng-template>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__ = __webpack_require__("./src/app/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__ = __webpack_require__("./src/app/service/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__ = __webpack_require__("./src/app/components/floating-input/BaseForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_helper_helper_service__ = __webpack_require__("./src/app/service/helper/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(helperService, activatedRoute, apiService, userService) {
        var _this = this;
        this.helperService = helperService;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.userService = userService;
        this.param = {};
        this.top = { isSuccess: false, message: "" };
        this.isCanEditProfile = false;
        this.rowBaseForms = [];
        this.formValueContainer = {};
        this.modalData = {
            title: "Apply form",
            baseForms: [],
            buttons: [],
        };
        this.activatedRoute.params.subscribe(function (data) {
            _this.param.id = data['id'];
            console.log('param', data);
            _this.topInit();
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.topInit = function () {
        var _this = this;
        this.apiExecuteGetTop(function () {
            _this.setupButtonLogic();
            _this.setupForm();
        });
    };
    UserProfileComponent.prototype.setupButtonLogic = function () {
        this.isCanEditProfile = this.top.data.isCanEditProfile;
    };
    UserProfileComponent.prototype.setupForm = function () {
        this.rowBaseForms = [];
        this.formValueContainer = {};
        var name = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Name', 'name');
        name.value = this.top.data.user.name;
        name.classDisplay = 'col-xs-6 col-sm-9';
        var nbg = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('NBG', 'nbg');
        nbg.value = this.top.data.user.nbg;
        nbg.classDisplay = 'col-xs-6 col-sm-3';
        nbg.setIsReadOnly(!this.top.data.isCanEditNbg);
        nbg.setIsRequired(false);
        this.rowBaseForms.push({ baseForms: [name, nbg] });
        var email = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('email', 'email');
        email.value = this.top.data.user.email;
        email.setIsRequired(false);
        var password = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Password', 'password');
        password.inputType = __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["b" /* InputType */].password;
        password.classDisplay = 'col-xs-6';
        password.setIsReadOnly(!this.top.data.isCanChangePassword);
        password.isDisabled = !this.top.data.isCanChangePassword;
        password.setIsRequired(false);
        password.infoBottom = "<span style='color:tomato;'>*</span>Isi HANYA jika ingin mengganti password, jangan isi bila tidak ingin mengganti password";
        var passwordConfirmation = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Confirm Password', 'password_confirmation');
        passwordConfirmation.inputType = __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["b" /* InputType */].password;
        passwordConfirmation.classDisplay = 'col-xs-6';
        passwordConfirmation.setIsReadOnly(!this.top.data.isCanChangePassword);
        passwordConfirmation.isDisabled = !this.top.data.isCanChangePassword;
        passwordConfirmation.setIsRequired(false);
        var address = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Address', 'address');
        address.value = this.top.data.user.address;
        var phone = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('phone', 'phone');
        phone.value = this.top.data.user.phone;
        var birthDate = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Birth date', 'birthDate');
        birthDate.setInputTypeDate({});
        birthDate.value = this.top.data.user.birthDate;
        var profilePicture = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]("Change photo", 'photo');
        profilePicture.setIsRequired(false);
        profilePicture.setInputTypeFile({ formContainer: this.formValueContainer });
        var fatherName = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Father Name', 'father');
        fatherName.classDisplay = 'col-xs-6';
        fatherName.setIsRequired(false);
        fatherName.value = this.top.data.user.father;
        var fatherPhone = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('Father phone', 'fatherPhone');
        fatherPhone.classDisplay = 'col-xs-6';
        fatherPhone.setIsRequired(false);
        fatherPhone.value = this.top.data.user.fatherPhone;
        var motherName = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('mother Name', 'mother');
        motherName.classDisplay = 'col-xs-6';
        motherName.setIsRequired(false);
        motherName.value = this.top.data.user.mother;
        var motherPhone = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]('mother phone', 'motherPhone');
        motherPhone.classDisplay = 'col-xs-6';
        motherPhone.setIsRequired(false);
        motherPhone.value = this.top.data.user.motherPhone;
        this.rowBaseForms.push({ baseForms: [email, password, passwordConfirmation, address, phone, birthDate, fatherName, fatherPhone, motherName, motherPhone, profilePicture] });
        this.setEditableForm();
    };
    UserProfileComponent.prototype.setEditableForm = function () {
        var _this = this;
        this.rowBaseForms.forEach(function (rowBaseForm) {
            rowBaseForm.baseForms.forEach(function (baseForm) {
                if (!baseForm.isReadOnly) {
                    baseForm.setIsReadOnly(!_this.isCanEditProfile);
                }
            });
        });
    };
    UserProfileComponent.prototype.apiExecuteGetTop = function (onFinish) {
        var _this = this;
        var config = {
            url: __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "user/top",
            params: { id: this.param.id, cmd: 'detail' },
        };
        this.apiService.get(config, function (data) {
            _this.top = data;
            onFinish();
        });
    };
    UserProfileComponent.prototype.submitUpdateProfileForm = function (form) {
        var _this = this;
        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.user.id;
            this.formValueContainer['cmd'] = 'edit';
            this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);
            console.log('submitUpdateProfileForm', this.formValueContainer, form);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    UserProfileComponent.prototype.apiExecuteSubmitForm = function (json) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */].BASE_API_URL + "user/op";
        var config = {
            url: url,
            params: json,
        };
        this.apiService.post(config, function (data) {
            if (data.isSuccess) {
                _this.helperService.closeModal();
                _this.topInit();
            }
        });
    };
    UserProfileComponent.prototype.presentModal = function (type, data) {
        // this.setForm();
        if (type == 'giveScore') {
            this.setupScoreForm(data);
        }
    };
    UserProfileComponent.prototype.setupScoreForm = function (score) {
        var _this = this;
        this.modalData.baseForms = [];
        this.modalData.buttons = [];
        this.modalData.title = "Penilaian terhadap  " + this.top.data.user.name;
        var description = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]("Description / Penilaian", 'score');
        description.setInputTypeTextarea();
        var status = new __WEBPACK_IMPORTED_MODULE_4__components_floating_input_BaseForm__["a" /* BaseForm */]("Status", "selectScoreStatus");
        status.setInputTypeSelect(this.top.data.selectScoreStatus);
        status.infoBottom = "<p><span style='color:tomato;font-weight: bold;'>* </span>Beri penilaian terhadap murid sebagai track record murid dalam arsip. Penilaian terhadap murid akan sangat membantu mengawasi perkembangan murid tersebut</p>" +
            "<p><span style='color:tomato;font-weight: bold;'>* </span>Hanya guru-guru dari sekolah minggu yang dapat melihat penilaian track record murid untuk menjaga rahasia pelayanan</p>";
        if (score) {
            description.value = score.description;
            if (score.get_select_score_status) {
                status.value = score.get_select_score_status.value;
            }
        }
        this.modalData.baseForms = [{
                baseForms: [description, status]
            }];
        this.modalData.buttons.push({
            text: "Submit",
            class: "btn btn-success",
            onClick: function (form) {
                _this.submitScoreForm(form, score);
            }
        });
        // this.modalData
    };
    UserProfileComponent.prototype.submitScoreForm = function (form, score) {
        var _this = this;
        if (form.valid) {
            this.formValueContainer['id'] = this.top.data.user.id;
            this.formValueContainer['cmd'] = 'giveScore',
                this.formValueContainer['scoreId'] = score.id || -1,
                this.formValueContainer = this.helperService.mergeObject(form.value, this.formValueContainer);
            this.helperService.presentConfirmation({}, function (isConfirmed) {
                if (isConfirmed) {
                    _this.apiExecuteSubmitForm(_this.formValueContainer);
                }
            });
        }
        else {
            this.helperService.presentAlert({ message: 'Form is not valid please check again' });
        }
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_helper_helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_helper_helper_service__["a" /* HelperService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_api_api_service__["b" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_user_service__["a" /* UserService */]) === "function" && _d || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
    window.console.log = function () { }; // disable any console.log debugging statements in production mode
    // window.console.error = function () { };
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map