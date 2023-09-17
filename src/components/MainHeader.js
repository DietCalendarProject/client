import Button from "../UI/Button";
import styled from "styled-components";
const MainHeader = () => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: end;
  `;
  const isLogin = true;
  return <Header>{isLogin && <Button to="/" title="LOGOUT" />}</Header>;
};

export default MainHeader;
