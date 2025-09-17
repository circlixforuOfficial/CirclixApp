import React from "react";

function FooterSection() {
  return (
    <>
      <div className="container"> 
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#scrollspyHeading1" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#scrollspyHeading2" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#scrollspyHeading3" className="nav-link px-2 text-body-secondary">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#scrollspyHeading4" className="nav-link px-2 text-body-secondary">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#scrollspyHeading5" className="nav-link px-2 text-body-secondary">
                Contact Us
              </a>
            </li>
          </ul>

          <p className="text-center text-body-secondary">© 2025 Circlix</p>
        </footer>
      </div>
    </>
  );
}

export default FooterSection;
