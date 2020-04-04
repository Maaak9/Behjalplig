import React from "react";
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const AdWrapper = styled.div`
  .AdWrapper-paper {
    background: #ffffff;
    display: flex;
    border-radius: 30px 10px;
  }
  .image-wrapper {
    max-width: 100px;
    max-height: 100px;
  }
  img {
    max-width: 100px;
    max-height: 100px;
    margin: 10px;
  }
  h2 {
    font-size: 1.3em;
  }
  .right-panel {
    margin: 10px 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .location-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .description {
    font-size: 14px;
  }
  .MuiPaper-root {
    margin-bottom: 10px;
  }
  .img-wrapper {
    margin: auto;
  }
`


// title: 'Add5',
// date: 2,
// description: 'description Add5',
// img: 'https://static.mathem.se/images/foodbags/matkasse-vego.jpg',
// category: 'food',


class Ad extends React.Component {
  render() {
    const { ad } = this.props;

    return (
      <AdWrapper className="AdWrapper">
        <Paper className="AdWrapper-paper">
          <div className="img-wrapper">
            <img src={ad.img} />
          </div>
          <div className="right-panel">
            <div>
              <h2>{ad.title}</h2>
            </div>
            <div className="location-container">
              <h4>{ad.location.city}</h4>
              <span>{ad.location.county}</span>
            </div>
            <div>
              <div className="description">{ad.description.substring(0, 90) + "..."}</div>
            </div>
          </div>
        </Paper>
      </AdWrapper>
    );
  }
}

export default Ad;
