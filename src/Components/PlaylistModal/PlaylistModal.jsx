import React, { useState } from "react";
import styles from "./PlaylistModal.module.css";
import { usePlayListContext } from "../../Context/PlayListContext";
const PlaylistModal = ({ closeModal, notes }) => {
  const { dispatch } = usePlayListContext();
  const [playlist, setPlaylist] = useState({
    title: "",
    label: "",
    thumbnail: "https://picsum.photos/311/174",
  });

  const handleOnSubmit = () => {
    dispatch({
      type: "ADD_PLAYLIST",
      payload: { ...playlist, id: Date.now() },
    });
    closeModal();
  };

  const handleOnNotes = () => {
    dispatch({
      type: "ADD_NOTES",
      payload: { ...playlist, id: Date.now() },
    });
    closeModal();
  };

  return (
    <>
      <div className={styles.modal__overlay} onClick={() => closeModal()}></div>
      <div className={styles.modal__container}>
        <div className={styles.modal__container__header}>
          <h1>Add Your Playlist</h1>
          <h1 className={styles.cross__btn} onClick={() => closeModal()}>
            X
          </h1>
        </div>
        <form
          onSubmit={notes ? () => handleOnNotes() : () => handleOnSubmit()}
          action=""
        >
          <div className={styles.modal__container__body}>
            <div className={styles.modal__container__body__input}>
              <label htmlFor="">{notes ? "Notes" : "title"}</label>
              <input
                type="text"
                onChange={(e) =>
                  setPlaylist({ ...playlist, title: e.target.value })
                }
                className={styles.input__box}
              />
            </div>
            {!notes && (
              <div className={styles.modal__container__body__input}>
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setPlaylist({ ...playlist, lable: e.target.value })
                  }
                  className={styles.input__box}
                />
              </div>
            )}
            <button className={styles.btn}>
              {notes ? "add Your Notes" : "add Your Playlist"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PlaylistModal;
