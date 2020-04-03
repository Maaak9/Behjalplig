import React from "react";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const PaperRoundedWrapper = styled.div`
  .rounded-paper {
    background: #ffffff;
    display: flex;
    border-radius: 30px 10px;
    padding: 10px;
  }
`;

export default function PaperRounded(props) {
  return (
    <PaperRoundedWrapper>
      <Paper className="rounded-paper" style={{ margin: '10px' }}>
        {props.children}
      </Paper>
    </PaperRoundedWrapper>
  )
}
