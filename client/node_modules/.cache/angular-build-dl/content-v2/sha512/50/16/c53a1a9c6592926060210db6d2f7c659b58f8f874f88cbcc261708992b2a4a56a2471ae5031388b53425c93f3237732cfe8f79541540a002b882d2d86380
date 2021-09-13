(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/auth.guard */
      98063);
      /* harmony import */


      var _pages_theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/theme/theme.component */
      51746);
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/home/home.component */
      25245);
      /* harmony import */


      var _pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/configurations/configurations.component */
      84829);
      /* harmony import */


      var _pages_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/analytics/analytics.component */
      2733);

      var _AppRoutingModule = function AppRoutingModule(router) {
        var _this = this;

        _classCallCheck(this, AppRoutingModule);

        this.router = router;

        this.router.errorHandler = function (error) {
          _this.router.navigate(['404']); // or redirect to default route

        };
      };

      _AppRoutingModule.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot([{
          path: '',
          component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
          pathMatch: 'full'
        }, {
          path: 'analytics',
          component: _pages_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__.AnalyticsComponent
        }, {
          path: 'theme',
          component: _pages_theme_theme_component__WEBPACK_IMPORTED_MODULE_1__.ThemeComponent
        }, {
          path: 'secure/configurations',
          component: _pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_3__.ConfigurationsComponent,
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
        }, {
          path: '**',
          component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
        } // { path: '', component: ConfigurationsComponent, pathMatch: 'full' },
        // { path: 'home', component: HomeComponent},
        // { path: 'analytics', component: AnalyticsComponent},
        // { path: 'theme', component: ThemeComponent },
        // { path: '**', component: ConfigurationsComponent }
        ], {
          useHash: true,
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'legacy'
        })],
        providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      61249);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/auth.service */
      37556);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      92340);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, myAuthService, fb) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.myAuthService = myAuthService;
          this.fb = fb;
          this.showLogo = true;
          this.CONFIG = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment; // console.log('CONFIG: >>> ', this.CONFIG);

          this.loginForm = fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)])],
            'validate': ''
          });
          var that = this;
          this.myAuthService.userAuth.subscribe(function (userData) {
            that.currentUser = userData;
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('<<<<<< Inside Main App Component >>>> ');
            /*
            this.myAuthService.getUserInfo(false).then( result => {
                  this.currentUser = result;
                  console.log('In Init of AppComponent: >>>', this.currentUser);
             },
             error => {
                console.log('ERROR: >>> ', error);
             });
             */
          }
        }, {
          key: "gotoRegister",
          value: function gotoRegister() {
            console.log('IN gotoRegister: >>> ');
          }
        }, {
          key: "signIn",
          value: function signIn(provider) {
            console.log('Handle SignIn for Provider: >>> ', provider);
          }
        }, {
          key: "handleLogin",
          value: function handleLogin(post) {
            var _this2 = this;

            // console.log('IN handleLogin: >>> ', JSON.stringify(post));
            var params = {};

            if (post.username.indexOf('@') !== -1) {
              params = {
                'email': post.username,
                'password': post.password
              };
            } else {
              params = {
                'username': post.username,
                'password': post.password
              };
            }

            var loginReq = {
              'params': params
            };
            this.myAuthService.login(loginReq).then(function (result) {
              _this2.currentUser = result;

              _this2.closeBtn.nativeElement.click();
            }, function (error) {
              console.log('ERROR: >>> ', error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.myAuthService.logout().then(function (result) {
              _this3.currentUser = undefined;

              _this3.router.navigate(['/']);
            }, function (error) {
              console.log('ERROR: >>> ', error);
            });
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.MyAuthService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _AppComponent.propDecorators = {
        closeBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ['closeBtn', {
            "static": false
          }]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-moment */
      53034);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      1305);
      /* harmony import */


      var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-linkifyjs */
      83915);
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      32945);
      /* harmony import */


      var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @videogular/ngx-videogular/controls */
      48003);
      /* harmony import */


      var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @videogular/ngx-videogular/overlay-play */
      25559);
      /* harmony import */


      var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @videogular/ngx-videogular/buffering */
      62748);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _pages_theme_theme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/theme/theme.component */
      51746);
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home/home.component */
      25245);
      /* harmony import */


      var _pages_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/analytics/analytics.component */
      2733);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-cookie-service */
      31584);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/auth.service */
      37556);
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/shared.service */
      69082);
      /* harmony import */


      var _services_backend_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/backend.service */
      90600);
      /* harmony import */


      var _services_classification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/classification.service */
      64917);
      /* harmony import */


      var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-progressbar/core */
      77825);
      /* harmony import */


      var _pipes_humanize_mins_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipes/humanize-mins.pipe */
      64314);
      /* harmony import */


      var angular2_prettyjson__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular2-prettyjson */
      17837);
      /* harmony import */


      var _pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/configurations/configurations.component */
      84829); // import {SingleMediaPlayer} from './single-media-player';


      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _pages_theme_theme_component__WEBPACK_IMPORTED_MODULE_3__.ThemeComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _pages_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_5__.AnalyticsComponent, _pipes_humanize_mins_pipe__WEBPACK_IMPORTED_MODULE_10__.MinutesConversionPipe, _pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_12__.ConfigurationsComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_16__.NgProgressModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, ngx_moment__WEBPACK_IMPORTED_MODULE_19__.MomentModule, angular2_prettyjson__WEBPACK_IMPORTED_MODULE_11__.PrettyJsonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, // MatVideoModule,
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_21__.VgCoreModule, _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_22__.VgControlsModule, _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_23__.VgOverlayPlayModule, _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_24__.VgBufferingModule, ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_0__.NgxLinkifyjsModule.forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__.NgMultiSelectDropDownModule.forRoot()],
        providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService, _services_backend_service__WEBPACK_IMPORTED_MODULE_8__.BackendService, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__.CookieService, _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.MyAuthService, _services_classification_service__WEBPACK_IMPORTED_MODULE_9__.ClassificationService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    2733: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnalyticsComponent": function AnalyticsComponent() {
          return (
            /* binding */
            _AnalyticsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_analytics_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./analytics.component.html */
      50384);
      /* harmony import */


      var _analytics_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./analytics.component.css */
      71183);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      37556);
      /* harmony import */


      var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/backend.service */
      90600);
      /* harmony import */


      var _services_classification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/classification.service */
      64917);
      /* harmony import */


      var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-progressbar/core */
      77825);

      var _AnalyticsComponent = /*#__PURE__*/function () {
        function AnalyticsComponent(ngZone, authService, backendService, classificationService, progress) {
          _classCallCheck(this, AnalyticsComponent);

          this.ngZone = ngZone;
          this.authService = authService;
          this.backendService = backendService;
          this.classificationService = classificationService;
          this.progress = progress;
          this.detections = [];
          this.selectedDetections = [];
          this.dropdownSettings = {};
          this.input = {
            'text': ''
          };
        }

        _createClass(AnalyticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            initBootstrap(); // const that = this;

            Promise.all([this.classificationService.loadUSE(), this.classificationService.loadModel(), this.initConfigurations()]);
            this.loadScripts = new Promise(function (resolve) {
              // this.loadJupyterNotebookScript('https://gist.github.com/sinny777/e9a5fba8c6167e47bc37bc89d90ee5a0.js');
              console.log('Jupyter Notebook script loaded');
            });
          }
        }, {
          key: "loadJupyterNotebookScript",
          value: function loadJupyterNotebookScript(url) {
            this.loadScript(url);
          }
        }, {
          key: "loadScript",
          value: function loadScript(srcUrl) {
            var node = document.createElement('script');
            node.src = srcUrl;
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }, {
          key: "initConfigurations",
          value: function initConfigurations() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.detections = [{
                        'name': 'Language',
                        'id': 'language'
                      }, {
                        'name': 'Skill',
                        'id': 'skill'
                      }];
                      this.selectedDetections = [{
                        'name': 'Language',
                        'id': 'language'
                      }];
                      this.dropdownSettings = {
                        singleSelection: false,
                        idField: 'id',
                        textField: 'name',
                        itemsShowLimit: 2,
                        allowSearchFilter: false
                      };
                      return _context.abrupt("return", Promise.resolve());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onDetectionsSelect",
          value: function onDetectionsSelect(item) {
            // console.log(item);
            console.log(this.selectedDetections);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            // console.log(items);
            console.log(this.selectedDetections);
          }
        }, {
          key: "doPredictions",
          value: function doPredictions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$Promise$all$ca, _yield$Promise$all$ca2, language, prediction;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Promise.all([this.predictLanguage(), this.predictSkill()])["catch"](function (error) {
                        console.log('ERROR : >>> >', error);
                        return false;
                      });

                    case 2:
                      _yield$Promise$all$ca = _context2.sent;
                      _yield$Promise$all$ca2 = _slicedToArray(_yield$Promise$all$ca, 2);
                      language = _yield$Promise$all$ca2[0];
                      prediction = _yield$Promise$all$ca2[1];
                      console.log('SKILL: >>> ', prediction, ', LANGUAGE: >>> ', language);
                      this.predictions = {
                        'skill': prediction,
                        'language': language
                      };
                      return _context2.abrupt("return", this.predictions);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "predictSkill",
          value: function predictSkill() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _iterator, _step, detection;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _iterator = _createForOfIteratorHelper(this.selectedDetections);
                      _context3.prev = 1;

                      _iterator.s();

                    case 3:
                      if ((_step = _iterator.n()).done) {
                        _context3.next = 10;
                        break;
                      }

                      detection = _step.value;

                      if (!(detection.id === 'skill')) {
                        _context3.next = 8;
                        break;
                      }

                      if (!(this.input && this.input.text && this.input.text.length > 10)) {
                        _context3.next = 8;
                        break;
                      }

                      return _context3.abrupt("return", this.classificationService.predictSkill(this.input.text));

                    case 8:
                      _context3.next = 3;
                      break;

                    case 10:
                      _context3.next = 15;
                      break;

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3["catch"](1);

                      _iterator.e(_context3.t0);

                    case 15:
                      _context3.prev = 15;

                      _iterator.f();

                      return _context3.finish(15);

                    case 18:
                      return _context3.abrupt("return", 'None');

                    case 19:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[1, 12, 15, 18]]);
            }));
          }
        }, {
          key: "predictLanguage",
          value: function predictLanguage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _iterator2, _step2, detection;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _iterator2 = _createForOfIteratorHelper(this.selectedDetections);
                      _context4.prev = 1;

                      _iterator2.s();

                    case 3:
                      if ((_step2 = _iterator2.n()).done) {
                        _context4.next = 10;
                        break;
                      }

                      detection = _step2.value;

                      if (!(detection.id === 'language')) {
                        _context4.next = 8;
                        break;
                      }

                      if (!(!this.predictions || !this.predictions.language || this.predictions.language === 'None')) {
                        _context4.next = 8;
                        break;
                      }

                      return _context4.abrupt("return", this.classificationService.predictLanguage({
                        'message': this.input.text
                      }));

                    case 8:
                      _context4.next = 3;
                      break;

                    case 10:
                      _context4.next = 15;
                      break;

                    case 12:
                      _context4.prev = 12;
                      _context4.t0 = _context4["catch"](1);

                      _iterator2.e(_context4.t0);

                    case 15:
                      _context4.prev = 15;

                      _iterator2.f();

                      return _context4.finish(15);

                    case 18:
                      return _context4.abrupt("return", this.predictions.language);

                    case 19:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 12, 15, 18]]);
            }));
          }
        }]);

        return AnalyticsComponent;
      }();

      _AnalyticsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.MyAuthService
        }, {
          type: _services_backend_service__WEBPACK_IMPORTED_MODULE_3__.BackendService
        }, {
          type: _services_classification_service__WEBPACK_IMPORTED_MODULE_4__.ClassificationService
        }, {
          type: _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_7__.NgProgress
        }];
      };

      _AnalyticsComponent.propDecorators = {
        currentUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }]
      };
      _AnalyticsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_analytics_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_analytics_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AnalyticsComponent);
      /***/
    },

    /***/
    84829: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigurationsComponent": function ConfigurationsComponent() {
          return (
            /* binding */
            _ConfigurationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_configurations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./configurations.component.html */
      60586);
      /* harmony import */


      var _configurations_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configurations.component.css */
      85149);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      37556);
      /* harmony import */


      var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/backend.service */
      90600);
      /* harmony import */


      var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-progressbar/core */
      77825);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);

      var _ConfigurationsComponent = /*#__PURE__*/function () {
        function ConfigurationsComponent(router, authService, backendService, progress) {
          _classCallCheck(this, ConfigurationsComponent);

          this.router = router;
          this.authService = authService;
          this.backendService = backendService;
          this.progress = progress;
          this.showAddEditAssistant = false;
          var that = this;
          this.authService.userAuth.subscribe(function (userData) {
            that.currentUser = userData;

            if (!that.currentUser || that.currentUser == null) {
              console.log('No USER FOUND IN ConfigurationsPage: >>> ');
            } else {// that.fetchConfigurations();
            }
          });
        }

        _createClass(ConfigurationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.authService.getUserInfo(false).then(function (result) {
              _this4.currentUser = result;

              if (_this4.currentUser && (_this4.currentUser.id || _this4.currentUser.uid)) {
                _this4.fetchConfigurations();
              } else {
                _this4.router.navigate(['/']);

                return false;
              }
            }, function (error) {
              console.log('USER IS NOT loggedIn !!! ');
            }); // this.fetchConfigurations();

            initBootstrap();
          }
        }, {
          key: "fetchConfigurations",
          value: function fetchConfigurations() {
            var _this5 = this;

            console.log('In fetchConfigurations: >> ');
            this.progress.ref().start();
            var filterPayload = {
              'filter': {
                'where': {
                  'key': _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.APP_CONFIG_KEY
                }
              }
            };
            this.backendService.fetchAppConfigurations(filterPayload).then(function (response) {
              _this5.progress.ref().complete();

              console.log('fetchAppConfigurations, Resp: >> ', response);

              if (response && response.length > 0 && response[0].output) {
                _this5.appConfig = response[0];
              } else {
                _this5.appConfig = {
                  'key': _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.APP_CONFIG_KEY,
                  'output': {
                    'WATSON_ASSISTANT': {
                      'API_KEY': '',
                      'ASSISTANTS': []
                    },
                    'WATSON_DISCOVERY': {
                      'ENABLE': false,
                      'API_KEY': '',
                      'ENVIRONMENT_ID': '',
                      'CONFIGURATION_ID': '',
                      'COLLECTION_ID': ''
                    },
                    'WATSON_STT_API_KEY': ''
                  }
                };
              }

              setTimeout(function () {
                initDOMComponents();
              }, 1000);
            }, function (error) {
              _this5.progress.ref().complete();

              console.log('ERROR: >>> ', error);
              setTimeout(function () {
                initDOMComponents();
              }, 1000);
            });
          }
        }, {
          key: "makeAssistantDefaut",
          value: function makeAssistantDefaut(assistant) {
            console.log('IN makeAssistantDefaut: >> ', assistant);

            var _iterator3 = _createForOfIteratorHelper(this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var wa = _step3.value;

                if (wa.id === assistant.id) {
                  assistant["default"] = true;
                  wa["default"] = true;
                } else {
                  wa["default"] = false;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "removeAssistant",
          value: function removeAssistant(assistant) {
            // console.log('IN removeAssistant: >> ', assistant);
            var index = this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS.indexOf(assistant);
            this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS.splice(index, 1);
          }
        }, {
          key: "editAssistant",
          value: function editAssistant(assistant) {
            // console.log('IN editAssistant: >> ', assistant);
            this.selectedAssistant = assistant;
            this.showAddEditAssistant = true;
          }
        }, {
          key: "addAssistant",
          value: function addAssistant() {
            this.selectedAssistant = {
              'name': '',
              'id': '',
              'default': false
            };
            this.showAddEditAssistant = true;
          }
        }, {
          key: "saveAssistantDetails",
          value: function saveAssistantDetails() {
            if (!this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS) {
              this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS = [];
            }

            var index = this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS.indexOf(this.selectedAssistant);

            if (index !== -1) {
              this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS[index] = this.selectedAssistant;
            } else {
              this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS.push(this.selectedAssistant);
            }

            if (this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS.length === 1) {
              this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS[0]["default"] = true;
            }

            console.log('IN saveAssistantDetails: >>> ', this.appConfig.output.WATSON_ASSISTANT.ASSISTANTS);
            this.showAddEditAssistant = false;
          }
        }, {
          key: "cancelSaveAssistant",
          value: function cancelSaveAssistant() {
            this.selectedAssistant = {
              'name': '',
              'id': '',
              'default': false
            };
            this.showAddEditAssistant = false;
          }
        }, {
          key: "saveAppConfig",
          value: function saveAppConfig() {
            var _this6 = this;

            console.log('In fetchConfigurations: >> ', this.appConfig);
            this.progress.ref().start(); // let payload = {'key': 'APP_CONFIG', 'output': this.appConfig};

            this.backendService.saveAppConfig(this.appConfig).then(function (response) {
              _this6.progress.ref().complete();

              console.log('fetchAppConfigurations, Resp: >> ', response);

              if (response && response.length > 0) {
                _this6.appConfig = response[0].output;
              }
            }, function (error) {
              _this6.progress.ref().complete();

              console.log('ERROR: >>> ', error);
            });
          }
        }]);

        return ConfigurationsComponent;
      }();

      _ConfigurationsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.MyAuthService
        }, {
          type: _services_backend_service__WEBPACK_IMPORTED_MODULE_3__.BackendService
        }, {
          type: _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__.NgProgress
        }];
      };

      _ConfigurationsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-configurations',
        template: _raw_loader_configurations_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_configurations_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConfigurationsComponent);
      /***/
    },

    /***/
    25245: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.component.html */
      93508);
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component.css */
      17155);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      37556);
      /* harmony import */


      var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/backend.service */
      90600);
      /* harmony import */


      var _services_classification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/classification.service */
      64917);
      /* harmony import */


      var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-progressbar/core */
      77825);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! socket.io-client */
      29605);
      /* harmony import */


      var watson_speech_speech_to_text_recognize_microphone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! watson-speech/speech-to-text/recognize-microphone */
      90452);
      /* harmony import */


      var watson_speech_speech_to_text_recognize_microphone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(watson_speech_speech_to_text_recognize_microphone__WEBPACK_IMPORTED_MODULE_7__);

      var _HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(ngZone, authService, backendService, classificationService, progress) {
          var _this7 = this;

          _classCallCheck(this, HomeComponent);

          this.ngZone = ngZone;
          this.authService = authService;
          this.backendService = backendService;
          this.classificationService = classificationService;
          this.progress = progress;
          this.hasAudioDevice = false;
          this.sessionMap = new Map();
          this.detections = [];
          this.selectedDetections = [];
          this.dropdownSettings = {};
          this.userInput = {
            'label': '',
            'value': ''
          }; // progressRef: NgProgressRef;

          this.conversationObj = {
            'params': {
              'input': {
                'text': '',
                'message_type': 'text',
                'options': {
                  'alternate_intents': false,
                  'return_context': true
                }
              },
              'context': {
                'global': {
                  'system': {
                    'user_id': 'anonymous'
                  }
                },
                'skills': {
                  'main skill': {
                    'user_defined': {
                      'initConversation': true,
                      'locale': 'en',
                      'channel': 'WEB',
                      'save_in_db': false
                    }
                  }
                }
              }
            }
          };
          this.conversations = [];
          this.showDetails = false;
          this.collectionName = null;

          this.scrollToBottom = function () {
            try {
              _this7.chatRow.nativeElement.scrollTop = _this7.chatRow.nativeElement.scrollHeight;

              _this7.chatInputTxtElement.nativeElement.focus();
            } catch (err) {}
          };

          this.socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.socket.baseUrl); // console.log(environment.socket.baseUrl);

          var that = this;
          this.authService.userAuth.subscribe(function (userData) {
            that.currentUser = userData;

            if (that.currentUser && that.currentUser.id) {
              if (!that.conversations || that.conversations.length === 0) {
                console.log('AFTER USER LOGIN, refreshConversation >>> '); // that.refreshConversation();
              }
            } else {
              that.conversationObj.params.context['skills']['main skill']['user_defined'].initConversation = true;
              delete that.conversationObj.params.context['global']['system']['user_id'];
            }
          });
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var that, checking, model;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      initBootstrap();
                      that = this;
                      this.authService.getUserInfo(false).then(function (result) {
                        that.currentUser = result;

                        if (that.currentUser && (that.currentUser.id || that.currentUser.uid)) {
                          that.refreshConversation();
                        }
                      }, function (error) {
                        console.log('USER IS NOT loggedIn !!! ');
                      });
                      checking = ['audioinput'];
                      navigator.mediaDevices.enumerateDevices().then(function (devices) {
                        devices.forEach(function (device) {
                          console.log('Device: >> ', device.kind);

                          if (device.kind === checking[0]) {
                            _this8.hasAudioDevice = true;
                          }
                        });
                        console.log('hasAudioDevice: >> ', _this8.hasAudioDevice);

                        if (_this8.hasAudioDevice) {
                          _this8.fetchSTTToken();
                        }
                      })["catch"](function (err) {
                        console.log(err.name + ': ' + err.message);
                      });
                      _context5.next = 7;
                      return this.classificationService.loadModel();

                    case 7:
                      model = _context5.sent;

                      if (!model) {
                        _context5.next = 11;
                        break;
                      }

                      _context5.next = 11;
                      return this.initConfigurations();

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "initConfigurations",
          value: function initConfigurations() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.detections = [{
                        'name': 'Language',
                        'id': 'language'
                      }, {
                        'name': 'Skill',
                        'id': 'skill'
                      }];
                      this.selectedDetections = [];
                      this.dropdownSettings = {
                        singleSelection: false,
                        idField: 'id',
                        textField: 'name',
                        itemsShowLimit: 2,
                        allowSearchFilter: false
                      };
                      return _context6.abrupt("return", Promise.resolve());

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "fetchSTTToken",
          value: function fetchSTTToken() {
            var _this9 = this;

            this.backendService.fetchSTTToken().then(function (token) {
              _this9.token = token;
            }, function (error) {
              console.log('ERROR fetching STTToken: >>> ');
            });
          }
        }, {
          key: "highlightReqResp",
          value: function highlightReqResp() {
            console.log(this.conversations[this.conversations.length - 1]);
          }
        }, {
          key: "refreshConversation",
          value: function refreshConversation() {
            this.conversations = [];
            this.sessionMap = new Map();
            this.userInput = {
              'label': '',
              'value': ''
            };
            this.conversationObj = {
              'params': {
                'input': {
                  'text': '',
                  'message_type': 'text',
                  'options': {
                    'alternate_intents': false,
                    'return_context': true
                  }
                },
                'context': {
                  'global': {
                    'system': {
                      'user_id': 'anonymous'
                    }
                  },
                  'skills': {
                    'main skill': {
                      'user_defined': {
                        'initConversation': true,
                        'locale': 'en',
                        'channel': 'WEB',
                        'save_in_db': false
                      }
                    }
                  }
                }
              }
            };
            console.log('In refreshConversation: >>> ', this.conversationObj);

            if (this.currentUser && this.currentUser.id) {
              this.conversationObj.params.context['skills']['main skill']['user_defined']['user_id'] = this.currentUser.id;
              this.fetchConversationResponse();
            } else {
              console.log('No User Found......');
            }

            setTimeout(function () {
              initDOMComponents();
            }, 1000);
          }
        }, {
          key: "optionSelected",
          value: function optionSelected(option) {
            console.log('In optionSelected: >> ', option);
            this.userInput.label = option.label;
            this.userInput.text = option.value.input.text; // this.conversationObj.params.input.text = option.value.input.text;

            this.fetchConversationResponse();
          }
        }, {
          key: "suggestionSelected",
          value: function suggestionSelected(suggestion) {
            if (!suggestion.output || !suggestion.output.generic || suggestion.output.generic.length === 0) {
              console.log('Do Nothing...');
            } else {
              this.conversations[this.conversations.length - 1].replies[0].output = suggestion.output;
            }
          }
        }, {
          key: "checkIfEnterPressed",
          value: function checkIfEnterPressed(e) {
            if (e.keyCode === 13) {
              console.log('Enter Key Is Hit: >> '); // this.fetchConversationResponse();
            }
          }
        }, {
          key: "setSTTOptions",
          value: function setSTTOptions(token) {
            return {
              access_token: token,
              format: true,
              extractResults: true,
              objectMode: true
            };
          }
        }, {
          key: "startStream",
          value: function startStream() {
            var _this10 = this;

            this.isStreaming = true;
            this.stream = watson_speech_speech_to_text_recognize_microphone__WEBPACK_IMPORTED_MODULE_7___default()(this.setSTTOptions(this.token));
            this.ngZone.runOutsideAngular(function () {
              _this10.stream.on('data', function (data) {
                _this10.ngZone.run(function () {
                  _this10.userInput.label = data.alternatives[0].transcript; // this.conversationObj.params.input.text = data.alternatives[0].transcript;

                  if (data["final"]) {
                    _this10.stopStream();
                  }
                });
              });

              _this10.stream.on('error', function (error) {
                _this10.ngZone.run(function () {
                  console.log(error);
                });
              });
            });
          }
        }, {
          key: "stopStream",
          value: function stopStream() {
            if (this.stream) {
              this.isStreaming = false;
              this.stream.stop();
              this.fetchConversationResponse();
            }
          }
        }, {
          key: "showSegmentDetails",
          value: function showSegmentDetails() {
            this.showDetails = !this.showDetails;
          }
        }, {
          key: "handleMessageFromWatson",
          value: function handleMessageFromWatson(msg) {
            console.log('Conversation API Response: >>> ', msg);

            if (msg) {
              msg = this.formatOutputResp(msg);
              this.appendOrPushConversation(msg);
              this.userInput = {
                'label': '',
                'value': ''
              };
              this.conversationObj.params.input = {
                'text': '',
                'message_type': 'text',
                'options': {
                  'alternate_intents': false,
                  'return_context': true
                }
              };
              this.conversationObj.params.context = msg.context;
              this.conversationObj.params.assistantId = msg.assistantId;
              this.conversationObj.params.sessionId = msg.sessionId;
              this.scrollToBottom();
            }

            this.progress.ref().complete();
          }
        }, {
          key: "appendOrPushConversation",
          value: function appendOrPushConversation(msg) {
            console.log('IN appendOrPushConversation: >> Context: ', msg.context);

            if (msg.context && msg.context['skills']['main skill']['user_defined']['next_action']) {
              if (msg.context['skills']['main skill']['user_defined']['next_action'] === 'append') {
                // this.conversations[this.conversations.length - 1].replies.push(msg);
                this.conversations[this.conversations.length - 1].replies = [msg];
                msg.context['skills']['main skill']['user_defined']['next_action'] = 'completed';
              } else {
                this.conversations.push({
                  'replies': [msg]
                });
              }

              this.conversations[this.conversations.length - 1].context = msg.context;
            } else {
              this.conversations.push({
                'replies': [msg]
              });
            } // console.log("Total Conversations: >>> ", this.conversations.length);

          }
        }, {
          key: "fetchConversationResponse",
          value: function fetchConversationResponse() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this11 = this;

              var session;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('In fetchConversationResponse: >>> ', this.conversationObj);

                      if (this.userInput.text) {
                        this.conversationObj.params.input.text = this.userInput.text;
                      } else {
                        this.conversationObj.params.input.text = this.userInput.label;
                      }

                      if (!(this.detections && this.detections.length > 0)) {
                        _context7.next = 7;
                        break;
                      }

                      _context7.next = 5;
                      return this.doPredictions();

                    case 5:
                      this.predictions = _context7.sent;

                      if (this.predictions && this.predictions.skill && this.predictions.skill.assistantId && this.predictions.skill.assistantId !== 'COMMON') {
                        this.conversationObj.params.assistantId = this.predictions.skill.assistantId;

                        if (this.sessionMap && this.sessionMap.has(this.predictions.skill.assistantId)) {
                          session = this.sessionMap.get(this.predictions.skill.assistantId);

                          if (session && session.sessionId) {
                            this.conversationObj.params.sessionId = session.sessionId;
                          }
                        } else {
                          delete this.conversationObj.params.sessionId;
                        }
                      }

                    case 7:
                      if (!(!this.conversationObj.params.context['skills']['main skill']['user_defined']['initConversation'] && (!this.conversationObj.params.input.text || this.conversationObj.params.input.text === ''))) {
                        _context7.next = 9;
                        break;
                      }

                      return _context7.abrupt("return", false);

                    case 9:
                      if (this.currentUser) {
                        this.conversationObj.params.context['global']['system']['user_id'] = this.currentUser.id;
                      } else {
                        this.authService.getUserInfo(false).then(function (result) {
                          _this11.currentUser = result;
                          _this11.conversationObj.params.context['global']['system']['user_id'] = _this11.currentUser.id;
                        }, function (error) {
                          console.log('ERROR: >>> ', error);
                        });
                      }

                      if (this.conversationObj.params.context['skills']['main skill']['user_defined']['webhook_result_1']) {
                        delete this.conversationObj.params.context['skills']['main skill']['user_defined']['webhook_result_1'];
                      }

                      console.log('this.conversationObj.params.assistantId: >> ', this.conversationObj.params.assistantId);
                      console.log('this.conversationObj.params.sessionId: >> ', this.conversationObj.params.sessionId);
                      this.conversationObj.params.predictions = this.predictions;
                      this.conversationObj.params.timestamp = Date.now();
                      this.progress.ref().start();
                      console.log('\n\nIN fetchConversationResponse, conversationObj:>>  ', this.conversationObj);
                      this.backendService.callAssistant(this.conversationObj).then(function (response) {
                        if (response.context && response['sessionId']) {
                          var subscribeToSocket = false;

                          if (!_this11.collectionName || _this11.collectionName !== response['sessionId'] + '/POST') {
                            _this11.collectionName = '/' + response['sessionId'] + '/POST';
                            subscribeToSocket = true;
                          }

                          if (subscribeToSocket) {
                            console.log('Subscribe to Socket: >> ', _this11.collectionName);

                            _this11.socket.removeAllListeners();

                            _this11.socket.on(_this11.collectionName, function (msg) {
                              console.log('Message received on Socket: >>>');

                              _this11.handleMessageFromWatson(msg);

                              setTimeout(function () {
                                _this11.scrollToBottom();
                              }, 400);
                            });
                          }
                        }

                        _this11.handleMessageFromWatson(response);

                        setTimeout(function () {
                          _this11.scrollToBottom();
                        }, 400);
                      }, function (error) {
                        _this11.progress.ref().complete();

                        console.log('ERROR: >>> ', error);
                      });

                    case 18:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "formatOutputResp",
          value: function formatOutputResp(result) {
            result.input.timestamp = this.conversationObj.params.timestamp;
            result.output.timestamp = new Date();

            if (this.userInput.label) {
              result.input.text = this.userInput.label;
            }

            if (result.assistantId && result.sessionId) {
              this.sessionMap.set(result.assistantId, {
                'sessionId': result.sessionId
              });
            }

            console.log('In formatOutputResp, sessionMap: >> ', this.sessionMap);
            return result;
          }
        }, {
          key: "onDetectionsSelect",
          value: function onDetectionsSelect(item) {
            // console.log(item);
            console.log(this.selectedDetections);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            // console.log(items);
            console.log(this.selectedDetections);
          }
        }, {
          key: "doPredictions",
          value: function doPredictions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _yield$Promise$all$ca3, _yield$Promise$all$ca4, language, prediction;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(!this.userInput.label || this.userInput.label === '')) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      console.log('In doPredictions: >>> ', this.userInput.label);
                      _context8.next = 5;
                      return Promise.all([this.predictLanguage(), this.predictSkill()])["catch"](function (error) {
                        console.log('ERROR : >>> >', error);
                        return;
                      });

                    case 5:
                      _yield$Promise$all$ca3 = _context8.sent;
                      _yield$Promise$all$ca4 = _slicedToArray(_yield$Promise$all$ca3, 2);
                      language = _yield$Promise$all$ca4[0];
                      prediction = _yield$Promise$all$ca4[1];
                      console.log('SKILL: >>> ', prediction, ', LANGUAGE: >>> ', language);
                      this.predictions = {
                        'skill': prediction,
                        'language': language
                      };
                      return _context8.abrupt("return", this.predictions);

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "predictSkill",
          value: function predictSkill() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _iterator4, _step4, detection, result;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _iterator4 = _createForOfIteratorHelper(this.selectedDetections);
                      _context9.prev = 1;

                      _iterator4.s();

                    case 3:
                      if ((_step4 = _iterator4.n()).done) {
                        _context9.next = 13;
                        break;
                      }

                      detection = _step4.value;

                      if (!(detection.id === 'skill')) {
                        _context9.next = 11;
                        break;
                      }

                      if (!(this.userInput && this.userInput.label && this.userInput.label.length > 10)) {
                        _context9.next = 11;
                        break;
                      }

                      _context9.next = 9;
                      return this.classificationService.predictSkill(this.userInput.label);

                    case 9:
                      result = _context9.sent;
                      return _context9.abrupt("return", result);

                    case 11:
                      _context9.next = 3;
                      break;

                    case 13:
                      _context9.next = 18;
                      break;

                    case 15:
                      _context9.prev = 15;
                      _context9.t0 = _context9["catch"](1);

                      _iterator4.e(_context9.t0);

                    case 18:
                      _context9.prev = 18;

                      _iterator4.f();

                      return _context9.finish(18);

                    case 21:
                      return _context9.abrupt("return", 'None');

                    case 22:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[1, 15, 18, 21]]);
            }));
          }
        }, {
          key: "predictLanguage",
          value: function predictLanguage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _iterator5, _step5, detection;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _iterator5 = _createForOfIteratorHelper(this.selectedDetections);
                      _context10.prev = 1;

                      _iterator5.s();

                    case 3:
                      if ((_step5 = _iterator5.n()).done) {
                        _context10.next = 9;
                        break;
                      }

                      detection = _step5.value;

                      if (!(detection.id === 'language')) {
                        _context10.next = 7;
                        break;
                      }

                      return _context10.abrupt("return", this.classificationService.predictLanguage({
                        'message': this.userInput.label
                      }));

                    case 7:
                      _context10.next = 3;
                      break;

                    case 9:
                      _context10.next = 14;
                      break;

                    case 11:
                      _context10.prev = 11;
                      _context10.t0 = _context10["catch"](1);

                      _iterator5.e(_context10.t0);

                    case 14:
                      _context10.prev = 14;

                      _iterator5.f();

                      return _context10.finish(14);

                    case 17:
                      return _context10.abrupt("return", 'None');

                    case 18:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[1, 11, 14, 17]]);
            }));
          }
        }, {
          key: "provideFeedback",
          value: function provideFeedback(dialog, feedback) {
            console.log('IN provideFeedback, feedback: >> ', feedback, ', Dialog: >>> ', dialog);
          }
        }]);

        return HomeComponent;
      }();

      _HomeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.MyAuthService
        }, {
          type: _services_backend_service__WEBPACK_IMPORTED_MODULE_3__.BackendService
        }, {
          type: _services_classification_service__WEBPACK_IMPORTED_MODULE_4__.ClassificationService
        }, {
          type: _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__.NgProgress
        }];
      };

      _HomeComponent.propDecorators = {
        currentUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }],
        chatRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['chatRow', {
            "static": false
          }]
        }],
        chatInputTxtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['chatInputTxt', {
            "static": false
          }]
        }]
      };
      _HomeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomeComponent);
      /***/
    },

    /***/
    51746: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThemeComponent": function ThemeComponent() {
          return (
            /* binding */
            _ThemeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_theme_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./theme.component.html */
      50003);
      /* harmony import */


      var _theme_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./theme.component.css */
      6157);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ThemeComponent = /*#__PURE__*/function () {
        function ThemeComponent() {
          _classCallCheck(this, ThemeComponent);
        }

        _createClass(ThemeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ThemeComponent;
      }();

      _ThemeComponent.ctorParameters = function () {
        return [];
      };

      _ThemeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-theme',
        template: _raw_loader_theme_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_theme_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ThemeComponent);
      /***/
    },

    /***/
    64314: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MinutesConversionPipe": function MinutesConversionPipe() {
          return (
            /* binding */
            _MinutesConversionPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716); // import { MomentModule } from 'angular2-moment';


      var _MinutesConversionPipe = /*#__PURE__*/function () {
        function MinutesConversionPipe() {
          _classCallCheck(this, MinutesConversionPipe);
        }

        _createClass(MinutesConversionPipe, [{
          key: "transform",
          value: function transform(minutes) {
            // return moment.duration(time, "minutes").humanize();
            // let min = parseInt(minutes);
            if (!minutes || minutes < 0) {
              return "";
            }

            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;

            if (hours == 0) {
              return remainingMinutes + " mins ";
            } else {
              if (remainingMinutes == 0) {
                return hours + " hours";
              } else {
                return hours + " hours " + remainingMinutes + " mins ";
              }
            }
          }
        }]);

        return MinutesConversionPipe;
      }();

      _MinutesConversionPipe.ctorParameters = function () {
        return [];
      };

      _MinutesConversionPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'humanize'
      })], _MinutesConversionPipe);
      /***/
    },

    /***/
    98063: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      37556);

      var _AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this12 = this;

            return new Promise(function (resolve) {
              _this12.authService.getUserInfo(false).then(function (user) {
                if (user && (user.id || user.uid)) {
                  resolve(true);
                } else {
                  _this12.router.navigate(['/']);

                  resolve(false);
                }
              }, function (error) {
                console.log("In AuthGuard, USER IS NOT loggedIn !!! ");

                _this12.router.navigate(['/']);

                resolve(false);
              });
            });
          }
        }]);

        return AuthGuard;
      }();

      _AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.MyAuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }];
      };

      _AuthGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _AuthGuard);
      /***/
    },

    /***/
    37556: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyAuthService": function MyAuthService() {
          return (
            /* binding */
            _MyAuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      31584);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _MyAuthService = /*#__PURE__*/function () {
        function MyAuthService(http, cookieService) {
          _classCallCheck(this, MyAuthService);

          this.http = http;
          this.cookieService = cookieService; // Create a stream of logged in status to communicate throughout app

          this.loggedIn = false;
          this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.loggedIn);
          this.userAuth = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(MyAuthService, [{
          key: "refreshHeaders",
          value: function refreshHeaders() {
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-IBM-Client-Id": "default",
              "X-IBM-Client-Secret": "SECRET",
              "Authorization": this.accessToken ? this.accessToken : ""
            });
            return this.headers;
          }
        }, {
          key: "_setLoggedIn",
          value: function _setLoggedIn(value) {
            // Update login status subject
            this.loggedIn$.next(value);
            this.loggedIn = value;
          }
        }, {
          key: "login",
          value: function login(payload) {
            var POST_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/MyUsers/login?include=user";
            var findReq = {
              "filter": {
                "include": {
                  "relation": "roles"
                }
              }
            };

            if (!payload || !payload.params) {
              return Promise.reject("INVALID DATA");
            } else {
              var reqOptions = {
                headers: this.headers,
                withCredentials: true,
                params: findReq
              };
              var that = this;
              return this.http.post(POST_URL, payload.params, reqOptions).toPromise().then(function (resp) {
                var userInfo = resp;
                var authResult = {
                  "userId": userInfo["userId"],
                  "accessToken": userInfo["id"]
                };

                that._setSession(authResult, userInfo);

                that.refreshHeaders();
                return that.getUserInfo(true).then(function (userData) {
                  // console.log("UserInfo Fetched: >>> ", userData);
                  that.userProfile = userData;
                  return userData;
                }, function (error) {
                  console.log("ERROR: >>> ", error);

                  if (error.status == 401) {
                    that.cookieService.deleteAll();
                    that.accessToken = undefined;
                    that.userProfile = undefined;

                    that._setLoggedIn(false);

                    that.userAuth.emit(undefined);
                  } else {
                    that.userProfile = userInfo;
                    that.userAuth.emit(userInfo);
                  }
                });
              })["catch"](this.handleErrorPromise);
            }
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo(refresh) {
            if (this.userProfile && !refresh) {
              return Promise.resolve(this.userProfile);
            }

            var authData = this.getAuthData();

            if (authData && authData.userId && authData.accessToken) {
              this.accessToken = authData.accessToken;
              this.refreshHeaders();
              var GET_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/MyUsers/" + authData.userId; // let findReq: any = {"filter": {"where": {"id": authData.userId}, "include": {"relation": "identities"}}};

              var findReq = {
                'filter': '{\"include\": {\"relation\": \"roles\"}}'
              }; // const findReq = new HttpParams({"filter": "{'include': {relation: 'roles'}}"});

              var reqOptions = {
                headers: this.headers,
                params: findReq
              };
              console.log("reqOptions: >>> ", reqOptions);
              var that = this;
              return this.http.get(GET_URL, reqOptions).toPromise().then(function (resp) {
                that.userProfile = resp;

                that._setSession(authData, that.userProfile);

                that.userAuth.emit(that.userProfile);
                return that.userProfile;
              })["catch"](function (error) {
                console.log("ERROR IN getUserInfo: >>>> ", error);

                if (error.status == 401) {
                  that.cookieService.deleteAll();
                  that.accessToken = undefined;
                  that.userProfile = undefined;

                  that._setLoggedIn(false);

                  that.userAuth.emit(undefined);
                }
              });
            } else {
              return Promise.reject("No User Found !! ");
            }
          }
        }, {
          key: "_setSession",
          value: function _setSession(authResult, profile) {
            if (!authResult.expiresIn || authResult.expiresIn <= 0) {
              authResult.expiresIn = 60000;
            }

            var expTime = authResult.expiresIn * 1000 + Date.now(); // Save session data and update login status subject

            localStorage.setItem('expires_at', JSON.stringify(expTime));
            localStorage.setItem("userId", authResult.userId);
            localStorage.setItem("access_token", authResult.accessToken);
            this.accessToken = authResult.accessToken;

            this._setLoggedIn(true);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('expires_at');
            localStorage.removeItem('userId');
            localStorage.removeItem('access_token');
            console.log("IN AuthService.logout:>>>>> ");
            var LOGOUT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/MyUsers/logout";
            var reqOptions = {
              headers: this.headers
            };
            var that = this;
            return this.http.post(LOGOUT_URL, {
              "sid": this.accessToken
            }, reqOptions).toPromise().then(function (resp) {
              that.cookieService.deleteAll();
              that.accessToken = undefined;
              that.userProfile = undefined;

              that._setLoggedIn(false);

              console.log("LOGOUT RESP: >> ", resp);
              that.userAuth.emit(undefined);
              return resp;
            })["catch"](this.handleErrorPromise);
          }
        }, {
          key: "getAuthData",
          value: function getAuthData() {
            var accessToken = this.getCookieVal('access_token');
            var userId = this.getCookieVal('userId');
            var expiresAt = Number(this.getCookieVal('expires_at'));

            if (!expiresAt || expiresAt <= 0) {
              expiresAt = 60000 + Date.now();
            }

            return {
              "userId": userId,
              "expiresAt": expiresAt,
              accessToken: accessToken
            };
          }
        }, {
          key: "getCookieVal",
          value: function getCookieVal(cookieName) {
            var cookieVal = this.cookieService.get(cookieName);

            if (cookieVal && cookieVal.indexOf(":") != -1 && cookieVal.lastIndexOf(".") != -1) {
              cookieVal = cookieVal.substring(2, cookieVal.lastIndexOf(".")); // console.log("From CookieService: ", cookieName, " : ", cookieVal);

              return cookieVal;
            }

            if (!cookieVal) {
              cookieVal = localStorage.getItem(cookieName);
            } // console.log(cookieName, " : ", cookieVal);


            return cookieVal;
          }
        }, {
          key: "extractData",
          value: function extractData(res) {
            var body = res.json();
            return body;
          }
        }, {
          key: "handleErrorPromise",
          value: function handleErrorPromise(error) {
            console.error(error || error.message);
            return Promise.reject(error || error.message);
          }
        }]);

        return MyAuthService;
      }();

      _MyAuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService
        }];
      };

      _MyAuthService.propDecorators = {
        userAuth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _MyAuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _MyAuthService);
      /***/
    },

    /***/
    90600: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BackendService": function BackendService() {
          return (
            /* binding */
            _BackendService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      37556);

      var _BackendService = /*#__PURE__*/function () {
        function BackendService(http, authService) {
          _classCallCheck(this, BackendService);

          this.http = http;
          this.authService = authService;
          this.headers = this.authService.refreshHeaders();
        }

        _createClass(BackendService, [{
          key: "callAssistant",
          value: function callAssistant(payload) {
            var POST_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/Conversations/converse";

            if (!payload || !payload.params || !payload.params.input && !payload.params.context.initConversation) {
              return Promise.reject("INVALID DATA");
            } else {
              this.headers = this.authService.refreshHeaders();
              var reqOptions = {
                headers: this.headers
              };
              return this.http.post(POST_URL, payload, reqOptions).toPromise().then(this.extractData)["catch"](this.handleErrorPromise);
            }
          }
        }, {
          key: "fetchAppConfigurations",
          value: function fetchAppConfigurations(payload) {
            var GET_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/Mappings";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            var filter = JSON.stringify(payload.filter);
            console.log(filter);
            params = params.set('filter', filter);
            this.headers = this.authService.refreshHeaders();
            var reqOptions = {
              headers: this.headers,
              params: params
            };
            return this.http.get(GET_URL, reqOptions).toPromise().then(this.extractData)["catch"](this.handleErrorPromise);
          }
        }, {
          key: "saveAppConfig",
          value: function saveAppConfig(payload) {
            console.log("IN saveAppConfig: >> ", payload);
            var POST_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/Mappings";
            this.headers = this.authService.refreshHeaders();
            var reqOptions = {
              headers: this.headers
            };

            if (payload.id) {
              POST_URL = POST_URL + "/" + payload.id;
              return this.http.put(POST_URL, payload, reqOptions).toPromise().then(this.extractData)["catch"](this.handleErrorPromise);
            } else {
              return this.http.post(POST_URL, payload, reqOptions).toPromise().then(this.extractData)["catch"](this.handleErrorPromise);
            }
          }
        }, {
          key: "fetchSTTToken",
          value: function fetchSTTToken() {
            var GET_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL + "/Conversations/stt/token";
            this.headers = this.authService.refreshHeaders();
            var reqOptions = {
              headers: this.headers
            };
            return this.http.get(GET_URL, reqOptions).toPromise().then(this.extractData)["catch"](this.handleErrorPromise);
          }
        }, {
          key: "extractData",
          value: function extractData(res) {
            var body = res;
            return body;
          }
        }, {
          key: "handleErrorPromise",
          value: function handleErrorPromise(error) {
            console.error(error || error.message);
            return Promise.reject(error || error.message);
          }
        }]);

        return BackendService;
      }();

      _BackendService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.MyAuthService
        }];
      };

      _BackendService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _BackendService);
      /***/
    },

    /***/
    64917: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassificationService": function ClassificationService() {
          return (
            /* binding */
            _ClassificationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @tensorflow/tfjs */
      18733);
      /* harmony import */


      var _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @tensorflow-models/universal-sentence-encoder */
      19718); // import * as data from '../../assets/model/custom_nlc_tf2/word_index.json';


      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.ENV.set('WEBGL_PACK', false);

      var _ClassificationService = /*#__PURE__*/function () {
        function ClassificationService(http) {
          _classCallCheck(this, ClassificationService);

          this.http = http;
          this.PAD_INDEX = 0; // Index of the padding character.

          this.MODEL_PATH = '../../assets/model/custom_nlc_tf2/model.json';
          this.WORD_INDEX_PATH = '../../assets/model/word_index.json';
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'text/html; charset=utf-8'
          });
        }

        _createClass(ClassificationService, [{
          key: "loadUSE",
          value: function loadUSE() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(this.use == null)) {
                        _context11.next = 5;
                        break;
                      }

                      _context11.next = 3;
                      return _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_1__.load();

                    case 3:
                      this.use = _context11.sent;
                      console.log('universal-sentence-encoder LOADED SUCCESSFULLY ..... ');

                    case 5:
                      return _context11.abrupt("return", this.use);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "loadModel",
          value: function loadModel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(this.model == null)) {
                        _context12.next = 5;
                        break;
                      }

                      _context12.next = 3;
                      return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.loadLayersModel(this.MODEL_PATH);

                    case 3:
                      this.model = _context12.sent;
                      console.log('Tensorflow MODEL LOADED SUCCESSFULLY ..... ');

                    case 5:
                      return _context12.abrupt("return", this.model);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getTokenisedWord",
          value: function getTokenisedWord(seedWords) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var data, tokenizedArr, i, _token;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this.WORD_INDEX) {
                        _context13.next = 5;
                        break;
                      }

                      _context13.next = 3;
                      return this.http.get(this.WORD_INDEX_PATH, {
                        responseType: 'json'
                      }).toPromise().then(function (res) {
                        return res;
                      })["catch"](this.handleErrorPromise);

                    case 3:
                      data = _context13.sent;
                      // console.log('WORD_INDEX Data: >>> ', data);
                      // this.WORD_INDEX  = (data  as  any).default;
                      this.WORD_INDEX = data;

                    case 5:
                      tokenizedArr = [];

                      for (i = 0; i < seedWords.length; i++) {
                        _token = this.WORD_INDEX[seedWords[i].toLowerCase()];

                        if (_token === undefined) {
                          tokenizedArr.push(1);
                        } else {
                          tokenizedArr.push(_token);
                        }
                      }

                      return _context13.abrupt("return", tokenizedArr);

                    case 8:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "tokenizeSentence",
          value: function tokenizeSentence(inputText) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      // console.log('In tokenizeSentence, inputText: >> ', inputText);
                      inputText = inputText.split(/\b/).map(function (t) {
                        return t.trim().toLowerCase().replace(/(\.|\,|\!|\-)/g, '');
                      }).filter(function (t) {
                        return t.length !== 0;
                      }); // inputText = inputText.split(/\b/).map(t => t.trim().toLowerCase().replace(^0-9a-z #+_)/g, '')).filter(t => t.length !== 0);

                      return _context14.abrupt("return", inputText);

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
          }
        }, {
          key: "padSequences",
          value: function padSequences(sequences, maxLen) {
            var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pre';
            var truncating = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'pre';
            var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.PAD_INDEX;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", sequences.map(function (seq) {
                        // Perform truncation.
                        if (seq.length > maxLen) {
                          if (truncating === 'pre') {
                            seq.splice(0, seq.length - maxLen);
                          } else {
                            seq.splice(maxLen, seq.length - maxLen);
                          }
                        } // Perform padding.


                        // Perform padding.
                        if (seq.length < maxLen) {
                          var pad = [];

                          for (var i = 0; i < maxLen - seq.length; ++i) {
                            pad.push(value);
                          }

                          if (padding === 'pre') {
                            seq = seq.concat(pad);
                          } else {
                            seq = pad.concat(seq);
                          }
                        }

                        return seq;
                      }));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));
          }
        }, {
          key: "predictSkill",
          value: function predictSkill(inputText) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var sentence, seedWordToken, undefinedCount, _iterator6, _step6, token, paddedSequences, input;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!(!inputText || inputText === '' || !this.model)) {
                        _context16.next = 2;
                        break;
                      }

                      return _context16.abrupt("return", Promise.resolve('None'));

                    case 2:
                      _context16.next = 4;
                      return this.tokenizeSentence(inputText);

                    case 4:
                      sentence = _context16.sent;
                      console.log('Tokenized Sentence: ', sentence);
                      _context16.next = 8;
                      return this.getTokenisedWord(sentence);

                    case 8:
                      seedWordToken = _context16.sent;
                      // console.log('seedWordToken.length: >> >', seedWordToken.length);
                      console.log('seedWordToken: >> >', seedWordToken);
                      undefinedCount = 0;
                      _iterator6 = _createForOfIteratorHelper(seedWordToken);

                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          token = _step6.value;

                          if (token === 1) {
                            undefinedCount = undefinedCount + 1;
                          }
                        } // console.log('undefinedCount: >> ', undefinedCount);

                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }

                      if (!(undefinedCount > 15)) {
                        _context16.next = 15;
                        break;
                      }

                      return _context16.abrupt("return", 'UNKNOWN');

                    case 15:
                      _context16.next = 17;
                      return this.padSequences([seedWordToken], 200);

                    case 17:
                      paddedSequences = _context16.sent;
                      console.log('paddedSequences: >> ', paddedSequences); // let tensor = tf.tensor(inputText);
                      // tensor = tensor.expandDims(0);
                      // tf.tidy(() => {

                      input = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.tensor2d(paddedSequences, [1, 200]);
                      return _context16.abrupt("return", this.model.predict(input).data().then(function (predictions) {
                        var maxIndex = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__.argMax(predictions).dataSync()[0]; // const labels = ['Common', 'Covid19', 'HomeAutomation']


                        // const labels = ['Common', 'Covid19', 'HomeAutomation']
                        var labels = ['COMMON', '0bb0ace2-e073-4a74-bf81-813148b3cbf9', 'fd0ac5f5-d10c-4214-8673-b0777cce5dbf'];
                        var result = {
                          'assistantId': labels[maxIndex],
                          'confidence': predictions[maxIndex]
                        };
                        return result; // return {'maxIndex': maxIndex, 'predictions': predictions};
                        // predictions.dispose();
                      })["catch"](this.handleErrorPromise));

                    case 21:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "predictLanguage",
          value: function predictLanguage(payload) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var POST_URL;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!(!payload || !payload.message || payload.message === '')) {
                        _context17.next = 2;
                        break;
                      }

                      return _context17.abrupt("return", Promise.resolve('None'));

                    case 2:
                      console.log('IN predictLanguage, payload: >>>', payload);
                      POST_URL = '//lang-detect.mybluemix.net/detect';

                      if (!(!payload || !payload.message || payload.message.trim() === '')) {
                        _context17.next = 8;
                        break;
                      }

                      return _context17.abrupt("return", Promise.reject('INVALID DATA'));

                    case 8:
                      return _context17.abrupt("return", this.http.post(POST_URL, payload, {
                        responseType: 'text'
                      }).toPromise().then(function (res) {
                        console.log('response: >> ', res);
                        return res;
                      })["catch"](this.handleErrorPromise));

                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "extractData",
          value: function extractData(res) {
            console.log('response: >> ', res); // let body = res.json();

            return res;
          }
        }, {
          key: "handleErrorPromise",
          value: function handleErrorPromise(error) {
            console.error(error || error.message);
            return Promise.reject(error || error.message);
          }
        }]);

        return ClassificationService;
      }();

      _ClassificationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _ClassificationService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _ClassificationService);
      /***/
    },

    /***/
    69082: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SharedService = /*#__PURE__*/function () {
        function SharedService() {
          _classCallCheck(this, SharedService);

          this.sessionData = {};
        }

        _createClass(SharedService, [{
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            console.log('IN setCurrentUser: >> ', user);
            this.currentUser = user;
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.currentUser;
          }
        }]);

        return SharedService;
      }();

      _SharedService.ctorParameters = function () {
        return [];
      };

      _SharedService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _SharedService);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false,
        deployment: 'local',
        debug: window['env']['DEBUG'] || true,
        APP_CONFIG_KEY: window['env']['APP_CONFIG_KEY'] || 'APP_CONFIG',
        API_BASE_URL: window['env']['API_BASE_URL'] || 'http://localhost:3000/api',
        socket: {
          baseUrl: window['env']['IO_BASE_URL'] || 'http://localhost:3000',
          options: {
            forceNew: false
          }
        }
      };
      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
      /*
      platformBrowserDynamic().bootstrapModule(AppModule, {
          ngZone: 'noop'
      });
      */

      /***/
    },

    /***/
    46700: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 26431,
        "./af.js": 26431,
        "./ar": 81286,
        "./ar-dz": 1616,
        "./ar-dz.js": 1616,
        "./ar-kw": 9759,
        "./ar-kw.js": 9759,
        "./ar-ly": 43160,
        "./ar-ly.js": 43160,
        "./ar-ma": 62551,
        "./ar-ma.js": 62551,
        "./ar-sa": 79989,
        "./ar-sa.js": 79989,
        "./ar-tn": 6962,
        "./ar-tn.js": 6962,
        "./ar.js": 81286,
        "./az": 15887,
        "./az.js": 15887,
        "./be": 14572,
        "./be.js": 14572,
        "./bg": 3276,
        "./bg.js": 3276,
        "./bm": 93344,
        "./bm.js": 93344,
        "./bn": 58985,
        "./bn-bd": 83990,
        "./bn-bd.js": 83990,
        "./bn.js": 58985,
        "./bo": 94391,
        "./bo.js": 94391,
        "./br": 46728,
        "./br.js": 46728,
        "./bs": 5536,
        "./bs.js": 5536,
        "./ca": 41043,
        "./ca.js": 41043,
        "./cs": 69350,
        "./cs.js": 69350,
        "./cv": 33513,
        "./cv.js": 33513,
        "./cy": 6771,
        "./cy.js": 6771,
        "./da": 47978,
        "./da.js": 47978,
        "./de": 46061,
        "./de-at": 25204,
        "./de-at.js": 25204,
        "./de-ch": 2653,
        "./de-ch.js": 2653,
        "./de.js": 46061,
        "./dv": 85,
        "./dv.js": 85,
        "./el": 8579,
        "./el.js": 8579,
        "./en-au": 25724,
        "./en-au.js": 25724,
        "./en-ca": 10525,
        "./en-ca.js": 10525,
        "./en-gb": 52847,
        "./en-gb.js": 52847,
        "./en-ie": 67216,
        "./en-ie.js": 67216,
        "./en-il": 39305,
        "./en-il.js": 39305,
        "./en-in": 73364,
        "./en-in.js": 73364,
        "./en-nz": 79130,
        "./en-nz.js": 79130,
        "./en-sg": 11161,
        "./en-sg.js": 11161,
        "./eo": 64446,
        "./eo.js": 64446,
        "./es": 40328,
        "./es-do": 45551,
        "./es-do.js": 45551,
        "./es-mx": 75615,
        "./es-mx.js": 75615,
        "./es-us": 64790,
        "./es-us.js": 64790,
        "./es.js": 40328,
        "./et": 96389,
        "./et.js": 96389,
        "./eu": 52961,
        "./eu.js": 52961,
        "./fa": 26151,
        "./fa.js": 26151,
        "./fi": 7997,
        "./fi.js": 7997,
        "./fil": 58898,
        "./fil.js": 58898,
        "./fo": 37779,
        "./fo.js": 37779,
        "./fr": 28174,
        "./fr-ca": 3287,
        "./fr-ca.js": 3287,
        "./fr-ch": 38867,
        "./fr-ch.js": 38867,
        "./fr.js": 28174,
        "./fy": 50452,
        "./fy.js": 50452,
        "./ga": 45014,
        "./ga.js": 45014,
        "./gd": 74127,
        "./gd.js": 74127,
        "./gl": 72124,
        "./gl.js": 72124,
        "./gom-deva": 6444,
        "./gom-deva.js": 6444,
        "./gom-latn": 37953,
        "./gom-latn.js": 37953,
        "./gu": 76604,
        "./gu.js": 76604,
        "./he": 1222,
        "./he.js": 1222,
        "./hi": 74235,
        "./hi.js": 74235,
        "./hr": 622,
        "./hr.js": 622,
        "./hu": 37735,
        "./hu.js": 37735,
        "./hy-am": 90402,
        "./hy-am.js": 90402,
        "./id": 59187,
        "./id.js": 59187,
        "./is": 30536,
        "./is.js": 30536,
        "./it": 35007,
        "./it-ch": 94667,
        "./it-ch.js": 94667,
        "./it.js": 35007,
        "./ja": 62093,
        "./ja.js": 62093,
        "./jv": 80059,
        "./jv.js": 80059,
        "./ka": 66870,
        "./ka.js": 66870,
        "./kk": 80880,
        "./kk.js": 80880,
        "./km": 1083,
        "./km.js": 1083,
        "./kn": 68785,
        "./kn.js": 68785,
        "./ko": 21721,
        "./ko.js": 21721,
        "./ku": 37851,
        "./ku.js": 37851,
        "./ky": 1727,
        "./ky.js": 1727,
        "./lb": 40346,
        "./lb.js": 40346,
        "./lo": 93002,
        "./lo.js": 93002,
        "./lt": 64035,
        "./lt.js": 64035,
        "./lv": 56927,
        "./lv.js": 56927,
        "./me": 5634,
        "./me.js": 5634,
        "./mi": 94173,
        "./mi.js": 94173,
        "./mk": 86320,
        "./mk.js": 86320,
        "./ml": 11705,
        "./ml.js": 11705,
        "./mn": 31062,
        "./mn.js": 31062,
        "./mr": 92805,
        "./mr.js": 92805,
        "./ms": 11341,
        "./ms-my": 59900,
        "./ms-my.js": 59900,
        "./ms.js": 11341,
        "./mt": 37734,
        "./mt.js": 37734,
        "./my": 19034,
        "./my.js": 19034,
        "./nb": 9324,
        "./nb.js": 9324,
        "./ne": 46495,
        "./ne.js": 46495,
        "./nl": 70673,
        "./nl-be": 76272,
        "./nl-be.js": 76272,
        "./nl.js": 70673,
        "./nn": 72486,
        "./nn.js": 72486,
        "./oc-lnc": 46219,
        "./oc-lnc.js": 46219,
        "./pa-in": 2829,
        "./pa-in.js": 2829,
        "./pl": 78444,
        "./pl.js": 78444,
        "./pt": 53170,
        "./pt-br": 66117,
        "./pt-br.js": 66117,
        "./pt.js": 53170,
        "./ro": 96587,
        "./ro.js": 96587,
        "./ru": 39264,
        "./ru.js": 39264,
        "./sd": 42135,
        "./sd.js": 42135,
        "./se": 95366,
        "./se.js": 95366,
        "./si": 93379,
        "./si.js": 93379,
        "./sk": 46143,
        "./sk.js": 46143,
        "./sl": 196,
        "./sl.js": 196,
        "./sq": 21082,
        "./sq.js": 21082,
        "./sr": 91621,
        "./sr-cyrl": 98963,
        "./sr-cyrl.js": 98963,
        "./sr.js": 91621,
        "./ss": 41404,
        "./ss.js": 41404,
        "./sv": 55685,
        "./sv.js": 55685,
        "./sw": 3872,
        "./sw.js": 3872,
        "./ta": 54106,
        "./ta.js": 54106,
        "./te": 39204,
        "./te.js": 39204,
        "./tet": 83692,
        "./tet.js": 83692,
        "./tg": 86361,
        "./tg.js": 86361,
        "./th": 31735,
        "./th.js": 31735,
        "./tk": 1568,
        "./tk.js": 1568,
        "./tl-ph": 96129,
        "./tl-ph.js": 96129,
        "./tlh": 13759,
        "./tlh.js": 13759,
        "./tr": 81644,
        "./tr.js": 81644,
        "./tzl": 90875,
        "./tzl.js": 90875,
        "./tzm": 16878,
        "./tzm-latn": 11041,
        "./tzm-latn.js": 11041,
        "./tzm.js": 16878,
        "./ug-cn": 74357,
        "./ug-cn.js": 74357,
        "./uk": 74810,
        "./uk.js": 74810,
        "./ur": 96544,
        "./ur.js": 96544,
        "./uz": 28966,
        "./uz-latn": 77959,
        "./uz-latn.js": 77959,
        "./uz.js": 28966,
        "./vi": 35386,
        "./vi.js": 35386,
        "./x-pseudo": 23156,
        "./x-pseudo.js": 23156,
        "./yo": 68028,
        "./yo.js": 68028,
        "./zh-cn": 9330,
        "./zh-cn.js": 9330,
        "./zh-hk": 89380,
        "./zh-hk.js": 89380,
        "./zh-mo": 60874,
        "./zh-mo.js": 60874,
        "./zh-tw": 96508,
        "./zh-tw.js": 96508
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    },

    /***/
    61249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\na {\n  color: #fff\n}\n\n.footer a {\n  color: #000\n}\n\n.navbar-nav .dropdown {\n  padding-right: 20px\n}\n\n.navbar.navbar-transparent{\n  padding-top: 2px;\n}\n\n.navbar .navbar-brand {\n    padding: 1px;\n}\n\n.logo-container .brand{\n  padding-top: 10px;\n}\n\n.dropdown-menu{\n  min-width: 13rem;\n}\n\n.alert {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    -webkit-animation: 2s alertAnim forwards;\n            animation: 2s alertAnim forwards;\n}\n\n.register-text{\n  padding: 3px !important;\n}\n\n.login-btn{\n  padding: 1px !important;\n}\n\n.modal{\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.overlay-content {\n  height: 100%;\n  overflow: scroll;\n}\n\n.input-group {\n    padding-bottom: 7px;\n    margin: 27px 0 0 0 !important;\n}\n\n@-webkit-keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        transform: translateY(0);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxTQUFTO1FBQ1Qsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBVEE7SUFDSTtRQUNJLFNBQVM7UUFDVCw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFNBQVM7UUFDVCx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYSB7XG4gIGNvbG9yOiAjZmZmXG59XG5cbi5mb290ZXIgYSB7XG4gIGNvbG9yOiAjMDAwXG59XG5cbi5uYXZiYXItbmF2IC5kcm9wZG93biB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cblxuLm5hdmJhci5uYXZiYXItdHJhbnNwYXJlbnR7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMXB4O1xufVxuXG4ubG9nby1jb250YWluZXIgLmJyYW5ke1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmRyb3Bkb3duLW1lbnV7XG4gIG1pbi13aWR0aDogMTNyZW07XG59XG5cbi5hbGVydCB7XG4gICAgYmFja2dyb3VuZDogI2YyZWRkYTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFuaW1hdGlvbjogMnMgYWxlcnRBbmltIGZvcndhcmRzO1xufVxuXG4ucmVnaXN0ZXItdGV4dHtcbiAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1idG57XG4gIHBhZGRpbmc6IDFweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWx7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLm92ZXJsYXktY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgIG1hcmdpbjogMjdweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbSB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    71183: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n#page_header{\n  background-image: url(\"/assets/images/bg2.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #000000;\n  min-height: 430px;\n  /* height: 400px; */\n}\n\n.profile-page .brand {\n    text-align: center;\n    padding-top: 15px;\n}\n\n#page_header .brand h1 {\n    text-align: center;\n    font-size: 4.8em;\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 55px */\n}\n\n#page_header .brand h2 {\n    text-align: center;\n    font-size: 1.4em;\n    font-weight: 200;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 65px; */\n    margin-top: 1px;\n}\n\n#page_header .profile-tabs {\n    margin-top: 30px !important;\n}\n\n.media .media-body{\n  padding-top: 20px;\n}\n\n.profile .title{\n  margin-bottom: 1px;\n}\n\n.chat-container{\n  min-height: 200px;\n}\n\n.chat-input{\n  margin-top: 10px;\n}\n\n.chat-row{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.dialog-panel{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.info .icon, .media p {\n    color: #244b73 !important;\n}\n\n.medium-padding{\n  padding: 5px\n}\n\n.no-margin{\n  margin: 1px\n}\n\n.no-padding{\n  padding: 1px\n}\n\n.send-btn-container {\n  /*height: 130px;*/\n  height: auto\n}\n\n.send-btn {\n  margin-top: 20px\n}\n\n.chatDiv{\n    max-width: 800px;\n}\n\n.result {\n    background-color: #f2f2f2;\n    padding: 1rem;\n    width: 100%;\n    border: 1px solid #562f72;\n}\n\n.result-title {\n    color: #562f72;\n    font-weight: bold;\n}\n\n.result-preview {\n    color: #562f72;\n}\n\n.result-link {\n    color: #ba8ff7;\n}\n\n#reqRespModal .modal-dialog{\n  min-width: 600px;\n}\n\n.footer-feedback{\n  margin-right: 150px;\n}\n\n.btn-feedback {\n  padding: 2px 10px;\n\n}\n\n.space-15 {\n height:15px;\n display:block\n}\n\n.space-20 {\n height:20px;\n display:block\n}\n\n.space-top{\n  padding-top: 10px;\n}\n\n.space-bottom{\n  padding-bottom: 15px;\n}\n\npre span {white-space: normal;}\n\n.string { color: green; }\n\n.number { color: darkorange; }\n\n.boolean { color: blue; }\n\n.null { color: magenta; }\n\n.key { color: red; }\n\n.media .watson{\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBR0E7Q0FDQyxXQUFXO0NBQ1g7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLFVBQVUsbUJBQW1CLENBQUM7O0FBQzNCLFVBQVUsWUFBWSxFQUFFOztBQUN4QixVQUFVLGlCQUFpQixFQUFFOztBQUM3QixXQUFXLFdBQVcsRUFBRTs7QUFDeEIsUUFBUSxjQUFjLEVBQUU7O0FBQ3hCLE9BQU8sVUFBVSxFQUFFOztBQUV0QjtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJhbmFseXRpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3BhZ2VfaGVhZGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG1pbi1oZWlnaHQ6IDQzMHB4O1xuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xufVxuXG4ucHJvZmlsZS1wYWdlIC5icmFuZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4jcGFnZV9oZWFkZXIgLmJyYW5kIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0LjhlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA1NXB4ICovXG59XG5cbiNwYWdlX2hlYWRlciAuYnJhbmQgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDY1cHg7ICovXG4gICAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4jcGFnZV9oZWFkZXIgLnByb2ZpbGUtdGFicyB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4ubWVkaWEgLm1lZGlhLWJvZHl7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucHJvZmlsZSAudGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmNoYXQtY29udGFpbmVye1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmNoYXQtaW5wdXR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jaGF0LXJvd3tcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uZGlhbG9nLXBhbmVse1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pbmZvIC5pY29uLCAubWVkaWEgcCB7XG4gICAgY29sb3I6ICMyNDRiNzMgIWltcG9ydGFudDtcbn1cblxuLm1lZGl1bS1wYWRkaW5ne1xuICBwYWRkaW5nOiA1cHhcbn1cblxuLm5vLW1hcmdpbntcbiAgbWFyZ2luOiAxcHhcbn1cblxuLm5vLXBhZGRpbmd7XG4gIHBhZGRpbmc6IDFweFxufVxuXG4uc2VuZC1idG4tY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDEzMHB4OyovXG4gIGhlaWdodDogYXV0b1xufVxuXG4uc2VuZC1idG4ge1xuICBtYXJnaW4tdG9wOiAyMHB4XG59XG5cbi5jaGF0RGl2e1xuICAgIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5yZXN1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTYyZjcyO1xufVxuXG4ucmVzdWx0LXRpdGxlIHtcbiAgICBjb2xvcjogIzU2MmY3MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlc3VsdC1wcmV2aWV3IHtcbiAgICBjb2xvcjogIzU2MmY3Mjtcbn1cblxuLnJlc3VsdC1saW5rIHtcbiAgICBjb2xvcjogI2JhOGZmNztcbn1cblxuI3JlcVJlc3BNb2RhbCAubW9kYWwtZGlhbG9ne1xuICBtaW4td2lkdGg6IDYwMHB4O1xufVxuXG4uZm9vdGVyLWZlZWRiYWNre1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xufVxuXG4uYnRuLWZlZWRiYWNrIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG5cbn1cblxuXG4uc3BhY2UtMTUge1xuIGhlaWdodDoxNXB4O1xuIGRpc3BsYXk6YmxvY2tcbn1cblxuLnNwYWNlLTIwIHtcbiBoZWlnaHQ6MjBweDtcbiBkaXNwbGF5OmJsb2NrXG59XG5cbi5zcGFjZS10b3B7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3BhY2UtYm90dG9te1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxucHJlIHNwYW4ge3doaXRlLXNwYWNlOiBub3JtYWw7fVxuICAgLnN0cmluZyB7IGNvbG9yOiBncmVlbjsgfVxuICAgLm51bWJlciB7IGNvbG9yOiBkYXJrb3JhbmdlOyB9XG4gICAuYm9vbGVhbiB7IGNvbG9yOiBibHVlOyB9XG4gICAubnVsbCB7IGNvbG9yOiBtYWdlbnRhOyB9XG4gICAua2V5IHsgY29sb3I6IHJlZDsgfVxuXG4ubWVkaWEgLndhdHNvbntcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    85149: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n#page_header{\n  background-image: url(\"/assets/images/analytics3.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #000000;\n  min-height: 430px;\n  /* height: 400px; */\n}\n\n.profile-page .brand {\n    text-align: center;\n    padding-top: 15px;\n}\n\n#page_header .brand h1 {\n    text-align: center;\n    font-size: 4.8em;\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 55px */\n}\n\n#page_header .brand h2 {\n    text-align: center;\n    font-size: 1.4em;\n    font-weight: 200;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 65px; */\n    margin-top: 1px;\n}\n\n#page_header .profile-tabs {\n    margin-top: 30px !important;\n}\n\n.space-20 {\n   height:20px;\n   display:block;\n   margin-top: 20px;\n   padding-top: 20px;\n}\n\n.profile .title{\n  margin-bottom: 1px;\n}\n\n.chat-container{\n  min-height: 200px;\n}\n\n.chat-row{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.dialog-panel{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.info .icon, .media p {\n    color: #244b73 !important;\n}\n\n.medium-padding{\n  padding: 5px\n}\n\n.no-margin{\n  margin: 1px\n}\n\n.no-padding{\n  padding: 1px\n}\n\n.send-btn-container {\n  /*height: 130px;*/\n  height: auto\n}\n\n.send-btn {\n  margin-top: 20px\n}\n\n.chatDiv{\n    max-width: 800px;\n}\n\n.result {\n    background-color: #f2f2f2;\n    padding: 1rem;\n    width: 100%;\n    border: 1px solid #562f72;\n}\n\n.result-title {\n    color: #562f72;\n    font-weight: bold;\n}\n\n.result-preview {\n    color: #562f72;\n}\n\n.result-link {\n    color: #ba8ff7;\n}\n\n#reqRespModal .modal-dialog{\n  min-width: 600px;\n}\n\n.footer-feedback{\n  margin-right: 150px;\n}\n\n.btn-feedback {\n  padding: 2px 10px;\n\n}\n\npre span {white-space: normal;}\n\n.string { color: green; }\n\n.number { color: darkorange; }\n\n.boolean { color: blue; }\n\n.null { color: magenta; }\n\n.key { color: red; }\n\n.media .watson{\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQSxVQUFVLG1CQUFtQixDQUFDOztBQUMzQixVQUFVLFlBQVksRUFBRTs7QUFDeEIsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsV0FBVyxXQUFXLEVBQUU7O0FBQ3hCLFFBQVEsY0FBYyxFQUFFOztBQUN4QixPQUFPLFVBQVUsRUFBRTs7QUFFdEI7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3BhZ2VfaGVhZGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hbmFseXRpY3MzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBtaW4taGVpZ2h0OiA0MzBweDtcbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbn1cblxuLnByb2ZpbGUtcGFnZSAuYnJhbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuI3BhZ2VfaGVhZGVyIC5icmFuZCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHBhZGRpbmctbGVmdDogNTVweCAqL1xufVxuXG4jcGFnZV9oZWFkZXIgLmJyYW5kIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA2NXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDFweDtcbn1cblxuI3BhZ2VfaGVhZGVyIC5wcm9maWxlLXRhYnMge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLnNwYWNlLTIwIHtcbiAgIGhlaWdodDoyMHB4O1xuICAgZGlzcGxheTpibG9jaztcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnByb2ZpbGUgLnRpdGxle1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5jaGF0LWNvbnRhaW5lcntcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jaGF0LXJvd3tcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uZGlhbG9nLXBhbmVse1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pbmZvIC5pY29uLCAubWVkaWEgcCB7XG4gICAgY29sb3I6ICMyNDRiNzMgIWltcG9ydGFudDtcbn1cblxuLm1lZGl1bS1wYWRkaW5ne1xuICBwYWRkaW5nOiA1cHhcbn1cblxuLm5vLW1hcmdpbntcbiAgbWFyZ2luOiAxcHhcbn1cblxuLm5vLXBhZGRpbmd7XG4gIHBhZGRpbmc6IDFweFxufVxuXG4uc2VuZC1idG4tY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDEzMHB4OyovXG4gIGhlaWdodDogYXV0b1xufVxuXG4uc2VuZC1idG4ge1xuICBtYXJnaW4tdG9wOiAyMHB4XG59XG5cbi5jaGF0RGl2e1xuICAgIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5yZXN1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTYyZjcyO1xufVxuXG4ucmVzdWx0LXRpdGxlIHtcbiAgICBjb2xvcjogIzU2MmY3MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlc3VsdC1wcmV2aWV3IHtcbiAgICBjb2xvcjogIzU2MmY3Mjtcbn1cblxuLnJlc3VsdC1saW5rIHtcbiAgICBjb2xvcjogI2JhOGZmNztcbn1cblxuI3JlcVJlc3BNb2RhbCAubW9kYWwtZGlhbG9ne1xuICBtaW4td2lkdGg6IDYwMHB4O1xufVxuXG4uZm9vdGVyLWZlZWRiYWNre1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xufVxuXG4uYnRuLWZlZWRiYWNrIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG5cbn1cblxucHJlIHNwYW4ge3doaXRlLXNwYWNlOiBub3JtYWw7fVxuICAgLnN0cmluZyB7IGNvbG9yOiBncmVlbjsgfVxuICAgLm51bWJlciB7IGNvbG9yOiBkYXJrb3JhbmdlOyB9XG4gICAuYm9vbGVhbiB7IGNvbG9yOiBibHVlOyB9XG4gICAubnVsbCB7IGNvbG9yOiBtYWdlbnRhOyB9XG4gICAua2V5IHsgY29sb3I6IHJlZDsgfVxuXG4ubWVkaWEgLndhdHNvbntcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    17155: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n#page_header{\n  background-image: url(/assets/images/bg2.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #000000;\n  min-height: 430px;\n  /* height: 400px; */\n}\n\n.profile-page .brand {\n    text-align: center;\n    padding-top: 15px;\n}\n\n#page_header .brand h1 {\n    text-align: center;\n    font-size: 4.8em;\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 55px */\n}\n\n#page_header .brand h2 {\n    text-align: center;\n    font-size: 1.4em;\n    font-weight: 200;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 65px; */\n    margin-top: 1px;\n}\n\n#page_header .profile-tabs {\n    margin-top: 30px !important;\n}\n\n.section {\n  min-height: 500px;\n}\n\n.modal-title {\n  padding-top: 1px;\n  margin-top: 1px;\n}\n\n.img_fit {\n  width: 80%;\n}\n\n.media .media-body{\n  padding-top: 20px;\n}\n\n.profile .title{\n  margin-bottom: 1px;\n}\n\n.chat-container{\n  min-height: 200px;\n}\n\n.chat-input{\n  margin-top: 10px;\n}\n\n.chat-row{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.dialog-panel{\n  min-height: 200px;\n  overflow: visible;\n}\n\n.info .icon, .media p {\n    color: #244b73 !important;\n}\n\n.medium-padding{\n  padding: 5px\n}\n\n.no-margin{\n  margin: 1px\n}\n\n.no-padding{\n  padding: 1px\n}\n\n.send-btn-container {\n  /*height: 130px;*/\n  height: auto\n}\n\n.send-btn {\n  margin-top: 20px\n}\n\n.chatDiv{\n    max-width: 800px;\n}\n\n.result {\n    background-color: #f2f2f2;\n    padding: 1rem;\n    width: 100%;\n    border: 1px solid #562f72;\n}\n\n.result-title {\n    color: #562f72;\n    font-weight: bold;\n}\n\n.result-preview {\n    color: #562f72;\n}\n\n.result-link {\n    color: #ba8ff7;\n}\n\n#reqRespModal .modal-dialog{\n  min-width: 600px;\n}\n\n.footer-feedback{\n  margin-right: 150px;\n}\n\n.btn-feedback {\n  padding: 2px 10px;\n\n}\n\n.space-15 {\n height:15px;\n display:block\n}\n\n.space-20 {\n height:20px;\n display:block\n}\n\n.space-top{\n  padding-top: 10px;\n}\n\n.space-bottom{\n  padding-bottom: 15px;\n}\n\npre span {white-space: normal;}\n\n.string { color: green; }\n\n.number { color: darkorange; }\n\n.boolean { color: blue; }\n\n.null { color: magenta; }\n\n.key { color: red; }\n\n.media .watson{\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw2Q0FBNkM7RUFDN0MsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBR0E7Q0FDQyxXQUFXO0NBQ1g7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLFVBQVUsbUJBQW1CLENBQUM7O0FBQzNCLFVBQVUsWUFBWSxFQUFFOztBQUN4QixVQUFVLGlCQUFpQixFQUFFOztBQUM3QixXQUFXLFdBQVcsRUFBRTs7QUFDeEIsUUFBUSxjQUFjLEVBQUU7O0FBQ3hCLE9BQU8sVUFBVSxFQUFFOztBQUV0QjtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNwYWdlX2hlYWRlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JnMi5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG1pbi1oZWlnaHQ6IDQzMHB4O1xuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xufVxuXG4ucHJvZmlsZS1wYWdlIC5icmFuZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4jcGFnZV9oZWFkZXIgLmJyYW5kIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0LjhlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA1NXB4ICovXG59XG5cbiNwYWdlX2hlYWRlciAuYnJhbmQgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDY1cHg7ICovXG4gICAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4jcGFnZV9oZWFkZXIgLnByb2ZpbGUtdGFicyB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5pbWdfZml0IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1lZGlhIC5tZWRpYS1ib2R5e1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnByb2ZpbGUgLnRpdGxle1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5jaGF0LWNvbnRhaW5lcntcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jaGF0LWlucHV0e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2hhdC1yb3d7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmRpYWxvZy1wYW5lbHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaW5mbyAuaWNvbiwgLm1lZGlhIHAge1xuICAgIGNvbG9yOiAjMjQ0YjczICFpbXBvcnRhbnQ7XG59XG5cbi5tZWRpdW0tcGFkZGluZ3tcbiAgcGFkZGluZzogNXB4XG59XG5cbi5uby1tYXJnaW57XG4gIG1hcmdpbjogMXB4XG59XG5cbi5uby1wYWRkaW5ne1xuICBwYWRkaW5nOiAxcHhcbn1cblxuLnNlbmQtYnRuLWNvbnRhaW5lciB7XG4gIC8qaGVpZ2h0OiAxMzBweDsqL1xuICBoZWlnaHQ6IGF1dG9cbn1cblxuLnNlbmQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweFxufVxuXG4uY2hhdERpdntcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4ucmVzdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU2MmY3Mjtcbn1cblxuLnJlc3VsdC10aXRsZSB7XG4gICAgY29sb3I6ICM1NjJmNzI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXN1bHQtcHJldmlldyB7XG4gICAgY29sb3I6ICM1NjJmNzI7XG59XG5cbi5yZXN1bHQtbGluayB7XG4gICAgY29sb3I6ICNiYThmZjc7XG59XG5cbiNyZXFSZXNwTW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLmZvb3Rlci1mZWVkYmFja3tcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbn1cblxuLmJ0bi1mZWVkYmFjayB7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuXG59XG5cblxuLnNwYWNlLTE1IHtcbiBoZWlnaHQ6MTVweDtcbiBkaXNwbGF5OmJsb2NrXG59XG5cbi5zcGFjZS0yMCB7XG4gaGVpZ2h0OjIwcHg7XG4gZGlzcGxheTpibG9ja1xufVxuXG4uc3BhY2UtdG9we1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNwYWNlLWJvdHRvbXtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbnByZSBzcGFuIHt3aGl0ZS1zcGFjZTogbm9ybWFsO31cbiAgIC5zdHJpbmcgeyBjb2xvcjogZ3JlZW47IH1cbiAgIC5udW1iZXIgeyBjb2xvcjogZGFya29yYW5nZTsgfVxuICAgLmJvb2xlYW4geyBjb2xvcjogYmx1ZTsgfVxuICAgLm51bGwgeyBjb2xvcjogbWFnZW50YTsgfVxuICAgLmtleSB7IGNvbG9yOiByZWQ7IH1cblxuLm1lZGlhIC53YXRzb257XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    6157: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n#page_header{\n  background-image: url(/assets/images/bg5.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #000000;\n  min-height: 430px;\n  /* height: 400px; */\n}\n\n.profile-page .brand {\n    text-align: center;\n    padding-top: 15px;\n}\n\n#page_header .brand h1 {\n    text-align: center;\n    font-size: 4.8em;\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 55px */\n}\n\n#page_header .brand h2 {\n    text-align: center;\n    font-size: 1.4em;\n    font-weight: 200;\n    display: inline-block;\n    position: relative;\n    /* padding-left: 65px; */\n    margin-top: 1px;\n}\n\n#page_header .profile-tabs {\n    margin-top: 30px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNkNBQTZDO0VBQzdDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJ0aGVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jcGFnZV9oZWFkZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iZzUuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBtaW4taGVpZ2h0OiA0MzBweDtcbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbn1cblxuLnByb2ZpbGUtcGFnZSAuYnJhbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuI3BhZ2VfaGVhZGVyIC5icmFuZCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHBhZGRpbmctbGVmdDogNTVweCAqL1xufVxuXG4jcGFnZV9oZWFkZXIgLmJyYW5kIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA2NXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDFweDtcbn1cblxuI3BhZ2VfaGVhZGVyIC5wcm9maWxlLXRhYnMge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-color-on-scroll navbar-transparent bg-primary fixed-top navbar-expand-lg\" color-on-scroll=\"100\" id=\"sectionsNav\">\n\t<div class=\"container\">\n\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t\t\t\t<div class=\"logo-container\" *ngIf=\"showLogo\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"logo\">\n                      <img src=\"./assets/images/avatars/watson-avatar2.png\" alt=\"Home\" rel=\"tooltip\" title=\"IBM Watson\" data-placement=\"bottom\" data-html=\"true\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t\t\t\t\t\t\tIBM Watson\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t  </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n              <span class=\"navbar-toggler-icon\"></span>\n              <span class=\"navbar-toggler-icon\"></span>\n          </button>\n      </div>\n\n\t\t\t<div class=\"collapse navbar-collapse\" >\n\t    \t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t<li class=\"nav-item\" *ngIf=\"!currentUser || !currentUser.id\">\n\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">login</i> Login\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"currentUser && currentUser.username\" class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t {{currentUser.username}}\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li><a routerLink=\"/account\"> Account Settings</a></li>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"currentUser && currentUser.roles && currentUser.roles[0].name == 'admin'\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown-header\">Activities</li>\n\t\t\t\t\t\t\t\t\t\t<li><a routerLink=\"/theme\">Template</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a routerLink=\"secure/configurations\">Configurations</a></li>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" (click)=\"logout();\">Logout</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\" *ngIf=\"currentUser && currentUser.roles && currentUser.roles[0].name == 'admin'\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t Services\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://2322a3ac-13d9-4cfb-aee9-adce7ee8126a-bluemix.cloudant.com/dashboard.html#/_all_dbs\">CloudantDB</a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://watson-assistant.ng.bluemix.net/us-south/f00a3cc1-5d55-45d6-8f6b-c326dcab8aee/home\">Watson Assistant</a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://watson-discovery.bluemix.net/regions/us-south/services/a9dfc261-c0f6-4a68-853a-0215848e0098\">Watson Discovery</a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/services/Object-Storage/cc2840c0-0a4a-4e30-a58c-4fb16873bc12\">Object Storage</a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/devops/pipelines/78528142-404c-451b-9e0e-1f0d1c1d9c8a\">DevOps</a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://git.ng.bluemix.net/gurvsin3/my-watson-assistant\">GIT Repository</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t<i class=\"material-icons\">menu</i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"dropdown-header\">Documentation</li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.ibm.com/cloud/\"> IBM Cloud Platform </a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/catalog/?category=watson\"> IBM Watson Catalog </a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/docs/services/conversation/getting-started.html#getting-started-tutorial\"> Watson Assistant </a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/docs/services/discovery/index.html#about\"> Watson Discovery </a></li>\n\t\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://console.bluemix.net/docs/services/Cloudant/getting-started.html\"> Cloudant NoSQL DB </a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t    \t</ul>\n\t    </div>\n\t</div>\n</nav>\n<!-- End Navbar -->\n\n<!-- Login Modal -->\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-login\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"card card-signup card-plain\">\n\t\t\t\t  <div class=\"modal-header\">\n\t\t\t\t\t\t<div class=\"card-header card-header-primary text-center\">\n\t\t\t\t\t\t\t<button #closeBtn type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\n\t\t\t\t\t\t\t<div class=\"header header-primary text-center\">\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Log in</h4>\n\t\t\t\t\t\t\t\t<div class=\"social-line\">\n\t\t\t\t\t\t\t\t\t<a href=\"{{CONFIG.API_BASE_URL}}/MyUsers/authenticate?provider=google&redirectTo='/'\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"{{CONFIG.API_BASE_URL}}/MyUsers/authenticate?provider=facebook&redirectTo='/'\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"{{CONFIG.API_BASE_URL}}/MyUsers/authenticate?provider=linkedin&redirectTo='/'\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\n\t\t\t\t\t\t\t\t<form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"handleLogin(loginForm.value)\">\n\t\t\t\t\t\t\t\t\t<p class=\"description text-center\">Or Be Classical</p>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mail</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username/Email\" formControlName=\"username\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">lock_outline</i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"text-center login-btn\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary btn-simple btn-wd btn-lg\" value=\"Login\" [disabled]=\"!loginForm.valid\" >\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer text-center\">\n\t\t\t\t\tDon't have an account ? <a href=\"javascript:void(0);\" (click)=\"gotoRegister();\" class=\"\">Click here to Register</a>\n\t\t\t\t\t<!-- <input type=\"submit\" class=\"btn btn-primary btn-simple btn-wd btn-lg\" value=\"Login\" [disabled]=\"!loginForm.valid\"> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  End Modal -->\n\n\t<!-- <app-dashboard></app-dashboard> -->\n\t<!-- <app-home></app-home> -->\n\t<ng-progress [min]=\"0.15\" [max]=\"1\" [speed]=\"200\" [spinner]=\"true\" [direction]=\"'leftToRightIncreased'\"\n\t\t\t\t\t\t [color]=\"'#3d42e4'\" [trickleSpeed]=\"250\" [thick]=\"true\" [ease]=\"'linear'\">\n\t</ng-progress>\n\n\t<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n\t<div class=\"container\">\n\t\t\t<nav class=\"pull-left\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"/\">\n\t\t\t\t\t\t\t\tIBM - Watson Demo\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"copyright pull-right\">\n\t\t\t\t\t<a href=\"http://www.gurvinder.info\" target=\"_blank\"> &copy; 2020, By Gurvinder Singh</a>\n\t\t\t</div>\n\t</div>\n</footer>\n";
      /***/
    },

    /***/
    50384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"page_header\" class=\"page-header header-filter clear-filter\" data-parallax=\"true\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t<div class=\"brand text-center\">\n\t\t\t\t\t<h1>Analytics</h1>\n\t\t\t\t\t<!-- <h2>IBM Watson Conversation Demo</h2> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"main main-raised\">\n\n \t<div class=\"section section-comments\">\n\t\t<div class=\"container chat-container\" >\n      <div class=\"col-md-12 ml-auto mr-auto\" >\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n\n            <!-- <script src=\"https://gist.github.ibm.com/gurvsin3/bd7dffe0228689d8c1c96272b6b2d691.js\"></script> -->\n            <!-- <script src=\"https://gist.github.com/sinny777/e9a5fba8c6167e47bc37bc89d90ee5a0.js\"></script> -->\n\n            <script>\n              (function setupNbinteract() {\n                  // If NbInteract hasn't loaded, wait one second and try again\n                  if (window.NbInteract === undefined) {\n                  setTimeout(setupNbinteract, 1000)\n                  return\n                  }\n\n                  var interact = new window.NbInteract({\n                  spec: 'sinny777/e9a5fba8c6167e47bc37bc89d90ee5a0/master',\n                  baseUrl: 'https://mybinder.org',\n                  provider: 'gist',\n                  })\n                  interact.prepare()\n\n                  window.interact = interact\n              })()\n          </script>\n\n          </div>\n\n        </div>\n      </div>\n\n\n\t\t</div>\n\n\t</div>\n</div>\n\n";
      /***/
    },

    /***/
    60586: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n\t<div id=\"page_header\" class=\"page-header header-filter clear-filter\" data-parallax=\"true\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t<div class=\"brand text-center\">\n\t\t\t\t\t\t<h1>Application Configurations</h1>\n\t\t\t\t\t\t<!-- <h2>IBM Watson Conversation Demo</h2> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"main main-raised\">\n\n\t\t\t\t\t<div class=\"section section-comments\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<form class=\"form\"  method=\"\" action=\"\" *ngIf=\"appConfig\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 ml-auto mr-auto text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-pills-icons justify-content-center\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#assistantConf\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat</i> Assistant\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#discoveryConf\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">search</i> Discovery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#STTConf\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">record_voice_over</i> Speech\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content tab-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"assistantConf\">\n\n                                  <h3 class=\"text-center\">\n                                      <small>- Watson Assistant Details -</small>\n                                  </h3>\n                                  <div class=\"space-20\"></div>\n\n                                  <div class=\"row\" >\n                                    <div class=\"col-lg-10 ml-auto mr-auto text-center\">\n                                      <div class=\"row\" >\n                                        <div class=\"col-sm-4\">\n                                          <div class=\"form-group bmd-form-group\">\n                                            <h5>API Key</h5>\n                                          </div>\n                                        </div>\n                                        <div class=\"col-sm-6\">\n                                          <div class=\"form-group bmd-form-group\">\n                                            <input type=\"text\" class=\"form-control\"\t#assistantAPIKey=\"ngModel\" name=\"assistantAPIKey\" [(ngModel)]=\"appConfig.output.WATSON_ASSISTANT.API_KEY\" />\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"space-20\"></div>\n\n                                  <div class=\"row\" *ngIf=\"!showAddEditAssistant\">\n                                    <div class=\"col-md-12\">\n                                        <h4>Assistants in use</h4>\n                                        <!-- <button type=\"button\" (click)=\"addAssistant()\" rel=\"tooltip\" class=\"btn btn-success btn-just-icon btn-sm\">\n                                          <i class=\"material-icons\">edit</i>\n                                        </button> -->\n                                    </div>\n\n                                    <div class=\"table-responsive\">\n                                      <table class=\"table table-striped\">\n                                          <thead>\n                                            <tr>\n                                                <th class=\"text-center\">AssistantId</th>\n                                                <th>Name</th>\n                                                <th>IsDefault</th>\n                                                <th class=\"text-right\">Actions</th>\n                                            </tr>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let ASSISTANT of appConfig.output.WATSON_ASSISTANT.ASSISTANTS\">\n                                              <td class=\"text-center\">{{ASSISTANT.id}}</td>\n                                              <td>{{ASSISTANT.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" [disabled]=\"ASSISTANT.default\" [checked]=\"ASSISTANT.default\" (change)=\"makeAssistantDefaut(ASSISTANT)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n                                              </td>\n                                              <td class=\"td-actions text-right\">\n                                                <button type=\"button\" (click)=\"editAssistant(ASSISTANT)\" rel=\"tooltip\" class=\"btn btn-success btn-just-icon btn-sm\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </button>\n                                                <button type=\"button\" (click)=\"removeAssistant(ASSISTANT)\" rel=\"tooltip\" class=\"btn btn-danger btn-just-icon btn-sm\">\n                                                    <i class=\"material-icons\">close</i>\n                                                </button>\n                                              </td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"4\" class=\"text-right\">\n                                                    <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"addAssistant()\">Add Assistant</button>\n                                                </td>\n                                            </tr>\n                                          </tbody>\n                                      </table>\n                                    </div>\n\n                                  </div>\n\n                                  <div class=\"row\" *ngIf=\"showAddEditAssistant\">\n                                    <div class=\"col-md-12\">\n                                      <div class=\"row\">\n                                        <div class=\"col-md-10\">\n                                            <h4 *ngIf=\"selectedAssistant.id\">Edit Assistant</h4>\n                                            <h4 *ngIf=\"!selectedAssistant.id\">Add Assistant</h4>\n                                            <div class=\"form-group bmd-form-group\">\n                                              <label class=\"bmd-label-static\">Assistant Id</label>\n                                              <input type=\"text\" class=\"form-control\"\t#assistantId=\"ngModel\" name=\"assistantId\" [(ngModel)]=\"selectedAssistant.id\" />\n                                            </div>\n                                            <div class=\"form-group bmd-form-group\">\n                                              <label class=\"bmd-label-static\">Name</label>\n                                              <input type=\"text\" class=\"form-control\"\t#assistantName=\"ngModel\" name=\"assistantName\" [(ngModel)]=\"selectedAssistant.name\" />\n                                            </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"row\">\n                                        <div class=\"col-md-10 text-right\">\n                                          <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"saveAssistantDetails()\">Save</button>\n                                          <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"cancelSaveAssistant()\">Cancel</button>\n                                        </div>\n                                      </div>\n\n                                    </div>\n                                  </div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"discoveryConf\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>- Watson Discovery Details -</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"space-20\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 ml-auto mr-auto text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Enable Discovery &nbsp;&nbsp;&nbsp;</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-radio form-check-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" #ENABLE_DISCOVERY=\"ngModel\" name=\"ENABLE_DISCOVERY\" id=\"true\" [value]=\"true\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.ENABLE\" > True &nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" #ENABLE_DISCOVERY=\"ngModel\" name=\"ENABLE_DISCOVERY\" id=\"false\" [value]=\"false\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.ENABLE\" > False &nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"appConfig.output.WATSON_DISCOVERY.ENABLE\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"space-20\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group bmd-form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label class=\"bmd-label-static\">Discovery API Key</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"\t#discoveryAPIKey=\"ngModel\" name=\"discoveryAPIKey\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.API_KEY\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group bmd-form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label class=\"bmd-label-static\">Discovery EnvironmentId</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"\t#discoveryEnvId=\"ngModel\" name=\"discoveryEnvId\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.ENVIRONMENT_ID\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group bmd-form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label class=\"bmd-label-static\">Discovery ConfigurationId</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"\t#discoveryConfId=\"ngModel\" name=\"discoveryConfId\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.CONFIGURATION_ID\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group bmd-form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label class=\"bmd-label-static\">Discovery CollectionId</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"\t#discoveryCollectionId=\"ngModel\" name=\"discoveryCollectionId\" [(ngModel)]=\"appConfig.output.WATSON_DISCOVERY.COLLECTION_ID\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"STTConf\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>- Watson Speech To Text -</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"space-20\"></div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"form-group bmd-form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <label class=\"bmd-label-static\">STT API Key</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"\t#sttAPIKey=\"ngModel\" name=\"sttAPIKey\" [(ngModel)]=\"appConfig.output.WATSON_STT_API_KEY\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"space-20\"></div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 ml-auto mr-auto text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-round\" *ngIf=\"!appConfig.id\" (click)=\"saveAppConfig();\" >Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-round\" *ngIf=\"appConfig.id\" (click)=\"saveAppConfig();\" >Update</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"formReset();\">Reset</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"cancelRequest();\">Cancel</button> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t    </div>\n\t\t     </div>\n\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    93508: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"page_header\" class=\"page-header header-filter clear-filter\" data-parallax=\"true\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t<div class=\"brand text-center\">\n\t\t\t\t\t<h1>Watson Assistant Demo</h1>\n\t\t\t\t\t<!-- <h2>IBM Watson Conversation Demo</h2> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"main main-raised\">\n\n  <nav class=\"navbar navbar-default navbar-expand-lg\" role=\"navigation-demo\" *ngIf=\"!currentUser || !currentUser.id\" >\n    <div class=\"container\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <button class=\"btn btn-primary btn-sm float-right\"\n                data-toggle=\"modal\" data-target=\"#demoInfoModal\">\n                Info\n              </button>\n            </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <nav class=\"navbar navbar-default navbar-expand-lg\" role=\"navigation-demo\" *ngIf=\"currentUser && currentUser.id\" >\n    <div class=\"container\">\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav ml-auto\">\n\n                <li class=\"nav-item\">\n                  <button class=\"btn btn-primary btn-sm float-right\"\n                    data-toggle=\"modal\" data-target=\"#demoInfoModal\">\n                    Info\n                  </button>\n                </li>\n                <li class=\"nav-item\">\n                  <button class=\"btn btn-primary btn-sm float-right\"\n                    *ngIf=\"conversationObj.params.context['skills']['main skill']['user_defined']['initConversation']\" (click)=\"refreshConversation()\"\n                    data-toggle=\"tooltip\" data-placement=\"top\" title=\"Start Conversation\">\n                    <i class=\"material-icons\">chat</i> Start Chat\n                  </button>\n                </li>\n                <li class=\"nav-item\">\n                  <button class=\"btn btn-primary btn-sm float-right\"\n                    *ngIf=\"!conversationObj.params.context['skills']['main skill']['user_defined']['initConversation']\" (click)=\"refreshConversation()\"\n                    data-toggle=\"tooltip\" data-placement=\"top\" title=\"Refresh Conversation\">\n                    <i class=\"material-icons\">refresh</i> Refresh\n                  </button>\n                </li>\n                <li class=\"nav-item\">\n                  <button class=\"btn btn-primary btn-sm float-right\" *ngIf=\"conversations && conversations.length > 0\"\n                    data-toggle=\"modal\" data-target=\"#reqRespModal\">\n                    Show Req/Resp\n                  </button>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"detections && detections.length > 0\">\n                  <button class=\"btn btn-primary btn-link\">Detections</button>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"detections && detections.length > 0\">\n                  <ng-multiselect-dropdown\n                    [placeholder]=\"'Select Detection'\"\n                    [settings]=\"dropdownSettings\"\n                    [data]=\"detections\"\n                    [(ngModel)]=\"selectedDetections\"                    \n                    (onSelect)=\"onDetectionsSelect($event)\"\n                    (onSelectAll)=\"onSelectAll($event)\"\n                  >\n                  </ng-multiselect-dropdown>\n\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</nav>\n\n\t<div class=\"section section-comments\">\n\t\t<div class=\"container chat-container\" *ngIf=\"currentUser && currentUser.id\">\n      <!-- <div class=\"container chat-container\" > -->\n\t\t\t<!-- <form class=\"form\" #chatForm=\"ngForm\" method=\"\" action=\"\"> -->\n\t\t\t<div #chatRow class=\"row chat-row\">\n          <div class=\"col-md-12 ml-auto mr-auto\">\n\n\t\t\t\t\t<div *ngFor=\"let conversation of conversations\" >\n\t\t\t\t\t\t<div class=\"media-area\">\n              <!-- REPLIES FROM BOT STARTS HERE -->\n              <div class=\"media\" *ngFor=\"let dialog of conversation.replies\">\n                  <a class=\"float-left\" href=\"javascript:void(0);\"\n                    *ngIf=\"dialog.input && dialog.input.text && dialog.input.text != ''\">\n                    <div class=\"avatar\">\n                      <img class=\"media-object\" src=\"assets/images/avatars/profile.jpg\" alt=\"...\" />\n                    </div>\n                  </a>\n\n\t\t\t\t\t\t\t\t <div class=\"media-body\">\n\n                    <div *ngIf=\"dialog.input && dialog.input.text\">\n                      <h4 *ngIf=\"currentUser && currentUser.user\" class=\"media-heading\">\n                        {{currentUser.user.firstName}} <small>&middot;\n                          {{dialog.input.timestamp | amTimeAgo}}</small></h4>\n                      <h4 *ngIf=\"!currentUser || !currentUser.user\" class=\"media-heading\">User <small>&middot;\n                          {{dialog.input.timestamp | amTimeAgo}}</small></h4>\n                      <h6 class=\"text-muted\"></h6>\n\n                      <p *ngIf=\"dialog.input && dialog.input.text\">{{dialog.input.text}}</p>\n\n                    </div>\n\n                    <div class=\"media media-post\" *ngIf=\"dialog.output && dialog.output.generic && dialog.output.generic.length > 0\" >\n                        <a class=\"float-left\" href=\"javascript:void(0);\">\n                          <div class=\"avatar watson\">\n                            <img class=\"media-object\" src=\"assets/images/avatars/watson-avatar.png\"\n                              alt=\"...\" />\n                          </div>\n                        </a>\n\n                        <div class=\"media-body\">\n                          <h4 class=\"media-heading\">Watson <small>&middot;\n                              {{dialog.output.timestamp | amTimeAgo}}</small></h4>\n                          <h6 class=\"text-muted\"></h6>\n\n                          <div *ngFor=\"let reply of dialog.output.generic\">\n                            <div *ngIf=\"reply.response_type == 'text' && reply.text\">\n                              <p *ngIf=\"reply.text.constructor.toString().indexOf('String') > -1\">\n                                <span [innerHtml]=\"reply.text | linkify\"></span>\n                              </p>\n                              <div *ngIf=\"reply.text.constructor.toString().indexOf('Array') > -1\">\n                                <ul  *ngFor=\"let textVal of reply.text\">\n                                  <li><span [innerHtml]=\"textVal | linkify\"></span></li>\n                                </ul>\n                              </div>\n                            </div>\n                            <div *ngIf=\"reply.response_type == 'image' && reply.source\">\n                              <img src=\"{{reply.source}}\" class=\"img_fit\" alt=\"{{reply.title}}\" />\n                            </div>\n                            <div *ngIf=\"reply.response_type == 'option'\">\n                              <p><span [innerHtml]=\"reply.title\" *ngIf=\"reply.title\"></span></p>\n                              <p><span [innerHtml]=\"reply.description\" *ngIf=\"reply.description\"></span></p>\n                              <div *ngFor=\"let option of reply.options\">\n                                <div *ngIf=\"option.label == 'video' && option.value.input && option.value.input.text\">\n                                  <vg-player>\n                                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\n                                        <source src=\"{{option.value.input.text}}\" type=\"video/mp4\">\n                                    </video>\n                                  </vg-player>\n                                </div>\n                                <div *ngIf=\"option.label == 'link' && option.value.input && option.value.input.text\">\n                                  <a href=\"{{option.value.input.text}}\" target=\"_blank\">Click here for more details.</a>\n                                </div>\n                                <div *ngIf=\"option.label != 'video' && option.label != 'link' && option.value.input && option.value.input.text\">\n                                  <button class=\"btn btn-primary btn-link\" (click)=\"optionSelected(option)\">{{option.label}}</button>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"reply.response_type == 'search'\">\n                                <h5>Here are some search results from Discovery: </h5>\n                                <div class=\"result\"\n                                  *ngFor=\"let searchResult of reply.results\">\n                                  <div class=\"result-title\">\n                                    <p>{{searchResult.title}}</p>\n                                  </div>\n                                  <div class=\"result-preview\" *ngIf=\"searchResult.bodySnippet\">\n                                    <p>{{searchResult.bodySnippet | linkify}}</p>\n                                  </div>\n                                  <div class=\"result-preview\" *ngIf=\"searchResult.body\">\n                                    <p>{{searchResult.body | slice:0:550 }}</p>\n                                  </div>\n                                  <div class=\"result-link\">\n                                    <a href=\"{{searchResult.url}}\" target=\"_blank\"> More details..\n                                    </a>\n                                  </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"reply.response_type == 'suggestion'\">\n                              <p><span [innerHtml]=\"reply.title\" *ngIf=\"reply.title\"></span></p>\n                              <p><span [innerHtml]=\"reply.description\" *ngIf=\"reply.description\"></span></p>\n                              <div *ngFor=\"let suggestion of reply.suggestions\">\n                                <div *ngIf=\"suggestion.label && suggestion.value.input.suggestion_id\">\n                                  <button class=\"btn btn-primary btn-link\" (click)=\"suggestionSelected(suggestion)\">{{suggestion.label}}</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n\n                          <div class=\"media-footer footer-feedback\"\n                            *ngIf=\"dialog.output.feedback && dialog.output.feedback.show\">\n                            <a href=\"javascript:void(0);\"\n                              class=\"btn btn-success btn-link float-right btn-feedback\"\n                              data-toggle=\"tooltip\" title=\"Like\" data-placement=\"top\"\n                              data-container=\"body\">\n                              <i class=\"material-icons\"\n                                (click)=\"provideFeedback(dialog, 'positive')\">thumb_up</i>\n                            </a>\n                            <a href=\"javascript:void(0);\"\n                              class=\"btn btn-danger btn-link float-right btn-feedback\"\n                              data-toggle=\"tooltip\" title=\"Dislike\" data-placement=\"top\"\n                              data-container=\"body\">\n                              <i class=\"material-icons\"\n                                (click)=\"provideFeedback(dialog, 'negative')\">thumb_down</i>\n                            </a>\n                          </div>\n                        </div>\n                    </div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- REPLIES FROM BOT ENDS HERE -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12 ml-auto mr-auto\" *ngIf=\"!conversationObj.params.context['skills']['main skill']['user_defined']['initConversation']\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t<div class=\"media media-post\">\n\t\t\t\t\t\t\t\t<a class=\"author float-left\" href=\"javascript:void(0);\">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"assets/images/avatars/profile.jpg\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\" *ngIf=\"hasAudioDevice && token\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" *ngIf=\"!isStreaming\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link btn-fab btn-primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"startStream()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mic</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" *ngIf=\"isStreaming\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stopStream()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link btn-fab btn-success\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stopStream()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mic_off</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control chat-input\" name=\"userInput\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userInput.label\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter text here...\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keyup.enter)=\"fetchConversationResponse()\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link btn-fab btn-primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fetchConversationResponse()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">send</i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n                  </div>\n                  <div class=\"media-footer\" *ngIf=\"predictions\">\n                      <a href=\"#pablo\" *ngIf=\"predictions.skill && predictions.skill.confidence\" class=\"btn btn-primary btn-link float-right\" rel=\"tooltip\" title=\"Skill Prediction with confidence\">\n                          Skill: {{predictions.skill.assistantId}} ({{predictions.skill.confidence | percent: '2.1-2' }})\n                      </a>\n                      <a href=\"#pablo\" *ngIf=\"predictions.language\" class=\"btn btn-danger btn-link float-right\">\n                          Language: {{predictions.language}}\n                      </a>\n                  </div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- </form> -->\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div *ngIf=\"!currentUser || !currentUser.id\">\n\t\t\t<a href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\">\n\t\t\t\t<i class=\"material-icons\">login</i> Login is required\n\t\t\t</a>\n\t\t</div>\n\n\n\n\t</div>\n</div>\n\n\n<!-- Sart Modal -->\n<div class=\"modal fade\" id=\"reqRespModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"reqRespModalLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\">Watson JSON Request and Response</h4>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">clear</i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<prettyjson [obj]=\"conversations[conversations.length - 1]\"></prettyjson>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-simple\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  End Modal -->\n\n<!-- Sart Demo Info Modal -->\n<div class=\"modal fade\" id=\"demoInfoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"demoInfoModalLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Running the Demo</h3>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">clear</i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\n        <b>Login Credentials: guest / P@ssw0rd</b>\n\n        <h4>For Home Automation, following flows can be verified:</h4>\n\n        <b>Triggering Weather service:</b> <br />\n        <ul>\n          <li>What's the weather outside ?</li>\n          <li>How is the weather in New Delhi ?</li>\n          <li>Is it hot outside</li>\n          <li>How cold is it outside</li>\n          <li>and more</li>\n        </ul>\n\n        <b> To trigger Google Search API:</b> <br />\n        <ul>\n          <li>What is the meaning of ROFL ?</li>\n          <li>What does TOEFL sounds for ?</li>\n          <li>What's the meaning of IoT</li>\n          <li>What's the meaning of life ?</li>\n        </ul>\n\n        <b>To fetch data from News Feeds:</b> <br />\n        <ul>\n          <li>Tell me the latest news</li>\n          <li>What is the news headlines</li>\n          <li>What's the latest news ?</li>\n          <li>and more</li>\n        </ul>\n\n        <b>Some other input texts:</b> <br />\n        <ul>\n          <li>Tell me a joke (Note: this will fetch joke using Cloud Functions)</li>\n          <li>Turn on the living room fan</li>\n          <li>Switch off the light in kitchen</li>\n          <li>Tell me something about IBM Watson (This will show Video content in Chat window)</li>\n        </ul>\n\n        <h4> For COVID19, following flows can be verified:</h4>\n\n        <ul>\n          <li>How do I know that I have corona virus</li>\n          <li>whats the difference between common flu and corona virus</li>\n          <li>what are the symptoms of corona virus</li>\n        </ul>\n\n        <b>Scenario (1)</b> <br />\n\n            U: \"can I send my kids to school\" <br />\n            W: \"can you tell me the type of school they go to\" <br />\n            U: use either \"college\" or \"high school\" - the answer will change <br />\n            W: \"can you tell me the zip code\" <br />\n            U: use either \"78708\" or \"78712\" (Austin, TX) <br />\n            W: \"colleges have been advised to conduct classes remotely online...\" <br />\n\n        <b>Scenario (2) </b> <br />\n            U: \"when can my kids go back to college\" <br />\n            W: \"can you tell me the zipcode\" <br />\n            U: use either \"78708\" or \"78712\" or other Ohio zip codes <br />\n            W: \"colleges have been advised to conduct classes remotely online...\" <br />\n\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-simple\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  End Modal -->\n";
      /***/
    },

    /***/
    50003: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\t<div id=\"page_header\" class=\"page-header header-filter clear-filter\" data-parallax=\"true\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t<div class=\"brand text-center\">\n\t\t\t\t\t\t<h1>Material Design With Bootstrap</h1>\n\t\t\t\t\t\t<h3>SDK based on Material Design.</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"main main-raised\">\n\t\t\t<div class=\"section section-basic\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t<h2>Basic Elements</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--  buttons -->\n\t\t\t\t\t\t\t<div id=\"buttons\" class=\"cd-section\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Buttons\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Pick your style</small>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Default</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-round\">Round</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> With Icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-fab btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-link\">Simple</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Pick your size</small>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\">Small</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Regular</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg\">Large</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small> Pick your color </small>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\">Default</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Primary</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info\">Info</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\">Success</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\">Warning</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\">Danger</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-rose\">Rose</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end buttons\t\t         -->\n\t\t\t\t\t\t\t<div class=\"space-50\"></div>\n\t\t\t\t\t\t\t<!--                 social buttons\t\t         -->\n\t\t\t\t\t\t\t<div id=\"social-buttons\">\n\t\t\t\t\t\t\t\t\t<div class=\"tim-title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Social Buttons</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6 col-12 social-buttons-demo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small> Default </small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Connect with Twitter\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i> Share &#xB7; 2.2k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus-square\"></i> Share on Google+\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-linkedin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-pinterest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\"></i> Pint it &#xB7; 212\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\"></i> View on Youtube\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-tumblr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tumblr-square\"></i> Repost\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-github\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-github\"></i> Connect with Github\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-behance\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-behance-square\"></i> Follow us\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i> Find us on Dribble\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-social btn-fill btn-reddit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reddit\"></i> Repost &#xB7; 232\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-1 col-md-3 col-6 social-buttons-demo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xA0;</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-linkedin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-pinterest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-tumblr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tumblr\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-github\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-github\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-behance\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-behance\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon  btn-reddit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reddit\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-1 col-md-2 col-6 social-buttons-demo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xA0;</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-linkedin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-pinterest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-tumblr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tumblr\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-github\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-github\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-behance\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-behance\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-just-icon btn-round btn-reddit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reddit\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-1 col-md-3 col-4 social-buttons-demo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Simple</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-linkedin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-pinterest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-tumblr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tumblr-square\"> </i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-github\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-github\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-behance\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-behance\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-reddit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reddit\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6 col-8 social-buttons-demo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xA0;</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Connect with Twitter\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i> Share &#xB7; 2.2k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus-square\"></i> Share on Google+\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-linkedin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-pinterest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\"></i> Pint it &#xB7; 212\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\"></i> View on Youtube\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-tumblr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tumblr-square\"></i> Repost\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-github\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-github\"></i> Connect with Github\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-behance\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-behance-square\"></i> Follow us\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i> Find us on Dribble\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link btn-reddit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reddit\"></i> Repost &#xB7; 232\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end social buttons -->\n\t\t\t\t\t\t\t<!--                 inputs -->\n\t\t\t\t\t\t\t<div id=\"inputs\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Inputs</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Regular\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInput1\" class=\"bmd-label-floating\">With Floating Label</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInput1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"bmd-help\">We'll never share your email with anyone else.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInput2\" class=\"bmd-label-floating\">Success input</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"exampleInput2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">done</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInput3\" class=\"bmd-label-floating\">Error input</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInput3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">clear</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">group</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"With Material Icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-group\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"With Font Awesome Icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end inputs -->\n\t\t\t\t\t\t\t<div class=\"space-70\"></div>\n\t\t\t\t\t\t\t<!--                 textarea/checkbox/radio/toggle -->\n\t\t\t\t\t\t\t<div id=\"checkRadios\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Checkboxes</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Unchecked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Checked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled> Disabled unchecked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled checked> Disabled checked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Radio Buttons</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\"> Radio is off\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked> Radio is on\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios11\" value=\"option1\" disabled> Disabled radio is off\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"exampleRadio1\" id=\"exampleRadios21\" value=\"option2\" checked disabled> Disabled radio is on\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Toggle Buttons</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tToggle is on\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"togglebutton\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"toggle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tToggle is off\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"space-70\"></div>\n\t\t\t\t\t\t\t<!--  select -->\n\t\t\t\t\t\t\t<div class=\"select\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Customizable Select</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-6 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"selectpicker \" data-style=\"select-with-transition\" title=\"Single Select\" data-size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled>Choose city</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Foobar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Is great</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-6 col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"selectpicker\" data-style=\"select-with-transition\" multiple title=\"Choose City\" data-size=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option disabled> Choose city</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Paris </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Bucharest</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Rome</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">New York</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">Miami </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">Piatra Neamt</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">Paris </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">Bucharest</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">Rome</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">New York</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\">Miami </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"13\">Piatra Neamt</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"14\">Paris </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"15\">Bucharest</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"16\">Rome</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"17\">New York</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"18\">Miami </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"19\">Piatra Neamt</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Dropdown &amp; Dropup</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"dropdown-header\">Dropdown header</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Another action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Something else here</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">One more separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropup\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"dropdown-header\">Dropdown header</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Another action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Something else here</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">One more separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end select -->\n\t\t\t\t\t\t\t<div class=\"space-70\"></div>\n\t\t\t\t\t\t\t<!--    textarea/tags -->\n\t\t\t\t\t\t\t<div id=\"textareaTags\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Textarea</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-control-label bmd-label-floating\" for=\"exampleInputTextarea\"> You can write your text here...</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"exampleInputTextarea\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Tags</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"Amsterdam,Washington,Sydney,Beijing\" class=\"tagsinput form-control\" data-role=\"tagsinput\" data-color=\"rose\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- You can change data-color=\"rose\" with one of our colors primary | warning | info | danger | success -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--    progress/sliders -->\n\t\t\t\t\t\t\t<div id=\"progress\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Progress Bars</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-line-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">60% Complete</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-line-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">60% Complete</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-line-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">35% Complete (success)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">20% Complete (warning)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">10% Complete (danger)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Pagination</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pagination pagination-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor-classes: \"pagination-primary\", \"pagination-info\", \"pagination-success\", \"pagination-warning\", \"pagination-danger\"\n\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">1</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">...</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">5</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">6</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">7</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">8</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">9</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">...</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">12</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pagination pagination-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\"> prev</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">1</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">2</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">3</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">4</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">5</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"page-link\">next </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end progress -->\n\t\t\t\t\t\t\t<!--                 sliders -->\n\t\t\t\t\t\t\t<div id=\"sliders\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Sliders</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"sliderRegular\" class=\"slider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"sliderDouble\" class=\"slider slider-info\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Badges </h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-secondary\">Default</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-primary\">Primary</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-info\">Info</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success\">Success</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-warning\">Warning</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-danger\">Danger</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-rose\">Rose</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end sliders -->\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"section section-navbars cd-section\" id=\"navigation\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<!--                 menu -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Menu</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-expand-lg bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Menu</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">Link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">Link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">Dropdown</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"dropdown-header\">Dropdown header</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Another action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Something else here</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">One more separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Menu with Icons</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-expand-lg bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Icons</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\"><i class=\"material-icons\">email</i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\"><i class=\"material-icons\">face</i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">settings</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"dropdown-header\">Dropdown header</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Another action</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Something else here</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">One more separated link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t            end menu -->\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t<h3>Navigation</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--             navbar -->\n\t\t\t\t\t<div id=\"navbar\">\n\t\t\t\t\t\t\t<div class=\"navigation-example\" style=\"background-image: url('/assets/images/bg.jpg');\">\n\t\t\t\t\t\t\t\t\t<!--        rose navbar with search form -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-expand-lg bg-rose\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Brand</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">link</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form class=\"form-inline ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-white btn-raised btn-fab btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">search</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--        end rose navbar -->\n\t\t\t\t\t\t\t\t\t<!--        info navbar -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-expand-lg bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Info Color</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProfile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--        end info navbar -->\n\t\t\t\t\t\t\t\t\t<!--        primary navbar  -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-expand-lg bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Primary Color</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">explore</i> Discover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">account_circle</i> Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">settings</i> Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--        end primary navbar -->\n\t\t\t\t\t\t\t\t\t<!--         inverse navbar with notifications     -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-inverse navbar-expand-lg bg-dark\" role=\"navigation-demo\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Navbar with notification</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWishlist\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-rose btn-raised btn-fab btn-round\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">email</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"profile-photo dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-photo-small\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"dropdown-header\">Dropdown header</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Me</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Settings and other stuff</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"dropdown-item\">Sign out</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.navbar-collapse -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.container-->\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--            end inverse navbar -->\n\t\t\t\t\t\t\t\t\t<!--        default navbar with profile photo -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-default navbar-expand-lg\" role=\"navigation-demo\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-translate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"/presentation.html\">Navbar with profile</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWishlist\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-rose btn-raised btn-round \" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.navbar-collapse -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.container-->\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--                end default navbar -->\n\t\t\t\t\t\t\t\t\t<!--        transparent navbar -->\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar navbar-transparent navbar-expand-lg\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"ml-auto navbar-toggler\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i> Facebook\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Twitter\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"nav-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i> Instagram\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<!--        end transparent navbar-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- end navbar  -->\n\t\t\t</div>\n\t\t\t<div class=\"section section-tabs\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<!--                nav tabs\t             -->\n\t\t\t\t\t\t\t<div id=\"nav-tabs\">\n\t\t\t\t\t\t\t\t\t<h3>Navigation Tabs</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Tabs with Icons on Card</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Tabs with icons on Card -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-nav-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"nav-tabs-navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"nav-tabs-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">face</i> Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat</i> Messages\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">build</i> Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"profile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"messages\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"settings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#x2019;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- End Tabs with icons on Card -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Tabs on Plain Card</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Tabs on Plain Card -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-nav-tabs card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"nav-tabs-navigation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"nav-tabs-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#home\" data-toggle=\"tab\">Home</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#updates\" data-toggle=\"tab\">Updates</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#history\" data-toggle=\"tab\">History</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"home\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#x2019;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"updates\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"history\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- End Tabs on plain Card -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- \t            end nav tabs -->\n\t\t\t<div class=\"section section-white\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<!--                 nav pills -->\n\t\t\t\t\t\t\t<div id=\"navigation-pills\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Navigation Pills</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small> Horizontal tabs</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-pills-rose\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#pill1\" data-toggle=\"tab\">Profile</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#pill2\" data-toggle=\"tab\">Settings</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#pill3\" data-toggle=\"tab\">Options</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content tab-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"pill1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Dramatically visualize customer directed convergence without revolutionary ROI.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"pill2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEfficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"pill3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompletely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small> Vertical tabs</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-pills-rose flex-column\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#tab1\" data-toggle=\"tab\">Profile</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#tab2\" data-toggle=\"tab\">Settings</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#tab3\" data-toggle=\"tab\">Options</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"tab1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Dramatically visualize customer directed convergence without revolutionary ROI.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEfficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompletely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small>With Icons</small>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-pills-icons\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#dashboard-1\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">dashboard</i> Dashboard\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#schedule-1\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> Schedule\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#tasks-1\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">list</i> Tasks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content tab-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"dashboard-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Dramatically visualize customer directed convergence without revolutionary ROI.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"schedule-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEfficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tasks-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompletely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-pills-icons flex-column\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link active\" href=\"#dashboard-2\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">dashboard</i> Dashboard\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" href=\"#schedule-2\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> Schedule\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"dashboard-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Dramatically visualize customer directed convergence without revolutionary ROI.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"schedule-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEfficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end nav pills -->\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--        notifications -->\n\t\t\t<div class=\"section cd-section section-notifications\" id=\"notifications\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"space-70\"></div>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t<h3>Notifications</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">info_outline</i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<b>Info alert:</b> You&apos;ve got some friends nearby, stop looking at your phone and find them...\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-success\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<b>Success Alert:</b> Yuhuuu! You&apos;ve got your $11.99 album from The Weeknd\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-warning\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">warning</i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<b>Warning Alert:</b> Hey, it looks like you still have the &quot;copyright &#xA9; 2015&quot; in your footer. Please update it!\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">error_outline</i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\"><i class=\"material-icons\">clear</i></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse for your Boss...\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t\t<!--        end notifications -->\n\t\t\t<div class=\"section section-gray cd-section\" id=\"footers\">\n\t\t\t\t\t<!--         pre-footer areas -->\n\t\t\t\t\t<div id=\"pre-footer-areas\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Pre-Footer Areas</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    SIMPLE SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<div class=\"social-line social-line-white text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"title\">Thank you for your support!</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-twitter btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Twitter &#xB7; 2.5k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-facebook btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i> Facebook &#xB7; 3.2k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-google btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i> Google &#xB7; 1.2k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-dribbble btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i> Dribbble &#xB7; 1.8k\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********   SIMPLE SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!--     *********    SIMPLE SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<div class=\"social-line social-line-big-icons social-line-white\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-instagram\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********   SIMPLE SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!--     *********    SIMPLE BLACK SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<div class=\"social-line social-line-big-icons social-line-black\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********   SIMPLE BLACK SOCIAL LINE     *********      -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!--     *********    IMAGE SUBSCRIBE LINE     *********      -->\n\t\t\t\t\t\t\t<div class=\"subscribe-line subscribe-line-image\" style=\"background-image: url('/assets/images/bg5.jpg');\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">Subscribe to our Newsletter</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJoin our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-raised card-form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form method=\"\" action=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mail</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" value=\"\" placeholder=\"Your Email...\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\">Subscribe</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********   IMAGE SUBSCRIBE LINE     *********      -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!--     *********    SIMPLE SUBSCRIBE LINE     *********      -->\n\t\t\t\t\t\t\t<div class=\"subscribe-line subscribe-line-white\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">Get Tips &amp; Tricks every Week!</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJoin our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-plain card-form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form method=\"\" action=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mail</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" value=\"\" placeholder=\"Your Email...\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-rose btn-round btn-block\">Subscribe</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********   SIMPLE SUBSCRIBE LINE     *********      -->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t    end pre-footer areas -->\n\t\t\t\t\t<!--         footer areas\t     -->\n\t\t\t\t\t<div class=\"section\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Footer Areas</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"footer-areas\">\n\t\t\t\t\t\t\t\t\t<!--     *********    SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer footer-white\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"footer-brand\" href=\"#pablo\">Material Design</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pull-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYour Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAbout Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLicenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"social-buttons float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com\" target=\"_blank\" class=\"btn btn-just-icon btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/YourTeam\" target=\"_blank\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.instagram.com\" target=\"_blank\" class=\"btn btn-just-icon btn-link btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<!--     *********    SIMPLE FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<nav class=\"float-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYour Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAbout Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo/license\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLicenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"copyright float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&#xA9;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdocument.write(new Date().getFullYear())\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</script>, made with <i class=\"material-icons\">favorite</i> by Your Team for a better web.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END SIMPLE FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer footer-black\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"footer-brand\" href=\"#pablo\">Material Design</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pull-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPresentation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"social-buttons float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/YourTeam\" target=\"_blank\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/YourTeam\" target=\"_blank\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/YourTeamOfficial\" target=\"_blank\" class=\"btn btn-just-icon btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<!--     *********    BIG FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer footer-black footer-big\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>About Us</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Your Team is a startup that creates design tools that make the web development process faster and easier. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Social Feed</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"social-feed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>How to handle ethical disagreements with your clients.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>The tangible benefits of designing at 1x pixel density.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>A collection of 25 stunning sites that you can use for inspiration.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Instagram Feed</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"gallery-feed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/card-profile6-square.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/christian.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/card-profile4-square.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/card-profile1-square.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/marc.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/profile1.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/card-profile5-square.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/card-profile2-square.jpg\" class=\"img img-raised rounded\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"float-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPresentation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"copyright float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCopyright &#xA9;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdocument.write(new Date().getFullYear())\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</script> Your Team All Rights Reserved.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END BIG FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<!--     *********    BIG WHITE FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer footer-white footer-big\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>About Us</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links-vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAbout Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPresentation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Market</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links-vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSales FAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHow to Register\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSell Goods\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReceive Payment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTransactions Issues\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAffiliates Program\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Social Feed</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"social-feed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>How to handle ethical disagreements with your clients.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>The tangible benefits of designing at 1x pixel density.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"feed-line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>A collection of 25 stunning sites that you can use for inspiration.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Follow Us</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"social-buttons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-instagram\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Numbers Don&apos;t Lie</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>14.521\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Freelancers</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>1.423.183\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Transactions</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"copyright pull-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCopyright &#xA9;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdocument.write(new Date().getFullYear())\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</script> Your Team All Rights Reserved.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END BIG WHITE FOOTER     *********      -->\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<!--     *********    BIG WHITE FOOTER V2     *********      -->\n\t\t\t\t\t\t\t\t\t<footer class=\"footer footer-white footer-big\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Material Design</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Probably the best UI Kit in the world! We know you&apos;ve been waiting for it, so don&apos;t be shy!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>About</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links-vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBlog\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAbout Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPresentation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Market</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links-vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSales FAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHow to Register\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSell Goods\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReceive Payment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTransactions Issues\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Legal</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links-vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTransactions FAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTerms &amp; Conditions\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLicenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Subscribe to Newsletter</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJoin our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form class=\"form form-newsletter\" method=\"\" action=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-just-icon\" name=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mail</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"social-buttons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-youtube\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-youtube-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"copyright pull-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCopyright &#xA9;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdocument.write(new Date().getFullYear())\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</script> Your Team All Rights Reserved.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</footer>\n\t\t\t\t\t\t\t\t\t<!--     *********   END BIG WHITE FOOTER v2     *********      -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--         footer areas         -->\n\t\t\t</div>\n\t\t\t<div class=\"section\">\n\t\t\t\t\t<div class=\"container tim-container\">\n\t\t\t\t\t\t\t<!--     \t        typography -->\n\t\t\t\t\t\t\t<div id=\"typography\" class=\"cd-section\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>Typography</h2>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 1</span>The Life of Material Design </h1>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 2</span>The Life of Material Design</h2>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 3</span>The Life of Material Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 4</span>The Life of Material Design</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 5</span>The Life of Material Design</h5>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 6</span>The Life of Material Design</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 1 Title</span>The Life of Material Design </h1>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 2 Title</span>The Life of Material Design</h2>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 3 Title</span>The Life of Material Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Header 4 Title</span>The Life of Material Design</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Paragraph</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Quote</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"blockquote undefined\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKanye West, Musician\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Muted Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Primary Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Info Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Success Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Warning Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Danger Text</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tim-typo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tim-note\">Small Tag</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHeader with small subtitle\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Use &quot;small&quot; tag for the headers</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end typography -->\n\t\t\t\t\t\t\t<div class=\"space-50\"></div>\n\t\t\t\t\t\t\t<!--                 images -->\n\t\t\t\t\t\t\t<div id=\"images\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>Images</h2>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Rounded Image</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Circle Image</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Rounded Raised</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"Raised Image\" class=\"img-raised rounded img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Circle Raised</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"Thumbnail Image\" class=\"img-raised rounded-circle img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end images\t             -->\n\t\t\t\t\t\t\t<div class=\"space-50\"></div>\n\t\t\t\t\t\t\t<div id=\"contentAreas\" class=\"cd-section\">\n\t\t\t\t\t\t\t\t\t<h2>Content Areas</h2>\n\t\t\t\t\t\t\t\t\t<!--                 tables -->\n\t\t\t\t\t\t\t\t\t<div id=\"tables\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Tables</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Simple Table</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Simple With Actions</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Job Position</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Since</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Salary</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Actions</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Andrew Mike</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Develop</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2013</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 99,225</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>John Doe</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Design</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2012</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 89,241</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Alex Mike</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Design</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2010</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 92,144</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-link btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-link btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-link btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">4</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mike Monday</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Marketing</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2013</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 49,990</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-round btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">5</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Paul Dickens</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Communication</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2015</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 69,201</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-just-icon btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Striped With Checkboxes</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Product Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Price</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Moleskine Agenda</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Office</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>25</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 49</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 1,225</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">2</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Stabilo Pen</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Office</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>30</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 10</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 300</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>A4 Paper Pack</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Office</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>50</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 10.99</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 109</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">4</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Apple iPad</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Meeting</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>10</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 499.00</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 4,990</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">5</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-check-sign\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Apple iPhone</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Communication</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>10</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 599.00</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">&#x20AC; 5,999</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-total\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTotal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>12,999\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Shopping Cart Table</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-shopping\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\"></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Product</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"th-description\">Color</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"th-description text-right\">Size</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Price</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#jacket\">Spring Jacket</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>by Dolce&amp;Gabbana</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>549\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">remove</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">add</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>549\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Remove item\" class=\"btn btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pants\">Short Pants</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>by Gucci</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPurple\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>499\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">remove</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">add</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>998\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Remove item\" class=\"btn btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#nothing\">Pencil Skirt</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>by Valentino</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWhite\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tXL\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>799\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">remove</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-round btn-info btn-sm\"> <i class=\"material-icons\">add</i> </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-number text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>799</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-actions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Remove item\" class=\"btn btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-total\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTotal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"td-price text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#x20AC;</small>2,346\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\" class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-round\">Complete Purchase <i class=\"material-icons\">keyboard_arrow_right</i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--                 end tables -->\n\t\t\t\t\t\t\t\t\t<div class=\"space-50\"></div>\n\t\t\t\t\t\t\t\t\t<!--                 comments -->\n\t\t\t\t\t\t\t\t\t<div id=\"comments\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Comments</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 ml-auto mr-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-area\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title text-center\">10 Comments</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\"/assets/images/faces/avatar.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tina Andrew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xB7; 7 minutes ago</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Chance too good. God level bars. I&apos;m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don&apos;t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>All praises and blessings to the families of people who never gave up on dreams. Don&apos;t forget, You&apos;re Awesome!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-link float-right\" rel=\"tooltip\" title=\"Reply to Comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">reply</i> Reply\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-link float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 243\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media media-post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"author float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"/assets/images/faces/profile1.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">reply</i> Reply\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"Tim Picture\" src=\"/assets/images/faces/marc.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">John Camber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xB7; Yesterday</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Don&apos;t forget, You&apos;re Awesome!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-link float-right\" rel=\"tooltip\" title=\"Reply to Comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">reply</i> Reply\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-link btn-secondary float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 25\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"/assets/images/faces/avatar.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tina Andrew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xB7; 2 Days Ago</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Don&apos;t forget, You&apos;re Awesome!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-link float-right\" rel=\"tooltip\" title=\"Reply to Comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">reply</i> Reply\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-link float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 243\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"/assets/images/faces/profile1.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Gurvinder Singh\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>&#xB7; 2 Days Ago</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p> Don&apos;t forget, You&apos;re Awesome!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-link float-right\" rel=\"tooltip\" title=\"Reply to Comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">reply</i> Reply\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-link float-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 243\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pagination-area\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pagination justify-content-center text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">&#xAB;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">1</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">2</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">3</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">4</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">5</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"page-link\">&#xBB;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">Post your comment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>- Logged In User -</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media media-post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"author float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"/assets/images/faces/avatar.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-wd float-right\">Post Comment</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- end media-post -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"text-center\">Post your comment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>- Not Logged In User -</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media media-post\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"author float-left\" href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"media-object\" alt=\"64x64\" src=\"/assets/images/placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form class=\"form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Your Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Your email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>Sign in with</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-just-icon btn-round btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-just-icon btn-round btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-just-icon btn-round btn-google\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary float-right\">Post Comment</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- end media-body -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- end media-post -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--                 end comments                 -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--         cards -->\n\t\t\t<div id=\"cards\" class=\"cd-section\">\n\t\t\t\t\t<div class=\"section-gray\">\n\t\t\t\t\t\t\t<!--     *********    BLOG CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Cards</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Blog Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis Summer Will be Awesome\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Fashion</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Twitter\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">&quot;You Don&apos;t Have to Sacrifice Joy to Build a Fabulous Business and Life&quot;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Tania Andrew</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 2.4K &#xB7;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">share</i> 45\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">trending_up</i> Trending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">To Grow Your Business Start Focusing on Your Employees</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/christian.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Lord Alex</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 342 &#xB7;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat_bubble</i> 45\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-success\">Legal</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">5 Common Legal Mistakes That Can Trip-Up Your Startup</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/marc.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Mike John</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> 5 min read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">trending_up</i> Trending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">To Grow Your Business Start Focusing on Your Employees</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/marc.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Mike John</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> 5 min read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card bg-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-newspaper-o\"></i> TechCrunch\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">&quot;Focus on Your Employees&quot;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stats justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-round\">Read Article</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END BLOG CARDS      *********      -->\n\t\t\t\t\t\t\t<!--     *********    PROFILE CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Profile Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTania Andrew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Web Designer</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-instagram\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Alec Thompson</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-twitter btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-facebook btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-google btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/faces/marc.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Alec Thompson</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-info btn-round\">Follow</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END PROFILE CARDS      *********      -->\n\t\t\t\t\t\t\t<!--     *********    PRODUCT CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Full Background Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Productivy Apps</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">The Best Productivity Apps on Market</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read Article\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">watch_later</i> Watch Later\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Materials</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">The Sculpture Where Details Matter</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read Article\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END PRODUCT CARDS      *********      -->\n\t\t\t\t\t\t\t<!--     *********    PRICING CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Pricing Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-gray\">Small Company</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon icon-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">people</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">$29</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis is good if your company size is between 2 and 10 Persons.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-info btn-round\">Choose Plan</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-pricing bg-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">business</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">$69</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis is good if your company size is between 11 and 99 Persons.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-pricing card-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Premium</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>$</small>89</h1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>100</b> Projects</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>5</b> Team Members</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>55</b> Personal Contacts</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>5.000</b> Messages</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGet Started\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-pricing\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-success\">Platinum</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>$</small>89</h1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"material-icons text-success\">check</i> Sharing Tools</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"material-icons text-success\">check</i> Design Tools</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"material-icons text-danger\">close</i> Private Messages</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"material-icons text-danger\">close</i> Personal Brand</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGet Started\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END PRICING CARDS      *********      -->\n\t\t\t\t\t\t\t<!--     *********    MORPHING CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\" id=\"morphingCards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 id=\"morphingCard\">Morphing Cards</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 id=\"rotatingCards\">Rotating Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate card-background\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front front-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg');\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category\">Full Background Card</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">This Background Card Will Rotate on Hover</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back back-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg');\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tManage Post\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">As an Admin, you have shortcuts to edit, view or delete the posts.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"footer text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-info btn-just-icon btn-fill btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-success btn-just-icon btn-fill btn-round btn-wd\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mode_edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-just-icon btn-fill btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social text-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-newspaper-o\"></i> TechCrunch\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">This Card is Doing a Full Rotation on Hover...</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDo more...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou can read this article or share it with your friends and family on different networks...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"footer text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-rose btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate bg-rose\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i> Dribbble\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\"Dribbble just acquired Crew, a very interesting startup...\"</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Tania Andrew</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 2.4K &middot;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">share</i> 45\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i> Dribbble\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\"Dribbble just acquired Crew, a very interesting startup...\"</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-white btn-fill btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-white btn-round btn-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">bookmark</i> Bookmark\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 id=\"manualRotatingCards\">Manual Rotating Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container manual-flip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social text-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-newspaper-o\"></i> Manual Rotating Card\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\"This card is doing a full rotation, click on the rotate button\"</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-success btn-fill btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Rotate...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDo more...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou can read this article or share it with your friends and family on different networks...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-rose btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-twitter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-dribbble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-facebook\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-link btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Back...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container manual-flip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front front-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg');\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category\">Full Background Card</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">This card is doing a full rotation, click on the rotate button</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-danger btn-fill btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Rotate...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back back-background\" style=\"background-image: url('/assets/images/image_placeholder.jpg');\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tManage Post\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">As an Admin, you have shortcuts to edit, view or delete the posts.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-info btn-just-icon btn-fill btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-success btn-just-icon btn-fill btn-round btn-wd\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mode_edit</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-just-icon btn-fill btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-success btn-fill btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Back...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotating-card-container manual-flip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-rotate bg-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">receipt</i> Manual Rotating Card\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\"This card is doing a full rotation, click on the rotate button\"</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-white btn-fill btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Rotate...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDo more...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou can read this article or share it with your friends and family on different networks...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-round\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">subject</i> Read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-round btn-white\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-white btn-round btn-rotate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">refresh</i> Back...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END MORPHING CARDS      *********      -->\n\t\t\t\t\t\t\t<!---    *********    DYNAMIC COLORED SHADOWS   *******      -->\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2 id=\"coloredShadows\">Dynamic Shadows&#x2122;</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Material Design is coming with the famous colored shadows. That means each image from the cards is getting an unique color shadow. You don&apos;t have to do anything to activate them, just enjoy the new look of your website.</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-warning\">Dynamic Shadows</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">The image from this card is getting a yellow shadow</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-rose\">Dynamic Shadows</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">The image from this card is getting a pink shadow</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Dynamic Shadows</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">The image from this card is getting a blue shadow</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!---    *********   END  DYNAMIC COLORED SHADOWS   *******      -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section-white\">\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Plain Cards</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis Summer Will be Awesome\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Fashion</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\"></i> Twitter\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">&quot;You Don&apos;t Have to Sacrifice Joy to Build a Fabulous Business and Life&quot;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stats\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/avatar.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Tania Andrew</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i> 2.4K &#xB7;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">share</i> 45\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-success\">Legal</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">5 Common Legal Mistakes That Can Trip-Up Your Startup</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/marc.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Mike John</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> 5 min read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-blog card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">trending_up</i> Trending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">To Grow Your Business Start Focusing on Your Employees</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/faces/marc.jpg\" alt=\"...\" class=\"avatar img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Mike John</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stats ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">schedule</i> 5 min read\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-category card-category-social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-newspaper-o\"></i> The Next Web\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">&quot;Focus on Your Employees&quot;</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-stats justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-white btn-round\">Read Article</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END BLOG CARDS      *********      -->\n\t\t\t\t\t\t\t<!--     *********    PROFILE CARDS     *********      -->\n\t\t\t\t\t\t\t<div class=\"cards\">\n\t\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTania Andrew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-info\">Web Designer</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header card-header-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/image_placeholder.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Alec Thompson</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-just-icon btn-google btn-round\"><i class=\"fa fa-google\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-profile card-plain\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img\" src=\"/assets/images/faces/marc.jpg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Alec Thompson</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDon&apos;t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is...\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-info btn-round\">Follow</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--     *********    END PROFILE CARDS      *********      -->\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--         end cards         -->\n\t\t\t<div class=\"section cd-section\" id=\"javascriptComponents\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t<h2>Javascript components</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 modals -->\n\t\t\t\t\t\t\t<div class=\"row\" id=\"modals\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Modal</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block  btn-round  \" data-toggle=\"modal\" data-target=\"#myModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">library_books</i> Classic\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block btn-round\" data-toggle=\"modal\" data-target=\"#noticeModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">info_outline</i> Notice\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block btn-round\" data-toggle=\"modal\" data-target=\"#smallAlertModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">notifications</i> Small alert\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block btn-round\" data-toggle=\"modal\" data-target=\"#loginModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">account_circle</i> Login\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block btn-round\" data-toggle=\"modal\" data-target=\"#signupModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">assignment</i> SignUp\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Datetime Picker</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label-control\">Datetime Picker</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" value=\"10/05/2016\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label-control\">Date Picker</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datepicker\" value=\"10/10/2016\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label-control\">Time Picker</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control timepicker\" value=\"14:00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Popovers</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"popover\" data-placement=\"left\" title=\"Popover on left\" data-content=\"Here will be some very useful information about his popover. Here will be some very useful information about his popover.\" data-container=\"body\">On left</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"popover\" data-placement=\"top\" title=\"Popover on top\" data-content=\"Here will be some very useful information about his popover.\" data-container=\"body\">On top</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"popover\" data-placement=\"bottom\" title=\"Popover on bottom\" data-content=\"Here will be some very useful information about his popover.\" data-container=\"body\">On bottom</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"popover\" data-placement=\"right\" title=\"Popover on right\" data-content=\"Here will be some very useful information about his popover.\" data-container=\"body\">On right</button>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Tooltips</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\" data-container=\"body\">On left</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\" data-container=\"body\">On top</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\" data-container=\"body\">On bottom</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\" data-container=\"body\">On right</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end modals\t             -->\n\t\t\t\t\t\t\t<!--                 collapse -->\n\t\t\t\t\t\t\t<div id=\"collapse\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Collapse</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"accordion\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollapsible Group Item #1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollapsible Group Item #2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-collapse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollapsible Group Item #3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--                 end collapse -->\n\t\t\t\t\t\t\t<div class=\"space-50\"></div>\n\t\t\t\t\t\t\t<!-- \t            file uploader -->\n\t\t\t\t\t\t\t<div id=\"file-uploader\">\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>File Uploader</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Regular Image</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput-new thumbnail img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/image_placeholder.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput-preview fileinput-exists thumbnail img-raised\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-raised btn-round btn-default btn-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fileinput-new\">Select image</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fileinput-exists\">Change</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"...\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Avatar</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput-new thumbnail img-circle img-raised\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/placeholder.jpg\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput-preview fileinput-exists thumbnail img-circle img-raised\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-raised btn-round btn-default btn-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fileinput-new\">Add Photo</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fileinput-exists\">Change</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"...\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>Simple Material Input</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group has-default form-file-upload form-file-simple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control inputFileVisible\" placeholder=\"Simple chooser...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"inputFileHidden\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-file-upload form-file-multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" multiple=\"\" class=\"inputFileHidden\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control inputFileVisible\" placeholder=\"Single File\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-fab btn-round btn-primary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">attach_file</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-file-upload form-file-multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" multiple=\"\" class=\"inputFileHidden\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control inputFileVisible\" placeholder=\"Multiple Files\" multiple>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-fab btn-round btn-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">layers</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t<h3>Carousel</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--         carousel  -->\n\t\t\t<div class=\"section\" id=\"carousel\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 mr-auto ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Carousel Card -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-raised card-carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"/assets/images/bg2.jpg\" alt=\"First slide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">location_on</i> Yellowstone National Park, United States\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"/assets/images/bg5.jpg\" alt=\"Second slide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">location_on</i> Somewhere Beyond, United States\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block w-100\" src=\"/assets/images/bg.jpg\" alt=\"Third slide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-caption d-none d-md-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">location_on</i> Yellowstone National Park, United States\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_left</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_right</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Carousel Card -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--         end carousel -->\n\t</div>\n\n\n<!-- Sart Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t\t\t\t<i class=\"material-icons\">clear</i>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-simple\">Nice Button</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-simple\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  End Modal -->\n";
      /***/
    },

    /***/
    75410: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    48628: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    31601: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    67792: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    52361: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    94616: function _() {
      /* (ignored) */

      /***/
    },

    /***/
    75042: function _() {
      /* (ignored) */

      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map