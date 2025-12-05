import React from 'react'
import { useState } from 'react'

const Learnreact = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "") {
            alert('Username is required!');
            return;
        }

        if (!password.match(/^(?=.*[0-9])(?=.*[@])/)) {
            alert("password must include @ and a number");
            return;
        }

        alert("Form submitted successfully!");
        console.log("username:", username);
        console.log("password:", password);

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Enter Username</h2>
            <input type="text" name='' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <h2>Enter Password</h2>
            <input type="password" name="" id="" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Learnreact