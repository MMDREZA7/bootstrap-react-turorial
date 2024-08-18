import "./abilities.css";

const Abilities = () => {
  return (
    <section className="p-5">
      <h2 className="fw-bold font-monospace text-center">Our Team Abilities</h2>
      <div className="container">
        {/* React */}
        <div className="row p-4 align-items-center">
          <div className="col-md">
            <h4 className="mb-4 font-bold text-black">React frameWork</h4>
            <h5 className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reprehenderit ducimus maxime. Vel ad quo quasi totam, ducimus
              doloremque ex dolorem saepe deleniti dolorum? Ipsam, natus
              provident cupiditate, molestiae id inventore delectus, explicabo
              sit a magni minus quam sed nesciunt?
            </h5>
          </div>
          <div className="col-md">
            <img
              src="images/ourTeamAbilities/react.jpg"
              alt="React-Image"
              className="img-fluid"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>

        <hr />

        {/* WebSite */}
        <div className="row p-4 align-items-center">
          <div className="col-md">
            <img
              src="images/ourTeamAbilities/website.jpg"
              alt="Website-Image"
              className="img-fluid"
              style={{ maxHeight: "600px" }}
            />
          </div>
          <div className="col-md">
            <h4 className="mb-4 font-bold text-black">Website</h4>
            <h5 className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              voluptate sequi corrupti in harum recusandae? Fuga rem expedita
              saepe omnis esse maiores eum maxime hic, obcaecati, quas
              distinctio. Molestiae, et?
            </h5>
          </div>
        </div>

        <hr />

        {/* Flutter */}
        <div className="row p-4 align-items-center">
          <div className="col-md">
            <h4 className="mb-4 font-bold text-black">Flutter frameWork</h4>
            <h5 className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reprehenderit ducimus maxime. Vel ad quo quasi totam, ducimus
              doloremque ex dolorem saepe deleniti dolorum? Ipsam, natus
              provident cupiditate, molestiae id inventore delectus, explicabo
              sit a magni minus quam sed nesciunt?
            </h5>
          </div>
          <div className="col-md">
            <img
              src="images/ourTeamAbilities/flutter.jpg"
              alt="Flutter-Image"
              className="img-fluid"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>

        <hr />

        {/* Editing */}
        <div className="row p-4 align-items-center">
          <div className="col-md">
            <img
              src="images/ourTeamAbilities/editing.jpg"
              alt="Editing-Image"
              className="img-fluid"
              style={{ maxHeight: "600px" }}
            />
          </div>
          <div className="col-md">
            <h4 className="mb-4 font-bold text-black">
              Video and Image Editing
            </h4>
            <h5 className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reprehenderit ducimus maxime. Vel ad quo quasi totam, ducimus
              doloremque ex dolorem saepe deleniti dolorum? Ipsam, natus
              provident cupiditate, molestiae id inventore delectus, explicabo
              sit a magni minus quam sed nesciunt?
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
