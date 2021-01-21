import React from "react";
import productCard from "../data/ProductData";
const MainContent = () => {
  const listItems = productCard.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumbNail} alt="img not found" />
      </div>
      <div className="card_header">
        <h2>{item.productName}</h2>
        <p>{item.description}</p>
        <p className="price">{item.price}</p>
        <div className="btn">Wishlist</div>
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      <h3>shirts</h3>
      {listItems}
    </div>
  );
};

export default MainContent;
