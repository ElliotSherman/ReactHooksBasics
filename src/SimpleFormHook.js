import React from 'react';
import useFormState from './hooks/useFormState';

export default function SimpleFormHook(props) {
    const [text , setText , resetText ] = useFormState('')
    return (
        <div>
            <h1>Input Text is - {text}</h1>
            <input type='text' value={text} onChange={setText}/>
            <button onClick={resetText} >Reset</button>
            {/* you could have also used an inline handleReset like so - onClick ={()=> setText('')} */}
        </div>
    );
};

