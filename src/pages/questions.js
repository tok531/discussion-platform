import React from "react";
import Header from "../components/Header";
import PostDiv from "../components/WebsitePosts";
import "../style/Home.css"

function Answer(){
    const AskPosts = JSON.parse(localStorage.getItem("posts")).filter((post)=>post.type==="ask")
    return(
        <>
        <Header num="3"/>
        <div className="posts" >       
            {AskPosts.map((post)=>{
              return(
                <>
                 <PostDiv post={post}/>

                </>
              )
              })
            }
        </div>
        </>
    )
}

export default Answer;