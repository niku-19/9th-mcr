import React, { useState } from "react";
import { usePlayListContext } from "../../Context/PlayListContext";
//import styles from
import styles from "./PlayList.module.css";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
const PlayList = () => {
  const { playListData, dispatch } = usePlayListContext();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleRemovePlaylist = (id) => {
    dispatch({
      type: "REMOVE_PLAYLIST",
      payload: id,
    });
  };

  return (
    <>
      <div className={styles.playlist__container}>
        {playListData?.playlist.map((eachPlaylist) => {
          return (
            <div key={eachPlaylist.id} className={styles.card}>
              <div className={styles.card__header}>
                <h1>playlist</h1>
                <h1 onClick={() => handleRemovePlaylist(eachPlaylist.id)}>X</h1>
              </div>
              <div className={styles.card__image}>
                <img src={eachPlaylist?.thumbnail} alt="" />
              </div>
              <div className={styles.card__details}>
                <h1>{eachPlaylist?.title}</h1>
                <h1>{eachPlaylist?.label}</h1>
              </div>
            </div>
          );
        })}
        <button onClick={openModal} className={styles.btn}>
          Add Your Playlist
        </button>
      </div>
      {modal && <PlaylistModal closeModal={closeModal} />}
    </>
  );
};

export default PlayList;
