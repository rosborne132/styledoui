import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Icon } from './Icon'
import { icons } from '../../shared/icons'

const Key = styled.div`
    color: #666;
    margin-left: 10px;
`

const Item = styled.li`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex: 0 1 20%;
    min-width: 120px;
    padding: 20px;
    ${props =>
        props.minimal &&
        css`
            flex: none;
            min-width: auto;
            padding: 0;
            background: #fff;
            border: 1px solid #666;
        `};
`

const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
`

export default {
    title: 'Design System|Icon',
    component: Icon,
    decorators: [withKnobs]
}

export const labels = () => (
    <Fragment>
        There are {Object.keys(icons).length} icons
        <List>
            {Object.keys(icons).map(key => (
                <Item key={key}>
                    <Icon icon={key} aria-hidden />
                    <Key>{key}</Key>
                </Item>
            ))}
        </List>
    </Fragment>
)

export const noLabels = () => (
    <List>
        {Object.keys(icons).map(key => (
            <Item minimal key={key}>
                <Icon icon={key} size="l2" aria-label={key} />
            </Item>
        ))}
    </List>
)

noLabels.story = {
    name: 'No Labels'
}

export const inline = () => (
    <Fragment>
        this is an inline{' '}
        <Icon
            icon="facehappy"
            aria-label="Happy face"
            block={boolean('Display Block')}
        />{' '}
        icon (default)
    </Fragment>
)

inline.story = {
    name: 'Inline Icons'
}
