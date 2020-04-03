import React from "react";
import Paper from '@material-ui/core/Paper';

export default function PaperBlock(props) {

  return (
    <Paper style={{ 'margin-bottom': '15px', padding: '10px' }}>
      {props.children}
    </Paper>
  );
}