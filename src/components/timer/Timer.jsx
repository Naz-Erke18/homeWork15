import { useTimer } from "../hooks/useTimer";
import styled from "styled-components";

const Timer = () => {
  const {
    startHandler,
    stopHandler,
    resetHandler,
    iscount,
    input,
    changeInputHandler,
    addHandler,
    time,
  } = useTimer();
  return (
    <Div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => changeInputHandler(e.target.value)}
        />
        <Button1 onClick={addHandler}>Add</Button1>
      </div>
      <div>
        <h1>{time || "00"}</h1>
      </div>

      {iscount ? (
        <Button2 onClick={stopHandler}>Stop</Button2>
      ) : (
        <Button2 onClick={startHandler}>Start</Button2>
      )}

      <Button3 onClick={resetHandler}>Reset</Button3>
    </Div>
  );
};

export default Timer;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  flex-direction: column;
  width: 200px;
  margin-left: 40%;
`;

const Button1 = styled.button`
  background-color: green;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 4rem;
  margin-top: 3rem;
`;

const Button2 = styled.button`
  background-color: red;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
`;

const Button3 = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-top: 2rem;
`;
