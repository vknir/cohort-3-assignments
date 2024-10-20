import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


function Login(props)
{

    const {auth, setAuth} = useContext(AuthContext)
    
    const  handleSubmit= (e)=>{
        e.preventDefault()
        setAuth( prev =>{
            return { ...prev, login :true}
        })
    }

    const handleChange =(e)=>{
        console.log(e.target.value)
        setAuth( (prev)=>{
            return { ...prev, username : e.target.value}
        })
    }
    

    return(<form onSubmit={ handleSubmit}>
        <input type="text" placeholder="Enter username" onChange={  handleChange }  ></input>
        <button type="submit">Login</button>
    </form>)
}

export default Login