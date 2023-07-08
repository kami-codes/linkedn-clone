import { Avatar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApp } from './useLogin';

function Icons({ IconComponent, text, photourl, isavatar, type, iconColor,avatarName, logout }) {
  
  const dispatch = useDispatch()
const user = useSelector((state)=>state.user.userInfo)
  const handleClick =()=>{
    if(logout){
      logoutApp(dispatch)
    }
  }

  return (
    <div className={`icons__component ${type}`} onClick={handleClick}>
    {isavatar && <Avatar>
      {user && user.displayName ? user.displayName[0] : ""}
            </Avatar>}
      {isavatar === undefined && <IconComponent style={{color: iconColor}} className={`icons__icons ${type}` } />}
      <h4 className={`icons__text ${type}`}>{text}</h4>
    </div>
  );
}

export default Icons;
