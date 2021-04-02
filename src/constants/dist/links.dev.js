"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  title: "home",
  path: "/"
}, {
  title: "about",
  path: "/about"
}, {
  title: "attorneys",
  path: "/attorneys",
  subNav: [{
    title: "Message 1",
    path: "/attorneys/william-T-counos"
  }, {
    title: "Message 2",
    path: "/attorneys/jesse-D-bugbee"
  }, {
    title: "Message 1",
    path: "/attorneys/shane-K-clark"
  }]
}, {
  title: "contact",
  path: "/contact"
}]; // export default [
//   {
//     title: "home",
//     url: `/`,
//   },
//   {
//     title: "about",
//     url: `/about/`,
//   },
//   {
//     title: "attorneys",
//     subnav: [
//       { title: "William T. Counos, II", url: `/attorneys/william-T-counos` },
//       {
//         title: "Jesse D. Bugbee",
//         url: `/attorneys/jesse-D-bugbee`,
//       },
//       { title: "Shane K. Clark", url: `/attorneys/shane-K-clark` },
//     ],
//   },
//   {
//     title: "contact",
//     url: `/contact/`,
//   },
// ]

exports["default"] = _default;