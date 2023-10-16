
import './myStyleSheet.css'

export default function RegularStyleSheet(props){
    const className=props.primary ? 'primary':'secondary'
    return(
        <>
        <h1 className={className}>Learning how to style react component.</h1>
        </>
    )
}