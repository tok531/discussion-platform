import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";

const PostDiv = (currentPost)=>{
    const navigate = useNavigate()
    const showComments = (postItem)=>{
        localStorage.setItem("currentPost", JSON.stringify(postItem))
        setTimeout(()=>{     
          navigate("/post")
        },500)
  
    }
    
 
    return(
      <div className="memberPost">
        <span className="userName">{currentPost.post.username.split(" ")[0][0]+currentPost.post.username.split(" ")[1][0]}</span>
        <div class="memberdata ">
          <b>{currentPost.post.username}</b>
          <p >{currentPost.post.type}</p>
        </div>
        <div class="postContent">
          <p>{currentPost.post.content}</p>
          <p class="numberComments" onClick={()=>showComments(currentPost.post)}>{currentPost.post.numcomments}comments</p>
          <div class="row">
            <button class="col-6" onClick={()=>showComments(currentPost.post)} ><span><i class="fa-solid fa-comment"></i> Comments</span></button>
            <button class="col-6"><span><i class="fa-solid fa-arrow-rotate-right"></i> Share</span></button>
          </div>
       
        </div>
      </div> 
    )
}
export default PostDiv;