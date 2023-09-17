import Button from "../../UI/Button";
import styled from "styled-components";

const LoginButtonWrapper = styled.div`
  display: flex;
`;

const LoginButton = ({ $formIsValid }) => {
  console.log($formIsValid);
  return (
    <LoginButtonWrapper>
      <Button to="/calendar" disabled={!$formIsValid} title="LOGIN" />
      <Button to="/register" title="REGISTER" />
    </LoginButtonWrapper>
  );
};

export default LoginButton;
