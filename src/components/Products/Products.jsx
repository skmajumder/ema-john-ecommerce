import React from "react";
import Product from "../Product/Product";

const Products = ({ products, handleAddToCart }) => {
  return (
    <div className="col-span-4 py-16">
      <div className="grid grid-cols-3 gap-9">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
