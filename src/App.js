import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Team from './Components/team';
import Login from './Components/login';
import Register from './Components/register';
import { Routes, Route } from "react-router-dom";
import Subscard from './Components/subscard';
import { useState } from 'react';
import Navbar from './Components/navbar';

function App() {

  const[isLogin,setIsLogin]=useState(false);
  const[name,setName]=useState("");
  
  return (
    <div >
      <Navbar setIsLogin={setIsLogin} isLogin={isLogin} setName={setName} name={name}/>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Login" element={<Login setIsLogin={setIsLogin}/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Subscard" element={<Subscard setName={setName}/> }/>
      </Routes>
      {/* <Subscard/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
