import React from 'react'
import {SpinnerContainer , SpinnerOverlay} from './withLoading-styled.jsx'

const withSpinner = WrappedComponent => {
    const spinner = ({isLoading , ...otherProps}) => {
        return isLoading ? 
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        : <WrappedComponent {...otherProps} />
    }
    return spinner
};

export default  withSpinner ;