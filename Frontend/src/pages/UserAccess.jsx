import React, { useState} from "react";
import SignInSlide from "../loginComponents/SignInSlide";
import RegisterSlide from "../loginComponents/RegisterSlide";

function UserAccess() {

  {
    /*slide change use states  */
  }
  const [registerLeft, setRegisterLeft] = useState("0px");
  const [signInLeft, setSignInLeft] = useState("400px");
  const [toggleBtn, setToggleBtn] = useState("Register");

  {
    /*Slide movement functions*/
  }
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
    } else if (toggleBtn === "SignIn") {
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
              <RegisterSlide slideChange={changeBtn}/>
            </div>
            {/*Sign up form*/}
            <div
              className="view-slide login-cards py-1 px-1 d-flex justify-content-center"
              style={{ left: signInLeft }}
            >
              <SignInSlide slideChange={changeBtn}/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAccess;
