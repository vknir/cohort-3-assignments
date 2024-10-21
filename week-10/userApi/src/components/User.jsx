import { useEffect, useState } from "react";
import axios from 'axios'

import Cards from "./Cards";
const URL = 'https://randomuser.me/api'

function User()
{
    const [users, setUsers]= useState([])
    const [number , setNumber]=useState(10)
    const [fetch, setFetch]=useState(false) 
    

    useEffect( ()=>{
        
        async function updateUsers()
        {
            let newUser=[];
            for( let i=0;i<number;i++){
                const {data}=  await axios.get(URL)
                newUser.push(data)
            }

            
            setUsers( (prev)=>{
                return prev.concat( newUser)
            })
        }

        
            updateUsers();
    }, [number, fetch])

    const userCards =  users.map((item,index)=>{
        const firstName= item.results[0].name.first
         const lastName =  item.results[0].name.last
         const imageURL = item.results[0].picture.medium
        return <Cards key={index} firstName={firstName} lastName={lastName} imageURL={imageURL} />

        
    })

    return<><div>
    <h1>Random Users</h1>
    {userCards}
    <button onClick={ ()=>{ setFetch(true)}}  >Load More</button>
    </div></>
}

export default User