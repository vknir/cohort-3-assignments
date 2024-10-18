export default function Input(props)
{
    return (<>
    <label>{props.label}</label>
    <input type="text" placeholder={props.label}></input>
    </>)
}