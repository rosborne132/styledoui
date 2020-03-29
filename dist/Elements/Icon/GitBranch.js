"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgGitBranch(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "git-branch_svg__feather git-branch_svg__feather-git-branch"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 3v12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18,
    cy: 6,
    r: 3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 18,
    r: 3
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9a9 9 0 01-9 9"
  }));
}

var _default = SvgGitBranch;
exports["default"] = _default;