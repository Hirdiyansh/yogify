import React from 'react'
import fi from "../images/f.png"
import logo from "../images/lo.png"
const Footer = () => {
  return (
    <div>
      <div class="bg-linear-pink-invert py-12 px-4 bg-black">
            <div tabindex="0" aria-label="footer" class="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <div tabindex="0" aria-label="prodify logo" role="img">
                   <img src={logo} alt="logo"/>
                </div>
                <div class="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 tabindex="0" class="focus:outline-none dark:text-white text-2xl font-white">Build. Review. Ship.</h1>
                    <div class="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                        <h2  class=" md:mr-6 pb-4 md:py-0 cursor-pointer"><a  class="focus:outline-none dark:text-gray-500 focus:underline" href="javascript:void(0)">Try Now</a> </h2>
                        <h2  class="cursor-pointer"><a class="focus:outline-none dark:text-gray-500 focus:underline" href="javascript:void(0)">License</a> </h2>
                    </div>
                    <div class="my-6 text-base text-color f-f-l"> 
                        <ul class="md:flex items-center">
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none dark:text-gray-500  focus:underline ">About </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none dark:text-gray-500  focus:underline ">Home </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none dark:text-gray-500  focus:underline ">Login </a></li>
                            <li class="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" class="focus:outline-none dark:text-gray-500  focus:underline ">Help </a></li>
                        </ul>
                    </div>
                    <div class="text-sm text-color mb-10 f-f-l">
                        <p tabindex="0" class="dark:text-gray-500 focus:outline-none">© 2020 Prodify. All rights reserved</p>
                    </div>
                </div>
                <div class="w-9/12 h-0.5 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                <div class="flex justify-between items-center pt-12">
                    <a href="javascript:void(0)" class="hover:shadow-lg mr-4 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" aria-label="download on the app store"><div class="">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg2.svg" alt="download on the app store"/>
                    </div></a>
                    <button  class="hover:shadow-lg focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" aria-label="get it on google play">
                    <div>
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg3.svg" alt="get it on google play"/>                    
                    </div>
                    </button>
                </div>
            </div>
        </div>
    


    </div>
  )
}

export default Footer
