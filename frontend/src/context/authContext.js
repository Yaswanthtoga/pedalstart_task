import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user"))||null);
    const login = async (inputs)=>{
        const res = await axios.post("/auth/login",inputs);
        const data = {id:res.data.user._id,email:res.data.user.email}
        setCurrentUser(data);
    }

    const logout = async ()=>{
        await axios.post("/auth/logout");
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login,logout}}>
          {children}
        </AuthContext.Provider>
    )
}