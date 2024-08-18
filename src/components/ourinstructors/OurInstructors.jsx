import React from "react";

const OurInstructors = () => {
  return (
    <section className="bg-primary p-5" id="our-instructors">
      <div className="container">
        <h2 className="text-white font-monospace mb-3 fw-bold">Instructors</h2>
        <div className="row g-2">
          {/* instructor 1 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="images/instructors/leader.jpg"
                  alt="leader-img"
                  className="card-img rounded-circle mb-3"
                />
                <h4 className="card-title">Athan Heidari</h4>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere placeat odit laboriosam, ex neque obcaecati tenetur.
                </p>
              </div>
            </div>
          </div>

          {/* instructor 2 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="images/instructors/developer.jpg"
                  alt="leader-img"
                  className="card-img rounded-circle mb-3"
                />
                <h4 className="card-title">Sara Jean</h4>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae est incidunt ea sint harum eius?
                </p>
              </div>
            </div>
          </div>

          {/* instructor 3 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="images/instructors/backend.jpg"
                  alt="leader-img"
                  className="card-img rounded-circle mb-3"
                />
                <h4 className="card-title">Carlin Salminos</h4>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae est incidunt ea sint harum eius?
                </p>
              </div>
            </div>
          </div>

          {/* instructor 4 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src="images/instructors/designer.jpg"
                  alt="leader-img"
                  className="card-img rounded-circle mb-3"
                />
                <h4 className="card-title">Jahn Doe</h4>
                <p className="card-text text-start">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae est incidunt ea sint harum eius?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInstructors;
