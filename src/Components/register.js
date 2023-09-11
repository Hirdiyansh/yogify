import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
const Register = () => {
  const navigate = useNavigate();
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[phone,setphone]=useState("");
  const[password,setpassword]=useState("");
  const[confirmpas,setconfirmpas]=useState("");
  const[subsc,setsubsc]=useState("");
  const [errors, setErrors] = useState({errors: []});
 
  const valid=async(e)=>{
    e.preventDefault();
    const data={name,phone,email,password,subsc};
    const response=await fetch("http://localhost:7000/newuser/createuser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    });
    const res=await response.json()
    console.log(res.errors);
    setErrors(res.errors);
    // setErrors(res);
    if(res.success===true && password===confirmpas )
    {
      
      toast.success('Account Created ! 😎', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate('/');
        }, "2000");
        
    }
      
    else{
       toast.error(errors[0].msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       });
      //  if(password!=confirmpas)
      //  {
      //    toast.error('please enter same password as above',{
      //      position: "top-right",
      //      autoClose: 5000,
      //      hideProgressBar: false,
      //      closeOnClick: true,
      //      pauseOnHover: true,
      //      draggable: true,
      //      progress: undefined,
      //      theme: "light",
      //     });
      //  }
    }
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
      
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-yellow-200 h-100 w-50 ">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Your Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" onSubmit={valid} >
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900"> Name</label>
        <div class="mt-2">
          <input id="name" name="name" type="text" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>{setname(e.target.value);
          }}/>
        </div>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900"> Phone Number</label>
        <div class="mt-2">
          <input id="phone" name="phone" type="phonenumber" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>{setphone(e.target.value)}}/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          onChange={(e)=>{setemail(e.target.value)}}/>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
      </div>
      <div>
        <label for="confirmpassword" class="block text-sm font-medium leading-6 text-gray-900"> Confirm Password</label>
        <div class="mt-2">
          <input id="confirmpassword" name="confirmpassword" type="password" autocomplete="confirm-password" value={confirmpas} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          onChange={(e)=>{setconfirmpas(e.target.value)}}/>
        </div>
      </div>
      <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Subscrciption </label>
          <div class="mt-2">
            <select id="subs" name="subs" autocomplete="subs-time" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={(e)=>{setsubsc(e.target.value)}}>
              <option></option>
              <option>12 months</option>
              <option>6 months</option>
              <option>3 months</option>
            </select>
          </div>
        </div>

      <div>
        <button type="submit" onClick={valid} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register
