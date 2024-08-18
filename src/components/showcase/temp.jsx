import React from "react";

export const temp = () => {
  return (
    <div>
      {/* green logo */}
      <div className="row align-items-center">
        <div className="col-md col-xl text-center">
          <img
            src="images/logo/ATHAN-Logo-green-PNG.png"
            className="img-fluid"
            alt="green-logo"
            style={{ maxHeight: "400px" }}
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
            style={{ maxHeight: "400px" }}
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
            alt="black-logo"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <h4 className="col-md text-white text-center text-md-start fw-light font-monospace">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsa quas at distinctio nulla beatae. Possimus similique nostrum
          voluptatibus modi.
        </h4>
      </div>
    </div>
  );
};
