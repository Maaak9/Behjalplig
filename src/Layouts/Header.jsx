import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import LoginButton from "../Components/LoginButton";

const HeaderContainer = styled.div`
  color: white;
  position: fixed;
  display: flex;
  width: 100%;
  min-height: 50px;
  line-height: 50px;
  background: var(--primary-color);
  margin: auto;
  z-index: 10;

  @media (max-width: 768px) {
    height: 50px;
    position: inherit;
  }

  .icon {
    height: 100%;
    margin: auto 10px;
  }
`;

const Routes = styled.div`
  text-align: center;
  width: 100%;
  margin: auto;
  a {
    line-height: 50px;
    padding: 0px 15px;
    text-align: center;
    color: white;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <MenuIcon className="icon" />
        <Routes>
          <Link to="/">Home</Link>
          <Link to='/annonser/'>Annonser</Link>
          <Link to="/about/">About</Link>
        </Routes>
        <Link to="/login/">
          <LoginButton />
        </Link>
      </HeaderContainer>
    );
  }
}

export default Header;
