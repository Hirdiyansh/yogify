import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import Navbar from './navbar'
import logo from '../images/lo.png'
import Footer from './footer'
import { Link } from "react-router-dom";

const Login = ({setIsLogin}) => {
  
  const navigate = useNavigate();

  const[email,setemail]=useState("");

  const[password,setpassword]=useState("");

  const Checkuserdata=async()=>{
    const data={email,password};
    let res=await fetch("http://localhost:7000/newuser/login",{
      method:"POST",
      headers: {
        "Content-Type":"application/json",

      },
      body:JSON.stringify(data),
    })
    
    console.log(data);
    let response=await res.json();
    console.log(response);
    
    if(response.success)
    {
      localStorage.setItem('token',response.authtoken);
      // history.push("/");
      setIsLogin(true);
      toast.success('You have login successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        // setTimeout(1000);
        navigate('/subscard');
    }
    else{
      toast.error(response.error,{
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    }
    // if(response.success===true)
    // {
    //   alert("Successfully login");
    // }
    // else{
    //   alert("Invalid credentials");
    // }
   
  }
  return (
    <div>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      {/* <Navbar/> */}
      <div class="h-full bg-gradient-to-tl from-yellow-300 to-orange-200 w-full py-16 px-4">
            <div class="flex flex-col items-center justify-center">
               <img class="h-20 w-20" src={logo} alt="logo"/>

                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <Link className="a" to="/Register">
                    <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Dont have account? <a href="javascript:void(0)"   class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign up here</a></p>
                    </Link>
                    <div class="w-full flex items-center justify-between py-5">
                         <hr class="w-full bg-gray-400"/>
                         <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                         <hr class="w-full bg-gray-400  "/>
                        </div>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            onChange={(e)=>{
                              setemail(e.target.value);
                              }}
                            />
                        </div>
                        <div class="mt-6  w-full">
                            <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div class="relative flex items-center justify-center">
                            <input id="pass" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            onChange={(e)=>{
                              setpassword(e.target.value);
                              }}
                            />
                            <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport"/>                                    
                            </div>
                           </div>
                        </div>
                        <div class="mt-8">
                            <button onClick={Checkuserdata} role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Create my account</button>
                        </div>
                </div>
            </div>
        </div>
       <Footer/>
    </div>
  )
}

export default Login
