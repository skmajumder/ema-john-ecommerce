import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import SidebarCart from "../SidebarCart/SidebarCart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchProductsData();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(productId);
  };

  return (
    <section className="section-shop">
      <div className="container px-20">
        <div className="grid grid-cols-5 gap-6">
          <Products products={products} handleAddToCart={handleAddToCart} />
          <SidebarCart />
        </div>
      </div>
    </section>
  );
};

export default Shop;
