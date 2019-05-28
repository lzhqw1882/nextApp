webpackHotUpdate("static/development/pages/edocument.js",{

/***/ "./pages/edocument/edocMain.js":
/*!*************************************!*\
  !*** ./pages/edocument/edocMain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _edoc_edoc01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edoc/edoc01 */ "./pages/edocument/edoc/edoc01.js");
/* harmony import */ var _edoc_edoc02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edoc/edoc02 */ "./pages/edocument/edoc/edoc02.js");
/* harmony import */ var _edoc_edoc03__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edoc/edoc03 */ "./pages/edocument/edoc/edoc03.js");






var Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;

var edocMain = function edocMain() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("1"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedPage = _useState2[0],
      setSelectedPage = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sider, {
    breakpoint: "lg",
    collapsedWidth: "0",
    onBreakpoint: function onBreakpoint(broken) {// console.log(broken);
    },
    onCollapse: function onCollapse(collapsed, type) {// console.log(collapsed, type);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: [selectedPage],
    onClick: function onClick(item) {
      return setSelectedPage(item.key);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "nav-text"
  }, "\uC804\uC790\uACB0\uC7AC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "video-camera"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "nav-text"
  }, "\uC5C5\uBB34\uC694\uCCAD")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "upload"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "nav-text"
  }, "\uC804\uC790\uBB38\uC11C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "nav-text"
  }, "\uACF5\uC9C0\uC0AC\uD56D")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    style: {
      margin: "24px 16px 0"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 24,
      background: "#fff",
      minHeight: 360
    }
  }, selectedPage === "1" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_edoc_edoc01__WEBPACK_IMPORTED_MODULE_3__["default"], null), selectedPage === "2" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_edoc_edoc02__WEBPACK_IMPORTED_MODULE_4__["default"], null), selectedPage === "3" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_edoc_edoc03__WEBPACK_IMPORTED_MODULE_5__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    style: {
      textAlign: "center"
    }
  }, "\uAE09\uC5EC\uBC15\uC0AC \uADF8\uB8F9\uC6E8\uC5B4")));
};

/* harmony default export */ __webpack_exports__["default"] = (edocMain);

/***/ }),

/***/ "./reducers/edocument01.js":
false

})
//# sourceMappingURL=edocument.js.805984abaa4193f30c50.hot-update.js.map