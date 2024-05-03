/*
  Changes in this file, StartingScreen.jsx:
    - From regular function syntax to arrow function syntax.
    - Moved styles.css import to App.jsx.

  Things that should be fixed:
    - Links (<a> tags) should have a valid href attribute, if you cannot provide
    a valid href, use a button instead and style it accordingly with CSS.
*/

const ForgotForm = () => {
  return (
    <div className="wrapperForgot">
      <div className="form-box login">
        <h2>Forgot Password</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" placeholder="Email" required></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="New password"
              placeholder="New password"
              required
            ></input>
          </div>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>

          <button type="submit" className="btn">
            Set new password
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <a href="#" className="register-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotForm;
