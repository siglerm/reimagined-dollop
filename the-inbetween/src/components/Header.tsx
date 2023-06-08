import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Header.module.css";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.iconContainer}>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </Link>
        <Link href="/about">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </Link>
      </div>
    </div>
  );
}
