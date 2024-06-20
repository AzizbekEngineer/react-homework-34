import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import img from "../../assets/img.svg";
import "./products.scss";
import { NavLink } from "react-router-dom";

const Products = () => {
  const {
    data: products,
    isSuccess,
    isLoading,
  } = useGetProductsQuery({ limit: 200 });
  console.log(products?.data?.products);
  let productsItem = products?.data?.products?.map((el) => (
    <div className="product__card" key={el?.id}>
      <div className="product__img">
        <NavLink to={`/product/${el.id}`}>
          <img src={el?.urls[0] ? el.urls[0] : img} alt="" />
        </NavLink>
      </div>
      <div className="product__info">
        <h3>{el?.title}</h3>
        <h3 className="product__price">
          {el?.price}$ {el?.oldPrice ? <span>{el?.oldPrice}$</span> : ""}
        </h3>
        <p>{el?.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="product">
      <div className="product__cards">{productsItem}</div>
    </div>
  );
};

export default Products;
