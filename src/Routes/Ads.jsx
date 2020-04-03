import React from "react";
import Grid from '@material-ui/core/Grid';
import Header from '../Layouts/Header';
import Body from '../Layouts/Body';
import Footer from '../Layouts/Footer';
import AdsRoute from "../Components/Routes/AdsRoute";


class Ads extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body>
          <AdsRoute />
        </Body>
        <Footer />
      </div>
    )
  }
  }

export default Ads;

