import React from "react";

function RegisterInput(props) {

  const sendData = (e) => {
    props.onSendData(e); 
  }; 

  return (
    <>
      <div className="d-flex flex-column mb-1 me-3 form-floating">
        <input
          className="form-control custom-form-control"
          id={props.inputId}
          placeholder={props.labelText}
          type={props.inputType}
          name={props.name}
          maxLength={props.maxLength}//pass props
          onChange={sendData}
          value={props.value}
        />
        <label htmlFor={props.inputId} className="py-2">
          {props.labelText}
        </label>
      </div>
    </>
  );
}

export default RegisterInput;
