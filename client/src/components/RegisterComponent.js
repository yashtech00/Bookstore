import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        username,
        email,
        password,
      });
        console.log(res);
        navigate("/dashboard")
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-[500px] h-[470px] border-2 border-gray-300 bg-white rounded-xl">
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <span className="flex justify-center font-bold text-2xl mb-4 mt-4">
              Register
            </span>
            <div>
              <label className="font-bold">UserName </label>
              <input
                placeholder="Enter your username"
                className="m-2 p-2 border-2 border-gray-200 w-full"
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Email</label>
              <input
                placeholder="Enter your email"
                className="m-2 p-2 border-2 border-gray-200 w-full"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-bold">Password </label>
              <input
                placeholder="Enter your password"
                className="m-2 p-2 border-2 border-gray-200 w-full"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
            <p className="mt-4 flex justify-center">
              Already have an account{" "}
              <a href="/login" className="text-blue-500 px-2">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
