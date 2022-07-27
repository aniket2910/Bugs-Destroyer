import React, { useEffect, useState } from 'react';
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [FormData, setFormData] = useState({});
  const [btn,setBtn]=useState(true)
  const [types,setTypes]=useState("password")
  const [clickInp, setclickInp] = useState(false)
  const [pass,setPass]=useState(false)
  const navigate=useNavigate()

  function handleBtn(){
        if(clickInp && pass){
          setBtn(false)
        }
        else{
          setBtn(true)
        }
  }
  useEffect(()=>{
    handleBtn()
  },[clickInp,pass])
  const handleChange = (e) => {
    const inputName = e.target.name;
      setFormData({
        ...FormData,
        [inputName]: e.target.value,
      });

      
      if(e.target.value===''){
        setclickInp(false)

      }else{
          setclickInp(true)
        
      }
      if(inputName==="password"){
        if(e.target.value.length>=8){
          setPass(true)
        }
      }
  };
  const handleSubmit = (e) => {
  
      e.preventDefault();
      if (FormData) {
        axios
          .post("http://localhost:8080/auth/login", FormData)
          .then(({data}) => {
            // console.log(data)
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("User",JSON.stringify(data.user))
   
          })
          .catch((e) => alert(e.response.data.error));
      } else {
        alert("Invalid Credentials");
      } 
   
  };
  const rightLogoOnClick=()=>{
    setTypes(types==="password" ? "text" : "password")
}
  return (
   <div className={style.login_main}>
     <div className={style.home}>
    <div className={style.box} style={{marginTop:"30px",width:"100%"}}>
        {/* Images logo */}
         <form onSubmit={handleSubmit}>
        
         <div className={style.label_float}>
          <input type="text" name="email"
       onChange={handleChange}
        placeholder=' '
           required />
            <label>Username or Mobile Number or Email</label>
            </div> 
            <br/>
            <div className={style.label_float}>     
                    <input name="password" placeholder=' '
                        onChange={handleChange}
                        required 
                        type={types}
                        />
                         <label>Password</label>
                         </div>
              <p onClick={rightLogoOnClick} className={style.show}
                        style={clickInp ? {display:'block'} : {display:'none'}}>{types==="password"? "Show" : "Hide"} </p>
                                    
            <input type="submit" disabled={btn} value="Login" />
         </form>
         <div className={style.or}>
           <div ></div>
           <div >or</div>
           <div ></div></div>
         <div style={{display:'flex',alignItems:"center",justifyContent:"center",fontSize:"13px",gap:"10px"}}>
            <img height="14px" width="14px" src="https://www.bing.com/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="facebook"/>
            <span style={{color: "#385185",cursor:"pointer"}}>Login with Facebook</span>
         </div>
         <br/>
         <a style={{color:"rgba(var(--fe0,0,55,107),1)",fontSize:"13px"}} href="#" >Forgot Password?</a>
    </div>
    <div className={style.box} style={{fontSize:"13px",width:"100%"}}>
        <p style={{color: "rgba(var(--i1d,38,38,38),1)"}}>Don't have an account? <a style={{color:"rgba(var(--d69,0,149,246),1)"}} href="/signup">Sign up</a> </p>
    </div>


    </div>
    <br/>
    </div>
  )
}

export default Login