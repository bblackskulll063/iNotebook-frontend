import React from "react";
// import image1 from "./draw1.png"

const About = () => {
  return (
    <div className="container signup-page">
      <div className="row">
        <div className="col col-lg-6 col-sm-12 picture-section" >
          <img src="draw1.jpg" />
        </div>

        <div className="col col-lg-6 col-sm-12 detail-section" >
          <form >
            <h1>Sign Up</h1>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Username"/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" name='password' placeholder="Password" minLength={5} required />
            </div>
            <div className="mb-3">
              <input type="cpassword" className="form-control" id="password" name='password' placeholder="Confirm Password" minLength={5} required />
            </div>

            <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
          </form>
        </div>
      </div>
      </div>
  );
};

export default About;
