import React from "react";
import "./Product.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Product = ({ product, handleAddToCart }) => {
  const { id, img, name, price, ratings, seller } = product;

  return (
    <div
      className="product border border-solid rounded-lg flex flex-col justify-between"
      id={`product-${id}`}
    >
      <div className="product-info p-2">
        <img src={img} className="product-img w-full mb-5" alt={name} />
        <h4 className="text-xl mb-2 font-bold">{name}</h4>
        <p className="mb-4 text-base">Price: ${price} </p>
        <p className="text-slate-500">
          <small>Manufacturer : {seller}</small>
        </p>
        <p className="text-slate-500">
          <small>Rating : {ratings} start</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(id)}
        className="btn-add-cart w-full py-2 font-bold flex justify-center items-center gap-3"
      >
        <span>Add to Cart</span>
        <ShoppingCartIcon className="h-6 w-6 text-black-500" />
      </button>
    </div>
  );
};

export default Product;
