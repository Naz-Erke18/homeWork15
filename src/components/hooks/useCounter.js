import React, { useState } from 'react'


function useCounter(init) {
const [count, setCount] = useState(0);

const incrementHandler = () => {
  setCount(count + init);
};

const decrementHandler = () => {
  setCount(count - init);
};

const resetHandler = ()=>{
  setCount(0)
}

  return { count, incrementHandler, decrementHandler,resetHandler };
}

export default useCounter
