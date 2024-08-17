import React from "react";

const Contacts = () => {
  return (
    <section className="text-light bg-dark p-5" id="contacts">
      <div className="container">
        <h2 className="text-start text-light">Contacts</h2>
        <div className="row align-items-center justify-content-between">
          <div className="col-md list-group">
            {/* email */}
            <h5 className="list-group-item bg-secondary text-light">
              Email: mheidari831003.game@gmail.com
            </h5>
            {/* phone */}
            <h5 className="list-group-item bg-secondary text-light">
              Phone: (+98) 992 385 7419
              <i class="bi bi-envelope"></i>
            </h5>
            {/* location */}
            <h5 className="list-group-item bg-secondary text-light">
              Location: No.11, Alley 9, street Tohid, Qom, Iran
            </h5>
            {/* enrollment email */}
            <h5 className="list-group-item bg-secondary text-light">
              Enrollment Email: (025) 385 715 74
            </h5>
          </div>

          <div className="col-md-4">
            <img
              src="images/logo/ATHAN-Logo-White-PNG.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
