import React from "react";

function SignInInput(props) {

  const sendData = (e) => {
    props.onSendData(e.target.value); 
  };
  
  return (
    <>
      <div className="d-flex flex-column mb-4 form-floating">
        <input
          className="form-control"
          id={props.inputId}
          placeholder={props.labelText}
          type={props.inputType}
          onChange={sendData}
          value={props.value}
        />
        <label htmlFor={props.inputId} id="labelId">{props.labelText}</label>
      </div>
    </>
  );
}

export default SignInInput;
