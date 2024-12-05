import React, { useCallback, useState } from 'react'
import { CgAdd } from "react-icons/cg";

const Home = () => {
  const [count, setCount] = useState(0); 
  const increment = useCallback(() => { 
    console.log("Increment inside"); 
    setCount((prevCount) => prevCount + 1); 
  }, []); 
  const decrement = useCallback(() => { 
    console.log("Decrement inside"); 
    setCount((prevCount) => prevCount - 1); 
  }, []);
  return (
    <div>
      <h1 className="mb-4">Count: {count}</h1> 
      <h1><CgAdd> {count}</CgAdd></h1>
      <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Home