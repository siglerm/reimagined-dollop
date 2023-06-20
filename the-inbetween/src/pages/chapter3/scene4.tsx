import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene4() {
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
        <p>You turn back to where you were first facing and the beast is gone.</p>
        <p className={styles.textThought}>Well... who knows if it&apos;s really gone or if it decided to no longer be seen...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene6">
          <button className={styles.choiceButton}>Head down the path</button>
        </Link>
        <Link href="scene5">
          <button className={styles.choiceButton}>Run and jump into the Ocean</button>
        </Link>
      </div>
    </div>
  );
}
