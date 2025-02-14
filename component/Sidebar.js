import React from "react";
import { useRouter } from "next/navigation";
import {
  UserCircleIcon,
  ChatBubbleOvalLeftIcon,
  UserIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Cookies from "js-cookie";



function Sidebar() {
    const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("jwt");  
    Cookies.remove("userId");
    router.push("/login");
    window.location.reload();
  };


  return (
    <div className="hidden-mobile h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-4 flex flex-col">
      <div className="flex flex-col items-center mt-5 ">
        <UserCircleIcon className="w-10 h-10 text-white" />
        <p className="text-white">Server</p>
      </div>
      <div className="flex flex-col items-center mt-5 ">
        <ChatBubbleOvalLeftIcon className="w-10 h-10 text-white" />
        <p className="text-white">Chats</p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <UserIcon className="w-10 h-10 text-white" />
        <p className="text-white">Profile</p>
      </div>
      <div className="flex flex-col items-center mt-5 cursor-pointer" onClick={handleLogout}>
        <ArrowLeftEndOnRectangleIcon className="w-10 h-10 text-white" />
        <p className="text-white">Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
