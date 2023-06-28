import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene12() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* <Image
          src="/Chapter1:scene2.png"
          width={500}
          height={450}
          alt="Picture of a forest with red trees, birds circling in the air, dense canopies"
        /> */}
      </div>
      <div className={styles.textContainer}>
        <p className={styles.villageText}>
          We are those who dwell in the inbetween...
        </p>
        <p className={styles.villageText}>
          Caught betwixt both realms, yearning to leave.
        </p>
        <p className={styles.villageText}>
          We must wait for our opportunity to leave...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene7">
          <button className={styles.choiceButton}>Doze off...</button>
        </Link>
      </div>
    </div>
  );
}
