import React,{useState} from 'react';

export default function HookComponent(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Hello this is a functional component</h1>
            <h2>Count Value is ..{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    );
};