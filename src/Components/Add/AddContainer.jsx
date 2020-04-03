import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const AddWrapper = styled.div`
  /* color: black;
  padding-top: 50px;
  background: green;
  max-width: 1200px;
  margin: auto; */
`


class AddContainer extends React.Component {
  render() {
    return (
      <AddWrapper className="">
          {this.props.children}
      </AddWrapper>
    );
  }
}

export default AddContainer;
