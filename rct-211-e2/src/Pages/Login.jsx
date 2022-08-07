import React from "react";

const Login = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
