import React from "react";
import "./textInput.css";
import { HiOutlineMail } from "react-icons/hi";
const TextInput = () => {
  return (
    <div className="inputComponent">
      <p className="inputName">First Name</p>
      <div className="inputLine">
          <HiOutlineMail className="icon" />
        <input className="input" type="text" placeholder="Enter First Name" />
      </div>
    </div>
  );
};

export default TextInput;
