(function() {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\components\\meetups\\MeetupDetail.js";


function MeetupDetail({
  image,
  title,
  address,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: image,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("address", {
      children: address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");

var _jsxFileName = "C:\\Users\\JMAT\\AtomProjects\\react-complete-guide-code\\pages\\[meetupId]\\index.js";



function MeetupDetails() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__.default, {
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    title: "First MeetUp",
    address: "Calle Falsa 123, col. Sal si Puedes",
    description: "A info for this first meetup..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

;
async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{
      params: {
        meetupId: 'm1'
      }
    }, {
      params: {
        meetupId: 'm2'
      }
    }]
  };
}
async function getStaticProps(context) {
  // fetch data from an API
  // running in built time
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: "First MeetUp",
        address: "Calle Falsa 123, col. Sal si Puedes",
        description: "A info for this first meetup..."
      }
    }
  };
}
;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


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
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY2xhc3NlcyIsIk1lZXR1cERldGFpbHMiLCJnZXRTdGF0aWNQYXRocyIsImZhbGxiYWNrIiwicGF0aHMiLCJwYXJhbXMiLCJtZWV0dXBJZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm1lZXR1cERhdGEiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUNDLE9BQUQ7QUFBUUMsT0FBUjtBQUFlQyxTQUFmO0FBQXdCQztBQUF4QixDQUF0QixFQUEyRDtBQUN2RCxzQkFDSTtBQUFTLGFBQVMsRUFBRUMsd0VBQXBCO0FBQUEsNEJBQ0k7QUFDSSxTQUFHLEVBQUVKLEtBRFQ7QUFFSSxTQUFHLEVBQUVDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSTtBQUFBLGdCQUFVQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0FBQUE7QUFFRCwrREFBZUosWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBLFNBQVNNLGFBQVQsR0FBd0I7QUFDcEIsc0JBQ0ksOERBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUMsZ0ZBRFY7QUFFSSxTQUFLLEVBQUMsY0FGVjtBQUdJLFdBQU8sRUFBQyxxQ0FIWjtBQUlJLGVBQVcsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7QUFBQTtBQUVNLGVBQWVDLGNBQWYsR0FBK0I7QUFDbEMsU0FBTTtBQUNGQyxZQUFRLEVBQUUsS0FEUjtBQUVGQyxTQUFLLEVBQUUsQ0FDSDtBQUNJQyxZQUFNLEVBQUM7QUFDSEMsZ0JBQVEsRUFBQztBQUROO0FBRFgsS0FERyxFQU1IO0FBQ0lELFlBQU0sRUFBQztBQUNIQyxnQkFBUSxFQUFDO0FBRE47QUFEWCxLQU5HO0FBRkwsR0FBTjtBQWdCSDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXNDO0FBQ3pDO0FBQ0E7QUFDQSxRQUFNRixRQUFRLEdBQUdFLE9BQU8sQ0FBQ0gsTUFBUixDQUFlQyxRQUFoQztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBLFNBQU87QUFDSEssU0FBSyxFQUFDO0FBQ0ZDLGdCQUFVLEVBQUU7QUFDUmhCLGFBQUssRUFBQyxnRkFERTtBQUVSaUIsVUFBRSxFQUFDUCxRQUZLO0FBR1JULGFBQUssRUFBQyxjQUhFO0FBSVJDLGVBQU8sRUFBQyxxQ0FKQTtBQUtSQyxtQkFBVyxFQUFDO0FBTEo7QUFEVjtBQURILEdBQVA7QUFZSDtBQUFBO0FBRUQsK0RBQWVFLGFBQWYsRTs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKHtpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGRlc2NyaXB0aW9ufSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGFkZHJlc3M+e2FkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsOyIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lZXR1cERldGFpbCBcclxuICAgICAgICAgICAgaW1hZ2U9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycgXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRmlyc3QgTWVldFVwXCJcclxuICAgICAgICAgICAgYWRkcmVzcz1cIkNhbGxlIEZhbHNhIDEyMywgY29sLiBTYWwgc2kgUHVlZGVzXCIgXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQSBpbmZvIGZvciB0aGlzIGZpcnN0IG1lZXR1cC4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIHJldHVybntcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICBtZWV0dXBJZDonbTEnICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICBtZWV0dXBJZDonbTInICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICAgIC8vIHJ1bm5pbmcgaW4gYnVpbHQgdGltZVxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuICAgIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOm1lZXR1cElkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJGaXJzdCBNZWV0VXBcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6XCJDYWxsZSBGYWxzYSAxMjMsIGNvbC4gU2FsIHNpIFB1ZWRlc1wiICxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlwiQSBpbmZvIGZvciB0aGlzIGZpcnN0IG1lZXR1cC4uLlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fQ184SVRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=