import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import videos from "../../Data/VideoData";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { MdOutlineNotes } from "react-icons/md";

//styles import
import styles from "./VideoPlayer.module.css";
import MoreVideo from "../MoreVideo/MoreVideo";
import { usePlayListContext } from "../../Context/PlayListContext";
import PlayListModal from "../../Components/PlaylistModal/PlaylistModal";
import AddNotes from "../Add Notes/AddNotes";

const VideoPlayer = () => {
  const { id } = useParams();
  const { dispatch } = usePlayListContext();
  const [showModal, setShowModal] = React.useState(false);
  const video = videos?.find((eachVideo) => eachVideo._id === parseInt(id));

  const show = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddVideo = (video) => {
    dispatch({
      type: "ADD_video",
      payload: video,
    });
  };

  return (
    <>
      <div className={styles.videoPlayer__container}>
        <div className={styles.react__player}>
          <ReactPlayer controls={true} url={video?.src} />
          <div className={styles.videoDetails}>
            <div className={styles.profile__image}>
              <img
                src={video?.thumbnail}
                alt="profile"
                className={styles.profileImage}
              />
              <h1>{video?.title}</h1>
            </div>
            <div className={styles.icons__container}>
              <BsFillStopwatchFill className={styles.icon} />
              <MdPlaylistAdd
                className={styles.icon}
                onClick={() => handleAddVideo(video)}
              />
              <MdOutlineNotes onClick={() => show()} className={styles.icon} />
            </div>
            <AddNotes />
          </div>
        </div>
        <MoreVideo category={video?.category} />
      </div>
      {showModal && <PlayListModal closeModal={closeModal} notes={"notes"} />}
    </>
  );
};

export default VideoPlayer;
