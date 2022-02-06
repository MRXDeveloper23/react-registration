import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });
  const onImageChange = (event) => {
    console.log(event.target.files[0]);
    let img = event.target.files[0];
    setValues({
      ...values,
      image: URL.createObjectURL(img),
    });
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    fetch("https://localhost/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() =>
      navigate.push("/home", { image: values.image })
    );
  };
  return (
    <div className="container">
      <div className="signup-wrapper">
        <h1 className="title">Create Account</h1>
        <form className="signup">
          <div>
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
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
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="img-upload">
            <img
              src={values.image}
              className="image"
              alt="Avatar"
            />
            <h2>Select Image</h2>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            />
          </div>
          <div className="btn">
            <button
              onClick={handleSubmit}
              className="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
