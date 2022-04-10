import React from "react";
import Iconcross from "../Iconcross";
import style from "../listHomework/listHomework.module.css";
import { NextPage } from "next";

const ListHomework: NextPage = () => {
  return (
    <div className={style.listHomework}>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input
            type="text"
            defaultValue={"Complete online JavaScript course"}
          />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input type="text" placeholder="Jog around park 3x" />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input type="text" placeholder="10 minutes meditation" />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input type="text" placeholder="Read for 1 hour" />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input type="text" placeholder="Pick up groceries" />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.homework}>
        <div>
          <input type="radio" />
          <input
            type="text"
            placeholder="Complete Todo App on Frontend Mentor"
          />
        </div>
        <button>
          <Iconcross />
        </button>
      </div>
      <div className={style.ClearComplete}>
        <div>
          <p> 5 items left</p>
        </div>
        <button>Clear completed</button>
      </div>
    </div>
  );
};

export default ListHomework;
