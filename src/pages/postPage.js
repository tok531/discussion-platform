import React, { createContext, useRef } from "react";
import PostDiv from "../components/WebsitePosts";
import "../style/Home.css"
import "../style/PostStyle.css"
import CommentDiv from "../components/Comment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const ShowPost = ()=>{
    const allposts = JSON.parse(localStorage.getItem("posts"))
    const post = JSON.parse(localStorage.getItem("currentPost"))
    const webComments = JSON.parse(localStorage.getItem("comments")).filter((comment)=>comment.postId===post.id)
    const yourcomment = useRef()
    const navigate = useNavigate()

    const postComment= ()=>{
        post.numcomments = post.numcomments+1
        allposts[allposts.findIndex((postitem)=>{return postitem.id === post.id })].numcomments = post.numcomments  
        localStorage.setItem("posts",JSON.stringify(allposts) )
        localStorage.setItem("currentPost", JSON.stringify(post))
        const allComments = JSON.parse(localStorage.getItem("comments"))
        allComments.push({
            postId: `${post.id}`,
            username:localStorage.getItem("first name").charAt(0).toLocaleUpperCase()+localStorage.getItem("first name").slice(1)+" "+localStorage.getItem("last name").charAt(0).toLocaleUpperCase()+localStorage.getItem("last name").slice(1),
            content:`${yourcomment.current.value }`
        })
        localStorage.setItem("comments", JSON.stringify(allComments))
        window.location.reload()     

    }
    const closepost = (event)=>{
        navigate(-1)
    }
    return(
        <div className="individualPost">
            <PostDiv post={post}/>
            <FontAwesomeIcon icon={faX} className="d-inline-block closeicon" onClick={closepost}/>
            <div className="comment">
                {webComments.map((comment)=>{
                    return(
                        <CommentDiv comment={comment}/>
                    )
                })}

            </div>
            <div className="d-flex yourcomment mt-3" >
                    <span className="userName">{localStorage.getItem("first name").charAt(0).toLocaleUpperCase()+localStorage.getItem("last name").charAt(0).toLocaleUpperCase()}</span>
                    <div className="yourcommentcontent">
                       <textarea placeholder="Write your comment" ref={yourcomment}></textarea>
                       <button className="d-block" onClick={postComment}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    
            </div>
        </div>
    )


   
}
export default ShowPost;