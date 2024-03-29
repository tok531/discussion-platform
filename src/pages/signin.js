import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Signup.css"

function Signin() {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate();

    const checkemail=()=>{
        if((localStorage.getItem("email").trim()===email.current.value)&(localStorage.getItem("password").trim()===password.current.value)){
            navigate("/home")

        }
        else(
            alert("Check that password and email are correct")
        )

    }
    
    return(
        <div className="container bg-light loginDiv">
            <h2>Login In:</h2>
            <hr></hr>
            <form className="was-validated">
                <input type="email" placeholder="Enter your email address"  className="d-block email" ref={email}/>
                <input type="password" placeholder="Enter your password"  className="d-block password" ref={password}/>
                <button type="submit" class="btn btn-primary" onClick={checkemail}><Link to="#" className="text-light">Log in</Link></button>

                <Link to="#">Forgetten account?</Link>
            </form>

        </div>

    )
}

export default Signin;