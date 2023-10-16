import { useEffect, useState } from "react";

export default function ExplainEffect(){
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title=`You clicked: ${count} times.`
    })

    return(
        <>
        {count}
        <button onClick={() => setCount(count+1)}>+</button>
        </>
    )


}