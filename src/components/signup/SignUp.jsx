import React, { useState } from "react";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");

  const emailController = (e) => {
    e.preventDefault();

    setUserEmail(e.target.value);
  };

  const signUp = (e) => {
    e.preventDefault();

    // deleting the input value
    e.target[0].value = "";

    return alert(
      `✔ You Signed up ✔ \nYour Email: ${userEmail} \nWe will Send you an email Later`
    );
  };
  return (
    <section className="mt-5 bg-dark p-3 text-light">
      <div className="container border border-2 p-5 rounded-5">
        <h3 className="font-monospace">
          Let's Go to <span className="text-primary">Register</span>, Insert
          your Email to Registration
        </h3>
        <form onSubmit={(e) => signUp(e)}>
          <div className="row">
            <div className="col-md p-3">
              <h3 className="text-success">Sign up in Athan Team</h3>
            </div>
            <div className="col-md p-3 d-grid">
              <input
                placeholder="Insert Your Email"
                type="email"
                className="p-2 fw-semibold"
                onChange={(e) => emailController(e)}
              />
            </div>
          </div>
          <div className="col-md d-grid">
            <button className="btn btn-lg  btn-primary" type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
