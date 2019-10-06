import React from "react";
import Signin_component from "../../components/sign-in/Signin_component";
import Sign_up from '../../components/sign-up/Sign_up'
import './SignIn.scss'
function SignIn() {
  return (
    <div className="signIn">
      <Signin_component />
      <Sign_up/>
    </div>
  );
}

export default SignIn;
