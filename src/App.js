import React from 'react';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCouner from './HoverCouner';
import User from './User';

const App=()=>{
    return(
        <div>
            <Counter 
            render={(count, handleClick)=> (
                <ClickCounter count={count} handleClick={handleClick}/>
            )}/>
            <Counter 
            render={(count, handleClick)=>(
                <HoverCouner count={count} handleClick={handleClick}/>
            )}/>
            {/* <ClickCounter/>
            <HoverCouner/>
            <User name={(isLoggedIn)=> isLoggedIn ? "shubham" : "Guest"}/> */}
        </div>
    )
}
export default App