import React from 'react';
import './Form_input.scss'
function Form_input({handleChange, label, ...otherProps}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label && < label className={`${otherProps.value.length && 'shrink' } form-input-label`}> 
                {label}
                </label>
            }
        </div>
    );

    }
export default Form_input