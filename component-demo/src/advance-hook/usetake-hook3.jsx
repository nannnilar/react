import { useState } from "react"

export default function Counter3(){
    const [employee,setEmployee] =useState({name:"",country:""})

    return(
        <>
        <input type="text" value={employee.name} onChange={e => setEmployee(...employee,{name:e.target.value})}/>
        <br />
        <input type="text"  value={employee.country} onChange={e => setEmployee(...employee,{country:e.target.value})}/>
        <br />
        <div><h3>My Name is {employee.name} from {employee.country}</h3></div>

        <div><p>{JSON.stringify(employee)}</p></div>
        </>
    )
}