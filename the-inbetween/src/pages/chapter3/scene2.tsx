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
        <p>
          You look down and realize that you&apos;ve been sitting on a
          cobblestone path the whole time.
        </p>
        <p>
          The path itself is mossy and overgrown, but the stones underneath seem
          to be in no worse condition then when they were first acquired.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene3">
          <button className={styles.choiceButton}>Look behind you</button>
        </Link>
      </div>
    </div>
  );
}
