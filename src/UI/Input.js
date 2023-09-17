import styled from "styled-components";
import css from "styled-components";

const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;

  &:focus {
    outline: none;
    border-color: #240370;
    background-color: #e0d4fd;
  }
  ${(props) =>
    props.$hasError &&
    css`
      border: 1px solid #b40e0e;
      background-color: #fddddd;

      &:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    `}
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = ({ label, id, hasError, type, onChange, onBlur, value }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        $hasError={hasError}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </>
  );
};

export default Input;
