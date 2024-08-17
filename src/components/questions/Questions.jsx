import React from "react";

const Questions = () => {
  return (
    <section id="questions" className="mt-5">
      <div className="container">
        <h3 className="text-primary mb-3">Questions</h3>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                How can I Join the Athan Team?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, error quaerat nam ratione omnis, facilis suscipit
                distinctio repellendus odio reiciendis quae in odit unde
                accusamus?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                Do I give the Project from Athan Team?
              </button>
            </h2>
            <div
              id="question-two"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                minus cum enim tempore neque animi repudiandae labore nisi,
                quaerat natus. Quae architecto perspiciatis modi et autem, id
                doloribus fuga voluptatum.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                How much is the Sign up cost?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
