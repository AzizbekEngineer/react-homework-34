import React, { useEffect } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useSignInMutation } from "../../context/api/userApi";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const Login = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { data, error, isSuccess, isError }] = useSignInMutation();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      navigate("/admin");
      localStorage.setItem("x-auth-token", data.data.token);
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  console.log(formData);
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <div className="login container">
      <form onSubmit={handleLogin} className="login__form">
        <h2 className="login__title">Login</h2>
        <div className="login__form__input">
          <input
            autoFocus
            value={formData.UserName}
            onChange={handleChange}
            type="text"
            name="UserName"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
