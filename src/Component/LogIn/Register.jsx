import { useForm } from "react-hook-form";
import NavBar from "../Header/NavBar";
import "./Register.css";

import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      reset();

      updateUser(data.name, data.photoURL).then(() => {});
      console.log(loggedUser);
    });
  };
  return (
    <div>
      <NavBar></NavBar>

      <div className="login-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input {...register("name")} type="text" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input {...register("email")} type="text" />
            <label>email</label>
          </div>
          <div className="user-box">
            <input {...register("photoURL")} type="text" />
            <label>PhotoURL</label>
          </div>
          <div className="user-box">
            <input {...register("password")} type="password" />
            <label>Password</label>
          </div>
          <center>
            <button type="submit">
              Register
              <span></span>
            </button>
          </center>
          <Link to="/login">
            <button className=" flex justify-center px-5 py-2 bg-black">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
