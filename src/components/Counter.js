import {useState} from "react";

// syntax: const [state,setState] = useState(intialState"('',[],0)")

const Counter = ()=>{
    const [count,setCount] = useState(0);

    const incrementCounter = ()=>{
        //update count by 1
        setCount(count +1);
    }
    //test dicrementCounter
    const dicrementCounter =()=>{
        setCount(count-1);
        if(count<=0){
            setCount(0);
        }
    }
    return(
        <div>
          <h3>Counter: {count}</h3>
          <button onClick={incrementCounter}>Increment</button>
          <br></br>
          <br></br>
          <button onClick={dicrementCounter}>Decrement</button>
        </div>
    );

};

export default Counter;