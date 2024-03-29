import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faGear, faHouse, faPenToSquare, faQuestion, faRectangleList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../style/Header.css"
import Groups from "./AsideGroups";
import { useRef } from "react";

function Header ({num}){
  const username = localStorage.getItem("first name")[0].toLocaleUpperCase() + localStorage.getItem("last name")[0].toLocaleUpperCase ()
  const active = {
    backgroundColor: "#e1d4f66a"
  }
  const profile = useRef()
  const navigate = useNavigate()

  const displayProfil =()=>{
    console.log(profile.current.className.split(" ").length)
    if(profile.current.className.split(" ")[1]==="d-none"){
      profile.current.className = ["profilInfo", "d-block"].join(" ")
    }
    else{
      profile.current.className = ["profilInfo", "d-none"].join(" ")
    }
    

  }
  const logout = ()=>{
    navigate("/")
  }



  return(
        <>
        <nav className="navbar fixed-top">
          <div className="container-fluid">
            <Link className="logo"><img src={logo} /></Link>
            <div className="icons">
                <Link to="/home" style={num==="1"?active:{}}><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to="/friends" style={num==="2"?active:{}}><FontAwesomeIcon icon={faRectangleList} /></Link>
                <Link to="/questions" style={num==="3"?active:{}}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                <Link><FontAwesomeIcon icon={faBell} /></Link>
            </div>
            <div className="d-flex">
                <input type="search" placeholder=" Search at infinity..."/>
                <button className="ms-1 searchButton"><FontAwesomeIcon icon={faArrowRight} /></button>
                <p className="profileName mx-3" onClick={displayProfil}>{username}</p>
              
            </div>
            <div className="profilInfo d-none" ref={profile}>
              <p className="profilInfoName">{localStorage.getItem("first name").charAt(0).toLocaleUpperCase()+localStorage.getItem("first name").slice(1)+" "+localStorage.getItem("last name").charAt(0).toLocaleUpperCase()+localStorage.getItem("last name").slice(1)}</p>
              <div className="profilInfoOptions">
                <p className="profilInfoItem" ><button><FontAwesomeIcon icon={faGear} /></button>&nbsp;&nbsp;Setting</p>
                <p className="profilInfoItem" ><button><FontAwesomeIcon icon={faQuestion} /></button>&nbsp;&nbsp;Help</p>
                <p className="profilInfoItem" onClick={logout} ><button><FontAwesomeIcon icon={faRightFromBracket} /></button>&nbsp;&nbsp;Log out</p>
      
              </div>
              <div className="footer">
                  <Link>About</Link>
                  <Link> . Careers</Link>
                  <Link> . Terms</Link>
                  <Link> . Privacy</Link>
                  <Link>. Advertise</Link>
                  <Link> . Infinity &copy; 2024</Link>
              </div>

            </div>
          </div>
          <Groups />



        </nav>
        </>
    )

}
export default Header;