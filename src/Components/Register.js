import React, { useState } from 'react'

export default function Register() {
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [password,setpassword] = useState('');
  const [Display1,setDisplay1] = useState('none');
  const [Display2,setDisplay2] = useState('none');

 async function Register(event){
   console.log(Name)
   console.log(Email)
   console.log(password) //To observe the given data
   event.preventDefault();
   const result= await fetch("http://localhost:3000/register",{
      method:"POST", //POST method to create new data
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( 
        {
          Name,
          Email,
          password
        }//sending the inputs as json data to the backend to create APIs
        )
  }
  )
  if (result.status === 200){
     setDisplay1('block')
     setTimeout(() => {
      setDisplay1('none');
   }, 5000);
    }
    else{
    setDisplay2('block')
    setTimeout(() => {
      setDisplay2('none');
   }, 5000);
  }
}
 
  return (
    <div className='Register'>
      <div className="alert alert-success text-success" role="alert" style={{display:Display1}}><div className="inner"><i className="bi bi-check-circle-fill"></i><span>Registered Succesfully </span></div></div>

      <div className="alert alert-danger text-danger" role="alert" style={{display:Display2}}><div className="inner"><i className="bi bi-exclamation-triangle-fill"></i><span>Invalid Registration</span> </div>
      </div>

        <h2>Register</h2>
       <form action="" className='login-form' onSubmit={Register}>
           <input type='text' name="name" id="name" placeholder='Enter your name' value={Name} onChange={event => setName(event.target.value)}/>

           <input type="email" name="email" id="email" placeholder='Enter your email-id' value={Email} onChange={event => setEmail(event.target.value)}/>

           <input type='password' name="password" id="password" placeholder='Enter your password' value={password} onChange={event => setpassword(event.target.value)}/>

           <button>Register</button> 
       </form>
    </div>
  
  )
}

