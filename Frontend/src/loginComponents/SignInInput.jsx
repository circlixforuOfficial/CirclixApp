import React from "react";

function SignInInput(props) {
  return (
    <>
      <div className="d-flex flex-column mb-4 form-floating">
        <input
          className="form-control"
          id={props.inputId}
          placeholder={props.labelText}
          type={props.inputType}
        />
        <label for="floatingInput">{props.labelText}</label>
      </div>
    </>
  );
}

export default SignInInput;
