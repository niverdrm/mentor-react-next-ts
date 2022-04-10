import { NextPage } from "next";

import style from "../createHomework/createHomework.module.css";

const CreateHomework: NextPage = () => {
  return (
    <div className={style.homework}>
      <input type="radio" />
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
};

export default CreateHomework;
