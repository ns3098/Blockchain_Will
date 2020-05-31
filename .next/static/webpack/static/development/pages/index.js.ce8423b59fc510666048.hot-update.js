webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3 */ "../../../../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var maticjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! maticjs */ "./node_modules/maticjs/dist/matic.umd.js");
/* harmony import */ var maticjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(maticjs__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var t = '';

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      isLoggedin: false,
      account: null,
      balance: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function _callee2(e) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(function _callee(permission) {
                  var torus, web3, maticObj, accounts;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(permission === 'granted')) {
                            _context.next = 25;
                            break;
                          }

                          _context.prev = 1;
                          torus = new t({
                            buttonPosition: "bottom-left"
                          });
                          _context.next = 5;
                          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(torus.init({
                            buildEnv: "production",
                            enableLogging: true,
                            network: {
                              host: "https://alpha.ethereum.matic.network/"
                            },
                            showTorusButton: true,
                            enabledVerifiers: {
                              facebook: false,
                              reddit: false,
                              twitch: false,
                              discord: false
                            }
                          }));

                        case 5:
                          _context.next = 7;
                          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(torus.login());

                        case 7:
                          web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(torus.provider);
                          maticObj = new maticjs__WEBPACK_IMPORTED_MODULE_13___default.a({
                            maticProvider: web3.eth.currentProvider,
                            parentProvider: web3.eth.currentProvider
                          });
                          _context.next = 11;
                          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(web3.eth.getAccounts());

                        case 11:
                          accounts = _context.sent;
                          window.maticObj = maticObj;
                          window.torus = torus;
                          window.web3 = web3;

                          if (accounts[0]) {
                            _this.state.isLoggedIn = true;
                          }

                          window.account = accounts[0];
                          _routes__WEBPACK_IMPORTED_MODULE_11__["Router"].pushRoute('/' + window.account);
                          _context.next = 23;
                          break;

                        case 20:
                          _context.prev = 20;
                          _context.t0 = _context["catch"](1);
                          console.log("Error ", _context.t0);

                        case 23:
                          _context.next = 26;
                          break;

                        case 25:
                          alert("Application not accessible");

                        case 26:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, null, null, [[1, 20]]);
                });
              } else {
                console.log("Wrong");
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              t = __webpack_require__(/*! @toruslabs/torus-embed */ "./node_modules/@toruslabs/torus-embed/index.js")["default"];
              console.log(t);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          backgroundColor: 'black',
          height: '1000px'
        }
      }, __jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h1",
        icon: true,
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: "file code",
        circular: true,
        style: {
          color: 'white'
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"].Content, {
        style: {
          color: 'white'
        }
      }, "EtherWills")), __jsx("p", {
        style: {
          fontSize: '2em',
          color: 'white',
          marginLeft: '12em',
          marginRight: '4em',
          marginTop: '4em'
        },
        textAlign: "center"
      }, "Please log in to create an EtherWill")), __jsx("div", {
        style: {
          marginTop: '125px'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        placeholder: true,
        style: {
          marginTop: 'auto',
          backgroundColor: 'black'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
        stackable: true,
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        icon: true,
        style: {
          color: 'white'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: "hand point down"
      })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "green",
        onClick: this.handleSubmit
      }, "Log In"))))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ce8423b59fc510666048.hot-update.js.map