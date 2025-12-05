import React from "react";
import { useState } from "react";

const Learnreact = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      alert("Username is required!");
      return;
    }

    if (!password.match(/^(?=.*[0-9])(?=.*[@])/)) {
      alert("password must include @ and a number");
      return;
    }

    alert("Form submitted successfully!");
    console.log("username:", username);
    console.log("password:", password);
  };

  return (
    <div className="w-[1000px] h-auto  p-5 flex gap-5 items-center justify-between bg-white">
      <div className="w-full h-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h2 className="font-extrabold ">Welcome</h2>
            <p>Login for a seamless shopping experience</p>
            <h2 className="font-semibold">Username</h2>
            <input
                type="text"
                name=""
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 mb-3"
            />
            <h2 className="font-semibold">Password</h2>
            <input
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mb-8"
            />
            <button type="submit" className="bg-red-600 p-2 text-white">
                Login
            </button>
        </form>
      </div>
      <div className="bg-gray-300 rounded w-full h-full py-60 px-5">
        image
      </div>
    </div>
  );
};

export default Learnreact;
