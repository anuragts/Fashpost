import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password Not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
        <p>Register</p>
      </section>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center mt-10"
      >
        <div className="mb-5 mt-2">
          <input
            type="text"
            className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
            id="name"
            name="name"
            value={name}
            placeholder="name"
            onChange={onChange}
          />
        </div>
        <div className="my-5">
          <input
            type="email"
            className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
            id="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={onChange}
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid  "
            id="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={onChange}
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
            id="password2"
            name="password2"
            value={password2}
            placeholder="confirm password"
            onChange={onChange}
          />
        </div>
        <div className="my-5">
          <button type="submit" className="bg-pink text-white text-3xl px-20 py-5 rounded-full font-semibold border-2	 border-pink hover:text-pink hover:bg-white">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
