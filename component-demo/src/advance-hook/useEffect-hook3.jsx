import { useEffect, useState } from "react"

export default function EffectExample3(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('This is Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect is called')
        window.addEventListener('mousemove',logMousePosition)
        return () =>{
            window.addEventListener('mousemove',logMousePosition)
            console.log('component is unmounted, and the code is cleaned.')
     }
        
},[])

    return (
        <>
        <p>Mouse Position</p>
        coordinate X,Y - {x} ,{y}
        </>
    )
}