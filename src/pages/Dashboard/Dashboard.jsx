import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import { isExpired, decodeToken } from "react-jwt";
import "./dashboard.scss"
import axios from 'axios';

export default function Dashboard() {
    
   const [FirstName, setFirstName]= useState('');
   const [LastName, setLastName]= useState('');
   const [Email, setEmail]= useState('');
   const [Phone, setPhone]= useState('');
   const [Address,setAddress]= useState(''); 

   async function callData(){
       console.log('callData called');
       await axios.get('http://localhost:8000/user/',{
           headers:{
               'x-access-token': localStorage.getItem('token')
           }
       }).then(response => {
           console.log(response);
          const {Firstname, Lastname, Phone, Address, Email} = response.data.details;
          setFirstName(Firstname);
          setLastName(Lastname);
          setPhone(Phone);
          setAddress(Address);
          setEmail(Email);
       })
   }

   const Logout = async function(){
       localStorage.removeItem('token');
       alert('Logged out sucessfully')
       window.location.href='/';
   }

    useEffect(() => {
        const token =localStorage.getItem('token');
        if(token){
           const user= decodeToken(token);
           if(!user){
               localStorage.removeItem('token');
               window.location.href('/');
           }else{
               callData();
           }
        }else{
            alert('Login first');
            window.location.href='/'
        }
    }, [])

  return <div className="dashboard">
      <div className="d-flex flex-column">
        <div className=""> 
         Email : {Email}
        </div>
        <div className=""> 
         FirstName : {FirstName}
        </div>
        <div className=""> 
         LastName : {LastName}
        </div>
        <div className=""> 
         Address : {Address}
        </div>
        <div className=""> 
         Phone : {Phone}
        </div>
        <button onClick={Logout} className="btn btn-primary">Logout</button> 
      </div>

      
  </div>;
}
