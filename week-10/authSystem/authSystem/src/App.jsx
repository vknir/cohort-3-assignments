import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import Login from './components/Login'
import AppBar from './components/AppBar'
import Home from './components/Home'

function App()
{
    const {auth, setAuth}= useContext(AuthContext)



    return <>
    { auth.login ? <><AppBar/> <Home/> </> : <> <Login/></>}
    </>
}

export default App