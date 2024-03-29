import React from "react";

const CommentDiv = (comment)=>{
    return(
        <div className="d-flex ">
            <span className="userName">{comment.comment.username.split(" ")[0][0]+comment.comment.username.split(" ")[1][0]}</span>
            <div className="commentContent">
                <b>{comment.comment.username}</b>
                <p>{comment.comment.content}</p>
            </div>
            

        </div>
    )
}
export default CommentDiv;