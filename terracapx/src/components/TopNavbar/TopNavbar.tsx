'use client';
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import {logo} from '../../../public/logo.jpg'
import Image from 'next/image';


const TopNavbar = () => {
    
    return (
        <div className=" shadow-md p-4 w-screen fixed top-0 z-50 w-full flex items-center justify-between px-6  bg-black-800 gap-x-8">
         
         
            {/* Logo */}
            <div className="flex-shrink-0">
               <Image src="/logo.jpg" alt="Logo" width={100} height={100} className='rounded-full' />
            </div>
         
            {/* Navigation */}
            <ul className="flex space-x-6">
              {["About", "Carbon Finance", "Projects", "Resource", "Create", "Connect"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-[#139CFF] hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
         
            {/* Profile & Connect Button */}
            <div className="flex items-center space-x-4">
              <img src="/images/profile.png" alt="profile" className="w-10 h-10 rounded-full" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Connect
              </button>
            </div>
          </div>
         
          )




 }
        export default TopNavbar




