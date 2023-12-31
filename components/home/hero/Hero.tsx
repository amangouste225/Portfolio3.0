import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <Image
        src="/stars2.svg"
        width="150"
        height="150"
        className={styles.stars2}
        alt="stars"
      />
      <div className={styles.heroGrid}>
        <Image
          src="/stars.svg"
          width="150"
          height="150"
          className={styles.stars}
          alt="stars"
        />
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Amangoua<span></span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>Ange-Thierry.</h2>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.div>
      </div>
    </section>
  );
};
