import {  useState } from "react";



const useInput = () => {
  const [value, setValue] = useState("");
    const [error, setError] = useState(false);


   const  changeHandler = (e) => {

  setValue(e.target.value)
   }

   const blurHandler=()=>{
    setError(value.includes("@"))

   }

   const wrongHandler = ()=>{
    setError(value.trim().length > 5)
   }

  return {
    value,
    error,
   changeHandler,
   blurHandler,
   wrongHandler
  }
};

export default useInput;
