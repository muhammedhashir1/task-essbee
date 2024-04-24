import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProductsList.module.css"; // Import CSS file for styling

const PRODUCTS_ENDPOINT = "https://dummyjson.com/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(PRODUCTS_ENDPOINT);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefetch = () => {
    fetchData();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.products_main}>
        <input
          type="text"
          placeholder="Search your products..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.search_input}
        />
        <button onClick={handleRefetch} className={styles.refetch_button}>
          Refetch
        </button>
      </div>
      <div className={styles.product_list}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.product_card}>
            <div className={styles.product_image_container}>
              <img src={product.thumbnail} alt={product.title} className={styles.product_image} />
            </div>
            <div className={styles.product_info}>
              <h2 className={styles.product_title}>{product.title}</h2>
              <p className={styles.product_description}>{product.description}</p>
              <p className={styles.product_brand}>Brand: {product.brand}</p>
              <p className={styles.product_price}>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
