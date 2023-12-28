import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { StandardButton } from "@/components/buttons/StandardButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <div>
          <p className={styles.design}>Have a design in mind?</p>
        </div>
        <div>
          <h3 className={styles.contactTitle}>Let’s connect !</h3>
        </div>
        <div className={styles.contactForm}>
          <StandardButton
            title="Get in touch"
            link="mailto:amangouakacouange@gmail.com"
          >
            <FaRegEnvelopeOpen />
          </StandardButton>
          <StandardButton
            title="Message me"
            link="https://www.linkedin.com/in/angethierry/"
          >
            <FaLinkedinIn />
          </StandardButton>
        </div>
      </div>
    </section>
  );
};
