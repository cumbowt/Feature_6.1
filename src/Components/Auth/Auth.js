import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("./Collections"); //will this navigate to the collections page?
    }
  }, [navigate]);

  return (
    <span className="homeImage">
      <img src="../src/Images/SunsetBeachLessTree.jpg" alt="Sunset Beach" />
      <h1>The Sunset App</h1>
      <h2>A place to collect all your sunsets</h2>
      <br />
      <div className="flex-container">
        <br />
        <br />
        <Link to="/auth/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        <Link to="/auth/login">
          <button>Login</button>
        </Link>
      </div>
    </span>
  );
};

export default AuthModule;
