import React, { useContext, useState } from 'react';
import '../App.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [NavigateTo, setNavigateTo] = useState(false);
  const [Display3, setDisplay3] = useState('none');
  const {Setuserinfo} = useContext(UserContext);

  async function Login(event) {
    event.preventDefault();
    console.log(Email, password) //To observe the given data
    const result = await fetch("http://localhost:3000/login", {
      method: "POST", //POST method to create new data
      headers: {'Content-Type': 'application/json'},  //the data is sent in json format
          credentials: 'include' ,  //used incase of authentication
      body: JSON.stringify(
        {
          Email,
          password
        }//sending the inputs as json data to the backend to create APIs
      )
    }
    )
    if (result.ok) {
       result.json().then(data =>{
         Setuserinfo(data);
         setNavigateTo(true);
       }) 
    }
    else if(result.status !== 200 || result.status === 400) {
      setDisplay3('block')
      setTimeout(() => {
        setDisplay3('none');
      }, 5000);

    }


  }
  if(NavigateTo === true){
    return <Navigate to={'/'}/>
  }

  return (
    <div className='Login'>

      <div className="alert alert-danger text-danger" role="alert" style={{ display: Display3 }}><div className="inner"><i className="bi bi-exclamation-triangle-fill"></i><span> Invalid Credentials</span></div>
      </div>
      <h2>LOGIN</h2>
      <form action="" className='login-form' onSubmit={Login}>
     
        <input type='email' name="email" id="email" placeholder='Enter your email-id' value={Email} onChange={event => setEmail(event.target.value)} />

        <input type='password' name="password" id="password" placeholder='Enter your password' value={password} onChange={event => setpassword(event.target.value)} />

        <button type="submit">Login</button>
      </form>

    </div>
  )
}
