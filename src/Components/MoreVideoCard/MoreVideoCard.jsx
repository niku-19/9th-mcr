import React from "react";
//styles import

import styles from "./MoreVideoCard.module.css";

const MoreVideoCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img
          src={data?.thumbnail}
          alt={data?._id}
          className={styles.cardImage}
        />
      </div>
      <div className="card__titles">
        <h3>{data?.title}</h3>
        <p>{data?.creator}</p>
      </div>
    </div>
  );
};

export default MoreVideoCard;
