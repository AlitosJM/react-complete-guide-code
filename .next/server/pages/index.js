(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation */ "./components/layout/MainNavigation.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\layout\\Layout.js";



function Layout(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNavigation__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\layout\\MainNavigation.js";



function MainNavigation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),
      children: "React Meetups"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: "All Meetups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/new-meetup",
            children: "Add New Meetup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

/***/ }),

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\meetups\\MeetupItem.js";




function MeetupItem(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  function showDetailHandler() {
    router.push('/' + props.id);
  }

  ;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: showDetailHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
    children: props.meetups.map(meetup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\pages\\index.js";



const DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
  address: 'Calle Falsa 123, Col. Sal si puedes',
  desciption: 'This is a dummuy content for the first meetup'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
  address: 'Calle Falsa 456, Col. Sal si puedes',
  desciption: 'This is a dummuy content for the second meetup'
}];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect( () => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__.default, {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }, this);
}

; // export async function getServerSideProps(context){
//     // fetch data from an API
//     const req = context.req;
//     const res = context.res;
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }, 
//     };
// };

async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}
;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main": "Layout_main__2Mwq5"
};


/***/ }),

/***/ "./components/layout/MainNavigation.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/MainNavigation.module.css ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "MainNavigation_header__t8YPG",
	"logo": "MainNavigation_logo__Qwpy5",
	"active": "MainNavigation_active__sxu85"
};


/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsImNsYXNzZXMiLCJjaGlsZHJlbiIsIk1haW5OYXZpZ2F0aW9uIiwiTWVldHVwSXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxIYW5kbGVyIiwicHVzaCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJNZWV0dXBMaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsIkNhcmQiLCJEVU1NWV9NRUVUVVBTIiwiZGVzY2lwdGlvbiIsIkhvbWVQYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUVDLGdFQUFqQjtBQUFBLGdCQUFnQ0QsS0FBSyxDQUFDRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFRCwrREFBZUgsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7O0FBRUEsU0FBU0ksY0FBVCxHQUEwQjtBQUV4QixzQkFDRTtBQUFRLGFBQVMsRUFBRUYsMEVBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHdFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtB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O0FBS0lPLFlBQVUsRUFBRTtBQUxoQixDQVJrQixDQUF0Qjs7QUFpQkEsU0FBU0MsUUFBVCxDQUFtQnBCLEtBQW5CLEVBQXlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQVEsOERBQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ2M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBQ0g7O0FBQUEsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLGVBQWVPLGNBQWYsR0FBK0I7QUFDbEM7QUFDQSxTQUFPO0FBQ0hyQixTQUFLLEVBQUM7QUFDRmMsYUFBTyxFQUFFSTtBQURQLEtBREg7QUFJSEksY0FBVSxFQUFFO0FBSlQsR0FBUDtBQU1IO0FBQUE7QUFFRCwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbk5hdmlnYXRpb24gZnJvbSAnLi9NYWluTmF2aWdhdGlvbic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNYWluTmF2aWdhdGlvbiAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+UmVhY3QgTWVldHVwczwvZGl2PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+QWxsIE1lZXR1cHM8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvbmV3LW1lZXR1cCc+QWRkIE5ldyBNZWV0dXA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XHJcbiIsImltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBJdGVtKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dEZXRhaWxIYW5kbGVyKCl7XHJcbiAgICByb3V0ZXIucHVzaCgnLycrcHJvcHMuaWQpOyBcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBJdGVtO1xyXG4iLCJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXHJcbiAgICAgICAgPE1lZXR1cEl0ZW1cclxuICAgICAgICAgIGtleT17bWVldHVwLmlkfVxyXG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cclxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17bWVldHVwLnRpdGxlfVxyXG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdDYWxsZSBGYWxzYSAxMjMsIENvbC4gU2FsIHNpIHB1ZWRlcycsXHJcbiAgICAgICAgZGVzY2lwdGlvbjogJ1RoaXMgaXMgYSBkdW1tdXkgY29udGVudCBmb3IgdGhlIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdDYWxsZSBGYWxzYSA0NTYsIENvbC4gU2FsIHNpIHB1ZWRlcycsXHJcbiAgICAgICAgZGVzY2lwdGlvbjogJ1RoaXMgaXMgYSBkdW1tdXkgY29udGVudCBmb3IgdGhlIHNlY29uZCBtZWV0dXAnXHJcbiAgICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSAocHJvcHMpe1xyXG4gICAgLy8gY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuICAgIC8vIH0sIFtdKTtcclxuICAgIHJldHVybiAoPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30+PC9NZWV0dXBMaXN0PiApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuLy8gICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcclxuLy8gICAgICAgICB9LCBcclxuLy8gICAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTBcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiTGF5b3V0X21haW5fXzJNd3E1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJNYWluTmF2aWdhdGlvbl9oZWFkZXJfX3Q4WVBHXCIsXG5cdFwibG9nb1wiOiBcIk1haW5OYXZpZ2F0aW9uX2xvZ29fX1F3cHk1XCIsXG5cdFwiYWN0aXZlXCI6IFwiTWFpbk5hdmlnYXRpb25fYWN0aXZlX19zeHU4NVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9