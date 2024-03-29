import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Answer from "./pages/questions";
import ShowPost from "./pages/postPage";
import FriendList from "./pages/Friends";



function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/questions" element={<Answer/>}/>
      <Route path="/post" element={<ShowPost/>}/>
      <Route path="/friends" element={<FriendList/>}/>



    </Routes>
    </BrowserRouter>   
  )

}
export default App;