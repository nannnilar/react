

export default function UserLogin(){
    const isLoggedIn = true;
    return(
        <>
        {/* {
            isLoggedIn ? <h1>Welcome To React JS</h1>
            : <h2>Your cannot access the project.</h2>
        } */}

        {
            isLoggedIn && <h1>Hello I am Logged In</h1>
        }
        </>
    )
}