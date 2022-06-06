import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink

const Navbar = () => {
  const {isAuth,logout}=useContext(AuthContext)
  const navigate = useNavigate();
  const HandleLogin = () => {
    if(isAuth){
     
      logout();
    }else{
      navigate("/login")
    }
    //console.log(isAuth)
  };
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={HandleLogin}>
       {isAuth? "Logout":"Login"}
      </button>
    </div>
  );
};

export default Navbar;
