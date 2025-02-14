import React from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import logo from "../public/logo.png"
import Image from 'next/image';

function Topbar() {
  return (
    <div className="top-height bg-white shadow-md flex items-center justify-between px-6 py-3">
      {/* Left - Logo or Title */}
      <Image
            src={logo} 
            alt="Logo"
            width={40} 
            height={40} 
            style={{borderRadius:'50%'}}
        />

      {/* Right - Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <div className="relative">
          <BellIcon className="w-7 h-7 text-gray-600 hover:text-blue-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* User Icon */}
        <UserCircleIcon className="w-9 h-9 text-gray-600 hover:text-blue-500" />
      </div>
    </div>
  );
}

export default Topbar;
