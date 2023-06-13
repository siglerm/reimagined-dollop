import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene2() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/Chapter1:scene2.png"
          width={500}
          height={450}
          alt="Picture of a forest with red trees, birds circling in the air, dense canopies"
        />
      </div>
      <div className={styles.textContainer}>
        <p>You see nothing but trees.</p>
        <p>
          You stare a bit longer and see shadows darting in the canopies of the
          trees...
        </p>
        <p className={styles.textThought}>
          I don&apos;t want to go that way...
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={"/chapter1/scene3"}>
          <button className={styles.choiceButton}>Look the other way</button>
        </Link>
        <Link href={"/chapter2/scene1"}>
          <button className={styles.choiceButton}>Turn around</button>
        </Link>
      </div>
    </div>
  );
}
