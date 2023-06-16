import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene6() {
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
        <p className={styles.beastText}>
          What and how are not important, only what you choose to do next.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene5">
          <button className={styles.choiceButton}>Where should I go?</button>
        </Link>
        <Link href="scene7">
          <button className={styles.choiceButton}>
            Can I at least know where I am?
          </button>
        </Link>
      </div>
    </div>
  );
}
