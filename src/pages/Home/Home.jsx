import React from "react";
import { useState, useEffect } from "react";
import "./home.scss"
const axios =require("axios");

export default function Home() {
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  
  useEffect(() =>{
    const token = localStorage.getItem('token');
    if(token) {
      window.location.href = '/dashboard'
    }
  })

  async function handleSubmit (e){
    e.preventDefault();
    let user;
    await axios.post('http://localhost:8000/login/', {
      email: Email,
      password: Password
    })
    .then(response =>{
      user=response;
    })
    if(user.data.status === 'success'){
      localStorage.setItem('token', user.data.user);
      window.location.href='/dashboard'
    }else{
      alert('Login failed');
      window.location.href='/'
    }
  }

  return (
    <div className="home">
      <div className="d-flex flex-column">
        <h1 className="">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div class="row g-3 align-items-center mb-3">
            <div className="col-4">
            <label for="exampleInputEmail1" class="form-label">
             Email address
            </label>
            </div>
            <div className="col-8">
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div className="col-4">
            <label for="exampleInputPassword1" class="form-label">
            Password 
            </label>
            </div>
            <div className="col-8">
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
          Login
          </button>
        </form>
        <div className="m-2"> 
          If you haven't registered yet, <a href='/register'>Register Now</a>
        </div>
      </div>
    </div>
  );
}
