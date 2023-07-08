import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import "./App.css";
import Feed from './Feed';
import LoginSignup from './LoginSignup';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { signin } from './features/userSlice';

function App() {

  const dispatch = useDispatch()
const user = useSelector((state)=> state.user.userInfo)
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(signin({displayName: user.displayName, email: user.email}))
        console.log(user)
      }
    })
  }, [])

  return (<>
    <div className="App">
      {user === null ?  <LoginSignup /> : <><Header /> 
       <Feed /> </>}
    </div>
  </>
  );
}

export default App;
