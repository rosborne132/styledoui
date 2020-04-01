import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { GlobalStyle } from '../src/lib/shared/global'

addDecorator(withA11y)
addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
))
