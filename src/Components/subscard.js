import React, { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useState } from "react";
const Subscard = ({setName}) => {
  const[name,setname]=useState("");
  const[subsc,setsubsc]=useState("");
  const[email,setemail]=useState("");
  const[phone,setphone]=useState("");

  const Getuserdata=async()=>{
    //console.log(localStorage.getItem('token'));
    let res = await fetch("http://localhost:7000/newuser/userdetails",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem('token')
    },
  })
  const data = await res.json();
  console.log(data);
  setname(data.name);
  setsubsc(data.subsc);
  setemail(data.email);
  setphone(data.phone);
  setName(data.name);
 }

 useEffect(() => {
  Getuserdata();
 }, [])
 
  return (
    <div>
        {/* <Navbar/> */}

 <div className=" bg-gradient-to-tr from-[#ff4694] to-[#776fff]  mx-0 min-h-screen grid place-content-center">
 <div className="bg-black rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
  <h1 className="text-3xl mb-3">Hi {name}</h1>
  <p className="text-lg">Welcome to Yogify. Enjoy your journey</p>
 </div>
  <div className="bg-gradient-to-tr from-[#ff2e2e] to-[#178be9] py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
  <h2 className="font-semibold text-2xl mb-6">Yogify</h2>
  <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar"/>
  <p className="capitalize text-xl mt-1">{name}</p>
  <p className="capitalize text-xl mt-1">{subsc}-months</p>
  <p className="capitalize text-xl mt-1">{email}</p>
  <p className="capitalize text-xl mt-1">{phone}</p>
  <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
  <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Edit</button>
 </div>
  </div>
     <Footer/>
    </div>
  )
}
export default Subscard
