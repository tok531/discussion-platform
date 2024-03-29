import React from "react";
import Header from "../components/Header";
import "../style/FriendList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
const FriendList =()=>{
    return(
        <>
        <Header num="2"/>
        <div className="posts" >
            <p className="friends"><FontAwesomeIcon icon={faUserMinus} /> You have no friends</p>
        </div>
        </>
       
    )

}
export default FriendList;