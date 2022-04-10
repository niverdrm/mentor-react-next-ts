import { NextPage } from "next";
import style from "../filter/filter.module.css";

const Filter: NextPage = () => {
  return (
    <div className={style.homework}>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
      <p>Drag and drop to reorder list</p>
    </div>
  );
};

export default Filter;
