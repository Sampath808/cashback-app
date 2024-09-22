import React from "react";
import bg from "./assets/background-login.jpg";

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 mt-4">
            <img src={bg} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* <!-- Password input --> */}
              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label fs-5 mt-4" htmlFor="password">
                  Phone Number:
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg border border-1"
                  placeholder="Enter your phone number"
                  name="password"
                />
              </div>
              <div data-mdb-input-init className="form-outline mb-3">
                <label className="form-label fs-5" htmlFor="password">
                  OTP:
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg border border-1"
                  placeholder="Enter the OTP recieved to your mobile number"
                  name="password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-danger btn-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
