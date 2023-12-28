import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <nav className={styles.sideBar}>
        <span
          className={styles.logo}
          onClick={() => {
            document.location.hash === ""
              ? document.getElementById("main")?.scrollIntoView()
              : (document.location.hash = "");
          }}
        >
          AM<span>.</span>
        </span>
        <div className={styles.navLinks}>
          <a
            href="#about"
            onClick={() => {
              setSelected("about");
            }}
            className={selected === "about" ? styles.selected : ""}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setSelected("projects")}
            className={selected === "projects" ? styles.selected : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setSelected("contact")}
            className={selected === "contact" ? styles.selected : ""}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};
