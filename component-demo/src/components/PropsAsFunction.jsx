import { useState } from "react";


export default function PropsAsComponent(){
    const [title,setTitle] = useState('React JS Course for Begineer.')

    return(
        <div>
           <h1>{title}</h1>
        <button onClick={() => setTitle('Ultimate react Hook Course')}>Change Title</button>
        </div>
    );
}