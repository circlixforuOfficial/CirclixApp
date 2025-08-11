import React, { useState } from "react";
import RegisterInput from "../loginComponents/RegisterInput";
import SignInInput from "../loginComponents/SignInInput";

function Login() {
  const [registerLeft, setRegisterLeft] = useState("0px");
  const [signInLeft, setSignInLeft] = useState("400px");
  const [toggleBtn, setToggleBtn] = useState("Register");

  function RegisterSlideChange() {
    setRegisterLeft("0px");
    setSignInLeft("400px");
  }
  function SignInSlideChange() {
    setRegisterLeft("-400px");
    setSignInLeft("0px");
  }

  function changeBtn(e) {
    e.preventDefault();

    if (toggleBtn === "Register") {
      console.log("1");
      document.getElementById("signSlideBtn").classList.add("active");
      document.getElementById("regSlideBtn").classList.remove("active");
      setToggleBtn("SignIn");
      console.log("2");
      SignInSlideChange();
    } else if(toggleBtn === "SignIn") {
      console.log("3");
      document.getElementById("regSlideBtn").classList.add("active");
      document.getElementById("signSlideBtn").classList.remove("active");
      setToggleBtn("Register");
      console.log("4");
      RegisterSlideChange();
    }

    console.log(toggleBtn === "Register");
  }

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-content-center">
        <div className="d-flex flex-column justify-content-center align-self-center rounded-4 shadow-lg">
          {/*Toggle button */}

          <div className="selection">
            <ul
              className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
              id="pillNav2"
              role="tablist"
              style={{
                "--bs-nav-link-color": "var(--bs-white)",
                "--bs-nav-pills-link-active-color": "var(--bs-primary)",
                "--bs-nav-pills-link-active-bg": "var(--bs-white)",
              }}
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active rounded-5"
                  id="regSlideBtn"
                  onClick={() => RegisterSlideChange()}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Register
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-5"
                  id="signSlideBtn"
                  onClick={() => SignInSlideChange()}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
          {/*End fo toggle button code */}

          <div className="view-board d-flex justify-content-center overflow-hidden">
            {/*Register form*/}
            <div
              className="view-slide login-cards px-1 d-flex justify-content-center"
              style={{ left: registerLeft }}
            >
              <div className="d-flex flex-column w-75">
                <h1 className="display-5 text-body-emphasis justify-content-center mt-1 mb-1">
                  Welcome
                </h1>
                <div className="mb-4 mt-2">
                  <form>
                    <RegisterInput
                      inputId="floatingFName"
                      inputType="text"
                      labelText="First Name"
                    />
                    <RegisterInput
                      inputId="floatingLName"
                      inputType="text"
                      labelText="Last Name"
                    />
                    <RegisterInput
                      inputId="floatingDate"
                      inputType="Date"
                      labelText="Date Of Birth"
                    />
                    <RegisterInput
                      inputId="floatingNICNumber"
                      inputType="text"
                      labelText="NIC Number"
                    />
                    <RegisterInput
                      inputId="floatingAddress"
                      inputType="text"
                      labelText="Address"
                    />
                    <RegisterInput
                      inputId="floatingTPNumber"
                      inputType="text"
                      labelText="TP Number"
                    />
                    <RegisterInput
                      inputId="floatingEmail"
                      inputType="text"
                      labelText="Email"
                    />
                    <RegisterInput
                      inputId="floatingPassword"
                      inputType="password"
                      labelText="Password"
                    />
                    <RegisterInput
                      inputId="floatingConfirmPassword"
                      inputType="password"
                      labelText="Confirm Password"
                    />

                    <div className="my-2">
                      <p className="mb-0 fw-light">
                        Already have an account ?{" "}
                        <button onClick={(e) => changeBtn(e)} className="btn border-0 ps-1 pt-0 text-primary text-decoration-underline">
                          SignIn
                        </button>{" "}
                        <p className="mb-0 fw-light">
                        Back to{" "}
                        <button formAction="/" className="btn border-0 pt-0 ps-1 pe-1 text-primary text-decoration-underline">
                          Home page
                        </button>
                        {"?"}
                      </p>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn bg-white border-primary btn-md px-3 mb-2 me-5">
                        Reset
                      </button>
                      <button className="btn bg-primary btn-md px-3 mb-2 me-2">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*Sign up form*/}
            <div
              className="view-slide login-cards py-1 px-1 d-flex justify-content-center"
              style={{ left: signInLeft }}
            >
              <div className="d-flex flex-column">
                <h1 className="display-5 lh-1 text-body-emphasis justify-content-center mt-5">
                  Welcome Back
                </h1>
                <div className="my-2 mx-4 py-5">
                  <form>
                    <SignInInput
                      inputId="floatingNICNumber"
                      inputType="text"
                      labelText="NIC Number"
                    />
                    <SignInInput
                      inputId="floatingPassword"
                      inputType="password"
                      labelText="Password"
                    />

                    <div className="mb-3">
                      <p className="mb-0 fw-light">
                        Don't have an account ?{" "}
                        <button onClick={(e) => changeBtn(e)} className="btn border-0 pt-1 text-primary text-decoration-underline">
                          Register
                        </button>
                      </p>
                      <p className="mb-0 fw-light">
                        Back to{" "}
                        <button formAction="/" className="btn border-0 pt-0 ps-1 pe-1 text-primary text-decoration-underline">
                          Home page
                        </button>
                        {"?"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn bg-white border-primary btn-md px-3 mb-2 me-5">
                        Reset
                      </button>
                      <button className="btn bg-primary btn-md px-3 mb-2 me-2">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
