import React from "react";

const ShowCase = () => {
  return (
    <section className="bg-dark p-5 mt-5">
      <hr className="text-white" />
      <div className="container">
        {/* green logo */}
        <div className="row align-items-center">
          <div className="col-md col-xl text-center">
            <img
              src="images/logo/ATHAN-Logo-green-PNG.png"
              className="img-fluid"
              alt="green-logo"
            />
          </div>
          <h4 className="col-md text-white text-center text-md-start fw-light font-monospace">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa quas at distinctio nulla beatae. Possimus similique nostrum
            voluptatibus modi.
          </h4>
        </div>
        <hr className="text-white" />
        {/* red logo */}
        <div className="row align-items-center">
          <h4 className="col-md text-white text-center text-md-start fw-light font-monospace">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa quas at distinctio nulla beatae. Possimus similique nostrum
            voluptatibus modi.
          </h4>
          <div className="col-md text-center">
            <img
              src="images/logo/ATHAN-Logo-red-PNG.png"
              className="img-fluid"
              alt="red-logo"
            />
          </div>
        </div>
        <hr className="text-white" />
        {/* black logo */}
        <div className="row align-items-center">
          <div className="col-md text-center">
            <img
              src="images/logo/ATHAN-Logo-black-PNG.png"
              className="img-fluid"
              alt="green-logo"
            />
          </div>
          <h4 className="col-md text-white text-center text-md-start fw-light font-monospace">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa quas at distinctio nulla beatae. Possimus similique nostrum
            voluptatibus modi.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
