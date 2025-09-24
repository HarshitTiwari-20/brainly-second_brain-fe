import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function Signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        //axios.post(`${BACKEND_URL}/signup`, { username, password })
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
            
        })
        alert("Signup successful");
        navigate("/signin");
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
        <div className="bg-white rounded border min-w-48">

            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="p-4 m- w-24 flex justify-center items-center">
           <Button onClick={Signup} loading={false} variant="primary" text="Signup" fullWidth={true} />
        </div>
        </div>



    </div>;
}