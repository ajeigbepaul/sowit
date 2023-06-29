"use client";
import InputText from "@/components/InputText";
import SubmitButton from "@/components/SubmitButton";
import Image from "next/image";
import React, { useState } from "react";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
   const handleSubmit = async(e)=>{
    e.preventDefault();
    setIsLoading(true)
    try {
      e.preventDefault();
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        toast.success("Registered!!!");
        router.push("/login")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    
   }
  return (
    <div className="w-full h-screen">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-2/4 w-full h-screen hidden md:flex">
          <Image
            src="/banner2.jpg"
            alt="backgroundimg"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/4 w-full h-screen flex flex-col items-center justify-center bg-slate-900">
          <h2 className="font-medium text-2xl text-white">Register</h2>
          <form
            className="md:w-2/4 w-full px-4 md:px-0"
            onSubmit={handleSubmit}
          >
            <InputText
              type="text"
              placeholder="Enter your Username"
              name="username"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputText
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <SubmitButton
              className="w-full bg-amber-400 text-white text-base rounded-md cursor-pointer flex items-center justify-center px-2 py-2 mt-2 hover:bg-black hover:text-slate-100 transition duration-1000 ease-in-out"
              title="Register"
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
