import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene3() {
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
        <p>
          The cobblestone path unfolds before you across the sands of a beach
          and vanishing into the ocean.
        </p>
        <p className={styles.textThought}>
          I&apos;m not going back that way it seems...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene4">
          <button className={styles.choiceButton}>Turn forward</button>
        </Link>
        <Link href="scene5">
          <button className={styles.choiceButton}>
            Run and jump into the Ocean
          </button>
        </Link>
      </div>
    </div>
  );
}
