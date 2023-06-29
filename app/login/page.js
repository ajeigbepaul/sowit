"use client"
import InputText from '@/components/InputText';
import SubmitButton from '@/components/SubmitButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useRef } from "react";
import { signIn } from "next-auth/react";

function Login() {
    const router = useRouter()
    const email = useRef(null);
    const password = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      try {
        const data = await signIn("credentials", {
          email: email.current,
          password: password.current,
          redirect: true,
          callbackUrl: "/",
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    };
  return (
    <div className="w-full h-screen">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-2/4 w-full h-screen hidden md:flex">
          <Image
            src="/banner3.jpg"
            alt="backgroundimg"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/4 w-full h-screen flex flex-col items-center justify-center bg-slate-900">
          <h2 className="font-medium text-2xl text-white">Login</h2>
          <form
            className="md:w-2/4 w-full px-4 md:px-0"
            onSubmit={handleSubmit}
          >
            <InputText
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => (email.current = e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => (password.current = e.target.value)}
            />
            <SubmitButton
              className="w-full bg-yellow-400 text-white text-base rounded-md cursor-pointer flex items-center justify-center px-2 py-2 mt-2 hover:bg-black hover:text-slate-100 transition duration-1000 ease-in-out"
              title="Login"
              isLoading={isLoading}
            />
          </form>
          <div className="md:w-2/4 w-full flex flex-col mt-3">
            <div className="text-white w-full text-sm text-center">
              Forgot your password?{" "}
              <span className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer">
                Recover password
              </span>
            </div>
            <div className="text-white w-full text-sm text-center">
              You have not registered?{" "}
              <span
                className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer"
                onClick={() => router.push("/register")}
              >
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login