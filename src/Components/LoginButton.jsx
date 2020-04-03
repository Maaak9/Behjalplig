import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const LoginButtonWrapper = styled.div`
  button {
    color: #ffffff;
  }
`;


export default function LoginButton() {
  return (
    <LoginButtonWrapper>
      <IconButton aria-label="login" onClick={() => { console.warn('clicked the login icon') }}>
        <AccountCircleIcon />
      </IconButton>
    </LoginButtonWrapper>
  )
}
