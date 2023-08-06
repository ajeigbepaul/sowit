"use client";

import { FaGoogle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
function LoginInterface() {
  const { data: session } = useSession();
  console.log(session?.user?.id);
  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center text-white overflow-x-hidden">
      <div className="w-full max-w-xs mx-auto flex flex-col items-center justify-center space-y-3 py-2 px-2">
        <div
          onClick={() => signIn()}
          className="py-2 rounded-lg bg-slate-50 text-black px-2 flex items-center cursor-pointer transition-all duration-500 "
        >
          <FiMail size={18} color="black" className="mx-2" />
          Login with email
        </div>
        <div
          onClick={() => signIn("google",{callbackUrl:'http://localhost:3000'})}
          className="py-2 rounded-lg border border-orange-300 px-2 flex items-center cursor-pointer hover:border-white transition-all duration-500"
        >
          <FaGoogle size={18} color="orange" className="mx-2" />
          Login with Google
        </div>
      </div>
    </div>
  );
}

export default LoginInterface;
