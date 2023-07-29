import React from "react";
//styles import
import styles from "./CategoryCard.module.css";
const CategoryCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.category__image}>
        <img
          src={data?.thumbnail}
          alt={data?._id}
          className={styles.category__thumbnil}
        />
      </div>
      <h1 className={styles.category__name}>{data?.category}</h1>
    </div>
  );
};

export default CategoryCard;
