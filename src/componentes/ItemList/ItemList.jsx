import React from "react";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "silver",
        display: "flex",
        width: "100%",
        Height: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {items.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.img} alt="" />
            <h1>{element.title}</h1>
            <h2>{element.description}</h2>
            <h3>{element.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
