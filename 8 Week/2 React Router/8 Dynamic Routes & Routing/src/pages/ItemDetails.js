import React from 'react';
import { useParams } from 'react-router-dom';
import itemData from '../data/itemData';

const ItemDetails = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h3>ItemDetails</h3>
      <h2>Item ID: {itemId}</h2>
      <p>Item Name: {itemData.find((item) => item.id === itemId).name}</p>
      <p>Item Description: {itemData.find((item) => item.id === itemId).description}</p>
    </div>
  );
}

export default ItemDetails;
