import React from "react";
import productCard from "../../data/ProductData";
const Boys = () => {
  const listItems = productCard
    .filter((cat) => cat.type === "boys")
    .map((item) => (
      <div className="card" key={item.id}>
        <div className="cards">
          <img className="card_img" src={item.thumbnail} alt="img not found" />
          <div className="card_header">
            <h4>{item.productName}</h4>
            <p className="product-product">{item.name}</p>
            <p className="price">Rs.{item.price}</p>
            <div className="btn">Wishlist</div>
          </div>
        </div>
      </div>
    ));

  return <div className="main_content">{listItems}</div>;
};

export default Boys;
