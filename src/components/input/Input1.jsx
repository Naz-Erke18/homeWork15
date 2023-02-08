import useInput from "../hooks/useInput";
import styled from "styled-components";

const Input1 = () => {
  const { value, error, changeHandler, wrongHandler } = useInput();
  return (
    <Div>
      <input
        value={value}
        onChange={changeHandler}
        onBlur={wrongHandler}
        type="password"
      />
      {error ? null : <span style={{ color: "red" }}>Некорректный пароль</span>}
    
     
    </Div>
  );
};

export default Input1;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;