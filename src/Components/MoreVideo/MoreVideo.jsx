import React from "react";
//styles import
import styles from "./MoreVideo.module.css";
import videos from "../../Data/VideoData";
import MoreVideoCard from "../MoreVideoCard/MoreVideoCard";
import { NavLink } from "react-router-dom";
const MoreVideo = ({ category }) => {
  const video = videos?.filter((video) => video.category === category);

  return (
    <div className={styles.moreVideo__container}>
      {video?.map((video) => {
        return (
          <NavLink
            to={`/videos/${category}/${video._id}`}
            className={styles.navLink}
          >
            <MoreVideoCard data={video} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default MoreVideo;
