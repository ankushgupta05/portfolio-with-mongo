import React from 'react'
import Image from 'next/image'

import devloper from '@/public/Developer_Icons/front_page.png'


const Navbar = () => {
    return (

        // <header class="text-white  body-font bg-[#84adea] ">
        <header class="text-white  body-font bg-[#1a237e] ">
            <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-2 px-10  ">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <Image src={devloper} alt="Ankush Gupta" width={40} height={40} className=" flex title-font font-medium items-center  " />

                    <span class="ml-3 text-xl text-white  body-font font-bold">
                        <span >My-Awesome</span>{' '}
                        <span className='text-[#aa6be4] font-bold'>Portfolio</span>
                    </span>

                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
                    <a class="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Home</a>
                    <a class="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">About</a>
                    <a class="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Project</a>
                    <a class="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Contact Us</a>
                </nav>
                {/* <button class="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                </button> */}

            </div>
        </header>





    )
}

export default Navbar
