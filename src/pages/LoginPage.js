import React, { useState } from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  return (
    
      <div className="login-parent">
            <div className="row justify-content-center">
        <div className="col-md-4 z1">
          <div className="login-form">
          <h2>Login</h2>
            <hr />
            <input type="email" value={email} placeholder="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
             <input type="password" value={password} placeholder="password"  className="form-control" onChange={(e)=>setPassword(e.target.value)} />
             
              <button className="my-3">LOGIN</button>
          <hr />
          <Link to='/RegisterPage'>Click here to register</Link>
          
          </div>

</div>
          <div className="col-md-5 z1">
          <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
       

 

</div>

<div className="login-bottom">

</div>
  </div>
    
  );
}

export default LoginPage;
