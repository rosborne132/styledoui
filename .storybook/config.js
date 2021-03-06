import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import { GlobalStyle } from '../src/lib/shared/global'

addDecorator(withA11y)
addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
))

// automatically import all files ending in *.stories.js
configure(
    [
        require.context('../src/lib', false, /index\.stories\.js/),
        require.context('../src/lib/Elements', true, /\.stories\.js$/)
    ],
    module
)
