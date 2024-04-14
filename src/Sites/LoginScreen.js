import "./styles.css";

function LoginScreen() {
  return (
    <div class="wrapper">
      <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-envelope"></i>
            </span>
            <input type="email" placeholder="Email" required></input>
          </div>
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-lock-alt"></i>
            </span>
            <input type="password" placeholder="Password" required></input>
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox"></input>
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" class="btn">
            Login
          </button>
          <div class="login-register">
            <p>
              Don't have an account?{" "}
              <a href="#" class="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div class="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-user"></i>
            </span>
            <input type="email" placeholder="Username" required></input>
          </div>
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-envelope"></i>
            </span>
            <input type="email" placeholder="Email" required></input>
          </div>
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-lock-alt"></i>
            </span>
            <input type="password" placeholder="Password" required></input>
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox"></input>I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" class="btn">
            Register
          </button>
          <div class="login-register">
            <p>
              Already have an account?{" "}
              <a href="#" class="login-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
