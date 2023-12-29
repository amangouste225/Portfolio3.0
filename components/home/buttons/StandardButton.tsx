import { MouseEventHandler, ReactNode } from "react";
import styles from "./standardbutton.module.scss";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  link: string;
}

export const StandardButton = ({ children, onClick, title, link }: Props) => {
  return (
    <a
      target="_blank"
      href={link}
      className={styles.standardButton}
      title={title}
    >
      {children}
      {title}
    </a>
  );
};
