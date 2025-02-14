"use client";

import { useState } from "react";
import { registerUser  } from "@/lib/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import LeftHome from '../../component/leftHome';
import RightRegister from '../../component/rightRegister';

export default function Register() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleRegister = async () => {
        const data = await registerUser (username, email, password);
        if (data) {
            Cookies.set("jwt", data.jwt, { expires: 7 });
            Cookies.set("userId", String(data.user.id), { expires: 7 });
            router.push("/");
        } else {
            alert("Registration failed! Please try again.");
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col md:flex-row">
            <div className="flex-1"><LeftHome /></div>
            <div className="flex-1">
                <RightRegister 
                    username={username} 
                    email={email} 
                    password={password} 
                    setUsername={setUsername} 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                    handleRegister={handleRegister} 
                />
            </div>
        </div>
    );
}