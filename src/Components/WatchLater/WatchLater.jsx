import React from "react";
import VideoCard from "../VideoCard/VideoCard";

import styles from "./WatchLater.module.css";

const WatchLater = () => {
  const item = localStorage.getItem("watchLater");
  const watchLater = JSON.parse(item);

  return (
    <div className={styles.watchLater__container}>
      {watchLater?.map((eachVideo) => {
        return <VideoCard key={eachVideo._id} data={eachVideo} />;
      })}
    </div>
  );
};

export default WatchLater;
