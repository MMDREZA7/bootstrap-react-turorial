import "./showCase.module.css";
import showCases from "./showCases";

const ShowCase = () => {
  return (
    // ShowCase from small screen to 2xl screen

    <>
      {/* Sliding ShowCase - Visible on Sm to Md screens */}
      <section className="slides-section bg-dark p-5 mt-5 text-light d-md-none d-sm-block">
        <div className="container">
          <div id="carouselExample" className="carousel slide carousel-light">
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <div className="container">
                  <img
                    src="images/logo/ATHAN-Logo-green-PNG.png"
                    alt="green-logo"
                    className="img-fluid"
                    style={{ maxHeight: "500px" }}
                  />
                  <h3 className="text-center mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero fugiat magni minus iusto iste possimus?
                  </h3>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <img
                    src="images/logo/ATHAN-Logo-black-PNG.png"
                    alt="green-logo"
                    className="img-fluid"
                    style={{ maxHeight: "500px" }}
                  />
                  <h3 className="text-center mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero fugiat magni minus iusto iste possimus?
                  </h3>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <img
                    src="images/logo/ATHAN-Logo-red-PNG.png"
                    alt="green-logo"
                    className="img-fluid"
                    style={{ maxHeight: "500px" }}
                  />
                  <h3 className="text-center mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero fugiat magni minus iusto iste possimus?
                  </h3>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* ShowCase Rower & Rower-Reverse - Visible on Md to Xl screens */}
      <section className="showcase bg-dark mt-5 p-5 d-none d-md-block d-xl-none">
        <div className="container">
          {showCases.map((showCase, index) => {
            return (
              <>
                <div
                  key={index}
                  className="row align-items-center m-3"
                  style={
                    index % 2 === 0
                      ? { flexDirection: "row" }
                      : { flexDirection: "row-reverse" }
                  }
                >
                  <div className="col-md col-xl text-center">
                    <img
                      src={showCase.image}
                      className="img-fluid"
                      alt="green-logo"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <h4 className="col-md text-white text-center text-md-start fw-light font-monospace">
                    {showCase.text}
                  </h4>
                </div>
                {showCase.length - 1 === index ? null : (
                  <hr className="text-light" />
                )}
              </>
            );
          })}
        </div>
      </section>

      {/* ShowCase Row_Col - Visible on Md to 2xl screens */}
      <section className="bg-dark text-light mt-5 p-5 d-none d-xl-block d-lg-none">
        <div className="container">
          <div className="row text-center">
            {showCases.map((showCase) => (
              <div className="col">
                <div className="col mb-5">
                  <img
                    src={showCase.image}
                    alt="ShowCase-Image"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="col">
                  <h4
                    className={`text-center ${
                      (showCase.name === "Green Logo" && "text-success") ||
                      (showCase.name === "Red Logo" && "text-danger") ||
                      "text-black"
                    }`}
                  >
                    {showCase.name}
                  </h4>
                  <h5 className="text-center">{showCase.text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
