"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgChevronsRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "chevrons-right_svg__feather chevrons-right_svg__feather-chevrons-right"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 17l5-5-5-5M6 17l5-5-5-5"
  }));
}

var _default = SvgChevronsRight;
exports["default"] = _default;