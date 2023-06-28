import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene11() {
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
          What we are and where we come from, do not matter.
        </p>
        <p className={styles.villageText}>We are here now...</p>
        <p className={styles.villageText}>We are here together...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene12">
          <button className={styles.choiceButton}>Who are you?</button>
        </Link>
        <Link href="scene13">
          <button className={styles.choiceButton}>Can you help me?</button>
        </Link>
      </div>
    </div>
  );
}
