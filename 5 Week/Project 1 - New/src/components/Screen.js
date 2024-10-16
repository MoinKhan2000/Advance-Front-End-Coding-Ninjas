import React from 'react';
import Coverflow from './Coverflow';
import Games from './Games';
import Settings from './Settings';
import Music from './Music';
import MusicMenu from './MusicMenu';
import SideMenu from './SideMenu';

class Screen extends React.Component {
  render() {
    const { menuItems, activeItem, selectedMenu, subMenu, musicMenuItems, activeSubItem } = this.props;
    console.log(this.props);

    return (
      <div className="screen">
        {!selectedMenu ? (
          !subMenu ? (<SideMenu menuItems={menuItems} activeItem={activeItem} />) :
            (<MusicMenu musicMenuItems={musicMenuItems} activeItem={activeSubItem} />)
        ) : (
          selectedMenu === 'Coverflow' ? <Coverflow /> :
            selectedMenu === 'Games' ? <Games /> :
              selectedMenu === 'Settings' ? <Settings /> :
                selectedMenu === 'All Songs' || selectedMenu === 'Artists' || selectedMenu === 'Albums' ? (
                  <Music activeItem={activeSubItem} musicMenuItems={musicMenuItems} />
                ) : null
        )}
      </div>
    );
  }
}

export default Screen;
