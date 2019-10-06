import React from 'react';
import './Button.scss'
function Button({children, ...otherProps}) {
    return (
        <button className='Button' {...otherProps}>
            {/* children get the value provided in the button when it used */}
            {children}
        </button>
    );
    }

export default Button