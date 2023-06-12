import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import styles from "../../styles/Scene.module.css";

export default function Scene1() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/Chapter1:scene1.png"
          width={500}
          height={450}
          alt="Picture of a forest with red trees, dense fog"
        />
      </div>
      <div className={styles.textContainer}>
        <p>You open your eyes to an unfamiliar land...</p>
        <p>
          You take a deep breath and the air fills your lungs, it&apos;s
          coolness strangely akin to the sensation of being submerged in water.
        </p>
        <p>
          The air crackles with an electrifying vibrancy, tingling against your
          skin.
        </p>
        <p className={styles.textThought}>
          I&apos;ll have to get used to it, because I have no idea how I got
          here...
        </p>
        <p>You sit up and look around.</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.choiceButton}>Look Left</button>
        <button className={styles.choiceButton}>Look Right</button>
      </div>
    </div>
  );
}
