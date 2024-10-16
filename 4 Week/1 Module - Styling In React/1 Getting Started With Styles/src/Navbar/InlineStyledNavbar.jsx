import React from 'react';

const InlineStyledNavbar = () => {
  // Inline styles
  const logoStyle = {
    flex: 1,
    textAlign: 'left',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  };

  const cartIconStyle = {
    marginRight: '10px',
    width: "40px",
    filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.2))'
  };

  const cartNumStyle = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    background: "cyan",
    color: "black",
    width: "20px",
    height: "20px",
    textAlign: "center",
    lineHeight: "20px",
    borderRadius: "50%",
    fontSize: "0.8rem",
    fontWeight: "bold",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)"
  };

  return (
    <nav style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px",
      background: "linear-gradient(90deg, blueviolet, pink)",
      position: "relative"
    }} >

      <div style={logoStyle}>
        MovieApp
      </div>

      <div style={{ flex: 1, textAlign: 'right', position: 'relative' }}>
        {/* Transparent cart image from Freepik */}
        <img
          src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
          alt="shopping cart"
          style={cartIconStyle}
        />
        <span style={cartNumStyle}>3</span>
      </div>
    </nav>
  );
}

export default InlineStyledNavbar;
