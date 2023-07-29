import React from "react";
import { BiSearch } from "react-icons/bi";
import { useWatchLater } from "../../Context/WatchLaterContext";
import VideoCard from "../VideoCard/VideoCard";

//styles import
import styles from "./ExploreVideo.module.css";
const ExploreVideo = () => {
  const { watchLaterData } = useWatchLater();
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.container}>
      <div className={styles.search__box}>
        <BiSearch className={styles.search__icons} />
        <input
          type="text"
          className={styles.search__input}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie, tv show, person......"
        />
      </div>
      <div className={styles.exploreVideo__container}>
        {watchLaterData?.videoData
          ?.filter((eachVideo) =>
            eachVideo.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((eachVideo) => {
            return <VideoCard data={eachVideo} key={eachVideo._id} />;
          })}
      </div>
    </div>
  );
};

export default ExploreVideo;
