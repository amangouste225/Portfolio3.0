import { MouseEventHandler } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import styles from "./outlinebutton.module.scss";
import Link from "next/link";

interface Props {
  children: string | JSX.Element;
  link: string;
}

export const OutlineButton = ({ children, link }: Props) => {
  return (
    <Link href={link} target="_blank" className={styles.outlineButton}>
      {children}
      <AiFillFilePdf size="2.4rem" />
    </Link>
  );
};
