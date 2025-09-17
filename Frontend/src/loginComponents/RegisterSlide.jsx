import { React, useState } from "react";
import axios from "axios";

import RegisterInput from "./RegisterInput";

function RegisterSlide(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    DOB: "",
    tpNumber: "",
    email: "",
    nic: "",
    password: "",
    image: null,
  });

  {
    /*Register data handle*/
  }

  const handleData = (event) => {
    if (!event || !event.target) return;

    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signUp",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const registraionResponse = response.data;

      if (registraionResponse) {
        alert("Login successful!");
        alert("please SignIn using NIC and Password.");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response.data || error.message
      );
      alert("Registration failed! Please try again.");
    }
  };
  {
    /*Reset inputs */
  }
  function resetInputs(e) {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      DOB: "",
      tpNumber: "",
      email: "",
      nic: "",
      password: "",
      image: null,
    });
    document.getElementById("imgInput").form.reset();
  }

  return (
    <>
      <div className="d-flex flex-column w-75">
        <h1 className="display-5 text-body-emphasis justify-content-center mt-1 mb-1">
          Welcome
        </h1>
        <div className="mb-4 mt-2">
          <form>
            <RegisterInput
              name="firstName"
              value={formData.firstName}
              inputId="floatingFName"
              labelId="labelFName"
              inputType="text"
              labelText="First Name"
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingLName"
              labelId="labelLName"
              inputType="text"
              labelText="Last Name"
              name="lastName"
              value={formData.lastName}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingDate"
              labelId="labelDate"
              inputType="Date"
              labelText="Date Of Birth"
              name="DOB"
              value={formData.DOB}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingNICNumber"
              labelId="labelNICNumber"
              inputType="text"
              labelText="NIC Number"
              name="nic"
              value={formData.nic}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingAddress"
              labelId="labelAddress"
              inputType="text"
              labelText="Address"
              name="address"
              value={formData.address}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingTPNumber"
              labelId="labelTPNumber"
              inputType="text"
              labelText="TP Number"
              name="tpNumber"
              value={formData.tpNumber}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingEmail"
              labelId="labelEmail"
              inputType="text"
              labelText="Email"
              name="email"
              value={formData.email}
              onSendData={handleData}
            />
            <input
              type="file"
              accept="image/*"
              className="border-5"
              id="imgInput"
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  image: e.target.files[0], // store the File object
                }));
              }}
            />
            <RegisterInput
              inputId="floatingPassword"
              labelId="labelPassword"
              inputType="password"
              labelText="Password"
              name="password"
              value={formData.Password}
              onSendData={handleData}
            />
            <RegisterInput
              inputId="floatingConfirmPassword"
              labelId="labelConfirmPassword"
              inputType="password"
              labelText="Confirm Password"
              onSendData={handleData}
            />

            <div className="my-2">
              <p className="mb-0 fw-light">
                Already have an account ?{" "}
                <button
                  onClick={(e) => props.slideChange(e)}
                  className="btn border-0 ps-1 pt-0 text-primary text-decoration-underline"
                >
                  SignIn
                </button>{" "}
              </p>
              <p className="mb-0 fw-light">
                Back to{" "}
                <button
                  formAction="/"
                  className="btn border-0 pt-0 ps-1 pe-1 text-primary text-decoration-underline"
                >
                  Home page
                </button>
                {"?"}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={(e) => resetInputs(e)}
                className="btn bg-white border-primary btn-md px-3 mb-2 me-5"
              >
                Reset
              </button>
              <button
                onClick={handleRegister}
                className="btn bg-primary btn-md px-3 mb-2 me-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterSlide;
