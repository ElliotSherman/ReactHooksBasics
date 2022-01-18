import React, {useState} from 'react';

export default function HookTogglingExample(props) {
    const [loggedIn , setLoggin] = useState(false)
    return (
        <div>
            <hr/>
            <h2>Basic Toggle funcionality</h2>
            <h3>{loggedIn ? "Logged In" : "Please login"}</h3>
            <button onClick={()=> setLoggin(!loggedIn)}>{loggedIn ? "Log Out" : "LogIn"}</button>
            <hr/>
            
        </div>
    );
};