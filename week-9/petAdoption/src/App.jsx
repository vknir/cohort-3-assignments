import { useState } from "react";

function App(){
const [formEntry, setFormEntry]= useState({})
const [table, setTable]= useState([]);
const [displayTable, setDisplayTable]= useState(false)

function handleSubmit(event)
{
    event.preventDefault(); 
    // console.log(formEntry)
    setTable((previous)=> [formEntry, ...previous   ])

    // console.log(table)
    setDisplayTable( (prev)=>{return !prev})

}

function handleChange(event){
    const name = event.target.name;
    const value= event.target.value;

    

    
    setFormEntry(values => ({...values, [name]: value}))
}



    return <>
    { !displayTable &&<form onSubmit={handleSubmit}>
        <label>Pet Name</label>
        <input name="petName"  onChange={handleChange}></input> 

        <label>Pet Type</label>
        <input name="petType"   onChange={handleChange} ></input>

        <label>Breed</label>
        <input name="breed"   onChange={handleChange} ></input>

        <label>Your Name</label>
        <input name="yourName"   onChange={handleChange} ></input>

        <label>Email</label>
        <input name="email"   onChange={handleChange} ></input>

        <label>Phone</label>
        <input name="phone"      onChange={handleChange} ></input>

        <button type="submit">Submit</button>        
    </form>}
    
    {displayTable && <Table table={table} /> }
    { displayTable && <button onClick={ ()=>{setDisplayTable(( prev)=>!prev)}} >Go Back</button>}
    </>


}

function Table(props){

    const tableRows = props.table.map( (row,indexed)=>{
        return <tr key={props.table.length+' '+indexed+' '+Math.random()}> 
            <td >{row['petName']}</td>
            <td >{row['petType']}</td>
            <td >{row['breed']}</td>
            <td >{row['yourName']}</td>
            <td >{row['phone']}</td>
            <td >{row['email']}</td>
        </tr>
    })
    return<> 
    <table>
        <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed </th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
       {tableRows}
       <tbody></tbody>
    </table>
    
    </>
}

export default App;