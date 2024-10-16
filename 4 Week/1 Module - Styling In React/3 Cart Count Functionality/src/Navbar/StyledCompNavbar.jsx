import React from 'react';
import styled from 'styled-components';

const StyledCompNavbar = ({ cartCount, setCartCount }) => {
  console.log(cartCount, setCartCount);

  // Styled components
  const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background: linear-gradient(90deg, pink, blueviolet);
    position: relative;
  `;

  const Logo = styled.div`
    flex: 1;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  `;

  const CartContainer = styled.div`
    flex: 1;
    text-align: right;
    position: relative;
  `;

  const CartIcon = styled.img`
    margin-right: 10px;
    width: 40px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2));
  `;

  const CartNum = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    background: ${(props) => props.background};
    color:white;
    width: 20px;
    height: 20px;
    display:${(props) => props.show ? 'block' : "none"};
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition:all 1s;
    &:hover{
      color:black;
      background: red;
    }
    
  `;

  return (
    <Navbar>
      <Logo>MovieApp</Logo>
      <CartContainer>
        <CartIcon
          src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
          alt="shopping cart"
        />
        {/* WE can pass the props as well. Here we are passing just show which is a true value bydefault.*/}
        <CartNum color="white" background="blue" show={true}>{cartCount}</CartNum>
      </CartContainer>
    </Navbar>
  );
};

export default StyledCompNavbar;