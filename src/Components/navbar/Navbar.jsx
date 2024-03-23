import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import firebase

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  // const isAuth = firebase.auth().currentUser == null ? false : true;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        localStorage.clear();
        setIsAuth(false);
        navigate("/signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //display/hide login
  useEffect(()=>{
    if (isAuth === false) {
      const authBool = localStorage.getItem('auth');
      if(authBool)
        setIsAuth(authBool);
      else{
        auth.onAuthStateChanged((user) => {
          if (user) {
            setIsAuth(true);
            localStorage.setItem('auth',true);
          } else {
            setIsAuth(false);
            localStorage.setItem('auth',false);
          }
        });
      }
    }
  },[]);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          MYBOOKINGS
        </span>
        <div className="navItems">
          {JSON.parse(isAuth) ? (
            <button onClick={handleLogout} className="navButton">
              Sign Out
            </button>
          ) : (
            <>
              <button onClick={() => navigate("/signup")} className="navButton">
                Register
              </button>
              <button onClick={() => navigate("/signin")} className="navButton">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
