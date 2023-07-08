import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase";
import { useDispatch } from "react-redux";
import { signOutApp, signin } from "./features/userSlice";


export const signup = async(name, email, password, dispatch)=>{

    
    const data = await createUserWithEmailAndPassword(auth, email, password)
    dispatch(signin({displayName: name, email: email, userId: data.user.uid}))
    const data2 = await updateProfile(data.user, {
        displayName: name
    })
}

export const logoutApp = async(dispatch)=>{
await signOut(auth)

dispatch(signOutApp())
}

export const loginApp = async(email, password, dispatch)=>{
    const data = await signInWithEmailAndPassword(auth, email, password)
    console.log(data)
}