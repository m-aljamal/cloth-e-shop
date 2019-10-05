import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from  '../../assets/crown.svg'
import './Header-style.scss'
function Header() {
    return (
        <div className='Header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>Contact</Link>
            </div>

        </div>
    );

    }
export default Header