import React, { useEffect, useState } from 'react';
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from './logo.png'
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';

import { MdLockOutline } from "react-icons/md";


import {useDispatch, useSelector} from 'react-redux'
import { getLoginToken } from '../../redux/auth/Login/action';
const Login = () => {
  const [FormData, setFormData] = useState({});
  const [btn, setBtn] = useState(true)
  const [types, setTypes] = useState("password")
  const [clickInp, setclickInp] = useState(false)
  const [pass, setPass] = useState(false)
  const navigate = useNavigate()


const dispatch = useDispatch()
const { res, loading, error } = useSelector((store) => store.login)



  function handleBtn() {
    if (clickInp && pass) {
      setBtn(false)
    }
    else {
      setBtn(true)
    }
  }
  useEffect(() => {
    handleBtn()
  }, [clickInp, pass])
  const handleChange = (e) => {
    const inputName = e.target.name;
    setFormData({
      ...FormData,
      [inputName]: e.target.value,
    });


    if (e.target.value === '') {
      setclickInp(false)

    } else {
      setclickInp(true)

    }
    if (inputName === "password") {
      if (e.target.value.length >= 8) {
        setPass(true)
      }
    }
  };
  const handleSubmit = (e) => {

    e.preventDefault();

    if (FormData) {
     let payload = JSON.stringify(FormData);
      dispatch(getLoginToken(payload))




    //   axios
    //     .post("http://localhost:8080/auth/login", FormData)
    //     .then(({ data }) => {
    //       localStorage.setItem("jwt", data.token)
    //       localStorage.setItem("User", JSON.stringify(data.user))

    //     })
    //     .catch((e) => alert(e.response.data.error));
   
  //  console.log(FormData)
    } else {
      alert("Invalid Credentials");
    }

    console.log(res);
  };
  const rightLogoOnClick = () => {
    setTypes(types === "password" ? "text" : "password")
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  m-auto bg-slate-900 w-full'>

      <form className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center ' 
       onSubmit={handleSubmit}>



        <div className='bg-slate-700 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>

          <div className='w-3/5 p-2'>
            <div className='text-left font-bold'>
              <img src={logo} alt="" className='max-h-16' />
            </div>
            <div className='py-0'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Signin to Account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'> </div>
              <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-500 rounded-full p-3 mx-1 hover:bg-green-500' >
                  <FaFacebook className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-500 rounded-full p-3 mx-1  hover:bg-green-500' >
                  <FaGoogle className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-500 rounded-full p-3 mx-1 hover:bg-green-500' >
                  <FaLinkedinIn className='text-sm' />
                </a>
              </div>
              <p className='text-white my-3 '> or  use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md'>
                  <FaRegEnvelope className='text-gray-400 mr-2' />
                  <input type="email" name="email" placeholder='Email'  onChange={handleChange}
                   className='bg-gray-100 outline-none text-sm min-w-fit pr-12 
                  flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3'>
                  <MdLockOutline className='text-gray-400 mr-2' />
                  <input type="password" name="password" placeholder='Password' onChange={handleChange}
                   className='bg-gray-100 outline-none text-sm min-w-fit pr-12 
                  flex-1'/>
                </div>
                <div className='flex justify-between w-64 mb-5 '>
                  <label className='flex items-center text-sm text-white'>
                    <input type="checkbox" name="remember" className='mr-1 text-base'/>
                    Remember me
                  </label>
                  <a href="#" className='text-sm'>Forgot Password</a>
                </div>
                <button className='border-2 border-white rounded-full px-12 py-2 inline-block font-bold tracking-wider
                 hover:bg-white hover:text-green-500'
                 type='submit' 
                 >Log In</button>
              </div>
            <p className='mt-4 text-sm mb-2'>Don't have an account ? <a href='#' className='font-semibold cursor-pointer text-green-500 '>Create and account</a></p>
            </div>
          </div>

          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 '>
            <h2 className='text-3xl font-bold mb-2'>Hello, friends!</h2>
            <div className='border-2 w-10 border-white inline-black mb-2 justify-center m-auto' ></div>
            <p className='mb-10'>Fill up personal information ans start journey with us.</p>
            <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
             hover:text-green-500 tracking-wider'>Signup</a>
          </div>

        </div>

      </form>
    </div>





  )
}

export default Login