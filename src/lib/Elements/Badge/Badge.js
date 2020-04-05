import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { background, color, typography } from '../../shared/styles'

const BadgeWrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    font-size: 11px;
    line-height: 12px;
    padding: 4px 12px;
    border-radius: 3em;
    font-weight: ${typography.weight.bold};
    svg {
        height: 12px;
        width: 12px;
        margin-right: 4px;
        margin-top: -2px;
    }
    ${props =>
        props.status === 'positive' &&
        css`
            color: ${color.positive};
            background: ${background.positive};
        `};
    ${props =>
        props.status === 'negative' &&
        css`
            color: ${color.negative};
            background: ${background.negative};
        `};
    ${props =>
        props.status === 'warning' &&
        css`
            color: ${color.warning};
            background: ${background.warning};
        `};
    ${props =>
        props.status === 'error' &&
        css`
            color: ${color.lightest};
            background: ${color.negative};
        `};
    ${props =>
        props.status === 'neutral' &&
        css`
            color: ${color.dark};
            background: ${color.mediumlight};
        `};
`

export const Badge = ({ ...props }) => (
    <BadgeWrapper {...props} data-testid="badge" />
)

Badge.propTypes = {
    status: PropTypes.oneOf([
        'positive',
        'negative',
        'neutral',
        'error',
        'warning'
    ])
}

Badge.defaultProps = {
    status: 'neutral'
}
