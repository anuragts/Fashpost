import React from "react";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {login , reset} from '../features/auth/authSlice';
import Spinner from "../components/Spinner";
import {Link} from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {  email, password,  } = formData;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading,isError,isSuccess,message} = useSelector(
    (state) => state.auth
    )

    useEffect(()=>{

      if(isError){
        toast.error(message) 
      }
  
      if(isSuccess || user){
        navigate('/')
  
      }
  
      dispatch(reset())
  
    }, [user,isError,isSuccess,message,navigate,dispatch ])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  };

  if (isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
        <p>Login</p>
      </section>
      <form autocomplete="off" onSubmit={onSubmit} className="flex flex-col justify-center items-center mt-10">
   
        <div className="mb-5 mt-2">
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
            className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
            id="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={onChange}
          />
        </div>
    
        <Link to="/register" className=' mt-10 text-2xl	text-pink  px-[40px]   mb-2'>Create an account</Link>  <br/>
        <div className="my-1">

          <button type="submit" className="bg-pink text-white text-3xl px-20 py-5 rounded-full font-semibold border-2	 border-pink hover:text-pink hover:bg-white">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
