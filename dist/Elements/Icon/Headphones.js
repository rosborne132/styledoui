"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgHeadphones(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "headphones_svg__feather headphones_svg__feather-headphones"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 18v-6a9 9 0 0118 0v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
  }));
}

var _default = SvgHeadphones;
exports["default"] = _default;