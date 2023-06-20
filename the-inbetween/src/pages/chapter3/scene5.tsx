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
        <p className={styles.textThought}>
          I don&apos;t have time to joke around!
        </p>
        <p className={styles.textThought}>I need to get out of here!</p>
        <p className={styles.textThought}>It would be fun though...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene6">
          <button className={styles.choiceButton}>Head down the path</button>
        </Link>
      </div>
    </div>
  );
}
