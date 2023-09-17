import styled from "styled-components";

const ErrorTextWrapper = styled.p`
  color: #b40e0e;
`;

const ErrorText = ({ text }) => {
  return <ErrorTextWrapper>{text}</ErrorTextWrapper>;
};

export default ErrorText;
