import React from "react";
import Grid from '@material-ui/core/Grid';
import Header from '../Layouts/Header';
import Body from '../Layouts/Body';
import Footer from '../Layouts/Footer';
import PaperBlock from "../Components/Containers/PaperBlock";


class Singup extends React.Component {
  render() {
    return (
      <div className="">
        <Header />
        <Body>
          <PaperBlock>
            SignUp
          </PaperBlock>
        </Body>
        <Footer />
      </div>
    )
  }
  }

export default Singup;

