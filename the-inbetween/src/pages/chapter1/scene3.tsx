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
        <p>You get hit with a dry, arid breeze.</p>
        <p>Desert as far as the eye can see.</p>
        <p>
          You focus a bit more and see a flock of birds circling over
          something...
        </p>
        <p className={styles.textThought}>
          I definitely don&apos;t want to go that way...
        </p>
        <p>A shiver runs down your spine...</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/chapter1/scene2">
          <button className={styles.choiceButton}>Look the other way</button>
        </Link>
        <Link href={"/chapter2/scene1"}>
          <button className={styles.choiceButton}>Turn around</button>
        </Link>
      </div>
    </div>
  );
}
