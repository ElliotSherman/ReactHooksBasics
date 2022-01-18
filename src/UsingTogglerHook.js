import React from 'react';
import useToggle from './hooks/useToggle';
export default function HookTogglingExample(props) {
    const [loggedIn , setLoggin] = useToggle(false)
    const [isDisplayed , toggleIsDisplayed] = useToggle(false)
    return (
        <div>
            <h1>using the useToggle Hook!</h1>
            <br />
            <h2>Reusable Toggle funcionality</h2>
            <h3>{loggedIn ? "Logged In" : "Please login"}</h3>
            <button onClick={()=> setLoggin(!loggedIn)}>{loggedIn ? "Log Out" : "LogIn"}</button>
            <hr/>
            <h3>{isDisplayed ? "Element is Displaying" : "Element is Hidden"}</h3>
            <button onClick={()=> toggleIsDisplayed(!isDisplayed)}>{isDisplayed ? "Hide" : "Display"}</button>
            <hr/>
        </div>
    );
}
