import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Signup.css"

function Signup(){
    const email = useRef()
    const password = useRef()
    const fName = useRef()
    const lName = useRef()
    const navigate = useNavigate();


    const goHome = ()=>{
        console.log("hello")
        if(!(email.current.value===""||password.current.value===""||fName.current.value===""||lName.current.value==="")){
        localStorage.setItem("email", email.current.value)
        localStorage.setItem("password", password.current.value)
        localStorage.setItem("first name",fName.current.value+" ")
        localStorage.setItem("last name",lName.current.value)
        navigate("/signin")

        }
        else{
            alert("Please fill the required data")
        }


    }
   
    return(
        <>
        <div className="container bg-light loginDiv" >
            <h2>Sign Up:</h2>
            <hr></hr>
            <form className="was-validated">
                <input type="text" placeholder=" First name" className="username" ref={fName}  required/>
                <input type="text" placeholder=" Last name" className="username" ref={lName} required/>
                <input type="email" placeholder=" Enter your email address" className="d-block email" required ref={email}/>
                <input type="password" placeholder=" Enter your password" className="d-block password" required ref={password}/>
                <label className="d-block mb-2"> Date of birth:</label>
                <input type="date" className="date"/>
                <label className="d-block"> Gender:</label>
                <input type="radio" name="vv" /><span>Female</span><input type="radio" name="vv" className="ms-5"/><span>Male</span>
                <div className="invalid-feedback">Please fill out this field.</div>
                <button type="submit" className="btn btn-primary" onClick={goHome}><Link to="#" className="text-light">Sign up</Link></button>
                <Link to="/signin"> Already have an account?</Link>
            </form>

        </div>
        
       
        </>
        
    )
}

export default Signup;