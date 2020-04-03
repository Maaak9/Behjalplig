import React from "react";
import styled from 'styled-components'

const AddWrapper = styled.div`
  background: var(--white-blue-tone-color);
  display: flex;

  .image-wrapper {
    max-width: 120px;
    max-height: 120px;
  }
  img {
    max-width: 120px;
    max-height: 120px;
    margin: 10px;
  }

  h2 {
    font-size: 1.3em;
    margin: 10px;
  }

  .right-panel {
    margin: 10px 5px;
    width: 100%;
    display: flex;
  }
  .location-container {
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
    console.warn('ad 3333', ad);

    return (
      <AddWrapper>
        <div className="img-wrapper">
          <img src={ad.img} />
        </div>
        <div className="right-panel">
          <div className="location-container">
            <h4>{ad.location.city}</h4>
            <span>{ad.location.county}</span>
          </div>
          <div>
            <h2>{ad.title}</h2>
            <h4>{ad.description}</h4>
          </div>
          <div>
            <p>{ad.dscription}</p>
          </div>
        </div>
      </AddWrapper>
    );
  }
}

export default Ad;
