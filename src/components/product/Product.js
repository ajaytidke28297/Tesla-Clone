import React from "react";
import { useSelector } from "react-redux";
import classes from "./Product.module.css";
import Header from "../UI/Header";
import Button from "../UI/Button";

function Product(props) {
  const products = useSelector((state) => state.product.items);
  const product = products.find((item) => item.id === props.id);

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url('/images/${product.backgroundImg}')` }}
    >
      <Header title={product.title} description={product.description} />
      <div className={classes["product-detail"]}>
        {product?.engineDetail?.map((item) => (
          <div key={item.value} className={classes["product-feature"]}>
            <h1>{item.value}</h1>
            <p>{item.label}</p>
          </div>
        ))}
        <Button className={classes.button} text="Order Now" />
      </div>
    </section>
  );
}

export default Product;
