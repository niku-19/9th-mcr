import React from "react";
import { useParams } from "react-router-dom";
import videos from "../../Data/VideoData";
//styles import
import styles from "./VideoListing.module.css";
import VideoCard from "../VideoCard/VideoCard";
const VideoListing = () => {
  const { category } = useParams();

  const videoList = videos?.filter(
    (EachVideo) => EachVideo.category === category
  );

  return (
    <>
      <div className={styles.videoListing__container}>
        {videoList?.map((eachVideo) => {
          return <VideoCard data={eachVideo} key={eachVideo._id} />;
        })}
      </div>
    </>
  );
};

export default VideoListing;
