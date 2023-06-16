import { useRouter } from "next/router";
import styles from "../../styles/Scene.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Scene1() {
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
        <p className={styles.bestThought}>
          Child, do what you have always done.
        </p>
        <p className={styles.bestThought}>
          Follow the path laid bare before you and remain vigilant for the signs
          that guide your way.
        </p>
        <p className={styles.bestThought}>
          You may not have realized it, but you have been walking this path all
          along.
        </p>
        <p className={styles.bestThought}>
          The echoes of your past have silently shaped your present, leading you
          to this very moment.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="scene2">
          <button className={styles.choiceButton}>Look down</button>
        </Link>
      </div>
    </div>
  );
}
