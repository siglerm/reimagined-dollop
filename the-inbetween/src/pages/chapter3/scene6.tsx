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
        <p>You head down the path where the beast once was.</p>
        <p>
          You continue to walk for what feels like forever until you find a tree
          stump along the road.
        </p>
        <p className={styles.textThought}>I could use a bit of a rest...</p>
        <p>You decide to sit for a moment and catch your breath.</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene7">
          <button className={styles.choiceButton}>Doze off...</button>
        </Link>
      </div>
    </div>
  );
}
