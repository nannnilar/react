
export default function Employee(props){
    
    const {name,gender,country,age} = props
    return (
        <div>
            <h2>{`Name: ${name} Gender: ${gender} Country: ${country} Age: ${age}`}</h2>
            
        </div>
    )
}