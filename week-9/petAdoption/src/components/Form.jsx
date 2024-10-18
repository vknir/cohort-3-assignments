// import { useState } from "react";

import Input from "./Input";

export default function Form(props)
{
    
    const inputList = [{label:"Pet Name"},{label:"Pet Type"}, {label:"Breed"}, {label: "Your Name"},{label: "Email"},{label:"Phone"}]

    return (<>
    <form>
       {inputList.map((inputItem,index)=>{
        return <Input key={index} label={inputItem.label} />
       })}
       <button onClick={props.onClick} type="submit">Submit</button> 
    </form>

    </>);
}