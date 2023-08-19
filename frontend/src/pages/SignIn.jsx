import React from "react";
import "./SignIn.css";
import TextInput from "../components/TextInput";

const SignIn = () => {
  return (
    <div className="boxContainer">
      <div className="signInBox">
        <div className="signInContainer">
                  <h2>Sign In</h2>
                  <TextInput/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
