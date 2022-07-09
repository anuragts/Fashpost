import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex flex-row text-3xl ">
      <div className="w-screen">
        <Link to="/" className="float-left mr-5 my-3 text-4xl ">
          <span className="text-pink">Fash</span>Post
        </Link>

      {user ? (
        <>
        <button className="float-right   bg-pink text-white px-8 py-3" onClick={onLogout}>
          logout
        </button>
           <Link to="/events" className="float-right mx-12 my-3">
           events
         </Link>
         <Link to="/create" className="float-right   bg-pink text-white px-8 py-3">
            create
          </Link>
         </>
      ) : (
        <>
          <Link to="/login" className="float-right   bg-pink text-white px-8 py-3">
            login
          </Link>

          <Link to="/register" className="float-right mx-5 my-3">
            register
          </Link>
        </>
      )}
      </div>
    </header>
  );
}

export default Header;
