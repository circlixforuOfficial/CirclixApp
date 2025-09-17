import { React, useState } from "react";
import Icon from "../component/icon";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Email from "../assets/envelope-at-fill.svg";

function ContactSection() {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:circlixforu@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleReset = () => {
    setName("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div className="container px-5 py-5" id="featured-3">
        <div className="d-flex flex-row-reverse justify-content-lg-evenly">
          <div className="w-50 m-3 w-lg-75">
            <h2 id="scrollspyHeading5" className="display-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="w-25 form-label" htmlFor="">
                  Name
                </label>
                <input className="form-control" type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required/>
              </div>
              <div className="mb-2">
                <label className="w-25 form-label" htmlFor="">
                  Subject
                </label>
                <input className="form-control" type="text" value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required/>
              </div>

              <label className="w-25 form-label" htmlFor="">
                Message
              </label>
              <textarea className="form-control" value={message}
                onChange={(e) => setMessage(e.target.value)}
                required></textarea>
              <div className="d-flex justify-content-evenly">
                <button onClick={handleReset} className="btn m-2 bg-white border-primary">
                  Reset
                </button>
                <button type="submit" className="btn m-2 bg-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className="d-flex mx-5 py-4 flex-wrap flex-column justify-content-center">
            <Icon source={Facebook} name="Facebook" altText="Facebook logo" />
            <Icon
              source={Instagram}
              name="Instagram"
              altText="Instagram logo"
            />
            <Icon source={Email} name="Email" altText="Email logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
