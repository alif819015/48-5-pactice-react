import React, { useState } from 'react';
import './Mobile.css';

const Mobile = () => {
    return (
        <div>
           <Battery></Battery> 
        </div>
    );
};

function Battery(){
    const [count, setCount] = useState(100);
    const countClick = () =>setCount(count - 10);
    const addCount = () => setCount(count + 10);


    return(
        <div className='Battery'>
            <h3>{count} %</h3>            
            <button onClick={countClick}>battery down</button>
            <button onClick={addCount}>battery Up</button>
        </div>
    )
}

export default Mobile;