import {useState} from "react"
import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import {Button} from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios";
import { useNavigate } from "react-router-dom"
export const Signup = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className = "bg-slate-300 h-screen flex justify-center">
        <div className = "flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Sign Up"}/>
                <SubHeading msg = {"Enter your details to create an account"}/>
                <InputBox onChange={(e) => {
              setFirstName(e.target.value);
                }} label = {"First Name"} placeholder={"Enter your first name"}/>
                <InputBox onChange={(e) => {
              setLastName(e.target.value);
                }} label = {"Last Name"} placeholder={"Enter your last name"}/>
                <InputBox onChange={(e) => {
             setUsername(e.target.value);
                }} label = {"Email Address"} placeholder={"Enter your email address"}/>
                <InputBox onChange={(e) => {
              setPassword(e.target.value);
                }} label = {"Password"} placeholder={"Password"}/>
                <div className="pt-4">
                    <Button 
                    onClick = {async() =>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashoboatd")
                    }}
                    label = {"Sign Up"}
                    />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>

        </div>
        
    </div>
}