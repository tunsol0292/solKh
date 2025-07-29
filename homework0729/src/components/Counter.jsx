import { useState } from 'react';
import './Counter.css'

const Counter = () => {

const [value , setValue] = useState(1);

    return (
        <>
        <h3>숫자 : {value}</h3>
        <button onClick={
            () => {
                setValue(value+1)
            }
        }>➕</button>
        </>
    );
};

export default Counter;