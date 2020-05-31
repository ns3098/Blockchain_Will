module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/headers/Header.js":
/*!**************************************!*\
  !*** ./components/headers/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const divStyle = {
      fontSize: '1.7em'
    };

    if (this.props.a === 'h') {
      return __jsx("div", null, __jsx("p", null, "Hello"));
    } else {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        style: {
          marginTop: '0px'
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/"
      }, __jsx("a", {
        className: "item",
        style: divStyle
      }, __jsx("i", {
        className: "file code icon"
      }), "EtherWill")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
        position: "right"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/help"
      }, __jsx("a", {
        className: "item"
      }, "Help"))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layouts/Layout.js":
/*!**************************************!*\
  !*** ./components/layouts/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headers_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../headers/Header */ "./components/headers/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_headers_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children);
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var maticjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! maticjs */ "maticjs");
/* harmony import */ var maticjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(maticjs__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







let t = '';

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isLoggedin: false,
      account: null,
      balance: ''
    });

    _defineProperty(this, "handleSubmit", async e => {
      e.preventDefault();

      if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(async permission => {
          if (permission === 'granted') {
            try {
              const torus = new t({
                buttonPosition: "bottom-left"
              });
              await torus.init({
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
              });
              await torus.login();
              const web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(torus.provider);
              const maticObj = new maticjs__WEBPACK_IMPORTED_MODULE_5___default.a({
                maticProvider: web3.eth.currentProvider,
                parentProvider: web3.eth.currentProvider
              });
              let accounts = await web3.eth.getAccounts();
              window.maticObj = maticObj;
              window.torus = torus;
              window.web3 = web3;

              if (accounts[0]) {
                this.state.isLoggedIn = true;
              }

              window.account = accounts[0];
              _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute('/' + window.account);
            } catch (error) {
              console.log("Error ", error);
            }
          } else {
            alert("Application not accessible");
          }
        });
      } else {
        console.log("Wrong");
      }
    });
  }

  async componentDidMount() {
    t = __webpack_require__(/*! @toruslabs/torus-embed */ "@toruslabs/torus-embed").default;
    console.log(t);
  }

  render() {
    return __jsx("div", {
      style: {
        backgroundColor: 'black',
        height: '1000px'
      }
    }, __jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      icon: true,
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "file code",
      circular: true,
      style: {
        color: 'white'
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Content, {
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      placeholder: true,
      style: {
        marginTop: 'auto',
        backgroundColor: 'black'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      stackable: true,
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      icon: true,
      style: {
        color: 'white'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "hand point down"
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "green",
      onClick: this.handleSubmit
    }, "Log In"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/help', '/help').add('/:address', '/will/home').add('/:address/new', '/will/new').add('/:address/role', '/will/role').add('/:address/help', '/will/help').add('/:address/selfdestruct', '/will/selfdestruct').add('/will/:address', '/will/show').add('/:address/executeWill/:address', '/will/executeWill');
module.exports = routes;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nitin\Desktop\Blockchain-project\Blockchain-project\EtherWills\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@toruslabs/torus-embed":
/*!*****************************************!*\
  !*** external "@toruslabs/torus-embed" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/torus-embed");

/***/ }),

/***/ "maticjs":
/*!**************************!*\
  !*** external "maticjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("maticjs");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map