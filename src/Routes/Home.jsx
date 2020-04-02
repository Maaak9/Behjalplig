import React from "react";
import Grid from '@material-ui/core/Grid';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid item style={{ marginBottom: 10, height: '100%'}} container spacing={3}>
          testest
        </Grid>
        <Footer />
      </div>
    )
  }
  }

export default Home;

