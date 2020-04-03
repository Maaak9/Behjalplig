import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Ad from "../Ad/Ad";

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
              { Object.keys(adsMap).map((key) => {
                console.warn('ads', adsMap[key]);

                  return (
                    <Paper style={{ margin: '10px' }}>
                      <Ad
                        ad={adsMap[key]}
                      />
                    </Paper>
                  )
              })}
            </Grid>
            <Grid item md={6} xs={12} sm={12} >
              <Paper style={{ padding: 10, height: '100%' }}>
                <h2>2222</h2>
                <p>1111dsfsdg</p>
                <h2>2222</h2>
                <p>1111dsfsdg</p>
                <h2>2222</h2>
                <p>1111dsfsdg</p>
                <h2>2222</h2>
                <p>1111dsfsdg</p>
                <h2>2222</h2>
                <p>1111dsfsdg</p>
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
