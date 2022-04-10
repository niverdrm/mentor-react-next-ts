import type { NextPage } from "next";
import BackgroundImg from "../components/backgroundImg";
import CreateHomework from "../components/createHomework";
import Filter from "../components/filter";
import ListHomework from "../components/listHomework";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <BackgroundImg />
      <CreateHomework />
      <ListHomework />
      <Filter />
    </div>
  );
};

export default Home;
