import React from 'react';
import './Button.scss'
function Button({children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button className={`Button
         ${inverted && 'inverted'}
          ${isGoogleSignIn && 'google-sign-in'}`}
           {...otherProps}>
            {/* children get the value provided in the button when it used */}
            {children}
        </button>
    );
    }

export default Button