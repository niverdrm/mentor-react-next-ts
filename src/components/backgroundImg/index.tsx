import { NextPage } from "next";
import React from "react";
import style from "../backgroundImg/background.module.css";
import Sun from "../Sun";

const BackgroundImg: NextPage = () => {
  return (
    <header className={style.backgroundImg}>
      <h1 className={style.title}>T O D O</h1>
      <button className={style.backgButton}>
        <Sun />
      </button>
    </header>
  );
};

export default BackgroundImg;
