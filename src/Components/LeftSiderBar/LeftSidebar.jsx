import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";
//import styles
import styles from "./LeftSidebar.module.css";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className={styles.left__sidebar__container}>
      <div className={styles.navigation__container}>
        <NavLink to="/" className={styles.navigation__item}>
          <AiTwotoneHome className={styles.navigation__icon} />
          <h1 className={styles.navigation__name}>Home</h1>
        </NavLink>
        <NavLink to={"/explore"} className={styles.navigation__item}>
          <MdExplore className={styles.navigation__icon} />
          <h1 className={styles.navigation__name}>Explore</h1>
        </NavLink>
        <NavLink to="/paylist" className={styles.navigation__item}>
          <MdPlaylistAdd className={styles.navigation__icon} />
          <h1 className={styles.navigation__name}>Playlist</h1>
        </NavLink>
        <NavLink to="/watch-later" className={styles.navigation__item}>
          <BsFillStopwatchFill className={styles.navigation__icon} />
          <h1 className={styles.navigation__name}>Watch Later</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSidebar;
