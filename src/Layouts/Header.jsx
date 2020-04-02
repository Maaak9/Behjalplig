import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const HeaderContainer = styled.div`
  /* position: fixed;
  width: 100%;
  min-height: 50px;
  line-height: 50px;
  background: var(--primary-color);
  margin: auto;
  z-index: 10; */
`;

const Routes = styled.div`
  /* text-align: center;
  width: 100%;
  margin: auto;
  a {
    line-height: 50px;
    padding: 0px 15px;
    text-align: center;
    color: white;
  } */
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Routes>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
        </Routes>
      </HeaderContainer>
    );
  }
}

export default Header;
