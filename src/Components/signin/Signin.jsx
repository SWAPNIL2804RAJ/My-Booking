import React, {useState} from "react";
import "./signin.css";
import Inputcontrol from "../inputControl/Inputcontrol";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Signin(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const {email , password} = values;

    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const handleSubmission =()=>{
        if(!values.email || !values.password){
            setErrorMsg("Please Fill All The Fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisable(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
            const user = res.user;
            setSubmitButtonDisable(false);
            localStorage.setItem("auth",true);
            localStorage.setItem("name",user.displayName);
            localStorage.setItem("email",user.email);
            setTimeout(()=>{
                console.log("lsd");
            },5000);
            navigate("/");
        })
        .catch((err) =>{
            setSubmitButtonDisable(false);
            setErrorMsg(err.message);
        });
    };

    return(
        <div className="container">
            <form onClick={handleSubmission}>
            <div className="innerBox">
                <h1 className="heading">SignIn</h1>
                <Inputcontrol 
                    className="user" 
                    label ="Email" 
                    placeholder="Enter Your Email address" 
                    value  ={email}
                    type ="email"
                    onChange = {(event) =>
                        setValues((prev) => ({...prev, email:event.target.value}))
                    }
                />
                <Inputcontrol 
                className="userpass" 
                label ="Password" 
                placeholder="Enter Your password" 
                value ={password}
                onChange={(event) => 
                    setValues((prev) => ({...prev, password:event.target.value}))
                    }
                />

                <div className="footer"> 
                <b className="errorMsg">{errorMsg}</b>
                    <button disabled={submitButtonDisable}>Login</button>
                    <p>Don't have an account?{" "}
                    <span>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                    </p>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Signin;