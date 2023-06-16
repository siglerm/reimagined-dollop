import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene2() {
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
        <p className={styles.textThought}>Are you crazy?</p>
        <p className={styles.textThought}>
          I&apos;m all for cute and cuddly, not for mysterious and ominously
          threatening...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene3">
          <button className={styles.choiceButton}>
            Open your mouth to speak
          </button>
        </Link>
      </div>
    </div>
  );
}
