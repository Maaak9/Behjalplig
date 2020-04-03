import React, { useLayoutEffect, useState } from "react";

import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const FooterContainer = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;

  .MuiBottomNavigation-root {
    width: 100%;
  }
`;

const FooterContainerDesktop = styled.div`
  height: 200px;
  width: 100%;
  bottom: 0;
  background: var(--primary-color);
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Footer() {
  const [value, setValue] = React.useState('recents');
  const [width, height] = useWindowSize();

  const isMobile = width < 800;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      { isMobile ? (
        <FooterContainer>
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
          </BottomNavigation>
        </FooterContainer>) : (
        <FooterContainerDesktop>
          <div>
            <h2>testetes</h2>
          </div>
        </FooterContainerDesktop>
        )
      }
    </React.Fragment>
  );
}
