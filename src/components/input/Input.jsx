import useInput from "../hooks/useInput";
import styled from "styled-components";

const Input = () => {
  const { value, error, changeHandler, blurHandler } = useInput();
  return (
    <Div>
      <input
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        type="email"
      />
      {error ? null : <span style={{ color: "red" }}>Некорректный емейл</span>}
    </Div>
  );
};

export default Input;


const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`