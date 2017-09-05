webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-home></app-home>  \n <!-- <app-project></app-project>  -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_image_gallery__ = __webpack_require__("../../../../angular2-image-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_image_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_image_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_header_header_component__ = __webpack_require__("../../../../../src/app/home/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_development_development_component__ = __webpack_require__("../../../../../src/app/home/development/development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_design_design_component__ = __webpack_require__("../../../../../src/app/home/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_photography_photography_component__ = __webpack_require__("../../../../../src/app/home/photography/photography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__photography_photography_component__ = __webpack_require__("../../../../../src/app/photography/photography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_home_service__ = __webpack_require__("../../../../../src/app/services/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_development_development_component__["a" /* DevelopmentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_design_design_component__["a" /* DesignComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_photography_photography_component__["a" /* PhotographyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_9__photography_photography_component__["a" /* PhotographyProjComponent */],
            __WEBPACK_IMPORTED_MODULE_13__blog_blog_component__["a" /* BlogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_image_gallery__["Angular2ImageGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/home/development',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    redirectTo: '/home/development',
                    pathMatch: 'full'
                },
                {
                    path: 'project',
                    redirectTo: '/project/rfc',
                    pathMatch: 'full'
                },
                {
                    path: 'photography',
                    redirectTo: '/photography/spain',
                    pathMatch: 'full'
                },
                {
                    path: 'blog',
                    component: __WEBPACK_IMPORTED_MODULE_13__blog_blog_component__["a" /* BlogComponent */]
                },
                {
                    path: 'home/development',
                    component: __WEBPACK_IMPORTED_MODULE_6__home_development_development_component__["a" /* DevelopmentComponent */]
                },
                {
                    path: 'home/design',
                    component: __WEBPACK_IMPORTED_MODULE_7__home_design_design_component__["a" /* DesignComponent */]
                },
                {
                    path: 'home/photography',
                    component: __WEBPACK_IMPORTED_MODULE_8__home_photography_photography_component__["a" /* PhotographyComponent */]
                },
                {
                    path: 'home/about',
                    component: __WEBPACK_IMPORTED_MODULE_10__home_about_about_component__["a" /* AboutComponent */]
                },
                {
                    path: 'home/contact',
                    component: __WEBPACK_IMPORTED_MODULE_11__home_contact_contact_component__["a" /* ContactComponent */]
                },
                {
                    path: 'project',
                    component: __WEBPACK_IMPORTED_MODULE_12__project_project_component__["a" /* ProjectComponent */]
                },
                {
                    path: 'project/:name',
                    component: __WEBPACK_IMPORTED_MODULE_12__project_project_component__["a" /* ProjectComponent */]
                },
                {
                    path: 'photography',
                    component: __WEBPACK_IMPORTED_MODULE_9__photography_photography_component__["a" /* PhotographyProjComponent */]
                },
                {
                    path: 'photography/:name',
                    component: __WEBPACK_IMPORTED_MODULE_9__photography_photography_component__["a" /* PhotographyProjComponent */]
                },
                {
                    path: '**',
                    redirectTo: '/home/development'
                }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_home_service__["a" /* HomeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        window.location.href = 'https://medium.com/george-saieed';
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
    })
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description {\n    font-size: 29px;\n    font-weight: 200;\n    padding: 50px 85px 20px;\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n.bold {\n    font-weight: 400;\n}\n\n.green {\n    color: #00AB6C;\n    position: relative;\n    z-index: 2;\n}\n\n.red {\n    color: #E95B55;\n}\n\n.accenture {\n    color: #00BBFF;\n}\n\n.experience, .volunteer, .skills {\n    padding: 0 85px 40px;\n}\n\n.title {\n    text-transform: uppercase;\n    font-family: 'AlexandriaFLF', serif;\n    color: gray;\n    border-bottom: solid 1px gray;\n}\n\n.name {\n    padding: 25px 0 30px 40px;\n    font-size: 27px;\n    width: 350px;\n}\n\n.year {\n    padding: 41px 50px 0px;\n    width: 250px;\n    font-weight: 300;\n    text-transform: uppercase;\n    font-size: 13px;\n    color: gray;\n}\n\n.content {\n    padding: 36px 0;\n    color: gray;\n    font-weight: 300;\n    width: 600px;\n}\n\n.position {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    border-bottom: solid 1px gray;\n}\n\n.title, .exp {\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n.accent {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.ic {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.explorer {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.sewickley {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.saieed {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n    border-bottom: none;\n}\n\n.all {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.upmc {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.academy {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n    border-bottom: none;\n}\n\n.skill-container {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-left: 30px;\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.html, .css {\n    height: 57px;\n    width: 57px;\n}\n\n.python, .twilio, .swift {\n    height: 52px;\n    width: 52px;\n}\n\n.css {\n    margin-right: 8px;\n}\n\n.python {\n    margin-right: 17px;\n}\n\n.twilio {\n    margin-right: 14px;\n}\n\n.swift {\n    margin-right: 14px;\n}\n\n.r {\n    height: 60px;\n    width: 60px;\n    margin-right: 13px;\n} \n\n.java {\n    height: 50px;\n    width: 50px;\n    margin-right: 15px;\n} \n\n.ruby {\n    height: 45px;\n    width: 45px;\n    margin-right: 13px;\n} \n\n.angular {\n    height: 60px;\n    width: 60px;\n    margin-right: -9px;\n} \n\n.react {\n    height: 80px;\n    width: 80px;\n} \n\n.nodejs {\n    height: 70px;\n    width: 70px;\n    margin-right: 13px;\n}\n\n.net {\n    height: 85px;\n    width: 85px;\n    margin-right: 12px;\n}\n\n.photoshop {\n    height: 42px;\n    width: 42px;\n    margin-right: 13px;\n}\n\n.lightroom {\n    height: 42px;\n    width: 42px;\n}\n\n.sketch {\n    height: 45px;\n    width: 45px;\n    margin-right: 13px;\n}\n\n.role {\n    color: white;\n    display: block;\n}\n\n.icon {\n    display: inline-block;\n    height: 50px;\n    margin-left: 7px;\n}\n\n.medium {\n    margin-left: 0;\n}\n\n.icons {\n    margin-top: 10px;\n    display: none;\n}\n\n.icon:hover {\n    cursor: pointer;\n}\n\nsvg, .medium {\n    width: 45px;\n    height: 45px;\n}\n\n.medium {\n    margin-top: -30px;\n}\n\n@media(max-width: 1055px) {\n    .icons {\n        display: block;\n    }\n}\n\n@media(max-width: 475px) {\n    svg, .medium {\n        width: 40px;\n        height: 40px;\n    }\n\n    .medium {\n        margin-top: -28px;\n    }\n}\n\n@media(max-width: 415px) {\n    .icon {\n        margin-left: 5px;\n    }\n\n    .medium {\n        margin-left: 0;\n    }\n\n    svg, .medium {\n        width: 37px;\n        height: 37px;\n    }\n\n    .spotify {\n        display: none;\n    }\n\n    .medium {\n        margin-top: -27.5px;\n    }\n}\n\n@media(max-width: 330px) {\n\n    svg, .medium {\n        width: 35px;\n        height: 35px;\n    }\n\n    .medium {\n        margin-top: -23px;\n    }\n}\n\n@-webkit-keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@media(max-width: 1111px) {\n    .description {\n        font-size: 25px;\n        font-weight: 200;\n        padding: 50px 30px 20px;\n        -webkit-animation: container-fade 0.5s;\n                animation: container-fade 0.5s;\n    }\n    .experience, .volunteer, .skills {\n        padding: 0 30px 40px;\n    }\n    .skill-container {\n        padding-left: 40px;\n        padding-right: 40px;\n        width: 100vw;\n        overflow-y: scroll;\n        z-index: 10;\n        margin-left: -55px;\n    }\n}\n\n@media(max-width: 883px) {\n    .position {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n\n    .name {\n        padding: 20px 0 0;\n        font-size: 27px;\n        width: auto;\n    }\n\n    .year {\n        padding: 5px 0px 0px;\n        font-weight: 300;\n        text-transform: uppercase;\n        font-size: 13px;\n        width: auto;\n        color: gray;\n    }\n\n    .content {\n        padding: 20px 0;\n        width: 100%;\n        color: gray;\n        font-weight: 300;\n    }\n}\n\n@media(max-width: 603px) {\n    .description {\n        font-size: 18px;\n        font-weight: 400;\n        padding: 50px 20px 20px;\n        -webkit-animation: container-fade 0.5s;\n                animation: container-fade 0.5s;\n    }\n    .experience, .volunteer, .skills {\n        padding: 0 20px 40px;\n    }\n    .name, .content, .year {\n        font-weight: 400;\n    }\n}\n\n@media(max-width: 450px) {\n    .description {\n        font-size: 17px;\n    }\n}\n\n@media(max-width: 603px) {\n    .description {\n        padding-top: 40px;\n    }\n}\n\n@media(max-width: 470px) {\n    .description {\n        padding-top: 25px;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n    <div class=\"description\">\n        <p>I'm a <span class=\"green\">neuroscience</span> major at the \n        <span class=\"red\">University of Chicago</span>, fascinated by the \n        potential application of technology to the field of medicine. I'm a self-taught\n        designer, software developer, and photographer, and I'm currently\n        an intern for <span class=\"accenture\">Accenture</span>, building demo web\n        applications for various Fortune 500 clients to demonstrate the\n        plausibility of incorporating agile metholodies and DevOps into \n        legacy systems.</p>\n        <div class=\"icons\">\n        <a class=\"no-link-style\" target=\"_blank\" (click)=\"toBlog()\">\n            <img class=\"icon medium\" src=\"./../../../assets/img/head-icons/medium.svg\"/>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://open.spotify.com/artist/1WN22dBwn6fM3biZufox5W\">\n            <div class=\"icon spotify\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <title>Group 16</title>\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"Development\" transform=\"translate(-1486.000000, -216.000000)\">\n                            <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                                <g id=\"Group-7\">\n                                    <g id=\"Group-16\" transform=\"translate(100.000000, 0.000000)\">\n                                        <rect id=\"spotify-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                        <g id=\"Spotify_logo_with_text\" transform=\"translate(21.000000, 21.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                            <path d=\"M19.9990476,0.065952381 C8.98738095,0.065952381 0.0602380952,8.99285714 0.0602380952,20.0045238 C0.0602380952,31.0166667 8.98738095,39.9428571 19.9990476,39.9428571 C31.0119048,39.9428571 39.9380952,31.0166667 39.9380952,20.0045238 C39.9380952,8.99357143 31.0119048,0.0669047619 19.9988095,0.0669047619 L19.9990476,0.065952381 Z M29.1428571,28.8230952 C28.7857143,29.4088095 28.0190476,29.5945238 27.4333333,29.235 C22.7519048,26.3754762 16.8585714,25.7278571 9.91809524,27.3135714 C9.24928571,27.4659524 8.58261905,27.0469048 8.4302381,26.3778571 C8.27714286,25.7088095 8.69452381,25.0421429 9.365,24.8897619 C16.9602381,23.1545238 23.4752381,23.9016667 28.7309524,27.1135714 C29.3166667,27.4730952 29.502381,28.237381 29.1428571,28.8230952 L29.1428571,28.8230952 Z M31.5833333,23.3940476 C31.1333333,24.1254762 30.1761905,24.3564286 29.4452381,23.9064286 C24.0857143,20.6121429 15.9159524,19.6580952 9.57666667,21.582381 C8.75452381,21.8307143 7.88619048,21.367381 7.63666667,20.5466667 C7.38904762,19.7245238 7.85261905,18.8578571 8.67333333,18.6078571 C15.9145238,16.4107143 24.9166667,17.475 31.0714286,21.2571429 C31.802381,21.7071429 32.0333333,22.6642857 31.5833333,23.3942857 L31.5833333,23.3940476 Z M31.7928571,17.7407143 C25.3666667,13.9238095 14.7642857,13.5728571 8.62880952,15.435 C7.64357143,15.7338095 6.60166667,15.177619 6.30309524,14.192381 C6.00452381,13.2066667 6.5602381,12.1654762 7.54619048,11.8659524 C14.5892857,9.72785714 26.297619,10.1409524 33.6961905,14.5330952 C34.5842857,15.0590476 34.8747619,16.2035714 34.3485714,17.0885714 C33.8247619,17.9747619 32.6771429,18.2669048 31.7938095,17.7407143 L31.7928571,17.7407143 Z\" id=\"spotify-icon\"></path>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://www.facebook.com/gsaieedblog\">\n            <div class=\"icon facebook\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 17</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1586.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-17\" transform=\"translate(200.000000, 0.000000)\">\n                                    <rect id=\"facebook-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"facebook-app-symbol\" transform=\"translate(32.000000, 25.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M10.3357654,30.6627972 L10.3357654,16.6770799 L15.0283065,16.6770799 L15.732326,11.2249804 L10.3357654,11.2249804 L10.3357654,7.74460996 C10.3357654,6.16659429 10.7721706,5.09119559 13.0376034,5.09119559 L15.9222651,5.09000971 L15.9222651,0.213459033 C15.4234034,0.148630734 13.7109876,0 11.7179127,0 C7.55605448,0 4.70677168,2.54036014 4.70677168,7.20463767 L4.70677168,11.2249804 L0,11.2249804 L0,16.6770799 L4.70677168,16.6770799 L4.70677168,30.6627972 L10.3357654,30.6627972 Z\" id=\"facebook-icon\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://github.com/saieedgeorge0\">\n            <div class=\"icon github\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 18</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1686.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-18\" transform=\"translate(300.000000, 0.000000)\">\n                                    <g id=\"github-icon\" transform=\"translate(25.000000, 25.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M11.3840435,33.175625 C11.373604,32.1413753 11.3687039,31.2391098 11.3687039,30.4692547 L10.6691552,30.590267 C10.2231357,30.6719715 9.66047144,30.7065921 8.98116249,30.6967918 C8.30217312,30.6873111 7.59729821,30.6161525 6.86749648,30.4838486 C6.13737518,30.3527166 5.45827929,30.0485881 4.82967617,29.5721025 C4.20139262,29.0956168 3.75537309,28.4719139 3.49172409,27.7019523 L3.18759566,27.002084 C2.98487887,26.5361444 2.66573043,26.0185401 2.22972424,25.4511888 C1.79371804,24.8833048 1.3528117,24.498324 0.906792166,24.2956073 L0.693848997,24.1431702 C0.551957902,24.0418651 0.420293191,23.9196811 0.298535292,23.7778965 C0.176883917,23.6361119 0.0858051731,23.4942208 0.0249794857,23.3521167 C-0.0359527266,23.209906 0.0145400507,23.0932613 0.176990442,23.0017565 C0.339440833,22.9102516 0.63302331,22.8658308 1.05901617,22.8658308 L1.66706,22.9566965 C2.07260009,23.0379749 2.57422559,23.280745 3.17257565,23.6864982 C3.77060614,24.0919318 4.26221831,24.6190167 4.64751868,25.26754 C5.11409751,26.0990729 5.67622912,26.7326827 6.3355114,27.1686889 C6.99426105,27.6046951 7.65844347,27.8223254 8.32741951,27.8223254 C8.99639554,27.8223254 9.57418631,27.7716195 10.0610049,27.6707405 C10.5472908,27.5693288 11.0035367,27.4168918 11.4295296,27.2142815 C11.6120066,25.8552375 12.1088385,24.8111875 12.9195991,24.0813858 C11.7640176,23.9599475 10.7250808,23.7770443 9.80225601,23.5338481 C8.87996388,23.2903323 7.92688608,22.8951251 6.94366175,22.3471613 C5.95990479,21.7999432 5.14381794,21.1204212 4.49518815,20.3097671 C3.84645183,19.4986869 3.31404065,18.4338645 2.89870027,17.1162587 C2.48314685,15.7981202 2.27531687,14.2775846 2.27531687,12.5542256 C2.27531687,10.1004258 3.07638372,8.01232573 4.67819783,6.28875371 C3.92783682,4.44395642 3.99867584,2.37588305 4.89092795,0.0847466477 C5.47894511,-0.0979434642 6.3509575,0.0391540134 7.50653904,0.495186882 C8.66233362,0.9514328 9.508567,1.34227246 10.0460914,1.66632105 C10.5836158,1.9902631 11.0142957,2.26477763 11.3387704,2.48741456 C13.2247928,1.96043615 15.1711083,1.69689368 17.1782494,1.69689368 C19.1853906,1.69689368 21.1321322,1.96043615 23.0182611,2.48741456 L24.1739492,1.75782589 C24.964257,1.27100734 25.8975212,0.824881282 26.9715047,0.419341191 C28.0461273,0.0140141496 28.86786,-0.0976238897 29.4358505,0.0850662223 C30.3479162,2.37630915 30.4291947,4.44427599 29.6786206,6.28907329 C31.2803282,8.01264531 32.0817146,10.101278 32.0817146,12.5545452 C32.0817146,14.2779042 31.873139,15.8032334 31.4582247,17.1314918 C31.0427778,18.4599631 30.505786,19.5237202 29.8470364,20.3250001 C29.1875411,21.1261735 28.3662345,21.8003693 27.3830102,22.3474809 C26.3995728,22.8950186 25.4461754,23.2902258 24.5238833,23.5337416 C23.6011651,23.7772574 22.5622282,23.960267 21.4066467,24.0819184 C22.4606035,24.9939842 22.9876885,26.4336675 22.9876885,28.4003292 L23.0182611,33.175625 C23.0182611,33.540153 11.3941633,34.2098747 11.3840435,33.175625 Z\" id=\"gitpath\"></path>\n                                    </g>\n                                    <rect id=\"github-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://www.linkedin.com/in/gsaieed/\">\n            <div class=\"icon linkedin\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 12</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Design\" transform=\"translate(-1786.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-10\" transform=\"translate(400.000000, 0.000000)\">\n                                    <g id=\"Group-12\">\n                                        <rect id=\"linkedin-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                        <g id=\"Logo-2C-White-0p5in-R\" transform=\"translate(25.271186, 22.000000)\" fill=\"#979797\">\n                                            <g id=\"Group-11\">\n                                                <path d=\"M31.6171852,31.616 L25.2906667,31.616 L25.2906667,21.7137778 C25.2906667,19.3528889 25.2491852,16.3152593 22.0017778,16.3152593 C18.7093333,16.3152593 18.2068148,18.8882963 18.2068148,21.5454815 L18.2068148,31.616 L11.8862222,31.616 L11.8862222,11.2545185 L17.952,11.2545185 L17.952,14.0385185 L18.0385185,14.0385185 C18.8823704,12.4373333 20.9481481,10.7496296 24.0272593,10.7496296 C30.4331852,10.7496296 31.6171852,14.9653333 31.6171852,20.4491852 L31.6171852,31.616 Z M4.75022222,8.47288889 C2.71762963,8.47288889 1.0797037,6.82903704 1.0797037,4.80237037 C1.0797037,2.77688889 2.71762963,1.13303704 4.75022222,1.13303704 C6.77451852,1.13303704 8.41837037,2.77688889 8.41837037,4.80237037 C8.41837037,6.82903704 6.77451852,8.47288889 4.75022222,8.47288889 Z M1.58222222,31.616 L7.91585185,31.616 L7.91585185,11.2545185 L1.58222222,11.2545185 L1.58222222,31.616 Z\" id=\"linkedin-icon\"></path>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n         <a class=\"no-link-style\" target=\"_blank\" href=\"/assets/DesignResume.pdf\" download>\n            <div class=\"icon resume\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 20</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1886.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-20\" transform=\"translate(500.000000, 0.000000)\">\n                                    <rect id=\"resume-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"resume-icon\" transform=\"translate(25.000000, 23.000000)\" fill=\"#929292\">\n                                        <circle id=\"Oval\" cx=\"15.3199142\" cy=\"10.5329906\" r=\"10.5329906\"></circle>\n                                        <path d=\"M30.7699867,32.139226 C30.7699867,23.6423288 23.8818905,16.7542326 15.3849933,16.7542326 C6.88809614,16.7542326 0,23.6423288 0,32.139226 C0,33.4079382 0.668011206,34.0039669 1.80971609,34.2104124 C4.56574363,34.708763 10.2539061,34.27016 15.7971558,34.2104124 C20.5382804,34.1593105 25.1334949,34.1946368 28.0190713,34.1817847 C29.722272,34.1741988 30.7699867,33.6853453 30.7699867,32.139226 Z\" id=\"Oval\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a> \n        <a class=\"no-link-style\" href=\"mailto:gs@georgesaieed.com\">\n            <div class=\"icon contact\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 21</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1986.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-21\" transform=\"translate(600.000000, 0.000000)\">\n                                    <rect id=\"contact-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"pencil-7\" transform=\"translate(25.000000, 23.066435)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M2.03730797,23.9036579 L0,34.0023584 L10.0972837,31.9650504 L28.008026,14.0571417 L19.9466335,5.99574919 L2.03730797,23.9036579 Z M5.25478113,27.0956293 L4.05053094,25.8927959 L19.8347091,10.131286 L21.0375425,11.3341195 L5.25478113,27.0956293 Z M34.0023584,8.0599757 L30.0113316,12.053836 L21.9499391,3.99102682 L25.9395492,-8.8817842e-16 L34.0023584,8.0599757 L34.0023584,8.0599757 Z\" id=\"contact-icon\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n    </div>\n    </div>\n    \n    <div class=\"experience\">\n        <div class=\"title exp\">Experience</div>\n        <div class=\"position accent\">\n            <span class=\"name\">Accenture</span>\n            <span class=\"year\">Jun. - Sep. 2017</span>\n            <span class=\"content\">\n                <span class=\"role\">Technology Summer Analyst</span>\n                <span class=\"work\">\n                    Used Angular2 and React to build the front-end of several client demo applications, \n                    one of which helped close an $80 million deal. In addition, wrote functional tests\n                    using Cucumber and Selenium, and unit tests using Jasmine. Lastly, built microservices\n                    using Java Spring Cloud and Netflix OSS stack.\n                </span>\n            </span>\n        </div>\n        <div class=\"position ic\">\n            <span class=\"name\">Inventory Connection</span>\n            <span class=\"year\">Jun. 2016 - Jun. 2017</span>\n            <span class=\"content\">\n                <span class=\"role\">Full Stack Developer</span>\n                <span class=\"work\">\n                    Designed and developed both the front-end and back-end for the company's flagship application,\n                    using Sketch, HTML, CSS, jQuery, C#, and .NET.\n                </span>\n            </span>\n        </div>\n        <div class=\"position explorer\">\n            <span class=\"name\">ExplORer Surgical</span>\n            <span class=\"year\">May - Nov. 2016</span>\n            <span class=\"content\">\n                <span class=\"role\">Technical Operations Intern</span>\n                <span class=\"work\">\n                    Helped create tutorial videos for the flagship application, as well as helped with\n                    various technical issues and ensuring HIPAA compliance.\n                </span>\n            </span>\n        </div>\n        <div class=\"position sewickley\">\n            <span class=\"name\">Sewickley Academy</span>\n            <span class=\"year\">Aug. - Sep. 2015</span>\n            <span class=\"content\">\n                <span class=\"role\">Information Technology Intern</span>\n                <span class=\"work\">\n                    Assisted in computer/network set up and day-to-day technology maintenance.\n                </span>\n            </span>\n        </div>\n        <div class=\"position saieed\">\n            <span class=\"name\">Saieed H. Saieed M.D.</span>\n            <span class=\"year\">Sep. 2011 - Aug. 2015</span>\n            <span class=\"content\">\n                <span class=\"role\">Information Technology Intern</span>\n                <span class=\"work\">\n                    Set up an electronic medical records system, ensuring security via firewalls \n                    and VPN tunnels. Also maintained any all computers and technology used in the office.\n                </span>\n            </span>\n        </div>\n    </div>\n    <div class=\"volunteer\">\n        <div class=\"title\">Volunteer Work</div>\n        <div class=\"position all\">\n            <span class=\"name\">All for One</span>\n            <span class=\"year\">Sep. 2012 - Present</span>\n            <span class=\"content\">\n                <span class=\"role\">Co-Founder</span>\n                <span class=\"work\">\n                    Helped found an organization that raises money for orphaned children in Egypt. \n                    Through bake sales and t-shirt sales, we have, to date, raised and sent approximately $9,000.\n                </span>\n            </span>\n        </div>\n        <div class=\"position upmc\">\n            <span class=\"name\">UPMC Children's</span>\n            <span class=\"year\">Jun. 2014 - Aug. 2015</span>\n            <span class=\"content\">\n                <span class=\"role\">Volunteer Researcher</span>\n                <span class=\"work\">\n                    Wrote script to process/analyze MRI data for use in various projects involving\n                    the cognitive development of neonates\n                </span>\n            </span>\n        </div>\n        <div class=\"position academy\">\n            <span class=\"name\">Sewickley Academy</span>\n            <span class=\"year\">Sep. 2011 - Feb. 2015</span>\n            <span class=\"content\">\n                <span class=\"role\">Mathcounts Coach</span>\n                <span class=\"work\">\n                    Tutored middle school students in math, helping them learn college level topics\n                    to compete at the national Mathcounts Competition.\n                </span>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"volunteer\">\n        <div class=\"title\">Awards</div>\n        <div class=\"position academy\">\n            <span class=\"name\">Rotary Award</span>\n            <span class=\"year\">March 2014</span>\n            <span class=\"content\">\n                <span class=\"role\">Rotary Award for Excellence in Service to Humanity</span>\n                <span class=\"work\">\n                    Award given by the Rotary Club to recognize non-Rotarians who\n                    \"have demonstrated exemplary humanitarian service consistent \n                    with Rotary's ideals.\" Received after nearly 600 hours of community\n                    service over the course of three years.\n                </span>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"skills\">\n        <div class=\"title\">Skills</div>\n        <div class=\"skill-container\">\n            <img class=\"html\" src=\"./../../../assets/img/tech-svgs/html.svg\">\n            <img class=\"css\" src=\"./../../../assets/img/tech-svgs/css.svg\">\n            <img class=\"python\" src=\"./../../../assets/img/tech-svgs/python.svg\">\n            <img class=\"twilio\" src=\"./../../../assets/img/tech-svgs/twilio.svg\">\n            <img class=\"swift\" src=\"./../../../assets/img/tech-svgs/swift.svg\">\n            <img class=\"r\" src=\"./../../../assets/img/tech-svgs/r.svg\">\n            <img class=\"java\" src=\"./../../../assets/img/tech-svgs/java.svg\">\n            <img class=\"ruby\" src=\"./../../../assets/img/tech-svgs/ruby.svg\">\n            <img class=\"angular\" src=\"./../../../assets/img/tech-svgs/angular.svg\">\n            <img class=\"react\" src=\"./../../../assets/img/tech-svgs/react.svg\">\n            <img class=\"net\" src=\"./../../../assets/img/tech-svgs/net.svg\">\n            <img class=\"photoshop\" src=\"./../../../assets/img/tech-svgs/photoshop.svg\">\n            <img class=\"sketch\" src=\"./../../../assets/img/tech-svgs/sketch.svg\">\n            <img class=\"lightroom\" src=\"./../../../assets/img/tech-svgs/lightroom.svg\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/home/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/about/about.component.css")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n    padding: 40px 85px 60px;\n}\n\n.content {\n    background: none;\n    border: none;\n    color: #ddd;\n    font-size: 23px;\n    padding: 36px 0 20px;\n    font-weight: 200;\n    width: 600px;\n}\n\n.submit {\n    padding: 10px 0 0 0;\n    width: auto;\n    text-transform: uppercase;\n    font-family: 'AlexandriaFLF', serif;\n    font-weight: bold;\n    letter-spacing: 2px;\n    border-bottom: solid 2px white;\n    margin: 0 auto;\n    cursor: pointer;\n    -webkit-transition: color 1s ease-out, border 1s;\n}\n\n.submit:hover {\n    color: #00AB6C;\n    border-bottom: solid 2px #00AB6C;\n}\n\n.name {\n    padding: 0 0 0 75px;\n    font-size: 27px;\n    width: 550px;\n}\n\n.position {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    border-bottom: solid 1px gray;;\n}\n\n.question {\n    border: none;\n}\n\n.submission {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.question-name {\n    float: left;\n    margin-top: 32px;\n    margin-right: 5px;\n}\n\n.t-name {\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n.t-email {\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.t-question {\n     -webkit-animation: container-fade 1.5s;\n             animation: container-fade 1.5s;\n}\n\n.t-submit {\n    -webkit-animation: container-fade 2s;\n            animation: container-fade 2s;\n}\n\n.content::-webkit-input-placeholder {\n    color: gray;\n}\n\n@-webkit-keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@media(max-width: 1385px) {\n    .name {\n        width: 450px;\n    }\n}\n\n@media(max-width: 1292px) {\n    .content {\n        width: 500px;\n    }\n\n    .submit {\n        width: auto;\n    }\n}\n\n@media(max-width: 1175px) {\n    .name, .content {\n        width: 100%;\n        display: block;\n    }\n\n    .name {\n        padding-left: 0;\n    }\n\n    .content {\n        padding-top: 5px;\n    }\n\n    .position {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n\n    .name, .question-name {\n        margin-top: 35px;\n    }\n}\n\n@media(max-width: 808px) {\n    .form {\n        padding: 40px 30px 50px;\n    }\n}\n\n@media(max-width: 550px) {\n    .name {\n        font-size: 23px;\n        font-weight: 500;\n    }\n\n    .content {\n        font-size: 19px;\n        font-weight: 400;\n    }\n}\n\n@media(max-width: 451px) {\n    .form {\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n}\n\n@media(max-width: 400px) {\n    .name {\n        font-size: 21px;\n    }\n\n    .content {\n        font-size: 17px;\n    }\n}\n\n@media(max-width: 350px) {\n    .name {\n        font-size: 20px;\n    }\n\n    .content {\n        font-size: 16px;\n    }\n}\n\n@media(max-width: 603px) {\n    .form {\n        padding-top: 30px;\n    }\n}\n\n@media(max-width: 470px) {\n    .form {\n        padding-top: 15px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <form id=\"contact-form\" name=\"sentMessage\" action = \"https://formspree.io/gs@georgesaieed.com\" method=\"POST\" novalidate> \n        <div class=\"position t-name\">\n            <div class=\"\"> \n                <label class=\"name\">Name</label>\n                <input type=\"text\" class=\"content\" placeholder=\"enter here\" id=\"name\" required data-validation-required-message=\"Please enter your name.\" name = \"PersonName\">\n                <p class=\"\"></p>\n            </div>\n        </div> \n        <div class=\"position t-email\">\n            <div class=\"\">\n                <label class=\"name\">Email Address</label>\n                <input type=\"email\" class=\"content\" placeholder=\"enter here\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\" name = \"_replyto\">\n                <p class=\"\"></p> \n            </div> \n        </div> \n        <div class=\"position question t-question\"> \n            <div class=\"\"> \n                <label class=\"name question-name\">What's Your Question?</label> \n                <textarea rows=\"3\" class=\"content\" placeholder=\"enter here\" id=\"message\" required data-validation-required-message=\"Please enter a message.\" name = \"PersonQuestion\"></textarea>\n                <p class=\"\"></p> \n            </div> \n        </div> \n        <br> \n        <div id=\"success\"></div>\n        <div class=\"submission t-submit\"> \n            <div class=\"\"> \n                <input type=\"text\" name=\"_gotcha\" style=\"display:none\" /> \n                <input type=\"hidden\" name=\"_next\" value=\"/thanks\" />\n                <button type=\"submit\" id='contact-submit' class=\"content submit\">Submit</button>\n            </div> \n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css")]
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/design/design.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n    margin: 75px auto 0px;\n    padding-bottom: 120px;\n    transition: opacity 1s ease;\n}\n\n.row {\n    padding-left: 45px;\n    padding-right: 45px;\n}\n\n.tile {\n    height: 360px;\n    width: 360px;\n    border-radius: 3px;\n    position: relative;\n    margin: 20px auto;\n    cursor: pointer;\n    transition: -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n.tile:hover {\n    -webkit-transform: translateY(-5px) translateX(5px);\n            transform: translateY(-5px) translateX(5px);\n}\n\n.tile__imgs {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 37px;\n}\n\n.desktop, .mobile {\n    box-shadow: -4px 13px 23px rgba(0, 0, 0, 0.5);\n    display: inline-block;\n}\n\n.desktop {\n    width: 215px;\n    height: 134px;\n    margin-left: 31px;\n    margin-right: 30px;\n    border-radius: 3px;\n}\n\n.mobile {\n    width: 50px;\n    height: 89px;\n    position: absolute;\n    bottom: 0;\n    border-radius: 2px;\n}\n\n.small-icon {\n    height: 50px;\n}\n\n.tile__imgs__mobile {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 33px;\n    margin-left: 6px;\n}\n\n.mobile-triple {\n    width: 72px;\n    margin-left: 27px;\n    border-radius: 3px;\n    box-shadow: -4px 17px 23px rgba(0, 0, 0, 0.5);\n}\n\n.tile__info {\n    margin-left: 33px;\n    margin-top: 32px;\n}\n\n.tile__info * {\n    display: block;\n}\n\n.client__value {\n    padding-bottom: 15px;\n}\n\n.client__label, .project__label {\n    font-family: 'AlexandriaFLF', serif;\n    text-transform: uppercase;\n    font-size: 21px;\n}\n\n.client__value, .project__value {\n    font-size: 16px;\n    font-weight: 300;\n}\n\n.tile__tech {\n    position: absolute;\n    bottom: 45px;\n    right: 25px;\n}\n\n.tech-svg {\n    height: 17px;\n}\n\n.year {\n    position: absolute;\n    font-size: 17px;\n    font-weight: 200;\n    bottom: 15px;\n    right: 25px;\n}\n\n@media(max-width: 470px) {\n    .tile {\n        height: 295px;\n        width: 295px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 25px;\n    }\n\n    .desktop {\n        width: 180px;\n        height: 112px;\n        margin-left: 25px;\n        margin-right: 15px;\n        border-radius: 3px;\n    }\n\n    .tile__info {\n        margin-left: 25px;\n    }\n\n    .client__label, .project__label {\n        font-size: 18px;\n    }\n\n    .client__value, .project__value {\n        font-size: 14px;\n    }\n\n    .tile__tech {\n        bottom: 40px;\n    }\n\n    .tech-svg {\n        height: 15px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 13px;\n    }\n\n}\n\n@media(max-width: 372px) {\n    .tile {\n        height: 250px;\n        width: 250px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 18px;\n    }\n\n    .desktop {\n        width: 160px;\n        height: 100px;\n        margin-left: 20px;\n        margin-right: 12px;\n        border-radius: 3px;\n    }\n\n    .mobile {\n        width: 35px;\n        height: 62px;\n    }\n\n    .tile__info {\n        margin-top: 25px;\n        margin-left: 25px;\n    }\n\n    .client__label, .project__label {\n        font-size: 15px;\n    }\n\n    .client__value, .project__value {\n        font-size: 11px;\n    }\n\n    .client__value {\n        padding-bottom: 10px;\n    }\n\n    .tile__tech {\n        bottom: 32px;\n    }\n\n    .tech-svg {\n        height: 13px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 11px;\n    }\n\n    .small-icon {\n        height: 35px;\n    }\n\n}\n\n.winner {\n    position: absolute;\n    z-index: 2;\n    top: -2px;\n    left: -1px;\n    width: 32%;\n}\n\n\n.fb {\n    background-color: rgba(19, 76, 165, 1);\n    box-shadow: -9px 9px 0 rgba(19, 76, 165, 0.23);\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n.pres {\n    background-color: rgba(33, 92, 69, 1);\n    box-shadow: -9px 9px 0 rgba(33, 92, 69, 0.23);\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.aig {\n    background-color: rgba(92, 27, 115, 1);\n    box-shadow: -9px 9px 0 rgba(92, 27, 115, 0.23);\n    -webkit-animation: container-fade 1.5s;\n            animation: container-fade 1.5s;\n}\n\n.uw {\n    background-color: rgba(117, 60, 58, 1);\n    box-shadow: -9px 9px 0 rgba(117, 60, 58, 0.23);\n    -webkit-animation: container-fade 2s;\n            animation: container-fade 2s;\n}\n\n.ig {\n    background-color: rgba(66, 46, 39, 1);\n    box-shadow: -9px 9px 0 rgba(66, 46, 39, 0.23);\n    -webkit-animation: container-fade 2.5s;\n            animation: container-fade 2.5s;\n}\n\n.poly {\n    background-color: rgba(47, 54, 98, 1);\n    box-shadow: -9px 9px 0 rgba(47, 54, 98, 0.23);\n    -webkit-animation: container-fade 3s;\n            animation: container-fade 3s;\n}\n\n@-webkit-keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@media(max-width: 1268px) {\n    .row {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n\n@media(max-width: 603px) {\n    .container-fluid {\n        margin: 40px auto 0px;\n    }\n}\n\n@media(max-width: 470px) {\n    .container-fluid {\n        margin: 25px auto 0px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/design/design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile fb\" (click)=\"openProject('fb')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/fb/fb-d-thumb.jpg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> UI Design </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile pres\" (click)=\"openProject('pres')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/pres/pres-d-thumb.jpg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Presentation </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile aig\" (click)=\"openProject('aig')\">\n                <img class=\"winner\" src=\"./../../../assets/img/development/uncommon/winner.png\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/aig/aig-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/design/aig/aig-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> American International Group </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> UI Design </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile uw\" (click)=\"openProject('uw')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/uw/uw-d-thumb.jpg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Unaccompanied Women </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Poster </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/photoshop.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile ig\" (click)=\"openProject('ig')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/ig/ig-d-thumb.jpg\"/>\n                    <img class=\"mobile small-icon\" src=\"./../../../assets/img/design/ig/ig-m-thumb.png\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> App Icon Design </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile poly\" (click)=\"openProject('poly')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/design/poly/poly-d-thumb.jpg\"/>\n                    <img class=\"mobile small-icon\" src=\"./../../../assets/img/design/poly/poly-m-thumb.jpg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Low Polygon Art </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/photoshop.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/design/design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignComponent = (function () {
    function DesignComponent(router) {
        this.router = router;
    }
    DesignComponent.prototype.openProject = function (project) {
        this.router.navigate(['project', project]);
    };
    return DesignComponent;
}());
DesignComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-design',
        template: __webpack_require__("../../../../../src/app/home/design/design.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/design/design.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DesignComponent);

var _a;
//# sourceMappingURL=design.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/development/development.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n    margin: 75px auto 0px;\n    padding-bottom: 120px;\n    transition: opacity 1s ease;\n}\n\n.row {\n    padding-left: 45px;\n    padding-right: 45px;\n}\n\n.tile {\n    height: 360px;\n    width: 360px;\n    border-radius: 3px;\n    position: relative;\n    margin: 20px auto;\n    cursor: pointer;\n    transition: -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n.tile:hover {\n    -webkit-transform: translateY(-5px) translateX(5px);\n            transform: translateY(-5px) translateX(5px);\n}\n\n.tile__imgs {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 37px;\n}\n\n.desktop, .mobile {\n    box-shadow: -4px 13px 23px rgba(0, 0, 0, 0.5);\n    display: inline-block;\n}\n\n.desktop {\n    width: 215px;\n    height: 134px;\n    margin-left: 31px;\n    margin-right: 30px;\n    border-radius: 3px;\n}\n\n.mobile {\n    width: 50px;\n    height: 89px;\n    position: absolute;\n    bottom: 0;\n    border-radius: 2px;\n}\n\n.tile__imgs__mobile {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 33px;\n    margin-left: 6px;\n}\n\n.mobile-triple {\n    width: 72px;\n    margin-left: 27px;\n    border-radius: 3px;\n    box-shadow: -4px 17px 23px rgba(0, 0, 0, 0.5);\n}\n\n.tile__info {\n    margin-left: 33px;\n    margin-top: 32px;\n}\n\n.tile__info * {\n    display: block;\n}\n\n.client__value {\n    padding-bottom: 15px;\n}\n\n.client__label, .project__label {\n    font-family: 'AlexandriaFLF', serif;\n    text-transform: uppercase;\n    font-size: 21px;\n}\n\n.client__value, .project__value {\n    font-size: 16px;\n    font-weight: 300;\n}\n\n.tile__tech {\n    position: absolute;\n    bottom: 45px;\n    right: 25px;\n}\n\n.tech-svg {\n    height: 17px;\n}\n\n.year {\n    position: absolute;\n    font-size: 17px;\n    font-weight: 200;\n    bottom: 15px;\n    right: 25px;\n}\n\n@media(max-width: 470px) {\n    .tile {\n        height: 295px;\n        width: 295px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 25px;\n    }\n\n    .desktop {\n        width: 180px;\n        height: 112px;\n        margin-left: 25px;\n        margin-right: 15px;\n        border-radius: 3px;\n    }\n\n    .tile__info {\n        margin-left: 25px;\n    }\n\n    .client__label, .project__label {\n        font-size: 18px;\n    }\n\n    .client__value, .project__value {\n        font-size: 14px;\n    }\n\n    .tile__tech {\n        bottom: 40px;\n    }\n\n    .tech-svg {\n        height: 15px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 13px;\n    }\n\n    .mobile-triple {\n        width: 60px;\n        margin-left: 20px;\n    }\n\n    .tile__imgs__mobile { \n        padding-top: 24px;\n    }\n\n}\n\n@media(max-width: 372px) {\n    .tile {\n        height: 250px;\n        width: 250px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 18px;\n    }\n\n    .desktop {\n        width: 160px;\n        height: 100px;\n        margin-left: 20px;\n        margin-right: 12px;\n        border-radius: 3px;\n    }\n\n    .mobile {\n        width: 35px;\n        height: 62px;\n    }\n\n    .tile__info {\n        margin-top: 25px;\n        margin-left: 25px;\n    }\n\n    .client__label, .project__label {\n        font-size: 15px;\n    }\n\n    .client__value, .project__value {\n        font-size: 11px;\n    }\n\n    .client__value {\n        padding-bottom: 10px;\n    }\n\n    .tile__tech {\n        bottom: 32px;\n    }\n\n    .tech-svg {\n        height: 13px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 11px;\n    }\n\n    .mobile-triple {\n        width: 52px;\n        margin-left: 16px;\n    }\n\n    .tile__imgs__mobile { \n        padding-top: 22px;\n    }\n\n}\n\n\n\n.dev-rfc {\n    background-color: rgba(22, 85, 53, 1);\n    box-shadow: -9px 9px 0 rgba(22, 85, 53, 0.23);\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n.hack-harvard {\n    background-color: rgba(37, 105, 135, 1);\n    box-shadow: -9px 9px 0 rgba(37, 105, 135, 0.23);\n    -webkit-animation: container-fade 1s;\n            animation: container-fade 1s;\n}\n\n.stmcoc {\n    background-color: rgba(102, 40, 53, 1);\n    box-shadow: -9px 9px 0 rgba(102, 40, 53, 0.23);\n    -webkit-animation: container-fade 1.5s;\n            animation: container-fade 1.5s;\n}\n\n.uofc {\n    background-color: rgba(28, 96, 26, 1);\n    box-shadow: -9px 9px 0 rgba(28, 96, 26, 0.23);\n    -webkit-animation: container-fade 2s;\n            animation: container-fade 2s;\n}\n\n.uncommon {\n    background-color: rgba(75, 79, 90, 1);\n    box-shadow: -9px 9px 0 rgba(75, 79, 90, 0.23);\n    -webkit-animation: container-fade 2.5s;\n            animation: container-fade 2.5s;\n}\n\n.winner {\n    position: absolute;\n    z-index: 2;\n    top: -2px;\n    left: -1px;\n    width: 32%;\n}\n\n.calc {\n    background-color: rgba(45, 36, 97, 1);\n    box-shadow: -9px 9px 0 rgba(45, 36, 97, 0.23);\n    -webkit-animation: container-fade 3s;\n            animation: container-fade 3s;\n}\n\n.old {\n    background-color: rgba(63, 54, 42, 1);\n    box-shadow: -9px 9px 0 rgba(63, 54, 42, 0.23);\n    -webkit-animation: container-fade 3.5s;\n            animation: container-fade 3.5s;\n}\n\n@-webkit-keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@media(max-width: 1268px) {\n    .row {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n\n@media(max-width: 603px) {\n    .container-fluid {\n        margin: 40px auto 0px;\n    }\n}\n\n@media(max-width: 470px) {\n    .container-fluid {\n        margin: 25px auto 0px;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/development/development.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12 columnz\">\n            <div class=\"tile dev-rfc\" (click)=\"openProject('rfc')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/development/rfc/rfc-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/development/rfc/rfc-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Run for Cover </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Website </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/html.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/css.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/jquery.svg\"/>\n                </div>\n                <span class=\"year\"> 2017 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile hack-harvard\" (click)=\"openProject('hh')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/development/hh/hh-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/development/hh/hh-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> HackHarvard </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Website </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/html.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/css.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/gmaps.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/gvoice.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile stmcoc\" (click)=\"openProject('stmcoc')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/development/stmcoc/stmcoc-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/development/stmcoc/stmcoc-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> St. Mary's Coptic Orthodox Church </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Website </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/html.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/css.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/jquery.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile uofc\" (click)=\"openProject('uofc')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/development/uofc/uofc-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/development/uofc/uofc-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> University of Chicago </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Twilio Application </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/python.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/twilio.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile uncommon\" (click)=\"openProject('uncommon')\">\n                <img class=\"winner\" src=\"./../../../assets/img/development/uncommon/winner.png\">\n                <div class=\"tile__imgs__mobile\">\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/uncommon/uncommon-m-1.jpeg\"/>\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/uncommon/uncommon-m-2.jpeg\"/>\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/uncommon/uncommon-m-3.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Uncommon Hacks </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> iOS Application </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/swift.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile calc\" (click)=\"openProject('calc')\">\n                <div class=\"tile__imgs__mobile\">\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/calc/calc-m-1.jpg\"/>\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/calc/calc-m-2.jpg\"/>\n                    <img class=\"mobile-triple\" src=\"./../../../assets/img/development/calc/calc-m-3.jpg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> iOS Application </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/swift.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile old\" (click)=\"openProject('old')\">\n                <div class=\"tile__imgs\">\n                    <img class=\"desktop\" src=\"./../../../assets/img/development/old/old-d-thumb.jpeg\"/>\n                    <img class=\"mobile\" src=\"./../../../assets/img/development/old/old-m-thumb.jpeg\"/>\n                </div>\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Project Type </span>\n                    <span class=\"project__value\"> Website </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/html.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/css.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/jquery.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/sketch.svg\"/>\n                </div>\n                <span class=\"year\"> 2015 - 2016 </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/development/development.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevelopmentComponent = (function () {
    function DevelopmentComponent(router) {
        this.router = router;
    }
    DevelopmentComponent.prototype.openProject = function (project) {
        this.router.navigate(['project', project]);
    };
    return DevelopmentComponent;
}());
DevelopmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-development',
        template: __webpack_require__("../../../../../src/app/home/development/development.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/development/development.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DevelopmentComponent);

var _a;
//# sourceMappingURL=development.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* element styling */\na:link, a:visited, a:hover, a:active {\n    color: white;\n    text-decoration: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\n/* Header wide styling */\n.header {\n    padding: 75px 85px 0px;\n}\n\n\n/* Name styling */\n.header__intro {\n    font-size: 45px;\n    font-weight: 600;\n}\n\n.header__name {\n    font-size: 45px;\n    font-weight: 200;\n}\n\n/* all icon styling */\n\n.icon {\n    display: inline-block;\n    height: 50px;\n    margin-left: 10px;\n}\n\n.icon:hover {\n    cursor: pointer;\n}\n\n.icons {\n    position: absolute;\n    right: 110px;\n    top: 110px;\n    display: block;\n}\n\nsvg {\n    width: 50px;\n    height: 50px;\n}\n\n.medium {\n    margin-top: -40px;\n}\n\n\n/* Spotify icon styling */\n.spotify:hover #spotify-circle {\n    stroke: #84bd00;\n}\n\n.spotify:hover #spotify-icon {\n    fill: #84bd00;\n}\n\n#spotify-circle {\n    transition: stroke 1s ease;\n}\n\n#spotify-icon {\n    transition: fill 1s ease;\n}\n\n/* Facebook icon styling */\n.facebook:hover #facebook-circle {\n    stroke: #3b5998;\n}\n\n.facebook:hover #facebook-icon {\n    fill: #3b5998;\n}\n\n#facebook-circle {\n    transition: stroke 1s ease;\n}\n\n#facebook-icon {\n    transition: fill 1s ease;\n}\n\n/* Github icon styling */\n.github:hover #github-circle {\n    stroke: #4078c0;\n}\n\n.github:hover #github-icon {\n    fill: #4078c0;\n}\n\n#github-circle {\n    transition: stroke 1s ease;\n}\n\n#github-icon {\n    transition: fill 1s ease;\n}\n\n/* LinkedIn icon styling */\n.linkedin:hover #linkedin-circle {\n    stroke: #0077b5;\n}\n\n.linkedin:hover #linkedin-icon {\n    fill: #0077b5;\n}\n\n#linkedin-circle {\n    transition: stroke 1s ease;\n}\n\n#linkedin-icon {\n    transition: fill 1s ease;\n}\n\n/* Resume icon styling */\n.resume:hover #resume-circle {\n    stroke: #8f1ac9;\n}\n\n.resume:hover #resume-icon {\n    fill: #8f1ac9;\n}\n\n#resume-circle {\n    transition: stroke 1s ease;\n}\n\n#resume-icon {\n    transition: fill 1s ease;\n}\n\n/* Contact icon styling */\n.contact:hover #contact-circle {\n    stroke: #a0102a;\n}\n\n.contact:hover #contact-icon {\n    fill: #a0102a;\n}\n\n#contact-circle {\n    transition: stroke 1s ease;\n}\n\n#contact-icon {\n    transition: fill 1s ease;\n}\n\n/* Categories Styling */\n.categories {\n    margin-top: 55px;\n    margin-left: 6px;\n}\n\n.category {\n    display: inline-block;\n    font-weight: 200;\n    font-size: 23px;\n    margin-right: 128px;\n    cursor: pointer;\n}\n\n.category:hover .select{\n    cursor: pointer;\n    opacity: 1;\n}\n\n.select {\n    opacity: 0;\n    height: 2px;\n    width: 50%;\n    margin: 13px auto 0px;\n    background: white;\n    transition: opacity 1s ease;\n}\n\n.active {\n    opacity: 1;\n}\n\n.categories__contact {\n    margin-right: 0;\n}\n\n.ico {\n    height: 45px;\n    display: none;\n}\n\n@media(max-width: 1340px) {\n    .categories {\n        margin-top: 45px;\n    }\n\n    .category {\n        margin-right: 60px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n}\n\n@media(max-width: 1111px) {\n    .categories {\n        margin-top: 35px;\n    }\n\n    .header {\n        padding: 60px 30px 0px;\n    }\n\n    .category {\n        margin-right: 40px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n}\n\n@media(max-width: 1055px) {\n    .linkz {\n        display: none;\n    }\n\n    .ico {\n        display: inline-block;\n    }\n}\n\n@media(max-width: 603px) {\n    .header {\n        padding: 30px 20px 0px;\n    }\n\n    .header__intro, .header__name {\n        font-size: 42px;\n    }\n\n    .categories {\n        margin-top: 25px;\n    }\n\n    .category {\n        margin-right: 35px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n\n    .ico {\n        height: 35px;\n    }\n}\n\n@media(max-width: 531px) {\n    .header__intro, .header__name {\n        font-size: 42px;\n    }\n    .ico {\n        height: 34px;\n    }\n\n    .category {\n        margin-right: 25px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n}\n\n@media(max-width: 433px) {\n    .header__intro, .header__name {\n        font-size: 42px;\n    }\n    .ico {\n        height: 34px;\n    }\n\n    .categories {\n        margin-top: 20px;\n    }\n\n    .category {\n        margin-right: 20px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n}\n\n@media(max-width: 395px) {\n    .header__intro, .header__name {\n        font-size: 40px;\n    }\n    .ico {\n        height: 34px;\n    }\n\n    .categories {\n        margin-top: 15px;\n    }\n\n    .category {\n        margin-right: 20px;\n    }\n\n    .categories__contact {\n        margin-right: 0;\n    }\n}\n\n@media(max-width: 355px) {\n    .header__intro, .header__name {\n        font-size: 35px;\n    }\n\n    .ico {\n        height: 29px;\n    }\n}\n\n@media(max-width: 1111px) {\n    .icons {\n        top: 95px;\n        right: 55px;\n    }\n}\n\n@media(max-width: 1055px) {\n    .icons {\n        display: none;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [hidden]=\"project || photography\">\n    <span class=\"header__intro\">George </span>\n    <span class=\"header__name\">Saieed</span>\n\n    <div class=\"icons\">\n        <a class=\"no-link-style\" target=\"_blank\" (click)=\"toBlog()\">\n            <img class=\"icon medium\" src=\"./../../../assets/img/head-icons/medium.svg\"/>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://open.spotify.com/artist/1WN22dBwn6fM3biZufox5W\">\n            <div class=\"icon spotify\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <title>Group 16</title>\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"Development\" transform=\"translate(-1486.000000, -216.000000)\">\n                            <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                                <g id=\"Group-7\">\n                                    <g id=\"Group-16\" transform=\"translate(100.000000, 0.000000)\">\n                                        <rect id=\"spotify-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                        <g id=\"Spotify_logo_with_text\" transform=\"translate(21.000000, 21.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                            <path d=\"M19.9990476,0.065952381 C8.98738095,0.065952381 0.0602380952,8.99285714 0.0602380952,20.0045238 C0.0602380952,31.0166667 8.98738095,39.9428571 19.9990476,39.9428571 C31.0119048,39.9428571 39.9380952,31.0166667 39.9380952,20.0045238 C39.9380952,8.99357143 31.0119048,0.0669047619 19.9988095,0.0669047619 L19.9990476,0.065952381 Z M29.1428571,28.8230952 C28.7857143,29.4088095 28.0190476,29.5945238 27.4333333,29.235 C22.7519048,26.3754762 16.8585714,25.7278571 9.91809524,27.3135714 C9.24928571,27.4659524 8.58261905,27.0469048 8.4302381,26.3778571 C8.27714286,25.7088095 8.69452381,25.0421429 9.365,24.8897619 C16.9602381,23.1545238 23.4752381,23.9016667 28.7309524,27.1135714 C29.3166667,27.4730952 29.502381,28.237381 29.1428571,28.8230952 L29.1428571,28.8230952 Z M31.5833333,23.3940476 C31.1333333,24.1254762 30.1761905,24.3564286 29.4452381,23.9064286 C24.0857143,20.6121429 15.9159524,19.6580952 9.57666667,21.582381 C8.75452381,21.8307143 7.88619048,21.367381 7.63666667,20.5466667 C7.38904762,19.7245238 7.85261905,18.8578571 8.67333333,18.6078571 C15.9145238,16.4107143 24.9166667,17.475 31.0714286,21.2571429 C31.802381,21.7071429 32.0333333,22.6642857 31.5833333,23.3942857 L31.5833333,23.3940476 Z M31.7928571,17.7407143 C25.3666667,13.9238095 14.7642857,13.5728571 8.62880952,15.435 C7.64357143,15.7338095 6.60166667,15.177619 6.30309524,14.192381 C6.00452381,13.2066667 6.5602381,12.1654762 7.54619048,11.8659524 C14.5892857,9.72785714 26.297619,10.1409524 33.6961905,14.5330952 C34.5842857,15.0590476 34.8747619,16.2035714 34.3485714,17.0885714 C33.8247619,17.9747619 32.6771429,18.2669048 31.7938095,17.7407143 L31.7928571,17.7407143 Z\" id=\"spotify-icon\"></path>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://www.facebook.com/gsaieedblog\">\n            <div class=\"icon facebook\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 17</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1586.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-17\" transform=\"translate(200.000000, 0.000000)\">\n                                    <rect id=\"facebook-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"facebook-app-symbol\" transform=\"translate(32.000000, 25.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M10.3357654,30.6627972 L10.3357654,16.6770799 L15.0283065,16.6770799 L15.732326,11.2249804 L10.3357654,11.2249804 L10.3357654,7.74460996 C10.3357654,6.16659429 10.7721706,5.09119559 13.0376034,5.09119559 L15.9222651,5.09000971 L15.9222651,0.213459033 C15.4234034,0.148630734 13.7109876,0 11.7179127,0 C7.55605448,0 4.70677168,2.54036014 4.70677168,7.20463767 L4.70677168,11.2249804 L0,11.2249804 L0,16.6770799 L4.70677168,16.6770799 L4.70677168,30.6627972 L10.3357654,30.6627972 Z\" id=\"facebook-icon\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://github.com/saieedgeorge0\">\n            <div class=\"icon github\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 18</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1686.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-18\" transform=\"translate(300.000000, 0.000000)\">\n                                    <g id=\"github-icon\" transform=\"translate(25.000000, 25.000000)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M11.3840435,33.175625 C11.373604,32.1413753 11.3687039,31.2391098 11.3687039,30.4692547 L10.6691552,30.590267 C10.2231357,30.6719715 9.66047144,30.7065921 8.98116249,30.6967918 C8.30217312,30.6873111 7.59729821,30.6161525 6.86749648,30.4838486 C6.13737518,30.3527166 5.45827929,30.0485881 4.82967617,29.5721025 C4.20139262,29.0956168 3.75537309,28.4719139 3.49172409,27.7019523 L3.18759566,27.002084 C2.98487887,26.5361444 2.66573043,26.0185401 2.22972424,25.4511888 C1.79371804,24.8833048 1.3528117,24.498324 0.906792166,24.2956073 L0.693848997,24.1431702 C0.551957902,24.0418651 0.420293191,23.9196811 0.298535292,23.7778965 C0.176883917,23.6361119 0.0858051731,23.4942208 0.0249794857,23.3521167 C-0.0359527266,23.209906 0.0145400507,23.0932613 0.176990442,23.0017565 C0.339440833,22.9102516 0.63302331,22.8658308 1.05901617,22.8658308 L1.66706,22.9566965 C2.07260009,23.0379749 2.57422559,23.280745 3.17257565,23.6864982 C3.77060614,24.0919318 4.26221831,24.6190167 4.64751868,25.26754 C5.11409751,26.0990729 5.67622912,26.7326827 6.3355114,27.1686889 C6.99426105,27.6046951 7.65844347,27.8223254 8.32741951,27.8223254 C8.99639554,27.8223254 9.57418631,27.7716195 10.0610049,27.6707405 C10.5472908,27.5693288 11.0035367,27.4168918 11.4295296,27.2142815 C11.6120066,25.8552375 12.1088385,24.8111875 12.9195991,24.0813858 C11.7640176,23.9599475 10.7250808,23.7770443 9.80225601,23.5338481 C8.87996388,23.2903323 7.92688608,22.8951251 6.94366175,22.3471613 C5.95990479,21.7999432 5.14381794,21.1204212 4.49518815,20.3097671 C3.84645183,19.4986869 3.31404065,18.4338645 2.89870027,17.1162587 C2.48314685,15.7981202 2.27531687,14.2775846 2.27531687,12.5542256 C2.27531687,10.1004258 3.07638372,8.01232573 4.67819783,6.28875371 C3.92783682,4.44395642 3.99867584,2.37588305 4.89092795,0.0847466477 C5.47894511,-0.0979434642 6.3509575,0.0391540134 7.50653904,0.495186882 C8.66233362,0.9514328 9.508567,1.34227246 10.0460914,1.66632105 C10.5836158,1.9902631 11.0142957,2.26477763 11.3387704,2.48741456 C13.2247928,1.96043615 15.1711083,1.69689368 17.1782494,1.69689368 C19.1853906,1.69689368 21.1321322,1.96043615 23.0182611,2.48741456 L24.1739492,1.75782589 C24.964257,1.27100734 25.8975212,0.824881282 26.9715047,0.419341191 C28.0461273,0.0140141496 28.86786,-0.0976238897 29.4358505,0.0850662223 C30.3479162,2.37630915 30.4291947,4.44427599 29.6786206,6.28907329 C31.2803282,8.01264531 32.0817146,10.101278 32.0817146,12.5545452 C32.0817146,14.2779042 31.873139,15.8032334 31.4582247,17.1314918 C31.0427778,18.4599631 30.505786,19.5237202 29.8470364,20.3250001 C29.1875411,21.1261735 28.3662345,21.8003693 27.3830102,22.3474809 C26.3995728,22.8950186 25.4461754,23.2902258 24.5238833,23.5337416 C23.6011651,23.7772574 22.5622282,23.960267 21.4066467,24.0819184 C22.4606035,24.9939842 22.9876885,26.4336675 22.9876885,28.4003292 L23.0182611,33.175625 C23.0182611,33.540153 11.3941633,34.2098747 11.3840435,33.175625 Z\" id=\"gitpath\"></path>\n                                    </g>\n                                    <rect id=\"github-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n        <a class=\"no-link-style\" target=\"_blank\" href=\"https://www.linkedin.com/in/gsaieed/\">\n            <div class=\"icon linkedin\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 12</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Design\" transform=\"translate(-1786.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-10\" transform=\"translate(400.000000, 0.000000)\">\n                                    <g id=\"Group-12\">\n                                        <rect id=\"linkedin-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                        <g id=\"Logo-2C-White-0p5in-R\" transform=\"translate(25.271186, 22.000000)\" fill=\"#979797\">\n                                            <g id=\"Group-11\">\n                                                <path d=\"M31.6171852,31.616 L25.2906667,31.616 L25.2906667,21.7137778 C25.2906667,19.3528889 25.2491852,16.3152593 22.0017778,16.3152593 C18.7093333,16.3152593 18.2068148,18.8882963 18.2068148,21.5454815 L18.2068148,31.616 L11.8862222,31.616 L11.8862222,11.2545185 L17.952,11.2545185 L17.952,14.0385185 L18.0385185,14.0385185 C18.8823704,12.4373333 20.9481481,10.7496296 24.0272593,10.7496296 C30.4331852,10.7496296 31.6171852,14.9653333 31.6171852,20.4491852 L31.6171852,31.616 Z M4.75022222,8.47288889 C2.71762963,8.47288889 1.0797037,6.82903704 1.0797037,4.80237037 C1.0797037,2.77688889 2.71762963,1.13303704 4.75022222,1.13303704 C6.77451852,1.13303704 8.41837037,2.77688889 8.41837037,4.80237037 C8.41837037,6.82903704 6.77451852,8.47288889 4.75022222,8.47288889 Z M1.58222222,31.616 L7.91585185,31.616 L7.91585185,11.2545185 L1.58222222,11.2545185 L1.58222222,31.616 Z\" id=\"linkedin-icon\"></path>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n         <a class=\"no-link-style\" target=\"_blank\" href=\"/assets/DesignResume.pdf\" download>\n            <div class=\"icon resume\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 20</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1886.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-20\" transform=\"translate(500.000000, 0.000000)\">\n                                    <rect id=\"resume-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"resume-icon\" transform=\"translate(25.000000, 23.000000)\" fill=\"#929292\">\n                                        <circle id=\"Oval\" cx=\"15.3199142\" cy=\"10.5329906\" r=\"10.5329906\"></circle>\n                                        <path d=\"M30.7699867,32.139226 C30.7699867,23.6423288 23.8818905,16.7542326 15.3849933,16.7542326 C6.88809614,16.7542326 0,23.6423288 0,32.139226 C0,33.4079382 0.668011206,34.0039669 1.80971609,34.2104124 C4.56574363,34.708763 10.2539061,34.27016 15.7971558,34.2104124 C20.5382804,34.1593105 25.1334949,34.1946368 28.0190713,34.1817847 C29.722272,34.1741988 30.7699867,33.6853453 30.7699867,32.139226 Z\" id=\"Oval\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a> \n        <a class=\"no-link-style\" href=\"mailto:gs@georgesaieed.com\">\n            <div class=\"icon contact\">\n                <svg width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group 21</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Development\" transform=\"translate(-1986.000000, -216.000000)\">\n                        <g id=\"Group-14\" transform=\"translate(1386.000000, 216.000000)\">\n                            <g id=\"Group-7\">\n                                <g id=\"Group-21\" transform=\"translate(600.000000, 0.000000)\">\n                                    <rect id=\"contact-circle\" stroke=\"#929292\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                                    <g id=\"pencil-7\" transform=\"translate(25.000000, 23.066435)\" fill-rule=\"nonzero\" fill=\"#929292\">\n                                        <path d=\"M2.03730797,23.9036579 L0,34.0023584 L10.0972837,31.9650504 L28.008026,14.0571417 L19.9466335,5.99574919 L2.03730797,23.9036579 Z M5.25478113,27.0956293 L4.05053094,25.8927959 L19.8347091,10.131286 L21.0375425,11.3341195 L5.25478113,27.0956293 Z M34.0023584,8.0599757 L30.0113316,12.053836 L21.9499391,3.99102682 L25.9395492,-8.8817842e-16 L34.0023584,8.0599757 L34.0023584,8.0599757 Z\" id=\"contact-icon\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                </svg>\n            </div>\n        </a>\n    </div>\n\n    <div class=\"categories\">\n        <div routerLink=\"/home/development\" id=\"dev_id\" class=\"category categories__dev\" (click)=\"changeCategory('development')\">\n            <span class=\"dev__text\">\n                <img class=\"ico\" src=\"./../../../assets/img/section-icons/dev.svg\"/>\n                <div class=\"linkz\">\n                Development\n                </div>\n            </span>\n            <div class=\"select\" routerLink=\"/home/development\" routerLinkActive=\"active\" [class.active]=\"currentCategory === 'development'\">\n            </div>\n        </div>\n        <div routerLink=\"/home/design\" id=\"des_id\" class=\"category categories__des\" (click)=\"changeCategory('design')\">\n            <span class=\"des__text\">\n                <img class=\"ico\" src=\"./../../../assets/img/section-icons/des.svg\"/>\n                <div class=\"linkz\">\n                Design\n                </div>\n            </span>\n            <div class=\"select\" routerLink=\"/home/design\" routerLinkActive=\"active\">\n            </div>\n        </div>\n        <div routerLink=\"/home/photography\" id=\"photo_id\" class=\"category categories__photo\" (click)=\"changeCategory('photography')\">\n            <span class=\"photo__text\">\n                <img class=\"ico\" src=\"./../../../assets/img/section-icons/photo.svg\"/>\n                <div class=\"linkz\">\n                Photography\n                </div>\n            </span>\n            <div class=\"select\" routerLink=\"/home/photography\" routerLinkActive=\"active\">\n            </div>\n        </div>\n        <div routerLink=\"/home/about\" id=\"about_id\" class=\"category categories__about\" (click)=\"changeCategory('about')\">\n            <span class=\"about__text\">\n                <img class=\"ico\" src=\"./../../../assets/img/section-icons/about.svg\"/>\n                <div class=\"linkz\">\n                About\n                </div>\n            </span>\n            <div class=\"select\" routerLink=\"/home/about\" routerLinkActive=\"active\">\n            </div>\n        </div>\n        <div routerLink=\"/home/contact\" id=\"contact_id\" class=\"category categories__contact\" (click)=\"changeCategory('contact')\">\n            <span class=\"contact__text\">\n                <img class=\"ico\" src=\"./../../../assets/img/section-icons/contact.svg\"/>\n                <div class=\"linkz\">\n                Contact\n                </div>\n            </span>\n            <div class=\"select\" routerLink=\"/home/contact\" routerLinkActive=\"active\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__("../../../../../src/app/services/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(homeService, location, router) {
        var _this = this;
        this.homeService = homeService;
        this.router = router;
        this.possibleCategories = ['development', 'design', 'photography', 'about', 'contact'];
        router.events.subscribe(function (val) {
            window.scrollTo(0, 0);
            _this.currentCategory = 'development';
            for (var i = 0; i < _this.possibleCategories.length; i++) {
                if (_this.possibleCategories[i] === location.path().slice(6)) {
                    _this.currentCategory = location.path().slice(6);
                }
            }
            if (location.path().slice(1, 8) === 'project') {
                _this.project = true;
            }
            else {
                _this.project = false;
            }
            if (location.path().slice(1, 12) === 'photography') {
                _this.photography = true;
            }
            else {
                _this.photography = false;
            }
        });
    }
    HeaderComponent.prototype.changeCategory = function (category) {
        this.currentCategory = category;
        this.homeService.setHomeState(category);
    };
    HeaderComponent.prototype.toBlog = function () {
        window.location.href = 'https://medium.com/george-saieed';
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/home/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n    background: #101112;\n    margin: 25px 25px;\n}\n\n.hidden {\n    display: none;\n}\n \n@media(max-width: 451px) {\n    .page {\n        margin: 10px 10px;\n    }\n} \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"page\">\n    <app-header> </app-header>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__("../../../../../src/app/services/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.currentCategory = homeService.currentHomeState;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/photography/photography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n    margin: 75px auto 0px;\n    padding-bottom: 120px;\n    transition: opacity 1s ease;\n}\n\n.row {\n    padding-left: 45px;\n    padding-right: 45px;\n}\n\n.tile {\n    height: 360px;\n    width: 360px;\n    border-radius: 3px;\n    position: relative;\n    margin: 20px auto;\n    cursor: pointer;\n    transition: -webkit-transform 0.4s ease-in-out;\n    transition: transform 0.4s ease-in-out;\n    transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;\n}\n\n.tile:hover {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n}\n\n.tile__imgs {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 37px;\n}\n\n.desktop, .mobile {\n    box-shadow: -4px 13px 23px rgba(0, 0, 0, 0.5);\n    display: inline-block;\n}\n\n.desktop {\n    width: 215px;\n    margin-left: 31px;\n    margin-right: 30px;\n    border-radius: 3px;\n}\n\n.mobile {\n    width: 50px;\n    position: absolute;\n    bottom: 0;\n    border-radius: 2px;\n}\n\n.tile__imgs__mobile {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding-top: 33px;\n    margin-left: 6px;\n}\n\n.mobile-triple {\n    width: 72px;\n    margin-left: 27px;\n    border-radius: 3px;\n    box-shadow: -4px 17px 23px rgba(0, 0, 0, 0.5);\n}\n\n.tile__info {\n    position: absolute;\n    padding-bottom: 30px;\n    padding-left: 32px;\n    padding-top: 20px;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.60);\n    width: 100%;\n    border-radius: 0 0 3px 3px;\n}\n\n.tile__info * {\n    display: block;\n}\n\n.client__value {\n    padding-bottom: 15px;\n}\n\n.client__label, .project__label {\n    font-family: 'AlexandriaFLF', serif;\n    text-transform: uppercase;\n    font-size: 21px;\n}\n\n.client__value, .project__value {\n    font-size: 16px;\n    font-weight: 300;\n}\n\n.tile__tech {\n    position: absolute;\n    bottom: 45px;\n    right: 25px;\n}\n\n.tech-svg {\n    height: 17px;\n}\n\n.year {\n    position: absolute;\n    font-size: 17px;\n    font-weight: 200;\n    bottom: 15px;\n    right: 25px;\n}\n\n@media(max-width: 470px) {\n    .tile {\n        height: 295px;\n        width: 295px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 25px;\n    }\n\n    .desktop {\n        width: 180px;\n        height: 112px;\n        margin-left: 25px;\n        margin-right: 15px;\n        border-radius: 3px;\n    }\n\n    .client__label, .project__label {\n        font-size: 18px;\n    }\n\n    .client__value, .project__value {\n        font-size: 14px;\n    }\n\n    .tile__tech {\n        bottom: 40px;\n        right: 20px;\n    }\n\n    .tech-svg {\n        height: 15px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 13px;\n        right: 20px;\n    }\n\n    .tile__info {\n        padding-left: 20px;\n    }\n\n}\n\n@media(max-width: 372px) {\n    .tile {\n        height: 240px;\n        width: 240px;\n    }\n\n    .row {\n        padding: 0;\n    }\n\n    .tile__imgs {\n        padding-top: 18px;\n    }\n\n    .desktop {\n        width: 160px;\n        height: 100px;\n        margin-left: 20px;\n        margin-right: 12px;\n        border-radius: 3px;\n    }\n\n    .mobile {\n        width: 35px;\n        height: 62px;\n    }\n\n    .client__label, .project__label {\n        font-size: 15px;\n    }\n\n    .client__value, .project__value {\n        font-size: 11px;\n    }\n\n    .client__value {\n        padding-bottom: 10px;\n    }\n\n    .tile__tech {\n        bottom: 32px;\n    }\n\n    .tech-svg {\n        height: 13px;\n    }\n\n    .year {\n        position: absolute;\n        font-size: 11px;\n    }\n\n}\n\n.spain {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/photography/spain/spain-back.jpg") + ");\n    background-size: cover;\n    -webkit-animation: container-fade 0.5s;\n            animation: container-fade 0.5s;\n}\n\n@-webkit-keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@keyframes container-fade {\n    0% {opacity: 0; -webkit-transform: translateX(-70px); transform: translateX(-70px);}\n    100% {opacity: 1; -webkit-transform: translateX(0px); transform: translateX(0px);}\n}\n\n@media(max-width: 1268px) {\n    .row {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n\n@media(max-width: 603px) {\n    .container-fluid {\n        margin: 40px auto 0px;\n    }\n}\n\n@media(max-width: 470px) {\n    .container-fluid {\n        margin: 25px auto 0px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/photography/photography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6 col-md-12\">\n            <div class=\"tile spain\" (click)=\"openProject('spain')\">\n                <div class=\"tile__info\">\n                    <span class=\"client__label\"> Client </span>\n                    <span class=\"client__value\"> Personal </span>\n                    <span class=\"project__label\"> Location </span>\n                    <span class=\"project__value\"> Madrid, Spain </span>\n                </div>\n                <div class=\"tile__tech\">\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/photoshop.svg\"/>\n                    <img class=\"tech-svg\" src=\"./../../../assets/img/tech-svgs/lightroom.svg\"/>\n                </div>\n                <span class=\"year\"> 2016 </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/photography/photography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotographyComponent = (function () {
    function PhotographyComponent(router) {
        this.router = router;
    }
    PhotographyComponent.prototype.openProject = function (project) {
        this.router.navigate(['photography', project]);
    };
    return PhotographyComponent;
}());
PhotographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photography',
        template: __webpack_require__("../../../../../src/app/home/photography/photography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/photography/photography.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PhotographyComponent);

var _a;
//# sourceMappingURL=photography.component.js.map

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    padding: 70px 85px 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.client {\n    float: right;\n    font-size: 40px;\n    font-weight: 600;\n    margin-top: 79px;\n    margin-right: 85px;\n}\n\n.header__intro {\n    font-size: 45px;\n    font-weight: 600;\n    margin-right: 17px;\n}\n\n.header__name {\n    font-size: 45px;\n    font-weight: 100;\n}\n\n.returnhome {\n    display: inline-block;\n    cursor: pointer;\n    margin-right: 30px;\n    height: 45px;\n    width: 45px;\n}\n\n.returnhome-svg {\n    height: 45px;\n    width: 45px;\n}\n\n#circle {\n    transition: fill 0.5s ease-in-out;\n }\n\n.returnhome:hover #circle {\n    fill: white !important;\n}\n\n#right-arrow {\n    transition: fill 0.5s ease-in-out;\n}  \n\n.returnhome:hover #right-arrow {\n    fill: rgba(0, 0, 0, 0.7)\n}\n\n.gallery {\n    padding: 100px 75px 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <span class=\"client\">{{currProj}}</span>\n    <div class=\"header\">\n        <div class=\"returnhome\" (click)=\"returnHome()\">\n            <svg class=\"returnhome-svg\" width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Project\" transform=\"translate(-198.000000, -216.000000)\">\n                        <g id=\"Group\" transform=\"translate(198.000000, 216.000000)\">\n                            <rect style=\"fill: #101112;\" id=\"circle\" stroke=\"#FFFFFF\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                            <g id=\"right-arrow\" transform=\"translate(42.259939, 41.178271) scale(-1, 1) translate(-42.259939, -41.178271) translate(24.259939, 28.178271)\" fill-rule=\"nonzero\" fill=\"#FFFFFF\">\n                                <path d=\"M24.2058352,0.631310689 C23.7161251,0.124477826 22.9010831,0.124477826 22.3942502,0.631310689 C21.9045401,1.12102082 21.9045401,1.93606285 22.3942502,2.42463147 L31.5800251,11.6104063 L1.26822367,11.6104063 C0.561625604,11.6115479 0,12.1731735 0,12.8797715 C0,13.5863696 0.561625604,14.1662594 1.26822367,14.1662594 L31.5800251,14.1662594 L22.3942502,23.3349116 C21.9045401,23.8417445 21.9045401,24.657928 22.3942502,25.1464966 C22.9010831,25.6533295 23.7172666,25.6533295 24.2058352,25.1464966 L35.5661971,13.7861348 C36.0730299,13.2964247 36.0730299,12.4813826 35.5661971,11.992814 L24.2058352,0.631310689 Z\" id=\"Shape\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>\n        </div>\n        <span class=\"header__intro\">George </span>\n        <span class=\"header__name\">Saieed</span>\n    </div>\n\n    <div class=\"gallery\">\n        <gallery [flexBorderSize]=\"10\" [flexImageSize]=\"7\" [galleryName]=\"'spain'\"></gallery>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotographyProjComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__("../../../../../src/app/services/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotographyProjComponent = (function () {
    function PhotographyProjComponent(location, router, homeService, route) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.homeService = homeService;
        this.route = route;
        router.events.subscribe(function (val) {
            window.scrollTo(0, 0);
            _this.currProj = location.path().slice(13, 14).toUpperCase() + location.path().slice(14);
        });
    }
    PhotographyProjComponent.prototype.returnHome = function () {
        this.router.navigate(['home', this.homeService.currentHomeState]);
    };
    return PhotographyProjComponent;
}());
PhotographyProjComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photographyproj',
        template: __webpack_require__("../../../../../src/app/photography/photography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photography/photography.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], PhotographyProjComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=photography.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:link, a:visited, a:hover, a:active {\n    color: white;\n    text-decoration: underline;\n}\n\n.winner {\n    position: absolute;\n    visibility: hidden;\n    z-index: 0;\n    right: 0;\n    top: 0;\n    width: 150px;\n}\n\n.header {\n    padding: 70px 85px 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.header__intro {\n    font-size: 45px;\n    font-weight: 600;\n    margin-right: 17px;\n}\n\n.header__name {\n    font-size: 45px;\n    font-weight: 100;\n}\n\n.returnhome {\n    display: inline-block;\n    cursor: pointer;\n    margin-right: 30px;\n    height: 45px;\n    width: 45px;\n    z-index: 5;\n}\n\n.returnhome-svg {\n    height: 45px;\n    width: 45px;\n}\n\n#circle {\n    transition: fill 0.5s ease-in-out;\n }\n\n.returnhome:hover #circle {\n    fill: white !important;\n}\n\n#right-arrow {\n    transition: fill 0.5s ease-in-out;\n}  \n\n.returnhome:hover #right-arrow {\n    fill: rgba(0, 0, 0, 0.7)\n}\n\n.cover-img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    /* Change on resize */\n    height: 300px;\n}\n\n.header-img {\n    width: 45%;\n    position: relative;\n    margin: 50px auto -60px;\n}\n\n.cover-img {\n    -webkit-animation: container-bobbing 3s ease-in-out;\n    -webkit-animation-iteration-count: infinite;\n    -moz-animation: container-bobbing 3s ease-in-out;\n    -moz-animation-iteration-count: infinite;\n    -o-animation: container-bobbing 3s ease-in-out;\n    -o-animation-iteration-count: infinite;\n    animation: container-bobbing 3s ease-in-out;\n    animation-iteration-count: infinite;  \n}\n\n.description, .link, .downloads {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n\n.project-details {\n    background: #202122;\n    padding-bottom: 70px;\n}\n\n.project-heading {\n    padding: 70px 85px 50px;\n}\n\n.client-label {\n    text-transform: uppercase;\n    font-family: 'AlexandriaFLF', serif;\n    display: block;\n    font-size: 25px;\n    margin-bottom: -10px;\n}\n\n.client-name {\n    font-size: 60px;\n    font-weight: 500;\n}\n\n.project-nav {\n    float: right;\n    padding: 70px 85px 0 0;\n    font-size: 25px;\n}\n\n.project-num {\n    font-weight: 200;\n}\n\n.project-num-count {\n    font-weight: 900;\n}\n\n.project-arrows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 25px;\n}\n\n.arrow-fwd, .arrow-back {\n    height: 35px;\n    width: 35px;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.arrow-fwd {\n    padding-left: 15px;\n    transition: -webkit-transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n}\n\n#Project-fwd, #Project-back {\n    fill: #777;\n}\n\n.arrow-fwd:hover {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n}\n\n.arrow-fwd #Project-fwd {\n    transition: fill 0.5s ease-in-out;\n}\n\n.arrow-fwd:hover #Project-fwd {\n    fill: white;\n}\n\n.arrow-back {\n    transition: -webkit-transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out;\n    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n}\n\n.arrow-back #Project-back {\n    transition: fill 0.5s ease-in-out;\n}\n\n.arrow-back:hover #Project-back {\n    fill: white;\n}\n\n.arrow-back:hover {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n}\n\n.project-details-in {\n    margin: 0px 120px;\n}\n\n.description-label {\n    font-family: 'AlexandriaFLF', serif;\n    text-transform: uppercase;\n    font-size: 20px;\n    width: 250px;\n    color: gray;\n}\n\n.description-content {\n    font-weight: 200;\n    font-size: 22px;\n    margin-top: -2px;\n    width: 85%;\n}\n\n.description {\n    padding: 10px 0;\n}\n\n.img-slider {\n    padding: 120px 0;\n    padding-left: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow-y: scroll;\n    z-index: 10000;\n    margin-left: -25px;\n    margin-right: -25px;\n}\n\n.img {\n    padding: 0 25px;\n}\n\n.img:last-of-type {\n    padding-right: 45px;\n}\n\n.img-src {\n    border-radius: 4px;\n    box-shadow: -4px 13px 23px rgba(0, 0, 0, 0.5);\n    height: 55vh;\n}\n\n@-webkit-keyframes container-bobbing {\n    0% {opacity: 1; -webkit-transform: translateY(5px); transform: translateY(5px);}\n    50% {opacity: 1; -webkit-transform: translateY(-5px); transform: translateY(-5px);}\n    100% {opacity: 1; -webkit-transform: translateY(5px); transform: translateY(5px);}\n}\n\n@keyframes container-bobbing {\n    0% {opacity: 1; -webkit-transform: translateY(5px); transform: translateY(5px);}\n    50% {opacity: 1; -webkit-transform: translateY(-5px); transform: translateY(-5px);}\n    100% {opacity: 1; -webkit-transform: translateY(5px); transform: translateY(5px);}\n}\n\n@media(max-width: 1290px) {\n    .header {\n        padding: 70px 50px 0px;\n    }\n\n    .project-heading {\n        padding: 70px 50px 50px;\n    }\n\n    .project-nav {\n        padding-right: 50px;\n    }\n\n    .project-details-in {\n        margin: 0px 75px;\n    }\n\n    .cover-img {\n        height: 300px;\n    }\n\n    .header-img {\n        width: 55%;\n    }\n    \n}\n\n@media(max-width: 935px) {\n    .header {\n        padding: 70px 30px 0px;\n    }\n\n    .project-heading {\n        padding: 70px 30px 50px;\n    }\n\n    .project-nav {\n        padding-right: 30px;\n    }\n\n    .project-details-in {\n        margin: 0px 60px;\n    }\n\n    .cover-img {\n        height: 300px;\n    }\n\n    .header-img {\n        width: 60%;\n    }\n    \n}\n\n@media(max-width: 835px) {\n    .project-details-in {\n        margin: 0px 35px;\n    }\n\n    .description-label {\n        margin-bottom: 5px;\n    }\n\n    .description, .link, .downloads {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -ms-flex-line-pack: center;\n            align-content: center;\n    }\n\n    .description-content {\n        width: 100%;\n    }\n}\n\n@media(max-width: 784px) {\n    .client-name {\n        font-size: 50px;\n    }\n\n    .project-nav {\n        font-size: 22px;\n    }\n\n    .arrow-fwd, .arrow-back {\n        height: 30px;\n        width: 30px;\n    }\n\n    .arrow-fwd {\n        padding-left: 10px;\n        transition: -webkit-transform 0.5s ease-in-out;\n        transition: transform 0.5s ease-in-out;\n        transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n    }\n\n    .header-img {\n        width: 65%;\n    }\n\n    .cover-img {\n        height: 250px;\n    }\n}\n\n@media(max-width: 685px) {\n    .client-name {\n        font-size: 45px;\n    }\n\n    .header {\n        padding-top: 40px;\n    }\n\n    .header {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n\n    .project-heading {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n\n    .project-nav {\n        padding-right: 15px;\n    }\n\n    .project-details-in {\n        margin-right: 20px;\n        margin-left: 20px;\n    }\n\n    .project-heading {\n        padding-bottom: 35px;\n    }\n\n    .header-img {\n        width: 75%;\n    }\n\n    .cover-img {\n        height: 200px;\n    }\n}\n\n@media(max-width: 620px) {\n    .header__name, .header__intro {\n        font-size: 40px;\n    }\n\n    .header__intro {\n        margin-right: 12px;\n    }\n\n    .returnhome {\n        margin-right: 20px;\n    }\n}\n\n@media(max-width: 415px) {\n    .header__name, .header__intro {\n        font-size: 35px;\n    }\n\n    .header__intro {\n        margin-right: 12px;\n    }\n\n    .returnhome-svg {\n        height: 37px;\n        width: 37px;\n    }\n\n    .returnhome {\n        margin-right: 15px;\n        height: 37px;\n        width: 37px;\n    }\n}\n\n@media(max-width: 365px) {\n    .header__name, .header__intro {\n        font-size: 30px;\n    }\n\n    .header__intro {\n        margin-right: 10px;\n    }\n\n    .returnhome-svg {\n        height: 33px;\n        width: 33px;\n    }\n\n    .returnhome {\n        margin-right: 14px;\n        height: 33px;\n        width: 33px;\n    }\n}\n\n@media(max-width: 630px) {\n    .client-label {\n        font-size: 22px;\n    }\n\n    .project-nav {\n        padding-top: 65px;\n    }\n    \n    .client-name {\n        font-size: 40px;\n    }\n\n    .project-arrows {\n        margin-top: 10px;\n    }\n\n    .description-label {\n        font-size: 18px;\n    }\n\n    .description-content {\n        font-size: 20px;\n    }\n}\n\n@media(max-width: 530px) {\n    .client-name {\n        font-size: 35px;\n    }\n\n    .project-nav {\n        padding-top: 92px;\n        padding-right: 15px;\n        position: relative;\n    }\n\n    .project-num {\n        display: none;\n    }\n\n    .arrow-back {\n        margin-right: 10px;\n    }\n\n    .project-num-count {\n        position: absolute;\n\n        padding-left: 31px;\n        padding-top: 8px;\n    }\n}\n\n@media(max-width: 451px) {\n    .img-slider {\n        margin-left: -15px;\n        margin-right: -15px;\n    }\n}\n\n@media(max-width: 400px) {\n    .project-heading {\n        padding-bottom: 25px;\n    }\n\n    .client-name {\n        font-size: 33px;\n    }\n\n    .description-content {\n        font-size: 18px;\n    }\n}\n\n@media(max-width: 377px) {\n    .project-nav {\n        padding-top: 30px;\n    }\n}\n\n@media(max-width: 550px) {\n    .header-img {\n        margin-bottom: -45px;\n        width: 80%;\n    }\n}\n\n@media(max-width: 451px) {\n    .header-img {\n        width: 80%;\n        margin-bottom: -30px;\n    }\n\n    .cover-img {\n        height: 150px;\n    }\n}\n\n@media(max-width: 415px) {\n    .header-img {\n        width: 85%;\n        margin-bottom: -15px;\n    }\n\n    .cover-img {\n        height: 175px;\n    }\n}\n\n@media(max-width: 588px) {\n    .img-src {\n        height: 47vh;\n    }\n\n    .img-slider {\n        padding-left: 15px;\n    }\n}\n\n@media(max-width: 685px) {\n    .winner {\n        width: 100px;\n    }\n}\n\n@media(max-width: 440px) {\n    .winner {\n        width: 75px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" [style.background]=\"color\">\n    <img [style.visibility]=\"winner\" class=\"winner\" src=\"./../../../assets/img/development/uncommon/winner2.png\">\n    <div class=\"header\">\n        <div class=\"returnhome\" (click)=\"returnHome()\">\n            <svg class=\"returnhome-svg\" width=\"82px\" height=\"82px\" viewBox=\"0 0 82 82\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Group</title>\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Project\" transform=\"translate(-198.000000, -216.000000)\">\n                        <g id=\"Group\" transform=\"translate(198.000000, 216.000000)\">\n                            <rect [style.fill]=\"color\" id=\"circle\" stroke=\"#FFFFFF\" stroke-width=\"5\" x=\"2.5\" y=\"2.5\" width=\"76.1461346\" height=\"76.1461346\" rx=\"38.0730673\"></rect>\n                            <g id=\"right-arrow\" transform=\"translate(42.259939, 41.178271) scale(-1, 1) translate(-42.259939, -41.178271) translate(24.259939, 28.178271)\" fill-rule=\"nonzero\" fill=\"#FFFFFF\">\n                                <path d=\"M24.2058352,0.631310689 C23.7161251,0.124477826 22.9010831,0.124477826 22.3942502,0.631310689 C21.9045401,1.12102082 21.9045401,1.93606285 22.3942502,2.42463147 L31.5800251,11.6104063 L1.26822367,11.6104063 C0.561625604,11.6115479 0,12.1731735 0,12.8797715 C0,13.5863696 0.561625604,14.1662594 1.26822367,14.1662594 L31.5800251,14.1662594 L22.3942502,23.3349116 C21.9045401,23.8417445 21.9045401,24.657928 22.3942502,25.1464966 C22.9010831,25.6533295 23.7172666,25.6533295 24.2058352,25.1464966 L35.5661971,13.7861348 C36.0730299,13.2964247 36.0730299,12.4813826 35.5661971,11.992814 L24.2058352,0.631310689 Z\" id=\"Shape\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>\n        </div>\n        <span class=\"header__intro\">George </span>\n        <span class=\"header__name\">Saieed</span>\n    </div>\n\n    <div class=\"cover-img\">\n        <img class=\"header-img\" src=\"./../assets/img/project/{{this.currProj}}/header-min.png\">\n    </div>\n\n    <div class=\"project-details\">\n        <div class=\"project-nav\">\n            <span class=\"project-num\">{{type}} </span>\n            <span class=\"project-num-count\"> {{number}}</span>\n            <div class=\"project-arrows\">\n                <svg (click)=\"back(number)\" class=\"arrow-back\" width=\"32px\" height=\"60px\" viewBox=\"0 0 32 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <title>next</title>\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"Project-back\" transform=\"translate(-1880.000000, -1282.000000)\" fill-rule=\"nonzero\" fill=\"#FFFFFF\">\n                            <g id=\"Group-2\" transform=\"translate(1833.000000, 1196.000000)\">\n                                <g id=\"next\" transform=\"translate(63.000000, 116.000000) scale(-1, 1) translate(-63.000000, -116.000000) translate(47.000000, 86.000000)\">\n                                    <path d=\"M30.8802133,28.4399003 L2.93381331,0.493500399 C2.27581278,-0.164500133 1.22052891,-0.164500133 0.562528379,0.493500399 C-0.0954721526,1.15150093 -0.0954721526,2.2067848 0.562528379,2.86478533 L27.3170783,29.6193353 L0.562528379,56.3738852 C-0.0954721526,57.0318857 -0.0954721526,58.0871696 0.562528379,58.7451701 C0.885321093,59.0679628 1.31984975,59.2417743 1.74196329,59.2417743 C2.16407684,59.2417743 2.5986055,59.0803779 2.92139821,58.7451701 L30.8677981,30.7987702 C31.5257987,30.1531847 31.5257987,29.0854858 30.8802133,28.4399003 Z\" id=\"Shape\"></path>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n                <svg (click)=\"fwd(number)\" class=\"arrow-fwd\" width=\"32px\" height=\"60px\" viewBox=\"0 0 32 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <title>next</title>\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"Project-fwd\" transform=\"translate(-1960.000000, -1282.000000)\" fill-rule=\"nonzero\" fill=\"#FFFFFF\">\n                            <g id=\"Group-2\" transform=\"translate(1833.000000, 1196.000000)\">\n                                <g id=\"next\" transform=\"translate(127.000000, 86.000000)\">\n                                    <path d=\"M30.8802133,28.4399003 L2.93381331,0.493500399 C2.27581278,-0.164500133 1.22052891,-0.164500133 0.562528379,0.493500399 C-0.0954721526,1.15150093 -0.0954721526,2.2067848 0.562528379,2.86478533 L27.3170783,29.6193353 L0.562528379,56.3738852 C-0.0954721526,57.0318857 -0.0954721526,58.0871696 0.562528379,58.7451701 C0.885321093,59.0679628 1.31984975,59.2417743 1.74196329,59.2417743 C2.16407684,59.2417743 2.5986055,59.0803779 2.92139821,58.7451701 L30.8677981,30.7987702 C31.5257987,30.1531847 31.5257987,29.0854858 30.8802133,28.4399003 Z\" id=\"Shape\"></path>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n        </div>\n        <div class=\"project-heading\">\n            <span class=\"client-label\">\n                Client\n            </span>\n            <span class=\"client-name\">\n                {{client}}\n            </span>\n        </div>\n        <div class=\"project-details-in\">\n            <div class=\"description\">\n                <span class=\"description-label\">\n                    Description\n                </span>\n                <span class=\"description-content\">\n                    {{description}}\n                </span>\n            </div>\n            <div class=\"description\">\n                <span class=\"description-label\">\n                    Active Link\n                </span>\n                <span class=\"description-content\">\n                    <a target=\"_blank\" href=\"{{link}}\">{{clickL}}</a>\n                </span>\n            </div>\n            <div class=\"description\">\n                <span class=\"description-label\">\n                    Downloads\n                </span>\n                <span class=\"description-content\">\n                    <a target=\"_blank\" href=\"{{downloads}}\" download>{{clickD}}</a>\n                </span>\n            </div>\n        </div>\n        <div class=\"technologies\">\n        </div>\n    </div>\n\n    <div class=\"img-slider\">\n        <div *ngFor=\"let item of images\" class=\"img\">\n            <img class=\"img-src\" src=\"./../assets/img/project/{{this.currProj}}/{{item}}\"/>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__("../../../../../src/app/services/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_info__ = __webpack_require__("../../../../../src/app/project/project.info.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = (function () {
    function ProjectComponent(location, router, homeService, route) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.homeService = homeService;
        this.route = route;
        this.dev = ['rfc', 'hh', 'stmcoc', 'uofc', 'uncommon', 'calc', 'old'];
        this.des = ['fb', 'pres', 'aig', 'uw', 'ig', 'poly'];
        this.fwdProj = '';
        this.backProj = '';
        this.clickL = "Click here";
        this.clickD = "Click here";
        this.images = [];
        this.projects = { rfc: __WEBPACK_IMPORTED_MODULE_4__project_info__["i" /* rfc */], hh: __WEBPACK_IMPORTED_MODULE_4__project_info__["d" /* hh */], stmcoc: __WEBPACK_IMPORTED_MODULE_4__project_info__["j" /* stmcoc */], uofc: __WEBPACK_IMPORTED_MODULE_4__project_info__["l" /* uofc */], uncommon: __WEBPACK_IMPORTED_MODULE_4__project_info__["k" /* uncommon */], calc: __WEBPACK_IMPORTED_MODULE_4__project_info__["b" /* calc */], old: __WEBPACK_IMPORTED_MODULE_4__project_info__["f" /* old */], fb: __WEBPACK_IMPORTED_MODULE_4__project_info__["c" /* fb */], pres: __WEBPACK_IMPORTED_MODULE_4__project_info__["h" /* pres */], aig: __WEBPACK_IMPORTED_MODULE_4__project_info__["a" /* aig */], uw: __WEBPACK_IMPORTED_MODULE_4__project_info__["m" /* uw */], ig: __WEBPACK_IMPORTED_MODULE_4__project_info__["e" /* ig */], poly: __WEBPACK_IMPORTED_MODULE_4__project_info__["g" /* poly */] };
        router.events.subscribe(function (val) {
            window.scrollTo(0, 0);
            _this.currProj = location.path().slice(9);
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        if (this.dev.includes(this.currProj) || this.des.includes(this.currProj)) {
        }
        else {
            this.currProj = 'rfc';
        }
        this.type = this.projects["" + this.currProj][0];
        this.number = this.projects["" + this.currProj][1];
        this.client = this.projects["" + this.currProj][2];
        this.description = this.projects["" + this.currProj][3];
        this.link = this.projects["" + this.currProj][4];
        this.downloads = this.projects["" + this.currProj][5];
        this.color = this.projects["" + this.currProj][6];
        this.winner = this.projects["" + this.currProj][7];
        console.log(this.projects["" + this.currProj][8]);
        for (var i = 8; i < this.projects["" + this.currProj].length; i++) {
            this.images.push(this.projects["" + this.currProj][i]);
        }
        if (this.link === "") {
            this.clickL = "";
        }
        if (this.downloads === "") {
            this.clickD = "";
        }
    };
    ProjectComponent.prototype.returnHome = function () {
        this.router.navigate(['home', this.homeService.currentHomeState]);
    };
    ProjectComponent.prototype.fwd = function (projNumber) {
        var _this = this;
        if (this.type === 'development') {
            if (projNumber === this.dev.length.toString()) {
                projNumber = '0';
            }
            this.fwdProj = this.dev[projNumber];
        }
        if (this.type === 'design') {
            if (projNumber === this.des.length.toString()) {
                projNumber = '0';
            }
            this.fwdProj = this.des[projNumber];
        }
        if (this.router.navigated === false) {
            // Case when route was not used yet
            this.router.navigateByUrl("/project/" + this.fwdProj);
        }
        else {
            // Case when route was used once or more
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/project/" + _this.fwdProj);
            });
        }
    };
    ProjectComponent.prototype.back = function (projNumber) {
        var _this = this;
        if (this.type === 'development') {
            if (projNumber === '1') {
                projNumber = (this.dev.length + 1).toString();
            }
            this.backProj = this.dev[+projNumber - 2];
        }
        if (this.type === 'design') {
            if (projNumber === '1') {
                projNumber = (this.des.length + 1).toString();
            }
            this.backProj = this.des[+projNumber - 2];
        }
        if (this.router.navigated === false) {
            // Case when route was not used yet
            this.router.navigateByUrl("/project/" + this.backProj);
        }
        else {
            // Case when route was used once or more
            this.router.navigateByUrl("/home").then(function () {
                _this.router.navigateByUrl("/project/" + _this.backProj);
            });
        }
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return rfc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return stmcoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return uofc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return uncommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return old; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return uw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return poly; });
var rfc = ["development", "1", "Run for Cover",
    "Website built for the University of Chicago's all-male A Cappella group,\n                    Run for Cover. First designed in Sketch, then created with HTML, CSS, and jQuery.",
    "http://isdebomb.com/rfc", "", "rgba(22, 85, 53, 1)", "", "desk1-min.png", "mobile1-min.png",
    "desk2-min.png", "mobile2-min.png", "desk3-min.png", "mobile3-min.png", "desk4-min.png", "mobile4-min.png"];
var hh = ["development", "2", "Hack Harvard", "Website built at Hack Harvard. This was built to demo\n                    a potential application that hospitals could use in order to significantly decrease wait times in the ER.\n                    Users create an account, and enter their health information. This is then saved. When they need to go the ER,\n                    they / a family member can login, speak their injury to the application, and the application would then\n                    find the nearest hospital to them, and instruct them to go there. The hospital would then receive this patient's\n                    injury and health information and insert them into queue to be seen appropriately. Ideally, by the time the patient\n                    made it to the hospital, the hospital would be ready to receive them. At the very least, the hospital gets\n                    the patient's health information on hand immediately *Disclaimer: Google has since changed the way their location\n                    API works, and the location functionality unfortunately no longer works.", "http://isdebomb.com/hh", "",
    "rgba(37, 105, 135, 1)", "", "desk1-min.png", "mobile1-min.png", "desk2-min.png", "desk3-min.png",
    "desk4-min.png"];
var stmcoc = ["development", "3", "St. Mary's Coptic Church", "Website built for St. Mary's Coptic Orthodox Church in Ambridge, PA,\n                        to inform church congregation and community members of church service times, activities and fundraisers. It is still\n                        maintained by me.", "http://stmarypittsburgh.org/", "", "rgba(102, 40, 53, 1)", "",
    "desk1-min.png", "mobile1-min.png", "desk2-min.png", "mobile2-min.png", "desk3-min.png", "mobile3-min.png",
    "desk4-min.png", "mobile4-min.png", "desk5-min.png", "mobile5-min.png", "desk6-min.png", "mobile6-min.png",
    "desk7-min.png", "mobile7-min.png", "desk8-min.png", "mobile8-min.png"];
var uofc = ["development", "4", "University of Chicago", "Twilio Application built for University of Chicago students. It allowed\n                    students to text their classes to a number and it would return their finals' schedule for them. It is not updated for\n                    the current school year. Text 'CMSC 15400 1' or any class dept., number, and section that was valid Spring Quarter of\n                    2016 to (412)-253-4757 to test it out.", "", "", "rgba(28, 96, 26, 1)", "", "desk1-min.png",
    "mobile1-min.png"];
var uncommon = ["development", "5", "Uncommon Hacks", "iOS Application designed and built at UChicago's Uncommon Hacks. It\n                        allows people to take pictures of their receipts, and the app reminds them when to return items, keeps track\n                        of their expenses, etc. It won JP Morgan Chase's Best UI/UX prize. It is not currently on the App Store.",
    "", "http://isdebomb.com/uncommon/design.pdf", "rgba(75, 79, 90, 1)", "visible", "mobile1-min.png",
    "mobile2-min.png", "mobile3-min.png", "mobile4-min.png", "mobile5-min.png", "mobile6-min.png", "mobile7-min.png"];
var calc = ["development", "6", "Personal", "iOS Application designed and built for personal use. It is a simple calculator app -\n                    however, what distinguishes it from the generic iOS calculator app is its ability to handle full expressions. For\n                    example, it is possible to enter (4+5-9)/(sqrt(10*4)), and the calculator will evaluate this. In addition, users\n                    can select from several different gradient backgrounds to customize the look of the app.", "", "",
    "rgba(45, 36, 97, 1)", "", "mobile1-min.png", "mobile2-min.png", "mobile3-min.png", "mobile4-min.png"];
var old = ["development", "7", "Personal", "My current site is the fourth version of my personal website. While it is by far the\n                    most user-friendly and informative of the four, everyone has to start somewhere! Links to the past three websites\n                    can be found below. Click on the link to view v3, or tack v1 or v2 onto it to view the first or second iteration.",
    "http://isdebomb.com/", "", "rgba(63, 54, 42, 1)", "",
    "desk1-min.png", "mobile1-min.png", "desk2-min.png", "mobile2-min.png", "desk4-min.png", "mobile4-min.png",
    "desk5-min.png", "mobile5-min.png", "desk6-min.png", "mobile6-min.png", "desk7-min.png", "mobile7-min.png"];
var fb = ["design", "1", "Personal", "This was a UI 're-design' of Facebook. It was not intended as an attempt to re-design\n                    Facebook's user experience - rather, I created it as an attempt to test the skills I had acquired while learning\n                    to use Sketch.", "", "http://isdebomb.com/fb/design.png", "rgba(19, 76, 165, 1)", "", "desk1-min.png"];
var pres = ["design", "2", "Personal", "Presentation designed in Sketch for a final research project.", "",
    "http://isdebomb.com/pres/research.pdf", "rgba(33, 92, 69, 1)", "", "desk1-min.png"];
var aig = ["design", "3", "American International Group", "Mobile app design created for an AIG concept competition to help\n                    lower the number of automobile accidents that take place in the US each year. It won fifth place.", "",
    "http://isdebomb.com/aig/app.pdf", "rgba(92, 27, 115, 1)", "visible", "desk1-min.png", "mobile1-min.png"];
var uw = ["design", "4", "Unaccompanied Women", "Poster designed to advertise an Unaccompanied Women's (an A Cappella group)\n                    end of year concert.", "", "http://isdebomb.com/uw/poster.png", "rgba(117, 60, 58, 1)", "", "desk1-min.png"];
var ig = ["design", "5", "Personal", "After the introduction of the latest version of Instagram's logo, I used Sketch\n                    to attempt to recreate it. I then used sketch to design a possible alternative logo that I thought of.", "", "",
    "rgba(66, 46, 39, 1)", "", "desk1-min.png"];
var poly = ["design", "6", "Personal", "Used Photoshop to manually create low poly art profile pics. for myself and two friends.",
    "", "", "rgba(47, 54, 98, 1)", "", "desk1-min.jpg", "desk2-min.jpg", "desk3-min.jpg"];
//# sourceMappingURL=project.info.js.map

/***/ }),

/***/ "../../../../../src/app/services/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function () {
    function HomeService() {
        var _this = this;
        this.currentHomeState = 'development';
        this.currentHomeStateChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentHomeStateChange.subscribe(function (value) {
            _this.currentHomeState = value;
        });
    }
    HomeService.prototype.setHomeState = function (state) {
        this.currentHomeStateChange.next(state);
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HomeService);

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/photography/spain/spain-back.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "spain-back.09165669e2ec81bbc54b.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map