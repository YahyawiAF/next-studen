import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Logo from "../public/Logo.svg";
import Button from "./Button";
import Input from "./Input";
import Supabase from "../supabase";
function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Clear previous errors
    setError("");
    // Validate email and password
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Sign in with email and password
      const { data, error } = await Supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        console.log(error.message);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    // Validate email and password
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Sign in with email and password
      const { data, error } = await Supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        console.log(error.message);
      } else {
        setIsAuthenticated(true); // Set authentication state to true if login is successful
        router.push("/studash"); // Redirect to the dashboard after successful login
      }
    } catch (error) {
      setError(error.message); // Catch unexpected errors
      console.log(error.message);
    }
  };
  return (
    <div className="px-10 md:px-20 py-5 md:py-16 h-full min-h-screen flex-1 flex flex-col space-y-10 bg-[#fbf9f9]">
      <div className="space-y-3">
        <img
          src={Logo.src}
          className="w-20 h-20 rounded-lg flex md:hidden object-contain"
        />
        <h1 className="hidden sm:flex text-2xl font-bold">Login</h1>
        <h1 className="sm:hidden text-2xl font-bold text-blue-900"></h1>
        <p className="text-gray-500/90 font-medium font-circular">
          Provide your account information to continue
        </p>
      </div>
      <div>
        <form className="space-y-3">
          <Input
            label="Enter Username"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Username"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="Enter Password"
            type="password"
            placeholder="Enter Password"
          />
          <Button
            label="Continue"
            type="submit"
            position="right"
            onClick={handleLogin}
          />
        </form>
        <img src="login.svg" alt="Animation" className="animated-svg" />
      </div>
    </div>
  );
}

export default LoginContent;
