import { useState } from 'react';

const CounterMinus = () => {

const [value, setValue] = useState(10);

return (
<>
    <h3>숫자 : {value}</h3>
    <button onClick={
    () => {
        setValue(value-1)
    }
    }>➖</button>
</>
);
};

export default CounterMinus;