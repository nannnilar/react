
 

export default function DemoComponent({name,country,children}){
 
    return(
        <div>
            <h1>I am {name} From {country}</h1>
            <h2>{children}</h2>
        </div>
    )
}