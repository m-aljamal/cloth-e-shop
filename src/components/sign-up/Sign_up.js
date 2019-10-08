import React,{useState , memo} from 'react';
import Form_input from '../form-input/Form_input'
import Button from '../custom-btton/Button'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './Sign_up.scss'

function Sign_up() {
    const [displayName, setDisplayName] = useState('')
    const [email, setemail ] = useState('')
    const [password, setpassword] =useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

const handleSubmit = async (e) =>{
    e.preventDefault()
    if(password !== confirmPassword){
        alert('password do not match')
        return
    }
    try{
       // create user email and pass 
       const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})
      setDisplayName('')
      setemail('')
      setconfirmPassword('')
      setpassword('')
    }catch(error){
        console.error(error)
    }
}
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a accout</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <Form_input
                type='text'
                name='displayName'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                label='Display Name'
                required
                />

                <Form_input
                type='email'
                name='email'
                label='Email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                />

                <Form_input
                label="Password"
                type='password'
                name='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                />

                <Form_input
                type='password'
                label="Confirm Password"
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                required
                /> 
                <Button type='submit'>SIGN UP</Button>
            </form>
        </div>
    );

    }
export default memo (Sign_up)