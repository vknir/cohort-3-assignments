import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

function AppBar(props)
{
    const {auth, setAuth} = useContext(AuthContext)

    const handleClick=()=>{
        setAuth((prev)=>{
            return {...prev, login:false}
        })
    }

    return(
    <>
        <div>
            <p>Auth System Demo</p>
            <p>Welcome, {auth.username}!</p>
            <button onClick={ handleClick  } >Logout</button>
        </div>
         
    </>)
}

export default AppBar