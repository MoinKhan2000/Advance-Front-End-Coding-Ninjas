import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['Coverflow', 'Music', 'Games', 'Settings'],
      activeItem: 0,  // Start from 'Coverflow'
      selectedMenu: null,  // Tracks the selected menu item
      subMenu: false,  // Tracks if we are in a submenu 
      musicMenuItems: ['All Songs', 'Artists', 'Albums'], // Music submenu
      activeSubItem: 0,  // Tracks the active item in the submenu
    };
  }

  // Function to handle wheel rotation and menu navigation
  handleRotate = (direction) => {
    const { subMenu, menuItems, activeItem, musicMenuItems, activeSubItem } = this.state;

    if (!subMenu) {
      // Main menu navigation
      const newIndex = (activeItem + direction + menuItems.length) % menuItems.length;
      this.setState({ activeItem: newIndex });
    } else {
      // Submenu (Music) navigation
      const newSubIndex = (activeSubItem + direction + musicMenuItems.length) % musicMenuItems.length;
      this.setState({ activeSubItem: newSubIndex });
    }
  };

  // Function to handle "OK" button press
  handleOk = () => {
    const { menuItems, activeItem, subMenu, musicMenuItems, activeSubItem } = this.state;

    if (!subMenu) {
      // On "OK", select the active item in the main menu
      if (menuItems[activeItem] === 'Music') {
        // Enter the Music submenu
        this.setState({ subMenu: true });
      } else {
        // Directly select other menu items (Coverflow, Games, Settings)
        this.setState({ selectedMenu: menuItems[activeItem] });
      }
    } else {
      // If inside the Music submenu
      this.setState({ selectedMenu: musicMenuItems[activeSubItem] });
    }
  };

  // Handle "Menu" button (go back)
  handleMenu = () => {
    const { subMenu } = this.state;
    if (subMenu) {
      // Exit the submenu (go back to main menu)
      this.setState({ subMenu: false });
    } else {
      // Go back to the main menu
      this.setState({ selectedMenu: null });
    }
  };

  render() {
    const { menuItems, activeItem, selectedMenu, subMenu, musicMenuItems, activeSubItem } = this.state;

    return (
      <div className="ipod">
        <Screen
          menuItems={menuItems}
          activeItem={activeItem}
          selectedMenu={selectedMenu}
          subMenu={subMenu}
          musicMenuItems={musicMenuItems}
          activeSubItem={activeSubItem}
        />
        <Controls
          onOk={this.handleOk}
          onMenu={this.handleMenu}
          onRotate={this.handleRotate}
        />
      </div>
    );
  }
}

export default App;
