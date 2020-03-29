'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPlusSquare(props) {
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
                className:
                    'plus-square_svg__feather plus-square_svg__feather-plus-square'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 3,
            y: 3,
            width: 18,
            height: 18,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 8v8M8 12h8'
        })
    )
}

var _default = SvgPlusSquare
exports['default'] = _default