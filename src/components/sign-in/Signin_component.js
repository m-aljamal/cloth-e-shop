import React, { useState } from "react";
import Form_input from "../form-input/Form_input";
import './Signin_component.scss'
import Button from '../custom-btton/Button'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
function Signin_component() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail("");
      setpassword("");
    } catch (error) {
      console.log(error)
    }
  
  };
  return (
    <div className="signin">
      <h2>I already have an accout</h2>
      <span>Sign in with your eamil and password</span>
      <form onSubmit={handleSubmit}>
        <Form_input
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={e => setEmail(e.target.value)}
        />

        <Form_input
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={e => setpassword(e.target.value)}
        />
        <div className='buttons'>
        <Button type="submit" >sign in</Button>
        <Button onClick={signInWithGoogle} isGoogleSignIn>
            sign in with Google
            </Button>
            </div>
      </form>
    </div>
  );
}
export default Signin_component;
