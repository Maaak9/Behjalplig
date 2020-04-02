import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const BodyWrapper = styled.div`
  /* color: black;
  padding-top: 50px;
  background: green;
  max-width: 1200px;
  margin: auto; */
`


class Body extends React.Component {
  render() {
    return (
      <BodyWrapper className="">
          {this.props.children}
      </BodyWrapper>
    );
  }
}

export default Body;
