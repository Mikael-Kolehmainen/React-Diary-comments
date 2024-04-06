import "./styles.css";

function LoginScreen() {
  return (
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="UserName" required></input>
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required></input>
          <i class="bx bxs-lock-alt"></i>
        </div>

        <div class="remember-forgot">
          <label>
            <input type="checkbox"></input> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" class="btn">
          Login
        </button>
        <div class="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
