"use client";

import { useState } from "react";
import { loginUser  } from "@/lib/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LeftHome from '../../component/leftHome';
import RightLogin from '../../component/rightLogin';

export default function Login() {
    const [identifier, setIdentifier] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = async () => {
        const data = await loginUser (identifier, password);
        console.log(data);
        if (data) {
            Cookies.set("jwt", data.jwt, { expires: 7 });
            Cookies.set("userId", String(data.user.id), { expires: 7 });
            router.push("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col md:flex-row">
            <div className="flex-1"><LeftHome /></div>
            <div className="flex-1 items-center justify-center">
                <RightLogin 
                    identifier={identifier} 
                    password={password} 
                    setIdentifier={setIdentifier} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin} 
                />
            </div>
        </div>
    );
}