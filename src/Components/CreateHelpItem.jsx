import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CreateHelpItemnWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  .create-help-item-left {
    margin-right: 5px;
  }
  .create-help-item-right {
    margin-left: 5px;
  }
  .help-item-creation {
    padding: 5px;
  }

`;


export default function CreateHelpItem() {
  return (
    <CreateHelpItemnWrapper>
      <Grid item xs={6} className="create-help-item-left">
        <Paper>
          <div className="help-item-creation">I can help!</div>
        </Paper>
      </Grid>
      <Grid item xs={6} className="create-help-item-right">
        <Paper>
          <div className="help-item-creation">I need help!</div>
        </Paper>
      </Grid>
    </CreateHelpItemnWrapper>
  )
}
