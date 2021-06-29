(self["webpackChunkmr_lundstrom"] = self["webpackChunkmr_lundstrom"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/content/content.component */ 8828);


class AppComponent {
    constructor() {
        this.title = 'MrLundstrom';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "bg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
    } }, directives: [_components_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('forest_with_road.svg');\n  opacity: 0.05;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9mb3Jlc3Rfd2l0aF9yb2FkLnN2ZycpO1xyXG4gICAgb3BhY2l0eTogMC4wNTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 5115);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ 534);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/splash/splash.component */ 4871);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content/content.component */ 8828);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills/skills.component */ 1727);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_github_github_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/github/github.component */ 7057);
/* harmony import */ var _components_repository_card_repository_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/repository-card/repository-card.component */ 4768);
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-card/project-card.component */ 9221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);


















class AppModule {
    constructor(library) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faLinkedin, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faGithub, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faAngular, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faBehance, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faHtml5, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faJs, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSass, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faFire, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faCss3Alt, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faGitAlt, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faJava, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faSun, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faMoon, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faIdCard, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faNpm, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faReact, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faDatabase, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faImages, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faUnity, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faGooglePlay, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faAppStoreIos);
        smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconLibrary)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_2__.SplashComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent,
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent,
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent,
        _components_github_github_component__WEBPACK_IMPORTED_MODULE_8__.GithubComponent,
        _components_repository_card_repository_card_component__WEBPACK_IMPORTED_MODULE_9__.RepositoryCardComponent,
        _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_10__.ProjectCardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);


class AboutComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
    }
    ngOnInit() {
        this.scrollService.about.subscribe(() => this.scrollTo());
    }
    scrollTo() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__.ScrollServiceService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 14, vars: 0, consts: [["id", "about", 1, "page"], [1, "container"], [1, "columns"], [1, "column", "is-10", "is-offset-1"], [1, "aboutme"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " My name is Erik Lundstr\u00F6m, and I am 29 years old. I am a student, developer, and a foodie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " I am currently attending industrial engineering and management at the Faculty of Engineering, Lund University. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " I like to develop websites, watch movies, hang out with friends, cook & eat food, travel to new locations, and going skiing among many things. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".aboutme[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dG1le1xyXG4gICAgcGFkZGluZzowLjc1cmVtIDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8828:
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 3252);
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../splash/splash.component */ 4871);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ 2468);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/skills.component */ 1727);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/projects.component */ 4935);
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../github/github.component */ 7057);







class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 8, vars: 0, consts: [[1, "navbarFixed"], [1, "content"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-splash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-github");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _splash_splash_component__WEBPACK_IMPORTED_MODULE_1__.SplashComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _github_github_component__WEBPACK_IMPORTED_MODULE_5__.GithubComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7057:
/*!*******************************************************!*\
  !*** ./src/app/components/github/github.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubComponent": function() { return /* binding */ GithubComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/github.service */ 7357);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _repository_card_repository_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-card/repository-card.component */ 4768);





function GithubComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-repository-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("repo", project_r1);
} }
class GithubComponent {
    constructor(ghs, scrollService) {
        this.ghs = ghs;
        this.scrollService = scrollService;
    }
    ngOnInit() {
        this.projects = this.ghs.getProjects();
        this.scrollService.repositories.subscribe(() => this.scrollTo());
    }
    scrollTo() {
        document.getElementById('repositories').scrollIntoView({ behavior: 'smooth' });
    }
}
GithubComponent.ɵfac = function GithubComponent_Factory(t) { return new (t || GithubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_1__.ScrollServiceService)); };
GithubComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GithubComponent, selectors: [["app-github"]], decls: 7, vars: 3, consts: [["id", "repositories", 1, "page"], [1, "container"], [1, "columns"], ["class", "column is-6", 4, "ngFor", "ngForOf"], [1, "column", "is-6"], [1, "fullwidth", 3, "repo"]], template: function GithubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Public Repositories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GithubComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx.projects));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _repository_card_repository_card_component__WEBPACK_IMPORTED_MODULE_2__.RepositoryCardComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);




function NavbarComponent_fa_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_fa_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
class NavbarComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
        this.root = document.documentElement;
        this.showMenu = false;
        this.day = true;
    }
    ngOnInit() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.toggleMode();
        }
    }
    menuClick(name) {
        this.toggleMenu();
        this.scroll(name);
    }
    scroll(name) {
        this.scrollService.scrollTo(name);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
    toggleMode() {
        if (this.day) {
            this.root.style.setProperty('--text', 'rgb(230,230,230)');
            this.root.style.setProperty('--bg', 'rgb(30,30,30)');
        }
        else {
            this.root.style.setProperty('--bg', 'rgb(230,230,230)');
            this.root.style.setProperty('--text', 'rgb(30,30,30)');
        }
        this.day = !this.day;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__.ScrollServiceService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 8, consts: [[1, "navbar"], [1, "content"], [1, "navbar-item", 3, "click"], [1, "navbar-items", 3, "ngClass"], ["icon", "sun", 3, "fixedWidth", 4, "ngIf"], ["icon", "moon", 3, "fixedWidth", 4, "ngIf"], [1, "navbar-toggle", 3, "ngClass", "click"], [1, "line"], ["icon", "sun", 3, "fixedWidth"], ["icon", "moon", 3, "fixedWidth"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.scroll("splash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mr Lundstrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.menuClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.menuClick("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener() { return ctx.menuClick("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.menuClick("repositories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Repositories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.toggleMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_fa_icon_14_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_fa_icon_15_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.day);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.day);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.showMenu));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".navbar[_ngcontent-%COMP%] {\n  justify-content: center;\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(15, 15, 15, 0.9);\n  color: rgba(240, 240, 240, 0.8);\n  height: 4rem;\n  width: 100vw;\n  transition: 0.25s ease-in-out transform, border-bottom 1s;\n  z-index: 4;\n  border-bottom: 1px solid var(--main);\n  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.75);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  height: auto;\n}\n.navbar.intro[_ngcontent-%COMP%] {\n  transform: translateY(0rem);\n}\n.navbar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 960px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-items[_ngcontent-%COMP%] {\n    display: none;\n    flex-direction: column;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-items.is-active[_ngcontent-%COMP%] {\n    background-color: rgba(240, 240, 240, 0.95);\n    border-bottom: 1px solid rgba(15, 15, 15, 0.9);\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    display: flex;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-items.is-active[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    color: rgba(15, 15, 15, 0.9);\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 300;\n  text-decoration: none;\n  height: 100%;\n  padding: 1.25rem;\n  color: white;\n  transition: 0.25s;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--main);\n  background-color: rgba(240, 240, 240, 0.05);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 0px;\n  width: 100%;\n  border: 0.5px solid;\n  transition: transform 0.1s, opacity 0.05s;\n  transform-origin: center left;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 137.3%;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle.is-active[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle.is-active[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggle.is-active[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg);\n}\n@media screen and (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFBQTtBQUNKO0FBQUk7RUFDRSxZQUFBO0FBRU47QUFBSTtFQUNFLDJCQUFBO0FBRU47QUFBSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUVOO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBSEY7SUFJSSxhQUFBO0lBQ0Esc0JBQUE7RUFJSjtFQUhJO0lBQ0UsMkNBQUE7SUFDQSw4Q0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQUtOO0VBSk07SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0VBTVI7QUFDRjtBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSUo7QUFISTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBS047QUFGRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSUo7QUFISTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0FBS047QUFGTTtFQUNFLGFBQUE7QUFJUjtBQUZNO0VBQ0Usd0JBQUE7QUFJUjtBQUZNO0VBQ0UsVUFBQTtBQUlSO0FBRk07RUFDRSx5QkFBQTtBQUlSO0FBREk7RUE1QkY7SUE2QkksYUFBQTtFQUlKO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTUsIDE1LCAwLjkpO1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwLCAwLjgpO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dCB0cmFuc2Zvcm0sIGJvcmRlci1ib3R0b20gMXM7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLm5hdmJhci1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJi5pbnRybyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXgtd2lkdGg6OTYwcHg7XHJcbiAgICB9XHJcbiAgLm5hdmJhci1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICYuaXMtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOTUpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1LCAxNSwgMTUsIDAuOSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLm5hdmJhci1pdGVtIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1LCAxNSwgMTUsIDAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItaXRlbSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC4wNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAubGluZSB7XHJcbiAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMsIG9wYWNpdHkgMC4wNXM7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG4gICAgfVxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDEzNy4zJTtcclxuICAgICAgfVxyXG4gICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 9221:
/*!*******************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": function() { return /* binding */ ProjectCardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProjectCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], decls: 2, vars: 0, template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project-card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": function() { return /* binding */ ProjectsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);



const _c0 = function () { return ["fab", "unity"]; };
const _c1 = function () { return ["fab", "google-play"]; };
const _c2 = function () { return ["fab", "app-store-ios"]; };
const _c3 = function () { return ["fab", "angular"]; };
const _c4 = function () { return ["fab", "html5"]; };
const _c5 = function () { return ["fab", "sass"]; };
const _c6 = function () { return ["fab", "js"]; };
const _c7 = function () { return ["fab", "css3-alt"]; };
const _c8 = function () { return ["fab", "react"]; };
class ProjectsComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
    }
    ngOnInit() {
        this.scrollService.projects.subscribe(() => this.scrollTo());
    }
    scrollTo() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__.ScrollServiceService)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 106, vars: 47, consts: [["id", "projects", 1, "page"], [1, "container"], [1, "columns"], [1, "column", "is-12"], [1, "project-card", "continuous"], [1, "card-content"], [1, "icon", 3, "icon", "fixedWidth"], [1, "buttons"], ["target", "_blank", "href", "https://play.google.com/store/apps/details?id=com.game.ContinuumTD", 1, "button"], ["target", "_blank", "href", "https://testflight.apple.com/join/14xbSfRm", 1, "button"], [1, "column", "is-6"], [1, "cover_photo"], [1, "project-card", "simul"], ["icon", "fire", 1, "icon", 3, "fixedWidth"], ["target", "_blank", "href", "https://collaborate-63183.web.app/", 1, "button"], [1, "project-card", "dotClock"], ["target", "_blank", "href", "https://steamcommunity.com/sharedfiles/filedetails/?id=897347504", 1, "button"], ["target", "_blank", "href", "https://github.com/MrLundstrom/dotClock", 1, "button"], [1, "project-card", "transforms"], ["target", "_blank", "href", "https://mrlundstrom.github.io/transforms", 1, "button"], ["target", "_blank", "href", "https://github.com/MrLundstrom/transforms", 1, "button"], [1, "project-card", "spex"], ["target", "_blank", "href", "https://vg-spex.web.app", 1, "button"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Continuous TD - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Google Play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Appstore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " A semi-idle Tower Defence game for Android and IOS. It features 10 different towers with 3 upgrades each, giving (almost) endless options to build your defence. It also features 6 different game-modes, 28 permanent upgrades, leaderboads and randomly generated levels. The game is a freemium game, which means it's free to download, but you can buy a few things with IAP or watch ads to gain rewards. It's currently in beta testing, with a proper release planned for the end of the summer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Simul/Side! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Live demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " A platform that enables its users to create, find and join projects. It supports authentication with your Google account and with your email & password. It is hosted with firebase hosting. There is a test-account to see how the platform works. It's not finnished as it was outside the scope of the course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ": dummy@simulapp.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, ": 123456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "DotClock - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Steam Workshop page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Github repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "An experimental wallpaper-website, showing the current time with a pattern of dots. Is available for download and usage in the Steam workshop, where it currently has over 3500 subscribers and around 90% rating.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Transforms - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Live demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Github repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "A small experiment with CSS-transforms to create a three-dimensional world without other tools. Uses some javascript to change the perspective. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "VG Spex - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Live website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "A webapp to easily store & book food in V\u00E4stg\u00F6ta Nations inventory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c1))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c2))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c3))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c4))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c5))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c6))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c4))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c7))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c3))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c4))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c7))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c8))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c4))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c5))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".project-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  background-color: #8e8e8e12;\n}\n.project-card[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  padding-top: 56.25%;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.project-card.simul[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  background-image: url('Side.png');\n}\n.project-card.simul[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #750c64;\n}\n.project-card.transforms[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  background-image: url('transforms.png');\n}\n.project-card.transforms[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #65fc47;\n}\n.project-card.spex[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  background-image: url('spex.png');\n}\n.project-card.spex[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #fcd947;\n}\n.project-card.dotClock[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  background-image: url('dotclock.png');\n}\n.project-card.dotClock[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #ff1f1f;\n}\n.project-card.continuous[_ngcontent-%COMP%]   .cover_photo[_ngcontent-%COMP%] {\n  background-image: url('td.jpg');\n}\n.project-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #081d85;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUVSO0FBRVE7RUFDSSxpQ0FBQTtBQUFaO0FBRVE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBQVI7QUFLUTtFQUNJLHVDQUFBO0FBSFo7QUFLUTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFIUjtBQVFRO0VBQ0ksaUNBQUE7QUFOWjtBQVFRO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQU5SO0FBV1E7RUFDSSxxQ0FBQTtBQVRaO0FBV1E7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBVFI7QUFhUTtFQUNJLCtCQUFBO0FBWFo7QUFhTTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7QUFYUjtBQWNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFaUiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4ZThlMTI7XHJcbiAgICAuY292ZXJfcGhvdG97XHJcbiAgICAgICAgcGFkZGluZy10b3A6NTYuMjUlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaW11bCB7XHJcbiAgICAgICAgLmNvdmVyX3Bob3Rve1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9TaWRlLnBuZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NTBjNjQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAmLnRyYW5zZm9ybXMge1xyXG4gICAgICAgIC5jb3Zlcl9waG90b3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdHJhbnNmb3Jtcy5wbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjVmYzQ3O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgJi5zcGV4IHtcclxuICAgICAgICAuY292ZXJfcGhvdG97XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NwZXgucG5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZjZDk0NztcclxuICAgIH1cclxufVxyXG5cclxuICAgICYuZG90Q2xvY2sge1xyXG4gICAgICAgIC5jb3Zlcl9waG90b3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZG90Y2xvY2sucG5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMzEsIDMxKTtcclxuICAgIH1cclxufVxyXG4gICAgJi5jb250aW51b3Vze1xyXG4gICAgICAgIC5jb3Zlcl9waG90b3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdGQuanBnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBoMntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgsIDI5LCAxMzMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4768:
/*!*************************************************************************!*\
  !*** ./src/app/components/repository-card/repository-card.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepositoryCardComponent": function() { return /* binding */ RepositoryCardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function RepositoryCardComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Live demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.repo.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class RepositoryCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
RepositoryCardComponent.ɵfac = function RepositoryCardComponent_Factory(t) { return new (t || RepositoryCardComponent)(); };
RepositoryCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepositoryCardComponent, selectors: [["app-repository-card"]], inputs: { repo: "repo" }, decls: 10, vars: 4, consts: [[1, "project-card", "repo"], [1, "card-content"], [1, "buttons"], ["target", "_blank", 1, "button", 3, "href"], ["class", "button", "target", "_blank", 3, "href", 4, "ngIf"]], template: function RepositoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RepositoryCardComponent_a_7_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.repo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.repo.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repo.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repo.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".project-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  background-color: #8e8e8e12;\n  flex-grow: 1;\n}\n.project-card.repo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 2px solid #e634c8;\n}\n.project-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnktY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJyZXBvc2l0b3J5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTEyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICYucmVwbyBoMiB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNjM0Yzg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 1727:
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": function() { return /* binding */ SkillsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);



const _c0 = function () { return ["fab", "html5"]; };
const _c1 = function () { return ["fab", "css3-alt"]; };
const _c2 = function () { return ["fab", "js"]; };
const _c3 = function () { return ["fab", "angular"]; };
const _c4 = function () { return ["fab", "sass"]; };
const _c5 = function () { return ["fab", "git-alt"]; };
const _c6 = function () { return ["fab", "java"]; };
const _c7 = function () { return ["fab", "npm"]; };
const _c8 = function () { return ["fab", "react"]; };
const _c9 = function () { return ["fab", "unity"]; };
class SkillsComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
    }
    ngOnInit() {
        this.scrollService.skills.subscribe(() => this.scrollTo());
    }
    scrollTo() {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__.ScrollServiceService)); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 57, vars: 33, consts: [["id", "skills", 1, "page"], [1, "container"], [1, "columns"], [1, "column", "is-6"], [1, "skill-card", "html"], [1, "icon", 3, "icon", "fixedWidth"], [1, "skill-card", "css"], [1, "skill-card", "js"], [1, "skill-card", "angular"], [1, "skill-card", "sass"], [1, "skill-card", "fire"], ["icon", "fire", 1, "icon", 3, "fixedWidth"], [1, "skill-card", "git"], [1, "skill-card", "java"], [1, "skill-card", "npm"], [1, "skill-card", "react"], [1, "skill-card", "images"], ["icon", "images", 1, "icon", 3, "fixedWidth"], [1, "skill-card", "databases"], ["icon", "database", 1, "icon", 3, "fixedWidth"], [1, "column", "is-12"], [1, "skill-card", "unity"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " HTML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Sass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Firebase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " git ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " npm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " react ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Ps & Gimp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " SQL & noSQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Unity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c2))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c3))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c4))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c5))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c6))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c7))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c8))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c9))("fixedWidth", true);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".skill-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.5rem;\n  font-size: 1.5rem;\n  opacity: 0.9;\n}\n.skill-card[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.skill-card.angular[_ngcontent-%COMP%] {\n  background-color: red;\n  color: white;\n}\n.skill-card.html[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.skill-card.js[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: black;\n}\n.skill-card.sass[_ngcontent-%COMP%] {\n  background-color: pink;\n  color: black;\n}\n.skill-card.css[_ngcontent-%COMP%] {\n  background-color: darkblue;\n  color: white;\n}\n.skill-card.fire[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  color: orangered;\n}\n.skill-card.git[_ngcontent-%COMP%] {\n  background-color: white;\n  color: darkred;\n}\n.skill-card.java[_ngcontent-%COMP%] {\n  background-color: brown;\n  color: white;\n}\n.skill-card.npm[_ngcontent-%COMP%] {\n  background-color: #cb3837;\n  color: white;\n}\n.skill-card.react[_ngcontent-%COMP%] {\n  background-color: #61dafb;\n  color: black;\n}\n.skill-card.images[_ngcontent-%COMP%] {\n  background-color: #73fb61;\n  color: black;\n}\n.skill-card.databases[_ngcontent-%COMP%] {\n  background-color: #fb61bb;\n  color: black;\n}\n.skill-card.unity[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHFCQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQUk7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSwwQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUNJO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ0k7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUFDUjtBQUNJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFDUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtY2FyZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICBvcGFjaXR5OjAuOTtcclxuICAgID4uaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MC43NXJlbTtcclxuICAgIH1cclxuICAgICYuYW5ndWxhcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDsgICBcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgICYuaHRtbHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgICYuanN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG5cclxuICAgIH1cclxuICAgICYuc2Fzc3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgJi5jc3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLmZpcmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIH1cclxuICAgICYuZ2l0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOmRhcmtyZWQ7XHJcbiAgICB9XHJcbiAgICAmLmphdmF7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLm5wbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IzODM3O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgJi5yZWFjdHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFkYWZiO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgJi5pbWFnZXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczZmI2MTtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgICYuZGF0YWJhc2Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYxYmI7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAmLnVuaXR5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ 4871:
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashComponent": function() { return /* binding */ SplashComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/scroll-service.service */ 1978);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);



const _c0 = function () { return ["fab", "github"]; };
class SplashComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
        this.root = document.documentElement;
    }
    ngOnInit() {
        this.scrollService.splash.subscribe(() => this.scrollTo());
        setInterval(() => this.setColor(), 5000);
    }
    setColor() {
        this.root.style.setProperty('--main', this.getRGBA());
    }
    getRGBA() {
        const R = Math.floor(Math.random() * 255);
        const G = Math.floor(Math.random() * 255);
        const B = Math.floor(Math.random() * 255);
        return 'rgba(' + R + ',' + G + ',' + B + ', 0.9)';
    }
    scrollTo() {
        document.getElementById('splash').scrollIntoView({ behavior: 'smooth' });
    }
}
SplashComponent.ɵfac = function SplashComponent_Factory(t) { return new (t || SplashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service_service__WEBPACK_IMPORTED_MODULE_0__.ScrollServiceService)); };
SplashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashComponent, selectors: [["app-splash"]], decls: 17, vars: 4, consts: [["id", "splash", 1, "page", "splash"], [1, "splash-container"], [1, "image", "is-192x192", "is-rounded"], ["alt", "profilePicture", "src", "assets/profile.png"], [1, "menu"], ["target", "_", "href", "https://github.com/MrLundstrom", 1, "icon-link"], [1, "icon", 3, "icon", "fixedWidth"], [1, "tooltip"], ["target", "_", "href", "assets/LundstromCV.pdf", "download", "", 1, "icon-link"], ["icon", "id-card", 1, "icon", 3, "fixedWidth"]], template: function SplashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mr Lundstrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Student, developer & foodie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".splash[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-width: 100%;\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0px -5px 15px -10px #000;\n  transition: background-color 4s ease;\n  background: linear-gradient(336deg, rgba(121, 121, 121, 0.06) 0%, rgba(121, 121, 121, 0.06) 44%, rgba(125, 125, 125, 0.06) 44%, rgba(125, 125, 125, 0.06) 100%), linear-gradient(110deg, rgba(15, 15, 15, 0.04) 0%, rgba(15, 15, 15, 0.04) 24%, rgba(204, 204, 204, 0.06) 24%, rgba(204, 204, 204, 0.08) 100%), linear-gradient(174deg, rgba(151, 151, 151, 0.02) 0%, rgba(151, 151, 151, 0.02) 18%, rgba(226, 226, 226, 0.04) 18%, rgba(226, 226, 226, 0.04) 100%), linear-gradient(224deg, rgba(4, 4, 4, 0.02) 0%, rgba(4, 4, 4, 0.02) 30%, rgba(232, 232, 232, 0.05) 30%, rgba(232, 232, 232, 0.04) 100%), linear-gradient(5deg, rgba(4, 4, 4, 0.02) 0%, rgba(4, 4, 4, 0.02) 30%, rgba(3, 3, 3, 0.05) 30%, rgba(6, 2, 3, 0.04) 100%), linear-gradient(70deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 100%);\n  background-color: var(--main);\n}\n\n.splash-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOHdCQUFBO0VBd0NBLDZCQUFBO0FBdENKOztBQXdDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFyQ0oiLCJmaWxlIjoic3BsYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDE1cHggLTEwcHggIzAwMDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNHMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMzM2ZGVnLFxyXG4gICAgICByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuMDYpIDAlLFxyXG4gICAgICByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuMDYpIDQ0JSxcclxuICAgICAgcmdiYSgxMjUsIDEyNSwgMTI1LCAwLjA2KSA0NCUsXHJcbiAgICAgIHJnYmEoMTI1LCAxMjUsIDEyNSwgMC4wNikgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTEwZGVnLFxyXG4gICAgICByZ2JhKDE1LCAxNSwgMTUsIDAuMDQpIDAlLFxyXG4gICAgICByZ2JhKDE1LCAxNSwgMTUsIDAuMDQpIDI0JSxcclxuICAgICAgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjA2KSAyNCUsXHJcbiAgICAgIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4wOCkgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTc0ZGVnLFxyXG4gICAgICByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDIpIDAlLFxyXG4gICAgICByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMDIpIDE4JSxcclxuICAgICAgcmdiYSgyMjYsIDIyNiwgMjI2LCAwLjA0KSAxOCUsXHJcbiAgICAgIHJnYmEoMjI2LCAyMjYsIDIyNiwgMC4wNCkgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMjI0ZGVnLFxyXG4gICAgICByZ2JhKDQsIDQsIDQsIDAuMDIpIDAlLFxyXG4gICAgICByZ2JhKDQsIDQsIDQsIDAuMDIpIDMwJSxcclxuICAgICAgcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjA1KSAzMCUsXHJcbiAgICAgIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC4wNCkgMTAwJVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgNWRlZyxcclxuICAgICAgcmdiYSg0LCA0LCA0LCAwLjAyKSAwJSxcclxuICAgICAgcmdiYSg0LCA0LCA0LCAwLjAyKSAzMCUsXHJcbiAgICAgIHJnYmEoMywgMywgMywgMC4wNSkgMzAlLFxyXG4gICAgICByZ2JhKDYsIDIsIDMsIDAuMDQpIDEwMCVcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDcwZGVnLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcclxuICAgICk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG4uc3BsYXNoLWNvbnRhaW5lcntcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7357:
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubService": function() { return /* binding */ GithubService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class GithubService {
    // inject the HttpClient as http so we can use it in this class
    constructor(http) {
        this.http = http;
        // define our class properties. apiUrl is what we need
        // usually you could get this from an environment fil
        this.apiUrl = 'https://api.github.com/';
    }
    // return what comes back from this http call
    getProjects() {
        return this.http.get(`${this.apiUrl}users/MrLundstrom/repos`);
    }
    ;
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
GithubService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1978:
/*!****************************************************!*\
  !*** ./src/app/services/scroll-service.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollServiceService": function() { return /* binding */ ScrollServiceService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class ScrollServiceService {
    constructor() {
        this.skills = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.projects = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.splash = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.repositories = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    scrollTo(page) {
        if (page == 'skills') {
            this.skills.next();
        }
        else if (page == 'projects') {
            this.projects.next();
        }
        else if (page == 'splash') {
            this.splash.next();
        }
        else if (page == 'about') {
            this.about.next();
        }
        else {
            this.repositories.next();
        }
    }
}
ScrollServiceService.ɵfac = function ScrollServiceService_Factory(t) { return new (t || ScrollServiceService)(); };
ScrollServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollServiceService, factory: ScrollServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map