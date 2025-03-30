import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginComponent = () => {

     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const SERVER_URL = process.env.SERVER_URL;
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/user/login",{
                email,
                password
            }) 
            
            console.log(res);
          navigate("/dashboard");
        } catch (error) {
          console.error("Error during registration:", error.response?.data || error.message);
        }
      };
    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="w-[500px] h-[400px] border-2 border-gray-300 bg-white rounded-xl">
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit}>
                        <span className="flex justify-center font-bold text-2xl mb-4 mt-4">Login</span>
                        <div>
                            <label className="font-bold">Email </label>
                            <input
                                placeholder="Enter your username"
                                className="m-2 p-2 border-2 border-gray-200 w-full"
                                type="email"
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-bold">Password </label>
                            <input
                                placeholder="Enter your password"
                                className="m-2 p-2 border-2 border-gray-200 w-full"
                                type="password"
                                required
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="m-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                        <p className="mt-4 flex justify-center">Don't have an account <a href="/register" className="text-blue-500 px-2">Register</a></p>
                        
                    </form>
                </div>
            </div>
        </div>
    );
    };
    