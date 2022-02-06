import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginValues);
    fetch("https://localhost/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginValues),
    })
      .then((res) => res.json())
      .then(() => navigate.push("/home"));
  };
  return (
    <div className="container">
      <div className="signin-wrapper">
        <h1 className="title">Sign In</h1>
        <form className="login">
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={loginValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={loginValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="btn">
            <button
              onClick={handleSubmit}
              className="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
