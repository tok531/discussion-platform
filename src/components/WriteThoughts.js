import React, { useRef, useState } from "react";
import "../style/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faPen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


const WriteThoughts = ()=>{
    const [message,setmessage] =useState("")
    const messageParagraph = useRef()
    const yourpost = useRef()
    const navigate = useNavigate()
    let posts = JSON.parse(localStorage.getItem("posts"))


   const writePost = (type)=>{
    if(yourpost.current.value!==""){
        if(type==="ask"){
            setmessage("Your question is being prepared")
         }
         else{
             setmessage("Your post is being prepared")
         }
         messageParagraph.current.className = "message"
         posts.unshift({
             id: `${posts.length+1}`,
             username:   `${localStorage.getItem("first name").charAt(0).toLocaleUpperCase()+localStorage.getItem("first name").slice(1)} ${localStorage.getItem("last name").charAt(0).toLocaleUpperCase()+localStorage.getItem("last name").slice(1)}`,
             content:`${yourpost.current.value}`,
             numcomments:0,
             area:"cairo",
             type:`${type}`,
             img:""
         })
         setTimeout(()=>{
             localStorage.setItem("posts",JSON.stringify(posts))
             setmessage("Your post is shared")
             setTimeout(()=>{
                 window.location.reload()     
             },1000)
     
         },2000)

    }
    else{
        alert("there is no data to post")
    }
   
    

   }

    return(
    <div>
        <p className="" ref={messageParagraph}>{message}</p>
        <div className="yourThoughts">
            <span className="userName">{localStorage.getItem("first name")[0].toLocaleUpperCase() + localStorage.getItem("last name")[0].toLocaleUpperCase ()}</span>
            <input type="text" placeholder=" What do you want to ask or share?" ref={yourpost}/>
            <div className="thoughtsOption d-flex justify-content-around">
                <button className="col-4 askOption" onClick={()=>writePost("ask")}><b><FontAwesomeIcon icon={faCircleQuestion} className="optionIcons"/> Ask</b></button>
                <button className="col-4" onClick={()=>navigate("/questions")}><b><FontAwesomeIcon icon={faPenToSquare} className="optionIcons" /> Answer</b>  </button>
                <button className="col-4" onClick={()=>writePost("post")}><b><FontAwesomeIcon icon={faPen} className="optionIcons" /> Post</b> </button>
            </div>
        </div>
        
    </div>    
       
    )
}

export default WriteThoughts;