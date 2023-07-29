import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";
//styles import
import styles from "./VideoCard.module.css";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { NavLink } from "react-router-dom";

const VideoCard = ({ data }) => {
  const { dispatch } = useWatchLater();
  const handleAddToWatchLater = (data) => {
    dispatch({ type: "ADD_TO_WATCH_LATER", payload: data });
  };

  const handleRemoveFromWatchList = (data) => {
    dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: data });
  };

  return (
    <div className={styles.video__card}>
      <NavLink to={`/videos/${data.category}/${data._id}`}>
        <div className={styles.card__image}>
          <img src={data?.thumbnail} className={styles.cardImage} alt="" />
        </div>
        <div className={styles.card__details}>
          <div className={styles.profile__img}>
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className={styles.profileImage}
            />
          </div>
          <div className={styles.video__title}>
            <h1 className={styles.video__title__text}>{data?.title}</h1>
            <h1 className={styles.video__category__text}>{data?.category}</h1>
            <h1 className={styles.video__views}>
              {data?.views} | {data?.creator}
            </h1>
          </div>
        </div>
      </NavLink>
      <div
        className={styles.watch__later}
        onClick={
          data?.isAlreadyWatchedLater
            ? () => handleRemoveFromWatchList(data)
            : () => handleAddToWatchLater(data)
        }
      >
        <BsFillStopwatchFill
          style={{
            fill: data?.isAlreadyWatchedLater ? "#7cb9e8" : "#000",
          }}
          className={styles.watch__later__icon}
        />
      </div>
    </div>
  );
};

export default VideoCard;
