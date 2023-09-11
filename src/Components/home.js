import React from "react";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import Footer from "./footer";

function Home() {

const[post,setPost]=useState(null);

const getData=async()=>{
  let data=await fetch("http://localhost:7000/addpostures/showposture");
  let response=await data.json();
  setPost(response.result);
  console.log(response.result);
};

useEffect(()=>{
  getData();
},[]);
  return (
    <div>
      {/* <Navbar setIsLogin={setIsLogin} isLogin={isLogin}/> */}
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to Zenflow!</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">"Yoga is the journey of the self, through the self, to the self." — The Bhagavad Gita</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Register  <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Get Ascess to yogify <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Complete Program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Stay Healthy <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Registraion online</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">24*7</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Support team</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">24*5</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
<div class="bg-yellow-100">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Some of the common forms of yoga done on our clases</h2>
    
    <div  class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {post!=null && post.map((item)=>{
      
      
      return(
          
           <div key={item._id} class="group relative">
             <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
               <img src={item.img} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
             </div>
             <div class="mt-4 flex justify-between">
               <div>
                 <p class="mt-1 text-sm font-medium  text-gray-900">{item.title}</p>
                 <p class="text-sm font-medium text-pink-400">{item.desc}</p>
               </div>
               
             </div>
           </div>
    ) 
    })}
  </div>
  </div>
</div>
<div class="dark:bg-black">
      <div class="pb-20">
        <div class="mx-auto bg-gradient-to-l from-pink-600 to-indigo-700 h-96">
          <div class="mx-auto container w-full flex flex-col justify-center items-center">
            <div class="flex justify-center items-center flex-col">
              <div class="mt-20">
                <h2 class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">By the numbers</h2>
              </div>
              <div class="mt-6 mx-2 md:mx-0 text-center">
                <p class="lg:text-lg md:text-base leading-6 text-sm text-white">1 years, consistent quality and you get results. No matter what</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">5000+</h2>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Visited customers</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">3000+</h2>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Enroll in program</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">1000+</h2>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Completed program</p>
            </div>
            <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 class="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">50+</h2>
              <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Yoga Asans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
    </div>
  );
};

export default Home;
