

import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        
        //axios.post(`${BACKEND_URL}/signup`, { username, password })
        const response =await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
            
        })
        alert("Signin successful")
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        
        navigate("/dashboard");

    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
        <div className="bg-white rounded border min-w-48">

            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="p-4 m- w-24 flex justify-center items-center">
           <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true} />
        </div>
        </div>



    </div>;
}