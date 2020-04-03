import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Ad from "../Ad/Ad";
import PaperRounded from '../PaperRounded';

const AddWrapper = styled.div`
  /* margin-top: 50px; */
`


class AdsRoute extends React.Component {

  render() {
    const { adsMap } = this.props;

    console.warn('adds', this.props);
    return (
      <AddWrapper className="">
        <Grid item container spacing={3}>
          <Grid item xs={12}>
            <Grid item md={6} xs={12} sm={12} >
              <Paper style={{ 'margin-bottom': '15px', padding: '10px' }}>
                <div>testtest</div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12} sm={12} >
              { Object.keys(adsMap).map((key) => {
                  return (
                    <Ad
                      ad={adsMap[key]}
                    />
                  )
              })}
            </Grid>
            <Grid item md={6} xs={12} sm={12} >
              <Paper style={{ padding: 10, height: '100%' }}>
                <p>
                  Cras eu mi non ipsum porttitor mattis at a mauris. Phasellus purus dolor, imperdiet a tempus ut, dignissim sed ipsum. Ut faucibus magna sit amet sem blandit, in ultrices metus dictum. Nunc ultrices interdum velit eu iaculis. Proin pretium, dolor quis pretium fermentum, risus purus vehicula nulla, in vulputate augue orci quis eros. Praesent eu risus eget tortor rhoncus volutpat sed eu risus. Sed laoreet, ligula a eleifend fringilla, dolor ipsum placerat arcu, quis viverra nunc elit eget turpis. Ut vestibulum placerat vulputate. Fusce at ipsum sit amet libero accumsan pretium. Cras sem dolor, laoreet sit amet metus vel, euismod aliquam nisi. In hac habitasse platea dictumst. Vestibulum sagittis enim ac mi vestibulum euismod. Nunc risus odio, porttitor at enim a, aliquet pretium urna. Nam vehicula est aliquet lectus ullamcorper mattis. Cras lorem ante, scelerisque at nulla quis, laoreet hendrerit metus. Suspendisse at urna rhoncus, bibendum diam sit amet, gravida lorem. Ut faucibus posuere nisl, non fringilla risus rutrum a. Curabitur accumsan, metus non vulputate finibus, diam ligula euismod elit, et feugiat lectus erat eu quam. Ut pharetra dolor a justo convallis suscipit. Proin nec mi erat. Ut porta felis eu ultrices condimentum. Donec eget semper lorem, ac efficitur turpis. Integer pretium, felis eget consequat pulvinar, dui neque mattis massa, id iaculis massa eros pharetra elit. Sed facilisis ut elit eget bibendum.
                  Nam vel nisl quam. Sed id fringilla lectus. Vivamus volutpat nisi turpis, at aliquam nibh consequat vitae. Praesent ornare porta tellus, vel dictum urna eleifend at. Praesent dignissim nisi in hendrerit consequat. Suspendisse tempus lacus ac mi vestibulum gravida. Maecenas volutpat dui ut vulputate egestas. Pellentesque sollicitudin, orci sed dignissim pulvinar, quam tortor sollicitudin metus, in tristique enim lectus eu turpis. Praesent neque justo, euismod nec ipsum eu, imperdiet facilisis sapien. Morbi convallis dictum nisl, at viverra sapien vehicula at.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </AddWrapper>
    );
  }
}


function mapStateToProps(state) {
  console.log('the state 5555', state);
  return {
    adsMap: state.ads.map,
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  // initSpotify: () => { return dispatch(initSpotify()); },
  // getSpotifyAuth: () => { return dispatch(getSpotifyAuth()); },
});

AdsRoute.propTypes = {
  // from state
  Adds: PropTypes.object,

  // Actions
  initSpotify: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsRoute)
