import React, {useState} from "react";
import "./register.scss";
const axios = require("axios");

export default function Register() {
  const [Email,setEmail] = useState('');
  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [Address,setAddress] = useState('');
  const [Phone,setPhone] = useState('');
  const [Password,setPassword] = useState('');
 
  async function handleSubmit(e){
    e.preventDefault();
    let data;
    if(Password.length<=7){
      alert("Please enter a password of minimum length 8");
      return ;
    }
    await axios.post('http://localhost:8000/register/', {
      name:FirstName,
      last:LastName,
      phone:Phone,
      address:Address,
      email: Email,
      password: Password
    })
    .then(response => {
      data = response.data;
    } )

    if(data.status==='ok'){
      alert('Registered sucessfully')
      window.location.href='/'
    }
  }

  return (
    <div className="register">
      <div className="d-flex flex-column">
        <h1 className="">Sign Up</h1>
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
              <label for="Name" class="form-label">
               First Name
              </label>
            </div>
            <div className="col-8">
              <input value={FirstName} onChange={(e) => setFirstName(e.target.value)} type="text" class="form-control" id="Name" />
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div className="col-4">
              <label for="LastName" class="form-label">
                Last Name
              </label>
            </div>
            <div className="col-8">
              <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} class="form-control" id="LastName" />
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div className="col-4">
              <label for="phone" class="form-label">
                Phone Number
              </label>
            </div>
            <div className="col-8">
              <input value={Phone} onChange={(e)=> setPhone(e.target.value)} type="number" class="form-control" id="phone" />
            </div>
          </div>
          <div class="row g-3 align-items-center mb-3">
            <div class="col-4">
              <label for="Address" class="form-label">
                Address
              </label>
            </div>
            <div className="col-8">
              <input value={Address} onChange={(e)=> setAddress(e.target.value)} type="text" class="form-control" id="Address" />
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
            Register
          </button>
        </form>
        <div className="m-2"> 
          If you have an account, <a href='/'>Login here</a>
        </div>
      </div>
    </div>
  );
}
