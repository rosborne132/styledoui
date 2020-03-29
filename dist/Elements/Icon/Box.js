'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgBox(props) {
    return /*#__PURE__*/ React.createElement(
        'svg',
        Object.assign(
            {
                width: 24,
                height: 24,
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                className: 'box_svg__feather box_svg__feather-box'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12'
        })
    )
}

var _default = SvgBox
exports['default'] = _default