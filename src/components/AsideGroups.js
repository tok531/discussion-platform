import React from "react";
import giza from "../images/gizaarea.jpg"
import cairo from "../images/cairoarea.jpeg"
import alex from "../images/alexarea.jpeg"
import aswan from "../images/aswanarea.jpg"
import Damietta from "../images/domiatarea.jpg"
import PortSaid from "../images/boorsaedarea.jpg"
import "../style/AsideGroups.css"
import { Link } from "react-router-dom";
const Groups = ()=>{

    return(
        <div className="Groups">
        <div className="groupsname">
            <h5>Groups you joined:</h5>
            <div className="group-item">
              <img src={giza} className="areaProfile"/>
              <span>Giza area group</span>
            </div>

            <div className="group-item">
              <img src={cairo} className="areaProfile"/>
              <span>Cairo area group</span>
            </div>

            <div className="group-item">
              <img src={alex} className="areaProfile"/>
              <span>Alexandria area group</span>
            </div>

            <div className="group-item">
              <img src={aswan} className="areaProfile"/>
              <span>Aswan area group</span>
            </div>

            <div className="group-item">
              <img src={Damietta} className="areaProfile"/>
              <span>Damietta area group</span>
            </div>

            <div className="group-item">
              <img src={PortSaid} className="areaProfile"/>
              <span>Port Said area group</span>
            </div>

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
        
    )

}

export default Groups;