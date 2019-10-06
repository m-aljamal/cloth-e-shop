import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from  '../../assets/crown.svg'
import './Header-style.scss'
import {auth} from '../../firebase/firebase.utils'
function Header({currentUser}) {
    
    return ( 
        <div className='Header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {currentUser ? 
                // signOut is pruvided from auth lipraray 
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>}
            </div>

        </div>
    );

    }
export default Header