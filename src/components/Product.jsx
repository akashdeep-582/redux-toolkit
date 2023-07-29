import React, { useCallback, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product)
  console.log(products,"333")

  useEffect(() => {
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   setProduct(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = useCallback((product) => {
    dispatch(add(product))
  },[])

  if(products.status === "loading"){
    return <h3>Loading...</h3>
  }
  return (
    <div className="productsWrapper">
      {products?.data.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
