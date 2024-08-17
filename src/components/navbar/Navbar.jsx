import React from "react";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-md bg-dark fixed-top">
        <div className="container">
          <img
            src="images/logo/ATHAN-Logo-white-PNG.png"
            alt="athan-logo"
            className="navbar-brand"
            style={{ width: "80px" }}
          />
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navmenu"
          >
            <ul className="navbar-nav">
              <li className="nav-item fw-medium ">
                <a href="#our-instructors" className="nav-link text-light">
                  Instructors
                </a>
              </li>
              <li className="nav-item fw-medium">
                <a href="#questions" className="nav-link text-light">
                  Questions
                </a>
              </li>
              <li className="nav-item fw-medium">
                <a href="#contacts" className="nav-link text-light">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
