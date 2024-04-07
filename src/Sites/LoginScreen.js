import "./styles.css";

function LoginScreen() {
  return (
    <div class="wrapper">
      <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <i class="bx bxs-user"></i>
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
              Don't have an account?
              <a href="#" class="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
