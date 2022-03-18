import React from 'react'
import PropTypes, { resetWarningCache } from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const ListItem = ({ children, ...rest}) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
        
)
List.propTypes = {
    children: PropTypes.node.isRequired
}