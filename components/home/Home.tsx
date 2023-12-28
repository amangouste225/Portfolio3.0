import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
          {/* <div
            style={{
              height: "20px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          /> */}
        </main>
      </div>
    </>
  );
};
