import { useState } from "react"

export default function FormInput(){
    const [name,setName] = useState('')
    return(
        <>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={() => setName}/>
            </div>
        </form>
        </>
    )
}