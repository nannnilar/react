
export default function ClickEventHandler(){
    function clickHandler(){
        console.log('You Click the Action Button.')
    }
    return(
        <>
            <button onClick={clickHandler}>Action </button>
        </>
    )
}