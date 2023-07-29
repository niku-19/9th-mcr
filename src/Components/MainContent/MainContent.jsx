import React from "react";
import CategoryCard from "../Category Card/CategoryCard";
//styles import

import styles from "./MainContent.module.css";
import categories from "../../Data/Category";
import { NavLink } from "react-router-dom";

const MainContent = () => {
  return (
    <div className={styles.mainContent__container}>
      {categories?.map((eachCategory) => {
        return (
          <NavLink
            to={`/videos/${eachCategory.category}`}
            key={eachCategory._id}
          >
            <CategoryCard data={eachCategory} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default MainContent;
