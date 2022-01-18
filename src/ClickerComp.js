import React, {useState, useEffect} from 'react';

export default function ClickerComp(props) {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clickedMe ${count} times`
    })
    return (
        <>
        <hr/>
        <br />
        <button onClick={()=> setCount(count + 1)}><b>ClickMe {count}</b></button>
        </>
        
    );
};
