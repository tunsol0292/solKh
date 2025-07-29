import { useState } from 'react';

const Counter_Minus10 = () => {

const [value, setValue] = useState(100);

return (
<>
    <h3>숫자 : {value}</h3>
    <button onClick={
    () => {
        setValue(value-10)
    }
    }>➖➖</button>
</>
);
};

export default Counter_Minus10;