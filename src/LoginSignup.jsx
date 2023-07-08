import React, { useRef, useState } from 'react'
import "./login.css"
import {  loginApp, signup } from './useLogin'
import { useDispatch, useSelector } from 'react-redux'

function LoginSignup() {

    const user = useSelector((state)=>state.user)

const dispatch = useDispatch()
    const [onSignUp, setOnSingUp] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const movableRef = useRef()

    const handleLeftClick =(e)=>{
       movableRef.current.style.left = '10px';
       movableRef.current.style.top = '10px';
       setOnSingUp(true)
    }
    const handleRightClick =(e)=>{
        setOnSingUp(false)
        movableRef.current.style.left = '70%';
        movableRef.current.style.top = '10px';
    }

    const handleFormSubmit =(e)=>{
        e.preventDefault()
        if(onSignUp){
            signup(name, email, password, dispatch)
        }else{
            loginApp(email, password, dispatch)
        }
    }

  return (
    <div className='login'>
        
      <div className="login__window">
        <img className='login__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
        <div className="form">
            <div className="form__switch">
                <div ref={movableRef} className="movable"></div>
                <div className="left" onClick={handleLeftClick}>
                    <p>Sign Up </p>
                </div>
                <div className="right" onClick={handleRightClick}>
                <p>Login</p>
                </div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <input style={{visibility: `${onSignUp ? "visible" : "hidden"}`}} type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="email" placeholder='email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type='submit' > Submit </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
