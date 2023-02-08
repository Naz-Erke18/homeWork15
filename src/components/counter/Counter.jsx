import useCounter from '../hooks/useCounter';
import styled from "styled-components"

function Counter() {
    const { count, incrementHandler, decrementHandler ,resetHandler } = useCounter(4);


  return (
    <div>
      <div>
        <Count>{count}</Count>
      </div>
      <Box>
        <Button1 onClick={incrementHandler}>Increment</Button1>
        <Button2 onClick={decrementHandler}>Decrement</Button2>
        <Button3 onClick={resetHandler}>Reset</Button3>
      </Box>
    </div>
  );
}

export default Counter

const Count = styled.h1`
display: flex;
justify-content: center;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const Button1 = styled.button`
  background-color: green;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
`

const Button2 = styled.button`
  background-color: red;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 2rem;
`;

const Button3= styled.button`
  background-color:blue;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 2rem;
`;