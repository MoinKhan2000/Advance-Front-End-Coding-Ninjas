import React, { Component } from "react";

// Complete this Component
const ListItem = ({ item }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30
      }}
    >
      <img src={item.icon} alt="" />
      <a href="">{item.name}</a>
    </div>
  );
};

export default ListItem;
