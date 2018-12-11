webpackJsonp([3],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardPage = (function () {
    function DashboardPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    DashboardPage.prototype.signOut = function () {
        this.authService.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SignInPage */]);
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    /*  goToSlide() {
        this.slides.slideNext();
        this.slides.isEnd();
        this.slides.length();
      }
      slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
      }
      */
    DashboardPage.prototype.goToNext = function () {
        if (!this.slides.isEnd()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slideNext(800);
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(true);
            this.slides.update();
            console.log("work");
        }
        else {
        }
    };
    DashboardPage.prototype.goToPrev = function () {
        if (!this.slides.isBeginning()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slidePrev(800);
            this.slides.lockSwipeToNext(true);
            this.slides.lockSwipeToPrev(false);
            this.slides.update();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\dashboard\dashboard.html"*/'\n\n\n\n<ion-content>\n\n  <ion-item no-border>\n\n    <ion-slides #Slides  no-border>\n\n		    <!-- <ion-slide>\n\n          <img src="assets/imgs/t1.jpeg"> -->\n\n        <!-- </ion-slide> --> -->\n\n		    <!-- <ion-slide>\n\n			    <img src="assets/imgs/t6.jpeg">\n\n		    </ion-slide> -->\n\n		    <ion-slide>\n\n			    <img src="assets/imgs/t3.jpeg">\n\n		    </ion-slide>\n\n		    <ion-slide>\n\n			    <img src="assets/imgs/t4.jpeg">\n\n		    </ion-slide>\n\n	 </ion-slides>\n\n  </ion-item>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col >\n\n      <div >Mis Reportes\n\n        <ion-icon ios="ios-clipboard-outline" md="md-clipboard"></ion-icon>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col >\n\n      <div> Hacer reporte\n\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-grid>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    Tlaquepaque\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="medical" item-start></ion-icon>\n\n      Hospital\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="cafe" item-start></ion-icon>\n\n      Cafe\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="paw" item-start></ion-icon>\n\n      Dog Park\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="beer" item-start></ion-icon>\n\n      Pub\n\n    </button>\n\n\n\n    <button ion-item>\n\n      <ion-icon name="planet" item-start></ion-icon>\n\n      Space\n\n    </button>\n\n\n\n  </ion-list>\n\n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-navbar hideBackButton="true">\n\n    <button ion-button icon-only menuToggle>\n\n  	<ion-icon name ="menu"> </ion-icon>\n\n    </button>\n\n    <button ion-button icon-only>\n\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="signOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-footer>\n\n\n\n<!-- <ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon>\n\nion-icon name="contact"></ion-icon>\n\n<ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n\n  <ion-icon name="images"></ion-icon>\n\n  <ion-icon ios="ios-images" md="md-images"></ion-icon> -->\n\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial2_tutorial2__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.comenzar = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            console.log("no mas tuto");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        });
    };
    TutorialPage.prototype.startSlide = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            console.log("u better work bitch");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tutorial2_tutorial2__["a" /* Tutorial2Page */]);
        });
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\tutorial\tutorial.html"*/'<!--\n\n  Generated template for the TutorialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n	<img src="assets/imgs/logo.jpeg">\n\n\n\n	<br>\n\n	<ion-item no-lines style="margin: auto;position: relative;  width: 47vw; top: -1vh; border-style: none;background-color: transparent">\n\n		<button  (click)="startSlide()" ion-button item-center block  style=background-color:#C62F72   >Continuar</button><br>\n\n		<button (click)="comenzar()" ion-button item-center block  color="light"   >Saltar</button>\n\n	</ion-item>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutorial2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(75);
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
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tutorial2Page = (function () {
    function Tutorial2Page(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    Tutorial2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    /*  goToSlide() {
        this.slides.slideNext();
        this.slides.isEnd();
        this.slides.length();
      }
      slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
      }
      */
    Tutorial2Page.prototype.goToNext = function () {
        if (!this.slides.isEnd()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slideNext(800);
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(true);
            this.slides.update();
            console.log("work");
        }
        else {
        }
    };
    Tutorial2Page.prototype.goToPrev = function () {
        if (!this.slides.isBeginning()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slidePrev(800);
            this.slides.lockSwipeToNext(true);
            this.slides.lockSwipeToPrev(false);
            this.slides.update();
        }
    };
    Tutorial2Page.prototype.comenzar = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            console.log("no mas tuto");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], Tutorial2Page.prototype, "slides", void 0);
    Tutorial2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial2',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\tutorial2\tutorial2.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content >\n	<ion-slides #Slides pager>\n		<ion-slide >\n			<p>Tutorial</p>\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n		<ion-slide >\n			<p>Tutorial</p>\n      <img src="assets/imgs/flecha_roja1.png" id="left"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToPrev()">\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n		<ion-slide >\n			<p>Tutorial</p>\n  		<img src="assets/imgs/flecha_roja1.png" id="left"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToPrev()">\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n\n		<ion-slide >\n			<p>Tutorial</p>\n			<button class="comenzar" color="rojo" (click)="comenzar()" ion-button>Comenzar</button>\n\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\tutorial2\tutorial2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Tutorial2Page);
    return Tutorial2Page;
}());

//# sourceMappingURL=tutorial2.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		511,
		0
	],
	"../pages/tutorial/tutorial.module": [
		512,
		1
	],
	"../pages/tutorial2/tutorial2.module": [
		513,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SPage = (function () {
    function SPage(afAuth, navCtrl, loadingCtrl, alertCtrl, authService) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
    }
    SPage.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, RESULT_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Creando cuenta. Por favor, espere...'
                        });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.userModel.email, this.userModel.password).then(function (result) {
                                console.log(RESULT_1);
                                loading.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SignInPage */]);
                            }).catch(function (error) {
                                loading.dismiss();
                                console.log(error);
                                _this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
                            })];
                    case 2:
                        RESULT_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-s',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\s\s.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="false">\n\n        <ion-title>Registrarse</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background"><br><br><br><br><br><br>\n\n    <form #signUpForm="ngForm" (submit)="signUp()">\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Registrarse\n\n        </ion-card-header>\n\n      <ion-card-content>\n\n        	<ion-list no-line>\n\n            <ion-list>\n\n            <ion-item>\n\n                <ion-label stacked>Correo electrónico</ion-label>\n\n                <ion-input [(ngModel)]="userModel.email" type="email" placeholder="Ingrese correo" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n\n                    required></ion-input>\n\n            </ion-item><br><br>\n\n            <ion-item>\n\n                <ion-label stacked>Contraseña</ion-label>\n\n                <ion-input [(ngModel)]="userModel.password" type="password" placeholder="Ingrese contraseña" name="password" required minlength="6"></ion-input>\n\n            </ion-item><br><br>\n\n            <div padding-left padding-right padding-top>\n\n                	<button ion-button block outline color="light"> [disabled]="!signUpForm.form.valid" block>Registrarse</button>\n\n            </div>\n\n        </ion-list>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\s\s.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], SPage);
    return SPage;
}());

//# sourceMappingURL=s.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_data_firebase_data__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {GoogleMaps,GoogleMap, GoogleMapsEvent, GoogleMapOptions,CameraPosition,MarkerOptions, Marker} from '@ionic-native/google-maps';
var ReportPage = (function () {
    function ReportPage(navCtrl, firebaseData, formBuilder) {
        this.navCtrl = navCtrl;
        this.firebaseData = firebaseData;
        this.formBuilder = formBuilder;
        this.reporte = this.formBuilder.group({
            calleP: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            calleCruce1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            calleCruce2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            tipoCalle: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])]
        });
    }
    ReportPage.prototype.reportar = function () {
        if (!this.reporte.valid) {
            console.log("Nice try!");
        }
        else {
            this.firebaseData.reportar(this.reporte.value.calleP, this.reporte.value.calleCruce1, this.reporte.value.calleCruce2, this.reporte.value.tipoCalle, this.firebaseData.email);
            this.reporte.reset();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\report\report.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="false">\n\n    <button ion-button icon-only menuToggle>\n\n  	<ion-icon name = "menu"> </ion-icon>\n\n  </button>\n\n    <ion-title>\n\n      tlaqueBACHE\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="signOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="reporte" novalidate (submit)="reportar()">\n\n    <ion-item>\n\n      <ion-label stacked>Calle principal</ion-label>\n\n      <ion-input formControlName="calleP" type="text"\n\n        placeholder="Ingrese calle principal"\n\n        [class.invalid]="!reporte.controls.calleP.valid && reporte.controls.calleP.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleP.valid && reporte.controls.calleP.dirty">\n\n      <p>\n\n        Ingrese una calle válida.\n\n      </p>\n\n    </ion-item><br>\n\n    <ion-item>\n\n      <ion-label stacked>Primer cruce</ion-label>\n\n      <ion-input formControlName="calleCruce1" type="text"\n\n        placeholder="Ingrese primer cruce"\n\n        [class.invalid]="!reporte.controls.calleCruce1.valid && reporte.controls.calleCruce1.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleCruce1.valid && reporte.controls.calleCruce1.dirty">\n\n      <p>\n\n        Ingrese una calle válida.\n\n      </p>\n\n    </ion-item><br>\n\n    <ion-item>\n\n      <ion-label stacked>Segundo cruce</ion-label>\n\n      <ion-input formControlName="calleCruce2" type="text"\n\n        placeholder="Ingrese segundo cruce"\n\n        [class.invalid]="!reporte.controls.calleCruce2.valid && reporte.controls.calleCruce2.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleCruce2.valid && reporte.controls.calleCruce2.dirty">\n\n      <p>\n\n        Ingrese una calle válida.\n\n      </p>\n\n    </ion-item><br>\n\n    <ion-item>\n\n      <ion-label stacked>Tipo de calle</ion-label>\n\n      <ion-input formControlName="tipoCalle" type="text"\n\n        placeholder="Ingrese tipo de calle"\n\n        [class.invalid]="!reporte.controls.tipoCalle.valid && reporte.controls.tipoCalle.dirty">\n\n      </ion-input>\n\n    </ion-item>\n\n    <a>Ej. Concreto, empedrado, etc.</a>\n\n    <ion-item class="error-message" *ngIf="!reporte.controls.tipoCalle.valid && reporte.controls.tipoCalle.dirty">\n\n      <p>\n\n        Ingrese un tipo válido.\n\n      </p>\n\n    </ion-item><br>\n\n  \n\n\n\n    <ion-item>\n\n      <button ion-button block type="submit" [disabled]="!reporte.valid">\n\n        Enviar\n\n      </button>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\report\report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDataProvider = (function () {
    function FirebaseDataProvider(http) {
        this.http = http;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.email = this.user.email;
        console.log('Hello FirebaseDataProvider Provider');
    }
    FirebaseDataProvider.prototype.reportar = function (calleP, calleCruce1, calleCruce2, tipoCalle, email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('reporte')
            .push({ calleP: calleP, calleCruce1: calleCruce1, calleCruce2: calleCruce2, tipoCalle: tipoCalle, email: email });
    };
    FirebaseDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseDataProvider);
    return FirebaseDataProvider;
}());

//# sourceMappingURL=firebase-data.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_s_s__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_report__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tutorial2_tutorial2__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_data_firebase_data__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyBzIRbUj9pqa-UAmsWKVtSsk5QfmFf2si8",
    authDomain: "tlaque-67444.firebaseapp.com",
    databaseURL: "https://tlaque-67444.firebaseio.com",
    projectId: "tlaque-67444",
    storageBucket: "tlaque-67444.appspot.com",
    messagingSenderId: "23618756914"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_s_s__["a" /* SPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial2/tutorial2.module#Tutorial2PageModule', name: 'Tutorial2Page', segment: 'tutorial2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_s_s__["a" /* SPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(angularFireAuth) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        angularFireAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthService.prototype.createUserWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthService.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_report__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__["a" /* TutorialPage */];
    }
    MyApp.prototype.openHome = function () {
        this.rootPage(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openReport = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_report_report__["a" /* ReportPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content padding>\n  <ion-title >Menú</ion-title>\n	<ion-item-group>\n    	<ion-item (click)="openHome()" menuClose>\n	    	<ion-icon name="home" item-start></ion-icon>\n	    	Inicio\n		  </ion-item>\n      <ion-item (click)="openReport()" menuClose>\n        <ion-icon name="clipboard" item-start></ion-icon>\n        Reportar\n      </ion-item>\n  </ion-item-group>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__s_s__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SignInPage = (function () {
    function SignInPage(afAuth, navCtrl, loadingCtrl, alertCtrl, authService) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
    }
    SignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, RESULT, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Iniciando sesión. Por favor, espere...'
                        });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.userModel.email, this.userModel.password).then(function (result) {
                                loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                            }).catch(function (error) {
                                loading.dismiss();
                                console.log(error);
                                _this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
                            })];
                    case 2:
                        RESULT = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignInPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__s_s__["a" /* SPage */]);
    };
    SignInPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\signin\signin.html"*/'<ion-content class="background">\n\n<form #signUpForm="ngForm" (submit)="signIn()">\n\n  <ion-card >\n\n		<ion-card-header>\n\n			TlaqueBACHE\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<ion-list no-line>\n\n				<ion-item>\n\n          <ion-input  [(ngModel)]="userModel.email" type="email" placeholder="Ingrese correo" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n\n                    required></ion-input>\n\n				</ion-item>\n\n				<ion-item>\n\n          <ion-input [(ngModel)]="userModel.password" type="password" placeholder="Ingrese contraseña" name="password" required minlength="6"></ion-input>\n\n				</ion-item>\n\n				<a>Olvidaste tu contraseña? <b>Haz click aquí</b></a>\n\n				<button ion-button block outline color="light">Iniciar Sesión</button>\n\n			</ion-list>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n  </form>\n\n  <button class="bottom" ion-button clear full color="light" (click)="signUp()">¿No tienes una cuenta? Registrate</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    HomePage.prototype.signOut = function () {
        this.authService.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SignInPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Tlaque\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle>\n  	<ion-icon name = "menu"> </ion-icon>\n  </button>\n    <ion-title>\n      tlaqueBACHE\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"C:\xampp\htdocs\Tlaque\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[319]);
//# sourceMappingURL=main.js.map