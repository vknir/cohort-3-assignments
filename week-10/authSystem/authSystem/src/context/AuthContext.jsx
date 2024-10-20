import { createContext, useState } from "react";


const AuthContext= createContext({
    auth:{
        login:false,
        username:''
    },
    setAuth:()=>{}
});

const  AuthContextProvider=({children})=>{

    const [auth, setAuth]=useState({login:false, username:''})

        return(
            <AuthContext.Provider value={{auth, setAuth}}>
                {children}
            </AuthContext.Provider>
        )

}



export  {AuthContextProvider , AuthContext};