import React from "react";
import productCard from "../../data/ProductData";
const MainContent = () => {
  const listItems = productCard.map((item) => (
    <div key={item.id}>
      <div
        className="cards"
        onClick={() => {
          console.log(item.id);
        }}
      >
        <img className="card_img" src={item.thumbnail} alt="img not found" />
        <div className="card_header">
          <h4>{item.productName}</h4>
          <p className="product-product">{item.name}</p>
          <p className="price">Rs.{item.price}</p>
          <div
            className="btn"
            onClick={() => {
              item.cart = !item.cart;
              console.log(item.cart);
            }}
          >
            Wishlist
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className="main_content">{listItems}</div>;
};

export default MainContent;