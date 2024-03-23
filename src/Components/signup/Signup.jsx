import React, { useState } from "react";
import "./signup.css"
import Inputcontrol from "../inputControl/Inputcontrol";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";

function Signup(){
    const navigate = useNavigate();
    const [values, setValues] = useState({          /*updation of the values*/
        name: "",
        phone: "", 
        email: "",
        password: "",
    });

    const[errorMsg, setErrorMsg] = useState("");
    const {name , phone  , email , password} = values;
    // const handleChange = (e) =>{
    //     const {name, value} = e.target;
    //     setValues((prevValues) => ({
    //         ...prevValues,

    //     }))
    // }
    const[submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const handleSubmission=(x)=>{                                                        /*function to check the button click*/
    if(!values.name || !values.phone || !values.email || !values.password){
        setErrorMsg("Please Fill All The Fields!");
    }else{
    setErrorMsg("");
    }
    x.preventDefault();     
        console.log(values);

        setSubmitButtonDisable(true);

        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
            setSubmitButtonDisable(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,
            })
            //set user.name and user.email in local DB
        localStorage.setItem('user', {name : user.displayName,email : user.email});
            localStorage.setItem("auth",true);
            localStorage.setItem("name",user.displayName);
            localStorage.setItem("email",user.email);
            navigate("/");
            console.log(res);
        })
        .catch((err) => {
            setSubmitButtonDisable(false);
            setErrorMsg(err.message);
            console.log("Error-", err);
        })
    }
    
        return(
            <div className="container">
                <form onSubmit={handleSubmission} disabled={submitButtonDisable}>
                <div className="innerBox">
                    <h1 className="heading">SignUp</h1>
                    
                    <Inputcontrol className="username" label="Name" placeholder="Enter Your Full Name" value = {name} type="text"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, name:event.target.value}))          /*here, firstly there will be previous value(...prev) and then there will be update values*/
                    }
                    />
                    <Inputcontrol className="userphone" label="Phone Number" placeholder="Enter Your Phone Number" value = {phone} type="number"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, phone:event.target.value}))
                    }
                    />
                    <Inputcontrol className="user" label ="Email" placeholder="Enter Your Email address" value={email} type="email"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, email:event.target.value}))
                    }
                    />
                    <Inputcontrol className="userpass" label ="Password" placeholder="Enter Your password" value={password} type="password"
                    onChange={(event) =>
                        setValues((prev) => ({...prev, password:event.target.value}))
                    }
                    />

                    <div className="footer">
                        <b className="errMsg">{errorMsg}</b>
                        <button >Register</button>
                        <p>Already have an account?{" "}
                        <span>
                            <Link to= "/signin">SignIn</Link>
                        </span>
                        </p>
                    </div>
                </div>
                </form>
            </div>
        );
    }

export default Signup;