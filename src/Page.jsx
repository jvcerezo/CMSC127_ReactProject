import React from "react";
import { useNavigate } from "react-router-dom";
function Page(){
    return(
        <div>
      <nav>
      <ul>
      <li onMouseDown={()=>{
        navigate('/login');
      }}>Login</li>
      <li onMouseDown={()=>{
        navigate('/signin');
      }}>Sign In</li>
      </ul>
      </nav>
    </div>
    );


}

export default Page;