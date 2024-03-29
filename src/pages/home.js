import React ,{ createContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "../style/Home.css"
import { Link, useNavigate } from "react-router-dom";
import WriteThoughts from "../components/WriteThoughts";
import PostDiv from "../components/WebsitePosts";


const Home = ()=>{
    const [posts, setposts] = useState([
        {id:"1",
        username:"Tamer Mohamed",
        content:"How can I get from Giza to Al-Azhar Park ?",
        numcomments:2,
        area:"cairo",
        type:"ask",
        img:""
        },
        {id:"2",
        username:"Boshra Ahmed",
        content:"How do I get to Port Said by transportation from Cairo?",
        numcomments:2,
        area:"cairo",
        type:"ask",
        img:""
        },
        {
        id:"3",
        username:"Dina Mahmoud",
        content:"If anyone wants to visit Egypt and explore and see many places in it, these are many beautiful places in Cairo and Giza.", 
        numcomments:0, 
        area:"cairo",
        type:"post",
        img:["../images/area1.jpg", "../images/area2.jpg", "../images/area3.jpg", "../images/area4.jpg", "../images/area5.jpg", "../images/area6.jpg"]  
        },
        {
        id:"4",
        username:"Shreif King",    
        content:"I want a fish restaurant in Alexandria at an affordable price",
        numcomments:3,
        area:"alex",
        type:"ask",
        img:""
        }
    ])

    const [comments, setcomments] = useState([
        {postId:"1",
        username:"Heba Magdy",
        content:"From Giza Square,take a ride to Sayyida Aisha,then any car to the park"
        },
        {postId:"1",
        username:"Ahmed Waeel",
        content:"If you are coming from Giza Square, take the metro and get off at Ataba station, and from there take a car to Al-Azhar Park."
        },
        {
        postId:"2",
        username:"Mariam Samy",
        content:"From Ramses, there is a branch of Superjet buses"    
        },
        {
        postId:"2",
        username:"Nagat Ahmed",
        content:"There is a station in Almaza for both Superjet and Pullman"    
        },
        {
        postId:"4",
        username:"Sara Saeed",
        content:"Shaaban in Al-Manshiyya"
        },
        {
        postId:"4",
        username:"Hossam Said",
        content:"Sabreen in bahary directly on the sea"
        },
        {
        postId:"4",
        username:"Ali Hamdy Ali",
        content:"As long as you want a good price, go to any market and buy the fish you like and have someone next to it grill and fry."    
        }

    ])
    if(localStorage.getItem("posts")===null){
      localStorage.setItem("posts",JSON.stringify(posts))
      localStorage.setItem("comments",JSON.stringify(comments))

    }
    
    let webposts=JSON.parse(localStorage.getItem("posts"))


    return(
      <>
        <Header num="1"/>
        <div className="posts" >
          <WriteThoughts/>
          <div >
            {webposts.map((post)=>{
              return(
                <>
              
                 <PostDiv post={post}/>

                </>
              )
              })
            }
          </div>

        </div>

      </>
    )

}

export default Home;