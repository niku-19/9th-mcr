import React from "react";
import Header from "../../Components/Header/Header";
import LeftSidebar from "../../Components/LeftSiderBar/LeftSidebar";

//styles import
import styles from "./LandingPage.module.css";

const LandingPage = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <LeftSidebar />
        {children}
      </div>
    </div>
  );
};

export default LandingPage;
