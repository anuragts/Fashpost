import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa";
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
        <Link to="/" className="float-left mr-5 my-5 ">
          <span className="text-pink">Fash</span>Post
        </Link>

      {user ? (
        <button className="float-right" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="float-right   bg-pink text-white px-9 py-5">
            login
          </Link>

          <Link to="/register" className="float-right mx-5 my-5">
            register
          </Link>
        </>
      )}
      </div>
    </header>
  );
}

export default Header;
