import React,{useState} from 'react';


// import './components/App.css';



const Signup = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

const collectdata=async()=>
{
  console.log(name,email,password)
  const result=await fetch("http://localhost:5000/register",{
    method:'post',
    body:JSON.stringify({name,email,password}),
    headers:{
      'Content-Type':'application/json'
    },
  })
  let res=await result.json();
  console.log(res);
}
 
   
    return (
        <div className="container">
          <h2>Register</h2>
          {/* <form onSubmit={handleSubmit}> */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <button  onClick={collectdata}type="button">Register</button>
            </div>
          {/* </form> */}
        </div>
      );
  };

export default Signup;